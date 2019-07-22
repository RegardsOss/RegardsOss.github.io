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
      "ipId" : "URN:AIP:DATASET:PROJECT:7f4c0ba3-c972-4a93-8dee-3a8a99af6e4b:V1",
      "creationDate" : "2019-07-19T17:14:54.065Z",
      "model" : {
        "id" : 12,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:d067f730-1cc0-4271-8e04-8e8ca0cac59f:V1" ],
      "groups" : [ ],
      "feature" : {
        "licence" : "licence",
        "providerId" : "ProviderId1",
        "entityType" : "DATASET",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:d067f730-1cc0-4271-8e04-8e8ca0cac59f:V1" ],
        "id" : "URN:AIP:DATASET:PROJECT:7f4c0ba3-c972-4a93-8dee-3a8a99af6e4b:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/datasets"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/datasets/14"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/datasets/14"
    } ]
  }, {
    "content" : {
      "type" : "DATASET",
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "id" : 15,
      "ipId" : "URN:AIP:DATASET:PROJECT:3fdac1e9-0357-402f-b853-6d7755aad717:V1",
      "creationDate" : "2019-07-19T17:14:54.065Z",
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
        "id" : "URN:AIP:DATASET:PROJECT:3fdac1e9-0357-402f-b853-6d7755aad717:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/datasets"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/datasets/15"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/datasets/15"
    } ]
  }, {
    "content" : {
      "type" : "DATASET",
      "metadata" : {
        "dataObjectsGroups" : { }
      },
      "id" : 16,
      "ipId" : "URN:AIP:DATASET:PROJECT:d067f730-1cc0-4271-8e04-8e8ca0cac59f:V1",
      "creationDate" : "2019-07-19T17:14:54.066Z",
      "model" : {
        "id" : 12,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:7f4c0ba3-c972-4a93-8dee-3a8a99af6e4b:V1" ],
      "groups" : [ ],
      "feature" : {
        "licence" : "licence",
        "providerId" : "ProviderId4",
        "entityType" : "DATASET",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:7f4c0ba3-c972-4a93-8dee-3a8a99af6e4b:V1" ],
        "id" : "URN:AIP:DATASET:PROJECT:d067f730-1cc0-4271-8e04-8e8ca0cac59f:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/datasets"
    }, {
      "rel" : "delete",
      "href" : "http://localhost:8080/datasets/16"
    }, {
      "rel" : "update",
      "href" : "http://localhost:8080/datasets/16"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/datasets?page=0&size=10&sort=id,asc"
  } ]
}
        ```
