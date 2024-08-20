"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[13689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),k=n,u=s["".concat(d,".").concat(k)]||s[k]||c[k]||i;return a?r.createElement(u,l(l({ref:t},m),{},{components:a})):r.createElement(u,l({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},84850:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={id:"backend-fem-architecture",title:"RS-FEM architecture",sidebar_label:"Architecture",slug:"/development/backend/services/fem/architecture/"},l=void 0,o={unversionedId:"development/backend/regards/fem/backend-fem-architecture",id:"version-1.15/development/backend/regards/fem/backend-fem-architecture",title:"RS-FEM architecture",description:"Overview",source:"@site/versioned_docs/version-1.15/development/backend/regards/fem/architecture.md",sourceDirName:"development/backend/regards/fem",slug:"/development/backend/services/fem/architecture/",permalink:"/docs/development/backend/services/fem/architecture/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/backend/regards/fem/architecture.md",tags:[],version:"1.15",frontMatter:{id:"backend-fem-architecture",title:"RS-FEM architecture",sidebar_label:"Architecture",slug:"/development/backend/services/fem/architecture/"},sidebar:"dev",previous:{title:"Overview",permalink:"/docs/development/backend/services/fem/overview/"},next:{title:"Publish acknowledge",permalink:"/docs/development/backend/services/fem/guides/amqp/publish-acknowledge-request"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Request payload",id:"request-payload",level:2},{value:"Payload detailed properties",id:"payload-detailed-properties",level:3},{value:"Feature",id:"feature",level:4},{value:"Files",id:"files",level:4},{value:"Request metadata",id:"request-metadata",level:2},{value:"Metadata detailed properties",id:"metadata-detailed-properties",level:3}],m={toc:p},s="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(s,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Feature management")," microservice is a data repository in ",(0,n.kt)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Feature Management")," responsibilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Extract data references thanks to ","[IFeatureFactoryPlugins]",","),(0,n.kt)("li",{parentName:"ul"},"Create, patch or delete data references,"),(0,n.kt)("li",{parentName:"ul"},"Re-notify stakeholders of existing data references,"),(0,n.kt)("li",{parentName:"ul"},"Delegate the storage of files (if any) to ",(0,n.kt)("inlineCode",{parentName:"li"},"Storage Management"),".")),(0,n.kt)("p",null,"To edit this repository, a data producer has to send ",(0,n.kt)("strong",{parentName:"p"},"requests"),"."),(0,n.kt)("p",null,"At the moment, 2 API are available :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Messaging API (",(0,n.kt)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."),(0,n.kt)("li",{parentName:"ul"},"HTTP REST API allows to submit creation requests (as ",(0,n.kt)("inlineCode",{parentName:"li"},"POST")," HTTP requests), update requests (as ",(0,n.kt)("inlineCode",{parentName:"li"},"PATCH")," HTTP requests) or deletion requests (as ",(0,n.kt)("inlineCode",{parentName:"li"},"DELETE")," HTTP requests).")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Feature management architectural concepts",src:a(45252).Z,width:"1301",height:"696"})),(0,n.kt)("p",null,"Under the hood, those responsibilities are divided between two modules: ",(0,n.kt)("inlineCode",{parentName:"p"},"featureprovider")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"feature"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"featureprovider")," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",(0,n.kt)("inlineCode",{parentName:"p"},"feature")," module."),(0,n.kt)("p",null,"API are documented in detail below."),(0,n.kt)("h2",{id:"request-payload"},"Request payload"),(0,n.kt)("p",null,"Regardless of the API used, payload of each API is expected in ",(0,n.kt)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,n.kt)("p",null,"The basic structure is as follows :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A required ",(0,n.kt)("inlineCode",{parentName:"li"},"id"),","),(0,n.kt)("li",{parentName:"ul"},"A required ",(0,n.kt)("inlineCode",{parentName:"li"},"type")," with value ",(0,n.kt)("inlineCode",{parentName:"li"},"Feature"),","),(0,n.kt)("li",{parentName:"ul"},"An optional ",(0,n.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7946#section-3.1"},"geometry in GeoJSON format"),","),(0,n.kt)("li",{parentName:"ul"},"An optional set of ",(0,n.kt)("inlineCode",{parentName:"li"},"properties"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n')),(0,n.kt)("p",null,"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("inlineCode",{parentName:"li"},"urn")," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",(0,n.kt)("strong",{parentName:"li"},"expected only")," when updating a reference."),(0,n.kt)("li",{parentName:"ul"},"A required ",(0,n.kt)("inlineCode",{parentName:"li"},"model")," representing the name of the model defining the expected ",(0,n.kt)("inlineCode",{parentName:"li"},"properties")," field structure (and previously configured)."),(0,n.kt)("li",{parentName:"ul"},"A required ",(0,n.kt)("inlineCode",{parentName:"li"},"entityType")," defining the reference business type."),(0,n.kt)("li",{parentName:"ul"},"An optional ",(0,n.kt)("inlineCode",{parentName:"li"},"files")," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",(0,n.kt)("inlineCode",{parentName:"li"},"Storage Management"),").")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n')),(0,n.kt)("h3",{id:"payload-detailed-properties"},"Payload detailed properties"),(0,n.kt)("h4",{id:"feature"},"Feature"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"id"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Id from provider"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"urn"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Urn is only expected in update and deletion requests!")),(0,n.kt)("h4",{id:"files"},"Files"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"locations[].storage"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"locations[].url"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Url location"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"attributes.dataType"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"attributes.mimeType"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"MIME type"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"attributes.filename"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Filename"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"attributes.filesize"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"Number")),(0,n.kt)("td",{parentName:"tr",align:"center"},"File size"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"attributes.algorithm"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Checksum algorithm"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"attributes.checksum"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Checksum"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Algorithm & cheksum are required if data have to be stored by ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage Management"),".")),(0,n.kt)("a",{name:"metadatappt"}),(0,n.kt)("h2",{id:"request-metadata"},"Request metadata"),(0,n.kt)("p",null,"As the payload, regardless of the API used, metadata is often associated with a request."),(0,n.kt)("h3",{id:"metadata-detailed-properties"},"Metadata detailed properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"metadata.override"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Indicate wether the previous version should be deleted"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"metadata.session"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Arbitrary session name to classify data for human operators"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"metadata.sessionOwner"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Arbitrary session owner to classify data for human operators"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"metadata.storages"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"Array")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Target storages if there are files to store (may be empty!)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].pluginBusinessId"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Storage plugin identifier (previously configured in ",(0,n.kt)("inlineCode",{parentName:"td"},"Storage Management")),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].targetTypes"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"Array")),(0,n.kt)("td",{parentName:"tr",align:"center"},"List of data object types accepted by this storage location"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].storePath"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Directory in which to store the file"),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"metadata.priority"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"String")),(0,n.kt)("td",{parentName:"tr",align:"center"},"HIGH, NORMAL, LOW"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"override should only be specified with Extraction or Creation requests.")))}c.isMDXComponent=!0},45252:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/architectural_concepts_fem-43efa101a2a882b3944d168ebc32f897.png"}}]);