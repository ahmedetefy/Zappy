from rest_framework.exceptions import APIException


class SlackTokenException(APIException):
    status_code = 401
    default_detail = 'Slack authentication credentials were not provided.'


class GoMessageException(APIException):
    status_code = 401
    default_detail = 'The slack message does not contain the word GO.'
