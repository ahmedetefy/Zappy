import json

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from zappy_corp import settings

from pymongo import MongoClient

from users.models import ZappyUser
from .models import Tweet
from .views import twitter_setup


class DatabaseSetup(object):
    """
    Creation of Database Setup and default objects.
    """
    def setUp(self):
        self.user = ZappyUser.objects.create(username="etefy")
        self.user.set_password('123the123')
        self.user.save()
        self.client = APIClient()

    def tearDown(self):
        """
        Function that resets models.ZappyUser and
        models.Tweet in the database ensuring the data does
        not persist between tests.
        """
        client = MongoClient('mongodb://mongodb:27017/test_zappy-corpyy')
        client['test_zappy-corpyy'].users_zappyuser.remove({})
        client['test_zappy-corpyy'].feeds_tweet.remove({})


class GetTweetsViewAPITestCase(DatabaseSetup, APITestCase):
    def setUp(self):
        super(GetTweetsViewAPITestCase, self).setUp()
        self.SLACK_TOKEN = settings.SLACK_TOKEN

    def test_without_slack_token_permission_class(self):
        """
        Test that tests permissions.SlackTokenPermission
        """
        message_data = {'text': 'John Doe'}
        response = self.client.post(reverse('feed:slack'), message_data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(json.loads(response.content)['detail'],
                         "Slack authentication credentials were not provided.")

    def test_with_slack_token_and_no_go_message_permission_class(self):
        """
        Test that tests permissions.GoMessagePermission
        """
        message_data = {'text': 'John Doe',
                        'token': self.SLACK_TOKEN + ''}
        response = self.client.post(reverse('feed:slack'), message_data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(json.loads(response.content)['detail'],
                         "The slack message does not contain the word GO.")

    def test_with_slack_token_and_go_message_permission_class(self):
        """
        Test that tests retrieval of Twitter Account Posts and storing
        them in the database in case Slack Token is valid and a message
        contains the word "Go".
        """
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
        # Test Retrieval of all Tweets after they have been added.
        response = self.client.post(reverse('feed:slack'), message_data)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        # Test the retrieval of only new Tweets to avoid duplication
        Tweet.objects.order_by("-id_str")[0].delete()
        count_before_tweets = Tweet.objects.all().count()
        response = self.client.post(reverse('feed:slack'), message_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(json.loads(response.content)['message'],
                         "Your twitter posts have been registered correctly.")
        count_after_tweets = Tweet.objects.all().count()
        self.assertEqual(count_before_tweets + 1, count_after_tweets)


class TweetListAPITestCase(DatabaseSetup, APITestCase):
    def setUp(self):
        super(TweetListAPITestCase, self).setUp()
        user_data = {
            "username": "etefy",
            "password": "123the123"
        }
        response = self.client.post(reverse('jwt:login'),
                                    user_data)
        self.token = json.loads(response.content)['token']
        self.tweet = Tweet.objects.create(text="john#1",
                                          id_str='1',
                                          created_at='Mon')
        Tweet.objects.create(text="adam#2", id_str='2', created_at='Wed')

    def test_get_tweet_list_unauthenticated(self):
        """
        Test that tests fetching instance of model.Tweet
        without a valid JWT Token.
        """
        response = self.client.get(reverse('feed:tweet-list'))
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(json.loads(response.content)['detail'],
                         "Authentication credentials were not provided.")

    def test_get_tweet_list_authenticated(self):
        """
        Test that tests fetching instance of model.Tweet
        with a valid JWT Token.
        """
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + self.token)
        response = self.client.get(reverse('feed:tweet-list'))
        self.assertTrue(len(
            json.loads(response.content)) == Tweet.objects.count())
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_model_Tweet_str_function(self):
        """
        Test that tests __str__ method of models.Tweet
        """
        self.assertEqual(self.tweet.text, str(self.tweet))
