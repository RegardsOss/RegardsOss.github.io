---
layout: classic-docs
title: Feign starter
short-title: Feign starter
---

# 1\. Configuration

Add starter dependency to your POM (version depends on the REGARDS BOM)
```xml
<dependency>
  <groupId>fr.cnes.regards.framework</groupId>
  <artifactId>feign-regards-starter</artifactId>
</dependency>
```

Dependency :
- [Multitenant starter](/regards-framework/starters/multitenant-starter/)
- Security utils to manage Json Web Tokens

```properties
# See multitenant starter properties
# Security utils needs JWT secret
```

# 2\. Autoconfiguration

Starter autoconfigures:

- `FeignSecurityManager` to manage security token injection into request headers.
- Enable automatic client discovery in package `fr.cnes.regards` (unless `test` profile is activated - see 3.4)

# 3\. How to

## 3.1\. How to create a client

Create a Spring MVC interface annotated with `RestClient` :

```java
@RestClient(name = "targetMicroserviceName")
public interface IHelloClient {

    @RequestMapping(method = RequestMethod.GET, value = "/hello")
    ResponseEntity<Hello> getHello();
}
```

## 3.2\. How to use a client

Importing Feign starter in your pom.xml, all classes annotated with `RestClient` are automatically discovered in package `fr.cnes.regards`.
So, you can `@Autowired` it in your service.

If client is in a different package, use `@EnableFeignClients` in a configuration class to declare this package.

## 3.3\. How to make a system (i.e. internal) call

By default, `FeignSecurityManager` propagates user token in Feign request from security holder.

To call an endpoint as system, you must inform `FeignSecurityManager` before process request.

If you act as a daemon and you have to manage tenant in **system** client call, use `IRuntimeTenantResolver` to force the right tenant.

```java
// Optionnaly specify working tenant (thread safe action)
runtimeTenantResolver.forceTenant("tenant");
// Enable system call as follow (thread safe action)
FeignSecurityManager.asSystem();
// Process client request ...
// Disable system call if necessary after client request(s)
FeignSecurityManager.reset();
```

## 3.4\. How to create a client programmatically

Use `FeignClientBuilder`, `TokenClientProvider` and `FeignSecurityManager` to init one :

```java
MyClient client = FeignClientBuilder.build(new TokenClientProvider<>(MyClient.class,
        "url", feignSecurityManager));
```

## 3.5\. How to mock Feign

Feign starter allows to disable client discovery. To do so, run the tests in a `test` profile (use `@ActiveProfiles` ) and mock your clients as you wish (using stub, Mockito, etc.).

If you set your own annotation on a configuration class, we recommend to add profile annotation as follow to be able to mock client in test profile :

```java
@Profile("!test")
@Configuration
@EnableFeignClients("your.package")
```
