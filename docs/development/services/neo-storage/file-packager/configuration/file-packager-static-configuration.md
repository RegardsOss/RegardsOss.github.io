---
id: backend-file-packager-static-configuration
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/file-packager/configuration/static-configuration
---

Static configuration refers to the microservice configuration defined in a property file before the microservice starts.
This configuration is common to all tenants.

The static configuration for the `file-packager` service is:

| Property name                                                                     | Type    | Default value | Description                                                      |
|-----------------------------------------------------------------------------------|---------|---------------|------------------------------------------------------------------|
| **Service**                                                                       | ---     | ---           | ---                                                              |
| regards.file.packager.archive.max.size.in.ko                                      | Integer | 1024          | Maximum archive size in KB before splitting/handling limits.     |
| regards.file.packager.archive.max.age.in.hours                                    | Integer | 24            | Maximum allowed age of archive before cleanup/completion logic.  |
| regards.file.packager.store.complete.package.job.page.size                        | Integer | 100           | Page size used by complete package storage job.                  |
| regards.file.packager.archive.directory                                           | String  | /archive      | Base directory for archive storage.                              |
| regards.file.packager.copy.max.retry                                              | Integer | 3             | Maximum retry attempts for copy operations.                      |
| regards.file.packager.copy.retry.delay.in.ms                                      | Integer | 1000          | Delay between copy retry attempts in milliseconds.               |
| **Service**                                                                       | ---     | ---           | ---                                                              |
| regards.file.packager.file.packaging.scheduler.lock.duration.in.seconds           | Integer | 300           | Lock duration for file packaging scheduler run.                  |
| regards.file.packager.file.packaging.scheduler.page.size                          | Integer | 100           | Page size for file packaging scheduler processing.               |
| regards.file.packager.retry.file.copy.to.cache.scheduler.lock.duration.in.seconds | Integer | 300           | Lock duration for retry copy-to-cache scheduler.                 |
| regards.file.packager.retry.file.copy.to.cache.scheduler.page.size                | Integer | 100           | Page size for retry copy-to-cache scheduler processing.          |
| regards.file.packager.retry.file.packaging.scheduler.lock.duration.in.seconds     | Integer | 300           | Lock duration for retry file packaging scheduler.                |
| regards.file.packager.retry.file.packaging.scheduler.page.size                    | Integer | 100           | Page size for retry file packaging scheduler processing.         |
| regards.file.packager.file.copy.to.cache.scheduler.lock.duration.in.seconds       | Integer | 300           | Lock duration for file copy-to-cache scheduler.                  |
| regards.file.packager.file.copy.to.cache.scheduler.page.size                      | Integer | 100           | Page size for file copy-to-cache scheduler processing.           |
| regards.file.packager.complete.package.scheduler.lock.duration.in.seconds         | Integer | 300           | Lock duration for complete package scheduler.                    |
| regards.file.packager.complete.package.scheduler.page.size                        | Integer | 100           | Page size for complete package scheduler processing.             |
| regards.file.packager.file.deleting.scheduler.lock.duration.in.seconds            | Integer | 300           | Lock duration for file deleting scheduler.                       |
| regards.file.packager.file.deleting.scheduler.page.size                           | Integer | 100           | Page size for file deleting scheduler processing.                |
| **Handler**                                                                       | ---     | ---           | ---                                                              |
| regards.file.packager.file.archive.request.event.bulk.size                        | Integer | 100           | Batch size for handling archive(for small files) request events. |
| regards.file.packager.file.copy.to.cache.event.bulk.size                          | Integer | 100           | Batch size for handling copy-to-cache events.                    |
| regards.file.packager.storage.response.event.bulk.size                            | Integer | 1000          | Batch size for handling storage response events.                 |

:::info
Some of these properties are customizable in the Ansible
inventory ([see the installation guide](../../../../../setup/swarm/advanced/swarm-optimizations.md)).

To make additional properties customizable, you need to update the corresponding Ansible playbook, specifically the *
*regards-mconfig** role.
:::
