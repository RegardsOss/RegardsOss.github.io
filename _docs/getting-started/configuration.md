---
layout: classic-docs
title: Minimal server configuration
short-title: Server configuration
wip: true
categories:
  - getting-started
---

In this guide, we'll see what is expected by REGARDS components, then we will provide a tutorial to configure components that we rely on.

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

## Postgres install

Database PostgreSQL 9.6

## RabbitMQ

RabbitMQ Server 3.6.5
- The server and the management plugin
- A user having rights to create virtual hosts and to add rights to other users on the broker.

## Elasticsearch

ElasticSearch 5.4