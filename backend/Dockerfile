FROM ruby:3.2-alpine

RUN apk add --no-cache build-base postgresql-dev postgresql-libs nodejs yarn libc6-compat yaml-dev
RUN apk add --no-cache tzdata
RUN gem install bundler -v 2.7.0

WORKDIR /app

COPY Gemfile* ./
RUN bundle install

COPY . .

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
