#### Request

* **Code:** 200 OK

        **Headers:**

        `Pragma:no-cache`
        `X-XSS-Protection:1; mode=block`
        `Expires:0`
        `X-Frame-Options:DENY`
        `X-Content-Type-Options:nosniff`
        `Access-Control-Allow-Headers:authorization, content-type, scope`
        `Access-Control-Max-Age:3600`
        `Content-Type:application/json;charset=UTF-8`
        `Access-Control-Allow-Origin:*`
        `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`
        `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`

        **Content:**

```json
    
[ {
  "id" : 5,
  "attribute" : {
    "id" : 5,
    "name" : "attmodelGMA0",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA0"
  },
  "model" : {
    "id" : 4,
    "name" : "modelGMA0",
    "type" : "COLLECTION"
  },
  "pos" : 0
}, {
  "id" : 6,
  "attribute" : {
    "id" : 6,
    "name" : "attmodelGMA1",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA1"
  },
  "model" : {
    "id" : 5,
    "name" : "modelGMA1",
    "type" : "DATA"
  },
  "pos" : 0
}, {
  "id" : 7,
  "attribute" : {
    "id" : 7,
    "name" : "attmodelGMA2",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA2"
  },
  "model" : {
    "id" : 6,
    "name" : "modelGMA2",
    "type" : "DATASET"
  },
  "pos" : 0
}, {
  "id" : 8,
  "attribute" : {
    "id" : 8,
    "name" : "attmodelGMA3",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA3"
  },
  "model" : {
    "id" : 7,
    "name" : "modelGMA3",
    "type" : "COLLECTION"
  },
  "pos" : 0
}, {
  "id" : 9,
  "attribute" : {
    "id" : 9,
    "name" : "attmodelGMA4",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA4"
  },
  "model" : {
    "id" : 8,
    "name" : "modelGMA4",
    "type" : "DATA"
  },
  "pos" : 0
}, {
  "id" : 10,
  "attribute" : {
    "id" : 10,
    "name" : "attmodelGMA5",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA5"
  },
  "model" : {
    "id" : 9,
    "name" : "modelGMA5",
    "type" : "DATASET"
  },
  "pos" : 0
}, {
  "id" : 11,
  "attribute" : {
    "id" : 11,
    "name" : "attmodelGMA6",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA6"
  },
  "model" : {
    "id" : 10,
    "name" : "modelGMA6",
    "type" : "COLLECTION"
  },
  "pos" : 0
}, {
  "id" : 12,
  "attribute" : {
    "id" : 12,
    "name" : "attmodelGMA7",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA7"
  },
  "model" : {
    "id" : 11,
    "name" : "modelGMA7",
    "type" : "DATA"
  },
  "pos" : 0
}, {
  "id" : 13,
  "attribute" : {
    "id" : 13,
    "name" : "attmodelGMA8",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA8"
  },
  "model" : {
    "id" : 12,
    "name" : "modelGMA8",
    "type" : "DATASET"
  },
  "pos" : 0
}, {
  "id" : 14,
  "attribute" : {
    "id" : 14,
    "name" : "attmodelGMA9",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA9"
  },
  "model" : {
    "id" : 13,
    "name" : "modelGMA9",
    "type" : "COLLECTION"
  },
  "pos" : 0
}, {
  "id" : 15,
  "attribute" : {
    "id" : 15,
    "name" : "attmodelGMA10",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA10"
  },
  "model" : {
    "id" : 14,
    "name" : "modelGMA10",
    "type" : "DATA"
  },
  "pos" : 0
}, {
  "id" : 16,
  "attribute" : {
    "id" : 16,
    "name" : "attmodelGMA11",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA11"
  },
  "model" : {
    "id" : 15,
    "name" : "modelGMA11",
    "type" : "DATASET"
  },
  "pos" : 0
}, {
  "id" : 17,
  "attribute" : {
    "id" : 17,
    "name" : "attmodelGMA12",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA12"
  },
  "model" : {
    "id" : 16,
    "name" : "modelGMA12",
    "type" : "COLLECTION"
  },
  "pos" : 0
}, {
  "id" : 18,
  "attribute" : {
    "id" : 18,
    "name" : "attmodelGMA13",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA13"
  },
  "model" : {
    "id" : 17,
    "name" : "modelGMA13",
    "type" : "DATA"
  },
  "pos" : 0
}, {
  "id" : 19,
  "attribute" : {
    "id" : 19,
    "name" : "attmodelGMA14",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA14"
  },
  "model" : {
    "id" : 18,
    "name" : "modelGMA14",
    "type" : "DATASET"
  },
  "pos" : 0
}, {
  "id" : 20,
  "attribute" : {
    "id" : 20,
    "name" : "attmodelGMA15",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA15"
  },
  "model" : {
    "id" : 19,
    "name" : "modelGMA15",
    "type" : "COLLECTION"
  },
  "pos" : 0
}, {
  "id" : 21,
  "attribute" : {
    "id" : 21,
    "name" : "attmodelGMA16",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA16"
  },
  "model" : {
    "id" : 20,
    "name" : "modelGMA16",
    "type" : "DATA"
  },
  "pos" : 0
}, {
  "id" : 22,
  "attribute" : {
    "id" : 22,
    "name" : "attmodelGMA17",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA17"
  },
  "model" : {
    "id" : 21,
    "name" : "modelGMA17",
    "type" : "DATASET"
  },
  "pos" : 0
}, {
  "id" : 23,
  "attribute" : {
    "id" : 23,
    "name" : "attmodelGMA18",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA18"
  },
  "model" : {
    "id" : 22,
    "name" : "modelGMA18",
    "type" : "COLLECTION"
  },
  "pos" : 0
}, {
  "id" : 24,
  "attribute" : {
    "id" : 24,
    "name" : "attmodelGMA19",
    "type" : "STRING",
    "fragment" : {
      "id" : 4,
      "name" : "default",
      "description" : "Default fragment"
    },
    "alterable" : false,
    "optional" : false,
    "label" : "ForTests",
    "properties" : [ ],
    "dynamic" : true,
    "internal" : false,
    "jsonPath" : "properties.attmodelGMA19"
  },
  "model" : {
    "id" : 23,
    "name" : "modelGMA19",
    "type" : "DATA"
  },
  "pos" : 0
} ]
```
