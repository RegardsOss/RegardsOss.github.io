---
layout: classic-docs
title: Generate a new microservice
short-title: Generate microservice
categories:
  - microservice-core
---

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

- groupId : `fr.cnes.regards.microservices`
- artifactId : the microservice name in camel case, e.g. myMicroService
- version : press enter to apply default value
- package : press enter to apply default value

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