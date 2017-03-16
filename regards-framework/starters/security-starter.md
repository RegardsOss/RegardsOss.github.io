---
layout: classic-docs
title: Security starter
short-title: Security starter
---

# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>security-regards-starter</artifactId>
</dependency>
```

Dependency :
- [Multitenant starter](/regards-framework/starters/multitenant-starter/)

```properties
# Authorize instance admin to access all endpoints
regards.security.instance.voter.enabled=true
# Authorize system to access all endpoints
regards.security.system.voter.enabled=true
# Authorize project admin to access all endpoints
regards.security.project.admin.voter.enabled=true
# JSON Web Token secret key
jwt.secret=

```

# 2\. Autoconfiguration

TODO : explain auto configuration
