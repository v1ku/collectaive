from datetime import datetime
from .server import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)

    messages = db.relationship('Message', backref='author', lazy='dynamic')
    chat_groups = db.relationship('ChatGroup', secondary='user_chat_group', backref='members', lazy='dynamic')

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f'<User {self.username}>'

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, index=True, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    chat_group_id = db.Column(db.Integer, db.ForeignKey('chat_group.id'), nullable=False)

    def __repr__(self):
        return f'<Message {self.content} at {self.timestamp}>'

class ChatGroup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True, nullable=False)

    messages = db.relationship('Message', backref='chat_group', lazy='dynamic')

    def __repr__(self):
        return f'<ChatGroup {self.name}>'

# Association table for many-to-many relationship between User and ChatGroup
user_chat_group = db.Table('user_chat_group',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('chat_group_id', db.Integer, db.ForeignKey('chat_group.id'), primary_key=True)
)
