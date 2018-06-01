| Path | Type | Description | Constraints |  
| :--: | :--: | :---------: | :---------: |  
| content.id | `Number` | PrioritizedDataStorage identifier | Should be a whole number |  
| content.priority | `Number` | PrioritizedDataStorage priority. 0 being the highest priority | Must be at least 0 |  
| content.dataStorageType | `String` | PrioritizedDataStorage type | Available values: ONLINE, NEARLINE |  
| content.dataStorageConfiguration | `Object` | DataStorage configuration | Should respect PluginConfiguration structure |  
