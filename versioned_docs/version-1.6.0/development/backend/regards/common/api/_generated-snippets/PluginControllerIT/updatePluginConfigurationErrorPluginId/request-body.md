* **Data params**

```json
 {
  "id" : 5,
  "pluginId" : "hello-toulouse",
  "label" : "a plugin configuration for the testtttttt",
  "version" : "12345-6789-11",
  "priorityOrder" : 0,
  "active" : true,
  "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",
  "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],
  "parameters" : [ {
    "id" : 10,
    "name" : "param31",
    "value" : "value31",
    "dynamic" : true,
    "dynamicsValues" : [ "red", "blue", "green" ],
    "onlyDynamic" : false
  }, {
    "id" : 11,
    "name" : "param32",
    "value" : "value32",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  }, {
    "id" : 12,
    "name" : "isActive",
    "value" : "true",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  } ],
  "iconUrl" : "http://google.fr/svg/logo.svg"
}
```
