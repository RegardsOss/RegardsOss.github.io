---
id: backend-authentication-plugins
title: Authentication plugins
sidebar_label: Authentication plugins 
slug: /development/backend/authentication/plugins/
---


## Overview

:::note
This extension point allows to define an authentication protocol.
:::

REGARDS provides many implementation of this extension point :
 - [RegardsInternalAuthenticationPlugin](https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/regards/RegardsInternalAuthenticationPlugin.java) : Authenticate users with internal managed accounts.
 - [LdapAuthenticationPlugin](https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/impl/ldap/LdapAuthenticationPlugin.java) : Authenticate users through a configured LDAP server

## Interface

   [IAuthenticationPlugin](https://github.com/RegardsOss/regards-cloud/blob/master/rs-authentication/authentication/authentication-plugins/src/main/java/fr/cnes/regards/modules/authentication/plugins/IAuthenticationPlugin.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

<b>NOTE : </b> The only mandatory meta data on every authenticated users is an email adress. So each authentication protocol must be able to return email of authenticated users.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements IDataObjectAccessFilterPlugin {
   
   @Override
   public AuthenticationPluginResponse authenticate(String userName, String userPassword, String scope) {
           // Do authentication and return an AuthenticationPluginResponse
           Boolean accessGranted = true;
           String email = userName;
           return new AuthenticationPluginResponse(accessGranted,email);
   }
}
```
