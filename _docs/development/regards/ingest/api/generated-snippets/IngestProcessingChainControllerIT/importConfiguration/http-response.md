* **Code:** 206 Partial Content

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/json;charset=UTF-8`

  **Content:**

```json

[ {
  "moduleInformation" : {
    "id" : "ingest",
    "name" : "SIP management module",
    "description" : "SIP submission and management",
    "version" : "2.0.0-SNAPSHOT",
    "author" : "CSSI",
    "legalOwner" : "CNES",
    "documentation" : "https://github.com/RegardsOss"
  },
  "importErrors" : [ "Ingest processing chain already exists with same name, skipping import of DefaultProcessingChain." ],
  "onlyErrors" : false
} ]
```
