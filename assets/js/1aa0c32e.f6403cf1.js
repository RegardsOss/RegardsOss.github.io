"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10242],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},38508:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={},s=void 0,p={unversionedId:"development/backend/regards/fem/api/amqp/creation-request",id:"development/backend/regards/fem/api/amqp/creation-request",isDocsHomePage:!1,title:"creation-request",description:"`properties",source:"@site/docs/development/backend/regards/fem/api/amqp/creation-request.md",sourceDirName:"development/backend/regards/fem/api/amqp",slug:"/development/backend/regards/fem/api/amqp/creation-request",permalink:"/docs/development/backend/regards/fem/api/amqp/creation-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/api/amqp/creation-request.md",version:"current",frontMatter:{}},u=[],l={toc:u};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "sessionOwner": "owner",\n        "session": "session",\n        "storages": [\n            {\n                "pluginBusinessId": "disk"\n            }\n        ],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [\n            {\n                "locations": [\n                    {\n                        "storage": null,\n                        "url": "http://www.test.com/filename.xml"\n                    }\n                ],\n                "attributes": {\n                    "dataType": "RAWDATA",\n                    "mimeType": "application/xml",\n                    "filename": "filename",\n                    "filesize": 100,\n                    "algorithm": "MD5",\n                    "checksum": "checksum"\n                }\n            }\n        ],\n        "id": "MyId",\n        "geometry": {\n            "coordinates": [\n                10.0,\n                20.0\n            ],\n            "type": "Point",\n            "bbox": null,\n            "crs": null\n        },\n        "normalizedGeometry": null,\n        "properties": {\n            "data_type": "TYPE01",\n            "file_characterization": {\n                "valid": true\n            }\n        },\n        "type": "Feature"\n    }\n}\n')))}m.isMDXComponent=!0}}]);