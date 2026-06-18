---
id: backend-catalog-static-configuration
title: Notifier Static configuration
sidebar_label: Static configuration
slug: /development/backend/services/catalog/configuration/static-configuration
---

Static configuration is the microservice configuration set before microservice startup in a property file.
This configuration is common to all tenant.

Static configuration for `Catalog` service are :

| Name                                                    | Type    | Default Value | Description                                                           |
|---------------------------------------------------------|---------|---------------|-----------------------------------------------------------------------|
| regards.catalog.restoration.availability.hours.limit    | integer | `24`          | Time, in hours, during which a product is available after restoration |
| regards.catalog.restoration.request.product.bulk.limit  | integer | `100`         | Max bulk size when asking restoration of products                     |
| regards.catalog.availability.request.product.bulk.limit | integer | `100`         | Max bulk size when asking availibility of products                    |

:::info
Some of these properties are customizable in ansible inventory. [see installation guide](../../../../setup/swarm/advanced/swarm-optimizations.md).

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::