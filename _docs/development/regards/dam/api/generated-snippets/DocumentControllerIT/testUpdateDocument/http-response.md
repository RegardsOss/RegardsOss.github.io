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
    "id" : 11,
    "ipId" : "URN:AIP:DOCUMENT:PROJECT:702f3d2a-0c32-4702-922e-a07941c3da83:V1",
    "creationDate" : "2019-07-19T17:14:31.275Z",
    "lastUpdate" : "2019-07-19T17:14:31.487Z",
    "model" : {
      "id" : 5,
      "name" : "documentModelName2",
      "description" : "model desc",
      "type" : "DOCUMENT"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "ProviderId2new",
      "entityType" : "DOCUMENT",
      "label" : "document1clone",
      "model" : "documentModelName2",
      "files" : { },
      "tags" : [ ],
      "id" : "URN:AIP:DOCUMENT:PROJECT:702f3d2a-0c32-4702-922e-a07941c3da83:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/documents/11"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/documents"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/documents/11"
  } ]
}
        ```
