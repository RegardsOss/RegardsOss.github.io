---
id: swarm-setup
title: Inventory configuration for microservices optimization
slug: /setup/swarm/advanced-ms-setup/
---

## Microservices optimization

### Global description

To optimize REGARDS performance you have to understand the simple fact that you can configure:
 1. How many parrallel processes can be run by a microservice (regards.jobs.pool.size) for every tenant of your REGARDS instance (global pool of thread for all tenants of an instance)
 2. How many database connections can be used in parrallel (regards.jpa.multitenant.maxPoolSize). A pool of connections is created for each tenant of your REGARDS instance.
 3. You many entities should be handled in a microservice process. Depends on microservice processes.

`Important` : It is often more efficient to configure each service to allow a large number of parrell processes and allow a small entities to process in each. But it depends on how many resources you can allocated to REGARDS services. 

A large number of processes implies a large number of connections to database.

The number of job (or threads) configured by microservice depends on the number of cpu or (vcpu) of your server.
The number of entities to handle by job (or thread) configured by microservice depends on the amount of memory available on your server.

Default microservice memory usage configuration :

| Microservice | Default RAM | Default job pool size | Default db pool size |
| :----------- | :---------- | :-------------------- | :------------------- |
| rs-config         | 128m | None | None |
| rs-registry       | 128m | None | None |
| rs-admin          | 512m | None | 5 per tenant of the instance |
| rs-admin-instance | 512m | None | 5 per tenant of the instance |
| rs-access-project | 512m | None | 5 per tenant of the instance |
| rs-access-instance | 512m | None | 5 per tenant of the instance |
| rs-dam            | 1500m | None | 5 per tenant of the instance |
| rs-ingest         | 3072m | 5 | 5 per tenant of the instance |
| rs-fem            | 1500m | 5 | 5 per tenant of the instance |
| rs-notifier       | 1500m | 5 | 5 per tenant of the instance |
| rs-storage        | 2048m | 5 | 5 per tenant of the instance |
| rs-dataprovider   | 1024m | 5 | 5 per tenant of the instance |
| rs-order          | 3072m | 5 | 5 per tenant of the instance |
| rs-worker-manager | 2048m | 5 | 5 per tenant of the instance |
| rs-processing     | 2048m | 50 | 5 per tenant of the instance |

`Note` : If your server(s) contains multiples cpu or vcpu we recommand to configure each microservice (see below) to up the value of job pool size and db pool size. Don't forget to up both of those properties at the same time to avoid db connection starvation during microservce processes.


### Ingest optimization

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.ingest.configuration.job_pool_size | regards.jobs.pool.size | Number of maximum threads of ingestion processes (ingest, delete, update, ...) | 2 |
| group_docker_mservices.ingest.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
| group_docker_mservices.ingest.configuration.read_batch_size | regards.storage.client.response.batch.size | Number of storage request response to handle at a time | 500 |
| group_docker_mservices.ingest.configuration.entities_per_job | regards.ingest.aips.scan.iteration-limit | Number of entities to handle in an ingestion process (ingest, delete, update, ...) thread | 100 |

### Fem optimization

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.fem.configuration.job_pool_size | regards.jobs.pool.size | Number of maximum threads of ingestion processes (ingest, delete, update, ...) | 2 |
| group_docker_mservices.fem.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
| group_docker_mservices.fem.configuration.read_batch_size | regards.fem.batch.size | Number of feature message requests to read by batch on amqp server | 1000 |
| group_docker_mservices.fem.configuration.entities_per_job | regards.fem.max.bulk.size | Number of entities to handle in an feature  process (create, delete, update, ...) thread | 1000 |


### Notifier optimization

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.notifier.configuration.job_pool_size | regards.jobs.pool.size | Number of maximum threads of ingestion processes (ingest, delete, update, ...) | 2 |
| group_docker_mservices.notifier.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
| group_docker_mservices.notifier.configuration.read_batch_size | regards.notifier.batch.size | Number of feature message requests to read by batch on amqp server | 1000 |
| group_docker_mservices.fem.configuration.entities_per_job | regards.notifier.max.bulk.size | Number of entities to handle in an notifier process thread | 1000 |


### Storage optimization

`Note` : It is recommanded to not set a big value to the `read_batch_size` property for storage microservice. Recommanded value between `10 and 100`.

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.storage.configuration.job_pool_size | regards.jobs.pool.size | Number of maximum threads of storage processes (store, delete, copy, ...) | 2 |
| group_docker_mservices.storage.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
| group_docker_mservices.storage.configuration.read_batch_size | regards.storage.availability.items.bulk.size | Number of file availibility requests to read by batch on amqp server | 10 |
| group_docker_mservices.storage.configuration.read_batch_size | regards.storage.copy.items.bulk.size | Number of copy requests to read by batch on amqp server | 10 |
| group_docker_mservices.storage.configuration.read_batch_size | regards.storage.deletion.items.bulk.size | Number of deletion to request to read by batch on amqp server | 10 |
| group_docker_mservices.storage.configuration.read_batch_size | regards.storage.reference.items.bulk.size | Number of reference file request to handle by batch | 10 |
| group_docker_mservices.storage.configuration.read_batch_size | regards.storage.store.items.bulk.size | Number of store request to read by batch on amqp server | 10 |
| group_docker_mservices.storage.configuration.entities_per_job | regards.storage.cache.requests.per.job | Number of file availibility to handle in a thread | 100 |
| group_docker_mservices.storage.configuration.entities_per_job | regards.storage.deletion.requests.per.job | Number of deletion to handle by thread | 100 |
| group_docker_mservices.storage.configuration.entities_per_job | regards.storage.storage.requests.per.job | Number of files to store per thread | 100 |

### Data Management optimization

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.dam.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
| group_docker_mservices.ingedamst.configuration.crawler_batch_size | regards.crawler.max.bulk.size | Number of entities to request at a time from the data source do harvest | 10000 |
| group_docker_mservices.dam.configuration.crawler_rate_delay_ms | regards.ingester.rate.ms | Time alapsed in milliseconds between two scans of configured crawlers to check if a datasource can be harvest | 60000 |

### Order optimization

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.order.configuration.job_pool_size | regards.jobs.pool.size | Number of maximum threads of order processes | 5 |
| group_docker_mservices.order.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
| group_docker_mservices.order.configuration.entities_per_job | regards.order.batch.size | Number of entities to handle in an notifier process thread | 1000 |

### Dataprovider optimization

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.dataprovider.configuration.job_pool_size | regards.jobs.pool.size | Number of maximum threads of order processes | 5 |
| group_docker_mservices.dataprovider.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
| group_docker_mservices.dataprovider.configuration.entities_per_job | regards.acquisition.batch.size | Number of entities to handle in an notifier process thread | 100 |

### Worker Manager optimization

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.worker_manager.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
| group_docker_mservices.worker_manager.configuration.read_batch_size | regards.worker_manager.request.bulk.size | Number of worker message requests to read by batch on amqp server | 1000 |

### Processing optimization

| Ansible property | Regards property | Description | default |
| :--------------- | :--------------- | :---------- | :------ |
| group_docker_mservices.processing.configuration.job_pool_size | regards.jobs.pool.size | Number of maximum threads of order processes | 50 |
| group_docker_mservices.processing.configuration.max_pool_size | regards.jpa.multitenant.maxPoolSize | Number of maximum parrallel available database connections | 5 |
