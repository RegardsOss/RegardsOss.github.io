(window.webpackJsonp=window.webpackJsonp||[]).push([[1290],{1359:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(2701)),s={id:"backend-storage-events",title:"Bus message events",sidebar_label:"Bus message events",slug:"/development/backend/storage/events"},i={unversionedId:"development/backend/regards/storage/events/backend-storage-events",id:"version-1.4.0/development/backend/regards/storage/events/backend-storage-events",isDocsHomePage:!1,title:"Bus message events",description:"To know more about bus message mechanism look at AMQP starter",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/storage/events/events.md",slug:"/development/backend/storage/events",permalink:"/fr/docs/development/backend/storage/events",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/backend/regards/storage/events/events.md",version:"1.4.0",sidebar_label:"Bus message events",sidebar:"version-1.4.0/dev",previous:{title:"Security delegation plugins",permalink:"/fr/docs/development/backend/storage/plugins/security-delegation"},next:{title:"Development setup and build",permalink:"/fr/docs/development/frontend/introduction/setup"}},c=[],d={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To know more about bus message mechanism look at ",Object(o.b)("a",{parentName:"p",href:"../framework/starters/amqp"},"AMQP starter")))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"Event"),Object(o.b)("th",{parentName:"tr",align:"left"},"Target"),Object(o.b)("th",{parentName:"tr",align:"left"},"Mode"),Object(o.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/AIPEvent.java"},"AIPEvent")),Object(o.b)("td",{parentName:"tr",align:"left"},"ONE_PER_MICROSERVICE_TYPE"),Object(o.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(o.b)("td",{parentName:"tr",align:"left"},"Biggest granularity information event on what's happening on an AIP. If you need informations on each StorageDataFile.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataFileEvent.java"},"DataFileEvent")),Object(o.b)("td",{parentName:"tr",align:"left"},"ALL"),Object(o.b)("td",{parentName:"tr",align:"left"},"Broadcast"),Object(o.b)("td",{parentName:"tr",align:"left"},"Events mainly for rs-order, gives information on StorageDataFile granularity, not AIP.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/event/DataStorageEvent.java"},"DataStorageEvent")),Object(o.b)("td",{parentName:"tr",align:"left"},"MICROSERVICE"),Object(o.b)("td",{parentName:"tr",align:"left"},"Unicast"),Object(o.b)("td",{parentName:"tr",align:"left"},"Published when a file is stored, deleted or restored")))))}l.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=l(n),p=a,g=b["".concat(s,".").concat(p)]||b[p]||m[p]||o;return n?r.a.createElement(g,i(i({ref:t},d),{},{components:n})):r.a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=n[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);