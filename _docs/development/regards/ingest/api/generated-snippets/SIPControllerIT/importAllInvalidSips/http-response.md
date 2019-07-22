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
  "id" : "providerId41",
  "sipId" : "URN:SIP:DATA:PROJECT:0aa28452-06fe-32f1-8cea-7ba2a1400099:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "Data file checksum is required at properties.contentInformations[0].dataObject.checksum: rejected value [null].", "A representation information is required in content information at properties.contentInformations[0].representationInformation: rejected value [null]." ]
}, {
  "id" : "providerId42",
  "sipId" : "URN:SIP:DATA:PROJECT:a7768256-478a-3fa5-889e-e14cd48f04f1:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "A representation information is required in content information at properties.contentInformations[0].representationInformation: rejected value [null].", "Information package type is required at ipType: rejected value [null].", "{Validation annotation @fr.cnes.regards.framework.file.utils.validation.HandledMessageDigestAlgorithm validating FAKE: it is not an handled algorithm for checksum computation at properties.contentInformations[0].dataObject.algorithm: rejected value [null]." ]
} ]
```
