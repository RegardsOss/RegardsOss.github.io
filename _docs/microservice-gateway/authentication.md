{% comment %}
---
layout: classic-docs
title: Microservice Gateway Authentication modes
short-title: Authentications
categories:
  - microservice-gateway
---
{% endcomment %}

The microservice gateway is in charge of the user's authentication process. This process is divided in two main modes :
 - [REGARDS Internal authentication](#REGARDS Internal Authentication) with possible multiples **Identities Providers**
 - [External Authentication](#External Authentication Mode) with possible multiples **Service Providers**


## REGARDS Internal Authentication

 Available implementations are the plugins which implements "IAuthenticationPlugin" in the module "authentication-plugins".

## External Authentication Mode

 Available implementations are the plugins which implements "IServiceProviderPlugin" in the module "authentication-plugins".

#### The Kerberos Service Provider Plugin
For the Kerberos Service Provider Plugin, this technical requirement is mandatory :
  - Java Cryptography Extension (JCE) is installed on microservice gateway system host.
