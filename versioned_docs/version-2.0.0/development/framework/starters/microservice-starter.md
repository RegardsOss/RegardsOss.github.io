---
id: backend-framework-starters-microservice
title: Microservice starter
slug: /development/backend/framework/starters/microservice/
---


## Purpose

This starter is used to enable microservice maitenance feature and module management feature.

## Configuration

Add starter dependency to your POM (version depends on the BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>microservice-regards-starter</artifactId>
</dependency>
```

Business dependency

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>microservice-regards</artifactId>
</dependency>
```

Dependencies :

* [Multitenant starter](multitenant-starter.md)
* [Module starter](module-starter.md) business package

Properties :

```properties
# Maintenance mode switch
regards.microservices.maintenance.enabled=true
```

## Autoconfiguration

Starter autoconfigures REST API endpoints.

## How to

### Maintenance management

REGARDS microservice can handle a maintennace mode. By default each microservice are not in maintenance mode.
The maintenance mode is set individually for each tenant on the system.
A microservice in maintenance mode can only handle 'GET' request. Each other requests are refused and a `403` forbidden response status is sent.

API :

* `GET /maintenance` : get maintenance status
* `PUT /maintenance/{tenant}/enable` : set maintenance mode for specified tenant
* `PUT /maintenance/{tenant}/disable` : unset maintenance mode for specified tenant

### Module management

API :

* `GET /microservice/configuration/enabled` : `200` if configuration feature is implemented, else `501`.
* `GET /microservice/configuration` : export configuration of all business modules.
* `POST /microservice/configuration` : import configuration.

* `GET /microservice/ready/enabled` : `200` if ready feature is implemented, else `501`.
* `GET /microservice/ready` : Check if all modules of the microservice is ready to run or if there is missing configurations.

* `GET /microservice/restart/enabled` : `200` if restart feature is implemented, else `501`.
* `GET /microservice/restart` : Restart microservice modules.

Look at [Module starter](module-starter.md) to know how to implement configuration import/export, ready and restart features at the module level.
