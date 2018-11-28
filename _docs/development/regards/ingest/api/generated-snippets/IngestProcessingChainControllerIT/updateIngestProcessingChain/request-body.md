* **Data params**

```json
 {
  "name" : "ingestProcessingChain_test",
  "description" : "the updated description",
  "validationPlugin" : {
    "id" : 152,
    "pluginId" : "FakeValidationTestPlugin",
    "label" : "FakeValidationTestPlugin",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "parameters" : [ ]
  },
  "generationPlugin" : {
    "id" : 153,
    "pluginId" : "FakeAIPGenerationTestPlugin",
    "label" : "FakeAIPGenerationTestPlugin",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
    "parameters" : [ ]
  }
}
```
