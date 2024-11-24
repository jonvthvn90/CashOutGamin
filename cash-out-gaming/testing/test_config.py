import unittest
from unittest.mock import patch, MagicMock
from cash_out_gaming import settings

class TestConfig(unittest.TestCase):
    def test_config(self):
        self.assertEqual(settings.DEBUG, True)
        self.assertEqual(settings.SECRET_KEY, 'your_secret_key')

    def test_database_config(self):
        self.assertEqual(settings.DATABASES['default']['ENGINE'], 'django.db.backends.postgresql')
        self.assertEqual(settings.DATABASES['default']['NAME'], 'your_database_name')
        self.assertEqual(settings.DATABASES['default']['USER'], 'your_database_user')
        self.assertEqual(settings.DATABASES['default']['PASSWORD'], 'your_database_password')
        self.assertEqual(settings.DATABASES['default']['HOST'], 'your_database_host')
        self.assertEqual(settings.DATABASES['default']['PORT'], 'your_database_port')

if __name__ == '__main__':
    unittest.main()