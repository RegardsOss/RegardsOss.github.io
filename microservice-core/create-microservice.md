---
layout: classic-docs
title: Generate a new microservice
short-title: Generate microservice
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

Choose the right archetype(fr.cnes.regards.modules:module-archetype) and enter requested field as follow :

- groupId : `fr.cnes.regards.modules`
- artifactId : the module name in camel case, e.g. microModules
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
