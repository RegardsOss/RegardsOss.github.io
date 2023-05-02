---
id: backend-lta-manager-overview
title: RS-LTA-MANAGER microservice
sidebar_label: Overview
slug: /development/backend/services/lta-manager/overview/
---

The RS-LTA-MANAGER microservice has been designed to improve interropability between external applications and REGARDS OAIS catalog.  
It provides a single service that let you create product and check creation progress, errors...

To do so, RS-LTA-MANAGER provides these functionnalities:
 - allows to create OAIS product
   - the payload is lighter than the one used by OAIS catalog
   - product can be enhancement by workers
 - get creation request status and errors - avoid you to connect to RS-WORKER-MANAGER, RS-INGEST and RS-STORAGE.
 

### API Guides
 - Create product [using REST API](../guides/create-product-rest) or [using AMQP API](../guides/submit-product-amqp) shows you how to create a *Long Term Archive request* and sent it to REGARDS.
 - Get product [status using REST API](../guides/get-request-status-rest) or [progress threw AMQP API](../guides/get-product-progress-amqp) shows you how to retrieve *Long Term Archive request* updates.

### REST API
- The [RS-LTA-MANAGER microservice REST API](../api-swagger/) auto generated using OpenAPI.  

### Contributors guides
 - more incomming...

 