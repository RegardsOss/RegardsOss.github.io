(window.webpackJsonp=window.webpackJsonp||[]).push([[1902],{1972:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),i=(a(0),a(2701)),b={id:"appendices-oais",title:"REGARDS OAIS implementation",sidebar_label:"REGARDS OAIS",slug:"/development/appendices/oais"},c={unversionedId:"development/appendices/appendices-oais",id:"development/appendices/appendices-oais",isDocsHomePage:!1,title:"REGARDS OAIS implementation",description:"OAIS recommendation",source:"@site/docs/development/appendices/oais.md",slug:"/development/appendices/oais",permalink:"/docs/next/development/appendices/oais",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/appendices/oais.md",version:"current",sidebar_label:"REGARDS OAIS",sidebar:"dev",previous:{title:"Tutorials",permalink:"/docs/next/development/tutorials/overview"},next:{title:"Lucene query format",permalink:"/docs/next/development/appendices/lucene-query"}},o=[{value:"OAIS recommendation",id:"oais-recommendation",children:[]},{value:"Overview",id:"overview",children:[]},{value:"FeatureCollection structure",id:"featurecollection-structure",children:[{value:"Metadata",id:"metadata",children:[]},{value:"Features",id:"features",children:[]}]}],l={toc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"oais-recommendation"},"OAIS recommendation"),Object(i.b)("p",null,"REGARDS allows to populate its catalog with products by following the ",Object(i.b)("a",{parentName:"p",href:"https://public.ccsds.org/Pubs/650x0m2%28F%29.pdf"},"OAIS recommendation"),".\nYou can send your SIP (Submission Information Package) using the web HMI, the REST API or directly throught the bus message of the Ingest microservice.  "),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"To do so, administrator can provide a Json file containing :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metadata")," information about how to handle features to acquire"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"features")," list of SIP to acquire, with geographical features and metadata")),Object(i.b)("p",null,"Exemple :  "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "FeatureCollection",\n  "metadata": {\n    "sessionOwner": "ISS Mission #1",\n    "session": "Monday acquisition",\n    "ingestChain": "DefaultProcessingChain",\n    "categories": ["ISS_MISSION1_DATA"],\n    "versioningMode": "INC_VERSION",\n    "storages": [\n      {\n        "pluginBusinessId": "Local",\n        "storePath" : "/demo/exemple-1",\n        "targetTypes": []\n      }\n    ]\n  },\n  "features": [\n    {\n      "type": "Feature",\n      "id": "regards-2296-data-1",\n      "ipType": "DATA",\n      "geometry": null,\n      "properties": {\n        "contentInformations": [\n          {\n            "dataObject": {\n               "regardsDataType": "RAWDATA",\n               "filename": "data-1.dat",\n               "locations": [\n                 {\n                   "url": "file:///regards/demo/data-1.dat"\n                 }\n                ],\n                "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n                "algorithm": "MD5"\n            },\n            "representationInformation": {\n              "syntax": {\n                "name": "TEXT",\n                "mimeType": "text/plain"\n              }\n            }\n          }\n        ],\n        "pdi": {\n          "contextInformation": {\n             "tags": ["KEYWORD"]\n          },\n          "provenanceInformation": { "history": [] },\n          "accessRightInformation": {}\n        },\n        "descriptiveInformation": {\n          "longValue": 11056,\n          "creationdate": "2018-01-20T17:22:48Z",\n          "doubleValue": 35.56598,\n          "dataSetType": "type_01",\n          "label": "REGARDS 2296 generated data -1"\n        }\n      }\n    }\n  ]\n}\n')),Object(i.b)("h2",{id:"featurecollection-structure"},"FeatureCollection structure"),Object(i.b)("h3",{id:"metadata"},"Metadata"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'  "metadata": {\n    "sessionOwner": "ISS Mission #1",\n    "session": "Monday acquisition",\n    "ingestChain": "DefaultProcessingChain",\n    "categories": ["ISS_MISSION1_DATA"],\n    "storages": [\n      {\n        "pluginBusinessId": "Local",\n        "storePath" : "/demo/exemple-1",\n        "targetTypes": []\n      }\n    ]\n  }\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"center"},"Mandatory"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Possible values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"sessionOwner"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Identifier of the data provider. Used to monitor all products of a same provider"),Object(i.b)("td",{parentName:"tr",align:"center"},"any text, max 128 characters")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"session"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Identifier of the current group of data. Used to monitor a subset of the session products."),Object(i.b)("td",{parentName:"tr",align:"center"},"any text, max 128 characters")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"ingestChain"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Name of the configured ingest chain. This chain can be configured through administration HMI and contains all the configuration to generate the final product, the AIP, from the provided SIP."),Object(i.b)("td",{parentName:"tr",align:"center"},"Any chain name configured")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"categories"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"List of keywords. Thoses keywords can be used lately to select products to add in the metacatalog"),Object(i.b)("td",{parentName:"tr",align:"center"},"any text")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"versioningMode"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"How to handle new version of same product (same feature id)"),Object(i.b)("td",{parentName:"tr",align:"center"},"IGNORE, INC_VERSION, MANUAL, REPLACE")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"storages"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"List of storage configuration that define how to store physical files associated to the provided list of features"),Object(i.b)("td",{parentName:"tr",align:"center"},"-")))),Object(i.b)("p",null,"Versionning mode values :  "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IGNORE : New version  of same feature are not ingested."),Object(i.b)("li",{parentName:"ul"},"INC_VERSION : New version of same feature are ingested with version incremented."),Object(i.b)("li",{parentName:"ul"},"MANUAL : Wait for project administrator to choose how to handle new version."),Object(i.b)("li",{parentName:"ul"},"REPLACE : New version of same feature are ingested with version incremented and previous versions are deleted.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"storages")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"center"},"Mandatory"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Possible values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"pluginBusinessId"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Name of the configured storage. Each storage have to be configured though the administrator HMI"),Object(i.b)("td",{parentName:"tr",align:"center"},"Any configured storage label")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"storePath"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Optional property to define a directory into the storage location to store each files"),Object(i.b)("td",{parentName:"tr",align:"center"},"subdirectory path")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"targetTypes"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Optional property to define which REGARDS type of files need to be stored in the current storage. If empty all files are stored in the storage"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"RAWDATA")," , ",Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_SD"),", ",Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_MD"),", ",Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_HD"),",  ",Object(i.b)("inlineCode",{parentName:"td"},"DOCUMENT"),",  ",Object(i.b)("inlineCode",{parentName:"td"},"THUMBNAIL"),", ",Object(i.b)("inlineCode",{parentName:"td"},"AIP"),", ",Object(i.b)("inlineCode",{parentName:"td"},"DESCRIPTION"))))),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n      "type": "Feature",\n      "id": "regards-2296-data-1",\n      "ipType": "DATA",\n      "geometry": {\n        "crs" : "WGS84",\n        "type" : "Point",\n        "coordinates": [30, 10]\n      },\n      "properties": {\n        "contentInformations": [\n          {\n            "dataObject": {\n               "regardsDataType": "RAWDATA",\n               "filename": "regards-2296-data-1.dat",\n               "locations": [\n                 {\n                   "url": "file:///regards-input/validation/data/2296/regards-2296-data-1.dat"\n                 }\n                ],\n                "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n                "algorithm": "MD5"\n            },\n            "representationInformation": {\n              "syntax": {\n                "name": "TEXT",\n                "mimeType": "text/plain"\n              }\n            }\n          }\n        ],\n        "pdi": {\n          "contextInformation": {\n             "tags": ["KEYWORD"]\n          },\n          "provenanceInformation": { "history": [] },\n          "accessRightInformation": {}\n        },\n        "descriptiveInformation": {\n          "property1": 11056,\n          "date": "2018-01-20T17:22:48Z",\n          "property2": 35.56598,\n          "property3": ["type_01", "type_02"],\n          "property4": "REGARDS demo",\n          "property5": [ 10, 20 ],\n        }\n      }\n    }\n')),Object(i.b)("p",null,"A feature is a product to acquire in REGARDS."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Feature")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"center"},"Mandatory"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Possible values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"type"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Feature type. Fixed value"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"Feature"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"id"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"(Your) Identifier of the product to acquire. This identifier must be unique. If two features have the same id then we consider there is two different versions of the same product"),Object(i.b)("td",{parentName:"tr",align:"center"},"any text")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"ipType"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"REGARDS type of feature"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"COLLECTION"),", ",Object(i.b)("inlineCode",{parentName:"td"},"DATA"),", ",Object(i.b)("inlineCode",{parentName:"td"},"DATASET"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"geometry"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Standard GeoJson geometry of the feature"),Object(i.b)("td",{parentName:"tr",align:"center"},"RFC7946 ",Object(i.b)("inlineCode",{parentName:"td"},"Point"),", ",Object(i.b)("inlineCode",{parentName:"td"},"LineString"),", ",Object(i.b)("inlineCode",{parentName:"td"},"Polygon"),", ",Object(i.b)("inlineCode",{parentName:"td"},"MultiPoint"),", ",Object(i.b)("inlineCode",{parentName:"td"},"MultiLineString"),", ",Object(i.b)("inlineCode",{parentName:"td"},"MultiPolygon"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"contentInformations"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Feature associated files"),Object(i.b)("td",{parentName:"tr",align:"center"},"Can be empty")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"pdi"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Preservation Description Information"),Object(i.b)("td",{parentName:"tr",align:"center"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"descriptiveInformation"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"A group key/value containing all specific information about the product"),Object(i.b)("td",{parentName:"tr",align:"center"},"-")))),Object(i.b)("h4",{id:"contentinformation"},"ContentInformation"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dataObject")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"dataObject": {\n  "regardsDataType": "RAWDATA",\n  "filename": "regards-2296-data-1.dat",\n  "locations": [\n     {\n        "url": "file:///regards-input/validation/data/2296/regards-2296-data-1.dat"\n      }\n   ],\n   "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n   "algorithm": "MD5"\n},\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"center"},"Mandatory"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Possible values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"regardsDataType"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"REGARDS type of file"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"RAWDATA")," , ",Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_SD"),", ",Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_MD"),", ",Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_HD"),",  ",Object(i.b)("inlineCode",{parentName:"td"},"DOCUMENT"),",  ",Object(i.b)("inlineCode",{parentName:"td"},"THUMBNAIL"),", ",Object(i.b)("inlineCode",{parentName:"td"},"AIP"),", ",Object(i.b)("inlineCode",{parentName:"td"},"DESCRIPTION"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"filename"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Name of the file to acquire"),Object(i.b)("td",{parentName:"tr",align:"center"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"locations"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Location of the file to acquire. Locations are described under this table."),Object(i.b)("td",{parentName:"tr",align:"center"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"checksum"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Checksum of the file to acquire"),Object(i.b)("td",{parentName:"tr",align:"center"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"algorithm"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Algorithm used to generate file checksum"),Object(i.b)("td",{parentName:"tr",align:"center"},Object(i.b)("inlineCode",{parentName:"td"},"MD5"),"...")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"fileSize"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Size in bytes of the file to acquire. This property will be automaticaly calculated if the file to acquire is directly accessible"),Object(i.b)("td",{parentName:"tr",align:"center"},"-")))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dataObject locations")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"locations": [\n     {\n        "url": "file:///regards/demo/data-1.dat"\n     },\n     {\n        "storage": "FTP Server",\n        "url": "ftp:/172.125.10.1/regards/demo/ftp/data-1.dat"\n     },\n   ],\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"center"},"Mandatory"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Possible values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"storage"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Storage location of the file. If this property is provided, then the file is already stored and REGARDS will only keep the reference to the file. There will be no move file operation. If the storage is a configured storage in REGARDS system so the file can be accessed, if not the file will be considered as offline."),Object(i.b)("td",{parentName:"tr",align:"center"},"Any text")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"url"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Location of the file. If previous property ",Object(i.b)("inlineCode",{parentName:"td"},"storage")," is not provided, then the file will be copyed from this url to the storages defined in the metadata bloc, so ensure this url must be an accessible ",Object(i.b)("inlineCode",{parentName:"td"},"file:///")," url protocol from the Storage microservice. If a storage has been provided then this url can be any text that can be a known url for the given storage."),Object(i.b)("td",{parentName:"tr",align:"center"},"any text")))),Object(i.b)("p",null,"NOTE : To reference an online file accessible through HTTP protocol, you have have to use the reference system as the exemple bellow. With this reference the file will be known by REGARDS as an online referenced file and will be accessible without any needs to configure a storage location associated. With this type of reference, the file url provided by regards catalog will be the original provided url. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"locations": [\n     {\n        "storage": "web",\n        "url": "https://regardsoss.github.io/appendices/oais"\n     }\n   ],\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"representationInformation")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"representationInformation": {\n  "semantic": {},\n  "syntax": {\n    "name": "TEXT",\n    "mimeType": "text/plain"\n  }\n}\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"center"},"Mandatory"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Possible values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"semantic"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"}),Object(i.b)("td",{parentName:"tr",align:"center"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"name"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Name of the mime type of the file"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"mimeType"),Object(i.b)("td",{parentName:"tr",align:"center"},"x"),Object(i.b)("td",{parentName:"tr",align:"left"},"Mime type of the file to acquire"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"height"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible"),Object(i.b)("td",{parentName:"tr",align:"center"},"Number in pixel")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"width"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible"),Object(i.b)("td",{parentName:"tr",align:"center"},"Number in pixel")))),Object(i.b)("h4",{id:"preservation-description-information-pdi"},"Preservation Description Information (pdi)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'"pdi": {\n  "contextInformation": {\n    "tags": ["KEYWORD"]\n  },\n  "provenanceInformation": { "history": [] },\n  "accessRightInformation": {}\n},\n')),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Property"),Object(i.b)("th",{parentName:"tr",align:"center"},"Mandatory"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"),Object(i.b)("th",{parentName:"tr",align:"center"},"Possible values"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"tags"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"keywords to add to each feature"),Object(i.b)("td",{parentName:"tr",align:"center"},"any text")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"provenanceInformation"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Description of the origine and history of the feature"),Object(i.b)("td",{parentName:"tr",align:"center"})),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"accessRightInformation"),Object(i.b)("td",{parentName:"tr",align:"center"}),Object(i.b)("td",{parentName:"tr",align:"left"},"Description of the feature access rights"),Object(i.b)("td",{parentName:"tr",align:"center"})))),Object(i.b)("h4",{id:"regards-data-types"},"REGARDS Data types"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"RAWDATA")),Object(i.b)("td",{parentName:"tr",align:"left"},"Type to reference a data file.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_SD")),Object(i.b)("td",{parentName:"tr",align:"left"},"Type to reference a small resolution image of the product preview")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_MD")),Object(i.b)("td",{parentName:"tr",align:"left"},"Type to reference a medium resolution image of the product preview")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"QUICKLOOK_HD")),Object(i.b)("td",{parentName:"tr",align:"left"},"Type to reference a large resolution image of the product preview")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"DOCUMENT")),Object(i.b)("td",{parentName:"tr",align:"left"},"Type to reference a document associated to the product")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"THUMBNAIL")),Object(i.b)("td",{parentName:"tr",align:"left"},"Type to reference a thumbnail of the product")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"AIP")),Object(i.b)("td",{parentName:"tr",align:"left"},"Type to reference the matadata file of the product")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"DESCRIPTION")),Object(i.b)("td",{parentName:"tr",align:"left"},"Type to reference a description of the product")))))}d.isMDXComponent=!0},2701:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,O=p["".concat(b,".").concat(s)]||p[s]||m[s]||i;return a?r.a.createElement(O,c(c({ref:t},l),{},{components:a})):r.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var l=2;l<i;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);