#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

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
      "creationDate" : "2020-05-13T12:25:40.647Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 2,
      "creationDate" : "2020-05-13T12:25:40.793Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 3,
      "creationDate" : "2020-05-13T12:25:40.862Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 4,
      "creationDate" : "2020-05-13T12:25:40.932Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 5,
      "creationDate" : "2020-05-13T12:25:41.002Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 6,
      "creationDate" : "2020-05-13T12:25:41.072Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 7,
      "creationDate" : "2020-05-13T12:25:41.142Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 8,
      "creationDate" : "2020-05-13T12:25:41.21Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 9,
      "creationDate" : "2020-05-13T12:25:41.279Z",
      "dtype" : "AIP_UPDATES_CREATOR",
      "state" : "TO_SCHEDULE"
    },
    "links" : [ ]
  }, {
    "content" : {
      "id" : 10,
      "creationDate" : "2020-05-13T12:25:41.35Z",
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
