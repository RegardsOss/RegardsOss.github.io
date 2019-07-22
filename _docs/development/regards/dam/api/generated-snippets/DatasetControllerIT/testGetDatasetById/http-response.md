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
  "content" : {
    "type" : "DATASET",
    "metadata" : {
      "dataObjectsGroups" : { }
    },
    "id" : 17,
    "ipId" : "URN:AIP:DATASET:PROJECT:c664cc23-8626-4c58-9d6d-c3235856276c:V1",
    "creationDate" : "2019-07-19T17:14:54.125Z",
    "model" : {
      "id" : 14,
      "name" : "modelName1",
      "description" : "model desc",
      "type" : "DATASET"
    },
    "tags" : [ "URN:AIP:DATASET:PROJECT:2c8e63f3-c340-48d6-aedc-6a3687b0d1ac:V1" ],
    "groups" : [ ],
    "feature" : {
      "licence" : "licence",
      "providerId" : "ProviderId1",
      "entityType" : "DATASET",
      "label" : "label",
      "model" : "modelName1",
      "files" : { },
      "tags" : [ "URN:AIP:DATASET:PROJECT:2c8e63f3-c340-48d6-aedc-6a3687b0d1ac:V1" ],
      "id" : "URN:AIP:DATASET:PROJECT:c664cc23-8626-4c58-9d6d-c3235856276c:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets/17"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/datasets"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/datasets/17"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/datasets/17"
  } ]
}
        ```
