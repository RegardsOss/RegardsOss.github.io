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
  "facets" : [ ],
  "metadata" : {
    "size" : 20,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "sessionOwner" : null,
      "session" : null,
      "virtualId" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001108449747:LAST",
      "providerId" : "Jupiter",
      "entityType" : "DATA",
      "label" : "Jupiter",
      "model" : "planet",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:legacy:69a40bab-cc2f-4ada-8902-eda27d098c4b:V1" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATA:legacy:00000000-0000-0000-0000-001108449747:V1",
      "geometry" : null,
      "normalizedGeometry" : null,
      "properties" : {
        "planet_type" : "Gas giant",
        "diameter" : 143000,
        "TimePeriod" : {
          "stopDate" : "2024-09-16T18:41:50.747Z",
          "startDate" : "2021-09-16T18:41:50.746Z"
        },
        "planet" : "Jupiter",
        "origine" : {
          "name" : "CNES",
          "link" : "http://cnes.fr",
          "contacts" : [ {
            "name" : "JeanPaul",
            "locations" : [ {
              "institut" : "CNES-001",
              "code" : 1
            } ]
          }, {
            "name" : "Bernadette",
            "locations" : [ {
              "institut" : "CNES-156",
              "code" : 156
            } ]
          } ]
        },
        "sun_distance" : 778000000,
        "params" : [ "alpha", "beta", "gamma" ]
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/dataobjects/URN:AIP:DATA:legacy:00000000-0000-0000-0000-001108449747:V1"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/engines/legacy/dataobjects/search?q=alpha&page=0&size=20"
  } ]
}
```
