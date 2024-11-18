from django.apps import AppConfig

class MyAppConfig(AppConfig):
    name = 'app'
    verbose_name = 'My App'

    def ready(self):
        import app.signals