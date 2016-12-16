---
layout: classic-docs
title: Security starter
short-title: Security starter
categories: [starters]
---

# Default configuration

```properties
jwt.secret=MTIzNDU2Nzg5 # Secret key
```

# Customize security endpoints filters

In a @Configuration file define your bean as follow :

```java
@Bean
public ICustomWebSecurityConfiguration customTSecurityEndpointsConfiguration() {
            return new CustomWebSecurityConfiguration();
}

public class CustomWebSecurityConfiguration implements ICustomWebSecurityConfiguration {
...
}
```
