* **Query params**

| Parameter | Type | Description | Constraints |  
| :-------: | :--: | :---------: | :---------: |  
| `state` | String | state the aips should be in | Available values: VALID, PENDING, WRITING_METADATA, STORING_METADATA, STORED, STORAGE_ERROR, DELETED |  
| `from` | OffsetDateTime | date after which the aip should have been added to the system | Should respect UTC format |  
| `to` | OffsetDateTime | date before which the aip should have been added to the system | Should respect UTC format |  
| `session` | String | search aips contained in the provided session |  |  
| `providerId` | String | search aips having the provided provider id |  |  
| `tags` | List | search aips tagged with one of provided tags |  |  
{: .table .table-striped}
