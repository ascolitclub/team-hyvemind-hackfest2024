from database.connect import client


from database.connect import client

from bson import ObjectId

def recommend_hotel_api(recommend_hotels):
    map_db = client.get_database('hackathon-db')
    map_collection = map_db.get_collection('map-collection')

    respond_data = list(map_collection.find({}))
  
    actual_data = []
    try:

        recommended_names = {hotel['name']: idx for idx, hotel in enumerate(recommend_hotels)}
        
        for data in respond_data:
            if data['name'] in recommended_names:
               
                data['_id'] = str(data['_id'])  
                actual_data.append(data)

        ordered_data = sorted(actual_data, key=lambda x: recommended_names[x['name']])

        return ordered_data

    except Exception as e:
        print(f'Error in recommend_hotel_api: {e}')
        return []
