"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[69257],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,N=c["".concat(l,".").concat(k)]||c[k]||s[k]||i;return a?n.createElement(N,p(p({ref:t},d),{},{components:a})):n.createElement(N,p({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},37249:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p=["components"],o={id:"backend-fem-rest-api",title:"Feature Manager REST API",sidebar_label:"Feature Manager REST",slug:"/development/backend/services/fem/api/rest/"},l=void 0,m={unversionedId:"development/backend/regards/fem/api/backend-fem-rest-api",id:"version-1.6.0/development/backend/regards/fem/api/backend-fem-rest-api",title:"Feature Manager REST API",description:"{@import feature-management-intro.md}",source:"@site/versioned_docs/version-1.6.0/development/backend/regards/fem/api/feature-management-rest-api.md",sourceDirName:"development/backend/regards/fem/api",slug:"/development/backend/services/fem/api/rest/",permalink:"/docs/1.6.0/development/backend/services/fem/api/rest/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/development/backend/regards/fem/api/feature-management-rest-api.md",tags:[],version:"1.6.0",frontMatter:{id:"backend-fem-rest-api",title:"Feature Manager REST API",sidebar_label:"Feature Manager REST",slug:"/development/backend/services/fem/api/rest/"},sidebar:"version-1.6.0/dev",previous:{title:"Feature Manager configuration",permalink:"/docs/1.6.0/development/backend/services/fem/api/configuration/"},next:{title:"Feature Manager AMQP",permalink:"/docs/1.6.0/development/backend/services/fem/api/amqp/"}},d=[{value:"REST API",id:"rest-api",children:[{value:"Feature Creation request example",id:"feature-creation-request-example",children:[],level:3},{value:"Feature Patch request example",id:"feature-patch-request-example",children:[],level:3}],level:2}],s={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("h2",{parentName:"p"},"Overview"),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"Feature management")," microservice is a data repository in ",(0,i.kt)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"Feature Management")," reponsabilities:"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"Extract data references thanks to ","[IFeatureFactoryPlugins]",","),(0,i.kt)("li",{parentName:"ul"},"Create, patch or delete data references,"),(0,i.kt)("li",{parentName:"ul"},"Re-notify stakeholders of existing data references,"),(0,i.kt)("li",{parentName:"ul"},"Delegate the storage of files (if any) to ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage Management"),".")),(0,i.kt)("p",{parentName:"p"},"To edit this repository, a data producer has to send ",(0,i.kt)("strong",{parentName:"p"},"requests"),"."),(0,i.kt)("p",{parentName:"p"},"At the moment, 2 API are available :"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"Messaging API (",(0,i.kt)("a",{parentName:"li",href:"https://www.amqp.org/"},"AMQP"),") allows to publish creation, reference, patch, deletion and notification requests on specific exchanges."),(0,i.kt)("li",{parentName:"ul"},"HTTP REST API allows to submit creation requests (as ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," HTTP requests), update requests (as ",(0,i.kt)("inlineCode",{parentName:"li"},"PATCH")," HTTP requests) or deletion requests (as ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," HTTP requests).")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("img",{parentName:"p",src:"/schemas/feature_management/architectural_concepts_fem.png",alt:"Feature management architectural concepts"})),(0,i.kt)("p",{parentName:"p"},"Under the hood, those reponsabilities are divided between two modules: ",(0,i.kt)("inlineCode",{parentName:"p"},"featureprovider")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"feature"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"featureprovider")," is only responsible for handling data references extraction requests, that is extraction of information needed from physical files to create a data reference that is then handled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," module."),(0,i.kt)("p",{parentName:"p"},"API are documented in detail below."),(0,i.kt)("h2",{parentName:"p"},"Request payload"),(0,i.kt)("p",{parentName:"p"},"Regardless of the API used, payload of each API is expected in ",(0,i.kt)("a",{parentName:"p",href:"https://geojson.org/"},"GeoJSON format"),"."),(0,i.kt)("p",{parentName:"p"},"The basic structure is as follows :"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"A required ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),","),(0,i.kt)("li",{parentName:"ul"},"A required ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," with value ",(0,i.kt)("inlineCode",{parentName:"li"},"Feature"),","),(0,i.kt)("li",{parentName:"ul"},"An optional ",(0,i.kt)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7946#section-3.1"},"geometry in GeoJSON format"),","),(0,i.kt)("li",{parentName:"ul"},"An optional set of ",(0,i.kt)("inlineCode",{parentName:"li"},"properties"),".")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    }\n}\n')),(0,i.kt)("p",{parentName:"p"},"For the purposes of this microservice, GeoJSON structure is extended  with following properties :"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},"An ",(0,i.kt)("inlineCode",{parentName:"li"},"urn")," (uniform resource name as unique identifier) generated by the microservice when creating a new reference and ",(0,i.kt)("strong",{parentName:"li"},"expected only")," when updating a reference."),(0,i.kt)("li",{parentName:"ul"},"A required ",(0,i.kt)("inlineCode",{parentName:"li"},"model")," representing the name of the model defining the expected ",(0,i.kt)("inlineCode",{parentName:"li"},"properties")," field structure (and previously configured)."),(0,i.kt)("li",{parentName:"ul"},"A required ",(0,i.kt)("inlineCode",{parentName:"li"},"entityType")," defining the reference business type."),(0,i.kt)("li",{parentName:"ul"},"An optional ",(0,i.kt)("inlineCode",{parentName:"li"},"files")," property with a fixed structure that allows to store or reference physical data (service delegated to another microservice called ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage Management"),").")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "FeatureId",\n    "urn": "UniqueFeatureId",\n    "model": "RelatedModelName",\n    "entityType": "DATA",\n    "type": "Feature",\n    "geometry": {\n        "type": "Point",\n        "coordinates": [\n            125.6,\n            10.1\n        ]\n    },\n    "properties": {\n        "name": "Dinagat Islands"\n    },\n    "files": [\n        {\n            "locations": [\n                {\n                    "storage": "DISK",\n                    "url": "file://home/user/regards/file.zip"\n                }\n            ],\n            "attributes": {\n                "dataType": "RAWDATA",\n                "mimeType": "application/zip",\n                "filename": "file.zip",\n                "filesize": "8013",\n                "algorithm": "MD5",\n                "checksum": "4e188bd8a6288164c25c3728ce394927"\n            }\n        }\n    ]\n}\n')),(0,i.kt)("a",{name:"payloadppt"}),(0,i.kt)("h3",{parentName:"p"},"Payload detailed properties"),(0,i.kt)("h4",{parentName:"p"},"Feature"),(0,i.kt)("table",{parentName:"p"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"id"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Id from provider"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"urn"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Unique feature identifer based on provider identifier with TEST:REQUEST:2342"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("div",{parentName:"p",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Urn is only expected in update and deletion requests!"))),(0,i.kt)("h4",{parentName:"p"},"Files"),(0,i.kt)("table",{parentName:"p"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"locations[].storage"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Storage"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"locations[].url"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Url location"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes.dataType"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"RAWDATA, QUICKLOOK_SD, QUICKLOOK_MD, QUICKLOOK_HD, DOCUMENT, THUMBNAIL, DESCRIPTION"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes.mimeType"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"MIME type"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes.filename"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Filename"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes.filesize"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"center"},"File size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes.algorithm"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Checksum algorithm"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"attributes.checksum"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Checksum"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,i.kt)("div",{parentName:"p",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Algorithm & cheksum are required if data have to be stored by ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage Management"),"."))),(0,i.kt)("a",{name:"metadatappt"}),(0,i.kt)("h2",{parentName:"p"},"Request metadata"),(0,i.kt)("p",{parentName:"p"},"As the payload, regardless of the API used, metadata is often associated with a request. "),(0,i.kt)("h3",{parentName:"p"},"Metadata detailed properties"),(0,i.kt)("table",{parentName:"p"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Path"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Optional"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata.override"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Indicate wether the previous version should be deleted"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata.session"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Arbitrary session name to classify data for human operators"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata.sessionOwner"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Arbitrary session owner to classify data for human operators"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata.storages"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Array")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Target storages if there are files to store (may be empty!)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].pluginBusinessId"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Storage plugin identifier (previously configured in ",(0,i.kt)("inlineCode",{parentName:"td"},"Storage Management")),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].targetTypes"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Array")),(0,i.kt)("td",{parentName:"tr",align:"center"},"List of data object types accepted by this storage location"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata.storages[].storePath"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Directory in which to store the file"),(0,i.kt)("td",{parentName:"tr",align:"center"},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"metadata.priority"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"center"},"HIGH, NORMAL, LOW"),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("div",{parentName:"p",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"override should only be specified with Extraction or Creation requests.")))),(0,i.kt)("h2",{id:"rest-api"},"REST API"),(0,i.kt)("p",null,"For creation and update requests, REST API is expected a GeoJSON collection extended with specific metadata."),(0,i.kt)("p",null,"The structure is as follows :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Required ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata")," that apply to ",(0,i.kt)("strong",{parentName:"li"},"all features"),","),(0,i.kt)("li",{parentName:"ul"},"A required ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," with value ",(0,i.kt)("inlineCode",{parentName:"li"},"FeatureCollection"),","),(0,i.kt)("li",{parentName:"ul"},"Required ",(0,i.kt)("inlineCode",{parentName:"li"},"features")," containing a set of ",(0,i.kt)("a",{parentName:"li",href:"#payloadppt"},"GeoJson feature"),".")),(0,i.kt)("p",null,"Example of feature creation collection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "session": "session",\n        "sessionOwner": "owner",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "requestOwner": "owner",\n    "features": [{}, {}, {}],\n    "type": "FeatureCollection"\n}\n')),(0,i.kt)("p",null,"Example of feature update collection:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "features": [{}, {}, {}],\n    "type": "FeatureCollection"\n}\n')),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Session & session owner are not supported in update metadata!"))),(0,i.kt)("h3",{id:"feature-creation-request-example"},"Feature Creation request example"),(0,i.kt)("p",null,(0,i.kt)("h3",{parentName:"p"},"Request"),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"URL")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"/features")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"URL template")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"/features")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Method")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"POST")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Headers")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type:application/geo+json;charset=UTF-8"),"  ")),(0,i.kt)("p",null,(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Data params")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requestOwner" : "test",\n  "metadata" : {\n    "sessionOwner" : "owner",\n    "session" : "session",\n    "storages" : [ {\n      "pluginBusinessId" : "disk"\n    } ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : null,\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "history" : {\n      "createdBy" : "owner",\n      "updatedBy" : null,\n      "deletedBy" : null\n    },\n    "files" : [ {\n      "locations" : [ {\n        "storage" : null,\n        "url" : "http://www.test.com/filename.xml"\n      } ],\n      "attributes" : {\n        "dataType" : "RAWDATA",\n        "mimeType" : "application/xml",\n        "filename" : "filename",\n        "filesize" : 100,\n        "algorithm" : "MD5",\n        "checksum" : "checksum"\n      }\n    } ],\n    "last" : false,\n    "id" : "MyId",\n    "geometry" : {\n      "coordinates" : [ 10.0, 20.0 ],\n      "type" : "Point",\n      "bbox" : null,\n      "crs" : null\n    },\n    "normalizedGeometry" : null,\n    "properties" : {\n      "data_type" : "TYPE01",\n      "file_characterization" : {\n        "valid" : true\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n'))),(0,i.kt)("p",null,(0,i.kt)("h3",{parentName:"p"},"Response"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code:")," 201 Created")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Headers:")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type:application/hal+json"),"  "),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Content:")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "granted" : {\n    "MyId" : "d1b873d8-caeb-4380-b822-8728ec97ee73"\n  },\n  "denied" : {\n    "empty" : true\n  },\n  "messages" : [ ]\n}\n'))),(0,i.kt)("p",null,"API return maps of granted and denied requests :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Granted property maps feature id to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event."),(0,i.kt)("li",{parentName:"ul"},"Denied property maps feature id to a list of rejection causes.")),(0,i.kt)("h3",{id:"feature-patch-request-example"},"Feature Patch request example"),(0,i.kt)("p",null,(0,i.kt)("h3",{parentName:"p"},"Request"),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"URL")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"/features")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"URL template")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"/features")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Method")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Headers")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"Authorization:Bearer{token}"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type:application/geo+json;charset=UTF-8"),"  ")),(0,i.kt)("p",null,(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Data params")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "requestOwner" : "test",\n  "metadata" : {\n    "storages" : [ ],\n    "priority" : "NORMAL"\n  },\n  "features" : [ {\n    "urn" : "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1",\n    "entityType" : "DATA",\n    "model" : "FEATURE01",\n    "history" : {\n      "createdBy" : "owner",\n      "updatedBy" : null,\n      "deletedBy" : null\n    },\n    "files" : [ ],\n    "last" : false,\n    "id" : "MyId",\n    "geometry" : null,\n    "normalizedGeometry" : null,\n    "properties" : {\n      "file_characterization" : {\n        "invalidation_date" : "2021-09-16T20:06:25.906Z",\n        "valid" : false\n      }\n    },\n    "type" : "Feature"\n  } ],\n  "type" : "FeatureCollection"\n}\n'))),(0,i.kt)("p",null,(0,i.kt)("h3",{parentName:"p"},"Response"),(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Code:")," 201 Created")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Headers:")),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Pragma:no-cache"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Expires:0"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type:application/hal+json"),"  "),(0,i.kt)("p",{parentName:"p"},(0,i.kt)("strong",{parentName:"p"},"Content:")),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "granted" : {\n    "URN:FEATURE:DATA:tenant:ca4015e5-9c59-49ff-b35e-f30c6929f402:V1" : "65726bf9-a039-4f34-a6d2-620a601ace64"\n  },\n  "denied" : {\n    "empty" : true\n  },\n  "messages" : [ ]\n}\n'))),(0,i.kt)("p",null,"API return maps of granted and denied requests :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Granted property maps feature urn to its related request id and allows the producer to optionnaly monitor request lifecycle listening to request event."),(0,i.kt)("li",{parentName:"ul"},"Denied property maps feature urn to a list of rejection causes.")))}c.isMDXComponent=!0}}]);