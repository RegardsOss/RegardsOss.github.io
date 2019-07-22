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
    "totalElements" : 2,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "type" : "COLLECTION",
      "id" : 3,
      "ipId" : "URN:AIP:COLLECTION:PROJECT:399af39a-4780-4589-bb35-1ee9d53d9f78:V1",
      "creationDate" : "2019-07-19T17:14:38.807Z",
      "model" : {
        "id" : 2,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "COLLECTION"
      },
      "tags" : [ "URN:AIP:COLLECTION:PROJECT:ed22e358-d537-4161-89e3-0c2a064ad650:V1" ],
      "groups" : [ ],
      "feature" : {
        "providerId" : "ProviderId1",
        "entityType" : "COLLECTION",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ "URN:AIP:COLLECTION:PROJECT:ed22e358-d537-4161-89e3-0c2a064ad650:V1" ],
        "id" : "URN:AIP:COLLECTION:PROJECT:399af39a-4780-4589-bb35-1ee9d53d9f78:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/collections"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/collections/3"
    } ]
  }, {
    "content" : {
      "type" : "COLLECTION",
      "id" : 4,
      "ipId" : "URN:AIP:COLLECTION:PROJECT:05d9279f-e3ff-40cb-8484-b5c7b2c67be6:V1",
      "creationDate" : "2019-07-19T17:14:38.807Z",
      "model" : {
        "id" : 2,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "COLLECTION"
      },
      "tags" : [ ],
      "groups" : [ ],
      "feature" : {
        "providerId" : "ProviderId3",
        "entityType" : "COLLECTION",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ ],
        "id" : "URN:AIP:COLLECTION:PROJECT:05d9279f-e3ff-40cb-8484-b5c7b2c67be6:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/collections"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/collections/4"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/collections?page=0&size=10&sort=id,asc"
  } ]
}
```
