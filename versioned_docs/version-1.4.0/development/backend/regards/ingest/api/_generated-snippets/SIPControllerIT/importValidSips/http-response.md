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
  "granted" : {
    "JA2_VPF_AXVCNE20081204_095500_20081204_215527_20081205_002323" : "87137c8f-04ec-4cc2-b7be-8ac3e8bee619"
  },
  "denied" : { },
  "messages" : [ "SIP Collection ingestion scheduled" ],
  "sessionOwner" : "sampleSessionOwner",
  "session" : "sampleSession"
}
```
