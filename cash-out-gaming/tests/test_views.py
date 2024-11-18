from django.test import TestCase
from django.urls import reverse
from tournaments.models import Tournament, Match
from players.models import Player
from django.test import TestCase
from django.test import Client

class TournamentViewsTest(TestCase):

    def setUp(self):
        self.player1 = Player.objects.create(username='player1', email='player1@example.com')
        self.player2 = Player.objects.create(username='player2', email='player2@example.com')
        self.tournament = Tournament.objects.create(name='Test Tournament', description='Test Description')

    def test_tournament_list_view(self):
        response = self.client.get(reverse('tournament_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Test Tournament')
        self.assertTemplateUsed(response, 'tournament.html')

    def test_match_list_view(self):
        match = Match.objects.create(
            tournament=self.tournament,
            player1=self.player1,
            player2=self.player2,
            winner=self.player1
        )
        response = self.client.get(reverse('match_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'player1 vs player2')
        self.assertTemplateUsed(response, 'match.html')
    
    class TestViews(TestCase):
    def test_views(self):
        client = Client()
        response = client.get('/')
        self.assertEqual(response.status_code, 200)    