---
title: Static configuration
sidebar_label: Static configuration
slug: /development/services/worker-manager/configuration/static_configuration
sidebar_position: 2
---

The static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenants.

Static configuration for `rs-Worker-Manager` service is :

| Name                                            | Type    | Default Value | Description                                                                                |
|-------------------------------------------------|---------|---------------|--------------------------------------------------------------------------------------------|
| regards.workermanager.request.bulk.size         | Integer | `1000`        | Maximum number of AMQP events received in input by rs-worker-manager to handle in batch    |
| regards.workermanager.worker.response.bulk.size | Integer | `1000`        | Maximum number of AMQP events received from worker to handle in batch                      |
| regards.workermanager.scan.page.size            | Integer | `400`         | Maximum page size for retrieving requests from the database for dispatch and deletion jobs |

:::info
Some of these properties are customizable in ansible
inventory. [See installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md#dataprovider-optimization).

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::
