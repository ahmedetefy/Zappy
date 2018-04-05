from rest_framework import permissions
from zappy_corp import settings

from .exceptions import SlackTokenException, GoMessageException


class SlackTokenPermission(permissions.BasePermission):
    """
    Permission that only grants access if Slack token
    received in request matches the token in zappy_corp.settings
    """

    def has_permission(self, request, view):
        token = request.POST.get('token', '')
        if token == settings.SLACK_TOKEN:
            return True
        raise SlackTokenException


class GoMessagePermission(permissions.BasePermission):
    """
    Permission that only grants access if the message sent
    on Slack Channel contains the word "GO".
    """

    def has_permission(self, request, view):
        message = request.POST.get('text', '')
        if 'go' in message.lower().split(' '):
            return True
        raise GoMessageException
