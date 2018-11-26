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
  `Content-Type: application/hal+json;charset=UTF-8`

  **Content:**

```json

{
  "id" : 153,
  "name" : "ingestProcessingChain_test",
  "description" : "the updated description",
  "preProcessingPlugin" : {
    "present" : false
  },
  "validationPlugin" : {
    "id" : 152,
    "pluginId" : "FakeValidationTestPlugin",
    "label" : "FakeValidationTestPlugin",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "parameters" : [ ],
    "iconUrl" : null,
    "identifiable" : true
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
    "parameters" : [ ],
    "iconUrl" : null,
    "identifiable" : true
  },
  "tagPlugin" : {
    "present" : false
  },
  "postProcessingPlugin" : {
    "present" : false
  },
  "chainPlugins" : [ {
    "id" : 152,
    "pluginId" : "FakeValidationTestPlugin",
    "label" : "FakeValidationTestPlugin",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeValidationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.ISipValidation" ],
    "parameters" : [ ],
    "iconUrl" : null,
    "identifiable" : true
  }, {
    "id" : 153,
    "pluginId" : "FakeAIPGenerationTestPlugin",
    "label" : "FakeAIPGenerationTestPlugin",
    "version" : "1.0.0",
    "priorityOrder" : 0,
    "active" : true,
    "pluginClassName" : "fr.cnes.regards.modules.ingest.service.plugin.FakeAIPGenerationTestPlugin",
    "interfaceNames" : [ "fr.cnes.regards.modules.ingest.domain.plugin.IAipGeneration" ],
    "parameters" : [ ],
    "iconUrl" : null,
    "identifiable" : true
  } ],
  "_links" : {
    "delete" : {
      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"
    },
    "update" : {
      "href" : "http://localhost:8080/processingchains/ingestProcessingChain_test"
    }
  }
}
```
