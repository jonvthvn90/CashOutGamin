import requests
import json

class TwitchAPI:
    def __init__(self, client_id, client_secret):
        self.client_id = client_id
        self.client_secret = client_secret
        self.base_url = 'https://api.twitch.tv/helix'

    def get_access_token(self):
        response = requests.post(f'{self.base_url}/oauth2/token', headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }, data={
            'client_id': self.client_id,
            'client_secret': self.client_secret,
            'grant_type': 'client_credentials'
        })
        return response.json()['access_token']

    def get_user_info(self, username):
        access_token = self.get_access_token()
        response = requests.get(f'{self.base_url}/users', headers={
            'Authorization': f'Bearer {access_token}'
        }, params={
            'login': username
        })
        return response.json()

    def get_stream_info(self, username):
        access_token = self.get_access_token()
        response = requests.get(f'{self.base_url}/streams', headers={
            'Authorization': f'Bearer {access_token}'
        }, params={
            'user_login': username
        })
        return response.json()