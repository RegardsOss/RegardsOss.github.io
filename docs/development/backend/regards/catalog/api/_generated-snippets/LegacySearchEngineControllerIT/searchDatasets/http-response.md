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
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "licence" : "",
      "virtualId" : "URN:AIP:DATASET:legacy:757940fb-2af2-4075-b81c-c7ca0b5989c5:LAST",
      "providerId" : "Solar system",
      "entityType" : "DATASET",
      "label" : "Solar system",
      "model" : "DATASET_ENGINE",
      "files" : { },
      "tags" : [ "REGARDS", "CS-SI", "CNES" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATASET:legacy:757940fb-2af2-4075-b81c-c7ca0b5989c5:V1",
      "properties" : {
        "startSystem" : "Solar system"
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:757940fb-2af2-4075-b81c-c7ca0b5989c5:V1"
    }, {
      "rel" : "dataobjects",
      "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:757940fb-2af2-4075-b81c-c7ca0b5989c5:V1/dataobjects/search"
    } ]
  }, {
    "content" : {
      "licence" : "",
      "virtualId" : "URN:AIP:DATASET:legacy:4a70dd65-a34a-4fce-b602-16fcec9b5961:LAST",
      "providerId" : "Kepler 90 planetary system",
      "entityType" : "DATASET",
      "label" : "Kepler 90 planetary system",
      "model" : "DATASET_ENGINE",
      "files" : { },
      "tags" : [ "REGARDS", "CS-SI", "CNES" ],
      "last" : false,
      "version" : 1,
      "id" : "URN:AIP:DATASET:legacy:4a70dd65-a34a-4fce-b602-16fcec9b5961:V1",
      "properties" : {
        "startSystem" : "Kepler 90 planetary system"
      },
      "type" : "Feature"
    },
    "links" : [ {
      "rel" : "self",
      "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:4a70dd65-a34a-4fce-b602-16fcec9b5961:V1"
    }, {
      "rel" : "dataobjects",
      "href" : "http://localhost:8080/engines/legacy/datasets/URN:AIP:DATASET:legacy:4a70dd65-a34a-4fce-b602-16fcec9b5961:V1/dataobjects/search"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/engines/legacy/datasets/search?page=0&size=20"
  } ]
}
```
