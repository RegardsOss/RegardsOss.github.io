(window.webpackJsonp=window.webpackJsonp||[]).push([[2106],{2180:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),a=t(7),o=(t(0),t(2708)),p={},i={unversionedId:"development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginOneType/http-response",id:"version-1.4.0/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginOneType/http-response",isDocsHomePage:!1,title:"http-response",description:"* Code: 200 OK",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginOneType/http-response.md",slug:"/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginOneType/http-response",permalink:"/fr/docs/1.4.0/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginOneType/http-response",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/common/api/generated-snippets/PluginControllerIT/getPluginOneType/http-response.md",version:"1.4.0"},l=[],s={toc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Code:")," 200 OK"),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Headers:")),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"X-Content-Type-Options: nosniff"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-XSS-Protection: 1; mode=block"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Cache-Control: no-cache, no-store, max-age=0, must-revalidate"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Pragma: no-cache"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expires: 0"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Frame-Options: DENY"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin: *"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS, DELETE"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers: authorization, content-type, scope"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Access-Control-Max-Age: 3600"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Application-Context: Test application:default,test:-1"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Content-Type: application/json;charset=UTF-8")),Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Content:")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'\n[ {\n  "content" : {\n    "pluginClassName" : "fr.cnes.regards.framework.plugins.SamplePlugin",\n    "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],\n    "author" : "REGARDS Team",\n    "pluginId" : "aSamplePlugin",\n    "version" : "12345-6789-11",\n    "description" : "Sample plugin test",\n    "markdown" : "",\n    "url" : "https://github.com/RegardsOss",\n    "contact" : "regards@c-s.fr",\n    "owner" : "CSSI",\n    "licence" : "LGPLv3.0",\n    "parameters" : [ {\n      "name" : "suffix",\n      "label" : "SUFFIXE",\n      "description" : "string parameter",\n      "markdown" : "",\n      "type" : "java.lang.String",\n      "paramType" : "PRIMITIVE",\n      "defaultValue" : "Hello",\n      "optional" : false,\n      "parameters" : [ ],\n      "unconfigurable" : false\n    }, {\n      "name" : "coef",\n      "label" : "COEFF",\n      "description" : "int parameter",\n      "markdown" : "",\n      "type" : "java.lang.Integer",\n      "paramType" : "PRIMITIVE",\n      "defaultValue" : "-333",\n      "optional" : true,\n      "parameters" : [ ],\n      "unconfigurable" : false\n    }, {\n      "name" : "isActive",\n      "label" : "ACTIVE",\n      "description" : "boolean parameter",\n      "markdown" : "",\n      "type" : "java.lang.Boolean",\n      "paramType" : "PRIMITIVE",\n      "optional" : false,\n      "parameters" : [ ],\n      "unconfigurable" : false\n    } ]\n  },\n  "links" : [ ]\n}, {\n  "content" : {\n    "pluginClassName" : "fr.cnes.regards.framework.plugins.FakePlugin",\n    "interfaceNames" : [ "fr.cnes.regards.framework.plugins.ISamplePlugin" ],\n    "author" : "REGARDS Team",\n    "pluginId" : "aFakePlugin",\n    "version" : "12345-6789-11",\n    "description" : "Sample plugin test",\n    "markdown" : "",\n    "url" : "https://github.com/RegardsOss",\n    "contact" : "regards@c-s.fr",\n    "owner" : "CSSI",\n    "licence" : "LGPLv3.0",\n    "parameters" : [ {\n      "name" : "suffix",\n      "label" : "SUFFIXE",\n      "description" : "string parameter",\n      "markdown" : "",\n      "type" : "java.lang.String",\n      "paramType" : "PRIMITIVE",\n      "defaultValue" : "Hello",\n      "optional" : false,\n      "parameters" : [ ],\n      "unconfigurable" : false\n    }, {\n      "name" : "coef",\n      "label" : "COEFF",\n      "description" : "int parameter",\n      "markdown" : "",\n      "type" : "java.lang.Integer",\n      "paramType" : "PRIMITIVE",\n      "defaultValue" : "-333",\n      "optional" : true,\n      "parameters" : [ ],\n      "unconfigurable" : false\n    }, {\n      "name" : "isActive",\n      "label" : "ACTIVE",\n      "description" : "boolean parameter",\n      "markdown" : "",\n      "type" : "java.lang.Boolean",\n      "paramType" : "PRIMITIVE",\n      "optional" : false,\n      "parameters" : [ ],\n      "unconfigurable" : false\n    } ]\n  },\n  "links" : [ ]\n} ]\n')))}c.isMDXComponent=!0},2708:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),c=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(g,i(i({ref:n},s),{},{components:t})):a.a.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);