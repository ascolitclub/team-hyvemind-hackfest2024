import json

def format_place_data(raw_data):
    print(raw_data)
    formatted_data = []
    
    for place in raw_data:
        if isinstance(place, dict):  # Ensure place is a dictionary
            formatted_place = {
                "name": place.get("name"),
                "rating": place.get("rating"),
                "user_ratings_total": place.get("user_ratings_total"),
                "location": {
                    "latitude": place["geometry"]["location"]["lat"],
                    "longitude": place["geometry"]["location"]["lng"]
                },
                "address": place['address'],
                "place_id": place['place_id'],
              
                "photos": [
                    {
                        "photo_reference": photo["photo_reference"],
                    }
                    for photo in place
                ]
            }
            formatted_data.append(formatted_place)
        else:
            print(f"Warning: Expected a dictionary but got {type(place)}: {place}")

    print('This is the formatted data:', formatted_data)
    
    return formatted_data
