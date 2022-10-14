---
id: microservice-setup
title: Deploy required microservices
slug: /setup/swarm/microservice-setup
---

## Update inventory with microservices you need


:::info 
The next section will describe all REGARDS microservices and how to enable them.
:::


### Disable/enable a REGARDS microservice

If you look at your inventory file `regards-cnes/group_vars/regards_nodes/main.yml`, you may see that many microservices are commented.

```yml
# Stack
group_docker_mservices:
  access_project:
    tag: "{{ group_docker_tags.back }}"
#  notifier:
#    tag: "{{ group_docker_tags.back }}"
#  fem:
#    tag: "{{ group_docker_tags.back }}"
#  storage:
#    tag: "{{ group_docker_tags.back }}"
#  order:
#    tag: "{{ group_docker_tags.back }}"
#  ingest:
#    tag: "{{ group_docker_tags.back }}"
#  dataprovider:
#    tag: "{{ group_docker_tags.back }}"
#  processing:
#    tag: "{{ group_docker_tags.back }}"
#  worker_manager:
#    tag: "{{ group_docker_tags.back }}"
  front:
    protocol: http
```

If you uncomment a microservice, like so:

```yml
# Stack
#  fem:
#    tag: "{{ group_docker_tags.back }}"
  storage:
    tag: "{{ group_docker_tags.back }}"
#  order:
#    tag: "{{ group_docker_tags.back }}"
```

It means to the playbook that the microservice storage will be activate on the next deployment.

### Internal catalogs

There is 3 types of crawler that lets REGARDS populate its meta-catalog :
 - the *internal* [OAIS catalog](../../user-guide/import-data/oais-files/introduction/)
 - the *internal* [GeoJSON catalog](../../user-guide/import-data/fem/introduction/)
 - or an *external* [datasource](../../user-guide/crawler/configure-connection/) (an OpenSearch Web source, an external Database...)

All types of crawlers can be active at the same time, but you may not need them on your instance at the same time.

:::info Activate microservice carrefully
If you activate only the microservices you need, the admin HMI will not show you the configuration and pages related to everything you have desactivated !  
Activate them only if you need them. 
:::

Here is the difference between these two internal catalogs:

|                                              |                                OAIS Manager (Ingest)                                |                                                  Feature Manager (FEM)                                                 |
|----------------------------------------------|:-----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------:|
| Populate using REST                          |                                          Y                                          |                                                            Y                                                           |
| Populate using AMQP (faster)                 |                                          Y                                          |                                                            Y                                                           |
| Product deletion                             |                                          Y                                          |                                                            Y                                                           |
| Product update                               |                  No<br/>To update a product, use product versionning                 |                                                            Y                                                           |
| Product versionning                          |                                          Y                                          |                                                            Y                                                           |
| Product creation tools                       | Scan yours files using <br/>[Data acquisition chains](../../user-guide/import-data/scanned-files/manage-acquisition-chains/)<br/>in order to generate SIP |                                                           DIY                                                          |
| Product creation feedback <br/>using AMQP     |                            Y                           |                                      Y                                       |
| Product creation feedback<br/>using REST API  | Y                                                                                   | Y                                                                                                                      |
| Product creation feedback<br/>using HMI       | Y                                                                                   | Y                                                                                                                      |
| Creation payload format                      |                   Strict<br/>List of SIP<br/> matching [OAIS standard](../../development/appendices/oais/)                  |                                Open<br/>List of Feature<br/>that are valid REGARDS feature                               |
| Creation payload validation                  |                                          Y                                          |                                                            Y                                                           |
| Model validation                             |                                    No validation                                    |                                       Feature must be valid against REGARDS model                                      |
| Product enhancement                          |                     Optional enhancement<br/>using custom plugins                    | Features can be enhancement by workers and then referenced or updated<br/>Enrichment is delegated to the worker system. |
| Sending product to <br/>microservice Notifier |                                          Y                                          |                                                            Y                                                           |
| Goal                                         |                                    Perennisation                                    |                           A flow between many applications<br/>with complex product lifecycle                           |
Activate the Ingest microservice : 
```yml
# Replace
#  ingest:
#    tag: "{{ group_docker_tags.back }}"
# By
  ingest:
    tag: "{{ group_docker_tags.back }}"
```

Activate the Feature Manager microservice : 
```yml
# Replace
#  fem:
#    tag: "{{ group_docker_tags.back }}"
# By
  fem:
    tag: "{{ group_docker_tags.back }}"
```

:::info
If you want to crawl an external datasource, do not activate any of these internal catalogs.
:::

### Create Ingest product using DataProvider

The microservice DataProvider allows you to create your products using [Data acquisition chains](../../user-guide/import-data/scanned-files/manage-acquisition-chains/). It scans files on disk and creates SIP according to these files.  
Here are some core features of DataProvider :
- Regroup several files inside a product (SIP)
- Scan the folder periodically in order to create new product when they are available
- When necessary, product generation can be fully customized using dedicated plugin to extract metadata from the filename or the file content 

Activate the DataProvider microservice : 
```yml
# Replace
#  dataprovider:
#    tag: "{{ group_docker_tags.back }}"
# By
  dataprovider:
    tag: "{{ group_docker_tags.back }}"
```

This microservice requires : `Ingest`

### File management using Storage

The Storage microservice can store on [different types of storage system](../../user-guide/project-configuration/storages/):
- Online storages : local disk, NFS...
- Nearline storages : Tape Backup, S3 Glacier...

But it also manages *external* files that are already available through an existing REST HTTP(S) server.

|                                             |     File already available <br/>through existing REST HTTP(S) server     |                                                     File NOT available <br/>through existing REST HTTP(S) server                                                     |
|:-------------------------------------------:|:---------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| On file indexed inside <br/>internal catalog |         Reference the provided <br/>remote server <br/>file link        | Two possibilities :<br/>- copy the file to one/many storage sytems<br/>- reference provided file link, as it is <br/>already associated to an existing storage system |
|    Expose file <br/>through STORAGE REST API   | No<br/>Storage does not proxy over <br/>the existing REST HTTP(S) server |                                                                                 Y                                                                                 |
|        Enable nearline storage system        |                                   N                                   |                                                                                 Y                                                                                 |

Once a file is managed by the Storage microservice, its products can be ordered by users.

:::info
Any product coming from an internal catalog will use the Storage microservice to reference or store its files
:::

Activate the Storage microservice : 
```yml
# Replace
#  storage:
#    tag: "{{ group_docker_tags.back }}"
# By
  storage:
    tag: "{{ group_docker_tags.back }}"
```

This microservice requires : `FEM` or `Ingest`

### Internal and external notification management

The microservice Notifier receives all FEM and Ingest products everytime they change.  
It allows you to emit a notification to any system with a very granular syntax to decide whenever a product must be sent to some destination.  
The Notifier plugin system allows you to adapt the content of the notification sent to match your needs.

Activate the Notifier microservice : 
```yml
# Replace
#  notifier:
#    tag: "{{ group_docker_tags.back }}"
# By
  notifier:
    tag: "{{ group_docker_tags.back }}"
```

This microservice requires : `FEM` or `Ingest`

### Workers manager

The microservice WorkerManager is still under development. 
It is a powerful system designed to handle any type of task on your workflow.  
For example, you can raise a product notification using Notifier microservice to ask a worker to enhance the product.  
The worker can read the file and send an update request into the internal catalog. 

As there is no Worker available, you do not need to enable this service yet.

### Orders management

The microservice Order allows [users to make orders](../../user-guide/order/introduction/).  
If this system is not active, orders are not available.

Activate the Order microservice : 
```yml
# Replace
#  order:
#    tag: "{{ group_docker_tags.back }}"
# By
  order:
    tag: "{{ group_docker_tags.back }}"
```

This microservice requires : `Storage`

### Process orders

The microservice Processing allows you to [process ordered datafiles](../../user-guide/order/processing/).  
Once configured, the user can choose to activate a processing on its ordered data :
- Convert the project of a NetCDF file
- Crop a file
- Call external processing system
- ...

Activate the Processing microservice : 
```yml
# Replace
#  processing:
#    tag: "{{ group_docker_tags.back }}"
# By
  processing:
    tag: "{{ group_docker_tags.back }}"
```

This microservice requires : `Order`

## Run changes

Once you have edited your inventory, you must execute the following command to update the stack:

```bash
# cd regards-docker-master/
ansible-playbook -i inventories/<inventory name> regards.yml <additional parameters>
```

That's it!

### Full setup conclusion

Congratulations, your REGARDS installation is over.

Execute `./health.sh all` and wait all microservices are 200 :

```bash
$ ./health.sh all
[200]	fem
[200]	admin
[200]	dam
[200]	processing
[200]	storage
[200]	access_project
[200]	ingest
[200]	admin_instance
[200]	order
[200]	catalog
[200]	access_instance
[200]	worker_manager
[200]	dataprovider
[200]	notifier
[200]	authentication
```

