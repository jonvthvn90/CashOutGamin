from django.test import TestCase
from .models import User, Profile

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