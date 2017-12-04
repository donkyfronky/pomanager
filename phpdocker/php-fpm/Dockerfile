FROM phpdockerio/php71-fpm:latest
WORKDIR "/application"

# Install selected extensions and other stuff
RUN apt-get update \
    && apt-get -y --no-install-recommends install  php-memcached php7.1-mysql php7.1-pgsql php-redis php7.1-sqlite3 php7.1-bz2 php7.1-gd php7.1-imap php-imagick php7.1-intl php7.1-mbstring php-ssh2 php-xhprof php-xdebug \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

# Install git
RUN apt-get update \
    && apt-get -y install git \
    && apt-get -y install zip \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*
    
RUN curl --silent --show-error https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer