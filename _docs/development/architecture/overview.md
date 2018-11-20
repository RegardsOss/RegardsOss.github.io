---
layout: classic-docs
title: REGARDS architecture overview
short-title: Microservice architecture
wip: true
categories:
  - development
---

## Microservice architecture

To meet CNES requirements, REGARDS deploys a set of business services within a distributed and modular microservices architecture.

These microservices are highly cohesive and loosely coupled Restful web services, interacting through synchronous (REST via HTTP protocol) or asynchronous (events bus via AMQP protocol) communications.

Each microservice is structured in modules, being themselves structured in layer architecture. Each service matches an elementary REGARDS function (single accountability), and has its own context of execution and its own configuration (modularity). It is built, tested and deployed separately from other services (modularity, maintainability, scalability), and exposes a REST API (HATEOAS) which relies on a service contract.

Such an architecture enables to allocate at best the needs in terms of **horizontal scalability**. Several instances of the same service can be simultaneously deployed on the system, allowing it to bear load spin-up thanks to a “load balancing” mechanism. Such a functioning allows the system to be highly fault-tolerant. At last, GUIs are built on the basis of a responsive web architecture.

![](/assets/schemas/architecture/microservice_architecture.png)


The diagram above describes the principles of such an architecture.  
Microservices are requested through a dedicated infrastructure with service registration and discovery that allows load balancing mechanism. A dedicated server centralizes microservice configuration. A message broker (e.g. RabbitMQ) plays the role of event bus for asynchronous communications.

The key points are that all microservices are **stateless** and expose a **REST API** over **HTTP**. No matter what programming language is used as long as it exposes an API.
