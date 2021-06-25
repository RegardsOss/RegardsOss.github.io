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
    "type" : "COLLECTION",
    "id" : 1,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:d4e9289d-459c-4fb0-8240-8aa97d210305:V1",
    "creationDate" : "2020-05-11T11:38:58.341Z",
    "lastUpdate" : "2020-05-11T11:38:58.939Z",
    "model" : {
      "id" : 1,
      "name" : "MODEL",
      "description" : "Empty model for testing",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "providerId" : "COL1",
      "entityType" : "COLLECTION",
      "label" : "Collection label",
      "model" : "MODEL",
      "files" : {
        "DESCRIPTION" : [ {
          "dataType" : "DESCRIPTION",
          "reference" : true,
          "uri" : "https://tools.ietf.org/html/rfc7946",
          "mimeType" : "text/html;charset=UTF-8",
          "online" : true,
          "checksum" : "7a24604603987e930102902ad28fb1b8",
          "digestAlgorithm" : "MD5",
          "filename" : "rfc7946",
          "types" : [ ]
        } ]
      },
      "tags" : [ ],
      "id" : "URN:AIP:COLLECTION:PROJECT:d4e9289d-459c-4fb0-8240-8aa97d210305:V1",
      "properties" : { },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
