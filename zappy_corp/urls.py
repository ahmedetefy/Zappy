from django.conf.urls import url, include
from django.contrib import admin

api_urls = [
    url(r'^jwt/', include('users.urls', namespace='jwt')),
]

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(api_urls)),
]
