---
id: backend-dataprovider-scan-plugin
title: Acquisition chain - Scan plugins
sidebar_label: Scan
slug: /development/backend/services/dataprovider/plugins/scan/
---


## Overview

:::note
This extension point allows to define how to find files to acquire.
:::

REGARDS provides many implementation of this extension point :
 - [RegexDiskScanning](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/RegexDiskScanning.java) : Search for files in local directories specifying a regex pattern.
 - [GlobDiskScanning](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GlobDiskScanning.java) : Search for files in local directories specifying a glob pattern.
 - [GeoJsonFeatureCollectionParserPlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonFeatureCollectionParserPlugin.java) : Scan a directory to find geojson files. For each geojson file found, generate a json file containing each feature of the geojson file. This plugin is used in combination with the [GeoJsonSIPGeneration](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/GeoJsonSIPGeneration.java) to generate one SIP for each feature of a geojson FeatureCollection file.


## Interface

   [IScanPlugin](https://github.com/RegardsOss/regards-backend/blob/master/rs-dataprovider/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IScanPlugin.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../../../framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

<b>NOTE : </b> The last acquisition date is provided to the plugin at runtime to avoid scanning already scanned files. This date is the last date when a file as been successfully scanned and acquired.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements IScanPlugin {

         @Override
    public List<Path> scan(Optional<OffsetDateTime> lastModificationDate) throws ModuleException {
            // Return files to acquire
    }
   
}
```
