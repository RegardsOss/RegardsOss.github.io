---
title: Overview
sidebar_label: Overview
slug: /development/backend/services/gateway/overview/
sidebar_position: 1
---

The `Gateway` or `rs-gateway` microservice acts as proxy of REGARDS. It's the entry point for all incoming REST requests
to any REGARDS microservice.
That's why Gateway is a part of [REGARDS microservice architecture](/docs/development/concepts/02-microservices.md), and
is mandatory.

:::info Docker deployment
When you deploy REGARDS using Docker SWARM, we also deploy an NGinx reverse proxy in front of the gateway: **rs-front**.
So all requests go through the rs-front service, then through the Gateway service and finally hits the requested service.
:::

`rs-gateway` responsibilities :

* intercepts REST requests, checks token validity and makes sure that user is well authenticated (see
  authentication [REST API concept](/docs/development/concepts/05-rest-api.md)).
* logs these requests to trace all input REST requests.
* route requests to correct recipient

| Concept                                                                           | Compatibility | Description                                     |
|-----------------------------------------------------------------------------------|---------------|-------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects            |
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | No            | Uses Jobs system                                |
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | Yes           | Service can be deployed with multiple instances |

## How it works

You can learn how the service works with the [conception overview](./gateway-conception.md).

## How to access source code

Microservice source code is available
on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-cloud/rs-gateway).

 