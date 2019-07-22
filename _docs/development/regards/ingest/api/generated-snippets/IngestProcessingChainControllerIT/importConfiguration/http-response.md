#### Request

* **Code:** 206 Partial Content

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
    
[ {
  "moduleInformation" : {
    "id" : "ingest",
    "name" : "SIP management module",
    "description" : "SIP submission and management",
    "version" : "0.4.1",
    "author" : "CSSI",
    "legalOwner" : "CNES",
    "documentation" : "https://github.com/RegardsOss"
  },
  "importErrors" : [ "Ingest processing chain already exists with same name, skipping import of DefaultProcessingChain." ],
  "onlyErrors" : false
} ]
        ```
