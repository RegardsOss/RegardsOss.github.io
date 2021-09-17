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
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "id" : 1,
      "label" : "REGARDS search protocol",
      "configuration" : {
        "id" : 1,
        "pluginId" : "legacy",
        "label" : "search-engine-legacy",
        "businessId" : "search-engine-legacy",
        "version" : "1.0.0",
        "priorityOrder" : 0,
        "active" : true,
        "parameters" : [ ]
      }
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/enginesconfig/1"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/enginesconfig/1"
    }, {
      "rel" : "search",
      "href" : "http://localhost:8080/engines/legacy/entities/search"
    }, {
      "rel" : "search-objects",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/search"
    }, {
      "rel" : "search-datasets",
      "href" : "http://localhost:8080/engines/legacy/datasets/search"
    }, {
      "rel" : "search-collections",
      "href" : "http://localhost:8080/engines/legacy/collections/search"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/enginesconfig?page=0&size=10&sort=id,asc"
  } ]
}
```
