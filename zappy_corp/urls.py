from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import RedirectView
from django.contrib.staticfiles.views import serve

api_urls = [
    url(r'^feed/', include('feeds.urls', namespace='feed')),
    url(r'^jwt/', include('users.urls', namespace='jwt')),
]

urlpatterns = [
    url(r'^$', serve, kwargs={'path': 'index.html'}),
    url(r'^(?!/?static/)(?!/?media/)(?P<path>.*\..*)$',
        RedirectView.as_view(url='/static/%(path)s', permanent=False)),
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(api_urls)),
]
