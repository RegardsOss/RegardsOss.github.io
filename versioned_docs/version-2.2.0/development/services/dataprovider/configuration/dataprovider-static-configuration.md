---
id: backend-dataprovider-static-configuration
title: Dataprovider static configuration
sidebar_label: Static configuration
slug: /development/backend/services/dataprovider/configuration/static-configuration
---

Static configuration is the microservice configuration set before microservice startup in a property file (rs-dataprovider.properties handled by rs-config microservice, see [more details here](/docs/user-documentation/0-z2_concept/configuration-overview.md))
This configuration is common to all tenants.

Static configuration for `Dataprovider` service contains the following properties : 

| Name                                            | Type    | Default Value | Description                                                                                                                      |
| ----------------------------------------------- | ------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| regards.acquisition.product.bulk.deletion.limit | integer | `100`         | Max deletions treated at once.                                                                                                   |
| regards.acquisition.batch.size                  | integer | `100`         | Service will manage at most x entities at a time in order to take care of the memory consumption and potential tenant starvation |

:::info
Some of these properties are customizable in ansible inventory. [see installation guide](http://localhost:3000/docs/next/setup/swarm/advanced/optimizations#dataprovider-optimization)

To make missing properties customizable, you have to update regards ansible playbook : the regards-mconfig role.
:::