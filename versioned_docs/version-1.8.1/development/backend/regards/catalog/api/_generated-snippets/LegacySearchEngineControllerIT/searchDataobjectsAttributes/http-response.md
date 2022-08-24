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
    
[ {
  "content" : {
    "id" : 63,
    "name" : "startDate",
    "description" : "Date et temps début",
    "type" : "DATE_ISO8601",
    "unit" : "unitless",
    "fragment" : {
      "id" : 10,
      "name" : "TimePeriod",
      "description" : "Période temporelle (date début - date fin) au format YYYY-MM-DDThh:mm:ss",
      "version" : "1",
      "virtual" : false
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Date et temps début",
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.TimePeriod.startDate",
    "virtual" : false
  },
  "links" : [ ]
}, {
  "content" : {
    "id" : 64,
    "name" : "stopDate",
    "description" : "Date et temps fin",
    "type" : "DATE_ISO8601",
    "unit" : "unitless",
    "fragment" : {
      "id" : 10,
      "name" : "TimePeriod",
      "description" : "Période temporelle (date début - date fin) au format YYYY-MM-DDThh:mm:ss",
      "version" : "1",
      "virtual" : false
    },
    "alterable" : true,
    "optional" : false,
    "label" : "Date et temps fin",
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.TimePeriod.stopDate",
    "virtual" : false
  },
  "links" : [ ]
} ]
```
