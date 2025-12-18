---
title: Static Configuration
sidebar_label: Static configuration
slug: /development/services/dam/configuration/static-configuration
sidebar_position: 2
---

Static configuration refers to the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenants.

The static configuration for the `rs-dam` service is:

| Name                                         | Type          | Default Value     | Description                                                                                                                                                                                            |
| -------------------------------------------- | ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| regards.access.rights.update.cron            | cron          | `0 0 1 ? * *`     | Periodicity of the scheduler to handle dynamic modification of access rights between datasets and user groups using dynamic plugins (`IDataObjectAccessFilterPlugin`).                                 |
| regards.dam.request.bulk.size                | integer       | 100               | Maximum number of Regards events (RabbitMQ Event) that dam listeners can handle at once.                                                                                                               |
| regards.dam.job.updateDataset.maxRetry       | integer       | 5                 | If any dataset update request fails, retry it at most X times.                                                                                                                                         |
| regards.elasticsearch.search.request.timeout | integer ms    | 15000             | Timeout in ms for Elasticsearch search requests.                                                                                                                                                       |
| regards.elasticsearch.index.request.timeout  | integer ms    | 1200000           | Timeout in ms for Elasticsearch save/update requests.                                                                                                                                                  |
| regards.elasticsearch.http.buffer.limit      | integer bytes | 104857600 (100MB) | Maximum response size from Elasticsearch. If the Elasticsearch response exceeds this value, an exception will be thrown on the client side to avoid memory overflow.                                   |
| regards.ingester.rate.ms                     | integer ms    | 60000 (1 min)     | Scheduler delay: delay between each crawling job creation attempt (crawling jobs are created only if an ingestion is planned). Crawling job creation is also triggered each time a datasource is created. |
| regards.ingester.rate.init.ms                | integer ms    | 300000 (5 min)    | Scheduler initial delay: initial delay after service startup before launching the scheduler.                                                                                                           |




### Ansible editable properties

:::info
These properties are customizable in the Ansible
inventory. [See installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#data-management-optimization).
:::

| Name                                  | Type    | Default Value | Description                                                                                                      |
| ------------------------------------- | ------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| regards.jpa.multitenant.maxPoolSize   | integer | 5             | Maximum number of parallel database connections available.                                                       |
| regards.crawler.max.bulk.size         | integer | 10000         | Number of entities to request at a time from the data source to harvest.                                         |
| regards.ingester.rate.ms              | integer | 60000         | Time elapsed in milliseconds between two scans of configured crawlers to check if a datasource can be harvested. |
| regards.jobs.pool.size                | integer | 5             | Maximum number of job processes in parallel.                                                                     |
| regards.elasticsearch.threadpool.size | integer | 3             | Maximum number of parallel bulk/batch upserts (must be lower than the number of database connections available). |

:::note

To make additional properties customizable, you have to update the regards Ansible playbook: the regards-mconfig role.
:::