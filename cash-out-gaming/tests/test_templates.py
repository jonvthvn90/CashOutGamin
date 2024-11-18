from django.test import TestCase
from django.test import Client

class TestTemplates(TestCase):
    def test_templates(self):
        client = Client()
        response = client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')