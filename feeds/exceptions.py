from rest_framework.exceptions import APIException


class SlackTokenException(APIException):
    """
    Exception that is raised when SLACK TOKEN is not valid.
    """
    status_code = 401
    default_detail = 'Slack authentication credentials were not provided.'


class GoMessageException(APIException):
    """
    Exception that is raised when a message sent on the Slack Channel
    does not contain the word 'GO'.
    """
    status_code = 401
    default_detail = 'The slack message does not contain the word GO.'
