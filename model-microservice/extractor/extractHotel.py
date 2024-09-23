from database.connect import client

def map_hotelList():
    hotels_list = []
    try:
        map_db = client.get_database('hackathon-db')
        map_collection = map_db.get_collection('map-collection')

        respond_data = list(map_collection.find())
       
        for item in respond_data:
            payload = {
                "name": item.get('name'),
                "rating": item.get('rating'),
                "user_ratings_total": item.get('user_ratings_total'),
                "location": item.get('geometry', {}).get('location'),
                "address": item.get('vicinity'),
                "photos": item.get('photos', []), 
                "place_id": item.get('place_id')
            }
            hotels_list.append(payload)

        print(hotels_list)
        return hotels_list

    except Exception as e:
        print(f'Error occurred: {e}')
