import requests

class CashAppAPI:
    def __init__(self, client_id, client_secret, redirect_uri):
        self.client_id = client_id
        self.client_secret = client_secret
        self.redirect_uri = redirect_uri

    def get_access_token(self, code):
        url = 'https://api.cash.app/oauth2/token'
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        data = {
            'client_id': self.client_id,
            'client_secret': self.client_secret,
            'code': code,
            'redirect_uri': self.redirect_uri,
            'grant_type': 'authorization_code'
        }
        response = requests.post(url, headers=headers, data=data)
        return response.json()

    def get_user_info(self, access_token):
        url = 'https://api.cash.app/users/me'
        headers = {'Authorization': f'Bearer {access_token}'}
        response = requests.get(url, headers=headers)
        return response.json()
    
    def create_payment(self, amount, currency):
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.client_secret}"
        }
        data = {
            "amount": amount,
            "currency": currency
        }
        response = requests.post(f"{self.base_url}/payments", headers=headers, json=data)
        return response.json()

    def send_money(self, amount, currency, recipient):
        access_token = self.get_access_token()
        response = requests.post(
            f'{self.base_url}/payments',
            headers={'Authorization': f'Bearer {access_token}', 'Content-Type': 'application/json'},
            json={
                'amount': amount,
                'currency': currency,
                'recipient': recipient
            }
        )
        return response.json()

    def get_payment(self, payment_id):
        headers = {
            "Authorization": f"Bearer {self.client_secret}"
        }
        response = requests.get(f"{self.base_url}/payments/{payment_id}", headers=headers)
        return response.json()
    
    def get_balance(self):
        access_token = self.get_access_token()
        response = requests.get(
            f'{self.base_url}/accounts/balance',
            headers={'Authorization': f'Bearer {access_token}'}
        )
        return response.json()