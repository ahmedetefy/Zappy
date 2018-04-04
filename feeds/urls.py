from django.conf.urls import url

from feeds import views

urlpatterns = [
    url(r'^slack/$', views.GetTweetsView.as_view(), name="slack"),
]