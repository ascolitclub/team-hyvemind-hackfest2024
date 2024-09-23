from flask_smorest import Blueprint
from flask.views import MethodView
from flask import jsonify
from bson import ObjectId
from libs.logger import logger
from models.trainModel.model1 import recommend_hostels
from extractor.extractmodel import recommend_hotel_api
from services.hostelservice import getHostelById
blp = Blueprint('hostel', __name__, description='Hostel Routes')
from flask import request

@blp.route('/hostel/popular')
class PopularHostel(MethodView):
    def get(self):
        try:
            data = recommend_hostels()
            print(data)
            result = recommend_hotel_api(data)

            if not result:
                return jsonify({"message": "No popular hostels found."}), 404

            return jsonify({"result": result}), 200
        except Exception as e:
            logger.error(f'Error fetching popular hostels: {e}')
            return jsonify({"error": "An error occurred while fetching popular hostels."}), 500


@blp.route('/hostel/<string:hostelId>')
class Hostel(MethodView):
    def get(self, hostelId):
        try:
            # Fetch the hostel by ID
            response = getHostelById(hostelId=ObjectId(hostelId)) 
            logger.info('Fetched hostel response: %s', response)

            if response and '_id' in response:
                response['_id'] = str(response['_id'])  # Convert ObjectId to string
            
            # Structure the response
            return jsonify({'data': response}), 200

        except Exception as e:
            logger.error(f'Error fetching particular hostel: {e}')
            return jsonify({'error': 'An error occurred while fetching the hostel ID'}), 500
        




@blp.route('/recommend')
class Hostel(MethodView):

    try:

        pass




    except Exception as e:
        print(f' Error in the Hostel {e}')
