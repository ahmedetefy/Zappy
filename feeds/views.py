from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status as status_http
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from zappy_corp import settings

import tweepy

from .models import Tweet
from .serializers import TweetSerializer
from .permissions import SlackTokenPermission, GoMessagePermission


class TweetList(generics.ListAPIView):
    """
    View that lists all instance of feed.models.Tweet
    for authenticated instances of users.models.ZappyUser
    """
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = (IsAuthenticated, )


class GetTweetsView(APIView):
    """
    GetTweetsView is called when a message is sent in Slack Channel
    to retrieve tweets from a Twitter account and adds them to database.

    GetTweetsView ensures that only new tweets, meaning that the ones that are
    not already in database, are fetched and added to the database.

    GetTweetsView has two permission classes. It will only fetch and add new
    tweets if it passes both SlackTokenPermission and GoMessagePermission.

    GetTweetsView is called from an Outgoing Webhook set on the Slack Channel
    itself.
    """
    permission_classes = (SlackTokenPermission,
                          GoMessagePermission, )

    def post(self, request, format=None):
        api = twitter_setup()
        latest_tweets = []
        try:
            last_tweet_id = Tweet.objects.order_by("-id_str")[0].id_str
        except Exception:
            last_tweet_id = 1
        for status in tweepy.Cursor(api.user_timeline,
                                    screen_name='@AhmedEtefy',
                                    since_id=last_tweet_id).items():
            tweet = {'text': status._json['text'],
                     'id_str': status._json['id_str'],
                     'created_at': status._json['created_at']}
            latest_tweets.append(tweet)
        if latest_tweets:
            Tweet.objects.mongo_insert_many(latest_tweets)
            data = {
                'message': 'Your twitter posts have been registered correctly.'
            }
            return Response(data, status=status_http.HTTP_201_CREATED)
        return Response(status=status_http.HTTP_204_NO_CONTENT)


def twitter_setup():
    """
    Function to connect to Twitter API.
    """
    auth = tweepy.OAuthHandler(settings.CONSUMER_KEY,
                               settings.CONSUMER_SECRET)
    auth.set_access_token(settings.ACCESS_TOKEN,
                          settings.ACCESS_TOKEN_SECRET)
    api = tweepy.API(auth)
    return api
