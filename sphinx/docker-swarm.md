# Docker SWARM for GEODE

## Docker

### Install

[Install docker](https://docs.docker.com/install/)

### Configuration

`daemon.json` configures :

* `data-root`: images and volumes directory
* `dns`: CS DNS
* `bip`: CIDR subnetwork for Docker0
* `insecure-registries`: CS Nexus Repository Manager 

/etc/docker/daemon.json
```json
{ 
   "data-root": "/home/docker",
   "dns": "172.26.46.46",
   "bip": "10.11.0.1/25",
   "insecure-registries":["172.26.46.158"]
}
```

or

```properties
[Service]
ExecStart=
ExecStart=/usr/bin/dockerd --data-root=/home/docker --bip 10.11.0.1/25 --dns 172.26.46.46
```


HTTP proxy has to be configured through service functionnality:

/etc/systemd/system/docker.service.d/http-proxy.conf
```properties
[Service]
Environment="HTTP_PROXY=http://proxy2.si.c-s.fr:3128/" "NO_PROXY=localhost,127.0.0.1,172.26.46.158,172.26.47.52,172.26.47.107,172.26.47.112"
```

https://docs.docker.com/config/daemon/systemd/

Customize `ingress`:

https://docs.docker.com/network/overlay/

```bash
docker network create \
  --driver overlay \
  --ingress \
  --subnet=10.11.1.0/24 \
  --gateway=10.11.1.2 \
  --opt com.docker.network.driver.mtu=1200 \
  rs-ingress
```

Customize `gwbridge`:

```bash
docker network create \
--subnet 10.11.0.128/25 \
--opt com.docker.network.bridge.name=docker_gwbridge \
--opt com.docker.network.bridge.enable_icc=false \
--opt com.docker.network.bridge.enable_ip_masquerade=true \
docker_gwbridge
```

Add `regards_network`:


```bash
docker network create \
 --driver overlay \
 --subnet=10.11.2.0/24 \
 --gateway=10.11.2.1 \
 regards_network
```

## Elasticsearch

Edit /etc/sysctl.conf

```
sudo sysctl -w vm.max_map_count=262144
```

es-data & es-backup en 2777