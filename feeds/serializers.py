from rest_framework import serializers
from .models import Tweet


class TweetSerializer(serializers.ModelSerializer):
    """
    Tweet Serializer for model Tweet.
    """
    class Meta:
        model = Tweet
        fields = ('text', 'id_str', 'created_at')
