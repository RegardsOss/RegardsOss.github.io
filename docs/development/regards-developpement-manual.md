---
id: development-manual
title: Development manual
slug: /development
---

## Development contexts

### Backend

REGARDS allows developers to extends the REGARDS backend functionnalities by creating their own :

- **[Microservice](development/backend/framework/dev-microservice)** : In order to add new functionalities to REGARDS system throught new REST endpoints
- **[Microservice plugin](development/backend/framework/modules/plugins)** : In order to extend microservices functionalities throught defined extension points for each REGARDS Microservice

**Requirements :** You need a development environment with :

- Java 1.8
- Maven 3.3.1+
- Git client

### Frontend

REGARDS allows developers to extends REGARDS Frontend functionnalities by creating their own :

- **[UI service plugin](development/frontend/plugins/service)** : In order to add new functionalities availables from the consultables data id the project user HMI.
- **[UI search criterion widget](development/frontend/plugins/criteria)** : In order to add new criterion types in REGARDS search forms.
- **[UI Module plugin](development/frontend/plugins/)** : In order to add a totaly new bundle of functionalities

**Requirements :** You need a development environment with :

- npm 4+
- Git client

## Create a new microservice

Refer to [develop a new microservice](development/backend/framework/dev-microservice) page to create your own microservice.

## Create a new Microservice plugin

Refer to the following pages to develop your own plugins.

- [Backend plugins](development/backend/framework/modules/plugins)
- [Frontend plugins](development/frontend/plugins)

## Contribute to REGARDS

You can share your REGARDS developments to the REGARDS community by sending a pull request on our github with your package. Your request will be checked as soon as possible by our maintenance team.
