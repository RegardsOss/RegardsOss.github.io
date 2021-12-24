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
    
{
  "metadata" : {
    "size" : 10,
    "totalElements" : 1000,
    "totalPages" : 100,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1,
      "creationDate" : "2021-09-16T19:33:41.128Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 2,
      "creationDate" : "2021-09-16T19:33:41.142Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 3,
      "creationDate" : "2021-09-16T19:33:41.144Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 4,
      "creationDate" : "2021-09-16T19:33:41.146Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 5,
      "creationDate" : "2021-09-16T19:33:41.148Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 6,
      "creationDate" : "2021-09-16T19:33:41.149Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 7,
      "creationDate" : "2021-09-16T19:33:41.151Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 8,
      "creationDate" : "2021-09-16T19:33:41.152Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 9,
      "creationDate" : "2021-09-16T19:33:41.153Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 10,
      "creationDate" : "2021-09-16T19:33:41.155Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  } ],
  "links" : [ {
    "rel" : "first",
    "href" : "http://localhost:8080/requests?page=0&size=10&sort=id,asc"
  }, {
    "rel" : "self",
    "href" : "http://localhost:8080/requests?page=0&size=10&sort=id,asc"
  }, {
    "rel" : "next",
    "href" : "http://localhost:8080/requests?page=1&size=10&sort=id,asc"
  }, {
    "rel" : "last",
    "href" : "http://localhost:8080/requests?page=99&size=10&sort=id,asc"
  } ]
}
```
