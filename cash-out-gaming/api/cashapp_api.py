import requests
import json

class CashAppAPI:
    def __init__(self):
        self.base_url = 'https://api.cash.app/v1'
        self.client_id = 'YOUR_CASH_APP_CLIENT_ID'
        self.client_secret = 'YOUR_CASH_APP_CLIENT_SECRET'

    def get_access_token(self):
        response = requests.post(f'{self.base_url}/oauth2/token', headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }, data={
            'grant_type': 'client_credentials',
            'client_id': self.client_id,
            'client_secret': self.client_secret
        })

        if response.status_code == 200:
            return response.json()['access_token']
        else:
            return None

    def send_money(self, amount, recipient):
        access_token = self.get_access_token()
        if access_token:
            response = requests.post(f'{self.base_url}/payments', headers={
                'Authorization': f'Bearer {access_token}',
                'Content-Type': 'application/json'
            }, json={
                'amount': amount,
                'recipient': recipient
            })

            if response.status_code == 201:
                return response.json()['payment_id']
            else:
                return None
        else:
            return None

    def get_payment_status(self, payment_id):
        access_token = self.get_access_token()
        if access_token:
            response = requests.get(f'{self.base_url}/payments/{payment_id}', headers={
                'Authorization': f'Bearer {access_token}',
                'Content-Type': 'application/json'
            })

            if response.status_code == 200:
                return response.json()['status']
            else:
                return None
        else:
            return None