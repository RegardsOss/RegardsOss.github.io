---
layout: classic-docs
title: Microservice core introduction
short-title: Intro
categories:
  - microservice-core
---

REGARDS Microservices are REST services exposed by a Jetty web server contained in a Spring boot application and composed of modules. Each microservice is a Maven project aggregating Maven modules. There is two modules by default: one responsible for running the microservice and one responsible for business. In case a microservice needs to be composed by more than one business module, a module archetype is available.

Requirements for development:

- git client 1.8
- maven 3.x
- JDK 1.8

# Common features

Each microservice offers the features :

- OAuth2 authentication : <http://address:port/oauth/token>
- REST Resources authorization access by user ROLES
- Access to the Cloud Eureka Registry client to communicate with others microservices
- Access to the Cloud Config Server to centralize configurations properties
- Allows CORS requests
- Swagger Interface : <http://address:port/swagger-ui.html>
