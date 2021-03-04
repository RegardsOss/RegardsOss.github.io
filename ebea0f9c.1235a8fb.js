(window.webpackJsonp=window.webpackJsonp||[]).push([[2400],{2470:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(2701)),i={id:"backend-storage-allocation-strategy-plugins",title:"Allocation strategy plugins",sidebar_label:"Allocation strategy",slug:"/development/backend/storage/plugins/allocation-strategy"},l={unversionedId:"development/backend/regards/storage/plugins/backend-storage-allocation-strategy-plugins",id:"development/backend/regards/storage/plugins/backend-storage-allocation-strategy-plugins",isDocsHomePage:!1,title:"Allocation strategy plugins",description:"Overview",source:"@site/docs/development/backend/regards/storage/plugins/allocation-strategy-plugins.md",slug:"/development/backend/storage/plugins/allocation-strategy",permalink:"/docs/next/development/backend/storage/plugins/allocation-strategy",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/backend/regards/storage/plugins/allocation-strategy-plugins.md",version:"current",sidebar_label:"Allocation strategy",sidebar:"dev",previous:{title:"REGARDS Storage API",permalink:"/docs/next/development/backend/storage/api"},next:{title:"Data storage plugins",permalink:"/docs/next/development/backend/storage/plugins/data-storage"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Implementation",id:"implementation",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This extension point allows to define how storage microservice decides which ",Object(o.b)("a",{parentName:"p",href:"data-storage"},"Data storage plugin")," to use to store a given AIP and its associated files."))),Object(o.b)("p",null,"REGARDS provides many implementation of this extension point :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/allocation/strategy/DefaultAllocationStrategyPlugin.java"},"DefaultAllocationStrategyPlugin")," : Store all AIP files in the data storage with the highter priority"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/allocation/strategy/DefaultMultipleAllocationStrategy.java"},"DefaultMultipleAllocationStrategy")," : Store all AIP files in the given data storage(s). If many data storages are provided then the file are stored many times."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-plugin/src/main/java/fr/cnes/regards/modules/storage/plugin/allocation/strategy/PropertyDataStorageMapping.java"},"PropertyDataStorageMapping")," : Read into the AIP a property value and then find the data storage mapped to this value in the plugin configuration.")),Object(o.b)("h2",{id:"interface"},"Interface"),Object(o.b)("p",null,"   ",Object(o.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-storage/blob/master/storage/storage-domain/src/main/java/fr/cnes/regards/modules/storage/domain/plugin/IAllocationStrategy.java"},"IAllocationStrategy")),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"To learn more about how to create your own plugin see ",Object(o.b)("a",{parentName:"p",href:"../../framework/modules/plugins"},"Plugins")),Object(o.b)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IAllocationStrategy {\n\n        @Override\n        public Multimap<Long, StorageDataFile> dispatch(Collection<StorageDataFile> dataFilesToHandle,\n            DispatchErrors dispatchErrors) {\n                // return map with key=<data storage plugin id> and value=<StorageDataFile to store>\n        }\n}\n')))}p.isMDXComponent=!0},2701:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},g=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(a),u=n,m=g["".concat(i,".").concat(u)]||g[u]||d[u]||o;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);