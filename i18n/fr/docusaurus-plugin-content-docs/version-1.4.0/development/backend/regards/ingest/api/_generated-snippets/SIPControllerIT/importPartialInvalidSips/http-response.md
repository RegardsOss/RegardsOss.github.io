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
    "providerId31" : "a653e922-cb45-471a-890d-ab7fdaaf0b30"
  },
  "denied" : {
    "providerId32" : "{Validation annotation @fr.cnes.regards.framework.file.utils.validation.HandledMessageDigestAlgorithm validating PLOUF: it is not an handled algorithm for checksum computation at properties.contentInformations[0].dataObject.algorithm: rejected value [null]., Information package type is required at ipType: rejected value [null]., A representation information is required in content information at properties.contentInformations[0].representationInformation: rejected value [null]."
  },
  "messages" : [ "SIP Collection ingestion scheduled" ],
  "sessionOwner" : "sampleSessionOwner",
  "session" : "sampleSession"
}
```
