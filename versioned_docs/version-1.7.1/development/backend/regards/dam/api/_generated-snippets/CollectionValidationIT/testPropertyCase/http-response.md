### Response

* **Code:** 201 Created

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
  "content" : {
    "type" : "COLLECTION",
    "id" : 102,
    "ipId" : "URN:AIP:COLLECTION:PROJECT:afc9cad3-dc11-4487-a534-e72fef243a0e:V1",
    "creationDate" : "2021-09-16T19:08:47.683Z",
    "model" : {
      "id" : 253,
      "name" : "MISSION_WITH_LABEL",
      "description" : "Sample mission",
      "type" : "COLLECTION"
    },
    "tags" : [ ],
    "groups" : [ ],
    "feature" : {
      "virtualId" : "URN:AIP:COLLECTION:PROJECT:afc9cad3-dc11-4487-a534-e72fef243a0e:LAST",
      "providerId" : "COL1",
      "entityType" : "COLLECTION",
      "label" : "mission",
      "model" : "MISSION_WITH_LABEL",
      "files" : { },
      "tags" : [ ],
      "last" : true,
      "version" : 1,
      "id" : "URN:AIP:COLLECTION:PROJECT:afc9cad3-dc11-4487-a534-e72fef243a0e:V1",
      "properties" : {
        "LABEL" : "uppercaselabel"
      },
      "type" : "Feature"
    }
  },
  "links" : [ ]
}
```
