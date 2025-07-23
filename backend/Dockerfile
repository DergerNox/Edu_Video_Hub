FROM ruby:3.2

# Set environment variables
ENV RAILS_ENV=development
ENV BUNDLER_VERSION=2.4.22

# Install dependencies
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs yarn

# Set working directory
WORKDIR /app

# Copy Gemfile and install gems
COPY Gemfile* ./
RUN gem install bundler -v $BUNDLER_VERSION
RUN bundle install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000
