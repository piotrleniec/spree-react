FROM ruby:2.4.1

RUN curl -sL https://deb.nodesource.com/setup_7.x | bash
RUN apt-get install -y nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

WORKDIR /srv

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY client/package.json client/package.json
COPY client/yarn.lock client/yarn.lock
RUN yarn

COPY . .

ENV RAILS_ENV production
ENV SECRET_KEY_BASE 755f97ec69b9f4b3766b284494065c2f8bc1629c8f587e5fa1409c41b423119befb2de1a3e2182fb59cd650be2145aa8d70e3c7f155e2e37d077e86dcee8be0c

CMD ["rails", "s"]
