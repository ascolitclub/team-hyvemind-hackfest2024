from flask import Flask,jsonify
from flask_smorest import Api
from flask_cors import CORS
from resources.Hostel import blp as HostelBluePrint


app = Flask(__name__)
CORS(app, origins="http://localhost:5173")  # Allow requests from Vite frontend


app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['API_TITLE'] = 'Model Rest Api'
app.config['API_VERSION'] = 'v1'
app.config['OPENAPI_VERSION'] = '3.0.3'
app.config['OPENAPI_URL_PREFIX'] = '/'
app.config['OPENAPI_SWAGGER_UI_PATH'] = '/swagger-ui'
app.config['OPENAPI_SWAGGER_UI_URL'] = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/'

api = Api(app=app)

api.register_blueprint(HostelBluePrint)

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=str(3002),debug=True)
