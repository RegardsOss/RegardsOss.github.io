---
id: backend-file-catalog-static-configuration
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/file-catalog/configuration/static-configuration
---

Static configuration refers to the microservice configuration defined in a property file before the microservice starts.
This configuration is common to all tenants.

The static configuration for the rs-file-catalog service is:


| Parameter Name                                                              | Type                 | Default | Description                                                                                       |
|-----------------------------------------------------------------------------|----------------------|---------|---------------------------------------------------------------------------------------------------|
| regards.storage.client.response.batch.size                                  | Integer              | 500     | Number of Group Request Events processed simultaneously                                           |
| regards.storage.reference.requests.days.before.expiration                   | Integer (in days)    | 5       | Number of days before expiration to consider storage reference requests for processing.           |
| regards.file.catalog.requests.retry.page                                    | Integer              | 1000    | Maximum number of requests retrieved per page when retrying failed file catalog requests.         |
| regards.storage.groups.requests.bulk                                        | Integer              | 500     | Number of storage group requests handled in a single bulk for periodic operations.                |
| regards.file.catalog.status.service.page.size                               | Integer              | 500     | Page size used by the file catalog status service when retrieving existing requests.              |
| regards.file.catalog.plugin.event.bulk.size                                 | Integer              | 25      | Number of plugin events processed together in a single bulk operation.                            |
| regards.file.catalog.files.archive.completion.bulk.size                     | Integer              | 1000    | Number of file archive completion events processed in one batch.                                  |
| regards.file.catalog.files.storage.request.bulk.size                        | Integer              | 25      | Number of file storage requests sent in a single bulk operation.                                  |
| regards.file.catalog.files.reference.request.bulk.size                      | Integer              | 100     | Number of file reference requests processed in one bulk operation.                                |
| regards.file.catalog.files.storage.request.bulk.size                        | Integer              | 100     | Number of file storage requests processed together during bulk handling.                          |
| regards.file.catalog.storage.response.event.bulk.size                       | Integer              | 1000    | Number of storage response events handled in a single bulk operation.                             |
| regards.storage.data.storage.threshold.percent                              | Integer              | 70      | Warning threshold (in percent) indicating high storage usage.                                     |
| regards.storage.data.storage.critical.threshold.percent                     | Integer              | 90      | Critical threshold (in percent) indicating very high storage usage requiring immediate attention. |
| regards.file.catalog.check.request.group.done.lock.duration                 | Integer (in seconds) | 300     | Lock duration for checking completed request groups to prevent concurrent processing.             |
| regards.file.catalog.files.storage.request.check.scheduler.lock.duration    | Integer (in seconds) | 300     | Lock duration for the scheduler that checks if file storage requests need to be processed.        |
| regards.file.catalog.files.storage.request.complete.scheduler.lock.duration | Integer (in seconds) | 300     | Lock duration for the scheduler handling completion of file storage requests.                     |
| regards.file.catalog.files.storage.request.dispatch.scheduler.lock.duration | Integer (in seconds) | 300     | Lock duration for the scheduler dispatching file storage requests.                                |
| regards.file.catalog.monitor.storage.location.lock.duration                 | Integer (in seconds) | 300     | Lock duration for monitoring storage locations to avoid concurrent executions.                    |


:::info
Some of these properties are customizable in the Ansible inventory ([see the installation guide](../../../../../setup/swarm/advanced/swarm-optimizations.md)).

To make additional properties customizable, you need to update the corresponding Ansible playbook, specifically the **regards-mconfig** role.