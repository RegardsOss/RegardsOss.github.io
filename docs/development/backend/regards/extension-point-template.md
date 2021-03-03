---
layout: classic-docs
title: TODO plugins
---



## Overview

:::note
This extension point allows to ...
:::

REGARDS provides many implementation of this extension point :
 - [Impl](https://github.com/RegardsOss/regards-dam/blob/master/.../Impl.java) : TODO

## Interface

   [PluginInterface](https://github.com/RegardsOss/regards-dam/blob/master/.../IInterface.java)

## Implementation

To learn more about how to create your own plugin see [Plugins]

Here under is an exemple of how to implements this extension point to create your own business logic.

```java
@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",
        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",
        url = "https://github.com/RegardsOss")
public class Plugin implements IDataObjectAccessFilterPlugin {
   
}
```
