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
  "init" : {
    "category" : "Planets",
    "type" : "Planet",
    "name" : "Earth",
    "coordinateSystem" : {
      "geoideName" : "CRS:84"
    },
    "nameResolver" : {
      "zoomFov" : 2,
      "jsObject" : "gw/NameResolver/DictionaryNameResolver",
      "baseUrl" : "data/earth_resolver.json"
    },
    "visible" : false
  },
  "layers" : [ {
    "category" : "Catalog",
    "type" : "OpenSearch",
    "baseUrl" : "http://localhost:8080/api/v1/rs-catalog/engines/opensearch/datasets/URN:A:B:C:D:E:F/dataobjects/search/opensearchDescription.xml?token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkZWZhdWx0X3VzZXJAcmVnYXJkcy5mciIsInJvbGUiOiJST0xFX0RFRkFVTFQiLCJleHAiOjE1NjM3ODc3MDIsInRlbmFudCI6IlBST0pFQ1QiLCJlbWFpbCI6ImRlZmF1bHRfdXNlckByZWdhcmRzLmZyIn0.32EcMpRzAq9stLa8noC4F_ic7YpND3pQyuLHpWL5LqNbNTxjz7qDa--f2GCh-POPfpnFxMigX7-JcZ2ItWV31Q",
    "visible" : false
  }, {
    "category" : "Other",
    "type" : "TileWireframe",
    "name" : "Coordinates Grid",
    "outline" : true,
    "visible" : true
  } ]
}
```
