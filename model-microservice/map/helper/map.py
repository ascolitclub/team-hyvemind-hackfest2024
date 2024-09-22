import os
import requests
from dotenv import load_dotenv, find_dotenv
from libs.logger import logger
import googlemaps
import json

load_dotenv(find_dotenv())


GOOGLE_MAPS_API_KEY = "AIzaSyChRHG8gb0TwMq2YOdf_djXNkDxtokdAJI"


location = (27.7219, 85.324)  
radius = 5000 

def fetch_hostels():
    gmaps = googlemaps.Client(key=GOOGLE_MAPS_API_KEY)

    try:
        places = gmaps.places_nearby(
            location=location,
            radius=radius,
            keyword="hostels",
            open_now=False
        )
        return places['results']
    except Exception as e:
        print(f"Error fetching hostels: {e}")
        return []

def generate_json_files(hostels):
    for hostel in hostels:
        # Create the JSON filename
        filename = f"hostel_{hostel['place_id']}.json"
        with open(filename, 'w') as f:
            json.dump({
                "name": hostel.get("name"),
                "place_id": hostel.get("place_id"),
                "geometry": hostel.get("geometry"),
                "address": hostel.get("vicinity"),
                "rating": hostel.get("rating"),
                "user_ratings_total": hostel.get("user_ratings_total"),
                # Note: Amenities may require a separate details request
            }, f, indent=4)


