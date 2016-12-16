---
layout: classic-docs
title: HATEOAS starter
short-title: HATEOAS starter
categories: [starters]
---

# 1\. Configuration

Nothing to configure at the moment.

Dependency :
- [Security starter](/regards-framework/starters/security-starter/)

> WARNING : at the moment, this starter only accepts **@RequestMapping** annotation to work fine.

# 2\. Autoconfiguration

Starter autoconfigures an **IResourceService** that helps to expose HATEAOS links according to security access configuration.

# 3\. How to

If your controller manages a single POJO, implements **IResourceController<T>**.

In its **toResource** method, define all links using an autowired **IResourceService** regardless security authorization. Only authorized links will be really exposed.

Sample :
```java
@RestController
@RequestMapping("/pojos")
public class MyPojoController implements IResourceController<MyPojo> {
	...
	@Autowired
	private IResourceService resourceService;
	...
    @ResourceAccess(description = "List all pojos")
    @GetMapping
    public ResponseEntity<List<Resource<MyPojo>>> getPojos() {
        final List<MyPojo> pojos = ...
        return ResponseEntity.ok(toResources(pojos));
    }
	...
    @ResourceAccess(description = "Get a pojo")
    @GetMapping("/{pPojoId}")
    public ResponseEntity<Resource<MyPojo>> getPojo(@PathVariable Long pPojoId) {
        final MyPojo pojo = ...
        return ResponseEntity.ok(toResource(pojo));
    }
	...
	@Override
    public Resource<MyPojo> toResource(MyPojo pPojo) {
        final Resource<MyPojo> resource = resourceService.toResource(pPojo);
        resourceService.addLink(resource, this.getClass(), "getPojo", LinkRels.SELF,
                                MethodParamFactory.build(Long.class, pPojo.getId()));
        ...
        return resource;
    }
}
```
