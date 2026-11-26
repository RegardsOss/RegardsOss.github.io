---
title: Overview
sidebar_label: Overview
slug: /development/services/worker-manager/overview
sidebar_position: 1
---

The `Worker Manager` (or `rs-worker-manager`) microservice has been designed to manage light treatments, scalable,
hot-deployable and specific
for missions.
Treatments are realized by standalone applications named [worker](../../concepts/08-workers.md).

`rs-worker-manager` responsibilities:

* manage the cycle of life of workers
* send requests to workers, retry request in error
* monitor treatments realized by workers
* manage a workflow of workers, the output of one worker is the input for the next

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | Yes           | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances |

You can learn how the service works with the [How it works section](./conception.md).

## How to use

You can learn how to **operate** with the microservice thanks to **API Guides** :

* Publish a request to `rs-worker-manager` [using AMQP API](./api-guides/amqp/amqp-publish-request.md)
* Listen responses from `rs-worker-manager` after publishing a request to
  `rs-worker-manager` [using AMQP API](./api-guides/amqp/amqp-subscribe-responses.md)
* Browse all [REST API available endpoints](./api-guides/rest/api-swagger.mdx) for administration and
  monitoring treatments realized by `rs-worker-manager`, workers

You can learn how to **operate** with a worker thanks to **API Guides** :

* Indicate to `rs-worker-manager`, the worker is
  alive [using AMQP API](./api-guides/amqp/amqp-worker-publish-heartbeat.md)
* Subscribe to requests from worker-manager [using AMQP API](./api-guides/amqp/amqp-worker-subscribe-requests.md)
* Publish a response
  to `rs-worker-manager` [using AMQP API](./api-guides/amqp/amqp-worker-publish-response.md)

## How to configure

The `rs-worker-manager` microservice manage workers with a configuration file.
This file is used to configure the types of worker and worker workflow accepted.

To learn how the microservice is configured with **static parameters from properties files**
see [Configuration section](./configuration/static-configuration.md).

To understand the configuration of specific [tenant (aka project)](../../concepts/03-multitenant.md).
see [Import/export configuration section](./configuration/import-export.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-worker-manager).