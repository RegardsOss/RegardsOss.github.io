(window.webpackJsonp=window.webpackJsonp||[]).push([[1294],{1365:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return s}));var t=n(3),a=n(7),o=(n(0),n(2704)),c={},i={unversionedId:"development/backend/regards/fem/api/amqp/update-request",id:"version-1.4.0/development/backend/regards/fem/api/amqp/update-request",isDocsHomePage:!1,title:"update-request",description:"`properties",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/update-request.md",slug:"/development/backend/regards/fem/api/amqp/update-request",permalink:"/docs/1.4.0/development/backend/regards/fem/api/amqp/update-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/amqp/update-request.md",version:"1.4.0"},p=[],u={toc:p};function s(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-properties"},"# Headers\nregards.tenant=project1\nregards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563\nregards.request.owner=owner\nregards.request.date=2019-07-04T01:03:00\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n    "metadata": {\n        "storages": [],\n        "priority": "NORMAL"\n    },\n    "feature": {\n        "urn": "URN:FEATURE:DATA:tenant:87fdda0e-27d1-494f-a1c0-c57f2f0810f7:V1",\n        "entityType": "DATA",\n        "model": "FEATURE01",\n        "files": [],\n        "id": "MyId",\n        "geometry": null,\n        "normalizedGeometry": null,\n        "properties": {\n            "file_characterization": {\n                "invalidation_date": "2019-12-03T12:31:42.466Z",\n                "valid": false\n            }\n        },\n        "type": "Feature"\n    }\n}\n')))}s.isMDXComponent=!0},2704:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=t,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||o;return n?a.a.createElement(m,i(i({ref:r},u),{},{components:n})):a.a.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);