(window.webpackJsonp=window.webpackJsonp||[]).push([[1196],{1267:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(2704)),p={},c={unversionedId:"development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-response",id:"version-1.4.0/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-response",isDocsHomePage:!1,title:"http-response",description:"Response",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-response.md",slug:"/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testFindAllSpecificUser/http-response.md",version:"1.4.0"},i=[{value:"Response",id:"response",children:[]}],s={toc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"response"},"Response"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Code:")," 200 OK")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Headers:")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),"  "),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Content:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 1,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 27,\n      "owner" : "other.user2@regards.fr",\n      "label" : "order3",\n      "creationDate" : "2020-09-07T14:46:31.074Z",\n      "expirationDate" : "2020-09-10T14:46:31.074Z",\n      "percentCompleted" : 0,\n      "filesInErrorCount" : 0,\n      "availableFilesCount" : 0,\n      "status" : "PENDING",\n      "statusDate" : "2020-09-07T14:46:31.074Z",\n      "waitingForUser" : false,\n      "datasetTasks" : [ ]\n    },\n    "links" : [ ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/orders?page=0&size=20"\n  } ]\n}\n')))}l.isMDXComponent=!0},2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(t),u=r,m=b["".concat(p,".").concat(u)]||b[u]||d[u]||a;return t?o.a.createElement(m,c(c({ref:n},s),{},{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,p=new Array(a);p[0]=u;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var s=2;s<a;s++)p[s]=t[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);