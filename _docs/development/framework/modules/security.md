---
layout: classic-docs
title: Microservice security initialization
short-title: Security
---

![](/assets/images/security/security.png)

Every microservice generated with the "microservice-archetype" use the **security-regards** module to handle secured access to his endpoints.  

To do so, every microservice include a **remote-tenant-resolver** module which is used to communicate with the central "administration-service".  
The only exception is for microservice "administration" which includes a "local-tenant-resolver" to use internal services instead of REST controllers.

At startup the **security-regards** module is initialized with the here-under steps :
1. Get all tenants
2. For each tenants register his endpoints to the administration service. At this step, the administration service merge the default configuration of the endpoints supplied by the microservice and the saved configuration of endpoints.
3. Retrieve for each tenants his endpoints configuration.
4. Listen for event to update the endpoints configuration. This event is send by the administration microservice at every single change on the endpoints configuration.

The configuration of a microservice endpoints consists to defined which user Roles are allowed to access the endpoints. This configuration can be update with the resourcesController of the administration service.  

## User roles

Here under is the list of default roles created at application startup.  
The **Five first ones** are standard roles which can be assigned to every users of the system.  
The **Instance Admin** role is a virtual role assigned to the unique instance administrator user. The instance administrator user is the only one created by default in the Regards system.  
The **System** role is a virtual role as the **Instance Role** except no user can be assigned to this role. This role is only used by microservices themselves to communicate with each others.  

![](/assets/images/security/roles.png)

The two specific roles **Instance Admin** and **System** are associated to the associated security voters **IInstanceAdminAccessVoter** and **IRoleSysAccessVoter*. Those two voters are defined in each microservice to allow all access to each endpoints. Nevertheless, it is possible to override theme to handle specifics access to those two roles.
