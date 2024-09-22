import json
import os
from map.helper.map import fetch_hostels
from utils.formatJson import format_place_data
from database.connect import client

def insertSeeder():
    try:
            hostels = fetch_hostels()
            data = format_place_data(hostels)
            json_path = os.path.join(os.getcwd(), 'jsonDatas', 'place.json')
            
            with open(json_path, 'w') as content:
                json.dump(data, content) 
                print('Data loaded into JSON')

            map_db = client.get_database('hackathon-db')
            map_collection =  map_db.get_collection('map-collection')
            inserted = map_collection.insert_many(hostels).inserted_ids
         
        
    except Exception as e:
            print(f'Error occurred: {e}')
            

if __name__ == "__main__":
      insertSeeder()
