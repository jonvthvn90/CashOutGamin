import unittest
from django.test import TestCase
from app.models import User, Post

class TestUserModel(TestCase):
    def test_user_creation(self):
        user = User.objects.create_user('testuser', 'test@example.com', 'password')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'test@example.com')

    def test_user_password(self):
        user = User.objects.create_user('testuser', 'test@example.com', 'password')
        self.assertTrue(user.check_password('password'))

class TestPostModel(TestCase):
    def test_post_creation(self):
        post = Post.objects.create(title='Test Post', content='This is a test post')
        self.assertEqual(post.title, 'Test Post')
        self.assertEqual(post.content, 'This is a test post')

    def test_post_user(self):
        user = User.objects.create_user('testuser', 'test@example.com', 'password')
        post = Post.objects.create(title='Test Post', content='This is a test post', user=user)
        self.assertEqual(post.user, user)

if __name__ == '__main__':
    unittest.main()