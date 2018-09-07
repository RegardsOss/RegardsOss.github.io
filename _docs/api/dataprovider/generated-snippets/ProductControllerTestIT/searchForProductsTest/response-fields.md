| Path | Type | Description | Constraints |  
| :--: | :--: | :---------: | :---------: |  
| content[].content.state | `String` | State | Allowed values : ACQUIRING, COMPLETED, FINISHED |  
| content[].content.sipState | `String` |  SIP State | Allowed values : NOT_SCHEDULED, SCHEDULED, GENERATED, GENERATION_ERROR, SUBMISSION_SCHEDULED, SUBMISSION_ERROR |  
| content[].content.error | `String` | Error details when product state is in error state |  |  
| content[].content.lastUpdate | `String` | ISO 8601 last product update |  |  
| content[].content.productName | `String` | Product name | Must not be blank |  
| content[].content.session | `String` | Session name |  |  
| content[].content.fileList[] | `Array` | Acquired product files |  |  
| content[].content.sip | `Object` | Generated SIP |  |  
| content[].content.ipId | `String` | SIP IP ID |  |  
{: .table .table-striped}
