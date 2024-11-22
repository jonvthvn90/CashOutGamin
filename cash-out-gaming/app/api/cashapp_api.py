import requests
import json

class CashAppAPI:
    def __init__(self, client_id, client_secret):
        self.client_id = client_id
        self.client_secret = client_secret
        self.base_url = 'https://api.cash.app'

    def get_access_token(self):
        response = requests.post(f'{self.base_url}/oauth2/token', headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }, data={
            'client_id': self.client_id,
            'client_secret': self.client_secret,
            'grant_type': 'client_credentials'
        })
        return response.json()['access_token']

    def send_money(self, amount, currency, recipient):
        access_token = self.get_access_token()
        response = requests.post(f'{self.base_url}/payments', headers={
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }, json={
            'amount': amount,
            'currency': currency,
            'recipient': recipient
        })
        return response.json()

    def get_balance(self):
        access_token = self.get_access_token()
        response = requests.get(f'{self.base_url}/accounts/balance', headers={
            'Authorization': f'Bearer {access_token}'
        })
        return response.json()