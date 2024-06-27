"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[46777],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=d(a),k=r,g=s["".concat(p,".").concat(k)]||s[k]||c[k]||i;return a?n.createElement(g,o(o({ref:t},m),{},{components:a})):n.createElement(g,o({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},62709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={id:"appendices-oais",title:"REGARDS OAIS implementation",sidebar_label:"REGARDS OAIS",slug:"/development/appendices/oais/"},o=void 0,l={unversionedId:"development/appendices/appendices-oais",id:"version-1.14/development/appendices/appendices-oais",title:"REGARDS OAIS implementation",description:"OAIS recommendation",source:"@site/versioned_docs/version-1.14/development/appendices/oais.md",sourceDirName:"development/appendices",slug:"/development/appendices/oais/",permalink:"/docs/1.14/development/appendices/oais/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.14/development/appendices/oais.md",tags:[],version:"1.14",frontMatter:{id:"appendices-oais",title:"REGARDS OAIS implementation",sidebar_label:"REGARDS OAIS",slug:"/development/appendices/oais/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/1.14/development/tutorials/overview/"},next:{title:"Lucene query format",permalink:"/docs/1.14/development/appendices/lucene-query/"}},p={},d=[{value:"OAIS recommendation",id:"oais-recommendation",level:2},{value:"Overview",id:"overview",level:2},{value:"FeatureCollection structure",id:"featurecollection-structure",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Features",id:"features",level:3},{value:"ContentInformation",id:"contentinformation",level:4},{value:"Preservation Description Information (pdi)",id:"preservation-description-information-pdi",level:4},{value:"REGARDS Data types",id:"regards-data-types",level:4}],m={toc:d},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"oais-recommendation"},"OAIS recommendation"),(0,r.kt)("p",null,"REGARDS allows to populate its catalog with products by following the ",(0,r.kt)("a",{parentName:"p",href:"https://public.ccsds.org/Pubs/650x0m2%28F%29.pdf"},"OAIS recommendation"),".\nYou can send your SIP (Submission Information Package) using the web HMI, the REST API or directly throught the bus message of the Ingest microservice.  "),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"To do so, administrator can provide a Json file containing :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metadata")," information about how to handle features to acquire"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"features")," list of SIP to acquire, with geographical features and metadata")),(0,r.kt)("p",null,"Exemple :  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "FeatureCollection",\n  "metadata": {\n    "sessionOwner": "ISS Mission #1",\n    "session": "Monday acquisition",\n    "ingestChain": "DefaultProcessingChain",\n    "categories": ["ISS_MISSION1_DATA"],\n    "versioningMode": "INC_VERSION",\n    "replaceErrors": false,\n    "storages": [\n      {\n        "pluginBusinessId": "Local",\n        "storePath" : "/demo/exemple-1",\n        "targetTypes": []\n      }\n    ]\n  },\n  "features": [\n    {\n      "type": "Feature",\n      "id": "regards-2296-data-1",\n      "ipType": "DATA",\n      "geometry": null,\n      "properties": {\n        "contentInformations": [\n          {\n            "dataObject": {\n               "regardsDataType": "RAWDATA",\n               "filename": "data-1.dat",\n               "locations": [\n                 {\n                   "url": "file:///regards/demo/data-1.dat"\n                 }\n                ],\n                "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n                "algorithm": "MD5"\n            },\n            "representationInformation": {\n              "syntax": {\n                "name": "TEXT",\n                "mimeType": "text/plain"\n              }\n            }\n          }\n        ],\n        "pdi": {\n          "contextInformation": {\n             "tags": ["KEYWORD"]\n          },\n          "provenanceInformation": { "history": [] },\n          "accessRightInformation": {}\n        },\n        "descriptiveInformation": {\n          "longValue": 11056,\n          "creationdate": "2018-01-20T17:22:48Z",\n          "doubleValue": 35.56598,\n          "dataSetType": "type_01",\n          "label": "REGARDS 2296 generated data -1"\n        }\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"featurecollection-structure"},"FeatureCollection structure"),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "metadata": {\n    "sessionOwner": "ISS Mission #1",\n    "session": "Monday acquisition",\n    "ingestChain": "DefaultProcessingChain",\n    "categories": ["ISS_MISSION1_DATA"],\n    "versioningMode": "INC_VERSION",\n    "replaceErrors": false,\n    "storages": [\n      {\n        "pluginBusinessId": "Local",\n        "storePath" : "/demo/exemple-1",\n        "targetTypes": [],\n        "size": {\n          "min": 10,\n          "max" : 10000,\n        }\n      }\n    ]\n  }\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Possible values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sessionOwner"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Identifier of the data provider. Used to monitor all products of a same provider"),(0,r.kt)("td",{parentName:"tr",align:"center"},"any text, max 128 characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"session"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Identifier of the current group of data. Used to monitor a subset of the session products."),(0,r.kt)("td",{parentName:"tr",align:"center"},"any text, max 128 characters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ingestChain"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the configured ingest chain. This chain can be configured through administration HMI and contains all the configuration to generate the final product, the AIP, from the provided SIP."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Any chain name configured")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"categories"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of keywords. Thoses keywords can be used lately to select products to add in the metacatalog"),(0,r.kt)("td",{parentName:"tr",align:"center"},"any text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"versioningMode"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"How to handle new version of same product (same feature id)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"IGNORE, INC_VERSION, MANUAL, REPLACE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"replaceErrors"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"True to delete previous requests in error state with the same feature id. Default value is false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true, false(default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storages"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of storage configuration that define how to store physical files associated to the provided list of features"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,r.kt)("p",null,"Versionning mode values :  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IGNORE : New version  of same feature are not ingested."),(0,r.kt)("li",{parentName:"ul"},"INC_VERSION : New version of same feature are ingested with version incremented."),(0,r.kt)("li",{parentName:"ul"},"MANUAL : Wait for project administrator to choose how to handle new version."),(0,r.kt)("li",{parentName:"ul"},"REPLACE : New version of same feature are ingested with version incremented and previous versions are deleted.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"storages")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Possible values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pluginBusinessId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the configured storage. Each storage have to be configured though the administrator HMI"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Any configured storage label")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storePath"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional property to define a directory into the storage location to store each files"),(0,r.kt)("td",{parentName:"tr",align:"center"},"subdirectory path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"targetTypes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional property to define which REGARDS type of files need to be stored in the current storage. If empty all files are stored in the storage"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"RAWDATA")," , ",(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_SD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_MD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_HD"),",  ",(0,r.kt)("inlineCode",{parentName:"td"},"DOCUMENT"),",  ",(0,r.kt)("inlineCode",{parentName:"td"},"THUMBNAIL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"AIP"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DESCRIPTION"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"size"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional property to define accepted file sizes on this storage location. At least one property among min and max is mandatory to limit the size, otherwise all sizes will be accepted."),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "type": "Feature",\n      "id": "regards-2296-data-1",\n      "ipType": "DATA",\n      "geometry": {\n        "crs" : "WGS84",\n        "type" : "Point",\n        "coordinates": [30, 10]\n      },\n      "properties": {\n        "contentInformations": [\n          {\n            "dataObject": {\n               "regardsDataType": "RAWDATA",\n               "filename": "regards-2296-data-1.dat",\n               "locations": [\n                 {\n                   "url": "file:///regards-input/validation/data/2296/regards-2296-data-1.dat"\n                 }\n                ],\n                "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n                "algorithm": "MD5"\n            },\n            "representationInformation": {\n              "syntax": {\n                "name": "TEXT",\n                "mimeType": "text/plain"\n              }\n            }\n          }\n        ],\n        "pdi": {\n          "contextInformation": {\n             "tags": ["KEYWORD"]\n          },\n          "provenanceInformation": { "history": [] },\n          "accessRightInformation": {}\n        },\n        "descriptiveInformation": {\n          "property1": 11056,\n          "date": "2018-01-20T17:22:48Z",\n          "property2": 35.56598,\n          "property3": ["type_01", "type_02"],\n          "property4": "REGARDS demo",\n          "property5": [ 10, 20 ],\n        }\n      }\n    }\n')),(0,r.kt)("p",null,"A feature is a product to acquire in REGARDS."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Feature")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Possible values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Feature type. Fixed value"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Feature"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"(Your) Identifier of the product to acquire. This identifier must be unique. If two features have the same id then we consider there is two different versions of the same product"),(0,r.kt)("td",{parentName:"tr",align:"center"},"any text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ipType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"REGARDS type of feature"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"COLLECTION"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DATA"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DATASET"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"geometry"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Standard GeoJson geometry of the feature"),(0,r.kt)("td",{parentName:"tr",align:"center"},"RFC7946 ",(0,r.kt)("inlineCode",{parentName:"td"},"Point"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"LineString"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Polygon"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"MultiPoint"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"MultiLineString"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"MultiPolygon"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"contentInformations"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Feature associated files"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Can be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pdi"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Preservation Description Information"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"descriptiveInformation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A group key/value containing all specific information about the product"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,r.kt)("h4",{id:"contentinformation"},"ContentInformation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataObject")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"dataObject": {\n  "regardsDataType": "RAWDATA",\n  "filename": "regards-2296-data-1.dat",\n  "locations": [\n     {\n        "url": "file:///regards-input/validation/data/2296/regards-2296-data-1.dat"\n      }\n   ],\n   "checksum": "9a964ed3be0e2e2786d82ace9d971e90",\n   "algorithm": "MD5"\n},\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Possible values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"regardsDataType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"REGARDS type of file"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"RAWDATA")," , ",(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_SD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_MD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_HD"),",  ",(0,r.kt)("inlineCode",{parentName:"td"},"DOCUMENT"),",  ",(0,r.kt)("inlineCode",{parentName:"td"},"THUMBNAIL"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"AIP"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DESCRIPTION"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"filename"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the file to acquire"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"locations"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Location of the file to acquire. Locations are described under this table."),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"checksum"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Checksum of the file to acquire"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"algorithm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Algorithm used to generate file checksum"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"MD5"),"...")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"fileSize"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Size in bytes of the file to acquire. This property will be automaticaly calculated if the file to acquire is directly accessible"),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataObject locations")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"locations": [\n     {\n        "url": "file:///regards/demo/data-1.dat"\n     },\n     {\n        "storage": "FTP Server",\n        "url": "ftp:/172.125.10.1/regards/demo/ftp/data-1.dat"\n     },\n   ],\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Possible values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"storage"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Storage location of the file. If this property is provided, then the file is already stored and REGARDS will only keep the reference to the file. There will be no move file operation. If the storage is a configured storage in REGARDS system so the file can be accessed, if not the file will be considered as offline."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Any text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"url"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Location of the file. If previous property ",(0,r.kt)("inlineCode",{parentName:"td"},"storage")," is not provided, then the file will be copyed from this url to the storages defined in the metadata bloc, so ensure this url must be an accessible ",(0,r.kt)("inlineCode",{parentName:"td"},"file:///")," url protocol from the Storage microservice. If a storage has been provided then this url can be any text that can be a known url for the given storage."),(0,r.kt)("td",{parentName:"tr",align:"center"},"any text")))),(0,r.kt)("p",null,"NOTE : To reference an online file accessible through HTTP protocol, you have have to use the reference system as the exemple bellow. With this reference the file will be known by REGARDS as an online referenced file and will be accessible without any needs to configure a storage location associated. With this type of reference, the file url provided by regards catalog will be the original provided url. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"locations": [\n     {\n        "storage": "web",\n        "url": "https://regardsoss.github.io/appendices/oais"\n     }\n   ],\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"representationInformation")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"representationInformation": {\n  "semantic": {},\n  "syntax": {\n    "name": "TEXT",\n    "mimeType": "text/plain"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Possible values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"semantic"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the mime type of the file"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"mimeType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mime type of the file to acquire"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"height"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Number in pixel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"width"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional property to define in pixel the height of an image. This property will be automaticaly fill if the file to acquire is an image and is directly accessible"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Number in pixel")))),(0,r.kt)("h4",{id:"preservation-description-information-pdi"},"Preservation Description Information (pdi)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"pdi": {\n  "contextInformation": {\n    "tags": ["KEYWORD"]\n  },\n  "provenanceInformation": { "history": [] },\n  "accessRightInformation": {}\n},\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Possible values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"tags"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"keywords to add to each feature"),(0,r.kt)("td",{parentName:"tr",align:"center"},"any text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"provenanceInformation"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Description of the origine and history of the feature"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"accessRightInformation"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Description of the feature access rights"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h4",{id:"regards-data-types"},"REGARDS Data types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"RAWDATA")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type to reference a data file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_SD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type to reference a small resolution image of the product preview")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_MD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type to reference a medium resolution image of the product preview")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"QUICKLOOK_HD")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type to reference a large resolution image of the product preview")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DOCUMENT")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type to reference a document associated to the product")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"THUMBNAIL")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type to reference a thumbnail of the product")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AIP")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type to reference the matadata file of the product")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DESCRIPTION")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type to reference a description of the product")))))}c.isMDXComponent=!0}}]);