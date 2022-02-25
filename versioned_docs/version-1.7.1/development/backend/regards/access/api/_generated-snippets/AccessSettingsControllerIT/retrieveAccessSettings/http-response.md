### Response

* **Code:** 200 OK

**Headers:**

`X-Content-Type-Options:nosniff`  
`X-XSS-Protection:1; mode=block`  
`Cache-Control:no-cache, no-store, max-age=0, must-revalidate`  
`Pragma:no-cache`  
`Expires:0`  
`X-Frame-Options:DENY`  
`Access-Control-Allow-Origin:*`  
`Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`  
`Access-Control-Allow-Headers:authorization, content-type, scope`  
`Access-Control-Max-Age:3600`  
`Content-Type:application/json;charset=UTF-8`  

**Content:**

```json
    
[ {
  "content" : {
    "name" : "default_groups",
    "description" : "Default Groups",
    "value" : [ "dummy" ],
    "defaultValue" : [ ]
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/accesses/settings"
  } ]
}, {
  "content" : {
    "name" : "default_role",
    "description" : "Default Role",
    "value" : "REGISTERED_USER",
    "defaultValue" : "REGISTERED_USER"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/accesses/settings"
  } ]
}, {
  "content" : {
    "name" : "acceptance_mode",
    "description" : "Acceptance Mode",
    "value" : "auto-accept",
    "defaultValue" : "auto-accept"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/accesses/settings"
  } ]
}, {
  "content" : {
    "name" : "maxQuota",
    "description" : "Default max quota for RAWDATA download. Must be > -1.",
    "value" : 4779,
    "defaultValue" : -1
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/accesses/settings"
  } ]
}, {
  "content" : {
    "name" : "rateLimit",
    "description" : "Default rate limit for RAWDATA download. Must be > -1.",
    "value" : 9562,
    "defaultValue" : -1
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/accesses/settings"
  } ]
} ]
```
