import numpy as np
import pandas as pd
from geopy.distance import geodesic
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
import xgboost as xgb
from flask import Flask, request, jsonify
from database.connect import client
from bson import ObjectId

map_db = client.get_database('hackathon-db')
map_collection =map_db.get_collection('map-collection')
data = list(map_collection.find({}))
df = pd.DataFrame(data)
print("DataFrame structure before filtering:\n", df.head())
print("DataFrame columns:", df.columns)


def has_members(x):
    return isinstance(x, list) and len(x) > 0


df = df[df['hostel_members'].apply(has_members)]


df['faculty'] = df['hostel_members'].apply(lambda x: x[0]['faculty'] if x else None)


print("Updated DataFrame structure after filtering:\n", df.head())

df['faculty'] = df['hostel_members'].apply(lambda x: x[0]['faculty'] if x else None)


print("DataFrame structure:\n", df.head())
print("DataFrame columns:", df.columns)


faculty_encoder = LabelEncoder()
df['faculty_encoded'] = faculty_encoder.fit_transform(df['faculty'])


df['latitude'] = df['location'].apply(lambda x: x['latitude'])
df['longitude'] = df['location'].apply(lambda x: x['longitude'])


def calculate_geodesic_distance(user_lat, user_long, hostel_lat, hostel_long):
    user_location = (user_lat, user_long)
    hostel_location = (hostel_lat, hostel_long)
    return geodesic(user_location, hostel_location).kilometers


features = ['rating', 'price', 'user_ratings_total', 'faculty_encoded', 'latitude', 'longitude']

df['satisfaction_score'] = np.random.uniform(0, 1, len(df))  # Mock target


scaler = StandardScaler()
scaled_features = scaler.fit_transform(df[features])


X_train, X_test, y_train, y_test = train_test_split(scaled_features, df['satisfaction_score'], test_size=0.2, random_state=42)


model = xgb.XGBRegressor(n_estimators=100, learning_rate=0.1, max_depth=6, random_state=42)
model.fit(X_train, y_train)


def convert_objectid_to_str(data):
    """Convert ObjectId fields in the data to strings."""
    if isinstance(data, list):
        return [convert_objectid_to_str(item) for item in data]
    elif isinstance(data, dict):
        return {key: (str(value) if isinstance(value, ObjectId) else convert_objectid_to_str(value)) for key, value in data.items()}
    return data

def get_recommendations(user_latitude, user_longitude, user_price, user_faculty):
    # Input validation
    if not isinstance(user_price, (int, float)) or user_price <= 0:
        return {"error": "Price must be a positive number."}
    
    if not (-90 <= user_latitude <= 90):
        return {"error": "Latitude must be between -90 and 90."}
    
    if not (-180 <= user_longitude <= 180):
        return {"error": "Longitude must be between -180 and 180."}
    
    if user_faculty not in df['faculty'].unique():
        return {"error": "Invalid faculty. Please provide a valid faculty."}

    user_faculty_encoded = faculty_encoder.transform([user_faculty])[0]

    df['distance'] = df.apply(
        lambda row: calculate_geodesic_distance(user_latitude, user_longitude, row['latitude'], row['longitude']),
        axis=1
    )

   
    filtered_hostels = df[df['distance'] <= 10]

    if filtered_hostels.empty:
        return {"error": "No hostels found within the specified distance."}

    average_rating = filtered_hostels['rating'].mean()

    total_user_ratings = filtered_hostels['user_ratings_total'].sum()


    user_query = pd.DataFrame({
        'rating': [average_rating],  
        'price': [user_price],
        'user_ratings_total': [total_user_ratings],  
        'faculty_encoded': [user_faculty_encoded],
        'latitude': [user_latitude],
        'longitude': [user_longitude]
    })


    user_query_scaled = scaler.transform(user_query)


    filtered_hostels['predicted_score'] = model.predict(scaler.transform(filtered_hostels[features]))


    recommended_hostels = filtered_hostels.sort_values(by='predicted_score', ascending=False)


    top_recommendations = recommended_hostels.head(5)


    recommended_names = top_recommendations['name'].tolist()


    detailed_recommendations = df[df['name'].isin(recommended_names)]


    detailed_recommendations = convert_objectid_to_str(detailed_recommendations.to_dict(orient='records'))


    return detailed_recommendations