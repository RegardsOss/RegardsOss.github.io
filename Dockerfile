FROM ruby:2.5.3

RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y \
    nodejs \
    python-pygments
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/

RUN gem install \
  github-pages \
  jekyll \
  jekyll-redirect-from \
  kramdown \
  rdiscount

VOLUME /src
EXPOSE 4000

ADD . /src

WORKDIR /src
