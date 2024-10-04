---
id: backend-framework-dev-microservice
title: Develop a new microservice
sidebar_label: How to create a microservice
slug: /development/tutorials/backend/dev-microservice/
---

REGARDS Microservices are REST services exposed by a Jetty web server contained in a Spring boot application and
composed of modules. Each microservice is a Maven project aggregating Maven modules.  
There is two modules by default:

* one responsible for running the microservice
* one responsible for business.

In case a microservice needs to be
composed by more than one business module, a module archetype is available.

## Requirements for development

- Git client
- Maven v3.8.4+
- JDK Eclipse Temurin v17.0.3+

## Common features

Each microservice offers the features :

- REST Resources authorization access by user ROLES
- Access to the Cloud Eureka Registry client to communicate with others microservices
- Access to the Cloud Config Server to centralize configurations properties
- Swagger Interface : `http://address:port/swagger-ui.html`

## Create your first microservice

To create a new microservice you have to create a new maven project with the microservice-archetype. To do so :

- Clone the git regards-backend repository

```bash
git clone https://github.com/RegardsOss/regards-backend.git
```

- Compile and install the maven project

```bash
cd regards-backend
mvn clean install -DskipTests
```

- Generate the new microservice in another folder than regards-backend thanks to the maven project archetype:

```bash
mkdir ../myMicroservice
cd ../myMicroservice
mvn archetype:generate -DarchetypeCatalog=local
```

You have many archetype proposed to you, under the format

```txt
number: [local|remote] -> archetype_group_id:archetype_artifact_id (archetype_description)
```

find the line

```txt
X: local -> fr.cnes.regards.microservices:microservice-archetype (microservice-archetype)
```

and enter `X`

where X is the actual number of the microservice creation archetype. Then enter the requested fields as follow :

- `groupId` : fr.cnes.regards.microservices.mymicroservice
- `artifactId` : mymicroservice
- `version` : press enter to apply default value
- `package` : press enter to apply default value
- `microserviceDescription` : My microservice description
- `microserviceName` : mymicroservice
- `microserviceTitle` : My Microservice

## Create your first module

Once you have created the microservice module, you have to create sub-modules.

To add a new module to your microservice you have to add a new maven module with the module-archetype. To do so :

- Inside the microservice root folder, execute the following command to generate a module

```bash
  cd myMicroservice
  mvn archetype:generate -DarchetypeCatalog=local
```

Choose the right archetype (`fr.cnes.regards.modules:module-archetype`) and enter requested field as follow :

- `groupId` : fr.cnes.regards.modules
- `artifactId` : my-module
- `version` : press enter to apply default value
- `package` : press enter to apply default value

Add the following dependency to `bootstrap-myMicroservice/pom.xml` file (for instance, with the module artifact
id `myModule`) :

```xml

<dependency>
    <groupId>fr.cnes.regards.modules</groupId>
    <artifactId>my-module-rest</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

## References

You can also find a tutorial documentation on how to build REGARDS plugins and
microservices [here](/docs/regards-backend-tutorial.odp)  
