---
id: backend-authentication-token-curl
title: Retrieve token REST
sidebar_label: Retrieve token REST
slug: /development/backend/services/authentication/api-guides/retrieve-token-rest/
---

## Retrieve a token

### Request

| description | url | verb |
| ----------- | --- | ---- |
| Authentication endpoint (OAuth 2) | `<HOST>`/api/v1/rs-authentication/oauth/token | POST |

`Request headers`
```json
{
  "Content-Type": "application/json;charset=UTF-8",
  "Accept": "application/json",
  "Authorization": "Basic Y2xpZW50OnNlY3JldA=="
}
```

### Query parameters

 | Parameter | Type | Optional | Description |
| --------- | ---- | :------: | ----------- |
| `grant-type` | String | No | The authentication grant_type. REGARDS only allows `password` value |
| `scope` | String | No | The REGARDS project (aka tenant) to authenticate to |
| `username` | String | No | User login |
| `password` | String | No | User password |


### Response

Hereunder is a response exemple. The `access_token` is the token you will need to access every REGARDS API endpoints.

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...",
  "email": "user@regards.fr",
  "expires_in": 43199,
  "role": "USER_ROLE",
  "scope": "project1",
  "sub": "user@regards.fr",
  "tenant": "project1",
  "token_type": "bearer"
}
```


### cURL example

You can access authentication endpoint with a `cURL` request to the RS-AUTHENTICATION microservice
```bash
curl -X POST `${HOST}`/api/v1/rs-authentication/oauth/token?grant_type=password&scope=<project>&username=<login>&password=<password> \
-H 'Authorization: Basic Y2xpZW50OnNlY3JldA==' \
-H 'Content-Type: application/json;charset=UTF-8' \
-H 'Accept: application/json'
```

## Token usage

To use the generated token, adds the header `Authorization` to your request.

`Request headers`
```json
{
  "Authorization": "Bearer <token>",
  [...]
}
```

For example, to import notifier rules:
```bash
curl -v -XPUT ${HOST}/api/v1/rs-notifier/rule \
-H 'Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ey...' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json'
--data [...]
```

