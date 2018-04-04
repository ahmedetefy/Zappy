import json

from django.urls import reverse
from slackPart import settings
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from pymongo import MongoClient
from users.models import ZappyUser
from .models import Tweet
from .views import twitter_setup


class DatabaseSetup(object):
    def setUp(self):
        self.user = ZappyUser.objects.create(username="etefy")
        self.user.set_password('123the123')
        self.user.save()
        self.client = APIClient()

    def tearDown(self):
        client = MongoClient('mongodb://mongodb:27017/test_zappy-corpyy')
        client['test_zappy-corpyy'].users_zappyuser.remove({})
        client['test_zappy-corpyy'].feeds_tweet.remove({})


class GetTweetsViewAPITestCase(DatabaseSetup, APITestCase):
    def setUp(self):
        super(GetTweetsViewAPITestCase, self).setUp()
        self.SLACK_TOKEN = settings.SLACK_TOKEN

    def test_without_slack_token_permission_class(self):
        message_data = {'text': 'John Doe'}
        response = self.client.post(reverse('feed:slack'), message_data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(json.loads(response.content)['detail'],
                         "Slack authentication credentials were not provided.")

    def test_with_slack_token_and_no_go_message_permission_class(self):
        message_data = {'text': 'John Doe',
                        'token': self.SLACK_TOKEN + ''}
        response = self.client.post(reverse('feed:slack'), message_data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(json.loads(response.content)['detail'],
                         "The slack message does not contain the word GO.")

    def test_with_slack_token_and_go_message_permission_class(self):
        message_data = {'text': 'John Doe go',
                        'token': self.SLACK_TOKEN + ''}
        response = self.client.post(reverse('feed:slack'), message_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(json.loads(response.content)['message'],
                         "Your twitter posts have been registered correctly.")
        api = twitter_setup()
        # Test the retrieval of all Tweets if database is empty
        tweets_count = api.get_user('@AhmedEtefy').statuses_count
        db_tweets_count = Tweet.objects.all().count()
        self.assertEqual(tweets_count, db_tweets_count)
        # Test the retrieval of only new Tweets to avoid duplication
        Tweet.objects.order_by("-id_str")[0].delete()
        count_before_tweets = Tweet.objects.all().count()
        response = self.client.post(reverse('feed:slack'), message_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(json.loads(response.content)['message'],
                         "Your twitter posts have been registered correctly.")
        count_after_tweets = Tweet.objects.all().count()
        self.assertEqual(count_before_tweets + 1, count_after_tweets)