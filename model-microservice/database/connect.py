from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
import os

url = "mongodb+srv://codefortanke:5fkjTmJvIrHeRWsD@cluster0.xlsf0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
try:
    client = MongoClient(url)
    client.admin.command('ping')
    print('Database Connected')
except ConnectionFailure:
    print('Database Does Not Connected')
