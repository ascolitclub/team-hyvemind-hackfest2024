from flask_smorest import Blueprint
from flask.views import MethodView
from flask import jsonify
from libs.logger import logger
from models.trainModel.model1 import recommend_hostels
from extractor.extractmodel import recommend_hotel_api


blp = Blueprint('hostel', __name__, description='Hostel Routes')

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


