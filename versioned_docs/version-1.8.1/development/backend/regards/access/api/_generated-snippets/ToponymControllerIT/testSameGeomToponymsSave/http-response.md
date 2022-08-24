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
    "businessId" : "Toponym_2021-09-16T18:14:21.966",
    "labelEn" : "Toponym_2021-09-16T18:14:21.966",
    "labelFr" : "Toponym_2021-09-16T18:14:21.966",
    "geometry" : {
      "coordinates" : [ [ [ 100.0, 0.0 ], [ 101.0, 0.0 ], [ 101.0, 1.0 ], [ 100.0, 1.0 ], [ 100.0, 0.0 ] ] ],
      "type" : "Polygon",
      "crs" : "WGS 84"
    },
    "visible" : false,
    "toponymMetadata" : {
      "creationDate" : "2021-09-16T18:14:21.966Z",
      "expirationDate" : "2021-10-16T18:14:21.977Z",
      "project" : "test_project",
      "author" : "test_user"
    }
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/toponyms/Toponym_2021-09-16T18:14:21.966"
  }, {
    "rel" : "create",
    "href" : "http://localhost:8080/toponyms"
  } ]
}
```
