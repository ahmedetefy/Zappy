# Zappy

Zappy integrates Slack and Twitter by listening on a Slack Channel for the word 'GO'
and triggers an event to fetch all Twitter posts from a specific Twitter account.

## Accounts Information

### Slack

For the Slack Account, Go to Slack Channel page [Here](https://zappycorp.slack.com)  

You will be prompted to enter credentials. Enter the following credentials.  

Email: ahmed.etefy12@gmail.com  
Password: superadminpass@123  

Zappy listens to channel #general, and hence this is where the messages should be sent.  

### Twitter

For Twitter Account, Go to the official [Twitter page](https://twitter.com/) and enter the following credentials:  

Email: ahmed.amro.etefy@gmail.com  
Password: superadminpass@123  

## Get Started  

First of all, make sure you have [Docker-compose](https://docs.docker.com/compose/install/#install-compose) installed and set to go.  
Second, This project uses NodeJS and Angular CLI.

* Install [NodeJS](https://nodejs.org/en/download/)
* Install AngularCLI using npm  

Next, please follow the following instructions:  
```
(1) clone the repository and cd into it
(2) $ sudo docker-compose build  
(3) $ sudo docker-compose run web python3 manage.py makemigrations users feeds  
(4) $ sudo docker-compose run web python3 manage.py migrate
(5) Optional to run tests  
$ sudo docker-compose run web python3 manage.py test  
(6) Create your admin user to be used in logging in the application  
$ sudo docker-compose run web python3 manage.py createsuperuser  
(6) $ cd frontend/
(7) $ npm install
(8) $ ng build
(9) $ cd ..
(10) $ sudo docker-compose up

```

Finally visit https://zappycorp.localtunnel.me/ or http://0.0.0.0:8000/, and enter your username and password from step 5 to authenticate.
