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

### Run REGARDS

```bash
$ cd regards/docker/
$ docker-compose up -d
```

http://localhost:8888/rs-admin/default : returns the configuration for the corresponding microservice name

| Gateway         | Registry       | Config         | phppgadmin     | postgres       | rabbitmq           |
| ----------------|:--------------:| :-------------:| :-------------:| :-------------:| :-----------------:|
| localhost:8000  | localhost:8761 | localhost:8888 | localhost:5080 | localhost:5432 | 5672 & 15672(Admin)|

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