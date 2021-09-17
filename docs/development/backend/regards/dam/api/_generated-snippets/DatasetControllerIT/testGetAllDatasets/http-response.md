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
    "totalElements" : 3,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "type" : "DATASET",
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "id" : 14,
      "ipId" : "URN:AIP:DATASET:PROJECT:ac071948-5ba3-42b3-bf90-6a0951020e77:V1",
      "creationDate" : "2021-09-16T19:08:33.105Z",
      "model" : {
        "id" : 12,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:9ab958c7-2a3b-4602-a03d-f7a7f9e99513:V1" ],
      "groups" : [ ],
      "feature" : {
        "licence" : "licence",
        "providerId" : "ProviderId1",
        "entityType" : "DATASET",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:9ab958c7-2a3b-4602-a03d-f7a7f9e99513:V1" ],
        "last" : false,
        "version" : 1,
        "id" : "URN:AIP:DATASET:PROJECT:ac071948-5ba3-42b3-bf90-6a0951020e77:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/datasets"
    } ]
  }, {
    "content" : {
      "type" : "DATASET",
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "id" : 15,
      "ipId" : "URN:AIP:DATASET:PROJECT:4c7cf040-1961-4f7b-9486-a29a4bd1cd91:V1",
      "creationDate" : "2021-09-16T19:08:33.105Z",
      "model" : {
        "id" : 12,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "DATASET"
      },
      "tags" : [ ],
      "groups" : [ ],
      "feature" : {
        "licence" : "licence",
        "providerId" : "ProviderId3",
        "entityType" : "DATASET",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ ],
        "last" : false,
        "version" : 1,
        "id" : "URN:AIP:DATASET:PROJECT:4c7cf040-1961-4f7b-9486-a29a4bd1cd91:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/datasets"
    } ]
  }, {
    "content" : {
      "type" : "DATASET",
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "id" : 16,
      "ipId" : "URN:AIP:DATASET:PROJECT:9ab958c7-2a3b-4602-a03d-f7a7f9e99513:V1",
      "creationDate" : "2021-09-16T19:08:33.105Z",
      "model" : {
        "id" : 12,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:ac071948-5ba3-42b3-bf90-6a0951020e77:V1" ],
      "groups" : [ ],
      "feature" : {
        "licence" : "licence",
        "providerId" : "ProviderId4",
        "entityType" : "DATASET",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:ac071948-5ba3-42b3-bf90-6a0951020e77:V1" ],
        "last" : false,
        "version" : 1,
        "id" : "URN:AIP:DATASET:PROJECT:9ab958c7-2a3b-4602-a03d-f7a7f9e99513:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/datasets"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets?page=0&size=10&sort=id,asc"
  } ]
}
```
