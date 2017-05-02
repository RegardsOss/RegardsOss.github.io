FROM ruby:2.1
ENV HTTP_PROXY http://proxy2.si.c-s.fr:3128
ENV http_proxy http://proxy2.si.c-s.fr:3128
ENV https_proxy http://proxy2.si.c-s.fr:3128
ENV HTTPS_PROXY http://proxy2.si.c-s.fr:3128

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

COPY jekyll /src

WORKDIR /src
