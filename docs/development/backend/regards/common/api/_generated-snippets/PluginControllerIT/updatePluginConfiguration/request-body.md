* **Data params**

```json
 {
  "id" : 9,
  "pluginId" : "aSamplePlugin",
  "label" : "a plugin configuration for the test",
  "version" : "12345-6789-11",
  "priorityOrder" : 0,
  "active" : true,
  "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",
  "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],
  "parameters" : [ {
    "id" : 22,
    "name" : "param31",
    "value" : "value31",
    "dynamic" : true,
    "dynamicsValues" : [ "red", "blue", "green" ],
    "onlyDynamic" : false
  }, {
    "id" : 23,
    "name" : "param32",
    "value" : "value32",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  }, {
    "id" : 24,
    "name" : "isActive",
    "value" : "true",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  } ],
  "iconUrl" : "http://google.fr/svg/logo.svg"
}
```
