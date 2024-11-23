import os
import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'secret_key'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///database.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    DEBUG = True
    TESTING = False
    CSRF_ENABLED = True
    CSRF_SESSION_KEY = os.environ.get('CSRF_SESSION_KEY') or 'csrf_session_key'
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'Strict'
    PERMANENT_SESSION_LIFETIME = 3600
# Twitch API settings
TWITCH_CLIENT_ID = os.environ['TWITCH_CLIENT_ID']
TWITCH_CLIENT_SECRET = os.environ['TWITCH_CLIENT_SECRET']

# PayPal API settings
PAYPAL_CLIENT_ID = os.environ['PAYPAL_CLIENT_ID']
PAYPAL_CLIENT_SECRET = os.environ['PAYPAL_CLIENT_SECRET']

# Cash App API settings
CASHAPP_CLIENT_ID = os.environ['CASHAPP_CLIENT_ID']
CASHAPP_CLIENT_SECRET = os.environ['CASHAPP_CLIENT_SECRET']