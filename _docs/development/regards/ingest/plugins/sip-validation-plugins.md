---
layout: classic-docs
title: SIP Validation plugins
---

{% include toc.md %}

## Overview

> This extension point allows to validate each `SIP` sumitted for ingestion.
{: .tip .plus}

REGARDS provides many implementation of this extension point :
 - [DefaultSipValidation](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/plugin/DefaultSipValidation.java) : No validation

## Interface

   [ISipValidation](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipValidation.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](/development/framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements ISipValidation {
        @Override
        public void validate(final SIP sip, Errors errors) {
                // Add some errors to the Errors parameter if SIP is invalid.
        }
}
```
