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
    "type" : "DOCUMENT",
    "id" : 7,
    "ipId" : "URN:AIP:DOCUMENT:PROJECT:318818e4-9eb7-4f1c-87ef-b5ed05a5988f:V1",
    "creationDate" : "2019-07-19T17:14:30.894Z",
    "model" : {
      "id" : 3,
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
      "id" : "URN:AIP:DOCUMENT:PROJECT:318818e4-9eb7-4f1c-87ef-b5ed05a5988f:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/documents/7"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/documents"
  } ]
}
```
