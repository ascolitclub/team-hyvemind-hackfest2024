import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import StandardScaler
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.cluster import KMeans
from extractor.extractHotel import map_hotelList
from models.dataPreparation.index import extract_hostel_data

map_data = map_hotelList()
extract_data = extract_hostel_data(map_data)
hostel_df = pd.DataFrame(extract_data)


scaler = StandardScaler()
hostel_features = hostel_df[['rating', 'user_ratings_total']]
scaled_features = scaler.fit_transform(hostel_features)


def compute_svd(data, variance_threshold=0.95):
    """Compute SVD with a dynamic number of components based on explained variance."""
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


def apply_clustering(data, n_clusters=3):
    """Cluster data using K-Means and return labels."""
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    clusters = kmeans.fit_predict(data)
    return clusters

svd_df['cluster'] = apply_clustering(hostel_matrix, n_clusters=3)

def recommend_hotels_with_name(hotel_name, n_recommendations=3):
    """Recommend similar hotels based on cosine similarity of SVD components."""
    if hotel_name not in svd_df['name'].values:
        raise ValueError(f"Hotel '{hotel_name}' not found in dataset.")
    

    hotel_vector = svd_df[svd_df['name'] == hotel_name].iloc[:, :-2].values
    
  
    similarities = cosine_similarity(hotel_vector, svd_df.iloc[:, :-2].values).flatten()
    
   
    svd_df['similarity'] = similarities
    recommendations = svd_df[svd_df['name'] != hotel_name].sort_values(by='similarity', ascending=False)
    
    return recommendations[['name', 'similarity']].head(n_recommendations)


# recommended_hotels = recommend_hotels_wut('Monkey Bunky', n_recommendations=3)
# print("Recommended Hotels:")
# print(recommended_hotels)
