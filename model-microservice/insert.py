import json
import os
from map.helper.map import fetch_hostels
from utils.formatJson import format_place_data
from database.connect import client

def insertSeeder():
    try:
            # hostels = fetch_hostels()
            # data = format_place_data(hostels)
            jsonData = None
            json_path = os.path.join(os.getcwd(), 'jsonDatas', 'place.json')
            
            with open(json_path, 'r') as content:
                jsonData = json.load(content) 
                print('Data loaded into JSON')

            map_db = client.get_database('hackathon-db')
            map_collection =  map_db.get_collection('map-collection')
            inserted = map_collection.insert_many(jsonData).inserted_ids
    
        
    except Exception as e:
            print(f'Error occurred: {e}')
            

if __name__ == "__main__":
      insertSeeder()
