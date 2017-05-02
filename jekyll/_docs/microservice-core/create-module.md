---
layout: classic-docs
title: Generate a new microservice module
short-title: Generate module
categories:
  - microservice-core
---

Once you have created the microservice container, you have to create modules.

To add a new module to your microservice you have to add a new maven module with the module-archetype. To do so :

- Open the root folder of the microservice

```bash
cd myMicroService
```

- Generate a new module

```bash
mvn archetype:generate -DarchetypeCatalog=local
```

Choose the right archetype (`fr.cnes.regards.modules:module-archetype`) and enter requested field as follow :

- groupId : `fr.cnes.regards.modules`
- artifactId : the module name in camel case, e.g. `microModules`
- version : press enter to apply default value
- package : press enter to apply default value
- Add the following dependency to `bootstrap-myMicroservice/pom.xml` file:

For instance, with the module artifact id "myModule" :

```xml
<dependency>
    <groupId>fr.cnes.regards.modules.myModule</groupId>
    <artifactId>myModule-rest</artifactId>
    <version>1.0-SNAPSHOT</version>
  </dependency>
```
