import requests
import json

class TwitchAPI:
    def __init__(self):
        self.client_id = 'YOUR_TWITCH_CLIENT_ID'
        self.client_secret = 'YOUR_TWITCH_CLIENT_SECRET'
        self.base_url = 'https://api.twitch.tv/helix'

    def get_access_token(self):
        response = requests.post(f'{self.base_url}/oauth2/token', headers={
            'Content-Type': 'application/x-www-form-urlencoded'
        }, data={
            'client_id': self.client_id,
            'client_secret': self.client_secret,
            'grant_type': 'client_credentials'
        })

        if response.status_code == 200:
            return response.json()['access_token']
        else:
            return None

    def get_user_info(self, username):
        access_token = self.get_access_token()
        if access_token:
            response = requests.get(f'{self.base_url}/users', headers={
                'Authorization': f'Bearer {access_token}',
                'Client-ID': self.client_id
            }, params={
                'login': username
            })

            if response.status_code == 200:
                return response.json()['data'][0]
            else:
                return None
        else:
            return None

    def get_stream_info(self, username):
        access_token = self.get_access_token()
        if access_token:
            response = requests.get(f'{self.base_url}/streams', headers={
                'Authorization': f'Bearer {access_token}',
                'Client-ID': self.client_id
            }, params={
                'user_login': username
            })

            if response.status_code == 200:
                return response.json()['data'][0]
            else:
                return None
        else:
            return None