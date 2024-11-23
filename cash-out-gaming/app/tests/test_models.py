import unittest
from app.models import User, Post

class TestUserModel(unittest.TestCase):
    def test_user_creation(self):
        user = User.objects.create_user('testuser', 'test@example.com', 'password')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'test@example.com')

    def test_user_password(self):
        user = User.objects.create_user('testuser', 'test@example.com', 'password')
        self.assertTrue(user.check_password('password'))

class TestPostModel(unittest.TestCase):
    def test_post_creation(self):
        post = Post.objects.create(title='Test Post', content='This is a test post')
        self.assertEqual(post.title, 'Test Post')
        self.assertEqual(post.content, 'This is a test post')

if __name__ == '__main__':
    unittest.main()