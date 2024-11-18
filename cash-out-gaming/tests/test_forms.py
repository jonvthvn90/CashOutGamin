from django.test import TestCase
from .forms import UserForm, ProfileForm

class TestForms(TestCase):
    def test_user_form(self):
        form = UserForm(data={'username': 'testuser', 'email': 'testuser@example.com', 'password': 'testpassword'})
        self.assertTrue(form.is_valid())

    def test_profile_form(self):
        form = ProfileForm(data={'bio': 'Test bio'})
        self.assertTrue(form.is_valid())