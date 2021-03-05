(window.webpackJsonp=window.webpackJsonp||[]).push([[1049],{1119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(2699)),c={id:"backend-architecture-concepts",title:"REGARDS architecture concepts",sidebar_label:"Concepts",slug:"/development/backend/architecture/concepts"},i={unversionedId:"development/backend/architecture/backend-architecture-concepts",id:"version-1.4.0/development/backend/architecture/backend-architecture-concepts",isDocsHomePage:!1,title:"REGARDS architecture concepts",description:"OAIS recommandation",source:"@site/versioned_docs/version-1.4.0/development/backend/architecture/concepts.md",slug:"/development/backend/architecture/concepts",permalink:"/docs/1.4.0/development/backend/architecture/concepts",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/backend/architecture/concepts.md",version:"1.4.0",sidebar_label:"Concepts",sidebar:"version-1.4.0/dev",previous:{title:"Development manual",permalink:"/docs/1.4.0/development"},next:{title:"REGARDS architecture overview",permalink:"/docs/1.4.0/development/backend/architecture/overview"}},s=[{value:"OAIS recommandation",id:"oais-recommandation",children:[]},{value:"OAIS REGARDS implementation",id:"oais-regards-implementation",children:[]}],l={toc:s};function d(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"oais-recommandation"},"OAIS recommandation"),Object(o.b)("p",null,"The System design leans on the OAIS (Open Archival Information System) recommendation of the ",Object(o.b)("a",{parentName:"p",href:"https://public.ccsds.org"},"CCSDS"),"."),Object(o.b)("p",null,Object(o.b)("img",{src:n(2731).default})),Object(o.b)("p",null,"Thus the system allows high-performance ingestion of data package called ",Object(o.b)("strong",{parentName:"p"},"SIP")," (Submission Information Package), either in standard or non-standard formats."),Object(o.b)("p",null,"Afterwards, these SIP are processed into ",Object(o.b)("strong",{parentName:"p"},"AIP")," (Archival Information Package) and stored in archival storage. Both metadata and data files are stored."),Object(o.b)("p",null,"All or part of the AIP metadata are harvested to offer smart search and access to the data."),Object(o.b)("p",null,"Finally, requested data are retrieve under ",Object(o.b)("strong",{parentName:"p"},"DIP")," (Dissemination Information Package)."),Object(o.b)("h2",{id:"oais-regards-implementation"},"OAIS REGARDS implementation"),Object(o.b)("p",null,"The schema below shows the correspondence between the OAIS recommandation and the REGARDS implementation. Note we're just displaying here a subset of all REGARDS features, as REGARDS can do a lot more."),Object(o.b)("p",null,Object(o.b)("img",{src:n(2732).default})),Object(o.b)("p",null,"REGARDS processes SIP, transforms them into AIP, stores them, extracts metadata from AIP (i.e. harvesting) to populate a catalog to provide fast access to metadata."),Object(o.b)("p",null,"Then users can discover through our rich web application, order and download data in an efficient and simple way."))}d.isMDXComponent=!0},2699:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2731:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/oais-a00464848023171ceff0bcacf7278f79.png"},2732:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/overview_regards_oais-0f7d9ad75bec249be9d403a71f49b2b8.png"}}]);