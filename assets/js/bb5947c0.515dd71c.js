"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[33843],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,c=m["".concat(d,".").concat(k)]||m[k]||u[k]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1897:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"backend-fem-amqp-api",title:"Feature Manager AMQP API",sidebar_label:"Feature Manager AMQP",slug:"/development/backend/services/fem/api/amqp/"},l=void 0,o={unversionedId:"development/backend/regards/fem/api/backend-fem-amqp-api",id:"development/backend/regards/fem/api/backend-fem-amqp-api",title:"Feature Manager AMQP API",description:"Overview",source:"@site/docs/development/backend/regards/fem/api/feature-management-amqp-api.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/services/fem/api/amqp/",permalink:"/docs/development/backend/services/fem/api/amqp/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/api/feature-management-amqp-api.md",tags:[],version:"current",frontMatter:{id:"backend-fem-amqp-api",title:"Feature Manager AMQP API",sidebar_label:"Feature Manager AMQP",slug:"/development/backend/services/fem/api/amqp/"},sidebar:"dev",previous:{title:"Feature Manager REST",permalink:"/docs/development/backend/services/fem/api/rest/"},next:{title:"Feature Factory",permalink:"/docs/development/backend/services/fem/plugins/feature-factory/"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Request payload",id:"request-payload",level:2},{value:"Payload detailed properties",id:"payload-detailed-properties",level:3},{value:"Feature",id:"feature",level:4},{value:"Files",id:"files",level:4},{value:"Request metadata",id:"request-metadata",level:2},{value:"Metadata detailed properties",id:"metadata-detailed-properties",level:3},{value:"AMQP API",id:"amqp-api",level:2},{value:"Feature creation request",id:"feature-creation-request",level:3},{value:"Example",id:"example",level:4},{value:"Feature creation request by file reference",id:"feature-creation-request-by-file-reference",level:3},{value:"Example",id:"example-1",level:4},{value:"Feature patch request",id:"feature-patch-request",level:3},{value:"Example",id:"example-2",level:4},{value:"Feature deletion request",id:"feature-deletion-request",level:3},{value:"Example",id:"example-3",level:4},{value:"AMQP monitoring API...",id:"amqp-monitoring-api",level:2},{value:"Example of DENIED request",id:"example-of-denied-request",level:4},{value:"Example of GRANTED request",id:"example-of-granted-request",level:4},{value:"Example of SUCCESS request",id:"example-of-success-request",level:4},{value:"Example of ERROR request",id:"example-of-error-request",level:4},{value:"...For feature module",id:"for-feature-module",level:3},{value:"...For featureprovider module",id:"for-featureprovider-module",level:3}],s={toc:p},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Feature management")," microservice is a data repository in ",(0,r.kt)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Feature Management")," reponsabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extract data references thanks to ","[IFeatureFactoryPlugins]",","),(0,r.kt)("li",{parentName:"ul"},"Create, patch or delete data references,"),(0,r.kt)("li",{parentName:"ul"},"Re-notify stakeholders of existing data references,"),(0,r.kt)("li",{parentName:"ul"},"Delegate the storage of files (if any) to ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage Management"),".")),(0,r.kt)("p",null,"To edit this repository, a data producer has to send ",(0,r.kt)("strong",{parentName:"p"},"requests"),"."),(0,r.kt)("p",null,"At the moment, 2 API are available :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Messaging API (",(0,r.kt)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."),(0,r.kt)("li",{parentName:"ul"},"HTTP REST API allows to submit creation requests (as ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," HTTP requests), update requests (as ",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH")," HTTP requests) or deletion requests (as ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")," HTTP requests).")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Feature management architectural concepts",src:a(66216).Z,width:"1301",height:"696"})),(0,r.kt)("p",null,"Under the hood, those reponsabilities are divided between two modules: ",(0,r.kt)("inlineCode",{parentName:"p"},"featureprovider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"feature"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"featureprovider")," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," module."),(0,r.kt)("p",null,"API are documented in detail below."),(0,r.kt)("h2",{id:"request-payload"},"Request payload"),(0,r.kt)("p",null,"Regardless of the API used, payload of each API is expected in ",(0,r.kt)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,r.kt)("p",null,"The basic structure is as follows :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),","),(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," with value ",(0,r.kt)("inlineCode",{parentName:"li"},"Feature"),","),(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7946#section-3.1"},"geometry in GeoJSON format"),","),(0,r.kt)("li",{parentName:"ul"},"An optional set of ",(0,r.kt)("inlineCode",{parentName:"li"},"properties"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n')),(0,r.kt)("p",null,"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"urn")," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",(0,r.kt)("strong",{parentName:"li"},"expected only")," when updating a reference."),(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"model")," representing the name of the model defining the expected ",(0,r.kt)("inlineCode",{parentName:"li"},"properties")," field structure (and previously configured)."),(0,r.kt)("li",{parentName:"ul"},"A required ",(0,r.kt)("inlineCode",{parentName:"li"},"entityType")," defining the reference business type."),(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("inlineCode",{parentName:"li"},"files")," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage Management"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("a",{name:"payloadppt"}),(0,r.kt)("h3",{id:"payload-detailed-properties"},"Payload detailed properties"),(0,r.kt)("h4",{id:"feature"},"Feature"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Id from provider"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"urn"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Urn is only expected in update and deletion requests!")),(0,r.kt)("h4",{id:"files"},"Files"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"locations[].storage"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Storage"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"locations[].url"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Url location"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.dataType"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.mimeType"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"MIME type"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.filename"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Filename"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.filesize"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Number")),(0,r.kt)("td",{parentName:"tr",align:"center"},"File size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.algorithm"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Checksum algorithm"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"attributes.checksum"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Checksum"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Algorithm & cheksum are required if data have to be stored by ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage Management"),".")),(0,r.kt)("a",{name:"metadatappt"}),(0,r.kt)("h2",{id:"request-metadata"},"Request metadata"),(0,r.kt)("p",null,"As the payload, regardless of the API used, metadata is often associated with a request. "),(0,r.kt)("h3",{id:"metadata-detailed-properties"},"Metadata detailed properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.override"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Indicate wether the previous version should be deleted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.session"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Arbitrary session name to classify data for human operators"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.sessionOwner"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Arbitrary session owner to classify data for human operators"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.storages"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Target storages if there are files to store (may be empty!)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].pluginBusinessId"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Storage plugin identifier (previously configured in ",(0,r.kt)("inlineCode",{parentName:"td"},"Storage Management")),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].targetTypes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"Array")),(0,r.kt)("td",{parentName:"tr",align:"center"},"List of data object types accepted by this storage location"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].storePath"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Directory in which to store the file"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"metadata.priority"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"String")),(0,r.kt)("td",{parentName:"tr",align:"center"},"HIGH, NORMAL, LOW"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"override should only be specified with Extraction or Creation requests.")),(0,r.kt)("h2",{id:"amqp-api"},"AMQP API"),(0,r.kt)("h3",{id:"feature-creation-request"},"Feature creation request"),(0,r.kt)("p",null,"Request has to be published on this exchange : ",(0,r.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent")),(0,r.kt)("p",null,"With following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"(look at ",(0,r.kt)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feature"),(0,r.kt)("td",{parentName:"tr",align:null},"(look at ",(0,r.kt)("a",{parentName:"td",href:"#payloadppt"},"description above"),")")))),(0,r.kt)("p",null,"And following headers:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"The tenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.id"),(0,r.kt)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.date"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,r.kt)("td",{parentName:"tr",align:null},"String of max 128 characters long")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [\n            {\n                "locations": [\n                    {\n                        "storage": null,\n                        "url": "http://www.test.com/filename.xml"\n                    }\n                ],\n                "attributes": {\n                    "dataType": "RAWDATA",\n                    "mimeType": "application/xml",\n                    "filename": "filename",\n                    "filesize": 100,\n                    "algorithm": "MD5",\n                    "checksum": "checksum"\n                }\n            }\n        ],\n        "id": "MyId",\n        "geometry": {\n            "coordinates": [\n                10.0,\n                20.0\n            ],\n            "type": "Point",\n            "bbox": null,\n            "crs": null\n        },\n        "normalizedGeometry": null,\n        "properties": {\n            "data_type": "TYPE01",\n            "file_characterization": {\n                "valid": true\n            }\n        },\n        "type": "Feature"\n    }\n}\n')),(0,r.kt)("h3",{id:"feature-creation-request-by-file-reference"},"Feature creation request by file reference"),(0,r.kt)("p",null,"This API allows to generate feature by extracting metadata from the passed location."),(0,r.kt)("p",null,"Request has to be published on this exchange : ",(0,r.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent")),(0,r.kt)("p",null,"With following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"(look at ",(0,r.kt)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"Free JSON parameters to be used by related factory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"factory"),(0,r.kt)("td",{parentName:"tr",align:null},"Plugin business identifier representing the feature factory to use")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Factory must have been configured beforehand.")),(0,r.kt)("p",null,"And following headers:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"The tenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.id"),(0,r.kt)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.date"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,r.kt)("td",{parentName:"tr",align:null},"String of max 128 characters long")))),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "factory": "{factory identifier}",\n    "parameters": {\n        "location":"my/file/location"\n    }\n}\n')),(0,r.kt)("h3",{id:"feature-patch-request"},"Feature patch request"),(0,r.kt)("p",null,"Request has to be published on this exchange : ",(0,r.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent")),(0,r.kt)("p",null,"With following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.priority"),(0,r.kt)("td",{parentName:"tr",align:null},"(look at ",(0,r.kt)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata.storages"),(0,r.kt)("td",{parentName:"tr",align:null},"(look at ",(0,r.kt)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feature"),(0,r.kt)("td",{parentName:"tr",align:null},"(look at ",(0,r.kt)("a",{parentName:"td",href:"#payloadppt"},"description above"),")")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only properties to be updated can be passed on ... they will be merged with existing ones.")),(0,r.kt)("p",null,"And following headers:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"The tenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.id"),(0,r.kt)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.date"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,r.kt)("td",{parentName:"tr",align:null},"String of max 128 characters long")))),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "storages": [],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [],\n        "id": "MyId",\n        "geometry": null,\n        "normalizedGeometry": null,\n        "properties": {\n            "file_characterization": {\n                "invalidation_date": "2019-12-03T12:31:42.466Z",\n                "valid": false\n            }\n        },\n        "type": "Feature"\n    }\n}\n')),(0,r.kt)("h3",{id:"feature-deletion-request"},"Feature deletion request"),(0,r.kt)("p",null,"Request has to be published on this exchange : ",(0,r.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureDeletionRequestEvent")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},"(look at ",(0,r.kt)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"urn"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the feature")))),(0,r.kt)("p",null,"With following headers:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,r.kt)("td",{parentName:"tr",align:null},"The tenant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.id"),(0,r.kt)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.date"),(0,r.kt)("td",{parentName:"tr",align:null},"ISO 8601 date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,r.kt)("td",{parentName:"tr",align:null},"String of max 128 characters long")))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=78938463-023a-4488-b58c-52af3f7e9446\nregards.request.owner=owner\nregards.request.date=2020-03-17T12:24:05.995Z\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "priority": "NORMAL",\n    "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1"\n}\n')),(0,r.kt)("h2",{id:"amqp-monitoring-api"},"AMQP monitoring API..."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Feature manager")," microservice publishes AMQP messages to monitor request lifecycle."),(0,r.kt)("p",null,"Messages are published to two different exchanges because under the hood ",(0,r.kt)("inlineCode",{parentName:"p"},"Feature manager")," is in reality composed of two modules: ",(0,r.kt)("inlineCode",{parentName:"p"},"feature")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"featureprovider"),". Whatever the exchange to which those monitoring messages are comming from, they have the same structure, that is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"requestId")," (corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"regards.request.id")," header),"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"requestOwner")," (corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"regards.request.owner")," header),"),(0,r.kt)("li",{parentName:"ul"},"The related feature ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," (not specified for ",(0,r.kt)("inlineCode",{parentName:"li"},"EXTRACTION")," requests because feature is not yet created),"),(0,r.kt)("li",{parentName:"ul"},"The related feature ",(0,r.kt)("inlineCode",{parentName:"li"},"urn")," (not specified for ",(0,r.kt)("inlineCode",{parentName:"li"},"EXTRACTION")," requests because feature is not yet created),"),(0,r.kt)("li",{parentName:"ul"},"The request type (",(0,r.kt)("inlineCode",{parentName:"li"},"EXTRACTION"),",",(0,r.kt)("inlineCode",{parentName:"li"},"CREATION"),",",(0,r.kt)("inlineCode",{parentName:"li"},"PATCH"),",",(0,r.kt)("inlineCode",{parentName:"li"},"DELETION"),",",(0,r.kt)("inlineCode",{parentName:"li"},"NOTIFICATION"),",",(0,r.kt)("inlineCode",{parentName:"li"},"FILE_COPY"),",",(0,r.kt)("inlineCode",{parentName:"li"},"SAVE_METADATA"),")"),(0,r.kt)("li",{parentName:"ul"},"The state of the request (",(0,r.kt)("inlineCode",{parentName:"li"},"GRANTED"),",",(0,r.kt)("inlineCode",{parentName:"li"},"DENIED"),",",(0,r.kt)("inlineCode",{parentName:"li"},"ERROR")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"SUCCESS"),"),"),(0,r.kt)("li",{parentName:"ul"},"A list of ",(0,r.kt)("inlineCode",{parentName:"li"},"errors")," if any.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To receive these messages, your have to subscribe to this exchange.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"EXTRACTION")," process does not create features. So if you want to know the created feature id or urn, you have to listen to responses from the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATION")," process which has the same ",(0,r.kt)("inlineCode",{parentName:"p"},"requestId")," than the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTRACTION")," request.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If AMQP virtual host mode is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"SINGLE"),", this exchange will receive all messages of all tenants! So the receiver may have to filter them according to the tenant he wishes to manage.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Requests without ",(0,r.kt)("inlineCode",{parentName:"p"},"requestId")," can be routed to AMQP Dead Letter Queue (DLQ) so no response will be published. However, a notification is sent to the administrators of the project in order to tell them to inspect DLQ.")),(0,r.kt)("h4",{id:"example-of-denied-request"},"Example of DENIED request"),(0,r.kt)("p",null,"|:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "requestId": "{requestId}",\n    "requestOwner": "{requestOwner}",\n    "id": "{featureId}",\n    "type": "{requestType}",\n    "state": "DENIED",\n    "errors": ["error1", "error2"]\n}\n')),(0,r.kt)("h4",{id:"example-of-granted-request"},"Example of GRANTED request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "requestId": "{requestId}",\n    "requestOwner": "{requestOwner}",\n    "id": "{featureId}",\n    "type": "{requestType}",\n    "state": "GRANTED"\n}\n')),(0,r.kt)("h4",{id:"example-of-success-request"},"Example of SUCCESS request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "requestId": "{requestId}",\n    "requestOwner": "{requestOwner}",\n    "id": "{featureId}",\n    "urn": "{featureGeneratedUrn}",\n    "type": "{requestType}",\n    "state": "SUCCESS"\n}\n')),(0,r.kt)("h4",{id:"example-of-error-request"},"Example of ERROR request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "requestId": "{requestId}",\n    "requestOwner": "{requestOwner}",\n    "id": "{featureId}",\n    "urn": "{featureGeneratedUrn}",\n    "type": "{requestType}",\n    "state": "ERROR",\n    "errors": ["error1", "error2"]\n}\n')),(0,r.kt)("h3",{id:"for-feature-module"},"...For feature module"),(0,r.kt)("p",null,"Messages are published on this exchange : ",(0,r.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent")),(0,r.kt)("h3",{id:"for-featureprovider-module"},"...For featureprovider module"),(0,r.kt)("p",null,"Messages are published on this exchange : ",(0,r.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionResponseEvent")),(0,r.kt)("p",null,"In other words, it means that to migrate from ",(0,r.kt)("strong",{parentName:"p"},"V1.3.x")," to ",(0,r.kt)("strong",{parentName:"p"},"V1.4.0"),", you need to change the exchange to which you subscribe to receive extraction monitoring messages. Or you might be able to configure your AMQP broker to automatically redirect messages from this exchange to the old one (",(0,r.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.out.FeatureRequestEvent"),")."))}u.isMDXComponent=!0},66216:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/architectural_concepts_fem-43efa101a2a882b3944d168ebc32f897.png"}}]);