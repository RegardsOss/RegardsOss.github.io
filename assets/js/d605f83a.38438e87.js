"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[77102],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=o(a),g=n,m=u["".concat(i,".").concat(g)]||u[g]||c[g]||l;return a?r.createElement(m,p(p({ref:t},d),{},{components:a})):r.createElement(m,p({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,p[1]=s;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6082:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(58168),n=(a(96540),a(15680));const l={id:"backend-amqp-publish-patch-request",title:"Publish a patch request event",sidebar_label:"Publish patch request",slug:"/development/backend/services/fem/guides/amqp/publish-a-patch-request"},p=void 0,s={unversionedId:"development/backend/regards/fem/api-guides/amqp/backend-amqp-publish-patch-request",id:"development/backend/regards/fem/api-guides/amqp/backend-amqp-publish-patch-request",title:"Publish a patch request event",description:"Feature patch request",source:"@site/docs/development/backend/regards/fem/api-guides/amqp/amqp-publish-patch-product-request.md",sourceDirName:"development/backend/regards/fem/api-guides/amqp",slug:"/development/backend/services/fem/guides/amqp/publish-a-patch-request",permalink:"/docs/next/development/backend/services/fem/guides/amqp/publish-a-patch-request",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/api-guides/amqp/amqp-publish-patch-product-request.md",tags:[],version:"current",frontMatter:{id:"backend-amqp-publish-patch-request",title:"Publish a patch request event",sidebar_label:"Publish patch request",slug:"/development/backend/services/fem/guides/amqp/publish-a-patch-request"},sidebar:"dev",previous:{title:"Publish deletion request",permalink:"/docs/next/development/backend/services/fem/guides/amqp/publish-a-deletion-request"},next:{title:"Subscribe to requests responses",permalink:"/docs/next/development/backend/services/fem/guides/amqp/subscribe-to-requests-responses"}},i={},o=[{value:"Feature patch request",id:"feature-patch-request",level:3},{value:"Example",id:"example",level:4}],d={toc:o},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"feature-patch-request"},"Feature patch request"),(0,n.yg)("p",null,"Request has to be published on this exchange : ",(0,n.yg)("inlineCode",{parentName:"p"},"regards.broadcast.fr.cnes.regards.modules.feature.dto.event.in.FeatureUpdateRequestEvent")),(0,n.yg)("p",null,"With following properties:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"metadata.priority"),(0,n.yg)("td",{parentName:"tr",align:null},"(look at ",(0,n.yg)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"metadata.storages"),(0,n.yg)("td",{parentName:"tr",align:null},"(look at ",(0,n.yg)("a",{parentName:"td",href:"#metadatappt"},"description above"),")")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"feature"),(0,n.yg)("td",{parentName:"tr",align:null},"(look at ",(0,n.yg)("a",{parentName:"td",href:"#payloadppt"},"description above"),")")))),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Only properties to be updated can be passed on ... they will be merged with existing ones.")),(0,n.yg)("p",null,"And following headers:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Header"),(0,n.yg)("th",{parentName:"tr",align:null},"Value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"regards.tenant"),(0,n.yg)("td",{parentName:"tr",align:null},"The tenant")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"regards.request.id"),(0,n.yg)("td",{parentName:"tr",align:null},"String of max 36 characters long")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"regards.request.date"),(0,n.yg)("td",{parentName:"tr",align:null},"ISO 8601 date")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"regards.request.owner"),(0,n.yg)("td",{parentName:"tr",align:null},"String of max 128 characters long")))),(0,n.yg)("h4",{id:"example"},"Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "storages": [],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [],\n        "id": "MyId",\n        "geometry": null,\n        "normalizedGeometry": null,\n        "properties": {\n            "file_characterization": {\n                "invalidation_date": "2019-12-03T12:31:42.466Z",\n                "valid": false\n            }\n        },\n        "type": "Feature"\n    }\n}\n')))}c.isMDXComponent=!0}}]);