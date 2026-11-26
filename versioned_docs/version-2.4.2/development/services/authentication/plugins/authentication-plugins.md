---
id: backend-authentication-plugins
title: Authentication plugins
sidebar_label: Available plugins 
slug: /development/backend/services/authentication/contributor-guides/plugins/
---


:::note
This extension point allows to define an authentication protocol.

By default, if no authentication system is defined, REGARDS handles its own authentication system based on JWT tokens. However, it is possible to externalize user management with IDP and/or SP.
:::

:::info developers advice
If you want to create your own implementation of one of these extension points, you need to extend the specific
interface indicated.
:::

## Identity provider

Authentication system managed by REGARDS which user base is deported on an external base. This operation allows to connect to an LDAP base for example.

All the following plugins implements
the [IAuthenticationPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IAuthenticationPlugin.java)

REGARDS provides many implementations of this extension point :

| Plugin image                                      | Plugin name                                                                                                                                                                                                                                                                                      | Description                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| **Already** provided <br/>inside the microservice | [RegardsInternalAuthenticationPlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/regards/RegardsInternalAuthenticationPlugin.java) | Authenticate users with internal managed accounts   |
| **Already** provided <br/>inside the microservice | [LdapAuthenticationPlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/ldap/LdapAuthenticationPlugin.java)                          | Authenticate users through a configured LDAP server |

## Service Provider

Authentication system fully externalized. This operation allows to connect through external SSO like github for example.

All the following plugins implements
the [IServiceProviderPlugin interface](https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IServiceProviderPlugin.java)

REGARDS provides one implementation of this extension point :

| Plugin image                                      | Plugin name                                                                                                                                                                                                                                                    | Description                                                   |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Already** provided <br/>inside the microservice | [OpenIdConnectPlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-cloud/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/serviceprovider/openid/OpenIdConnectPlugin.java) | Authenticate users through a configured OpenID Connect server |