{% comment %}
---
layout: classic-docs
title: Generate a new microservice
short-title: Generate microservice
categories:
  - microservice-core
---
{% endcomment %}

To create a new microservice you have to create a new maven project with the microservice-archetype. To do so :

- Clone the git rs-microservice repository<br>

```bash
git clone https://<user>@thor.si.c-s.fr/git/rs-microservice
```

- Compile and install the maven project<br>

```bash
cd rs-microservice
mvn clean install -DskipTests
```

- Generate the new microservice in another folder than rs-microservice thanks to the maven project archetype:

```bash
mkdir ../my-micro-service
cd ../my-micro-service
mvn archetype:generate -DarchetypeCatalog=local
```

You have many archetype proposed to you, under the format

`number: [local|remote] -> archetype_group_id:archetype_artifact_id (archetype_description)`

find the line

`X: local -> fr.cnes.regards.microservices:helloworld-microservice-archetype (helloworld-microservice-archetype)`

and enter `X`

where X is the actual number of the microservice creation archetype. Then enter the requested fields as follow :

- groupId : `fr.cnes.regards.microservices`
- artifactId : the microservice name in camel case, e.g. `myMicroService`
- version : press enter to apply default value
- package : press enter to apply default value

# Test the microservice

By default the microservice archetype expose an exemple REST Controller on

 <http://localhost:8999>

To change the microservice configuration modify the file

 `myMicroService/bootstrap-myMicroService/src/main/resources/application.properties`

**To compile the new microservice :**

```bash
cd myMicroService
mvn clean install
```

**To run the new microservice :**

```bash
cd bootstrap-myMicroservice
mvn spring-boot:run
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

**NOTE** : To add new REST resource follow exemple on file

 `myModule/myModule-rest/src/main/java/fr/cnes/regards/modules/myModule/GreetingsController.java`

# Common features

Each microservice offers the features :

- REST Resources authorization access by user ROLES
- Access to the Cloud Eureka Registry client to communicate with others microservices
- Access to the Cloud Config Server to centralize configurations properties
- Allows CORS requests
- Swagger Interface : <http://address:port/swagger-ui.html>
