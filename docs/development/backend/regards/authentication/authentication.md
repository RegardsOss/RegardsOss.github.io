---
id: backend-authentication-overview
title: RS-AUTHENTICATION microservice
sidebar_label: Overview
slug: /development/backend/services/authentication/overview/
---

The RS-AUTHENTICATION multi-tenant microservice allows users to authenticate.  
To do so, RS-AUTHENTICATION provides these functionnalities:
 - allow authentication using REGARDS internal user base
 - allow fully externalized authentication system to connect through external SSO
 - allow connection using deported external user base (LDAP,...).

### API Guides
- [Get token using REST API](../api-guides/retrieve-token-rest/) shows how to retrieve a REGARDS token using user and password and use it in following requests.  

### REST API
- The [RS-AUTHENTICATION microservice REST API](../api-swagger/) auto generated using OpenAPI.  


### Contributors guides
- [Authentication plugins](../contributor-guides/plugins/) shows to contributors how to implement new authentication plugin
