FROM ubuntu:17.10
RUN apt-get update && \
  apt-get install -y nodejs && \
  apt-get install -y npm && \
  apt-get clean && \
  rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*
RUN npm install -g localtunnel
RUN npm install -g @angular/cli
FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip3 install -r requirements.txt
ADD . /code/