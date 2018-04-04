import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser


class ZappyUser(AbstractUser):
    jwt_secret = models.UUIDField(default=uuid.uuid4)

    def __str__(self):
        return self.username


def jwt_get_secret_key(user_model):
    return user_model.jwt_secret
