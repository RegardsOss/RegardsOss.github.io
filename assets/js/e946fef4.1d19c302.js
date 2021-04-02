(window.webpackJsonp=window.webpackJsonp||[]).push([[2374],{2448:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(2708)),p={},c={unversionedId:"development/backend/regards/fem/api/importexport/export-api",id:"development/backend/regards/fem/api/importexport/export-api",isDocsHomePage:!1,title:"export-api",description:"Export configuration",source:"@site/docs/development/backend/regards/fem/api/importexport/export-api.md",slug:"/development/backend/regards/fem/api/importexport/export-api",permalink:"/docs/development/backend/regards/fem/api/importexport/export-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/fem/api/importexport/export-api.md",version:"current"},i=[{value:"Export configuration",id:"export-configuration",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}],b={toc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"export-configuration"},"Export configuration"),Object(a.b)("h3",{id:"request"},"Request"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"URL")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"URL template")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Method")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"GET")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Headers")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Accept:application/json")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Data params")),Object(a.b)("p",null,"None"),Object(a.b)("h3",{id:"response"},"Response"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Code:")," 200 OK")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Headers:")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type:application/json"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},'Content-Disposition:attachment; filename="config-Test application.json"'),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Content:")),Object(a.b)("p",null,"Template :"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "microservice": "{microservice name}",\n  "modules": [\n    {\n      "module": {\n        "id": "{module id}",\n        "name": "{module name}",\n        "description": "{module description}",\n        "version": "{module version}",\n        "author": "{module author}",\n        "legalOwner": "{module owner}",\n        "documentation": "{module docu url}"\n      },\n      "configuration": [\n        {\n          "key": "{fully qualified class name}",\n          "value": "{json}"\n        }\n      ]\n    }\n  ]\n}\n')))}l.isMDXComponent=!0},2708:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),l=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=l(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,d=m["".concat(p,".").concat(u)]||m[u]||s[u]||a;return t?o.a.createElement(d,c(c({ref:n},b),{},{components:t})):o.a.createElement(d,c({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var b=2;b<a;b++)p[b]=t[b];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);