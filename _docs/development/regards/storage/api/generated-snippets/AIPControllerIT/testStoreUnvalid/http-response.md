#### Request

* **Code:** 422 Unprocessable Entity

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
  "aipId" : "URN:AIP:DATA:PROJECT:ba1692a8-f9ae-440b-85de-2fba30be8a47:V1",
  "rejectionCauses" : [ "Property properties.contentInformations[0].dataObject.checksum is invalid: Data file checksum is required." ]
} ]
        ```
