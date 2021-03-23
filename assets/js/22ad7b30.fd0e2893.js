(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{2704:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,v=b["".concat(s,".").concat(d)]||b[d]||u[d]||a;return n?i.a.createElement(v,l(l({ref:t},c),{},{components:n})):i.a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2725:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ingest-928443295ca84c991ff51af4005f37b1.svg"},428:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(2704)),s={id:"backend-ingest-overview",title:"REGARDS ingest microservice",sidebar_label:"Overview",slug:"/development/backend/services/ingest/overview/"},l={unversionedId:"development/backend/regards/ingest/backend-ingest-overview",id:"development/backend/regards/ingest/backend-ingest-overview",isDocsHomePage:!1,title:"REGARDS ingest microservice",description:"Overview",source:"@site/docs/development/backend/regards/ingest/ingest.md",slug:"/development/backend/services/ingest/overview/",permalink:"/docs/development/backend/services/ingest/overview/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/ingest/ingest.md",version:"current",sidebar_label:"Overview",sidebar:"dev",previous:{title:"Acquisition chain - Scan plugins",permalink:"/docs/development/backend/services/dataprovider/plugins/validation/"},next:{title:"REGARDS Ingest API",permalink:"/docs/development/backend/services/ingest/api/"}},o=[{value:"Overview",id:"overview",children:[]},{value:"Available APIs",id:"available-apis",children:[]},{value:"Available Extension points",id:"available-extension-points",children:[]},{value:"Bus message events",id:"bus-message-events",children:[]}],c={toc:o};function p(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Ingest")," reponsabilities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ingest SIP,"),Object(a.b)("li",{parentName:"ul"},"Transform SIP to one or more AIPs,"),Object(a.b)("li",{parentName:"ul"},"Submit AIPs to ",Object(a.b)("inlineCode",{parentName:"li"},"Storage"))),Object(a.b)("p",null,Object(a.b)("img",{alt:"Ingest plugins",src:n(2725).default})),Object(a.b)("h2",{id:"available-apis"},"Available APIs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../api/"},"Ingest"))),Object(a.b)("h2",{id:"available-extension-points"},"Available Extension points"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins/sip-pre-processing/"},"SIP Pre processing plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins/sip-validation/"},"SIP Validation plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins/aip-generation/"},"AIP Generation plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins/aip-tagging/"},"AIP Tagging plugins")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../plugins/sip-post-processing/"},"SIP Post processing plugins"))),Object(a.b)("h2",{id:"bus-message-events"},"Bus message events"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"../events/"},"Events"))))}p.isMDXComponent=!0}}]);