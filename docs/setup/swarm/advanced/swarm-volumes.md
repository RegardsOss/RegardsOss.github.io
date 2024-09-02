---
id: swarm-mount
title: Mount volumes, configs...
slug: /setup/swarm/advanced/swarm-mount
sidebar_position: 9
---

This guide allows you to describe, inside your inventory, volumes, configs and secrets files containers have access to
once they have booted.

:::info Benefits
You should avoid any manual operation that can be fully automated by Ansible : connecting NFS to your container,
creating local folders, mounting config and secret files inside services...  
**All configurations that describe platform deployment should be shared under source control.**
:::

:::warning Cons about volume usage
Docker Swarm cannot update volume definitions on-the-fly. If you do **an update on an existing Docker Swarm volume**,
please shutdown the REGARDS stack then run it again using `regards.yml`.  
This issue does not concern configs, secrets and new Docker Swarm volume.  
:::

### Inventory configuration file

The REGARDS convention is to save these information inside :  
`inventories/<your inventory>/group_vars/regards_nodes/mounts.yml`

If you don't have the `mounts.yml` file, you can initiate it with the following code, which is the default mounting if
you don't have it yet:

```yml
# Define volumes, REGARDS volumes, configs and secrets
group_docker_mounts:
  # Define NFS configurations used by REGARDS volumes
  nfs: [ ]
  # Allow some files inside <inventory>/static/... to be attached 
  # to frontend / workers containers as Secret file (read only) 
  secrets: [ ]
  # Allow some files inside <inventory>/static/... to be attached 
  # to frontend / workers containers as Config file (read only) 
  configs: [ ]
  volumes: [ ]
  regards:
    # Common input folder for dataprovider, fem, ingest and storage
    data_inputs: [ ]
```

The default configuration does not use any NFS server, all files are considered to be stored locally on the main server
by the playbook. Thus, you should deploy REGARDS on one single node.  
If you have more than one server, the default configuration is insufficient: if a running container on `node1` writes
some files on its local disk workdir and reboots on `node2`, it won't find its file unless you reboot the service
on `node1`.

### NFS definition

You can define a list of **Network File System servers** REGARDS will connect to as following:

```yml
group_docker_mounts:
  nfs:
    - name: nfs-regards-qua
      config:
        o: rw,relatime,vers=4.0,[...],addr=<nfs server adress>
        device_prefix: "<nfs domain name when existing>:/path/to/regards/workspace/"
    - name: nfs-mission1
      config:
        o: rw,relatime,vers=4.0,[...],addr=<nfs server adress>
        device_prefix: "<nfs domain name when existing>:/MISSION1"
```

This example defines 2 NFS :

- a NFS server `nfs-regards-qua` used by REGARDS on the Qualification environment to store its files (cache, workdir..)
- a NFS server `nfs-mission1` that holds products for the mission `MISSION1`

| Field Name           | Mandatory | Description                                                                                                        |
|----------------------|-----------|--------------------------------------------------------------------------------------------------------------------|
| name                 | x         | Unique identifier of the NFS server                                                                                |
| config.o             | x         | NFS configuration to connect to                                                                                    |
| config.device_prefix | x         | Prefix of the path inside the NFS server every volume share. Must be accessible by the REGARDS runtime docker user |
| config.type          |           | (Default value `nfs`) - Driver used by Docker swarm                                                                |

You will be able to use the same NFS server, using its name, on several mount definitions.
See [Volume definition](#volume-definition), [Data inputs](#data-inputs)
and [Workdir configuration](#workdir-configuration).

### Data inputs

Data inputs configuration allow you to define a Docker Swarm volume that is automatically mounted on dataprovider, fem,
ingest and storage services.  
It allows REGARDS to access to your data.

```yml
group_docker_mounts:
  [ ... ]
  regards:
    data_inputs:
      - name: local-input-datastore
        local: true
        source: "{{ group_workdir_local }}{{ group_stack_name }}/workspace/regards/input"
        destination: /input
      - name: mission1-datastore
        nfs: nfs-mission1
        device_postfix: ""
        destination: /data/MISSION1
```

| Field Name     | Mandatory              | Description                                                                                                                                                                               |
|----------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name           | x                      | Name of the Docker Swarm volume (must be unique)                                                                                                                                          |
| destination    | x                      | Mount path inside the container                                                                                                                                                           |
| local          |                        | (Default value `false`) - Mount a local path from the server                                                                                                                              |
| source         | When `local=true`      | Mount a local path from a host server to the container                                                                                                                                    |
| nfs            | When `local` undefined | Identifier of the NFS server defined in `group_docker_mounts.nfs`                                                                                                                         |
| device_postfix | When `nfs` provided    | (Default value is an empty string) A postfix path to add to the `nfs.device_prefix` to obtain the path inside the NFS server. <br/> `final path` = `nfs.device_prefix` + `device_postfix` |

### Volume definition

Volumes allow you to define Docker Swarm volumes. Unlike the Data inputs configuration, you need to explicitly mount
these volumes to services. Volume definitions and Data inputs share the same syntax except there is no `destination`
property.

```yml
group_docker_mounts:
  [ ... ]
  volumes:
    - name: front-public-volume
      nfs: nfs-regards-qua
      device_postfix: "regards/www"
    - name: myworker-workspace-volume
      local: true
      source: "{{ group_workdir_local }}{{ group_stack_name }}/workspace/regards/myworker"
```

### Mount volume to services

Once Docker swarm volumes are defined, either from [Volume definition](#volume-definition)
or [Data inputs](#data-inputs), you can attach them using the `volumes` property inside any service definition. Data
inputs are automatically attached to dataprovider, fem, ingest and storage services.

```yml
group_docker_mservices:
  front:
    [ ... ]
    volumes:
      - source: front-public-volume
        destination: /var/www/public/
```

### Config and secrets files

Our playbook allows you to transfer a file located inside your inventory into the main Swarm manager host. Then, when
your stack boots, the file is read by Swarm in memory and sent over the network to any host running container requiring
the Config or Secret file. Again, the main point is to share configs and secret files (
see [Encrypt secrets file using Ansible Vault](/docs/setup/swarm/advanced/ansible-vault#encrypt-file)) under source
control.  
When you deploy a new version of a config or secret file, any container link to that file will be recreated with the
updated version of that file.

:::warning Cons
The file cannot exceed 500kb  
Config and secret file names must be unique
:::

- The first step is to create a folder named `files` inside `inventories/<your inventory>/group_vars/regards_nodes/`
- You can create any file tree inside the `files` folder if you have many configs and secrets files
- Copy your files
- Now, define the list of configs and secrets like this:

```yml
group_docker_mounts:
  secrets:
    - file: some_secret.key
      path: private/folder/
      # Files location is <inventory>/static/private/folder/some_secret.key
  configs:
    - file: attributeOrder.properties
      path: config-extraction
      # Files location is <inventory>/static/config-extraction/attributeOrder.properties
    - file: my-background.jpg
      path: www
      # Files location is <inventory>/static/www/my-background.jpg
```

### Mount configs and secrets to services

Once configs and secrets are defined, you can attach them using the `configs` and `secrets` property inside any service
definition

```yml
group_docker_mservices:
  front:
    [ ... ]
    configs:
      - source: my-background.jpg
        destination: /var/www/background/my-background.jpg
```

You can attach the same config or secret file to several services.

### Workdir configuration

REGARDS is configured by default to use the local disk for all workspaces deployed.  
Every workdir configuration shares the same syntax :

| Field Name     | Mandatory | Description                                                                                                                                                                  |
|----------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| local          |           | (Default value `true`) - When true, mount a (not configurable) local path from the server to the service                                                                     |
| nfs            |           | Identifier of the NFS server defined in `group_docker_mounts.nfs`                                                                                                            |
| device_postfix |           | (Default value below) A postfix path to add to the `nfs.device_prefix` to obtain the path inside the NFS server. <br/> `final path` = `nfs.device_prefix` + `device_postfix` |

The `device_postfix` has a default value that depends of the workdir you are configuring:

| Property                  | `device_postfix` value    | 
|---------------------------|---------------------------| 
| elasticsearch.data        | elasticsearch/data        | 
| elasticsearch.backup      | elasticsearch/backup      | 
| elasticsearch_logs.data   | elasticsearch/data-logs   | 
| elasticsearch_logs.backup | elasticsearch/backup-logs | 
| postgresql                | postgresql/               | 
| rabbitmq                  | rabbitmq                  | 
| minio                     | minio/                    | 
| regards.processing        | regards/processing        | 
| regards.dam               | regards/storage/dam       | 
| regards.workspace         | regards/workspace         | 
| regards.storage.onlines   | regards/storage/onlines   | 
| regards.storage.cache     | regards/storage/cache     | 
| regards.logs              | regards/logs/             | 
| regards.plugins           | regards/plugins/          | 

Most of the time, you want to provide a NFS to REGARDS for all its workdir, but you can have a single workdir on its own
NFS, dependending of your needs.

```yml
  regards:
    # For DAM documents
    dam:
      nfs: nfs-regards-cnes-qua
    storage:
      # For online local storages
      online:
        nfs: nfs-regards-cnes-qua
      # For STORAGE cache
      cache:
        nfs: nfs-regards-cnes-qua
    # Common microservices workspace directory
    workspace:
      nfs: nfs-regards-cnes-qua
    processing:
      nfs: nfs-regards-cnes-qua
    # Microservices plugins directory
    plugins:
      nfs: nfs-regards-cnes-qua
  #  elasticsearch:
  #    data:
  #    backup:
  #  rabbitmq:
  #  minio:
  #  postgresql:
```

:::info Multi node deployment, CoTS and replication
You can configure CoTs workdir too, but be careful :  
it's preferable to deploy a RabbitMQ cluster than a single instance.  
In a RabbitMQ cluster, every RabbitMQ replica needs local disk and not NFS mount.
:::
