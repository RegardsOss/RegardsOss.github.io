#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `X-Frame-Options:DENY`
        `Expires:0`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Content-Disposition:attachment; filename="config-Test application.json"`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
{
  "microservice" : "Test application",
  "modules" : [ {
    "module" : {
      "id" : "acquisition",
      "name" : "Acquisition module",
      "description" : "Data driven SIP creation",
      "version" : "0.4.1",
      "author" : "CSSI",
      "legalOwner" : "CNES",
      "documentation" : "https://github.com/RegardsOss"
    },
    "configuration" : [ ]
  } ]
}
```
