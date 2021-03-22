---
id: backend-authentication-plugins
title: Authentication plugins
sidebar_label: Authentication plugins 
slug: /development/backend/authentication/plugins/
---


:::note
This extension point allows to define an authentication protocol.

By default, if no authentication system is defined, REGARDS handles its own authentication system based on JWT tokens. However, it is possible to externalize user management with IDP and/or SP.
:::

## IDP (Identity provider)

Authentication system managed by REGARDS which user base is deported on an external base. This operation allow to connect to an LDAP base for example.

### Interface

 - [IAuthenticationPlugin](https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IAuthenticationPlugin.java)

REGARDS provides many implementation of this extension point :
 - [RegardsInternalAuthenticationPlugin](https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/regards/RegardsInternalAuthenticationPlugin.java) : Authenticate users with internal managed accounts.
 - [LdapAuthenticationPlugin](https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/identityprovider/ldap/LdapAuthenticationPlugin.java) : Authenticate users through a configured LDAP server

## SP (Service Provider)

Authentication system fully externalized. This operation allow to connect through external SSO like github for example.

### Interface

 - [IServiceProviderPlugin](https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-domain/src/main/java/fr/cnes/regards/modules/authentication/domain/plugin/IServiceProviderPlugin.java)

REGARDS provides one implementation of this extension point :
 - [OpenIdConnectPlugin](https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/serviceprovider/openid/OpenIdConnectPlugin.java) : Authenticate users through a configured OpenID Connect server

