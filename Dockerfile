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
ENV SLACK_TOKEN 'AQFZNFV3gjUFdflBJ5VZGqqc'
ENV CONSUMER_KEY 'WvJS4tkh740F5W0BIEvO66d01'
ENV CONSUMER_SECRET 'yE5tenSyxTetUHpRAd8YVmf413h52U9RKbHKhW7nt4dZ4VdUW9'
ENV ACCESS_TOKEN '719842218475917312-XGA7siMCT5ZLWXwC25Do8bnj4Z8yAcZ'
ENV ACCESS_TOKEN_SECRET '1Pnl2fkeIaMQaCKO4RCpFu52rDezc28p3Zw8MOn6NzGPx'
ENV SECRET_KEY '#oq3(3&aw$%*ygd97=het*ha7gm&h(xbs_d#*3ffgfa**5j476'
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip3 install -r requirements.txt
ADD . /code/