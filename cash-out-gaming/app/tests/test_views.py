import unittest
from django.test import TestCase, Client
from app.views import home, about

class TestHomeView(TestCase):
    def test_home_view(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home.html')

class TestAboutView(TestCase):
    def test_about_view(self):
        response = self.client.get('/about/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'about.html')

class TestPostView(TestCase):
    def test_post_view(self):
        post = Post.objects.create(title='Test Post', content='This is a test post')
        response = self.client.get(f'/post/{post.id}/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'post.html')

if __name__ == '__main__':
    unittest.main()