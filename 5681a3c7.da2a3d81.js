(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(t),m=r,f=l["".concat(i,".").concat(m)]||l[m]||u[m]||a;return t?o.a.createElement(f,s(s({ref:n},p),{},{components:t})):o.a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},936:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(7),a=(t(0),t(2699)),i={},s={unversionedId:"development/backend/regards/dam/api/generated-snippets/FragmentControllerIT/addGeoFragment/response-fields",id:"version-1.4.0/development/backend/regards/dam/api/generated-snippets/FragmentControllerIT/addGeoFragment/response-fields",isDocsHomePage:!1,title:"response-fields",description:"|Path|Type|Description|Constraints| |||||",source:"@site/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/FragmentControllerIT/addGeoFragment/response-fields.md",slug:"/development/backend/regards/dam/api/generated-snippets/FragmentControllerIT/addGeoFragment/response-fields",permalink:"/docs/1.4.0/development/backend/regards/dam/api/generated-snippets/FragmentControllerIT/addGeoFragment/response-fields",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/dam/api/generated-snippets/FragmentControllerIT/addGeoFragment/response-fields.md",version:"1.4.0"},c=[],p={toc:c};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"|Path|Type|Description|Constraints| |:--:|:--:|:---------:|:---------:|\n    |content.id| `Number` |Fragment identifier|Must be a whole number|\n    |content.name| `String` |Fragment Name|Must match the regular expression `[a-zA-Z_][0-9a-zA-Z_]*`, Must not be null, Size must be between 1 and 32 inclusive|\n    |content.description| `String` |Fragment description|Optional|\n    |content.version| `String` |Fragment Version|Size must be between 0 and 16 inclusive. Optional|\n")))}d.isMDXComponent=!0}}]);