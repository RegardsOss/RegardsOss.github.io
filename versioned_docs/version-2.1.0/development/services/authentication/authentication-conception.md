---
title: How it works
sidebar_label: How it works
slug: /development/backend/services/authentication/
sidebar_position: 2
---

## Introduction

The purpose of the authentication service is to enable REGARDS users to obtain an authentication token.
This authentication token will then allow them to access all REGARDS microservices through their REST API.

:::info
Currently, [AMQP API](../../concepts/06-amqp-api.md) does not need this kind of authentication.  
You just have to be logged to RabbitMQ with a dedicated user.
:::

## Token REGARDS

All REGARDS tokens are **Json Web Token** or **JWT**.  
A Json Web Token contains **encrypted** information like current [tenant](../../concepts/03-multitenant.md),
username, or role, that can be decrypted with a key.  
Each microservice know this key and can decrypt JWT. This is important to make sure that current user is well
authenticated.

This token is pass as a header when calling a 
[REST endpoint](/docs/development/concepts/05-rest-api.md#how-to-access-rest-api-endpoints).


## Authentication methods

There are three possible types of authentication within the authentication service :
 - **Internal authentication system** (default).
 - **Identity provider** : Users database is externalized.
 - **Service provider** : The authentication system is completely outsourced. 

:::info
In all cases, a REGARDS JWT is generated, even with external authentication system. This JWT is used to communicate
internally between microservices.
:::

### Internal authentication

By default, if no authentication system is defined, REGARDS handle his own authentication system based on JWT tokens.
This means that user are stored in REGARDS database. Authentication system is manage by REGARDS with an Oauth2 system.

You can see [implementation here](https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/regards/RegardsInternalAuthenticationPlugin.java)

### Identity Provider service

You can authenticate with a custom IDP (Identity Provider) : Users database is externalized. 
This operation allow to connect to an LDAP base for example. An identity provider service can be configured through
[administrator UI](../../../user-documentation/2-project-configuration/users-authentication-ldap.md).

### Service Provider service

You can authenticate with a custom SP (Service Provider) : Authentication system fully externalized. This operation
allow to connect through external SSO like github for example.
In order to do this, you need to

1. Configure a service provider through [administrator UI](../../../user-documentation/2-project-configuration/users-authentication-openid.md).
2. Connect to external service, and store the returned token.
3. Connect to regards with this external token. Regards will detect that token is not a REGARDS JWT. Regards will verify
   token validity by sending a request to configured external authentication service. After verification, a Regards JWT
   is generated and used to fulfill requests.

See [plugin page](./plugins/authentication-plugins.md) for more details.