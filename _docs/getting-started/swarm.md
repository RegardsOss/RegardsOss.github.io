---
layout: classic-docs
title: Getting started with Docker Swarm using Ansible
short-title: Swarm install
---

{% include toc.md %}

> The Ansible & Swarm deployment is in early stage and may not be publicly available at the time we publish this documentation
{: .tip .info}

# Install

Let's install REGARDS on a swarm server !

## Requirements

We won't treat here how to setup these requirements as they have some good tutorials outhere.

### Software requirements

- Ansible `2.6.2` at least
- Docker `19.03.8` at least
- Redhat `CentOS_7.6.1810` or equivalent
- REGARDS `1.1.0` at least

### Settings & Environnement

- `/var/lib/docker` must exists
- You must provide a network volume (`NFS` or equivalent) to swarm workers
- An user having **sudo rights**
- A container registry with our images pushed, your user has access to REGARDS images
- Docker with user namespace
- Swarm workers are connected to master
- Either an access to mutualised COTS, or the right configuration on the host. We already treat the basic setup of these COTS [here](/getting-started/configuration), you need to look for `kernel.shmmax`, `vm.max_map_count`

> The root access is required to install files using Ansible with specific owner. You can release such user access after Ansible installation.
{: .tip .info}

### COTS versions

We expected these COTS:

- Postgres `11.5`
- RabbitMQ `3.8.2`
- ElasticSearch `6.5.0`

### Users

First usecase: there is an IPA managing users / groups on your targeted VMs. We want a secure installation where accessing and managing data are splitted into two differents groups.

|User|Group|Description|Tips|
|:--:|:--:|:---------:|:---------:|
|`dockermapuid`| `dockermapgid` |Used by the docker daemon|This group is internal to the server|
|| `gregards_admin` |Regroup all users that are allowed to monitor the stack|Facultative, `johndoe` can also replace this one|
|`docker-regards-data`| `gregards_data` |IPA User/Group owning all files created by REGARDS|Your user should be inside that group|
|`johndoe`| `johndoe`, `dockermapgid`, `gregards_admin`, `gregards_data` |Your personnal user|Your user has access to Docker, to the stack and the workspace|
|`mariecurie`| `mariecurie`, `gregards_data` |Some user|She has access to data, not the stack itself|
{:.table.table-striped}

Other usecase. You install everything as root, you don't have an IPA.

|User|Group|Description|Tips|
|:--:|:--:|:---------:|:---------:|
|`dockermapuid`| `dockermapgid` |Used by the docker daemon||
|`docker-regards-data`| `gregards_data` |Local User/Group owning all files created by REGARDS|Even with root install, we still respect Docker user namespace !!|
|`root`| `root` |Used to install the stack|
{:.table.table-striped}

## Ansible

### Get the source

The repository is not public yet !

You will find :

- `inventories`: stores where and what you want to install
- `roles`: stores Ansible tasks
- `regards.yml`, `regards-*.yml`,... that links roles and tags to execute  

### Create your inventory

Let's create our new inventory. You should create a new inventory each time you deploy REGARDS on a new stack.
In this guide, we'll create a new inventory named `prod-regards-cnes` (our convention is `<dev|prod>-<swarm-master-hostname>`)

```bash
cd playbooks/inventories/
mkdir prod-regards-cnes
```

Now you can create the `hosts` file inside your folder `playbooks/inventories/prod-regards-cnes` with the following:

```env
[master]
swarm-host ansible_host=regards-cnes-d21-myorganisation.com

[slaves]
swarm-worker-1 ansible_host=regards-cnes-d22-myorganisation.com
swarm-worker-2 ansible_host=regards-cnes-d23-myorganisation.com

[postgres]
swarm-worker-1

[rabbitmq]
swarm-worker-1

[elasticsearch]
swarm-worker-2
```

Let's see this step by step :

```env
[master]
swarm-host ansible_host=regards-cnes-d21-myorganisation.com
```

Here we create inside the `master` tag a node named `swarm-host`. We provide the `ansible_host`, but we do not provide `ansible_user=root` or `ansible_password=rootpassword` so it will use the current user (and Ansible doesn't expect password prompt).

```env
[slaves]
swarm-worker-1 ansible_host=regards-cnes-d22-myorganisation.com
swarm-worker-2 ansible_host=regards-cnes-d23-myorganisation.com
```

Then we create two nodes `swarm-worker-1` and `swarm-worker-2` in the `slaves` tag. We need to provide a way to connect to these hosts  as we did for the `master` tag.

```env
[postgres]
swarm-worker-1

[rabbitmq]
swarm-worker-1

[elasticsearch]
swarm-worker-2
```

Now we link some node to these tags `postgres`, `rabbitmq` and `elasticsearch`. You need to provides these tags if you don't have mutualised instances of these COTS.

> `swarm-host`, `swarm-worker-1` and `swarm-worker-2` are not used outside this file and can be named how you want ! You can be creative !
{: .tip .info}

### Inventory configuration

Finally, you need to create the file `playbooks/inventories/prod-regards-cnes/group_vars/all/main.yml`. 

You can either copy one of the others inventories we provide or start with a fresh one:

```yaml
# Network disk shared accross every nodes
group_workdir_network: /NETWORK_DATA/regards/
# Do we allow root inside the network volume?
# When false => group_workdir_network is entirely mounted to containers
# As we cannot chown folders inside that volume
group_workdir_network_allow_root: true
# Everything stored in the workdir_local is not shared across swarm nodes. 
# We replicate everything on each swarm node to let microservice spawn whatever they want
group_workdir_local: /opt/regards/

group_stack_name: 'regards-cnes'
group_setype: 'container_file_t'
group_seuser: 'system_u'

# Used to create folders that are not mounted into containers, but mappable by Docker
group_container_root_user: 'dockermapuid'
group_container_root_group: 'gregards_admin'
# Used to create folders mounted by containers, all files created by containers will use this user
group_container_run_user: 'docker-regards-data'
group_container_run_group: 'gregards_data'
# User and group ids to run containers, which shall be root inside containers
# and fallback to group_container_run_user:group_container_run_group on the host server
group_container_run_uid: 3050
group_container_run_gid: 1050

group_docker_network_name: 'regards_network_6'
group_docker_network_ip_network: '10.11.6.'

group_docker_registry: artifactory.myorganisation.com/docker-regards-prod

group_docker_tag: 'V1.1.0'

# Plugins
group_docker_plugins:
  - image: rs-plugins
    tag: "{{ "{{" }} group_docker_tag }}"

# Stack
group_docker_mservices:
  config:
    tag: "{{ "{{" }} group_docker_tag }}"
  registry:
    tag: "{{ "{{" }} group_docker_tag }}"
  gateway:
    tag: "{{ "{{" }} group_docker_tag }}"
  admin_instance:
    tag: "{{ "{{" }} group_docker_tag }}"
  admin:
    tag: "{{ "{{" }} group_docker_tag }}"
  authentication:
    tag: "{{ "{{" }} group_docker_tag }}"
  dam:
    tag: "{{ "{{" }} group_docker_tag }}"
  notifier:
    tag: "{{ "{{" }} group_docker_tag }}"
  fem:
    tag: "{{ "{{" }} group_docker_tag }}"
  catalog:
    tag: "{{ "{{" }} group_docker_tag }}"
  access_instance:
    tag: "{{ "{{" }} group_docker_tag }}"
  access:
    tag: "{{ "{{" }} group_docker_tag }}"
  front:
    http: 9080
    public_url: http:\/\/regards-cnes-d21-myorganisation.com:9080
    tag: "{{ "{{" }} group_docker_tag }}"
  storage:
    tag: "{{ "{{" }} group_docker_tag }}"
  order:
    tag: "{{ "{{" }} group_docker_tag }}"
  ingest:
    tag: "{{ "{{" }} group_docker_tag }}"
  dataprovider:
    tag: "{{ "{{" }} group_docker_tag }}"

# COTS
group_docker_cots:
  elasticsearch:
  elasticsearch_logs:
  kibana:
  kibana_logs:
    http: 9081
  fluent:
  maildev:
  postgres:
  phppgadmin:
  rabbitmq:

# COTS configuration
group_docker_cots_configuration:
  postgres:
    nbTenant: 5
  elasticsearch:
    cluster_name: regards
  elasticsearch_logs:
    cluster_name: regards_logs


group_config_mservices:
  init_project: project1

```

Global properties :

|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|`dockermapuid`| `String` |Network disk shared accross every nodes|Required|
|`group_workdir_network_allow_root`| `Bool` |Do we allow root inside the network volume?|Required|
|`group_workdir_local`| `String` |Local folder where regards is installed on every node|Required|
|`group_stack_name`| `String` |Unique stack name (for swarm)|Required. `[a-z-]*`|
|`group_setype`| `String` |SELinux type|Required|
|`group_seuser`| `String` |SELinux user|Required|
|`group_container_root_user`| `String` |User owning the REGARDS folder tree, Docker must have read/write access|Required|
|`group_container_root_group`| `String` |Group owning the REGARDS folder tree|Required|
|`group_container_run_user`| `String` |All files created by containers will use this user|Required|
|`group_container_run_group`| `String` |All files created by containers will use this user|Required|
|`group_container_run_uid`| `Int` |Run user id. The container is also run with this id + your docker user namespace (See `group_container_run_user`)|Required|
|`group_container_run_gid`| `Int` |Run group id. (See `group_container_run_group`)|Required|
|`group_docker_network_name`| `String` |Docker network name. Automatically created by Ansible|Required|
|`group_docker_network_ip_network`| `String` |Docker network ip|Required. If a basic IPV4 looks like `A.B.C.D`, you must to provide `A.B.C.`|
|`group_docker_registry`| `String` |Docker registry holding REGARDS images|Required|
{:.table.table-striped}

Microservices properties :

|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|`group_docker_tag`| `String` |Used to store docker image tag version|Facultative. Only used in this file.|
|`group_docker_plugins`| `Array` |Used to store docker plugins to execute.|Required. Can be empty.|
|`group_docker_plugins[].image`| `String` |Docker image name of the plugin that stores plugins you want to install on REGARDS|Required.|
|`group_docker_plugins[].tag`| `String` |Docker image tag|Required.|
|`group_docker_mservices`| `Object` |List of microservices that will be deployed|Required. Some of these keys are facultative, but config, registry, gateway, admin_instance & admin should not be removed|
|`group_docker_mservices.<anybackendmicroservice>.tag`| `String` |Docker image tag that will be deployed|Required.|
|`group_docker_mservices.<anybackendmicroservice>.http`| `String` |Open the public HTTP port of the service (bypass reverse proxy + gateway)|Facultative.|
|`group_docker_mservices.<anybackendmicroservice>.jdwp`| `String` |Open a public port to debug a microservice with your IDE|Facultative.|
|`group_docker_mservices.<anybackendmicroservice>.jmx`| `String` |Open the JMX port|Facultative.|
|`group_docker_mservices.front.tag`| `String` |Docker image tag that will be deployed|Required.|
|`group_docker_mservices.front.http`| `Int` |Open the HTTP port of the NGINX to let users access to the front|Facultative.|
|`group_docker_mservices.front.public_url`| `String` |Public adress that will be used to access to the front|Facultative.|
{:.table.table-striped}

If you don't have mutualised COTS, don't worry. You can deploy yours and use mutualised ones later.

|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|`group_docker_cots`| `Object` |List COTS that will be deployed|Required. Can be empty.|
|`group_docker_cots.elasticsearch`| `Object` |When defined, boots an ElasticSearch|Facultative.|
|`group_docker_cots.elasticsearch.http`| `Int` |When defined, opens the HTTP port|Facultative.|
|`group_docker_cots.elasticsearch.client`| `Int` |When defined, opens the client port|Facultative.|
|`group_docker_cots.elasticsearch_logs`| `Object` |When defined, boots an ElasticSearch to store logs|Facultative.|
|`group_docker_cots.elasticsearch_logs.http`| `Int` |When defined, opens the HTTP port|Facultative.|
|`group_docker_cots.elasticsearch_logs.client`| `Int` |When defined, opens the client port|Facultative.|
|`group_docker_cots.kibana`| `Object` |When defined, boots a Kibana linked to `elasticsearch`|Facultative.|
|`group_docker_cots.kibana.http`| `Int` |When defined, opens the HTTP port|Facultative.|
|`group_docker_cots.kibana_logs`| `Object` |When defined, boots a Kibana linked to `elasticsearch_logs`|Facultative.|
|`group_docker_cots.kibana_logs.http`| `Int` |When defined, opens the HTTP port|Facultative.|
|`group_docker_cots.fluent`| `Object` |When defined, boots Fluentd|Facultative. Empty.|
|`group_docker_cots.maildev`| `Object` |When defined, boots a local SMTP server Mailchimp|Facultative.|
|`group_docker_cots.maildev.http`| `Int` |When defined, opens the HTTP port|Facultative.|
|`group_docker_cots.postgres`| `Object` |When defined, boots Postgres|Facultative. Empty.|
|`group_docker_cots.postgres.client`| `Int` |When defined, open the TCP port|Facultative.|
|`group_docker_cots.phppgadmin`| `Object` |When defined, boots a PGAdmin|Facultative.|
|`group_docker_cots.phppgadmin.http`| `Int` |When defined, open the HTTP port|Facultative.|
|`group_docker_cots.rabbitmq`| `Object` |When defined, boots a RabbitMQ|Facultative.|
|`group_docker_cots.rabbitmq.client`| `Int` |When defined, open the TCP port|Facultative.|
|`group_docker_cots.rabbitmq.http`| `Int` |When defined, open the HTTP port|Facultative.|
|`group_docker_cots_configuration`| `Object` |List COTS specific configuration|Required. Can be empty|
|`group_docker_cots_configuration.postgres.nbTenant`| `Int` |Use to deduce the number of connections Postgres should allow|Required when `group_docker_cots.postgres` is defined|
|`group_docker_cots_configuration.elasticsearch.cluster_name`| `Int` |Elasticsearch cluster name|Required when `group_docker_cots.elasticsearch` is defined|
|`group_docker_cots_configuration.elasticsearch_logs.cluster_name`| `Int` |Logging elasticsearch cluster name|Required when `group_docker_cots.elasticsearch_logs` is defined|
{:.table.table-striped}

The last but not least, the configuration of microservices :

|Path|Type|Description|Constraints|
|:--:|:--:|:---------:|:---------:|
|`group_config_mservices`| `Object` |Microservices configuration|Required.|
|`group_docker_mservices.init_project`| `String` |Name of the default project|Required.|
|`group_docker_mservices.instance_admin`| `Object` |Instance admin account definition|Facultative.|
|`group_docker_mservices.instance_admin.user`| `String` |Name of the instance admin|Facultative. Default: `regards-admin@c-s.fr`|
|`group_docker_mservices.instance_admin.password`| `String` |Password of the instance admin|Facultative. Default: `root_admin`|
|`group_docker_mservices.jwt_secret`| `String` |JWT secret|Facultative. Recommended for production.|
|`group_docker_mservices.cipher_iv`| `String` |Cipher IV|Facultative. Recommended for production.|
|`group_docker_mservices.mail`| `Object` |Mail configuration used by microservices|Facultative.|
|`group_docker_mservices.mail.host`| `String` |SMTP Host|Facultative. Default: `rs-maildev`|
|`group_docker_mservices.mail.port`| `Int` |SMTP port|Facultative. Default: `1025`|
|`group_docker_mservices.mail.username`| `String` |SMTP username|Facultative. Empty by default|
|`group_docker_mservices.mail.password`| `String` |SMTP password|Facultative. Empty by default|
|`group_docker_mservices.mail.noreply`| `String` |No reply adress|Facultative. Default: `regards@noreply.fr`|
|`group_docker_mservices.amqp`| `Object` |AMQP configuration|Facultative.|
|`group_docker_mservices.amqp.user`| `String` |AMQP username|Facultative. Default: `guest`|
|`group_docker_mservices.amqp.password`| `String` |AMQP password|Facultative. Default: `guest`|
|`group_docker_mservices.postgres`| `Object` |Postgres configuration|Facultative.|
|`group_docker_mservices.postgres.user`| `String` |Postgres username|Facultative. Default: `azertyuiop123456789`|
|`group_docker_mservices.postgres.password`| `String` |Postgres password|Facultative. Default: `azertyuiop123456789`|
|`group_docker_mservices.proxy`| `Object` |Proxy configuration|Facultative.|
|`group_docker_mservices.proxy.host`| `String` |Proxy username|Facultative. Empty by default|
|`group_docker_mservices.proxy.port`| `Int` |Proxy port|Facultative. Empty by default|
|`group_docker_mservices.proxy.username`| `String` |Proxy username|Facultative. Empty by default|
|`group_docker_mservices.proxy.password`| `String` |Proxy password|Facultative. Empty by default|
{:.table.table-striped}

## Deploy

Running the Ansible installation is quite easy. Run the following command in the `playbooks` folder :

```bash
$ ansible-playbook -i inventories/prod-regards-cnes regards.yml

[..]
PLAY RECAP *******************************************************************************************************
swarm-host                 : ok=23   changed=8    unreachable=0    failed=0    skipped=1    rescued=0    ignored=0
swarm-worker-1             : ok=18   changed=6    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
swarm-worker-2             : ok=17   changed=5    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0
```

That's it!

# Administration

Connect to the master node of your stack, and open the working directory of REGARDS.  
You need these two values from your inventories :

```yaml
group_workdir_local: /opt/regards/
group_stack_name: 'regards-cnes'
```

It means your stack is installed inside `/opt/regards/regards-cnes`.

Open this folder and go to the cli folder:

```bash
cd /opt/regards/regards-cnes/cli
```

Let's look at these scripts :

- `exec.sh`: let you go inside a running container. For advanced debugging.
- `logs.sh`: let you display container logs from a running container. Once the stack is running fine, you should prefer to use Kibana to see logs
- `reboot.sh`: let you reboot a container
- `status.sh`: display the status of your stack (running container, how many containers are missing, history)
- `update-all.sh`: boot or update the stack using stack files. It checks for updated images on the Docker registry, and track updates on files available on the master node.
- `update.sh`: let you fetch an updated docker image and reboot only that single container. For advanced usage, you should prefer `update-all.sh`.

If you want to stop the stack, you can execute the following (note we use the `group_stack_name`) :

```bash
docker stack rm regards-cnes
```

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

Let's see how I can debug some microservice.
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

Not, it doesn't like it. Now we can restart the ElasticSearch by just running :

```bash
./update-all.sh
```

Now we can run again `status.sh` :

```bash
# ./status.sh 
[HISTORY]	5 PREVIOUS CONTAINERS
ID      NAME                                               IMAGE                                                                     NODE                                  DESIRED STATE CURRENT STATE [..]
86m..   regards-cnes_rs-fluent.w4pf3rfr47yjny8y2jmvy9n0s   172.26.46.158/regards-fluent:latest@sha256:4e733e[...]                    regards-cnes-d12.myorganisation.com   Shutdown      Shutdown 2 minutes ago
nhu..   regards-cnes_rs-fluent.jh7i65fsxbrnce85yjexucna3   172.26.46.158/regards-fluent:latest@sha256:4e733e[...]                    regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 2 minutes ago
778..   regards-cnes_rs-fluent.iodt1aszolajpqq5f12q12v1w   172.26.46.158/regards-fluent:latest@sha256:4e733e[...]                    regards-cnes-d11.myorganisation.com   Shutdown      Shutdown 2 minutes ago
ty0..   regards-cnes_rs-authentication.1                   172.26.46.158/rs-authentication:fast-release-V1.1.0@sha256:875ca2aa[..]   regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago
7yw..   regards-cnes_rs-access-project.1                   172.26.46.158/rs-access-project:fast-release-V1.1.0@sha256:17a0d7e9[..]   regards-cnes-d13.myorganisation.com   Shutdown      Shutdown 3 minute ago
[RUNNING]	25/25
[..]
```

We see in the history the last activity starts to be old (2 mins) and there is again 25/25 services deployed.
