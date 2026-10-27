---
id: backend-file-catalog-static-configuration
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/file-catalog/configuration/static-configuration
---

Static configuration refers to the microservice configuration defined in a property file before the microservice starts.
This configuration is common to all tenants.

The static configuration for the `rs-file-catalog` service is:

| Parameter name | Type | Default | Description |
|---|---|---|---|
|**Service**|---|---|---|
| regards.storage.data.storage.threshold.percent | Integer | 70 | Warning threshold percentage for storage location usage. |
| regards.storage.data.storage.critical.threshold.percent | Integer | 90 | Critical threshold percentage for storage location usage. |
| regards.storage.cache.requests.per.job | Integer | 100 | Number of cache requests processed per job run. |
| regards.storage.group.requests.days.before.expiration | Integer | 5 | Number of days before a request group is considered expired for processing. |
| regards.file.catalog.storage.requests.days.before.expiration | Integer | 5 | Number of days before storage requests expire. |
| regards.storage.reference.requests.days.before.expiration | Integer | 5 | Number of days before reference requests expire. |
| regards.file.catalog.requests.retry.page | Integer | 1000 | Page size used when retrying storage requests in error status. |
| regards.storage.groups.requests.bulk | Integer | 500 | Maximum number of request groups handled in one transaction. |
| regards.file.catalog.status.service.page.size | Integer | 500 | Page size used by the file catalog status service when retrieving existing requests.  |
|**Scheduler**|---|---|---|
| regards.file.catalog.cache.request.lock.duration | Integer | 60 | lock duration for scheduler processing cache request. |
| regards.file.catalog.files.storage.request.check.scheduler.lock.duration | Integer | 300 | Lock duration in seconds for scheduler checking storage request . |
| regards.file.catalog.check.request.group.done.lock.duration | Integer | 300 | Lock duration in seconds for scheduler checking completed request groups. |
| regards.file.catalog.files.storage.request.complete.scheduler.lock.duration | Integer | 300 | Lock duration in seconds for scheduler completing storage requests. |
| regards.file.catalog.files.storage.request.dispatch.scheduler.lock.duration | Integer | 300 | Lock duration in seconds for scheduler dispatching storage request. |
| regards.file.catalog.monitor.storage.location.lock.duration | Integer | 300 | Lock duration in seconds for scheduler monitoring storage location. |
|**Handler**|---|---|---|
| regards.file.catalog.plugin.event.bulk.size | Integer | 25 | Batch size for broadcasting plugin configuration events. |
| regards.storage.availability.items.bulk.size | Integer | 1000 | Batch size for handling restore response availability updates + Batch size for restoration request event processing. |
| regards.storage.availability.items.bulk.size | Integer | 1000 | Batch size for processing restoration request event. |
| regards.file.catalog.files.storage.request.bulk.size | Integer | 100 | Batch size for processing file storage request events. |
| regards.file.catalog.files.reference.request.bulk.size | Integer | 100 | Batch size for processing file reference request events. |
| regards.file.catalog.files.archive.completion.bulk.size | Integer | 1000 | Batch size for processing archive completion events. |
| regards.file.catalog.storage.response.event.bulk.size | Integer | 1000 | Batch size for processing storage response events. |
| regards.file.catalog.files.archive.response.bulk.size | Integer | 25 | Batch size for processing archive response events. |

:::info
Some of these properties are customizable in the Ansible inventory ([see the installation guide](../../../../../setup/swarm/advanced/swarm-optimizations.md)).

To make additional properties customizable, you need to update the corresponding Ansible playbook, specifically the **regards-mconfig** role.