from django.test import TestCase
from tournaments.models import Tournament, Match
from players.models import Player
from .models import User, Profile
class TournamentModelTest(TestCase):

    def setUp(self):
        self.player1 = Player.objects.create(username='player1', email='player1@example.com')
        self.player2 = Player.objects.create(username='player2', email='player2@example.com')
        self.tournament = Tournament.objects.create(name='Test Tournament', description='Test Description')

    def test_tournament_creation(self):
        self.assertTrue(isinstance(self.tournament, Tournament))
        self.assertEqual(self.tournament.__str__(), self.tournament.name)

    def test_match_creation(self):
        match = Match.objects.create(
            tournament=self.tournament,
            player1=self.player1,
            player2=self.player2,
            winner=self.player1
        )
        self.assertTrue(isinstance(match, Match))
        self.assertEqual(match.__str__(), f'{self.player1.username} vs {self.player2.username}')
    
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