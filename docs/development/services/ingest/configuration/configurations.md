---
title: Static Configuration
sidebar_label: Static configuration
slug: /development/backend/services/ingest/configuration/static-configuration
sidebar_position: 2
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `Ingest` service is :

| Name                                       | Type    | Default Value | Description                                                                              |
|--------------------------------------------|---------|---------------|------------------------------------------------------------------------------------------|
| regards.ingest.aips.scan.iteration-limit   | integer | `100`         | Maximum number of requests to handle in a batch of AIP processing for deletion or update |
| regards.storage.client.response.batch.size | integer | `500`         | Maximum number of AMQP events received from storage service to handle in batch           |
| regards.aip.dump.zip-limit                 | Integer | `1000`        | Page size of AIPs retrieve during dump process                                           |

:::info
Some of these properties are customizable in ansible
inventory. [See installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#dataprovider-optimization).

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::