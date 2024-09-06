---
id: backend-processing-overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
slug: /development/backend/services/processing/overview/
---

## Overview

The main objective of the `Processing` microservice is to apply treatments to ordered data files,
before they are served to the end user. This service is driven by [Order](../../backend/regards/order/order.md) 
microservice as describe in [Functional overview - Product Restitution services](../../../overview/functional-overview/05-product-restitution-services.md)

This service runs as follows:
* Receives processing requests from the `Order` service through AMQP.
* An executable is launched, and its execution generates steps.
* The steps are notified 
* An execution result is sent to the `Order` microservice.
* After the files have been processed, they are available to be downloaded by the user.

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [conception overview](./conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

- [Process](api-guides/rest/process-api.md) : API to list/find existing processes
- [Batch](api-guides/rest/batch-api.md) : API to create batches
- [Monitoring](api-guides/rest/monitoring-api.md) : API to monitor existing executions
- [Rights Plugin Configurations](api-guides/rest/rights-plugin-configuration-api.md) : API to manage processes as plugins

## Plugins

The list of the different suitable plugins and their configuration are available at the following documentation:
[Processing plugins](plugins/processing-plugins.md)

## How to configure

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/processing-static-configuration.md).

To understand the **configuration of specific tenant** (aka project)
see [Import/export configuration section](./configuration/processing-import-export.md).

## How to access through UI

You can follow the **User manuel** to learn about the administrator HMI related functionalities :

- [How to add **data processing**](../../../user-documentation/8-order-data/processing.md).


## How to access source code

Microservice source code is available on [GitHub](https://github.
com/RegardsOss/regards-backend/tree/master/rs-processing).