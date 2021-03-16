(window.webpackJsonp=window.webpackJsonp||[]).push([[2397],{2467:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(2701)),a={},p={unversionedId:"development/backend/regards/notifier/api/importexport/import-api",id:"development/backend/regards/notifier/api/importexport/import-api",isDocsHomePage:!1,title:"import-api",description:"Import configuration",source:"@site/docs/development/backend/regards/notifier/api/importexport/import-api.md",slug:"/development/backend/regards/notifier/api/importexport/import-api",permalink:"/fr/docs/development/backend/regards/notifier/api/importexport/import-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/notifier/api/importexport/import-api.md",version:"current"},c=[{value:"Import configuration",id:"import-configuration",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}],b={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"import-configuration"},"Import configuration"),Object(i.b)("h3",{id:"request"},"Request"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"URL")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"URL template")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Method")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"POST")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Headers")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Accept:application/json")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Data params")),Object(i.b)("p",null,"Import your configuration file in multipart request using name ",Object(i.b)("inlineCode",{parentName:"p"},"file"),"."),Object(i.b)("h3",{id:"response"},"Response"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Code:")," 201 CREATED")))}u.isMDXComponent=!0},2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=u(r),s=n,d=l["".concat(a,".").concat(s)]||l[s]||m[s]||i;return r?o.a.createElement(d,p(p({ref:t},b),{},{components:r})):o.a.createElement(d,p({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var b=2;b<i;b++)a[b]=r[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);