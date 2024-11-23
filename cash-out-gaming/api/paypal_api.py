import requests
import json

class PayPalAPI:
    def __init__(self):
        self.client_id = 'YOUR_PAYPAL_CLIENT_ID'
        self.client_secret = 'YOUR_PAYPAL_CLIENT_SECRET'
        self.base_url = 'https://api.sandbox.paypal.com/v1'

    def get_access_token(self):
        response = requests.post(f'{self.base_url}/oauth2/token', headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }, data={
            'grant_type': 'client_credentials'
        }, auth=(self.client_id, self.client_secret))

        if response.status_code == 200:
            return response.json()['access_token']
        else:
            return None

    def create_payment(self, amount, currency):
        access_token = self.get_access_token()
        if access_token:
            response = requests.post(f'{self.base_url}/payments/payment', headers={
                'Authorization': f'Bearer {access_token}',
                'Content-Type': 'application/json'
            }, json={
                'intent': 'sale',
                'payer': {
                    'payment_method': 'paypal'
                },
                'transactions': [
                    {
                        'amount': {
                            'total': amount,
                            'currency': currency
                        }
                    }
                ]
            })

            if response.status_code == 201:
                return response.json()['id']
            else:
                return None
        else:
            return None

    def execute_payment(self, payment_id, payer_id):
        access_token = self.get_access_token()
        if access_token:
            response = requests.post(f'{self.base_url}/payments/payment/{payment_id}/execute', headers={
                'Authorization': f'Bearer {access_token}',
                'Content-Type': 'application/json'
            }, json={
                'payer_id': payer_id
            })

            if response.status_code == 200:
                return response.json()['state']
            else:
                return None
        else:
            return None