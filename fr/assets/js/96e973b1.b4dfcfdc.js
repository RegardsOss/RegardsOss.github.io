(window.webpackJsonp=window.webpackJsonp||[]).push([[1545],{1617:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(2704)),a={},c={unversionedId:"development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-request",id:"version-1.4.0/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-request",isDocsHomePage:!1,title:"http-request",description:"Request",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-request.md",slug:"/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-request",permalink:"/fr/docs/1.4.0/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-request",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/regards/access/api/generated-snippets/UIPluginConfigurationControllerIT/deletePluginConfiguration/http-request.md",version:"1.4.0"},u=[],s={toc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"#### Request\n\n    ***URL**\n\n    `/uiplugins/configurations/60`\n\n    ***URL template**\n\n    `/uiplugins/configurations/{pluginConfId}`\n\n    ***Method**\n\n    `DELETE`\n\n    ***Headers**\n\n    `Authorization:Bearer{token}`\n    `Accept:application/json`\n    `Content-Type:application/json;charset=UTF-8`\n")))}p.isMDXComponent=!0},2704:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),f=r,g=l["".concat(a,".").concat(f)]||l[f]||d[f]||i;return t?o.a.createElement(g,c(c({ref:n},s),{},{components:t})):o.a.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);