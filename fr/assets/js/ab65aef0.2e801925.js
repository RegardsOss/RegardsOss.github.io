(window.webpackJsonp=window.webpackJsonp||[]).push([[1739],{1811:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(2704)),i={},p={unversionedId:"development/backend/regards/fem/api/importexport/import-api",id:"version-1.4.0/development/backend/regards/fem/api/importexport/import-api",isDocsHomePage:!1,title:"import-api",description:"Import configuration",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/fem/api/importexport/import-api.md",slug:"/development/backend/regards/fem/api/importexport/import-api",permalink:"/fr/docs/1.4.0/development/backend/regards/fem/api/importexport/import-api",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/fem/api/importexport/import-api.md",version:"1.4.0"},c=[{value:"Import configuration",id:"import-configuration",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]}],u={toc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"import-configuration"},"Import configuration"),Object(a.b)("h3",{id:"request"},"Request"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"URL")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"URL template")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"/microservice/configuration")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Method")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"POST")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Headers")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Authorization:Bearer {token}"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type:multipart/form-data;charset=UTF-8; boundary=6o2knFse3p53ty9dmcQvWAIx1zInP11uCfbm"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Accept:application/json")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Data params")),Object(a.b)("p",null,"Import your configuration file in multipart request using name ",Object(a.b)("inlineCode",{parentName:"p"},"file"),"."),Object(a.b)("h3",{id:"response"},"Response"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Code:")," 201 CREATED")))}b.isMDXComponent=!0},2704:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=b(r),s=n,d=l["".concat(i,".").concat(s)]||l[s]||m[s]||a;return r?o.a.createElement(d,p(p({ref:t},u),{},{components:r})):o.a.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);