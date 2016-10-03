---
layout: classic-docs
title: Generate a new microservice or module
short-title: Generate microservices
categories:
  - microservice-core
---

# Development context

REGARDS Microservices are REST services exposed by a Jetty web server contained in a Spring boot application and composed of modules. Each microservice is a Maven project aggregating Maven modules. There is two modules by default: one responsible for running the microservice and one responsible for business. In case a microservice needs to be composed by more than one business module, a module archetype is available.

Requirements for development:

- git client 1.8
- maven 3.x
- JDK 1.8

# Create a new microservice

To create a new microservice you have to create a new maven project with the microservice-archetype. To do so :

- Clone the git rs-microservice repository<br>

```bash
git clone https://<user>@thor.si.c-s.fr/git/rs-microservice
```

- Compile and install the maven project<br>

```bash
cd rs-microservice
mvn clean install
```

- Generate the new microservice in another folder than rs-microservice thanks to the maven project archetype:

```bash
mkdir ../my-micro-service
cd ../my-micro-service
mvn archetype:generate -DarchetypeCatalog=local
```

You have many archetype proposed to you, under the format `number: [local|remote] -> archetype_group_id:archetype_artifact_id (archetype_description)` find the line `X: local -> fr.cnes.regards.microservices:microservice-archetype (Microservice creation archetype)` and enter `X` where X is the actual number of the microservice creation archetype. Then enter the requested fields as follow :

- groupId : fr.cnes.regards.microservices
- artifactId :

  <camelcasemicroserviceartifactid?> (e.g. myMicroService)</camelcasemicroserviceartifactid?>

- version : press enter to apply default value

- package : press enter to apply default value

```bash
mvn archetype:generate \
  -DarchetypeGroupId=fr.cnes.regards.microservices \
  -DarchetypeArtifactId=microservice-archetype \
  -DarchetypeVersion=0.0.1 \
  -DgroupId=fr.cnes.regards.microservices \
  -DartifactId=<camelCaseMicroserviceArtifactId?> \
  -DarchetypeRepository=</path/to/git/repo/rs-microservice/microservice-archetype/target?>
```

# Create the first module

Once you have created the microservice container, you have to create modules.

To add a new module to your microservice you have to add a new maven module with the module-archetype. To do so :

- Go to microservice folder and generate a module

```bash
cd <camelCaseMicroserviceArtifactId?>
  mvn archetype:generate -DarchetypeCatalog=local
```

Choose the right archetype(fr.cnes.regards.modules:module-archetype) and enter requested field as follow :

- groupId : fr.cnes.regards.modules
- artifactId :

  <camelcasemoduleartifactid?> (e.g. myModule)</camelcasemoduleartifactid?>

- version : press enter to apply default value

- package : press enter to apply default value

```bash
mvn archetype:generate
  -DarchetypeGroupId=fr.cnes.regards.modules
  -DarchetypeArtifactId=module-archetype
  -DarchetypeVersion=0.0.1
  -DgroupId=my.module
  -DartifactId=<camelCaseModuleArtifactId?> \
  -DarchetypeRepository=</path/to/git/repo/
  rs-microservice/module-archetype/target?>
```

- Add the following dependency to `bootstrap-myMicroservice/pom.xml` file:

For instance, with the module artifact id "myModule" :

```xml
<dependency>
    <groupId>fr.cnes.regards.modules.myModule</groupId>
    <artifactId>myModule-rest</artifactId>
    <version>1.0-SNAPSHOT</version>
  </dependency>
```

# Test the microservice

By default the microservice archetype expose an exemple REST Controller on <http://localhost:3333>

To change the microservice configuration modify the `myMicroService/bootstrap-myMicroService/src/main/resources/application.yml` file.

**To compile the new microservice :**

```bash
cd myMicroService
mvn clean install
```

**To run the new microservice :**

```bash
cd myMicroService/bootstrap-myMicroservice
mvn spring-boot:run
```

**To authenticate :**

```bash
curl -X "POST" http://acme:acmesecret@localhost:3333/oauth/token \
-d grant_type=password \
-d username=[admin|user] -d password=[admin|user]
```

**API exemple access :**<br>

```bash
curl http://localhost:3333/api/greeting/ -H "Authorization: Bearer <user_acces_token>"
curl http://localhost:3333/api/me/ -H "Authorization: Bearer <admin_acces_token>"
```

**Swagger UI access :** <http://localhost:3333/swagger-ui.html>

**NOTE** : To add new REST resource follow exemple on file `myModule/myModule-rest/src/main/java/fr/cnes/regards/modules/myModule/GreetingsController.java`

# Common features

Each microservice offers the features :

- OAuth2 authentication : <http://address:port/oauth/token>
- REST Resources authorization access by user ROLES
- Access to the Cloud Eureka Registry client to communicate with others microservices
- Access to the Cloud Config Server to centralize configurations properties
- Allows CORS requests
- Swagger Interface : <http://address:port/swagger-ui.html>

# Troubleshooting
