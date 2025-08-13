# forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class CustomUserCreationForm(UserCreationForm):
    name = forms.CharField(max_length=100, required=True)
    gmail = forms.EmailField(label="Email", required=True)
    role = forms.ChoiceField(choices=[('Designer','Designer'), ('User','User')], required=True)

    class Meta:
        model = User
        fields = ('username', 'name', 'gmail', 'role', 'password1', 'password2')
