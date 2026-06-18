---
title: Overview
sidebar_label: Overview
slug: /development/backend/services/config/overview/
sidebar_position: 1
---

The **Config** microservice (or **rs-config**) is the service that manages the configuration of the various 
[Regards microservices](../../concepts/02-microservices.md). It is a mandatory microservice in the REGARDS
[microservices architecture](../../concepts/02-microservices.md).

The aim is to ensure consistency in the configuration of the various instances of Regards microservices. This 
configuration is therefore centralized within the **rs-config** microservice.

The various services call the config service to :
- **Retrieve their configuration**: the configuration of a microservice is common to all instances of this microservice 

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | No            | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [How it works section](conception.md).

## How to access source code

Microservice source code is available on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-cloud/rs-config).