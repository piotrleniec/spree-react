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

RUN RAILS_ENV=build rails assets:precompile
RUN rm db/build.sqlite3

ENV RAILS_ENV production

CMD ["rails", "s"]
