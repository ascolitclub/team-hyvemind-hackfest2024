from flask_smorest import Blueprint
from flask.views import MethodView
from flask import jsonify
from libs.logger import logger
from map.helper.map import fetch_hostels, generate_json_files
from constant.mapConstant import GOOGLE_MAPS_API_KEY, bounds
from utils.formatJson import format_place_data
from database.connect import client
from models.trainModel.model1 import recommend_hostels
from extractor.extractmodel import recommend_hotel_api
import os
import json

blp = Blueprint('hostel', __name__, description='Hostel Routes')

@blp.route('/hostel/popular')
class PopularHostel(MethodView):
    def get(self):
        try:
            data = recommend_hostels()
            result = recommend_hotel_api(data)

            if not result:
                return jsonify({"message": "No popular hostels found."}), 404

            return jsonify({"result": result}), 200
        except Exception as e:
            logger.error(f'Error fetching popular hostels: {e}')
            return jsonify({"error": "An error occurred while fetching popular hostels."}), 500



@blp.route('/hostel')
class Hostel(MethodView): 
    def post(self):
        try:
            hostels = fetch_hostels()
            data = format_place_data(hostels)
            json_path = os.path.join(os.getcwd(), 'jsonDatas', 'place.json')
            
            with open(json_path, 'w') as content:
                json.dump(data, content) 
                logger.info('Data loaded into JSON')

            map_db = client.get_database('hackathon-db')
            map_collection =  map_db.get_collection('map-collection')
            inserted = map_collection.insert_many(hostels).inserted_ids
            return jsonify({
                "message":"Hostel Data Initialized",
                "hostel_id":str([*inserted])
            }) , 201
        
        except Exception as e:
            logger.error(f'Error occurred: {e}')
            return jsonify({"error": "An error occurred"}), 500
