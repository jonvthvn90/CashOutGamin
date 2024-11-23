from .twitch_api import TwitchAPI
from .paypal_api import PayPalAPI
from .cashapp_api import CashAppAPI

def get_twitch_api():
    return TwitchAPI()

def get_paypal_api():
    return PayPalAPI()
def get_cashapp_api_api():
    return CashAppAPI()