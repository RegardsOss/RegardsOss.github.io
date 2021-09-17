### Response

* **Code:** 206 Partial Content

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
    
[ {
  "moduleInformation" : {
    "id" : "testModule",
    "name" : "testModule",
    "description" : "Test module",
    "version" : "Test",
    "author" : "Author",
    "legalOwner" : "CSSI",
    "documentation" : "http://test.com"
  },
  "importErrors" : [ "Fail for Configuration 4", "Fail for Configuration 3", "Fail for Configuration 0", "Fail for Configuration 2", "Fail for Configuration 1" ],
  "onlyErrors" : false
} ]
```
