(window.webpackJsonp=window.webpackJsonp||[]).push([[675],{2704:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return h}));var i=t(0),r=t.n(i);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var p=r.a.createContext({}),c=function(n){var e=r.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=c(n.components);return r.a.createElement(p.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},f=r.a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,l=n.parentName,p=a(n,["components","mdxType","originalType","parentName"]),u=c(t),f=i,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?r.a.createElement(h,s(s({ref:e},p),{},{components:t})):r.a.createElement(h,s({ref:e},p))}));function h(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var a in e)hasOwnProperty.call(e,a)&&(s[a]=e[a]);s.originalType=n,s.mdxType="string"==typeof n?n:i,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},749:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return l})),t.d(e,"metadata",(function(){return s})),t.d(e,"toc",(function(){return a})),t.d(e,"default",(function(){return c}));var i=t(3),r=t(7),o=(t(0),t(2704)),l={},s={unversionedId:"development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-response",id:"development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-response",isDocsHomePage:!1,title:"http-response",description:"Request",source:"@site/docs/development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-response.md",slug:"/development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-response",permalink:"/docs/development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/access/api/generated-snippets/UIPluginDefinitionControllerIT/testSavePlugin/http-response.md",version:"current"},a=[],p={toc:a};function c(n){var e=n.components,t=Object(r.a)(n,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"request"},"Request"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  **Headers:**\n\n  `Pragma:no-cache`\n  `X-XSS-Protection:1; mode=block`\n  `Expires:0`\n  `X-Frame-Options:DENY`\n  `X-Content-Type-Options:nosniff`\n  `Access-Control-Allow-Headers:authorization, content-type, scope`\n  `Access-Control-Max-Age:3600`\n  `Content-Type:application/json;charset=UTF-8`\n  `Access-Control-Allow-Origin:*`\n  `Cache-Control:no-cache, no-store, max-age=0, must-revalidate`\n  `Access-Control-Allow-Methods:POST, PUT, GET, OPTIONS, DELETE`\n\n  **Content:**\n")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'    \n{\n  "metadata" : {\n    "size" : 20,\n    "totalElements" : 11,\n    "totalPages" : 1,\n    "number" : 0\n  },\n  "content" : [ {\n    "content" : {\n      "id" : 1,\n      "name" : "string-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/string/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/1"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/1"\n    } ]\n  }, {\n    "content" : {\n      "id" : 2,\n      "name" : "full-text-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/full-text/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/2"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/2"\n    } ]\n  }, {\n    "content" : {\n      "id" : 3,\n      "name" : "numerical-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/numerical/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/3"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/3"\n    } ]\n  }, {\n    "content" : {\n      "id" : 4,\n      "name" : "two-numerical-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/two-numerical/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/4"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/4"\n    } ]\n  }, {\n    "content" : {\n      "id" : 5,\n      "name" : "temporal-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/temporal/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/5"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/5"\n    } ]\n  }, {\n    "content" : {\n      "id" : 6,\n      "name" : "two-temporal-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/two-temporal/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/6"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/6"\n    } ]\n  }, {\n    "content" : {\n      "id" : 7,\n      "name" : "enumerated-criteria",\n      "type" : "CRITERIA",\n      "sourcePath" : "/plugins/criterion/enumerated/plugin.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/7"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/7"\n    } ]\n  }, {\n    "content" : {\n      "id" : 61,\n      "name" : "PluginTest",\n      "type" : "CRITERIA",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/61"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/61"\n    } ]\n  }, {\n    "content" : {\n      "id" : 62,\n      "name" : "PluginTest",\n      "type" : "CRITERIA",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ ],\n      "entityTypes" : [ ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/62"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/62"\n    } ]\n  }, {\n    "content" : {\n      "id" : 63,\n      "name" : "PluginTest",\n      "type" : "SERVICE",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ "MANY", "ONE" ],\n      "entityTypes" : [ "COLLECTION", "DATA" ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/63"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/63"\n    } ]\n  }, {\n    "content" : {\n      "id" : 64,\n      "name" : "PluginTest",\n      "type" : "SERVICE",\n      "sourcePath" : "plugins/test/bundle.js",\n      "applicationModes" : [ "MANY", "ONE" ],\n      "entityTypes" : [ "COLLECTION", "DATA" ]\n    },\n    "links" : [ {\n      "rel" : "self",\n      "href" : "http://localhost:8080/uiplugins/definition/64"\n    }, {\n      "rel" : "update",\n      "href" : "http://localhost:8080/uiplugins/definition/64"\n    } ]\n  } ],\n  "links" : [ {\n    "rel" : "self",\n    "href" : "http://localhost:8080/uiplugins/definition?page=0&size=20&sort=id,asc"\n  } ]\n}\n')))}c.isMDXComponent=!0}}]);