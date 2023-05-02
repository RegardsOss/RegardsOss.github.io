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
  "id" : 97,
  "name" : "planet_type",
  "type" : "STRING",
  "unit" : "unitless",
  "fragment" : {
    "id" : 15,
    "name" : "default",
    "description" : "Default fragment",
    "virtual" : false
  },
  "alterable" : true,
  "optional" : false,
  "label" : "Planet type",
  "restriction" : {
    "acceptableValues" : [ "Telluric", "Ice giant", "Gas giant" ],
    "id" : 15,
    "type" : "ENUMERATION"
  },
  "dynamic" : true,
  "internal" : false,
  "jsonPath" : "properties.planet_type",
  "virtual" : false
}, {
  "id" : 100,
  "name" : "params",
  "description" : "List of planet parameters",
  "type" : "STRING_ARRAY",
  "unit" : "unitless",
  "fragment" : {
    "id" : 15,
    "name" : "default",
    "description" : "Default fragment",
    "virtual" : false
  },
  "alterable" : true,
  "optional" : true,
  "label" : "Parameters",
  "dynamic" : true,
  "internal" : false,
  "jsonPath" : "properties.params",
  "virtual" : false
}, {
  "id" : 99,
  "name" : "sun_distance",
  "type" : "LONG",
  "unit" : "km",
  "fragment" : {
    "id" : 15,
    "name" : "default",
    "description" : "Default fragment",
    "virtual" : false
  },
  "alterable" : true,
  "optional" : false,
  "label" : "Sun distance",
  "dynamic" : true,
  "internal" : false,
  "jsonPath" : "properties.sun_distance",
  "virtual" : false
}, {
  "id" : 103,
  "name" : "stopDate",
  "description" : "Date et temps fin",
  "type" : "DATE_ISO8601",
  "unit" : "unitless",
  "fragment" : {
    "id" : 16,
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
}, {
  "id" : 102,
  "name" : "startDate",
  "description" : "Date et temps début",
  "type" : "DATE_ISO8601",
  "unit" : "unitless",
  "fragment" : {
    "id" : 16,
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
}, {
  "id" : 96,
  "name" : "planet",
  "type" : "STRING",
  "unit" : "unitless",
  "fragment" : {
    "id" : 15,
    "name" : "default",
    "description" : "Default fragment",
    "virtual" : false
  },
  "alterable" : true,
  "optional" : false,
  "label" : "Planet name",
  "dynamic" : true,
  "internal" : false,
  "jsonPath" : "properties.planet",
  "virtual" : false
}, {
  "id" : 101,
  "name" : "origine",
  "description" : "informations origine",
  "type" : "JSON",
  "unit" : "unitless",
  "fragment" : {
    "id" : 15,
    "name" : "default",
    "description" : "Default fragment",
    "virtual" : false
  },
  "alterable" : true,
  "optional" : true,
  "label" : "origine",
  "restriction" : {
    "jsonSchema" : "{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\"},\"link\":{\"type\":\"string\",\"format\":\"uri\",\"pattern\":\"^.*//.*\"},\"contacts\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"name\":{\"type\":\"string\"},\"locations\":{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"institut\":{\"type\":\"string\"},\"code\":{\"type\":\"integer\"}}}}}}}}}",
    "id" : 16,
    "type" : "JSON_SCHEMA"
  },
  "dynamic" : true,
  "internal" : false,
  "jsonPath" : "properties.origine",
  "virtual" : false
}, {
  "id" : 98,
  "name" : "diameter",
  "type" : "INTEGER",
  "unit" : "km",
  "fragment" : {
    "id" : 15,
    "name" : "default",
    "description" : "Default fragment",
    "virtual" : false
  },
  "alterable" : true,
  "optional" : false,
  "label" : "Diameter",
  "dynamic" : true,
  "internal" : false,
  "jsonPath" : "properties.diameter",
  "virtual" : false
} ]
```
