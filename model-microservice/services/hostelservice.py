
from database.connect import client
from bson.objectid import ObjectId
from bson.errors import InvalidId

def is_valid_object_id(object_id):
    try:
        ObjectId(object_id)
        return True
    except (InvalidId, TypeError):
        return False


def getHostelById(hostelId):
    print(hostelId)
    if not is_valid_object_id(hostelId):
        print(f'Invalid ObjectId: {hostelId}')
        return None
    
    try:
        print(f'Fetching hostel with ID: {hostelId}')
        map_db = client.get_database('hackathon-db')
        map_collection = map_db.get_collection('map-collection')
        hostel = map_collection.find_one({"_id": hostelId})
        print(f'Hostel data retrieved: {hostel}')
        return hostel

    except Exception as e:
        print(e)
        print(f'Error fetching hostel: {e}')
        return None