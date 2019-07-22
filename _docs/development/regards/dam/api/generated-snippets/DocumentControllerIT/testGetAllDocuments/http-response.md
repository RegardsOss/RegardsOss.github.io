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
      "type" : "DOCUMENT",
      "id" : 3,
      "ipId" : "URN:AIP:DOCUMENT:PROJECT:646823c0-5e04-4072-89e3-e9c0cb10af97:V1",
      "creationDate" : "2019-07-19T17:14:30.399Z",
      "model" : {
        "id" : 1,
        "name" : "documentModelName2",
        "description" : "model desc",
        "type" : "DOCUMENT"
      },
      "tags" : [ ],
      "groups" : [ ],
      "feature" : {
        "providerId" : "ProviderId2",
        "entityType" : "DOCUMENT",
        "label" : "label",
        "model" : "documentModelName2",
        "files" : { },
        "tags" : [ ],
        "id" : "URN:AIP:DOCUMENT:PROJECT:646823c0-5e04-4072-89e3-e9c0cb10af97:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/documents"
    } ]
  }, {
    "content" : {
      "type" : "DOCUMENT",
      "id" : 4,
      "ipId" : "URN:AIP:DOCUMENT:PROJECT:6222400a-6022-4685-8dcd-b04d29bf354c:V1",
      "creationDate" : "2019-07-19T17:14:30.399Z",
      "model" : {
        "id" : 1,
        "name" : "documentModelName2",
        "description" : "model desc",
        "type" : "DOCUMENT"
      },
      "tags" : [ "URN:AIP:COLLECTION:PROJECT:910ebff4-acbc-4607-9bc4-7d2d9bfd750e:V1" ],
      "groups" : [ ],
      "feature" : {
        "providerId" : "ProviderId3",
        "entityType" : "DOCUMENT",
        "label" : "label",
        "model" : "documentModelName2",
        "files" : { },
        "tags" : [ "URN:AIP:COLLECTION:PROJECT:910ebff4-acbc-4607-9bc4-7d2d9bfd750e:V1" ],
        "id" : "URN:AIP:DOCUMENT:PROJECT:6222400a-6022-4685-8dcd-b04d29bf354c:V1",
        "properties" : { },
        "type" : "Feature"
      }
    },
    "links" : [ {
      "rel" : "list",
      "href" : "http://localhost:8080/documents"
    } ]
  } ],
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/documents?page=0&size=10&sort=id,asc"
  } ]
}
        ```
