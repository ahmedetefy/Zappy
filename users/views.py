import uuid

from rest_framework import views, permissions, status
from rest_framework.response import Response


class ZappyLogout(views.APIView):
    """
    Logout APIView that expires all JWT Tokens for instance of
    ZappyUser on successful logout by changing the attribute
    ZappyUser.jwt_secret
    """
    permission_classes = (permissions.IsAuthenticated, )

    def post(self, request, *args, **kwargs):
        user = request.user
        user.jwt_secret = uuid.uuid4()
        user.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
