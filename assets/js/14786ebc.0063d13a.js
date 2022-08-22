"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[69257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(a),c=r,N=k["".concat(l,".").concat(c)]||k[c]||d[c]||p;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<p;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},37249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const p={id:"backend-fem-rest-api",title:"Feature Manager REST API",sidebar_label:"Feature Manager REST",slug:"/development/backend/services/fem/api/rest/"},i=void 0,o={unversionedId:"development/backend/regards/fem/api/backend-fem-rest-api",id:"version-1.6.0/development/backend/regards/fem/api/backend-fem-rest-api",title:"Feature Manager REST API",description:"{@import feature-management-intro.md}",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/fem/api/feature-management-rest-api.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/services/fem/api/rest/",permalink:"/docs/1.6.0/development/backend/services/fem/api/rest/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/fem/api/feature-management-rest-api.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-fem-rest-api",title:"Feature Manager REST API",sidebar_label:"Feature Manager REST",slug:"/development/backend/services/fem/api/rest/"},sidebar:"version-1.6.0/dev",previous:{title:"Feature Manager configuration",permalink:"/docs/1.6.0/development/backend/services/fem/api/configuration/"},next:{title:"Feature Manager AMQP",permalink:"/docs/1.6.0/development/backend/services/fem/api/amqp/"}},l={},m=[{value:"REST API",id:"rest-api",level:2},{value:"Feature Creation request example",id:"feature-creation-request-example",level:3},{value:"Feature Patch request example",id:"feature-patch-request-example",level:3}],s={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("h2",{parentName:"p"},"Overview"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Feature management")," microservice is a data repository in ",(0,r.kt)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Feature Management")," reponsabilities:"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},"Extract data references thanks to ","[IFeatureFactoryPlugins]",","),(0,r.kt)("li",{parentName:"ul"},"Create, patch or delete data references,"),(0,r.kt)("li",{parentName:"ul"},"Re-notify stakeholders of existing data references,"),(0,r.kt)("li",{parentName:"ul"},"Delegate the storage of files (if any) to ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage Management"),".")),(0,r.kt)("p",{parentName:"p"},"To edit this repository, a data producer has to send ",(0,r.kt)("strong",{parentName:"p"},"requests"),"."),(0,r.kt)("p",{parentName:"p"},"At the moment, 2 API are available :"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},"Messaging API (",(0,r.kt)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."),(0,r.kt)("li",{parentName:"ul"},"HTTP REST API allows to submit creation requests (as ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," HTTP requests), update requests (as ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH")," HTTP requests) or deletion requests (as ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," HTTP requests).")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("img",{parentName:"p",src:"/schemas/feature_management/architectural_concepts_fem.png",alt:"Feature management architectural concepts"})),(0,r.kt)("p",{parentName:"p"},"Under the hood, those reponsabilities are divided between two modules: ",(0,r.kt)("inlineCode",{parentName:"p"},"featureprovider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"feature"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"featureprovider")," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," module."),(0,r.kt)("p",{parentName:"p"},"API are documented in detail below."),(0,r.kt)("h2",{parentName:"p"},"Request payload"),(0,r.kt)("p",{parentName:"p"},"Regardless of the API used, payload of each API is expected in ",(0,r.kt)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,r.kt)("p",{parentName:"p"},"The basic structure is as follows :"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),","),(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," with value ",(0,r.kt)("inlineCode",{parentName:"li"},"Feature"),","),(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7946#section-3.1"},"geometry in GeoJSON format"),","),(0,r.kt)("li",{parentName:"ul"},"An optional set of ",(0,r.kt)("inlineCode",{parentName:"li"},"properties"),".")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n')),(0,r.kt)("p",{parentName:"p"},"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"urn")," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",(0,r.kt)("strong",{parentName:"li"},"expected only")," when updating a reference."),(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"model")," representing the name of the model defining the expected ",(0,r.kt)("inlineCode",{parentName:"li"},"properties")," field structure (and previously configured)."),(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"entityType")," defining the reference business type."),(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("inlineCode",{parentName:"li"},"files")," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage Management"),").")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("a",{name:"payloadppt"}),(0,r.kt)("h3",{parentName:"p"},"Payload detailed properties"),(0,r.kt)("h4",{parentName:"p"},"Feature"),(0,r.kt)("table",{parentName:"p"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Id from provider"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"urn"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("admonition",{parentName:"p",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Urn is only expected in update and deletion requests!")),(0,r.kt)("h4",{parentName:"p"},"Files"),(0,r.kt)("table",{parentName:"p"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"locations[].storage"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Storage"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"locations[].url"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Url location"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.dataType"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.mimeType"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"MIME type"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.filename"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Filename"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.filesize"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:"center"},"File size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.algorithm"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Checksum algorithm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.checksum"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Checksum"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,r.kt)("admonition",{parentName:"p",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Algorithm & cheksum are required if data have to be stored by ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage Management"),".")),(0,r.kt)("a",{name:"metadatappt"}),(0,r.kt)("h2",{parentName:"p"},"Request metadata"),(0,r.kt)("p",{parentName:"p"},"As the payload, regardless of the API used, metadata is often associated with a request. "),(0,r.kt)("h3",{parentName:"p"},"Metadata detailed properties"),(0,r.kt)("table",{parentName:"p"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.override"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Indicate wether the previous version should be deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.session"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Arbitrary session name to classify data for human operators"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.sessionOwner"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Arbitrary session owner to classify data for human operators"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.storages"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Target storages if there are files to store (may be empty!)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].pluginBusinessId"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Storage plugin identifier (previously configured in ",(0,r.kt)("inlineCode",{parentName:"td"},"Storage Management")),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].targetTypes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List of data object types accepted by this storage location"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].storePath"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Directory in which to store the file"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.priority"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"HIGH, NORMAL, LOW"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("admonition",{parentName:"p",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"override should only be specified with Extraction or Creation requests."))),(0,r.kt)("h2",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,"For creation and update requests, REST API is expected a GeoJSON collection extended with specific metadata."),(0,r.kt)("p",null,"The structure is as follows :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Required ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata")," that apply to ",(0,r.kt)("strong",{parentName:"li"},"all features"),","),(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," with value ",(0,r.kt)("inlineCode",{parentName:"li"},"FeatureCollection"),","),(0,r.kt)("li",{parentName:"ul"},"Required ",(0,r.kt)("inlineCode",{parentName:"li"},"features")," containing a set of ",(0,r.kt)("a",{parentName:"li",href:"#payloadppt"},"GeoJson feature"),".")),(0,r.kt)("p",null,"Example of feature creation collection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "session": "session",\n        "sessionOwner": "owner",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "requestOwner": "owner",\n    "features": [{}, {}, {}],\n    "type": "FeatureCollection"\n}\n')),(0,r.kt)("p",null,"Example of feature update collection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "features": [{}, {}, {}],\n    "type": "FeatureCollection"\n}\n')),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Session & session owner are not supported in update metadata!")),(0,r.kt)("h3",{id:"feature-creation-request-example"},"Feature Creation request example"),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Request"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/features")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL template")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/features")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"POST")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/geo+json;charset=UTF-8"),"  ")),(0,r.kt)("p",null,(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Data params")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requestOwner" : "test",\n  "metadata" : {\n    "sessionOwner" : "owner",\n    "session" : "session",\n    "storages" : [ {\n      "pluginBusinessId" : "disk"\n    } ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : null,\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "history" : {\n      "createdBy" : "owner",\n      "updatedBy" : null,\n      "deletedBy" : null\n    },\n    "files" : [ {\n      "locations" : [ {\n        "storage" : null,\n        "url" : "http://www.test.com/filename.xml"\n      } ],\n      "attributes" : {\n        "dataType" : "RAWDATA",\n        "mimeType" : "application/xml",\n        "filename" : "filename",\n        "filesize" : 100,\n        "algorithm" : "MD5",\n        "checksum" : "checksum"\n      }\n    } ],\n    "last" : false,\n    "id" : "MyId",\n    "geometry" : {\n      "coordinates" : [ 10.0, 20.0 ],\n      "type" : "Point",\n      "bbox" : null,\n      "crs" : null\n    },\n    "normalizedGeometry" : null,\n    "properties" : {\n      "data_type" : "TYPE01",\n      "file_characterization" : {\n        "valid" : true\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 201 Created")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/hal+json"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "granted" : {\n    "MyId" : "d1b873d8-caeb-4380-b822-8728ec97ee73"\n  },\n  "denied" : {\n    "empty" : true\n  },\n  "messages" : [ ]\n}\n'))),(0,r.kt)("p",null,"API return maps of granted and denied requests :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Granted property maps feature id to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event."),(0,r.kt)("li",{parentName:"ul"},"Denied property maps feature id to a list of rejection causes.")),(0,r.kt)("h3",{id:"feature-patch-request-example"},"Feature Patch request example"),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Request"),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/features")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"URL template")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"/features")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Method")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/geo+json;charset=UTF-8"),"  ")),(0,r.kt)("p",null,(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Data params")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requestOwner" : "test",\n  "metadata" : {\n    "storages" : [ ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1",\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "history" : {\n      "createdBy" : "owner",\n      "updatedBy" : null,\n      "deletedBy" : null\n    },\n    "files" : [ ],\n    "last" : false,\n    "id" : "MyId",\n    "geometry" : null,\n    "normalizedGeometry" : null,\n    "properties" : {\n      "file_characterization" : {\n        "invalidation_date" : "2021-09-16T20:06:25.906Z",\n        "valid" : false\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("h3",{parentName:"p"},"Response"),(0,r.kt)("ul",{parentName:"p"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code:")," 201 Created")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Headers:")),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type:application/hal+json"),"  "),(0,r.kt)("p",{parentName:"p"},(0,r.kt)("strong",{parentName:"p"},"Content:")),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "granted" : {\n    "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1" : "65726bf9-a039-4f34-a6d2-620a601ace64"\n  },\n  "denied" : {\n    "empty" : true\n  },\n  "messages" : [ ]\n}\n'))),(0,r.kt)("p",null,"API return maps of granted and denied requests :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Granted property maps feature urn to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event."),(0,r.kt)("li",{parentName:"ul"},"Denied property maps feature urn to a list of rejection causes.")))}d.isMDXComponent=!0}}]);