* **Code:** 200 OK

  **Headers:**

  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`
  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test:-1`
  `Content-Type: application/json;charset=UTF-8`

  **Content:**

```json

[ {
  "content" : {
    "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",
    "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],
    "author" : "REGARDS Team",
    "pluginId" : "aSamplePlugin",
    "version" : "12345-6789-11",
    "description" : "Sample plugin test",
    "markdown" : "",
    "url" : "https://github.com/RegardsOss",
    "contact" : "regards@c-s.fr",
    "owner" : "CSSI",
    "licence" : "LGPLv3.0",
    "parameters" : [ {
      "name" : "suffix",
      "label" : "SUFFIXE",
      "description" : "string parameter",
      "markdown" : "",
      "type" : "java.lang.String",
      "paramType" : "PRIMITIVE",
      "defaultValue" : "Hello",
      "optional" : false,
      "parameters" : [ ],
      "unconfigurable" : false
    }, {
      "name" : "coef",
      "label" : "COEFF",
      "description" : "int parameter",
      "markdown" : "",
      "type" : "java.lang.Integer",
      "paramType" : "PRIMITIVE",
      "defaultValue" : "-333",
      "optional" : true,
      "parameters" : [ ],
      "unconfigurable" : false
    }, {
      "name" : "isActive",
      "label" : "ACTIVE",
      "description" : "boolean parameter",
      "markdown" : "",
      "type" : "java.lang.Boolean",
      "paramType" : "PRIMITIVE",
      "optional" : false,
      "parameters" : [ ],
      "unconfigurable" : false
    } ]
  },
  "links" : [ ]
}, {
  "content" : {
    "pluginClassName" : "fr.cnes.regards.framework.plugins.FakePlugin",
    "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],
    "author" : "REGARDS Team",
    "pluginId" : "aFakePlugin",
    "version" : "12345-6789-11",
    "description" : "Sample plugin test",
    "markdown" : "",
    "url" : "https://github.com/RegardsOss",
    "contact" : "regards@c-s.fr",
    "owner" : "CSSI",
    "licence" : "LGPLv3.0",
    "parameters" : [ {
      "name" : "suffix",
      "label" : "SUFFIXE",
      "description" : "string parameter",
      "markdown" : "",
      "type" : "java.lang.String",
      "paramType" : "PRIMITIVE",
      "defaultValue" : "Hello",
      "optional" : false,
      "parameters" : [ ],
      "unconfigurable" : false
    }, {
      "name" : "coef",
      "label" : "COEFF",
      "description" : "int parameter",
      "markdown" : "",
      "type" : "java.lang.Integer",
      "paramType" : "PRIMITIVE",
      "defaultValue" : "-333",
      "optional" : true,
      "parameters" : [ ],
      "unconfigurable" : false
    }, {
      "name" : "isActive",
      "label" : "ACTIVE",
      "description" : "boolean parameter",
      "markdown" : "",
      "type" : "java.lang.Boolean",
      "paramType" : "PRIMITIVE",
      "optional" : false,
      "parameters" : [ ],
      "unconfigurable" : false
    } ]
  },
  "links" : [ ]
} ]
```
