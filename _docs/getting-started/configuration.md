---
layout: classic-docs
title: Minimal server configuration
short-title: Server configuration
---

{% include toc.md %}

In this guide, we'll see what is expected by REGARDS components, then we will see how to configure components that we rely on.

## Prerequisites

### System

For a basic setup, to install REGARDS, PostgreSQL, RabbitMQ and ElasticSearch on a single server, you will need :

- 16Gb RAM
- 4 to 8 vCPU

We'll assume you want to install REGARDS in `/opt/regards`, so don't forget to adapt this path if you install it somewhere else.

### Regards

Any server that hosts a REGARDS component needs:

- Java OpenJDK JRE 1.8
- access to the database PostgreSQL
- access to the message broker RabbitMQ
- access to a SMTP mail server

And for components `Data Management` and `Catalog`:

- access to the ElasticSearch

### SMTP mail server

You can use any SMTP mail server you want. The connection properties have to be provided during the REGARDS installation.

### Password

The component `rs-admin-instance` requires a cipher to validate password using SHA.

```bash
mkdir /opt/regards
openssl rand -hex 8 > /opt/regards/regards.key
```

The Izpack installer will ask you where is located the `regards.key` file, so put it in the REGARDS root folder.

## Linux users

If you want to install the component with limited access rights (ie `Security Level` to `Enforce`), you need to create users and groups:
```shell
groupadd regards
groupadd rsins
groupadd rsexec
groupadd rsadmin
groupadd rsrun
useradd rsins -g rsins -G regards,rsexec,rsadmin,rsrun
printf 'rsins\nrsins\n' | passwd rsins
useradd rsadmin -g regards -G rsadmin,rsrun
printf 'rsadmin\nrsadmin\n' | passwd rsadmin
useradd regards --no-create-home --shell=/sbin/nologin -g regards -G rsexec,rsrun
```

And you need to update access rights of the installation folder:

```shell
chown :regards /opt/regards
chmod 1770 /opt/regards
```

## Postgres

Install the database [PostgreSQL](https://www.postgresql.org/) 9.6.X.  
`Notice :` Do not use a further version like 10.X. 

You can also install [phpPgAdmin](http://phppgadmin.sourceforge.net/doku.php) to monitor the database.  

Here is how to init Postgres on Red Hat OS:

```bash
su postgres -s /bin/bash -c '/usr/pgsql-9.6/bin/initdb -D /var/lib/pgsql/9.6/data/'
systemctl start postgresql-9.6.service
```

This is how to create a postgres user named `rs_postgres` using the PostgreSQL cli:

```bash
cd /
su postgres 
createuser -P --interactive rs_postgres
# Define that user password, then
# answer no to all questions
```

After your user is created, you have to add the authentication method in the pg_hba.conf. Here under is an exemple for local authentication.
```bash
# "local" is for Unix domain socket connections only
local   all             rs_postgres                             md5
local   all             postgres                                md5
# IPv4 local connections:
host    all             all             127.0.0.1/32            md5
```

You will need at least two databases, one for REGARDS instance and one for the first REGARDS project.

```bash
createdb -O rs_postgres -E UTF8 rs_instance
createdb -O rs_postgres -E UTF8 rs_project1
```

  
If you want to use REGARDS with a large number of projects, you may need to configure the maximum number of connections allowed by your postgres server. Indeed, in REGARDS each project needs a connection pool with at least 3connections per microservice.  

For exemple if you install all REGARDS project microservices (9) you will need 27 (9microservices * 3connections) connections per project.  

By default a postgres server allows 100 connections per server. So if you not planning to use more than 3 projects you don't need any modifications. So if you plan to create more than 3 projects you have to increase the maximum number of allowed connections.  
To do so : 

1. Increase max_connection and shared_buffers
```bash
in /var/lib/pgsql/data/postgresql.conf
Change
max_connections = 100
shared_buffers = 24MB

to
max_connections = 300
shared_buffers = 80MB
```
2. Change kernel.shmmax
```bash
In /etc/sysctl.conf
kernel.shmmax=100663296
```

Notice : REGARDS project microservices are `access-project`, `admin`, `authentication`, `catalog`, `dam`, `dataprovider`, `ingest`, `order` and `storage`

## RabbitMQ

Install RabbitMQ Server 3.6.X [using the official documentation](https://www.rabbitmq.com/download.html#installation-guides).  
`Notice :` Do not use a further version like 3.7.X.

Then on Red Hat OS, you need to create some basic configuration:
```
# Provide a default configuration
cp /usr/share/doc/rabbitmq-server-3.6.8/rabbitmq.config.example /etc/rabbitmq/rabbitmq.config.ori
cp /etc/rabbitmq/rabbitmq.config.ori /etc/rabbitmq/rabbitmq.config

# Create localhost configuration file
echo "
vm.max_map_count=262144" >> /etc/sysctl.conf

# Allow the rabbitmq default user to manage its config files
chown -R :rabbitmq  /etc/rabbitmq
chmod 0770 /etc/rabbitmq
chmod 0640  /etc/rabbitmq/*

# Start the service 
systemctl start rabbitmq-server.service
```

Once you have installed RabbitMQ, you need to activate the management plugin

```bash
su rabbitmq -s /bin/bash -c 'rabbitmq-plugins enable rabbitmq_management'
```

Then, using the [RabbitMQ REST API](https://www.rabbitmq.com/rabbitmqctl.8.html#User_Management) or the management console, you need to activate the guest user, or create another one, that can :

- create [vhosts](https://www.rabbitmq.com/vhosts.html)
- add rights to others users

```bash
# Create a RabbitMQ admin named regards_adm
rabbitmqctl add_user regards_adm regards_adm
rabbitmqctl set_user_tags regards_adm administrator
rabbitmqctl set_permissions -p / regards_adm ". ".*" "."
```



## Elasticsearch

Install [ElasticSearch](https://www.elastic.co/fr/downloads) 5.6.X.  
`Notice :` Do not use a further version like 6.X. 

If `grep vm.max_map_count /etc/sysctl.conf` returns empty, you need to execute the following:

```
sysctl -w vm.max_map_count=262144
echo "
vm.max_map_count=262144" >> /etc/sysctl.conf
```

For Red Hat OS, you just need to start it :

```bash
systemctl start elasticsearch.service
```

## Kibana

`This COTS is non-mandatory but higly recommended for administrators of REGARDS system.`  

Installation of [Kibana](https://www.elastic.co/fr/downloads) 5.X.  
`Notice :` Do not use a further version like 6.X. 

This web server allows you to manage the content of your elasticsearch indexes. 

## Reverse proxy

Install [NGinx](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/) (1.15+) or [httpd](http://httpd.apache.org/docs/current/fr/install.html) (2.X+) as a reverse proxy, it handles on a single port (80 or 443) all trafic for the REGARDS.

### httpd

For httpd, edit the file `/etc/httpd/conf/httpd.conf`:

```
<IfModule mod_proxy.c>
        <Proxy *>
          Order deny,allow
          Deny from all
        </Proxy>
        ProxyRequests Off
        ProxyPreserveHost Off
</IfModule>
```

Then create the configuration:

```bash
cat > /etc/httpd/conf.d/httpd-proxy.conf <<FIN_CAT
ProxyVia On
<IfModule mod_proxy.c>
    <VirtualHost *:80>
        ProxyPass "/kibana/"       "http://localhost:5601/"                connectiontimeout=5 timeout=30
        ProxyPass "/api/v1/"       "http://localhost:9030/api/v1/"         connectiontimeout=5 timeout=30
        ProxyPass "/zuul/api/v1/"  "http://localhost:9030/zuul/api/v1/"    connectiontimeout=5 timeout=30
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

For Red Hat OS, you need to start it:

```bash
systemctl start httpd.service
```

If you are using a `Red Hat OS` with `selinux`, you will need to autorize httpd to connect to the network, even a local one. If the following property is off :

```bash
$ getsebool -a | grep httpd_can_network_connect
httpd_can_network_connect --> off
```

You need to execute the following:

```bash
/usr/sbin/setsebool -P httpd_can_network_connect 1
```

### NGinx

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

## Firewall

If you use iptable as a firewall, you need to open its port in the file `/etc/sysconfig/iptables`:

```
-A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -j ACCEPT
```

## Auto restart services on boot

Don't forget to restart services on boot:

```bash
systemctl enable httpd.service
systemctl enable elasticsearch.service
systemctl enable rabbitmq-server.service
systemctl enable postgresql-9.6.service
```
