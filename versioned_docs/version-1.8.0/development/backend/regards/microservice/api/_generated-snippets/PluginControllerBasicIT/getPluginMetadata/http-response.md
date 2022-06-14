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
    "pluginClassName" : "fr.cnes.regards.framework.modules.plugins.rest.ParamTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.framework.modules.plugins.rest.IParamTestPlugin" ],
    "author" : "REGARDS Team",
    "pluginId" : "ParamTestPlugin",
    "version" : "1.0.0",
    "description" : "Plugin for plugin parameter type testing",
    "markdown" : "",
    "url" : "https://regardsoss.github.io/",
    "contact" : "regards@c-s.fr",
    "owner" : "CNES",
    "license" : "GPLv3",
    "parameters" : [ {
      "name" : "pString",
      "label" : "Simple string",
      "description" : "Simple string description",
      "type" : "STRING",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "pByte",
      "label" : "Simple byte",
      "description" : "Simple byte description",
      "type" : "BYTE",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "pShort",
      "label" : "Simple short",
      "description" : "Simple short description",
      "type" : "SHORT",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "pInteger",
      "label" : "Simple integer",
      "description" : "Simple integer description",
      "type" : "INTEGER",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "pLong",
      "label" : "Simple long",
      "description" : "Simple long description",
      "type" : "LONG",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "pFloat",
      "label" : "Simple float",
      "description" : "Simple float description",
      "type" : "FLOAT",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "pDouble",
      "label" : "Simple double",
      "description" : "Simple double description",
      "type" : "DOUBLE",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "pBoolean",
      "label" : "Simple boolean",
      "description" : "Simple boolean description",
      "type" : "BOOLEAN",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "sList",
      "label" : "List of string",
      "description" : "List of string description",
      "parameterizedSubTypes" : [ "STRING" ],
      "type" : "COLLECTION",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "ssMap",
      "keyLabel" : "ssMapKey",
      "label" : "Map string to string",
      "description" : "Map string to string description",
      "parameterizedSubTypes" : [ "STRING", "STRING" ],
      "type" : "MAP",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    }, {
      "name" : "pojo",
      "label" : "Pojo containing string",
      "description" : "",
      "type" : "POJO",
      "optional" : false,
      "sensitive" : false,
      "parameters" : [ {
        "name" : "message",
        "label" : "message",
        "type" : "STRING",
        "optional" : false,
        "sensitive" : false,
        "unconfigurable" : false
      } ],
      "unconfigurable" : false
    }, {
      "name" : "constraints",
      "label" : "Constraint pojo wrapper",
      "description" : "",
      "type" : "POJO",
      "optional" : false,
      "sensitive" : false,
      "parameters" : [ {
        "name" : "constraints",
        "label" : "List of constraints",
        "description" : "",
        "parameterizedSubTypes" : [ "POJO" ],
        "type" : "COLLECTION",
        "optional" : false,
        "sensitive" : false,
        "parameters" : [ {
          "name" : "pattern",
          "label" : "Pattern",
          "description" : "JAVA regular expression",
          "type" : "STRING",
          "optional" : false,
          "sensitive" : false,
          "unconfigurable" : false
        }, {
          "name" : "enabled",
          "label" : "Enabled",
          "description" : "Contraint may be enabled/disabled",
          "type" : "BOOLEAN",
          "defaultValue" : "true",
          "optional" : true,
          "sensitive" : false,
          "unconfigurable" : false
        } ],
        "unconfigurable" : false
      } ],
      "unconfigurable" : false
    }, {
      "name" : "scMap",
      "keyLabel" : "scMapKey",
      "label" : "Constraint map",
      "description" : "",
      "parameterizedSubTypes" : [ "STRING", "POJO" ],
      "type" : "MAP",
      "optional" : false,
      "sensitive" : false,
      "parameters" : [ {
        "name" : "pattern",
        "label" : "Pattern",
        "description" : "JAVA regular expression",
        "type" : "STRING",
        "optional" : false,
        "sensitive" : false,
        "unconfigurable" : false
      }, {
        "name" : "enabled",
        "label" : "Enabled",
        "description" : "Contraint may be enabled/disabled",
        "type" : "BOOLEAN",
        "defaultValue" : "true",
        "optional" : true,
        "sensitive" : false,
        "unconfigurable" : false
      } ],
      "unconfigurable" : false
    }, {
      "name" : "innerPlugin",
      "label" : "innerPlugin",
      "description" : "",
      "type" : "PLUGIN",
      "pluginType" : "fr.cnes.regards.framework.modules.plugins.rest.IParamTestPlugin",
      "optional" : false,
      "sensitive" : false,
      "unconfigurable" : false
    } ]
  },
  "links" : [ ]
}
```
