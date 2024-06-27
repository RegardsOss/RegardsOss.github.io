"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[24036],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61013:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:"backend-amqp-publish-create-request",title:"Publish a creation request event",sidebar_label:"Publish product creation",slug:"/development/backend/services/fem/guides/amqp/publish-a-creation-request-event"},i=void 0,o={unversionedId:"development/backend/regards/fem/api-guides/amqp/backend-amqp-publish-create-request",id:"development/backend/regards/fem/api-guides/amqp/backend-amqp-publish-create-request",title:"Publish a creation request event",description:"AMQP API",source:"@site/docs/development/backend/regards/fem/api-guides/amqp/amqp-publish-create-product-request.md",sourceDirName:"development/backend/regards/fem/api-guides/amqp",slug:"/development/backend/services/fem/guides/amqp/publish-a-creation-request-event",permalink:"/docs/development/backend/services/fem/guides/amqp/publish-a-creation-request-event",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/api-guides/amqp/amqp-publish-create-product-request.md",tags:[],version:"current",frontMatter:{id:"backend-amqp-publish-create-request",title:"Publish a creation request event",sidebar_label:"Publish product creation",slug:"/development/backend/services/fem/guides/amqp/publish-a-creation-request-event"},sidebar:"dev",previous:{title:"Publish acknowledge",permalink:"/docs/development/backend/services/fem/guides/amqp/publish-acknowledge-request"},next:{title:"Publish deletion request",permalink:"/docs/development/backend/services/fem/guides/amqp/publish-a-deletion-request"}},s={},p=[{value:"AMQP API",id:"amqp-api",level:2},{value:"Feature creation request",id:"feature-creation-request",level:3},{value:"Example",id:"example",level:4},{value:"Feature creation request by file reference",id:"feature-creation-request-by-file-reference",level:3},{value:"Example",id:"example-1",level:4}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"amqp-api"},"AMQP API"),(0,n.kt)("h3",{id:"feature-creation-request"},"Feature creation request"),(0,n.kt)("p",null,"Request has to be published on this exchange : ",(0,n.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureCreationRequestEvent")),(0,n.kt)("p",null,"With following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metadata"),(0,n.kt)("td",{parentName:"tr",align:null},"(look at ",(0,n.kt)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"feature"),(0,n.kt)("td",{parentName:"tr",align:null},"(look at ",(0,n.kt)("a",{parentName:"td",href:"#payloadppt"},"description above"),")")))),(0,n.kt)("p",null,"And following headers:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,n.kt)("td",{parentName:"tr",align:null},"The tenant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.request.id"),(0,n.kt)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.request.date"),(0,n.kt)("td",{parentName:"tr",align:null},"ISO 8601 date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,n.kt)("td",{parentName:"tr",align:null},"String of max 128 characters long")))),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [\n            {\n                "locations": [\n                    {\n                        "storage": null,\n                        "url": "http://www.test.com/filename.xml"\n                    }\n                ],\n                "attributes": {\n                    "dataType": "RAWDATA",\n                    "mimeType": "application/xml",\n                    "filename": "filename",\n                    "filesize": 100,\n                    "algorithm": "MD5",\n                    "checksum": "checksum"\n                }\n            }\n        ],\n        "id": "MyId",\n        "geometry": {\n            "coordinates": [\n                10.0,\n                20.0\n            ],\n            "type": "Point",\n            "bbox": null,\n            "crs": null\n        },\n        "normalizedGeometry": null,\n        "properties": {\n            "data_type": "TYPE01",\n            "file_characterization": {\n                "valid": true\n            }\n        },\n        "type": "Feature"\n    }\n}\n')),(0,n.kt)("h3",{id:"feature-creation-request-by-file-reference"},"Feature creation request by file reference"),(0,n.kt)("p",null,"This API allows to generate feature by extracting metadata from the passed location."),(0,n.kt)("p",null,"Request has to be published on this exchange : ",(0,n.kt)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.featureprovider.domain.FeatureExtractionRequestEvent")),(0,n.kt)("p",null,"With following properties:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metadata"),(0,n.kt)("td",{parentName:"tr",align:null},"(look at ",(0,n.kt)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"Free JSON parameters to be used by related factory")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"factory"),(0,n.kt)("td",{parentName:"tr",align:null},"Plugin business identifier representing the feature factory to use")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Factory must have been configured beforehand.")),(0,n.kt)("p",null,"And following headers:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Header"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.tenant"),(0,n.kt)("td",{parentName:"tr",align:null},"The tenant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.request.id"),(0,n.kt)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.request.date"),(0,n.kt)("td",{parentName:"tr",align:null},"ISO 8601 date")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,n.kt)("td",{parentName:"tr",align:null},"String of max 128 characters long")))),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "factory": "{factory identifier}",\n    "parameters": {\n        "location":"my/file/location"\n    }\n}\n')))}m.isMDXComponent=!0}}]);