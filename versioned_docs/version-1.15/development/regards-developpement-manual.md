---
id: development-manual
title: Development manual
slug: /development/
---

## Development contexts

### Backend

REGARDS allows developers to extends the REGARDS backend functionnalities by creating their own :

- [Microservice](backend/framework/dev-microservice.md) : In order to add new functionalities to REGARDS system throught new REST endpoints
- [Microservice plugin](backend/framework/modules/plugins.md) : In order to extend microservices functionalities throught defined extension points for each REGARDS Microservice

**Requirements :** You need a development environment with :

- Maven v3.8.4+
- JDK Eclipse Temurin v17.0.3+
- Git client

### Frontend

REGARDS allows developers to extends REGARDS Frontend functionnalities by creating their own :

- [UI service plugin](frontend/plugins/plugin-services.md) : In order to add new functionalities availables from the consultables data id the project user HMI.
- [UI search criterion widget](frontend/plugins/plugin-criteria.md) : In order to add new criterion types in REGARDS search forms.
- [UI Module plugin](frontend/plugins/plugins.md) : In order to add a totaly new bundle of functionalities

**Requirements :** You need a development environment with :

-	node v8.10+
-	npm v16+ (npm i -g npm to upgrade)
- Git client

## Create a new microservice

Refer to [develop a new microservice](backend/framework/dev-microservice.md) page to create your own microservice.

## Create a new Microservice plugin

Refer to the following pages to develop your own plugins.

- [Backend plugins](backend/framework/modules/plugins.md)
- [Frontend plugins](frontend/plugins/plugins.md)

## Contribute to REGARDS

You can share your REGARDS developments to the REGARDS community by sending a pull request on our github with your package. Your request will be checked as soon as possible by our maintenance team.
