---
id: backend-ingest-tagging-plugins
title: AIP Tagging plugins
sidebar_label: AIP tagging
slug: /development/backend/services/ingest/plugins/aip-tagging/
---


## Overview

:::note
This extension point allows to add `Tags` to a list of generated `AIP`. A `Tag` is a keyword or an `URN` identifier of an other `AIP`.
:::

REGARDS provides many implementation of this extension point :
 - [DefaultAIPTagging](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/plugin/DefaultAIPTagging.java) : Add configured tags to each genereted AIP

## Interface

   [IAipTagging](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAipTagging.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../../../framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements IAipTagging {
    @Override
    public void tag(List<AIP> aips) throws TagAIPException {
            // Add yout tags to each given aips.
    }
}
```
