import numpy as np
import pandas as pd
from geopy.distance import geodesic
from sklearn.preprocessing import LabelEncoder, StandardScaler
from flask import Flask, request, jsonify
from database.connect import client
from bson import ObjectId


map_db = client.get_database('hackathon-db')
map_collection = map_db.get_collection('map-collection')
data = list(map_collection.find({}))  
df = pd.DataFrame(data) 


def has_members(x):
    return isinstance(x, list) and len(x) > 0

df = df[df['hostel_members'].apply(has_members)]
df['faculty'] = df['hostel_members'].apply(lambda x: x[0]['faculty'] if x else None)


faculty_encoder = LabelEncoder()
df['faculty_encoded'] = faculty_encoder.fit_transform(df['faculty'])

df['latitude'] = df['location'].apply(lambda x: x['latitude'])
df['longitude'] = df['location'].apply(lambda x: x['longitude'])

def calculate_geodesic_distance(user_lat, user_long, hostel_lat, hostel_long):
    user_location = (user_lat, user_long)
    hostel_location = (hostel_lat, hostel_long)
    return geodesic(user_location, hostel_location).kilometers


def convert_objectid_to_str(data):
    if isinstance(data, list):
        return [convert_objectid_to_str(item) for item in data]
    elif isinstance(data, dict):
        return {key: (str(value) if isinstance(value, ObjectId) else convert_objectid_to_str(value)) for key, value in data.items()}
    return data


def get_recommendations_location(user_latitude, user_longitude, user_faculty):

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

   
    filtered_hostels = df[(df['distance'] <= 10) & (df['faculty_encoded'] == user_faculty_encoded)]

    if filtered_hostels.empty:
        return {"error": "No hostels found within the specified distance for the given faculty."}


    recommended_hostels = filtered_hostels.sort_values(by='distance')

    
    detailed_recommendations = convert_objectid_to_str(recommended_hostels.to_dict(orient='records'))

    return detailed_recommendations

