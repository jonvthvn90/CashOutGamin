from django.test import TestCase
from .models import User, Profile
from .models import Post, Comment

class PostTestCase(TestCase):
    def test_post_creation(self):
        post = Post.objects.create(title='Test Post', content='This is a test post.')
        self.assertEqual(post.title, 'Test Post')
        self.assertEqual(post.content, 'This is a test post.')

class CommentTestCase(TestCase):
    def test_comment_creation(self):
        post = Post.objects.create(title='Test Post', content='This is a test post.')
        comment = Comment.objects.create(post=post, content='This is a test comment.')
        self.assertEqual(comment.post, post)
        self.assertEqual(comment.content, 'This is a test comment.')
        
class TestModels(TestCase):
    def test_user_creation(self):
        user = User.objects.create(username='testuser', email='testuser@example.com', password='testpassword')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'testuser@example.com')

    def test_profile_creation(self):
        user = User.objects.create(username='testuser', email='testuser@example.com', password='testpassword')
        profile = Profile.objects.create(user=user, bio='Test bio')
        self.assertEqual(profile.user, user)
        self.assertEqual(profile.bio, 'Test bio')