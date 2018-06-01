---
layout: classic-docs
title: Microservice starter
short-title: Microservice starter
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Conditions to enter maintenance mode](#conditions-to-enter-maintenance-mode)
- [Desactivate maintenance mode](#desactivate-maintenance-mode)
- [Disable maintenance mode for a given microservice](#disable-maintenance-mode-for-a-given-microservice)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

REGARDS Microservices can handle a maintennace mode. By default each microservice are not in maintenance mode.
The maintenance mode is set individually for each tenant of the system.
A Microservice in maintenance mode, can only handle 'GET' request. Each other requests are refused and a 403 forbidden response status is send.

# Conditions to enter maintenance mode

A Microservice enter the maintenance mode is a request received return an unmanaged error.

# Desactivate maintenance mode

When a microservice is in maintenance mode, you can use the here under endpoint (connected as an ADMIN user) to get it out.
```properties
<microservice-name>/maintenance/<tenant>/disable
```

# Disable maintenance mode for a given microservice

You can disable the use of maintenance mode for a given microservice by setting the here under property in the application.properties :
```properties
regards.microservices.enable.maintenance.mode=false
```