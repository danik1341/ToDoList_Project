from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)

if __name__ == '__main__':
    app.run(host=os.getenv("DB_HOST"), port=os.getenv("DB_DEP_PORT"))
