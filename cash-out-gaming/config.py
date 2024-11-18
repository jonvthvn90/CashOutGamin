import os

class Config:
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key')
DEBUG = os.environ.get('DEBUG', True)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'database.db'),
    }
}

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'wallets',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'
STATIC_URL = '/static/'

DB_HOST = os.environ.get('DB_HOST')
DB_PORT = os.environ.get('DB_PORT')
DB_NAME = os.environ.get('DB_NAME')
DB_USER = os.environ.get('DB_USER')
DB_PASSWORD = os.environ.get('DB_PASSWORD')

import os

# Flask settings
FLASK_HOST = '0.0.0.0'
FLASK_PORT = 5000
FLASK_DEBUG = True

# Database settings
DATABASE_HOST = 'localhost'
DATABASE_PORT = 5432
DATABASE_USERNAME = 'cashoutgaming'
DATABASE_PASSWORD = 'password'
DATABASE_NAME = 'cashoutgaming'

# Twitch API settings
TWITCH_API_CLIENT_ID = 'client_id'
TWITCH_API_CLIENT_SECRET = 'client_secret'
TWITCH_API_REDIRECT_URI = 'http://localhost:5000/twitch/callback'

# PayPal API settings
PAYPAL_API_CLIENT_ID = 'client_id'
PAYPAL_API_CLIENT_SECRET = 'client_secret'
PAYPAL_API_REDIRECT_URI = 'http://localhost:5000/paypal/callback'

# Cash App API settings
CASH_APP_API_CLIENT_ID = 'client_id'
CASH_APP_API_CLIENT_SECRET = 'client_secret'
CASH_APP_API_REDIRECT_URI = 'http://localhost:5000/cashapp/callback'