---
id: backend-storage-static-configuration
title: Static Configuration
sidebar_label: Static configuration
slug: /development/services/storage/configuration/static-configuration
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `rs-storage` service is :

| Parameter Name                                            | Type              | Default | Description                                                              |
|-----------------------------------------------------------|-------------------|---------|--------------------------------------------------------------------------|
| regards.cache.cleanup.delay                               | Integer (in ms)   | 60000   | Period at which a cache cleanup (deletion of expired files) is scheduled |
| regards.storage.location.schedule.delay                   | Integer (in ms)   | 3600000 | Period at which storage location occupation is checked                   |
| regards.jobs.pool.size                                    | Integer           | 10      | Number of parallel running job                                           |
| regards.jobs.completion.update.rate.ms                    | Integer (in ms)   | 1000    | Frequency at which job progression is checked                            |
| regards.jobs.succeeded.retention.days                     | Integer (in days) | 1       | Maximum age of succeeded jobs before they are deleted from the database  |
| regards.storage.reference.requests.days.before.expiration | Integer (in days) | 5       | Time to process reference request before they are expired                |
| regards.storage.storage.requests.days.before.expiration   | Integer (in days) | 5       | Time to process storage request before they are expired                  |
| regards.storage.deletion.requests.days.before.expiration  | Integer (in days) | 5       | Time to process deletion request before they are expired                 |
| regards.storage.copy.requests.days.before.expiration      | Integer (in days) | 5       | Time to process copy request before they are expired                     |
| regards.storage.cache.path                                | Path (String)     | cache   | Path where the cached files will be saved                                |
| regards.storage.availability.items.bulk.size              | Integer           | 10      | AMQP messages bulk size for availability requests                        |
| regards.storage.deletion.items.bulk.size                  | Integer           | 10      | AMQP messages bulk size for deletion requests                            |
| regards.storage.reference.items.bulk.size                 | Integer           | 10      | AMQP messages bulk size for reference requests                           |
| regards.storage.store.items.bulk.size                     | Integer           | 10      | AMQP messages bulk size for store requests                               |
| regards.storage.copy.items.bulk.size                      | Integer           | 10      | AMQP messages bulk size for copy requests                                |
| regards.storage.deletion.requests.per.job                 | Integer           | 100     | Number of deletion requests processed by a single job                    |
| regards.storage.cache.requests.per.job                    | Integer           | 100     | Number of cache requests processed by a single job                       |
| regards.s3.client.parallel.number                         | Integer           | 10      | Number of parallel connections in a single S3 client                     |

:::info
Some of these properties are customizable in ansible
inventory. [see installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md)

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::