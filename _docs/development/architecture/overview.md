---
layout: classic-docs
title: REGARDS architecture overview
short-title: Microservice architecture
categories:
  - development
---

## Microservice architecture

To meet CNES requirements, REGARDS deploys a set of business services within a distributed and modular microservices architecture.

These microservices are highly cohesive and loosely coupled Restful web services, interacting inside the cluster using synchronous (REST through HTTP protocol) and asynchronous (event bus through AMQP protocol) communications.

Each microservice is structured in modules, being themselves structured in layer architecture. Each service matches an elementary REGARDS function (single accountability), and has its own execution context and its own configuration (modularity). It is built, tested and deployed separately from other services (modularity, maintainability, scalability) and exposes a REST API (HATEOAS) which relies on a service contract.

Such granular architecture ensures we can provide a strong **horizontal scalability**. Several instances of the same service can be simultaneously deployed on the system, allowing it to bear load spin-up thanks to the *“load balancing”* mechanism. Such functionality allows the system to be highly fault-tolerant and resiliant to load fluctuation. On top of that, GUIs are built using responsive web architecture.

![](/assets/schemas/architecture/microservice_architecture.png)

The here-above diagram describes principles of such architecture.  
REGARDS microservices are surrounded by several components : a gateway providing a single point to allow external world to interact with our system, a discovery and registration service to let service know each other and load balancing; and finally a centralized configuration holding each kind of microservice configuration.

The key points are that all microservices are **stateless** and expose a **REST API** over **HTTP**. No matter what programming language is used as long as it exposes an API.
