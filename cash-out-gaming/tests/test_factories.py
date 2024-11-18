from django.test import TestCase
from .factories import UserFactory, ProfileFactory

class TestFactories(TestCase):
    def test_user_factory(self):
        user = UserFactory()
        self.assertIsNotNone(user.username)
        self.assertIsNotNone(user.email)
        self.assertIsNotNone(user.password)

    def test_profile_factory(self):
        profile = ProfileFactory()
        self.assertIsNotNone(profile.user)
        self.assertIsNotNone(profile.bio)