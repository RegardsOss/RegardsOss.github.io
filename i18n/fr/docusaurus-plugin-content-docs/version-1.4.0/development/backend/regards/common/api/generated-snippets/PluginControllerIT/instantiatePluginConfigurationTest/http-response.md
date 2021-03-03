* **Code:** 201 Created

  **Headers:**

  `Access-Control-Allow-Origin: *`
  `Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE`
  `Access-Control-Allow-Headers: authorization, content-type, scope`
  `Access-Control-Max-Age: 3600`
  `X-Application-Context: Test application:default,test,noschedule:-1`
  `Content-Type: application/json;charset=UTF-8`
  `X-Content-Type-Options: nosniff`
  `X-XSS-Protection: 1; mode=block`
  `Cache-Control: no-cache, no-store, max-age=0, must-revalidate`
  `Pragma: no-cache`
  `Expires: 0`
  `X-Frame-Options: DENY`

  **Content:**

```json

{
  "content" : {
    "id" : 1,
    "pluginId" : "InnerParamTestPlugin",
    "label" : "Oliiiiiiive",
    "version" : "1.0.0",
    "priorityOrder" : 2,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.framework.modules.plugins.rest.InnerParamTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.framework.modules.plugins.rest.IParamTestPlugin" ],
    "parameters" : [ {
      "id" : 1,
      "name" : "toto",
      "value" : "Ficelle",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    } ]
  },
  "links" : [ ]
}
```
