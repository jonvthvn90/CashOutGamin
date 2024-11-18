from django.test import TestCase
from .utils import get_current_year

class TestUtils(TestCase):
    def test_get_current_year(self):
        year = get_current_year()
        self.assertEqual(year, datetime.date.today().year)