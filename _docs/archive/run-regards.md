---
layout: classic-docs
title: How to start REGARDS with docker ?
short-title: Quick start with docker
---


You can run the REGARDS ecosystem easily by using docker and docker-compose.
Keep in mind that this configuration shall not be used in a production environnement.

### Requirements

You need to create a docker network to launch the REGARDS backend on your computer.
```
docker network create --driver bridge regards_network --subnet 10.11.1.0/24
```

You also need to change the value of `max_map_count` of your system to be able to run ElasticSearch. If the following command returns nothing, you need to configure your system:
```
grep vm.max_map_count /etc/sysctl.conf
```

Nothing returned ? Run the following command (to avoid to reboot your computer):
```
sudo sysctl -w vm.max_map_count=262144
```

Finally, execute the following command to save that setting on your computer forever:
```
echo "
vm.max_map_count=262144" >> /etc/sysctl.conf
```

### Run REGARDS 

#### Bootstrap

```bash
$ cd regards/docker/
$ docker-compose up -d rs_kibana rs_postgres rs_rabbitmq
$ docker-compose up -d rs_authentication
$ docker-compose up -d
```

#### Microservices adresses

- rs-ateway: localhost:9030
- rs-registry: localhost:9032
- rs-config: localhost:9031
- rs-authentication: localhost:9034
- rs_admin: localhost:9033
- rs_dam: localhost:9035
- rs_catalog: localhost:9036
- rs_access_instance: localhost:9040
- rs_access_project: localhost:9041
- rs_frontend: localhost:9020

#### Tools

- phppgadmin: localhost:5080
- postgres: localhost:5432
- rs_rabbitmq: localhost:5672 and localhost:16672
- rs_kibana: localhost:5601 
- rs_maildev: localhost:5081

### Logs

```bash
docker-compose logs -f
```

```bash
docker-compose logs -f --tail=200 rs_dam
```

### Stop

```bash
docker-compose down
```

### Update

If you want to update these Docker images, you need to run the following command:   

```bash
docker-compose pull
```

### Clean

Stop all containers  
```bash
docker stop $(docker ps -a -q)
```

Delete all stopped containers  
```bash
docker rm $(docker ps -a -q)
```
