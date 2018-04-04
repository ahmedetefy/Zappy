import json

from django.urls import reverse

from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from rest_framework_jwt.settings import api_settings
from pymongo import MongoClient

from .models import ZappyUser, jwt_get_secret_key


payload_handler = api_settings.JWT_PAYLOAD_HANDLER
encode_handler = api_settings.JWT_ENCODE_HANDLER


class DatabaseSetup(object):
    def setUp(self):
        self.user = ZappyUser.objects.create(username="etefy")
        self.user.set_password('123the123')
        self.user.save()
        self.client = APIClient()

    def tearDown(self):
        client = MongoClient('mongodb://mongodb:27017/test_zappy-corpyy')
        client['test_zappy-corpyy'].users_zappyuser.remove({})


class UserLoginAPITestCase(DatabaseSetup, APITestCase):

    def test_str_zappyuser_model(self):
        self.assertEqual(self.user.username, str(self.user))

    def test_jwt_get_secret_key_function(self):
        self.assertEqual(
            self.user.jwt_secret,
            jwt_get_secret_key(self.user))

    def test_token_creation_on_valid_login(self):
        user_data = {
            "username": "etefy",
            "password": "123the123"
        }
        response = self.client.post(reverse('jwt:login'),
                                    user_data)
        self.assertEqual(status.HTTP_200_OK, response.status_code)
        self.assertTrue("token" in json.loads(response.content))
        token = json.loads(response.content)['token']
        payload = payload_handler(self.user)
        token_rsp = encode_handler(payload)
        self.assertEqual(token, token_rsp)

    def test_token_creation_invalid_credentials(self):
        user_data = {
            "username": "etefy",
            "password": "123the13"
        }
        response = self.client.post(reverse('jwt:login'),
                                    user_data)
        self.assertEqual(status.HTTP_400_BAD_REQUEST, response.status_code)
        self.assertFalse("token" in json.loads(response.content))
        self.assertEqual(json.loads(response.content)['non_field_errors'][0],
                         "Unable to log in with provided credentials.")

    def test_token_creation_no_credentials(self):
        user_data = {}
        response = self.client.post(reverse('jwt:login'),
                                    user_data)
        self.assertEqual(status.HTTP_400_BAD_REQUEST, response.status_code)
        self.assertFalse("token" in json.loads(response.content))
        self.assertEqual(json.loads(response.content)['username'][0],
                         "This field is required.")
        self.assertEqual(json.loads(response.content)['password'][0],
                         "This field is required.")


class UserLogoutAPITestCase(DatabaseSetup, APITestCase):
    def setUp(self):
        super(UserLogoutAPITestCase, self).setUp()
        self.get_token()

    def get_token(self):
        user_data = {
            "username": "etefy",
            "password": "123the123"
        }
        response = self.client.post(reverse('jwt:login'),
                                    user_data)
        self.token = json.loads(response.content)['token']

    def test_logout_without_token(self):
        response = self.client.post(reverse("jwt:logout"))
        self.assertEqual(status.HTTP_401_UNAUTHORIZED,
                         response.status_code)
        self.assertEqual(json.loads(response.content)['detail'],
                         "Authentication credentials were not provided.")

    def test_logout_with_valid_token(self):
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + self.token)
        response = self.client.post(reverse("jwt:logout"))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + self.token)
        response = self.client.post(reverse("jwt:logout"))
        self.assertEqual(status.HTTP_401_UNAUTHORIZED,
                         response.status_code)
        self.assertEqual(json.loads(response.content)['detail'],
                         "Error decoding signature.")
