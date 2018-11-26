* **Data params**

```json
 {
  "pluginId" : "aSamplePlugin",
  "label" : "a plugin configuration for the test",
  "version" : "12345-6789-11",
  "priorityOrder" : 0,
  "active" : true,
  "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",
  "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],
  "parameters" : [ {
    "name" : "param31",
    "value" : "value31",
    "dynamic" : true,
    "dynamicsValues" : [ "red", "blue", "green" ],
    "onlyDynamic" : false
  }, {
    "name" : "param32",
    "value" : "value32",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  }, {
    "name" : "isActive",
    "value" : "true",
    "dynamic" : false,
    "dynamicsValues" : [ ],
    "onlyDynamic" : false
  } ],
  "iconUrl" : "http://google.fr/svg/logo.svg"
}
```
