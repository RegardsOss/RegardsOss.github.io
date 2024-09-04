---
id: concepts-rest-api
title: Microservices REST API
sidebar_label: REST API
slug: /development/concepts/rest-api/
---

All REGARDS microservices provide a **REST API**.

## API documentation

On each REGARDS microservice, the documentation provides :

- **API specifications** generated with [Swagger](https://swagger.io/). For
  exemple, [here is the FEM microservice API specification](../backend/regards/fem/api-guides/rest/rs-fem-api-swagger.mdx)
- Guides for main interfaces with detailed exemple of requests and responses to help you to interact with REGARDS
  endpoints. For
  exemple, [here is the FEM guide to create a product](../backend/regards/fem/api-guides/rest/rest-create-product.md)

## Authentification

There is 2 ways to authenticate your request:

- By providing a Json Web Token (JWT). To do so, you must first authenticate through an **authentication service
  provider** known by Regards. By default, Regards provides its own authentication service provider with Oauth2
  protocol **rs-authentication**. Once you have successfully authenticated and retrieved an authentication token,
  you can use it against the **gateway** microservice (or any _reverse proxy_ in front of the gateway) which will
  verify its validity and allow the request to reach its destination inside the REGARDS microservices using a hidden,
  internal REGARDS token.

```bash
curl https://<public host>:<public port>/<microservice>/api/v1/<endpoint> -H 'Authorization: bearer <sso token>'
```

:::info
See [Authentication Guide](../services/authentication/api-guides/rest/authent-oauth2.mdx) to learn how to retrieve a
token from Regards authentication service **rs-authentication**.  
To learn more about additional authentication systems, see [authentication plugins](../services/authentication/plugins/authentication-plugins.md).
:::

- For public endpoints access (no authentication needed), you have to provide the REGARDS project in the request thanks to the parameter `scope` to perform a request with no registered user.

```bash
curl https://<public host>:<public port>/<microservice>/api/v1/<endpoint>?scope=<project>
```

or 

```bash
curl https://<public host>:<public port>/<microservice>/api/v1/<endpoint> -H 'scope: <project>'
```

## How to access REST API endpoints

### Access from outside

To access endpoints from `outside` the microservice installation server, you need to use the `gateway` microservice (or
any _reverse proxy_ in front of the gateway). To do so, use the following access point:

```bash
curl https://<public host>:<public port>/<microservice>/api/v1/<endpoint>
```

### Access microservices directly

You can access each REGARDS API endpoint thanks to a `Curl` request.

```bash
curl http://<server name>:<microservice port>/<endpoint> -H 'Authorization: bearer <token>'
```

:::note
As you can notice, you do not need to prefix the endpoint with `/<microservice>/api/v1/` if you access to the
microservices directly
:::