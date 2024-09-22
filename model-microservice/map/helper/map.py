import os
import requests
from dotenv import load_dotenv,find_dotenv
from libs.logger import logger

load_dotenv(find_dotenv())

GOOGLE_MAPS_API_KEY=os.getenv('GOOGLE_MAPS_API_KEY')

def get_hostel():
    lat = 27.65639942349444
    lng = 85.35119061937837
    radius = 9000
    
    try:
        response = requests.get(
            'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
            params={
                'location': f'{lat},{lng}',
                'radius': radius,
                'type': 'lodging',  
                'keyword': 'hostel', 
                'key': GOOGLE_MAPS_API_KEY
            }
        )
        data = response.json().get('results', [])
        return data


    except Exception as e:
        logger.error(f'Error in getting hostel{e}')
        return None
        