### Response

* **Code:** 200 OK

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
  "granted" : { },
  "denied" : {
    "providerId41" : "Checksum is required at properties.contentInformations[0].dataObject.checksum: rejected value [null].",
    "providerId42" : "{Validation annotation @fr.cnes.regards.framework.file.utils.validation.HandledMessageDigestAlgorithm validating FAKE: it is not an handled algorithm for checksum computation at properties.contentInformations[0].dataObject.algorithm: rejected value [null]., Information package type is required at ipType: rejected value [null]., A representation information is required in content information at properties.contentInformations[0].representationInformation: rejected value [null]."
  },
  "messages" : [ "SIP Collection ingestion scheduled" ],
  "sessionOwner" : "sampleSessionOwner",
  "session" : "sampleSession"
}
```
