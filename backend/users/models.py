from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(('Email address'), unique=True)
    first_name = models.CharField()
    last_name = models.CharField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return self.email
