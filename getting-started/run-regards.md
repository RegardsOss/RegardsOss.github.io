---
layout: classic-docs
title: Quick start with REGARDS
short-title: Quick start REGARDS
categories:
  - getting-started
---


You can run the REGARDS ecosystem easily by using docker and docker-compose.

### Requirements

You need to create a docker network to launch the REGARDS backend on your computer.
```
docker network create --driver bridge regards_network --subnet 10.11.1.0/24
```

### Run REGARDS

```bash
docker-compose up -d
```
| Gateway| Registry |
|---|---|
|localhost:8000 | localhost:8761 |

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
