from rest_framework import permissions

from zappy_corp import settings

from .exceptions import SlackTokenException, GoMessageException


class SlackTokenPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        token = request.POST.get('token', '')
        if token == settings.SLACK_TOKEN:
            return True
        raise SlackTokenException


class GoMessagePermission(permissions.BasePermission):

    def has_permission(self, request, view):
        message = request.POST.get('text', '')
        if 'go' in message.lower().split(' '):
            return True
        raise GoMessageException
