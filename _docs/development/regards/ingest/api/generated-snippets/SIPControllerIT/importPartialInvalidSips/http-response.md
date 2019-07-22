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
  "id" : "providerId31",
  "sipId" : "URN:SIP:DATA:PROJECT:48c45ca7-0b58-3763-96d6-26d83b2eedf4:V1",
  "version" : 1,
  "state" : "CREATED"
}, {
  "id" : "providerId32",
  "sipId" : "URN:SIP:DATA:PROJECT:d6d1777c-e8d2-365c-a95a-c4da1c7d73d4:V1",
  "version" : 1,
  "state" : "REJECTED",
  "rejectionCauses" : [ "{Validation annotation @fr.cnes.regards.framework.file.utils.validation.HandledMessageDigestAlgorithm validating PLOUF: it is not an handled algorithm for checksum computation at properties.contentInformations[0].dataObject.algorithm: rejected value [null].", "A representation information is required in content information at properties.contentInformations[0].representationInformation: rejected value [null].", "Information package type is required at ipType: rejected value [null]." ]
} ]
```
