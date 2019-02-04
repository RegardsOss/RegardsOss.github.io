---
layout: classic-docs
title: SIP Pre-processing plugins
---

{% include toc.md %}

## Overview

> This extension point allows to process a business action before a SIP is handled.   
> Moreover, for a SIP passed by reference, `read` method is activated to tranform referenced data package to REGARDS normalized SIP.
{: .tip .plus}

REGARDS do not provides any implementation of this extension point yet.

## Interface

   [ISipPreprocessing](https://github.com/RegardsOss/regards-ingest/blob/master/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/ISipPreprocessing.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](/development/framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements ISipPreprocessing {

        @Override
        public void preprocess(final SIP sip) throws ProcessingStepException {
                
        }

        @Override
        public SIP read(final SIPReference ref) throws InvalidSIPReferenceException {

        }
   
}
```
