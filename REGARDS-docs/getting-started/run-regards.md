---
layout: classic-docs
title: How to start REGARDS with docker ?
short-title: Quick start with docker
categories:
  - getting-started
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

```bash
$ cd regards/docker/
$ docker-compose up -d
```

http://localhost:8888/rs-admin/default : returns the configuration for the corresponding microservice name

- Gateway: localhost:8000
- Registry: localhost:8761
- Config: localhost:8888
- phppgadmin: localhost:5080
- postgres: localhost:5432
- rabbitmq: localhost:5672 and localhost:15672

### Logs

```bash
docker-compose logs -f
```

### Stop

```
docker-compose down
```

### Update

If you want to update these Docker images, you need to run the following command:   

```
docker-compose pull
```

### Clean

Stop all containers  
```
docker stop $(docker ps -a -q)
```

Delete all stopped containers  
```
docker rm $(docker ps -a -q)
```