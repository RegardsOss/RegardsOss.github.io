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
  "content" : {
    "pluginClassName" : "fr.cnes.regards.framework.modules.plugins.rest.FakePlugin",
    "interfaceNames" : [ "fr.cnes.regards.framework.modules.plugins.rest.ISamplePlugin" ],
    "author" : "REGARDS Team",
    "pluginId" : "aFakePlugin",
    "version" : "12345-6789-11",
    "description" : "Sample plugin test",
    "markdown" : "",
    "url" : "https://github.com/RegardsOss",
    "contact" : "regards@c-s.fr",
    "owner" : "CSSI",
    "license" : "GPLv3",
    "parameters" : [ {
      "name" : "suffix",
      "label" : "SUFFIXE",
      "description" : "string parameter",
      "type" : "STRING",
      "defaultValue" : "Hello",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "coef",
      "label" : "COEFF",
      "description" : "int parameter",
      "type" : "INTEGER",
      "defaultValue" : "-333",
      "optional" : true,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "isActive",
      "label" : "ACTIVE",
      "description" : "boolean parameter",
      "type" : "BOOLEAN",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    } ]
  },
  "links" : [ ]
}
```
