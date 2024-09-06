---
id: backend-framework-starters-security
title: Security starter
slug: /development/backend/framework/starters/security/
---


## Purpose

This starter enables security feature.

## Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>security-regards-starter</artifactId>
</dependency>
```

Business dependency

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>security-regards</artifactId>
</dependency>
```

Business dependency just containing security annotation and roles. 

```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>security-config</artifactId>
</dependency>
```

Dependency :

* [Multitenant starter](multitenant-starter.md)
* [Authentication starter](authentication-starter.md)
* [AMQP starter](amqp-starter.md)

```properties
# Authorize system to access all endpoints
regards.security.system.voter.enabled=true

# Authorize instance admin to access all endpoints
regards.security.instance.voter.enabled=true

# Authorize project admin to access all endpoints
regards.security.project.admin.voter.enabled=true

# JSON Web Token secret key
jwt.secret=
```

## Autoconfiguration

Security starter overrides `IRuntimeTenantResolver` ([Multitenant starter](multitenant-starter.md) and `IAuthenticationResolver` ([Authentication starter](authentication-starter.md)) default behavior to a **thread safe** implementation based on JWT authentification.

It autoconfigures :

* An authorization service based on a REST endpoint collector `IAuthoritiesProvider` you have to override.
* An authentication provider to retrieve authentication properties from JWT.
* A set of access voter to grant or deny accesses.

## How to

### How to secure endpoints

If this starter is on your classpath, all REST enpoint accesses is intercepted by starter security filter. Access is granted or denied according to custom endpoint configuration.

At the beginning, all endpoints have to declare a default access level that can be changed dynamically.

To do this, annotate your endpoints with `ResourceAccess` as below :

```java
@RestController
@RequestMapping("/hello")
public class HelloController {

    @ResourceAccess(description = "Say hello!", role = DefaultRole.PUBLIC)
    @RequestMapping(method = RequestMethod.GET, value = "/{name}")
    public ResponseEntity<String> sayHello(@PathVariable("name") String name) {
        return ResponseEntity.ok(String.format("Hello %s!", name));
    }
```

By default, all client will have granted access to this PUBLIC endpoint.

REGARDS manages five hierarchical default roles :

* INSTANCE_ADMIN, a cross tenant role with very specific behaviour. Endpoints with this level of access cannot be changed and are hidden from tenant users.
* PROJECT_ADMIN (default annotation role) only grant access to the tenant (i.e. project) main administrator(s). If voter is enabled, user with this role will have full access to all endpoints regardless the project access configuration.
* ADMIN (tenant dependant),
* REGISTERED_USER (tenant dependant),
* PUBLIC (tenant dependant).

### Json Web Token (JWT)

This starter depends on JWT authentication token.

To be able to decrypt the JWT :

* Token has to be provided in a bearer authentication scheme,
* And has to be generated with starter service `JWTService` that can be found in `fr.cnes.regards.framework.security-regards` module or artifact.

### How to retrieve all default endpoint access configuration

Starter exposes a REST API.

```
GET /security/resources
```
