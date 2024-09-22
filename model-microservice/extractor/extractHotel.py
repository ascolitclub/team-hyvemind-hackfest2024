from database.connect import client


def map_hotelList():
    hotels_list = []
    try:
        map_db = client.get_database('hackathon-db')
        map_collection  = map_db.get_collection('map-collection')

        respond_data = list(map_collection.find())
        
        for item in respond_data:
           payload = {
              "name":item['name'],
              "rating":item['rating'],
              "user_ratings_total":item['user_ratings_total'],
              "location":item['geometry']['location'],
              "address":item['vicinity'],
              "photos":item['photos'],
              "place_id":item['place_id']
           }
           hotels_list.append(payload)

        return hotels_list

    except Exception as e:
        print(f'{e}')
