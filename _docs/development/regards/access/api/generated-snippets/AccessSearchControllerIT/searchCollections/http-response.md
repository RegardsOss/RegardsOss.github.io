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
    "size" : 1,
    "totalElements" : 1,
    "totalPages" : 1,
    "number" : 0
  },
  "content" : [ {
    "content" : {
      "ipId" : {
        "oaisIdentifier" : "AIP",
        "entityType" : "COLLECTION",
        "tenant" : "PROJECT",
        "entityId" : "daf8b9e9-2d5a-4b78-85a0-60aca6821ca3",
        "version" : 1
      },
      "model" : {
        "name" : "colelctiontModel",
        "type" : "COLLECTION"
      },
      "tags" : [ "URN:AIP:DATASET:PROJECT:1f3f019f-3da0-4fd4-9de7-8c05c632117b:V1" ],
      "groups" : [ ],
      "wgs84" : {
        "type" : "UNLOCATED"
      },
      "feature" : {
        "providerId" : "COL1",
        "entityType" : "COLLECTION",
        "label" : "collection",
        "model" : "colelctiontModel",
        "files" : { },
        "tags" : [ "URN:AIP:DATASET:PROJECT:1f3f019f-3da0-4fd4-9de7-8c05c632117b:V1" ],
        "id" : {
          "oaisIdentifier" : "AIP",
          "entityType" : "COLLECTION",
          "tenant" : "PROJECT",
          "entityId" : "daf8b9e9-2d5a-4b78-85a0-60aca6821ca3",
          "version" : 1
        },
        "geometry" : {
          "type" : "UNLOCATED"
        },
        "normalizedGeometry" : {
          "type" : "UNLOCATED"
        },
        "properties" : [ ],
        "type" : "FEATURE"
      },
      "services" : [ {
        "content" : {
          "configId" : 2,
          "label" : "conf1",
          "applicationModes" : [ "MANY", "ONE" ],
          "entityTypes" : [ "DATA" ],
          "type" : "CATALOG"
        },
        "links" : [ ]
      } ]
    },
    "links" : [ ]
  } ],
  "links" : [ ]
}
        ```
