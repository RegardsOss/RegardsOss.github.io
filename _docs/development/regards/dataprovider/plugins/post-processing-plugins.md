---
layout: classic-docs
title: Acquisition chain - Post processing plugins
---

{% include toc.md %}

## Overview

> This extension point allows to add a post processing action after a product is fully acquired and stored.
{: .tip .plus}

REGARDS provides many implementation of this extension point :
 - [CleanAndAcknowledgePlugin] : (https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/CleanAndAcknowledgePlugin.java) : create acknowledgement for each product file and clean all original product files

## Interface

   [ISipPostProcessingPlugin](https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipPostProcessingPlugin.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](/development/framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements ISipPostProcessingPlugin {
   @Override
    public void postProcess(Product product) throws ModuleException {
            // Business process
    }
}
```
