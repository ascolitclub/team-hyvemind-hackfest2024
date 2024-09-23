import time
from dotenv import load_dotenv, find_dotenv
import googlemaps

load_dotenv(find_dotenv())

GOOGLE_MAPS_API_KEY = "AIzaSyChRHG8gb0TwMq2YOdf_djXNkDxtokdAJI"

location = (27.7219, 85.324)  
radius = 50000 

def fetch_hostels():
    gmaps = googlemaps.Client(key=GOOGLE_MAPS_API_KEY)
    all_hostels = []
    next_page_token = None

    try:
        while True:
            places = gmaps.places_nearby(
                location=location,
                radius=radius,
                keyword="hostels", 
                open_now=False,
                page_token=next_page_token
            )

            excluded_types = {"bar", "restaurant", "travel_agency", "food"}
            
            hostels = [
                place for place in places['results']
                if 'lodging' in place.get('types', []) and
                'hostel' in place['name'].lower() and
                not any(t in excluded_types for t in place.get('types', []))
            ]
            
            all_hostels.extend(hostels)

            next_page_token = places.get('next_page_token')
            if not next_page_token:
                break

            time.sleep(2)

        print('Total Hostels Found:', len(all_hostels))
        return all_hostels

    except Exception as e:
        print(f"Error fetching hostels: {e}")
        return []

