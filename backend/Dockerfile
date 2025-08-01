FROM ruby:3.2-alpine

RUN apk add --no-cache build-base postgresql-dev nodejs yarn

WORKDIR /app

COPY Gemfile* ./
RUN bundle install

COPY . .

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
