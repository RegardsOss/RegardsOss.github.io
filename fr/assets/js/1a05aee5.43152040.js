(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(t),u=r,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||a;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},364:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(2704)),p={},i={unversionedId:"development/backend/regards/order/api/generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-response",id:"version-1.4.0/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-response",isDocsHomePage:!1,title:"http-response",description:"Response",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-response.md",slug:"/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testPublicDownloadMetalinkFile/http-response.md",version:"1.4.0"},c=[{value:"Response",id:"response",children:[]}],l={toc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"response"},"Response"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Code:")," 200 OK")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Headers:")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Content-Disposition:attachment;filename=order_22_2020-09-07T14:46:30.760Z.metalink"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type:application/metalink+xml"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),"  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Content:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"    None\n")))}s.isMDXComponent=!0}}]);