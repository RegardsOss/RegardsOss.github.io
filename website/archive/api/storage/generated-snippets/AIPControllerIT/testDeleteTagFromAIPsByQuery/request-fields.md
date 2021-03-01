| Path | Type | Description | Constraints |  
| :--: | :--: | :---------: | :---------: |  
| state | `String` | State of the AIP | Available values: VALID, PENDING, WRITING_METADATA, STORING_METADATA, STORED, STORAGE_ERROR, DELETED |  
| session | `String` | Retrieves AIPs with a submission date before the provided value | Must not be null |  
| providerId | `String` | Provider id |  |  
| from | `OffsetDateTime` | Retrieves AIPs with a submission date above the provided value |  |  
| to | `OffsetDateTime` | Retrieves AIPs with a submission date before the provided value |  |  
| aipIds | `Set` | A set of AIPs id (included) |  |  
| aipIdsExcluded | `Set` | A set of AIPs id excluded |  |  
| tags | `List` | List of tags that AIPs must have to be included |  |  
| tagsToRemove | `List` | Tags to remove to AIPs |  |  
{: .table .table-striped}
