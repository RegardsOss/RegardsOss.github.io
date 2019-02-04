---
layout: classic-docs
title: REGARDS authentication API
short-title: Legacy authentication API
---

{% include toc.md %}

## Authentication URL

* `POST` `/oauth/token`

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


