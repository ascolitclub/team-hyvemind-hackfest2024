def extract_hostel_data(hostels):
   
    data = {
        "name": [],
        "rating": [],
        "user_ratings_total": []
    }
    

    for hostel in hostels:
        data["name"].append(hostel["name"])
        data["rating"].append(hostel["rating"])
        data["user_ratings_total"].append(hostel["user_ratings_total"])
    
    return data


def extract_recommend_hostel_data(hostels):
    data = {
        "name": [],
        "rating": [],
        "user_ratings_total": [],
        "latitude": [],
        "longitude": [],
        "address": []
    }
    
    for hostel in hostels:
        location = hostel["location"]
        data["name"].append(hostel["name"])
        data["rating"].append(hostel["rating"])
        data["user_ratings_total"].append(hostel["user_ratings_total"])
        data["latitude"].append(location['lat'] if location else None)
        data["longitude"].append(location['lng'] if location else None)
        data["address"].append(hostel["address"])
    
    return data
