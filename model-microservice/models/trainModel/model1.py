import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import StandardScaler
from models.dataPreparation.index import extract_hostel_data
from extractor.extractHotel import map_hotelList

map_data = map_hotelList()

hostel_data = extract_hostel_data(map_data)


hostel_df = pd.DataFrame(hostel_data)


scaler = StandardScaler()
hostel_features = hostel_df[['rating', 'user_ratings_total']]
scaled_features = scaler.fit_transform(hostel_features)


svd = TruncatedSVD(n_components=2)
hostel_matrix = svd.fit_transform(scaled_features)


svd_df = pd.DataFrame(hostel_matrix, columns=['component_1', 'component_2'])

svd_df['name'] = hostel_df['name']
svd_df['rating'] = hostel_df['rating']
svd_df['user_ratings_total'] = hostel_df['user_ratings_total']


def recommend_hostels(n_recommendations=20):
   
    sorted_svd_df = svd_df.sort_values(by=['component_1', 'component_2'], ascending=False)

    
    return sorted_svd_df[['name']].head(n_recommendations).to_dict('records')
