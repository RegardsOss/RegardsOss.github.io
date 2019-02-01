---
layout: classic-docs
title: AIP generation plugins
---

{% include toc.md %}

## Overview

> This extension point allows to generate one or many `AIP`(s) for one submitted `SIP`.
{: .tip .plus}

REGARDS provides many implementation of this extension point :
 - [DefaultSingleAIPGeneration](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/plugin/DefaultSingleAIPGeneration.java) : Build AIP with all informations from SIP

## Interface

   [IAipGeneration](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAipGeneration.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](/development/framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements IAipGeneration {

    @Override
    public List<AIP> generate(SIP sip, UniformResourceName aipId, UniformResourceName sipId, String providerId) {
    }
}
```
