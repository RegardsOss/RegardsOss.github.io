FROM ruby:2.4

RUN apt-get update
RUN apt-get install -y \
    node \
    python-pygments
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/

RUN gem install \
  github-pages \
  jekyll \
  jekyll-redirect-from \
  kramdown \
  rdiscount \
  rouge

VOLUME /src
EXPOSE 4000

ADD jekyll /src

WORKDIR /src
