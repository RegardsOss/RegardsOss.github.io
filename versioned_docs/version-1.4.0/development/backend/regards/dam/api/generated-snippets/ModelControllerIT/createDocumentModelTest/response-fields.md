    |Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|
        |content.id| `Number` |model identifier||
        |content.name| `String` |model name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|
        |content.description| `String` |model description||
        |content.version| `String` |model version||
        |content.type| `String` |model type|Must not be null. Available values: COLLECTION, DOCUMENT, DATA, DATASET|
    
