from django.conf.urls import url

from rest_framework_jwt.views import obtain_jwt_token
from .views import ZappyLogout

urlpatterns = [
    url(r'^token/$', obtain_jwt_token, name="login"),
    url(r'^logout/$', ZappyLogout.as_view(), name="logout"),
]