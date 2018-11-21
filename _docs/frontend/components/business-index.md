---
layout: classic-docs
title: regardsoss/business-components
short-title: Businness Components
---

* automatic table of content
{:toc}

# Description

The `webapp/business` folder provides re-usable business oriented modules, each of them holding a set of React Component often shared between admin and user applications. The complete list of those modules is:
 - admin-data-entities-attributes-management: Component to display a REGARDS entity (DATASET, COLLECTION, DOCUMENT, ..) attributes configurator form 
 - attributes-common: Components to display a REGARDS attribute configuration field for standard, dynamic and regroupements attributes
 - endpoints-common: Backend global client to retrieve access rights on microservices endpoints 
 - entities-common: Components to display a REGARDS entity (DATASET, COLLECTION, DOCUMENT, DATA, ....) description or apply a service on entity
 - global-system-error: Application decorator to handle server requests errors
 - [microservice-plugin-configurator](/frontend/components/business/microservice-plugin-configurator/): Component to configure any backend plugin of any REGARDS microservice 
 - order-common: Components to handle REGARDS orders
 - project-handler: Application decorator to retrieve current project 
 - user-metadata-common: Component to display a REGARDS user metadata configator fields. Used for user creation/updates
 