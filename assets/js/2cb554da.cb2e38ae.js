(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,O=b["".concat(p,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(O,c(c({ref:t},i),{},{components:n})):a.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},522:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(2704)),p={},c={unversionedId:"development/backend/regards/order/api/generated-snippets/OrderControllerIT/testGetOrder/http-response",id:"development/backend/regards/order/api/generated-snippets/OrderControllerIT/testGetOrder/http-response",isDocsHomePage:!1,title:"http-response",description:"Response",source:"@site/docs/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testGetOrder/http-response.md",slug:"/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testGetOrder/http-response",permalink:"/docs/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testGetOrder/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/order/api/generated-snippets/OrderControllerIT/testGetOrder/http-response.md",version:"current"},s=[{value:"Response",id:"response",children:[]}],i={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"response"},"Response"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Code:")," 200 OK")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Headers:")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin:*"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers:authorization, content-type, scope"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age:3600"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type:application/json;charset=UTF-8"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options:nosniff"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-XSS-Protection:1; mode=block"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control:no-cache, no-store, max-age=0, must-revalidate"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Pragma:no-cache"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expires:0"),Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Frame-Options:DENY"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Content:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "content" : {\n    "id" : 1,\n    "owner" : "default_user@regards.fr",\n    "label" : "order1",\n    "creationDate" : "2020-09-07T14:46:26.151Z",\n    "expirationDate" : "2020-09-10T14:46:26.151Z",\n    "percentCompleted" : 23,\n    "filesInErrorCount" : 0,\n    "availableFilesCount" : 2,\n    "status" : "RUNNING",\n    "statusDate" : "2020-09-07T14:46:26.271Z",\n    "waitingForUser" : false,\n    "datasetTasks" : [ {\n      "id" : 1,\n      "datasetLabel" : "DS1",\n      "objectsCount" : 4,\n      "filesCount" : 4,\n      "filesSize" : 52221122\n    }, {\n      "id" : 3,\n      "datasetLabel" : "DS2",\n      "objectsCount" : 10,\n      "filesCount" : 10,\n      "filesSize" : 52221122\n    } ]\n  },\n  "links" : [ ]\n}\n')))}l.isMDXComponent=!0}}]);