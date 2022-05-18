---
id: swarm-cli
title: REGARDS Command line interface
sidebar_label: Administration
slug: /setup/swarm/cli/
---


## REGARDS stack Administration tools

Connect to the master node of your stack, and open the REGARDS working directory.  
To do that, you need these two values from your inventories :

```yaml
group_workdir_local: /opt/regards/
group_stack_name: 'regards'
```

It means your stack is installed inside `/opt/regards/regards`.

Open this folder and go to the cli folder:

```bash
cd /opt/regards/regards/cli
```

Let's look at these scripts :

- `exec.sh`: let you go inside a running container. For advanced debugging.
- `logs.sh`: let you display container logs from a running container. Once the stack is running fine, you should prefer to use Kibana to see logs
- `reboot.sh`: let you reboot a container
- `status.sh`: display the status of your stack (running container, how many containers are missing, history)
- `deploy.sh`: boot or update the stack using stack files. It checks for updated images on the Docker registry, and track updates on files available on the master node.
- `update.sh`: let you fetch an updated docker image and reboot only that single container. For advanced usage, you should prefer `deploy.sh`.
- `shutdown.sh` : let you completly shutdown the regards swarm stack.
- `health.sh` : let you retrieve microservices global heathness for a specific tenant.

When you deploy the stack, you should run `status.sh` to see if containers are running:

```bash
[HISTORY]	5 PREVIOUS CONTAINERS
nothing found in stack: regards-cnes
[RUNNING]	25/25
ID      NAME                                               IMAGE                                            NODE                                 [..]  CURRENT STATE      [..]
86..    regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   myregistry/regards-fluent:latest              regards-cnes-d12.myorganisation.com      Running 23 hours ago
nh..    regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   myregistry/regards-fluent:latest              regards-cnes-d13.myorganisation.com      Running 23 hours ago
77..    regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   myregistry/regards-fluent:latest              regards-cnes-d11.myorganisation.com      Running 23 hours ago
ij..    regards-cnes_rs-admin.1                            myregistry/rs-administration:V1.1.0           regards-cnes-d11.myorganisation.com      Running 23 hours ago
lh..    regards-cnes_rs-postgres.1                         myregistry/regards-database:latest            regards-cnes-d12.myorganisation.com      Running 23 hours ago
vm..    regards-cnes_rs-phppgadmin.1                       myregistry/regards-phpmyadmin:latest          regards-cnes-d12.myorganisation.com      Running 23 hours ago
59..    regards-cnes_rs-notifier.1                         myregistry/rs-notifier:V1.1.0                 regards-cnes-d11.myorganisation.com      Running 23 hours ago
3r..    regards-cnes_rs-logs-elasticsearch.1               myregistry/regards-elasticsearch:latest       regards-cnes-d13.myorganisation.com      Running 23 hours ago
jd..    regards-cnes_rs-kibana.1                           myregistry/regards-kibana:latest              regards-cnes-d13.myorganisation.com      Running 23 hours ago
3t..    regards-cnes_rs-dam.1                              myregistry/rs-dam:V1.1.0                      regards-cnes-d12.myorganisation.com      Running 23 hours ago
ir..    regards-cnes_rs-access-instance.1                  myregistry/rs-access-instance:V1.1.0          regards-cnes-d11.myorganisation.com      Running 23 hours ago
pp..    regards-cnes_rs-fem.1                              myregistry/rs-fem:V1.1.0                      regards-cnes-d12.myorganisation.com      Running 23 hours ago
lx..    regards-cnes_rs-config.1                           myregistry/rs-config:V1.1.0                   regards-cnes-d11.myorganisation.com      Running 23 hours ago
2k..    regards-cnes_rs-authentication.1                   myregistry/rs-authentication:V1.1.0           regards-cnes-d13.myorganisation.com      Running 23 hours ago
mh..    regards-cnes_rs-catalog.1                          myregistry/rs-catalog:V1.1.0                  regards-cnes-d12.myorganisation.com      Running 23 hours ago
qu..    regards-cnes_rs-registry.1                         myregistry/rs-registry:V1.1.0                 regards-cnes-d13.myorganisation.com      Running 23 hours ago
8m..    regards-cnes_rs-rabbitmq.1                         myregistry/regards-messaging:latest           regards-cnes-d12.myorganisation.com      Running 23 hours ago
n9..    regards-cnes_rs-maildev.1                          myregistry/regards-maildev:latest             regards-cnes-d13.myorganisation.com      Running 23 hours ago
m8..    regards-cnes_rs-logs-kibana.1                      myregistry/regards-kibana:latest              regards-cnes-d12.myorganisation.com      Running 23 hours ago
ke..    regards-cnes_rs-elasticsearch.1                    myregistry/regards-elasticsearch:latest       regards-cnes-d13.myorganisation.com      Running 23 hours ago
kw..    regards-cnes_rs-access-project.1                   myregistry/rs-access-project:V1.1.0           regards-cnes-d13.myorganisation.com      Running 23 hours ago
51..    regards-cnes_rs-gateway.1                          myregistry/rs-gateway:V1.1.0                  regards-cnes-d13.myorganisation.com      Running 23 hours ago
jd..    regards-cnes_rs-front.1                            myregistry/rs-front:V1.1.0                    regards-cnes-d13.myorganisation.com      Running 23 hours ago
y4..    regards-cnes_rs-admin-instance.1                   myregistry/rs-administration-instance:V1.1.0  regards-cnes-d13.myorganisation.com      Running 23 hours ago
```

In the history, there is no container starting again and again every minutes. That's what we're expecting in a production environment.  
Moreover, we display the number of running containers and the number of expected ones. In this exemple everything is fine (`[RUNNING]	25/25`).
The current state of these containers is also important. You need to wait 5 to 15 minutes to see if containers succeed to boot, some containers are waiting to others so they usually crash in that short period if there is some files unwritable, COTS not accessible...

:::info
The number of running services depends of your inventory. You may see less actives services than this exemple, but the `[RUNNING]	X/X` must equals 100%.
:::

You can run the script `health.sh` to check the healthness returned by each microservice of the stack, for a specfic tenant.

```bash
./health.sh demo
[200]	fem
[200]	admin
[200]	dam
[200]	processing
[200]	storage
[200]	authentication
[200]	ingest
[200]	admin_instance
[200]	access
[200]	catalog
[200]	access_instance
[200]	order
[200]	dataprovider
[200]	notifier
```

:::info
The microservice healthness is still in a early access and not heavily tested.
:::

## Simple debugging

Now, let's see how you can debug some microservice.
First, let's remove the elasticsearch:

```bash
docker service scale regards-cnes_rs-elasticsearch=0
```

Then, reboot dam:

```bash
./reboot.sh rs-dam
```

Now we can read logs of the booting dam to see if it succeed to boot without ElasticSearch :

```bash
$./logs.sh rs-dam -f
regards-cnes_rs-dam.1.w5gxg6x1mn2x@regards-cnes-d13.myorganisation.com    | 2020-05-12 10:49:54,315 [rs-dam] [main            ] ERROR o.s.boot.SpringApplication []    - Application run failed
[..]
regards-cnes_rs-dam.1.w5gxg6x1mn2x@regards-cnes-d13.myorganisation.com    | Caused by: java.net.UnknownHostException: rs-elasticsearch: Try again
```

Definitly, it doesn't like it. Now we can restart the ElasticSearch by just running :

```bash
./deploy.sh
```

Now we can run again `status.sh` :

```bash
# ./status.sh 
[HISTORY]	5 PREVIOUS CONTAINERS
ID      NAME                                               IMAGE                                                                     NODE                                  DESIRED STATE CURRENT STATE [..]
86m..   regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d12.myorganisation.com   Shutdown      Shutdown 2 minutes ago
nhu..   regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 2 minutes ago
778..   regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   myregistry/regards-fluent:latest@sha256:4e733e[...]      regards-cnes-d11.myorganisation.com   Shutdown      Shutdown 2 minutes ago
ty0..   regards-cnes_rs-authentication.1                   myregistry/rs-authentication:V1.1.0@sha256:875ca2aa[..]  regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago
7yw..   regards-cnes_rs-access-project.1                   myregistry/rs-access-project:V1.1.0@sha256:17a0d7e9[..]  regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago
[RUNNING]	25/25
[..]
```

We see in the history the last activity starts to be old (2 mins) and there is again 25/25 services deployed.
