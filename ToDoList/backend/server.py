from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv
from DB_connection import DatabaseConnnector

load_dotenv()
app = Flask(__name__)
CORS(app)

db = DatabaseConnnector()


@app.route('/api/todolists/<int:list_id>', methods=['PUT', 'DELETE'])
def update_or_delete_list(list_id):
    if request.method == 'PUT':
        list_title = request.json
        if list_title:
            update_list_title(list_id, list_title)
            return jsonify({"message": "List title updated successfully"}), 200
        else:
            return jsonify({"error": "New title not provided"}), 400
    if request.method == 'DELETE':
        delete_list(list_id)
        return jsonify({"message": "List deleted successfully"}), 200


def delete_list(list_id):
    query = "DELETE FROM todolists WHERE id = %s"
    db.execute_query(query, (list_id,))


def update_list_title(list_id, new_title):
    query = "UPDATE todolists SET title = %s WHERE id = %s"
    db.execute_query(query, (new_title['title'], list_id))
    if new_title:
        return jsonify({"message": "List title updated successfully"}), 200


@app.route('/api/todolists', methods=['GET', 'POST'])
def to_do_lists():
    if request.method == 'GET':
        username = request.args.get('username')
        user_id = fetch_user_id(username)
        if user_id is not None:
            lists_data = fetch_lists_data(user_id)
            return jsonify(lists_data)
        else:
            return jsonify({"error": "User not found"}), 404
    elif request.method == 'POST':
        list_data = request.json
        add_list(list_data)
        return jsonify({"message": "List added successfully"}), 201


def add_list(list_data):
    username = list_data.get('username')
    title = list_data.get('title')

    if not username or not title:
        return jsonify({"error": "Missing username or title"}), 400

    user_id = fetch_user_id(username)
    if user_id is not None:
        if can_create_new_list(user_id):
            query = "INSERT INTO todolists (user_id, title) VALUES (%s,%s)"
            new_list = db.execute_query(query, (user_id, title))
            if new_list:
                return jsonify({"message": "Todo list created successfully"}), 201
            else:
                return jsonify({"error": "Failed to create todo list"}), 500
        else:
            return jsonify({"error": "User has reached maximum todo list limit"}), 400
    else:
        return jsonify({"error": "User not found"}), 404


def can_create_new_list(user_id):
    query = "SELECT COUNT(*) FROM todolists WHERE user_id = %s"
    result = db.fetch_data(query, (user_id,))
    return result[0][0] < 4


def fetch_lists_data(user_id):
    query = "SELECT id, title FROM todolists WHERE user_id = %s"
    todolists = db.fetch_data(query, (user_id,))
    todolists_data = [{"id": row[0], "title": row[1]} for row in todolists]
    return todolists_data


@app.route('/api/tasks', methods=['GET', 'POST'])
def tasks():
    if request.method == 'GET':
        todolist_id = request.args.get('todolist_id')
        if todolist_id is not None:
            tasks_data = fetch_tasks(todolist_id)
            return jsonify(tasks_data)
        else:
            return jsonify({"error": "todolist_id parameter missing"}), 400
    elif request.method == 'POST':
        task_data = request.json
        add_task(task_data)
        return jsonify({"message": "Task added successfully"}), 201


def add_task(task_data):
    todolist_id = task_data.get('todolist_id')
    title = task_data.get('title')
    category = task_data.get('category')
    notes = task_data.get('notes')
    status = task_data.get('status')

    if not title or not todolist_id:
        return jsonify({"error": "Missing title"}), 400

    query = "INSERT INTO tasks (todolist_id, title, category, notes, status) VALUES (%s, %s, %s, %s, %s)"
    new_task = db.execute_query(
        query, (todolist_id, title, category, notes, status))
    if new_task:
        return jsonify({"message": "Task created successfully"}), 201
    else:
        return jsonify({"error": "Failed to create todo list"}), 500


def fetch_tasks(todolist_id):
    query = "SELECT id, title, category, notes, attachment, created_at, status, due_date FROM tasks WHERE todolist_id = %s"
    tasks = db.fetch_data(query, (todolist_id,))
    tasks_data = []
    for row in tasks:
        task = {
            "id": row[0],
            "title": row[1],
            "category": row[2],
            "notes": row[3],
            "attachment": row[4],
            "created_at": row[5],
            "status": row[6],
            "due_date": row[7],
        }
        tasks_data.append(task)

    return tasks_data


@app.route('/api/tasks/<int:task_id>', methods=['PUT', 'DELETE'])
def update_or_delete_tasks(task_id):
    if request.method == 'DELETE':
        delete_task(task_id)
        return jsonify({"message": "Task deleted successfully"}), 200


def delete_task(todolist_id):
    query = "DELETE FROM tasks WHERE id = %s"
    db.execute_query(query, (todolist_id,))


@app.route('/api/users', methods=['GET', 'POST'])
def users():
    if request.method == 'GET':
        username = request.args.get('username')
        password = request.args.get('password')
        isId = request.args.get('isId')
        if username and not password:
            user_data = fetch_user(username)
            if user_data:
                return jsonify(user_data), 200
            else:
                return jsonify({"error": "User not found"}), 404
        elif username and password and not isId:
            response = check_user(username, password)
            if response:
                return jsonify({"message": "User found"}), 200
            else:
                return jsonify({"error": "User not found"}), 404
        elif username and isId and not password:
            user_id = fetch_user_id(username)
            if user_id:
                return user_id
            else:
                return None

    elif request.method == 'POST':
        user_data = request.json
        add_user(user_data)
        return jsonify({"message": "User added successfully"}), 201


def fetch_user_id(username):
    query = "SELECT id FROM users WHERE username = %s"
    user_id = db.fetch_data(query, (username,))
    if user_id:
        return user_id[0]
    else:
        return None


def fetch_user(username):
    query = "SELECT username, img FROM users WHERE username = %s"
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
    query = "SELECT username, password FROM users WHERE username = %s AND password = %s"
    response = db.fetch_data(query, (username, password,))
    if response:
        return True
    else:
        return False


def add_user(user_data):
    query = "INSERT INTO users (username, password, img) VALUES (%s, %s, %s)"
    user_response = db.execute_query(
        query, (user_data['username'], user_data['password'], user_data['img']))
    if user_response:
        return jsonify({"message": "User created successfully"}), 201
    else:
        return jsonify({"error": "An error occurred. Please try again."}), 500


if __name__ == '__main__':
    app.run(host=os.getenv("DB_HOST"), port=os.getenv("DB_DEP_PORT"))
    db.close_connection()
