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
    "id" : 1,
    "pluginId" : "aSamplePlugin",
    "label" : "a plugin configuration for the test",
    "version" : "12345-6789-11",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",
    "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],
    "parameters" : [ {
      "id" : 1,
      "name" : "param31",
      "value" : "value31",
      "dynamic" : true,
      "dynamicsValues" : [ "red", "blue", "green" ],
      "onlyDynamic" : false
    }, {
      "id" : 2,
      "name" : "param32",
      "value" : "value32",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "id" : 3,
      "name" : "isActive",
      "value" : "true",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    } ],
    "iconUrl" : "http://google.fr/svg/logo.svg"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/1"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/1"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/1"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config"
  } ]
}, {
  "content" : {
    "id" : 2,
    "pluginId" : "aSamplePlugin",
    "label" : "a plugin configuration for the test - second",
    "version" : "12345-6789-11",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",
    "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],
    "parameters" : [ {
      "id" : 1,
      "name" : "param31",
      "value" : "value31",
      "dynamic" : true,
      "dynamicsValues" : [ "red", "blue", "green" ],
      "onlyDynamic" : false
    }, {
      "id" : 2,
      "name" : "param32",
      "value" : "value32",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "id" : 3,
      "name" : "isActive",
      "value" : "true",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    } ],
    "iconUrl" : "http://google.fr/svg/logo.svg"
  },
  "links" : [ {
    "rel" : "self",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/2"
  }, {
    "rel" : "delete",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/2"
  }, {
    "rel" : "update",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config/2"
  }, {
    "rel" : "list",
    "href" : "http://localhost:8080/plugins/aSamplePlugin/config"
  } ]
} ]
```
