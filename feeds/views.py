from rest_framework.response import Response
from rest_framework import status as status_http
from rest_framework.views import APIView

from zappy_corp import settings

from .models import Tweet
from .permissions import SlackTokenPermission, GoMessagePermission

import tweepy


class GetTweetsView(APIView):
    permission_classes = (SlackTokenPermission,
                          GoMessagePermission, )

    def post(self, request, format=None):
        """
        Outgoing webhook from Slack API to fetch all
        Twitter tweets
        """
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
        Tweet.objects.mongo_insert_many(latest_tweets)
        data = {
            'message': 'Your twitter posts have been registered correctly.'
        }
        return Response(data, status=status_http.HTTP_201_CREATED)


def twitter_setup():
    auth = tweepy.OAuthHandler(settings.CONSUMER_KEY,
                               settings.CONSUMER_SECRET)
    auth.set_access_token(settings.ACCESS_TOKEN,
                          settings.ACCESS_TOKEN_SECRET)
    api = tweepy.API(auth)
    return api
