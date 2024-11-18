import requests

class PayPalAPI:
    def __init__(self, client_id, client_secret, redirect_uri):
        self.client_id = client_id
        self.client_secret = client_secret
        self.base_url = 'https://api.paypal.com/v1'
        self.redirect_uri = redirect_uri
    def get_access_token(self, code):
        url = 'https://api.paypal.com/v1/oauth2/token'
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
        url = 'https://api.paypal.com/v1/identity/oauth2/userinfo'
        headers = {'Authorization': f'Bearer {access_token}'}
        response = requests.get(url, headers=headers)
        return response.json()

    def create_payment(self, amount, currency):
        access_token = self.get_access_token()
        response = requests.post(
            f'{self.base_url}/payments/payment',
            headers={'Authorization': f'Bearer {access_token}', 'Content-Type': 'application/json'},
            json={
                'intent': 'sale',
                'payer': {'payment_method': 'paypal'},
                'transactions': [{'amount': {'total': amount, 'currency': currency}}]
            }
        )
        return response.json()

    def execute_payment(self, payment_id, payer_id):
        access_token = self.get_access_token()
        response = requests.post(
            f'{self.base_url}/payments/payment/{payment_id}/execute',
            headers={'Authorization': f'Bearer {access_token}', 'Content-Type': 'application/json'},
            json={'payer_id': payer_id}
        )
        return response.json()