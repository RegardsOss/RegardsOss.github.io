* **URL**:

  `/storages/{id}`

* **Method:**

  `PUT`

* **Headers**:

  `Authorization: Bearer {token}`
  `Content-Type: application/json;charset=UTF-8`
  `Accept: application/json`

* **URL Params**

  {% for urlParam in test.urlParams %}
  `{{urlParam.name}}: {{urlParam.description}}`  
  {% else %}
  None.  
  {% endfor %}

* **Query Params**

  {% for queryParam in test.queryParams %}
  `{{queryParam.name}}: {{queryParam.description}}`  
  {% else %}
  None.  
  {% endfor %}

* **Data Params**

  **Required:**

```json
  
{
  "id" : 208,
  "dataStorageConfiguration" : {
    "id" : 208,
    "pluginId" : "Local",
    "label" : "PrioritizedDataStorageControllerIT_1",
    "version" : "1.0",
    "priorityOrder" : 0,
    "active" : false,
    "pluginClassName" : "fr.cnes.regards.modules.storage.plugin.datastorage.local.LocalDataStorage",
    "interfaceNames" : [ "fr.cnes.regards.modules.storage.domain.plugin.IDataStorage", "fr.cnes.regards.modules.storage.domain.plugin.IOnlineDataStorage" ],
    "parameters" : [ {
      "id" : 214,
      "name" : "Local_Total_Space",
      "value" : 9000000000000000,
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    }, {
      "id" : 215,
      "name" : "Storage_URL",
      "value" : "file:/home/svissier/workspace/REGARDS/rs-storage/storage/storage-rest/target/AIPControllerIT",
      "dynamic" : false,
      "dynamicsValues" : [ ],
      "onlyDynamic" : false
    } ]
  },
  "dataStorageType" : "ONLINE",
  "priority" : 0
}
```