import requests
import json

class PayPalAPI:
    def __init__(self, client_id, client_secret):
        self.client_id = client_id
        self.client_secret = client_secret
        self.base_url = 'https://api.sandbox.paypal.com'

    def get_access_token(self):
        response = requests.post(f'{self.base_url}/v1/oauth2/token', headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }, data={
            'grant_type': 'client_credentials'
        }, auth=(self.client_id, self.client_secret))
        return response.json()['access_token']

    def create_payment(self, amount, currency):
        access_token = self.get_access_token()
        response = requests.post(f'{self.base_url}/v1/payments/payment', headers={
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
        return response.json()

    def execute_payment(self, payment_id, payer_id):
        access_token = self.get_access_token()
        response = requests.post(f'{self.base_url}/v1/payments/payment/{payment_id}/execute', headers={
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }, json={
            'payer_id': payer_id
        })
        return response.json()