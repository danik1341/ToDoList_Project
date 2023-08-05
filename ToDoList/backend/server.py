from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
from DB_connection import DatabaseConnnector

load_dotenv()
app = Flask(__name__)
CORS(app)

db = DatabaseConnnector()


@app.route('/api/tasks', methods=['GET', 'POST'])
def tasks():
    if request.method == 'GET':
        tasks_data = fetch_tasks()
        return jsonify(tasks_data)


def fetch_tasks():
    query = "SELECT * FROM TEMP"
    tasks = db.fetch_data(query)
    tasks_data = []
    for row in tasks:
        task = {
            "id": row[0],
            "name": row[1],
            "text": row[2]
        }
        tasks_data.append(task)

    return tasks_data


@app.route('/api/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        username = request.args.get('username')
        password = request.args.get('password')
        if username:
            user_data = fetch_user(username)
            if user_data:
                return jsonify(user_data), 200
            else:
                return jsonify({"error": "User not found"}), 404
        elif username and password:
            response = check_user(username, password)
            if response:
                return jsonify({"message": "User found"}), 200
            else:
                return jsonify({"error": "User not found"}), 404

    elif request.method == 'POST':
        user_data = request.json
        add_user(user_data)
        return jsonify({"message": "User added successfully"}), 201


def fetch_user(username):
    query = "SELECT name, img FROM TEMP_USERS WHERE name = %s"
    user = db.fetch_data(query, (username,))
    if user:
        user_data = {
            "name": user[0][0],
            "img": user[0][1],
        }
        return user_data
    else:
        return None


def check_user(username, password):
    query = "SELECT name, password FROM TEMP_USERS WHERE name = %s AND password = %s"
    response = db.fetch_data(query, (username, password,))
    if response:
        return True
    else:
        return False


def add_user(user_data):
    query = "INSERT INTO TEMP_USERS (name, password, img) VALUES (%s, %s, %s)"
    user_response = db.execute_query(
        query, (user_data['username'], user_data['password'], user_data['img']))
    if user_response:
        return jsonify({"message": "User created successfully"}), 201
    else:
        return jsonify({"error": "An error occurred. Please try again."}), 500


if __name__ == '__main__':
    app.run(host=os.getenv("DB_HOST"), port=os.getenv("DB_DEP_PORT"))
    db.close_connection()
