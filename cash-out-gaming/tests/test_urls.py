from django.test import TestCase
from django.test import Client

class TestUrls(TestCase):
    def test_urls(self):
        client = Client()
        response = client.get('/')
        self.assertEqual(response.status_code, 200)