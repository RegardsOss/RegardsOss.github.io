---
layout: classic-docs
title: Acquisition chain - Validation plugins
---

{% include toc.md %}

## Overview

> This extension point allows to define how to validate a file to acquire. Each input file of the acquisition process is subject to this validation. If the validation fails, the file is rejected.
{: .tip .plus}

REGARDS provides many implementation of this extension point :
 - [DefaultFileValidation](https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-service/src/main/java/fr/cnes/regards/modules/acquisition/service/plugins/DefaultFileValidation.java) : Check that the file is readable

## Interface

   [IValidationPlugin](https://github.com/RegardsOss/regards-dataprovider/blob/master/acquisition/acquisition-domain/src/main/java/fr/cnes/regards/modules/acquisition/plugins/IValidationPlugin.java)

## Implementation

To learn more about how to create your own plugin see [Plugins](/development/framework/modules/plugins/)

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements IValidationPlugin {
   @Override
    public boolean validate(Path filePath) throws ModuleException {
        return true;
    }
}
```
