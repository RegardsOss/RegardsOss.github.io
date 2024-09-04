---
id: backend-get-config
title: Retrieve configuration
sidebar_label: Retrieve Configuration
slug: /development/backend/services/config/guides/rest/get-configuration
sidebar_position: 1
---
## Introduction

This section describes how to retrieve the configuration of a specific microservice through the `rs-config` service.

## REST API

### How to

The [Regards REST API concept](../../../../concepts/05-rest-api.md) describes how REST interfaces must be handled to
submit requests.

:::caution
The `rs-config` service is not accessible from the `gateway` microservice.
This means that, to access the `rs-config` service, you need to access the endpoints directly using a curl request 
as described in [this section](../../../../concepts/05-rest-api.md#access-microservices-directly).

:::


### Endpoint

| Endpoint                                             | Verb |
|------------------------------------------------------|------|
| /<microservice-name\>/production/regards-oss-backend | GET  |

```bash title='Example of retrieving the configuration from the rs-fem microservice'
curl http://<server name>:<rs-config port>/rs-fem/production/regards-oss-backend'
```

:::info
As the service is not exposed outside the REGARDS stack, it does not require an authentication token.
:::

