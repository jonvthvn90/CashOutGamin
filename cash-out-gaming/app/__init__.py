# app/__init__.py
from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required
from django.apps import AppConfig

from config import Config
from . import models
from . import views

app = Flask(__name__)
app.config.from_object(Config)
app.config['SECRET_KEY'] = 'secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
login_manager = LoginManager(app)

from app import models, views

class MyAppConfig(AppConfig):
    name = 'app'
    verbose_name = 'My App'

    def ready(self):
        import app.signals