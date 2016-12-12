---
layout: classic-docs
title: Microservice Gateway Authentication modes
short-title: Authentications
categories:
  - microservice-gateway
---

The microservice gateway is in charge for the users authentication process. This process is divided in two principals modes :
 - Regards internal authentication with possible multiples Identities Providers
 - External authentication with possible multiples Service Providers

 
## Regards Internal Authentication
 
 Available implementations are the plugins which implements "IAuthenticationPlugin" in the module "authentication-plugins".
 
## External Authentication Mode
 
 Available implementations are the plugins which implements "IServiceProviderPlugin" in the module "authentication-plugins".
 
### The kerberos Service Provider Plugin.
 
 Technical requirement : 
  - Java Cryptography Extension (JCE) installed on microservice gateway system host.
  