* **Query params**

| Parameter | Type | Description | Constraints |  
| :-------: | :--: | :---------: | :---------: |  
| `filePath` | String | Entire file path filter | Optional |  
| `state` | String | Acquisition file state filter | Optional. Multiple values allowed. Allowed values : IN_PROGRESS, VALID, INVALID, ACQUIRED, SUPERSEDED, SUPERSEDED_AFTER_ERROR, ERROR |  
| `productId` | Number | Product acquisition file(s) identifier filter | Optional |  
| `chainId` | Number | Acquisition chain identifier filter | Optional |  
| `from` | String | ISO Date time filter | Optional. Required format : yyyy-MM-dd'T'HH:mm:ss.SSSZ |  
{: .table .table-striped}
