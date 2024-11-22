import os

# Project settings
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
PROJECT_NAME = os.path.basename(PROJECT_ROOT)

# Database settings
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(PROJECT_ROOT, 'database.db'),
    }
}

# API settings
TWITCH_CLIENT_ID = os.environ['TWITCH_CLIENT_ID']
TWITCH_CLIENT_SECRET = os.environ['TWITCH_CLIENT_SECRET']

PAYPAL_CLIENT_ID = os.environ['PAYPAL_CLIENT_ID']
PAYPAL_CLIENT_SECRET = os.environ['PAYPAL_CLIENT_SECRET']

CASHAPP_CLIENT_ID = os.environ['CASHAPP_CLIENT_ID']
CASHAPP_CLIENT_SECRET = os.environ['CASHAPP_CLIENT_SECRET']