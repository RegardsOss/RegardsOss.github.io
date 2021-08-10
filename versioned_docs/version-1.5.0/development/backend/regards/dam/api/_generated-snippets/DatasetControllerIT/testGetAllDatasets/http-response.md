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
      "ipId" : "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1",
      "creationDate" : "2020-05-11T11:37:36.194Z",
      "model" : {
        "id" : 12,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1" ],
      "groups" : [ ],
      "feature" : {
        "licence" : "licence",
        "providerId" : "ProviderId1",
        "entityType" : "DATASET",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1" ],
        "id" : "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1",
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
      "ipId" : "URN:AIP:DATASET:PROJECT:4eef0b59-a497-4ab5-a4a6-73cb60613ec0:V1",
      "creationDate" : "2020-05-11T11:37:36.194Z",
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
        "id" : "URN:AIP:DATASET:PROJECT:4eef0b59-a497-4ab5-a4a6-73cb60613ec0:V1",
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
      "ipId" : "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1",
      "creationDate" : "2020-05-11T11:37:36.194Z",
      "model" : {
        "id" : 12,
        "name" : "modelName1",
        "description" : "model desc",
        "type" : "DATASET"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1" ],
      "groups" : [ ],
      "feature" : {
        "licence" : "licence",
        "providerId" : "ProviderId4",
        "entityType" : "DATASET",
        "label" : "label",
        "model" : "modelName1",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:94d44806-c9fe-4e9f-a965-454b68a20cd1:V1" ],
        "id" : "URN:AIP:DATASET:PROJECT:8554dd8d-e0fb-4825-89ff-a4f0a647a0a6:V1",
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
