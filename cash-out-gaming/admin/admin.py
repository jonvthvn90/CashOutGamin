from django.contrib import admin
from .models import User, Tournament, Match

admin.site.register(User)
admin.site.register(Tournament)
admin.site.register(Match)