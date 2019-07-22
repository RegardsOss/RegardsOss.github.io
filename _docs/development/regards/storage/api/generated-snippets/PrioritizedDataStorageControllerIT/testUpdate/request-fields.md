    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |id| `Number` |PrioritizedDataStorage identifier|Should be a whole number|
        |priority| `Number` |PrioritizedDataStorage priority. 0 being the highest priority|Must be at least 0|
        |dataStorageType| `String` |PrioritizedDataStorage type|Available values: ONLINE, NEARLINE|
        |dataStorageConfiguration| `Object` |DataStorage configuration|Should respect PluginConfiguration structure|
    {:.table.table-striped}
