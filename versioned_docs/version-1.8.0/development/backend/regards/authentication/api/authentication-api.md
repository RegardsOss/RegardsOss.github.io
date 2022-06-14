---
id: backend-authentication-api
title: REGARDS authentication API
sidebar_label: Authentication API (legacy)
slug: /development/backend/services/authentication/api/
---



## Authentication URL

* `POST` `/oauth/token`

You can access authentication endpoint with a `Curl` request to the authentication microservice
```bash
curl -X POST http://<microservice_host>:<microservice_port>/oauth/token?grant_type=password&scope=<project>&username=<login>&password=<password> \ 
-H 'Authorization: Basic Y2xpZW50OnNlY3JldA==' \ 
-H 'Content-Type: application/json;charset=UTF-8' \ 
-H 'Accept: application/json'
```

### Authentication headers

* `Authorization: Basic Y2xpZW50OnNlY3JldA==`
* `Content-Type: application/json;charset=UTF-8`
* `Accept: application/json`

### Query parameters

* `grant-type` : The authentication grant_type. Regards only allows 'password' value.
* `scope` : The regards project to authenticate to.
* `username` : User login.
* `password` : User password.


### Response

Here under is a response exemple. The `access_token` is the token you will need to access every REGARDS API endpoints.

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

### Use token

To use the generated token in all REGARDS endpoint add the header here under to all requests.

* `Authorization: Bearer <token>`


