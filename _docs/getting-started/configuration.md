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

Components requires a cipher to encrypt some sensible information using AES algorithm.

```bash
mkdir /opt/regards
openssl rand -hex 8 > /opt/regards/regards.key
```

For maximum security, cipher key should only be readable by user `regards`. We strongly advice you to execute the following commands as root:

```bash
chown regards:root /opt/regards/regards.key
chmod 0400 /opt/regards/regards.key
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
passwd rsins
useradd rsadmin -g regards -G rsadmin,rsrun
passwd rsadmin
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

We advise the following configuration of RabbitMQ for production environments, in /etc/rabbitmq/rabbitmq.conf:  
 -  vm_memory_high_watermark: 0.4
 -  disk_free_limit: {mem_relative, 2.0}

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

If you want increased security on RabbitMQ, you can run `rabbitmqctl set_permissions -p / regards_adm "^$"^$" "^$"` after REGARDS has been started at least once.

## Elasticsearch

Install [ElasticSearch](https://www.elastic.co/fr/downloads) 5.6.X.  
`Notice :` Do not use a further version like 6.X. 

If `grep vm.max_map_count /etc/sysctl.conf` returns empty, you need to execute the following:

```
sysctl -w vm.max_map_count=262144
echo "
vm.max_map_count=262144" >> /etc/sysctl.conf
```

We advise the following configuration for production environments:
 -  change **cluster.name**
 -  change **node.name**
 -  change **path.data**
 -  configure manually the list of hosts from the cluster 
 -  **gateway.recover_after_node** should be the number of node deployed in the cluster
 -  **discovery.zen.minimum_master_nodes** should be `n/2+1` when n is the number of node in the cluster
 -  Elasticsearch being taking advantage of some file system features, if elasticsearch has his dedicated server, **HEAP_SIZE** should be no more than half of the server memory.
 -  elasticsearch **HEAP_SIZE** should be no more than `32GB`
 -  **bootstrap.memory_lock** is set to `true`

For Red Hat OS, you just need to start it :

```bash
systemctl enable elasticsearch.service
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

If you use iptable as a firewall, we strongly recommand you to deny everything but what is needed.

### Everything is installed on same server

You need to open httpd or nginx port in the file `/etc/sysconfig/iptables`:

```
-A INPUT -p tcp -m state --state NEW -m tcp --dport 80 -j ACCEPT
```

### Otherwise

Here is a list of all flux needed by each microservice:

<table class="table table-striped">
  <col>
  <colgroup span="2"></colgroup>
  <colgroup span="2"></colgroup>
  <tr>
    <th rowspan="2">Protocol</th>
    <th colspan="1" scope="colgroup">Source</th>
    <th colspan="2" scope="colgroup">Target</th>
    <th rowspan="2">Flux description</th>
  </tr>
  <tr>
    <th scope="col">Component</th>
    <th scope="col">Component</th>
    <th scope="col">Port</th>
  </tr>
  <tr><td>tcp</td><td>rs-access-instance</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-access-instance</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-access-instance</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-admin-instance</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-admin-instance</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-admin-instance</td><td>RabbitMQ</td><td>15672</td><td>AMQP management(exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-admin-instance</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-admin-instance</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-admin-project</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-admin-project</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-admin-project</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-admin-project</td><td>RabbitMQ</td><td>15672</td><td>AMQP management(exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-admin-project</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-admin-project</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-dam</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-dam</td><td>rs-admin-project</td><td>9033</td><td>Access to project information (User/Role/Notification)</td></tr>
<tr><td>tcp</td><td>rs-dam</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-dam</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-dam</td><td>Elasticsearch</td><td>9200</td><td>Access to indexed data</td></tr>
<tr><td>tcp</td><td>rs-dam</td><td>RabbitMQ</td><td>15672</td><td>AMQP management (exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-dam</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-dam</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-dataprovider</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-dataprovider</td><td>rs-admin-project</td><td>9033</td><td>Access to project information (User/Role/Notification)</td></tr>
<tr><td>tcp</td><td>rs-dataprovider</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-dataprovider</td><td>rs-ingest</td><td>9044</td><td>Sends SIP</td></tr>
<tr><td>tcp</td><td>rs-dataprovider</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-dataprovider</td><td>RabbitMQ</td><td>15672</td><td>AMQP management(exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-dataprovider</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-dataprovider</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-ingest</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-ingest</td><td>rs-admin-project</td><td>9033</td><td>Access to project information (User/Role/Notification)</td></tr>
<tr><td>tcp</td><td>rs-ingest</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-ingest</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-ingest</td><td>rs-storage</td><td>9042</td><td>Sends AIP</td></tr>
<tr><td>tcp</td><td>rs-ingest</td><td>RabbitMQ</td><td>15672</td><td>AMQP management (exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-ingest</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-ingest</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-storage</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-storage</td><td>rs-admin-project</td><td>9033</td><td>Access to project information (User/Role/Notification)</td></tr>
<tr><td>tcp</td><td>rs-storage</td><td>rs-catalog</td><td>9036</td><td>Plugin CatalogSecurityDelegation</td></tr>
<tr><td>tcp</td><td>rs-storage</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-storage</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-storage</td><td>RabbitMQ</td><td>15672</td><td>AMQP management(exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-storage</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-storage</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-access-project</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-access-project</td><td>rs-admin-project</td><td>9033</td><td>Access to project information (User/Role/Notification)</td></tr>
<tr><td>tcp</td><td>rs-access-project</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-access-project</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-access-project</td><td>RabbitMQ</td><td>15672</td><td>AMQP management (exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-access-project</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-access-project</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-authentication</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-authentication</td><td>rs-admin-project</td><td>9033</td><td>Access to project information (User/Role/Notification)</td></tr>
<tr><td>tcp</td><td>rs-authentication</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-authentication</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-authentication</td><td>RabbitMQ</td><td>15672</td><td>AMQP management (exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-authentication</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-authentication</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>rs-admin-project</td><td>9033</td><td>Access to project information (User/Role/Notification)</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>rs-dam</td><td>9035</td><td>Accès aux informations sur les modèles</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>Elasticsearch</td><td>9200</td><td>Access to indexed data</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>RabbitMQ</td><td>15672</td><td>AMQP management (exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-catalog</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-access-instance</td><td>9040</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-access-project</td><td>9041</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-admin-instance</td><td>9037</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-admin-project</td><td>9033</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-authentication</td><td>9034</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-catalog</td><td>9036</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-dam</td><td>9035</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-dataprovider</td><td>9045</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-ingest</td><td>9044</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-order</td><td>9043</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-gateway</td><td>rs-storage</td><td>9042</td><td>Request routing</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>rs-admin-instance</td><td>9037</td><td>Access to instance information (tenant/Account)</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>rs-admin-project</td><td>9033</td><td>Access to project information (User/Role/Notification)</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>rs-catalog</td><td>9036</td><td>Access to indexed data</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>rs-config</td><td>9031</td><td>Get configuration</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>rs-dam</td><td>9035</td><td>Accès aux informations sur les modèles</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>rs-registry</td><td>9032</td><td>Microservice registering</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>rs-storage</td><td>9042</td><td>Sends AIP</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>RabbitMQ</td><td>15672</td><td>AMQP management (exchanges, queues, bindings, vhosts)</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>RabbitMQ</td><td>5672</td><td>sending/receiving AMQP messages</td></tr>
<tr><td>tcp</td><td>rs-order</td><td>PostgreSQL</td><td>5432</td><td>DB access</td></tr>
<tr><td>tcp</td><td>httpd</td><td>rs-gateway</td><td>9030</td><td>Access to backend</td></tr>
<tr><td>tcp</td><td>httpd</td><td>rs-front</td><td>80</td><td>Access to frontend</td></tr>
</table>

You can use utility developped by yours truly to ease your life a bit. It is located [here](https://github.com/RegardsOss/regards-deployment/tree/master/security/iptable-generator). You just need two CSV files (using `;` as separator): the above table, *Flow.csv*, and a file describing which component is deployed on which machine (IP), *CompoIp.csv*. Then you just need to compile the utility (`mvn clean install -Dmaven.test.skip=true`) and run the following command: `java -DcompoIpCsv=CompoIp.csv -DflowMatrix=Flow.csv -jar iptable-generator-1.0-SNAPSHOT-jar-with-dependencies.jar`. This will give a file with iptables correctly configured for each machine.

Here is an example of *CompoIp.csv*:
```csv
composant;ip
rs-config;192.168.0.1
rs-registry;192.168.0.2
rs-access-instance;192.168.0.1
rs-access-project;192.168.0.2
rs-admin-instance;192.168.0.1
rs-admin-project;192.168.0.1
rs-authentication;192.168.0.2
rs-catalog;192.168.0.2
rs-config;192.168.0.1
rs-dam;192.168.0.1
rs-dataprovider;192.168.0.1
rs-frontend;192.168.0.2
rs-gateway;192.168.0.2
rs-ingest;192.168.0.1
rs-order;192.168.0.2
rs-registry;192.168.0.2
rs-storage;192.168.0.1
Elasticsearch;192.168.0.3
RabbitMQ;192.168.0.3
PostgreSQL;192.168.0.3
httpd;192.168.0.4
```
With this example you'll obtain 4 files: REGARDS_iptables_192.168.0.1.txt, REGARDS_iptables_192.168.0.2.txt, REGARDS_iptables_192.168.0.3.txt, REGARDS_iptables_192.168.0.4.txt.  

Here is an example of obtained file, for REGARDS_iptables_192.168.0.1.txt:
```
# Rules for component rs-dataprovider
-A INPUT -p tcp -s 192.168.0.1 --dport 9045 -j ACCEPT
# Rules for component rs-ingest
-A INPUT -p tcp -s 192.168.0.2 --dport 9044 -j ACCEPT
-A INPUT -p tcp -s 192.168.0.1 --dport 9044 -j ACCEPT
# Rules for component rs-config
-A INPUT -p tcp -s 192.168.0.2 --dport 9031 -j ACCEPT
-A INPUT -p tcp -s 192.168.0.1 --dport 9031 -j ACCEPT
# Rules for component rs-dam
-A INPUT -p tcp -s 192.168.0.1 --dport 9035 -j ACCEPT
# Rules for component rs-admin-project
-A INPUT -p tcp -s 192.168.0.1 --dport 9033 -j ACCEPT
-A INPUT -p tcp -s 192.168.0.2 --dport 9033 -j ACCEPT
# Rules for component rs-storage
-A INPUT -p tcp -s 192.168.0.1 --dport 9042 -j ACCEPT
-A INPUT -p tcp -s 192.168.0.2 --dport 9042 -j ACCEPT
# Rules for component rs-access-instance
-A INPUT -p tcp -s 192.168.0.1 --dport 9040 -j ACCEPT
# Rules for component rs-admin-instance
-A INPUT -p tcp -s 192.168.0.1 --dport 9037 -j ACCEPT
-A INPUT -p tcp -s 192.168.0.2 --dport 9037 -j ACCEPT
```

## REGARDS inside systemctl

If you want to interface REGARDS and systemctl, you will need several service files.  
First `regards.service` which is defined as follow and located into `/etc/systemd/system/`  
```bash
# Copyright 2017-2019 CNES - CENTRE NATIONAL d'ETUDES SPATIALES
#
# This file is part of REGARDS.
#
# REGARDS is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# REGARDS is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with REGARDS. If not, see <http://www.gnu.org/licenses/>.

[Unit]
Description=REGARDS all installed service
After=
Before=

[Service]
Type=oneshot
RemainAfterExit=yes

ExecStart=/produit/regards/REGARDS/sbin/microservice_regards.sh start
ExecStop=/produit/regards/REGARDS/sbin/microservice_regards.sh stop

# Give a reasonable amount of time for the server to start up/shut down
TimeoutSec=300

[Install]
WantedBy=multi-user.target
```
Then if you want more precise control on microservices, you will need several files, in `/etc/systemd/system/`, with the format: `regards-<microservice_type>.service`, **\<microservice_type\>** being one of:  
  - config 
  - registry 
  - gateway 
  - admin-instance
  - admin 
  - authentication
  - storage
  - ingest
  - dam
  - catalog
  - order
  - dataprovider
  - access-instance
  - access-project 
  - frontend  

Here is an example:  
```bash
# Copyright 2017-2019 CNES - CENTRE NATIONAL d'ETUDES SPATIALES
#
# This file is part of REGARDS.
#
# REGARDS is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# REGARDS is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with REGARDS. If not, see <http://www.gnu.org/licenses/>.

[Unit]
Description=REGARDS all installed service
After=
Before=

[Service]
Type=oneshot
RemainAfterExit=yes

ExecStart=/produit/regards/REGARDS/sbin/microservice_regards.sh -t order start
ExecStop=/produit/regards/REGARDS/sbin/microservice_regards.sh -t order stop

# Give a reasonable amount of time for the server to start up/shut down
TimeoutSec=300

[Install]
WantedBy=multi-user.target
```

Then if you want to start or stop all microservices installed on the machine, you can simply execute `systemctl <start|stop> regards.service`. In cas you just need to restart one of the microservice, you can execute `systemctl restart regards-<microservice_type>.service`.

## Auto restart services on boot

Don't forget to restart services on boot:

```bash
systemctl enable httpd.service
systemctl enable elasticsearch.service
systemctl enable rabbitmq-server.service
systemctl enable postgresql-9.6.service
systemctl enable regards.service
```
