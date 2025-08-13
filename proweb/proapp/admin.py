from django.contrib import admin
from .models import Profile, User, UserDetails, InteriorDesigner, Products, Consultations

admin.site.register(Profile)
admin.site.register(User)
admin.site.register(UserDetails)
admin.site.register(InteriorDesigner)
admin.site.register(Products)
admin.site.register(Consultations)