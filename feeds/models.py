# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from djongo import models


class Tweet(models.Model):
    text = models.CharField(max_length=200)
    id_str = models.CharField(max_length=200, primary_key=True)
    created_at = models.CharField(max_length=200)

    objects = models.DjongoManager()

    def __str__(self):
        return self.text