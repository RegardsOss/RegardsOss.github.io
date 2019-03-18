---
layout: classic-docs
title: Develop a new microservice
short-title: Develop microservice
---

REGARDS Microservices are REST services exposed by a Jetty web server contained in a Spring boot application and composed of modules. Each microservice is a Maven project aggregating Maven modules. There is two modules by default: one responsible for running the microservice and one responsible for business. In case a microservice needs to be composed by more than one business module, a module archetype is available.

{% include toc.md %}

## Requirements for development

- Git client
- Maven 3.x
- JDK 1.8

## Common features

Each microservice offers the features :

- REST Resources authorization access by user ROLES
- Access to the Cloud Eureka Registry client to communicate with others microservices
- Access to the Cloud Config Server to centralize configurations properties
- Swagger Interface : <http://address:port/swagger-ui.html>

## Create your first microservice

To create a new microservice you have to create a new maven project with the microservice-archetype. To do so :

- Clone the git rs-microservice repository  

```bash
git clone https://github.com/RegardsOss/regards-bom.git
git clone https://github.com/RegardsOss/regards-microservice.git
```

- Compile and install the maven project  

```bash
cd regards-bom
mvn clean install -DskipTests

cd regards-microservice
mvn clean install -DskipTests
```

- Generate the new microservice in another folder than rs-microservice thanks to the maven project archetype:

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

Once you have created the microservice container, you have to create modules.

To add a new module to your microservice you have to add a new maven module with the module-archetype. To do so :

- Inside the microservice root folder, execute the following command to generate a module

```bash
  cd myMicroservice
  mvn archetype:generate -DarchetypeCatalog=local
```

Choose the right archetype (`fr.cnes.regards.modules:module-archetype`) and enter requested field as follow :

- `groupId` : fr.cnes.regards.modules.myModule
- `artifactId` : myModule
- `version` : press enter to apply default value
- `package` : press enter to apply default value

Add the following dependency to `bootstrap-myMicroservice/pom.xml` file (for instance, with the module artifact id `myModule`) :

```xml
<dependency>
  <groupId>fr.cnes.regards.modules.myModule</groupId>
  <artifactId>myModule-rest</artifactId>
  <version>1.0-0</version>
</dependency>
```

## Configure microservice to run locally with a remote REGARDS server instance

In order to help developers test their microservice, local configuration files are available when you generate a microservice through the maven archetype. Those files are :

- `src/main/resources/application-local-properties`.
- `src/main/resources/bootstrap-local-properties`.

Fill those configuration files with the missing informations.

## Test the microservice

**To compile the new microservice :**

```bash
cd myMicroService
mvn clean install
```

**To run the new microservice :**

```bash
cd myMicroService/bootstrap-myMicroservice
mvn spring-boot:run -Dspring.profiles.active=local
16:07:14.417 [main            ]    INFO o.s.b.c.e.j.JettyEmbeddedServletContainer - Jetty started on port(s) 8999 (http/1.1)
16:07:14.421 [main            ]    INFO o.s.c.n.e.EurekaDiscoveryClientConfiguration - Updating port to 8999
16:07:14.429 [main            ]    INFO f.c.r.microservices.Application - Started Application in 16.691 seconds (JVM running for 23.349)

```

**To authenticate :**

To get an authentication token, the following POST request should be send to the authentication microservice :
```bash
curl -X POST 'http://host:port/oauth/token?grant_type=password&username=regards-admin@c-s.fr&password=root_admin&scope=project1' \
-H 'accept: application/json' \
-H 'Cache-Control: no-cache' \
-H 'authorization: Basic Y2xpZW50OnNlY3JldA=='
```

**API exemple access :**

```bash
curl http://localhost:8999/api/greeting/ -H "Authorization: Bearer <user_acces_token>"
curl http://localhost:8999/api/me/ -H "Authorization: Bearer <admin_acces_token>"
```

**Swagger UI access :** <http://localhost:8999/swagger-ui.html>

**NOTE** : To add new REST resource follow example on file

 `myModule/myModule-rest/src/main/java/fr/cnes/regards/modules/myModule/GreetingsController.java`

 ## Centralize your new microservice configuration

 To centralize the configuration of your microservice, you can copy your application-local.properties file to the rs-config microservice installation directory :  
 ```bash
 cp myMicroservice/bootstrap-myMycroservice/src/main/resources/application-local.properties rs-config/config/regards/myMicroservice.properties
 ```
