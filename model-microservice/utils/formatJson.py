import json

def format_place_data(raw_data):
    formatted_data = []
    
    for place in raw_data:
        formatted_place = {
            "name": place.get("name"),
            "rating": place.get("rating"),
            "user_ratings_total": place.get("user_ratings_total"),
            "location": {
                "latitude": place["geometry"]["location"]["lat"],
                "longitude": place["geometry"]["location"]["lng"]
            },
            "address": place.get("vicinity"),
            "place_id": place.get("place_id"),
            "icon": {
                "url": place.get("icon"),
                "background_color": place.get("icon_background_color")
            },
            "photos": [
                {
                    "photo_reference": photo.get("photo_reference"),
                    "dimensions": {
                        "height": photo.get("height"),
                        "width": photo.get("width")
                    },
                    "attribution": photo.get("html_attributions", ["Unknown"])[0]  # Default to "Unknown" if not available
                }
                for photo in place.get("photos", [])
            ]
        }
        formatted_data.append(formatted_place)
    
    return formatted_data
