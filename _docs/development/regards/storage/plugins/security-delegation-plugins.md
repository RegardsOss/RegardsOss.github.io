---
layout: classic-docs
title: Security delegation plugins
---

{% include toc.md %}

## Overview

> This extension point allows to define if a user has access to a given AIP and its files. By default the security is delegated to the catalog microservice with the CatalogSecurityPlugin
{: .tip .plus}

REGARDS provides many implementation of this extension point :
 - [NoCatalogSecurityDelegationPlugin](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/security/NoCatalogSecurityDelegationPlugin.java) : Allow access to all stored AIPs without any security check to all users.

## Interface

   [ISecurityDelegation](https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/ISecurityDelegation.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](/development/framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements ISecurityDelegation {

    /**
     * Return URNs of which access is granted from given ones
     */
    @Override
    public Set<UniformResourceName> hasAccess(Collection<UniformResourceName> urns){

    }

    /**
     * Allow to know if the current user has access to a given AIP, through its ipId
     * @param ipId identifier of aip that we are wondeering if we have access to.
     * @return weither we have access to the aip or not
     */
    @Override
    public boolean hasAccess(String ipId) {

    }

    /**
     * @return weither the current user has access to features returning collections of AIP
     */
    @Override
    public boolean hasAccessToListFeature() {

    }
   
}
```
