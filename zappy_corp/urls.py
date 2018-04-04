from django.conf.urls import url, include
from django.contrib import admin

from django.views.generic.base import TemplateView

api_urls = [
    url(r'^feed/', include('feeds.urls', namespace='feed')),
    url(r'^jwt/', include('users.urls', namespace='jwt')),
]

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(api_urls)),
    url(r'^.*', TemplateView.as_view(template_name="index.html"), name='home'),
]
