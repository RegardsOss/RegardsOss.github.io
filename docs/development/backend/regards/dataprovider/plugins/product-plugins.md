---
id: backend-dataprovider-product-plugin
title: Acquisition chain - Product generation plugins
sidebar_label: Product
slug: /development/backend/services/dataprovider/plugins/product/
---



## Overview

:::note
This extension point allows to define how to construct a `Product` from a list of files to acquire. A Product is a package of related files. At the end of the aquisition process each product is represented by a `Feature` in a `SIP Collection`.
:::

REGARDS provides many implementation of this extension point :
 - [DefaultProductPlugin](https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultProductPlugin.java) : Construct one product for each scanned file.

## Interface

   [IProductPlugin](https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IProductPlugin.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../../../framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

<b> NOTE : </b> To define a product with many files, the plugin must return the same product name for each file.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements IProductPlugin {

    @Override
    public String getProductName(Path filePath) throws ModuleException {
            // Return the product name for the give scanned file
    }
   
}
```
