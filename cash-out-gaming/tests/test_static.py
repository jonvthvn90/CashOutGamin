from django.test import TestCase
from django.test import Client

class TestStatic(TestCase):
    def test_static_files(self):
        client = Client()
        response = client.get('/static/css/style.css')
        self.assertEqual(response.status_code, 200)