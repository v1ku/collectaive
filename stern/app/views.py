# views.py
from flask import request, jsonify
from .server import app, socketio, db
from .models import User, Message
from flask_login import login_user, login_required, logout_user, current_user
from flask_socketio import join_room, leave_room
from datetime import datetime

# Registration logic
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']

    if User.query.filter_by(username=username).first() is not None:
        return jsonify({"error": "Username already exists"}), 400

    new_user = User(username=username)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"success": "User registered successfully"}), 201

# Authentication logic
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']

    user = User.query.filter_by(username=username).first()
    if user is None or not user.check_password(password):
        return jsonify({"error": "Invalid username or password"}), 401

    login_user(user)
    return jsonify({"success": "Logged in successfully", "user_id": user.id}), 200

# Logout logic
@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({"success": "Logged out successfully"}), 200

# Add user to the room and broadcast a message
@socketio.on("join_room")
def handle_join_room_event(data):
    username = data["username"]
    room = data["room"]
    join_room(room)
    socketio.emit("user_joined_room", {"username": username, "room": room}, room=room)

# Remove user from the room and broadcast a message
@socketio.on("leave_room")
def handle_leave_room_event(data):
    username = data["username"]
    room = data["room"]
    leave_room(room)
    socketio.emit("user_left_room", {"username": username, "room": room}, room=room)

# Broadcast the message to everyone in the room
@socketio.on("send_message")
def handle_send_message_event(data):
    username = data["username"]
    room = data["room"]
    message = data["message"]
    timestamp = datetime.now()

    # Save the message in the database
    user = User.query.filter_by(username=username).first()
    msg = Message(content=message, timestamp=timestamp, author=user)
    db.session.add(msg)
    db.session.commit()

    # Emit the message to all users in the room
    socketio.emit("receive_message", {
        "username": username,
        "room": room,
        "message": message,
        "timestamp": timestamp.strftime("%Y-%m-%d %H:%M:%S")
    }, room=room)
