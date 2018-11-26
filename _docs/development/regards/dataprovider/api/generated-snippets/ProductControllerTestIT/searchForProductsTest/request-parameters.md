* **Query params**

| Parameter | Type | Description | Constraints |  
| :-------: | :--: | :---------: | :---------: |  
| `state` | String | Product state filter | Optional. Multiple values allowed. Allowed values : ACQUIRING, COMPLETED, FINISHED |  
| `sipState` | String | Product SIP state filter | Optional. Multiple values allowed. Allowed values : NOT_SCHEDULED, SCHEDULED, GENERATED, GENERATION_ERROR, SUBMISSION_SCHEDULED, SUBMISSION_ERROR |  
| `productName` | String | Product name filter | Optional |  
| `chainId` | Number | Acquisition chain identifier filter | Optional |  
| `from` | String | ISO Date time filter | Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ |  
| `session` | String | Session name filter | Optional |  
| `nosession` | Boolean | No session filter | Optional |  
{: .table .table-striped}
