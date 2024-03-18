"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[41352],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),y=d(a),s=r,c=y["".concat(o,".").concat(s)]||y[s]||m[s]||i;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[y]="string"==typeof e?e:r,l[1]=g;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},14625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const i={},l=void 0,g={unversionedId:"development/backend/regards/fem/api/feature-management-intro",id:"version-1.11.0/development/backend/regards/fem/api/feature-management-intro",title:"feature-management-intro",description:"Overview",source:"@site/versioned_docs/version-1.11.0/development/backend/regards/fem/api/feature-management-intro.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/regards/fem/api/feature-management-intro",permalink:"/docs/1.11.0/development/backend/regards/fem/api/feature-management-intro",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/regards/fem/api/feature-management-intro.md",tags:[],version:"1.11.0",frontMatter:{}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Request payload",id:"request-payload",level:2},{value:"Payload detailed properties",id:"payload-detailed-properties",level:3},{value:"Feature",id:"feature",level:4},{value:"Files",id:"files",level:4},{value:"Request metadata",id:"request-metadata",level:2},{value:"Metadata detailed properties",id:"metadata-detailed-properties",level:3}],p={toc:d},y="wrapper";function m(e){let{components:t,...i}=e;return(0,r.yg)(y,(0,n.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Feature management")," microservice is a data repository in ",(0,r.yg)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Feature Management")," reponsabilities:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Extract data references thanks to ","[IFeatureFactoryPlugins]",","),(0,r.yg)("li",{parentName:"ul"},"Create, patch or delete data references,"),(0,r.yg)("li",{parentName:"ul"},"Re-notify stakeholders of existing data references,"),(0,r.yg)("li",{parentName:"ul"},"Delegate the storage of files (if any) to ",(0,r.yg)("inlineCode",{parentName:"li"},"Storage Management"),".")),(0,r.yg)("p",null,"To edit this repository, a data producer has to send ",(0,r.yg)("strong",{parentName:"p"},"requests"),"."),(0,r.yg)("p",null,"At the moment, 2 API are available :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Messaging API (",(0,r.yg)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."),(0,r.yg)("li",{parentName:"ul"},"HTTP REST API allows to submit creation requests (as ",(0,r.yg)("inlineCode",{parentName:"li"},"POST")," HTTP requests), update requests (as ",(0,r.yg)("inlineCode",{parentName:"li"},"PATCH")," HTTP requests) or deletion requests (as ",(0,r.yg)("inlineCode",{parentName:"li"},"DELETE")," HTTP requests).")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Feature management architectural concepts",src:a(84709).A,width:"1301",height:"696"})),(0,r.yg)("p",null,"Under the hood, those reponsabilities are divided between two modules: ",(0,r.yg)("inlineCode",{parentName:"p"},"featureprovider")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"feature"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"featureprovider")," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",(0,r.yg)("inlineCode",{parentName:"p"},"feature")," module."),(0,r.yg)("p",null,"API are documented in detail below."),(0,r.yg)("h2",{id:"request-payload"},"Request payload"),(0,r.yg)("p",null,"Regardless of the API used, payload of each API is expected in ",(0,r.yg)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,r.yg)("p",null,"The basic structure is as follows :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A required ",(0,r.yg)("inlineCode",{parentName:"li"},"id"),","),(0,r.yg)("li",{parentName:"ul"},"A required ",(0,r.yg)("inlineCode",{parentName:"li"},"type")," with value ",(0,r.yg)("inlineCode",{parentName:"li"},"Feature"),","),(0,r.yg)("li",{parentName:"ul"},"An optional ",(0,r.yg)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7946#section-3.1"},"geometry in GeoJSON format"),","),(0,r.yg)("li",{parentName:"ul"},"An optional set of ",(0,r.yg)("inlineCode",{parentName:"li"},"properties"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n')),(0,r.yg)("p",null,"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"An ",(0,r.yg)("inlineCode",{parentName:"li"},"urn")," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",(0,r.yg)("strong",{parentName:"li"},"expected only")," when updating a reference."),(0,r.yg)("li",{parentName:"ul"},"A required ",(0,r.yg)("inlineCode",{parentName:"li"},"model")," representing the name of the model defining the expected ",(0,r.yg)("inlineCode",{parentName:"li"},"properties")," field structure (and previously configured)."),(0,r.yg)("li",{parentName:"ul"},"A required ",(0,r.yg)("inlineCode",{parentName:"li"},"entityType")," defining the reference business type."),(0,r.yg)("li",{parentName:"ul"},"An optional ",(0,r.yg)("inlineCode",{parentName:"li"},"files")," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",(0,r.yg)("inlineCode",{parentName:"li"},"Storage Management"),").")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n')),(0,r.yg)("a",{name:"payloadppt"}),(0,r.yg)("h3",{id:"payload-detailed-properties"},"Payload detailed properties"),(0,r.yg)("h4",{id:"feature"},"Feature"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Path"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"id"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Id from provider"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"urn"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Urn is only expected in update and deletion requests!")),(0,r.yg)("h4",{id:"files"},"Files"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Path"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"locations[].storage"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Storage"),(0,r.yg)("td",{parentName:"tr",align:"center"},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"locations[].url"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Url location"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"attributes.dataType"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"attributes.mimeType"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"MIME type"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"attributes.filename"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Filename"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"attributes.filesize"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"Number")),(0,r.yg)("td",{parentName:"tr",align:"center"},"File size"),(0,r.yg)("td",{parentName:"tr",align:"center"},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"attributes.algorithm"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Checksum algorithm"),(0,r.yg)("td",{parentName:"tr",align:"center"},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"attributes.checksum"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Checksum"),(0,r.yg)("td",{parentName:"tr",align:"center"},"true")))),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Algorithm & cheksum are required if data have to be stored by ",(0,r.yg)("inlineCode",{parentName:"p"},"Storage Management"),".")),(0,r.yg)("a",{name:"metadatappt"}),(0,r.yg)("h2",{id:"request-metadata"},"Request metadata"),(0,r.yg)("p",null,"As the payload, regardless of the API used, metadata is often associated with a request. "),(0,r.yg)("h3",{id:"metadata-detailed-properties"},"Metadata detailed properties"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Path"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata.override"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"Boolean")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Indicate wether the previous version should be deleted"),(0,r.yg)("td",{parentName:"tr",align:"center"},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata.session"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Arbitrary session name to classify data for human operators"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata.sessionOwner"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Arbitrary session owner to classify data for human operators"),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata.storages"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"Array")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Target storages if there are files to store (may be empty!)"),(0,r.yg)("td",{parentName:"tr",align:"center"},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata.storages[].pluginBusinessId"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Storage plugin identifier (previously configured in ",(0,r.yg)("inlineCode",{parentName:"td"},"Storage Management")),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata.storages[].targetTypes"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"Array")),(0,r.yg)("td",{parentName:"tr",align:"center"},"List of data object types accepted by this storage location"),(0,r.yg)("td",{parentName:"tr",align:"center"},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata.storages[].storePath"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"Directory in which to store the file"),(0,r.yg)("td",{parentName:"tr",align:"center"},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"metadata.priority"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"String")),(0,r.yg)("td",{parentName:"tr",align:"center"},"HIGH, NORMAL, LOW"),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"override should only be specified with Extraction or Creation requests.")))}m.isMDXComponent=!0},84709:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/architectural_concepts_fem-43efa101a2a882b3944d168ebc32f897.png"}}]);