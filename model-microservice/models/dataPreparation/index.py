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