---
id: optimizations
title: Microservices optimizations
slug: /setup/swarm/advanced/optimizations/
sidebar_position: 7
---

### Introduction

REGARDS provides several type of configurations in order to optimize its performances:

- the number of parallel processes that can be run by microservice - this global thread pool will be **shared by all
  tenants** on every instance of microservice (`regards.jobs.pool.size`)
- the number of parallel database connections permitted **by tenant** and by microservice - a connection pool is created
  for every tenant on every instance of microservice (`regards.jpa.multitenant.maxPoolSize`)
- the number of entities handled inside a microservice process. Every REGARDS process exposes a property to override the
  number of entities handled *on a bulk*

:::caution Important
Usually, it is more efficient to configure each service to allow:

- a large number of parallel processes
- a small number of entities to process on every parallel process

But it depends on how many resources you can allocate to REGARDS services.
:::

:::info Implications
When you increase the number of parallel processes:

- you need to increase database connections
- you use more CPU,or vCPU, of your server

When you add more entities to handle by job/thread:

- you increase the amount of memory used on the server
- you increase the duration of the database commit
  :::

Default microservice configurations:

| Microservice       | Default RAM | Default job pool size (shared) | Default DB pool size (by tenant) |
|:-------------------|:------------|:-------------------------------|:---------------------------------|
| rs-config          | 128m        | None                           | None                             |
| rs-registry        | 128m        | None                           | None                             |
| rs-admin           | 512m        | None                           | 5 per tenant of the instance     |
| rs-admin-instance  | 512m        | None                           | 5 per instance                   |
| rs-access-project  | 512m        | None                           | 5 per tenant of the instance     |
| rs-access-instance | 512m        | None                           | 5 per instance                   |
| rs-dam             | 1280m       | None                           | 5 per tenant of the instance     |
| rs-ingest          | 1536m       | 5                              | 5 per tenant of the instance     |
| rs-fem             | 1024m       | 5                              | 5 per tenant of the instance     |
| rs-notifier        | 1280m       | 5                              | 5 per tenant of the instance     |
| rs-storage         | 1024m       | 5                              | 5 per tenant of the instance     |
| rs-dataprovider    | 1024m       | 5                              | 5 per tenant of the instance     |
| rs-catalog         | 1024m       | 5                              | 5 per tenant of the instance     |
| rs-order           | 1280m       | 5                              | 5 per tenant of the instance     |
| rs-worker-manager  | 1024m       | 5                              | 5 per tenant of the instance     |
| rs-processing      | 2048m       | 50                             | 5 per tenant of the instance     |
| rs-lta-manager     | 512m        | 5                              | 5 per tenant of the instance     |

:::info Many CPU adaptation
If your server(s) has a lot of CPU, or vCPU, we recommend you to increase on each microservice the value of job pool
size and DB pool size.  
Don't forget to **increase these properties together** to avoid DB connection starvation during microservice processes.
:::

### Ingest optimization

| Properties                                                                                                                                                      | Description                                                                       | default |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.ingest.configuration.jobs_pool_size`  <br/> REGARDS property:<br/> `regards.jobs.pool.size`                      | Maximum number of ingestion processes (ingest, delete, update...)                 | 2       |
| Ansible property: <br/>`group_docker_mservices.ingest.configuration.database_max_pool_size`  <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable                            | 5       |
| Ansible property: <br/>`group_docker_mservices.ingest.configuration.read_batch_size`  <br/> REGARDS property:<br/> `regards.storage.client.response.batch.size` | Number of storage request response to handle at a time                            | 500     |
| Ansible property: <br/>`group_docker_mservices.ingest.configuration.entities_per_job`  <br/> REGARDS property:<br/> `regards.ingest.aips.scan.iteration-limit`  | Number of entities to handle in one ingestion process (ingest, delete, update...) | 100     |

### FEM optimization

| Properties                                                                                                                                                   | Description                                                                 | default |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.fem.configuration.jobs_pool_size`  <br/> REGARDS property:<br/> `regards.jobs.pool.size`                      | Maximum number of FEM processes (ingest, delete, update...)                 | 2       |
| Ansible property: <br/>`group_docker_mservices.fem.configuration.database_max_pool_size`  <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable                      | 5       |
| Ansible property: <br/>`group_docker_mservices.fem.configuration.read_batch_size`  <br/> REGARDS property:<br/> `regards.fem.batch.size`                     | Number of FEM requests to handle at a time                                  | 1000    |
| Ansible property: <br/>`group_docker_mservices.fem.configuration.entities_per_job`  <br/> REGARDS property:<br/> `regards.fem.max.bulk.size`                 | Number of entities to handle in one FEM process (create, delete, update...) | 1000    |

### Notifier optimization

| Properties                                                                                                                                                        | Description                                                      | default |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.notifier.configuration.jobs_pool_size`  <br/> REGARDS property:<br/> `regards.jobs.pool.size`                      | Maximum number of Notifier processes (ingest, delete, update...) | 2       |
| Ansible property: <br/>`group_docker_mservices.notifier.configuration.database_max_pool_size`  <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable           | 5       |
| Ansible property: <br/>`group_docker_mservices.notifier.configuration.read_batch_size`  <br/> REGARDS property:<br/> `regards.notifier.batch.size`                | Number of AMQP Notifier requests to handle at a time             | 1000    |
| Ansible property: <br/>`group_docker_mservices.fem.configuration.entities_per_job`  <br/> REGARDS property:<br/> `regards.notifier.max.bulk.size`                 | Number of entities to handle in one Notifier process             | 1000    |

### Storage optimization

`Note` : It is recommended to not set a big value to the `read_batch_size` property for storage microservice.
Recommended value between `10 and 100`.

| Properties                                                                                                                                                         | Description                                                           | default |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.storage.configuration.jobs_pool_size`  <br/> REGARDS property:<br/> `regards.jobs.pool.size`                        | Maximum number of Storage processes (store, delete, copy...)          | 2       |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.database_max_pool_size`  <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize`   | Maximum number of parallel database connections usable                | 5       |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.read_batch_size`  <br/> REGARDS property:<br/> `regards.storage.availability.items.bulk.size` | Number of file availibility requests to handle at a time              | 10      |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.read_batch_size`  <br/> REGARDS property:<br/> `regards.storage.copy.items.bulk.size`         | Number of copy requests to handle at a time                           | 10      |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.read_batch_size`  <br/> REGARDS property:<br/> `regards.storage.deletion.items.bulk.size`     | Number of deletion requests to handle at a time                       | 10      |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.read_batch_size`  <br/> REGARDS property:<br/> `regards.storage.reference.items.bulk.size`    | Number of file reference requests to handle at a time                 | 10      |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.read_batch_size`  <br/> REGARDS property:<br/> `regards.storage.store.items.bulk.size`        | Number of store requests to handle at a time                          | 10      |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.entities_per_job`  <br/> REGARDS property:<br/> `regards.storage.cache.requests.per.job`      | Number of file availibility requests to handle in one Storage process | 100     |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.entities_per_job`  <br/> REGARDS property:<br/> `regards.storage.deletion.requests.per.job`   | Number of deletion requests to handle in one Storage process          | 100     |
| Ansible property: <br/>`group_docker_mservices.storage.configuration.entities_per_job`  <br/> REGARDS property:<br/> `regards.storage.storage.requests.per.job`    | Number of files to store requests to handle in one Storage process    | 100     |

### Data Management optimization

| Properties                                                                                                                                                  | Description                                                                                                   | default |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.dam.configuration.database_max_pool_size` <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable                                                        | 5       |
| Ansible property: <br/>`group_docker_mservices.dam.configuration.crawler_batch_size`  <br/> REGARDS property:<br/> `regards.crawler.max.bulk.size`          | Number of entities to request at a time from the data source to harvest                                       | 10000   |
| Ansible property: <br/>`group_docker_mservices.dam.configuration.crawler_rate_delay_ms`  <br/> REGARDS property:<br/> `regards.ingester.rate.ms`            | Time elapsed in milliseconds between two scans of configured crawlers to check if a datasource can be harvest | 60000   |

### Order optimization

| Properties                                                                                                                                                    | Description                                            | default |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.order.configuration.jobs_pool_size` <br/> REGARDS property:<br/> `regards.jobs.pool.size`                      | Maximum number of order processes                      | 5       |
| Ansible property: <br/>`group_docker_mservices.order.configuration.database_max_pool_size` <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable | 5       |
| Ansible property: <br/>`group_docker_mservices.order.configuration.entities_per_job` <br/> REGARDS property:<br/> `regards.order.batch.size`                  | Number of entities to handle in one Order process      | 1000    |

### Dataprovider optimization

| Properties                                                                                                                                                           | Description                                              | default |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.dataprovider.configuration.jobs_pool_size` <br/> REGARDS property:<br/> `regards.jobs.pool.size`                      | Maximum number of Dataprovider processes                 | 5       |
| Ansible property: <br/>`group_docker_mservices.dataprovider.configuration.database_max_pool_size` <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable   | 5       |
| Ansible property: <br/>`group_docker_mservices.dataprovider.configuration.entities_per_job` <br/> REGARDS property:<br/> `regards.acquisition.batch.size`            | Number of entities to handle in one Dataprovider process | 100     |

### Worker Manager optimization

| Properties                                                                                                                                                             | Description                                            | default |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.worker_manager.configuration.database_max_pool_size` <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable | 5       |
| Ansible property: <br/>`group_docker_mservices.worker_manager.configuration.read_batch_size` <br/> REGARDS property:<br/> `regards.worker_manager.request.bulk.size`   | Number of Worker Manager requests to handle at a time  | 1000    |

### Processing optimization

| Properties                                                                                                                                                         | Description                                            | default |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.processing.configuration.jobs_pool_size` <br/> REGARDS property:<br/> `regards.jobs.pool.size`                      | Maximum number of Processing processes                 | 50      |
| Ansible property: <br/>`group_docker_mservices.processing.configuration.database_max_pool_size` <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable | 5       |

### LTA Manager optimization

| Properties                                                                                                                                                          | Description                                                             | default |
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------|:--------|
| Ansible property: <br/>`group_docker_mservices.lta_manager.configuration.jobs_pool_size` <br/> REGARDS property:<br/> `regards.jobs.pool.size`                      | Maximum number of LTA Manager processes                                 | 5       |
| Ansible property: <br/>`group_docker_mservices.lta_manager.configuration.database_max_pool_size` <br/> REGARDS property:<br/> `regards.jpa.multitenant.maxPoolSize` | Maximum number of parallel database connections usable                  | 5       |
| Ansible property: <br/>`group_docker_mservices.lta_manager.configuration.entities_per_job`  <br/> REGARDS property:<br/> `regards.ltamanager.request.bulk.size`     | Number of entities to handle in one process (create, delete, update...) | 1000    |
