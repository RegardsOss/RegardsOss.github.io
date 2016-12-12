---
layout: classic-docs
title: Microservice security initialization
short-title: Security
categories:
  - microservice-core
---

![](/assets/images/security/security.png)

Every microservice generated with the "microservice-archetype" use the "security-regards" module to handle secured access to his endpoints.  

To do so, every microservice include a "remote-tenant-resolver" module which is used to communicate with the central "administration-service".  
The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of Rest controllers.

At startup the security-regards module is initialized with the here-under steps :
1. Retrieve all tenants
2. For each tenants register his endpoints to the administration service. At this step, the administration service merge the default configuration of the endpoints supplied by the microservice and the saved configuration of endpoints.
3. Retrieve for each tenants his endpoints configuration.
4. Listen for event to update the endpoints configuration. This event is send by the administration microservice at every single change on the endpoints configuration.

The configuration of a microservice endpoints consists to defined which user Roles are allowed to access the endpoints. This configuration can be update with the resourcesController of the administration service.  


