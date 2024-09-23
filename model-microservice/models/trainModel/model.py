import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.cluster import KMeans
from geopy.distance import geodesic
from extractor.extractHotel import map_hotelList
from models.dataPreparation.index import extract_hostel_data, extract_recommend_hostel_data

map_data = map_hotelList()
extract_data = extract_recommend_hostel_data(map_data)
hostel_df = pd.DataFrame(extract_data)


scaler = StandardScaler()
hostel_features = hostel_df[['rating', 'user_ratings_total']]
scaled_features = scaler.fit_transform(hostel_features)


def compute_svd(data, variance_threshold=0.95):
    """Compute SVD and dynamically select the number of components based on the variance explained."""
    svd = TruncatedSVD(n_components=min(data.shape[0], data.shape[1]-1))
    svd_matrix = svd.fit_transform(data)
    explained_variance = np.cumsum(svd.explained_variance_ratio_)
    
  
    optimal_components = np.argmax(explained_variance >= variance_threshold) + 1
    print(f"Optimal number of components: {optimal_components}")
    

    svd = TruncatedSVD(n_components=optimal_components)
    return svd.fit_transform(data), svd


hostel_matrix, svd_model = compute_svd(scaled_features)


svd_df = pd.DataFrame(hostel_matrix, columns=[f'component_{i}' for i in range(hostel_matrix.shape[1])])
svd_df['name'] = hostel_df['name']
svd_df['latitude'] = hostel_df['latitude']
svd_df['longitude'] = hostel_df['longitude']
svd_df['address'] = hostel_df['address']

def apply_clustering(data, n_clusters=3):
    """Cluster data using K-Means algorithm."""
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    clusters = kmeans.fit_predict(data)
    return clusters


svd_df['cluster'] = apply_clustering(hostel_matrix, n_clusters=3)

def compute_geographical_similarity(lat1, lon1, lat2, lon2):
    """Calculate the geographical similarity based on the geodesic distance between two points."""
    point_1 = (lat1, lon1)
    point_2 = (lat2, lon2)
    return geodesic(point_1, point_2).km

def recommend_hotels_with_name(hotel_name, n_recommendations=3, location_weight=0.3):
    """
    Recommend hotels based on similarity and location proximity.
    
    Parameters:
    - hotel_name: Name of the hotel to base recommendations on.
    - n_recommendations: Number of recommendations to return.
    - location_weight: Weight assigned to geographical distance (range: 0 to 1).
    """
    if hotel_name not in svd_df['name'].values:
        raise ValueError(f"Hotel '{hotel_name}' not found in dataset.")
    

    hotel_row = svd_df[svd_df['name'] == hotel_name].iloc[0]
    hotel_vector = svd_df[svd_df['name'] == hotel_name].iloc[:, :-5].values
    
 
    similarities = cosine_similarity(hotel_vector, svd_df.iloc[:, :-5].values).flatten()
    

    svd_df['geo_distance'] = svd_df.apply(lambda x: compute_geographical_similarity(
        hotel_row['latitude'], hotel_row['longitude'], x['latitude'], x['longitude']), axis=1)
    
   
    svd_df['geo_similarity'] = 1 / (svd_df['geo_distance'] + 1)
    
   
    svd_df['similarity'] = (1 - location_weight) * similarities + location_weight * svd_df['geo_similarity']
    

    recommendations = svd_df[svd_df['name'] != hotel_name].sort_values(by='similarity', ascending=False)
    
    return recommendations[['name', 'similarity', 'latitude', 'longitude', 'address']].head(n_recommendations)


