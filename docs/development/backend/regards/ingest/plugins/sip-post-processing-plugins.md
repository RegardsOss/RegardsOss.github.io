---
id: backend-ingest-post-processing-plugins
title: SIP Post processing plugins
sidebar_label: SIP post processing
slug: /development/backend/ingest/plugins/sip-post-processing
---



## Overview

:::note
This extension point allows to process a business action after a SIP is successfully handled.
:::

REGARDS do not provides any implementation of this extension point yet.

## Interface

   [ISipPostprocessing](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPostprocessing.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](../../framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements ISipPostprocessing {

        @Override
        public void postprocess(final SIP sip) {
                
        }
   
}
```
