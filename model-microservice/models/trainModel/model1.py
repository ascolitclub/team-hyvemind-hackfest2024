import pandas as pd
import numpy as np
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import StandardScaler
from models.dataPreparation.index import extract_hostel_data
from extractor.extractHotel import map_hotelList

map_data = map_hotelList()
hostel_data = extract_hostel_data(map_data)


hostel_df = pd.DataFrame(hostel_data)
print(f"Extracted hostel DataFrame shape: {hostel_df.shape}")
print(hostel_df.head())  


required_columns = ['rating', 'user_ratings_total']
if not all(col in hostel_df.columns for col in required_columns):
    raise ValueError(f"Missing required columns in DataFrame: {required_columns}")


hostel_features = hostel_df[required_columns]
if hostel_features.empty:
    raise ValueError("Hostel features DataFrame is empty. Please check your data.")


scaler = StandardScaler()
scaled_features = scaler.fit_transform(hostel_features)


svd = TruncatedSVD(n_components=2)
hostel_matrix = svd.fit_transform(scaled_features)

svd_df = pd.DataFrame(hostel_matrix, columns=['component_1', 'component_2'])
svd_df['name'] = hostel_df['name']
svd_df['rating'] = hostel_df['rating']
svd_df['user_ratings_total'] = hostel_df['user_ratings_total']
print(svd_df.head(5).to_dict('records'))

def recommend_hostels(n_recommendations=20):
    sorted_svd_df = svd_df.sort_values(by=['component_1', 'component_2'], ascending=False)
   
    return sorted_svd_df[['name']].head(n_recommendations).to_dict('records')
