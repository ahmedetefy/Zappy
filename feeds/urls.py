from django.conf.urls import url

from feeds import views

urlpatterns = [
    url(r'^slack/$', views.GetTweetsView.as_view(), name="slack"),
    url(r'^tweets/$', views.TweetList.as_view(), name='tweet-list'),
]