FROM jekyll/jekyll:3.8.4

WORKDIR /tmp
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install

WORKDIR /srv/jekyll
