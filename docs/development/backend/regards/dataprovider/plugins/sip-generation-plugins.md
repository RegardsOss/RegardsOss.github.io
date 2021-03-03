---
id: backend-dataprovider-sip-generation-plugin
title: Acquisition chain - SIP generation plugins
sidebar_label: SIP Generation
slug: /development/backend/dataprovider/plugins/sip-generation
---



## Overview

:::note
This extension point allows to define how to construct a `SIP` for a given `Product`. Products are composed of files by the `Product plugin` of the acquisition chain. This plugin is the one that fill the mata data of each SIP to ingest.
:::

REGARDS provides many implementation of this extension point :
 - [DefaultSIPGeneration](https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultSIPGeneration.java) : Only add files information in SIP (no specific descriptive information).
 - [GeoJsonSIPGeneration](https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonSIPGeneration.java) : Read each product file to extract GeoJson features and generate SIP according to geometry and label information.

## Interface

   [ISipGenerationPlugin](https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/ISipGenerationPlugin.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

To learn more about SIP format (from OAIS stantard) see [OAIS SIP Builder](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/builder/SIPBuilder.java) class. The framework module [OAIS Starter](../../framework/starters/oais) explains the information package described by the OAIS recommandation of the CCSDS.



```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements ISipGenerationPlugin {

        @Override
    public SIP generate(Product product) throws ModuleException {
            // return SIP with all meta data in it.
    }
   
}
```
