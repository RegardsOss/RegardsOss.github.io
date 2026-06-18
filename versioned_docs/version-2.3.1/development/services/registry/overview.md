---
id: backend-registry-overview
title: Overview
sidebar_label: Overview
slug: /development/backend/services/registry/overview/
sidebar_position: 1
---

**Registry** (or **rs-registry**) microservice is a service that helps communication between 
[microservices](../../concepts/02-microservices.md) manages load balancing.

`rs-registry` responsibilities:
* **Microservice registry**: the service keeps track of all microservices in the application and their locations. It 
  enables microservices to dynamically discover and communicate with each other without needing to know the 
  addresses of other services in advance.
* **Load balancing**: the service helps distribute requests among different instances of a microservice.

| Concept                                                                           | Compatibility | Description                                         |
|-----------------------------------------------------------------------------------|---------------|-----------------------------------------------------|
| [Multitenant](../../concepts/03-multitenant.md)                                   | Yes           | Can handle multiple tenants/projects                | 
| [Vertical scalability](../../concepts/07-scalability.md#vertical-scalability)     | No            | Uses Jobs system                                    | 
| [Horizontal scalability](../../concepts/07-scalability.md#horizontal-scalability) | No            | Service can not be deployed with multiple instances |

You can learn how the service works with the [How it works section](./conception).

## How to access source code

Microservice source code is available on [GitHub](https://github.com/RegardsOss/regards-backend/tree/master/rs-cloud/rs-registry).