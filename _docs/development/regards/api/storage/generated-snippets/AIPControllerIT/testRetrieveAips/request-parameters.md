* **Query params**

| Parameter | Type | Description | Constraints |  
| :-------: | :--: | :---------: | :---------: |  
| `state` | String | state the aips should be in | Available values: VALID, PENDING, STORING_METADATA, STORED, STORAGE_ERROR, UPDATED, DELETED |  
| `from` | String | date after which the aip should have been added to the system | Should respect UTC format |  
| `to` | String | date before which the aip should have been added to the system | Should respect UTC format |  
| `session` | String | search aips contained in the provided session |  |  
| `tags` | List | search aips tagged with one of provided tags |  |  
{: .table .table-striped}
