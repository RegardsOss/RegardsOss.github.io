"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[84821],{19873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var l=n(74848),i=n(28453);const s={id:"appendices-oais",title:"REGARDS OAIS implementation",sidebar_label:"REGARDS OAIS",slug:"/development/appendices/oais/"},r=void 0,d={id:"development/appendices/appendices-oais",title:"REGARDS OAIS implementation",description:"OAIS recommendation",source:"@site/versioned_docs/version-1.15/development/appendices/oais.md",sourceDirName:"development/appendices",slug:"/development/appendices/oais/",permalink:"/docs/1.15/development/appendices/oais/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/appendices/oais.md",tags:[],version:"1.15",frontMatter:{id:"appendices-oais",title:"REGARDS OAIS implementation",sidebar_label:"REGARDS OAIS",slug:"/development/appendices/oais/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.15/development/tutorials/overview/"},next:{title:"Lucene query format",permalink:"/docs/1.15/development/appendices/lucene-query/"}},c={},o=[{value:"OAIS recommendation",id:"oais-recommendation",level:2},{value:"Overview",id:"overview",level:2},{value:"FeatureCollection structure",id:"featurecollection-structure",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Features",id:"features",level:3},{value:"ContentInformation",id:"contentinformation",level:4},{value:"Preservation Description Information (pdi)",id:"preservation-description-information-pdi",level:4},{value:"REGARDS Data types",id:"regards-data-types",level:4}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"oais-recommendation",children:"OAIS recommendation"}),"\n",(0,l.jsxs)(t.p,{children:["REGARDS allows to populate its catalog with products by following the ",(0,l.jsx)(t.a,{href:"https://public.ccsds.org/Pubs/650x0m2%28F%29.pdf",children:"OAIS recommendation"}),".\nYou can send your SIP (Submission Information Package) using the web HMI, the REST API or directly throught the bus message of the Ingest microservice."]}),"\n",(0,l.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)(t.p,{children:"To do so, administrator can provide a Json file containing :"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"metadata"})," information about how to handle features to acquire"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:"features"})," list of SIP to acquire, with geographical features and metadata"]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Exemple :"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n  "type": "FeatureCollection",\n  "metadata": {\n    "sessionOwner": "ISS Mission #1",\n    "session": "Monday acquisition",\n    "ingestChain": "DefaultProcessingChain",\n    "categories": ["ISS_MISSION1_DATA"],\n    "versioningMode": "INC_VERSION",\n    "replaceErrors": false,\n    "storages": [\n      {\n        "pluginBusinessId": "Local",\n        "storePath" : "/demo/exemple-1",\n        "targetTypes": []\n      }\n    ]\n  },\n  "features": [\n    {\n      "type": "Feature",\n      "id": "regards-2296-data-1",\n      "ipType": "DATA",\n      "geometry": null,\n      "properties": {\n        "contentInformations": [\n          {\n            "dataObject": {\n               "regardsDataType": "RAWDATA",\n               "filename": "data-1.dat",\n               "locations": [\n                 {\n                   "url": "file:///regards/demo/data-1.dat"\n                 }\n                ],\n                "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n                "algorithm": "MD5"\n            },\n            "representationInformation": {\n              "syntax": {\n                "name": "TEXT",\n                "mimeType": "text/plain"\n              }\n            }\n          }\n        ],\n        "pdi": {\n          "contextInformation": {\n             "tags": ["KEYWORD"]\n          },\n          "provenanceInformation": { "history": [] },\n          "accessRightInformation": {}\n        },\n        "descriptiveInformation": {\n          "longValue": 11056,\n          "creationdate": "2018-01-20T17:22:48Z",\n          "doubleValue": 35.56598,\n          "dataSetType": "type_01",\n          "label": "REGARDS 2296 generated data -1"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"featurecollection-structure",children:"FeatureCollection structure"}),"\n",(0,l.jsx)(t.h3,{id:"metadata",children:"Metadata"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'  "metadata": {\n    "sessionOwner": "ISS Mission #1",\n    "session": "Monday acquisition",\n    "ingestChain": "DefaultProcessingChain",\n    "categories": ["ISS_MISSION1_DATA"],\n    "versioningMode": "INC_VERSION",\n    "replaceErrors": false,\n    "storages": [\n      {\n        "pluginBusinessId": "Local",\n        "storePath" : "/demo/exemple-1",\n        "targetTypes": [],\n        "size": {\n          "min": 10,\n          "max" : 10000,\n        }\n      }\n    ]\n  }\n'})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Possible values"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"sessionOwner"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Identifier of the data provider. Used to monitor all products of a same provider"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"any text, max 128 characters"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"session"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Identifier of the current group of data. Used to monitor a subset of the session products."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"any text, max 128 characters"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ingestChain"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the configured ingest chain. This chain can be configured through administration HMI and contains all the configuration to generate the final product, the AIP, from the provided SIP."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Any chain name configured"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"categories"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"List of keywords. Thoses keywords can be used lately to select products to add in the metacatalog"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"any text"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"versioningMode"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"How to handle new version of same product (same feature id)"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"IGNORE, INC_VERSION, MANUAL, REPLACE"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"replaceErrors"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"True to delete previous requests in error state with the same feature id. Default value is false"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"true, false(default)"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"storages"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"List of storage configuration that define how to store physical files associated to the provided list of features"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Versionning mode values :"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"IGNORE : New version  of same feature are not ingested."}),"\n",(0,l.jsx)(t.li,{children:"INC_VERSION : New version of same feature are ingested with version incremented."}),"\n",(0,l.jsx)(t.li,{children:"MANUAL : Wait for project administrator to choose how to handle new version."}),"\n",(0,l.jsx)(t.li,{children:"REPLACE : New version of same feature are ingested with version incremented and previous versions are deleted."}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"storages"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Possible values"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"pluginBusinessId"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the configured storage. Each storage have to be configured though the administrator HMI"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Any configured storage label"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"storePath"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Optional property to define a directory into the storage location to store each files"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"subdirectory path"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"targetTypes"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Optional property to define which REGARDS type of files need to be stored in the current storage. If empty all files are stored in the storage"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"RAWDATA"})," , ",(0,l.jsx)(t.code,{children:"QUICKLOOK_SD"}),", ",(0,l.jsx)(t.code,{children:"QUICKLOOK_MD"}),", ",(0,l.jsx)(t.code,{children:"QUICKLOOK_HD"}),",  ",(0,l.jsx)(t.code,{children:"DOCUMENT"}),",  ",(0,l.jsx)(t.code,{children:"THUMBNAIL"}),", ",(0,l.jsx)(t.code,{children:"AIP"}),", ",(0,l.jsx)(t.code,{children:"DESCRIPTION"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"size"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Optional property to define accepted file sizes on this storage location. At least one property among min and max is mandatory to limit the size, otherwise all sizes will be accepted."}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"features",children:"Features"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'{\n      "type": "Feature",\n      "id": "regards-2296-data-1",\n      "ipType": "DATA",\n      "geometry": {\n        "crs" : "WGS84",\n        "type" : "Point",\n        "coordinates": [30, 10]\n      },\n      "properties": {\n        "contentInformations": [\n          {\n            "dataObject": {\n               "regardsDataType": "RAWDATA",\n               "filename": "regards-2296-data-1.dat",\n               "locations": [\n                 {\n                   "url": "file:///regards-input/validation/data/2296/regards-2296-data-1.dat"\n                 }\n                ],\n                "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n                "algorithm": "MD5"\n            },\n            "representationInformation": {\n              "syntax": {\n                "name": "TEXT",\n                "mimeType": "text/plain"\n              }\n            }\n          }\n        ],\n        "pdi": {\n          "contextInformation": {\n             "tags": ["KEYWORD"]\n          },\n          "provenanceInformation": { "history": [] },\n          "accessRightInformation": {}\n        },\n        "descriptiveInformation": {\n          "property1": 11056,\n          "date": "2018-01-20T17:22:48Z",\n          "property2": 35.56598,\n          "property3": ["type_01", "type_02"],\n          "property4": "REGARDS demo",\n          "property5": [ 10, 20 ],\n        }\n      }\n    }\n'})}),"\n",(0,l.jsx)(t.p,{children:"A feature is a product to acquire in REGARDS."}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"Feature"})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Possible values"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"type"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Feature type. Fixed value"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:(0,l.jsx)(t.code,{children:"Feature"})})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"id"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"(Your) Identifier of the product to acquire. This identifier must be unique. If two features have the same id then we consider there is two different versions of the same product"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"any text"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"ipType"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"REGARDS type of feature"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"COLLECTION"}),", ",(0,l.jsx)(t.code,{children:"DATA"}),", ",(0,l.jsx)(t.code,{children:"DATASET"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"geometry"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Standard GeoJson geometry of the feature"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:["RFC7946 ",(0,l.jsx)(t.code,{children:"Point"}),", ",(0,l.jsx)(t.code,{children:"LineString"}),", ",(0,l.jsx)(t.code,{children:"Polygon"}),", ",(0,l.jsx)(t.code,{children:"MultiPoint"}),", ",(0,l.jsx)(t.code,{children:"MultiLineString"}),", ",(0,l.jsx)(t.code,{children:"MultiPolygon"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"contentInformations"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Feature associated files"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Can be empty"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"pdi"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Preservation Description Information"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"descriptiveInformation"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"A group key/value containing all specific information about the product"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"contentinformation",children:"ContentInformation"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"dataObject"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'"dataObject": {\n  "regardsDataType": "RAWDATA",\n  "filename": "regards-2296-data-1.dat",\n  "locations": [\n     {\n        "url": "file:///regards-input/validation/data/2296/regards-2296-data-1.dat"\n      }\n   ],\n   "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n   "algorithm": "MD5"\n},\n'})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Possible values"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"regardsDataType"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"REGARDS type of file"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"RAWDATA"})," , ",(0,l.jsx)(t.code,{children:"QUICKLOOK_SD"}),", ",(0,l.jsx)(t.code,{children:"QUICKLOOK_MD"}),", ",(0,l.jsx)(t.code,{children:"QUICKLOOK_HD"}),",  ",(0,l.jsx)(t.code,{children:"DOCUMENT"}),",  ",(0,l.jsx)(t.code,{children:"THUMBNAIL"}),", ",(0,l.jsx)(t.code,{children:"AIP"}),", ",(0,l.jsx)(t.code,{children:"DESCRIPTION"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"filename"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the file to acquire"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"locations"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Location of the file to acquire. Locations are described under this table."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"checksum"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Checksum of the file to acquire"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"algorithm"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Algorithm used to generate file checksum"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,l.jsx)(t.code,{children:"MD5"}),"..."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"fileSize"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Size in bytes of the file to acquire. This property will be automaticaly calculated if the file to acquire is directly accessible"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"dataObject locations"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'"locations": [\n     {\n        "url": "file:///regards/demo/data-1.dat"\n     },\n     {\n        "storage": "FTP Server",\n        "url": "ftp:/172.125.10.1/regards/demo/ftp/data-1.dat"\n     },\n   ],\n'})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Possible values"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"storage"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Storage location of the file. If this property is provided, then the file is already stored and REGARDS will only keep the reference to the file. There will be no move file operation. If the storage is a configured storage in REGARDS system so the file can be accessed, if not the file will be considered as offline."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Any text"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"url"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Location of the file. If previous property ",(0,l.jsx)(t.code,{children:"storage"})," is not provided, then the file will be copyed from this url to the storages defined in the metadata bloc, so ensure this url must be an accessible ",(0,l.jsx)(t.code,{children:"file:///"})," url protocol from the Storage microservice. If a storage has been provided then this url can be any text that can be a known url for the given storage."]}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"any text"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"NOTE : To reference an online file accessible through HTTP protocol, you have have to use the reference system as the exemple bellow. With this reference the file will be known by REGARDS as an online referenced file and will be accessible without any needs to configure a storage location associated. With this type of reference, the file url provided by regards catalog will be the original provided url."}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'"locations": [\n     {\n        "storage": "web",\n        "url": "https://regardsoss.github.io/appendices/oais"\n     }\n   ],\n'})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"representationInformation"})}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'"representationInformation": {\n  "semantic": {},\n  "syntax": {\n    "name": "TEXT",\n    "mimeType": "text/plain"\n  }\n}\n'})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Possible values"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"semantic"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"}}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"-"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"name"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Name of the mime type of the file"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"mimeType"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"x"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Mime type of the file to acquire"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"height"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Number in pixel"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"width"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Number in pixel"})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"preservation-description-information-pdi",children:"Preservation Description Information (pdi)"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-json",children:'"pdi": {\n  "contextInformation": {\n    "tags": ["KEYWORD"]\n  },\n  "provenanceInformation": {\n    "history": [],\n    "additional": {\n      "urn":""\n    }\n  },\n  "accessRightInformation": {}\n},\n'})}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Mandatory"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Possible values"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"tags"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"keywords to add to each feature"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"any text"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"provenanceInformation"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Description of the origin and history of the feature."}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"provenanceInformation.additional.urn"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Original urn of the product, in case of dissemination for instance."}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Valid urn"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"accessRightInformation"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Description of the feature access rights"}),(0,l.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,l.jsx)(t.h4,{id:"regards-data-types",children:"REGARDS Data types"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"RAWDATA"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Type to reference a data file."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"QUICKLOOK_SD"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Type to reference a small resolution image of the product preview"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"QUICKLOOK_MD"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Type to reference a medium resolution image of the product preview"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"QUICKLOOK_HD"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Type to reference a large resolution image of the product preview"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"DOCUMENT"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Type to reference a document associated to the product"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"THUMBNAIL"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Type to reference a thumbnail of the product"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"AIP"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Type to reference the matadata file of the product"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"DESCRIPTION"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Type to reference a description of the product"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var l=n(96540);const i={},s=l.createContext(i);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);