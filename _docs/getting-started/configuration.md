---
layout: classic-docs
title: Minimal server configuration
short-title: Server configuration
wip: true
categories:
  - getting-started
---
* automatic table of content
{:toc}

In this guide, we'll see what is expected by REGARDS components, then we will see how to configure components that we rely on.

## Prerequisites

### System

For a basic setup, to install REGARDS, PostgreSQL, RabbitMQ and ElasticSearch on a single server you will need :
- 16Gb RAM
- 4 to 8 vCPU

### Regards

Any server that hosts a REGARDS component needs :
- Java OpenJDK JRE 1.8
- access to the database PostgreSQL
- access to the message broker RabbitMQ

And for components `Data Management` and `Catalog`:
- access to the ElasticSearch

## Linux users

If you want to install the component with limited access rights (ie `Security Level` to `Enforce`), you need to create users and groups:
```shell
groupadd regards
groupadd rsins
groupadd rsexec
groupadd rsadmin
groupadd rsrun
useradd rsins -g rsins -G regards,rsexec,rsadmin,rsrun
printf 'rsins\nrsinsPassword\n' | passwd rsins
useradd rsadmin -g regards -G rsadmin,rsrun
printf 'rsadmin\nrsadminPassword\n' | passwd rsadmin
useradd regards --no-create-home --shell=/sbin/nologin -g regards -G rsexec,rsrun
```

And you need to create the installation folder with the good access rights:
```shell
mkdir /opt/regards
chown :regards /opt/regards
chmod 1770 /opt/regards
```
In that case the installation folder would be `/opt/regards/installationFolder`.

## Postgres

Install the database [PostgreSQL](https://www.postgresql.org/) 9.6.  
You can also install [phpPgAdmin](http://phppgadmin.sourceforge.net/doku.php) to monitor the database.

## RabbitMQ

Install RabbitMQ Server 3.6.8 [using the official documentation](https://www.rabbitmq.com/download.html#installation-guides).

Once you have installed RabbitMQ, you need to activate the management plugin

```bash
systemctl stop rabbitmq-server.service
su rabbitmq -s /bin/bash -c 'rabbitmq-plugins enable rabbitmq_management'
systemctl enable rabbitmq-server.service
systemctl start rabbitmq-server.service
```

Then, using the [RabbitMQ REST API](https://www.rabbitmq.com/rabbitmqctl.8.html#User_Management) or the management console, you need to activate the guest user, or create another one, that can : 
* create [vhosts](https://www.rabbitmq.com/vhosts.html) 
* add rights to others users

```
rabbitmqctl add_user regards_adm regards_adm
rabbitmqctl set_user_tags regards_adm administrator
```

## Elasticsearch

Install ElasticSearch 5.4 & Kibana 5

## Reverse proxy

Install NGinx or httpd as a reverse proxy.

For NGinx : 
```
worker_processes auto;

user root root;
pid /run/nginx.pid;

events {
    worker_connections 4096;
    use                epoll;
    multi_accept       on;
}

http {
    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include      /etc/nginx/mime.types;
    default_type application/octet-stream;

    access_log /var/log/nginx/access.log combined;
    error_log /var/log/nginx/error.log error;

    gzip         on;
    gzip_disable "msie6";

    client_max_body_size 100M;

    upstream gateway {
        server rs-gateway:9030;
    }

    server {
        listen 80 default_server;

        location /api/v1/ {
           proxy_set_header X-Forwarded-Host $host:$server_port;
           proxy_pass http://gateway/api/v1/;
        }

        location /zuul/api/v1/ {
           proxy_set_header X-Forwarded-Host $host:$server_port;
           proxy_pass http://gateway/zuul/api/v1/;
        }

        location / {
            root /var/www;
            # Always serve index.html for any request
            try_files $uri /index.html;
            # kill cache
            add_header Last-Modified $date_gmt;
            add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
            if_modified_since off;
            expires off;
            etag off;
        }
    }
}
```

For httpd :
```
vi /etc/httpd/conf/httpd.conf
<IfModule mod_proxy.c>
        <Proxy *>
          Order deny,allow
          Deny from all
        </Proxy>
        ProxyRequests Off
        ProxyPreserveHost Off
</IfModule>

cat > /etc/httpd/conf.d/httpd-proxy.conf <<FIN_CAT
ProxyVia On
<IfModule mod_proxy.c>
    <VirtualHost *:80>
        ProxyPass "/kibana/"       "http://localhost:5601/"                connectiontimeout=5 timeout=30
        ProxyPass "/api/v1/"       "http://localhost:8000/api/v1/"         connectiontimeout=5 timeout=30
        ProxyPass "/zuul/api/v1/"  "http://localhost:8000/zuul/api/v1/"    connectiontimeout=5 timeout=30
        ProxyPass "/"              "http://localhost:3333/"                connectiontimeout=5 timeout=30
        ProxyPreserveHost Off
    </VirtualHost>
</IfModule>
 
<Directory />
    Options None
    Order deny,allow
    deny from all
    <LimitExcept GET HEAD POST DELETE PUT>
        order deny,allow
        deny from all
    </LimitExcept>
</Directory>
 
<Location "/" >
    Order deny,allow
    <LimitExcept GET HEAD POST DELETE PUT>
        order deny,allow
        deny from all
    </LimitExcept>
</Location>
FIN_CAT
```
