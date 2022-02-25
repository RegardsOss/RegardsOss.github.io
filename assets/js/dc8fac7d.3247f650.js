"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[93834],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),u=i,m=g["".concat(l,".").concat(u)]||g[u]||d[u]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},51772:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"backend-ingest-generation-plugins",title:"AIP generation plugins",sidebar_label:"AIP generation",slug:"/development/backend/services/ingest/plugins/aip-generation/"},l=void 0,p={unversionedId:"development/backend/regards/ingest/plugins/backend-ingest-generation-plugins",id:"version-1.7.1/development/backend/regards/ingest/plugins/backend-ingest-generation-plugins",title:"AIP generation plugins",description:"Overview",source:"@site/versioned_docs/version-1.7.1/development/backend/regards/ingest/plugins/aip-generation-plugins.md",sourceDirName:"development/backend/regards/ingest/plugins",slug:"/development/backend/services/ingest/plugins/aip-generation/",permalink:"/docs/1.7.1/development/backend/services/ingest/plugins/aip-generation/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/development/backend/regards/ingest/plugins/aip-generation-plugins.md",tags:[],version:"1.7.1",frontMatter:{id:"backend-ingest-generation-plugins",title:"AIP generation plugins",sidebar_label:"AIP generation",slug:"/development/backend/services/ingest/plugins/aip-generation/"},sidebar:"dev",previous:{title:"SIP validation",permalink:"/docs/1.7.1/development/backend/services/ingest/plugins/sip-validation/"},next:{title:"AIP tagging",permalink:"/docs/1.7.1/development/backend/services/ingest/plugins/aip-tagging/"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Interface",id:"interface",children:[],level:2},{value:"Implementation",id:"implementation",children:[],level:2}],d={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This extension point allows to generate one or many ",(0,a.kt)("inlineCode",{parentName:"p"},"AIP"),"(s) for one submitted ",(0,a.kt)("inlineCode",{parentName:"p"},"SIP"),"."))),(0,a.kt)("p",null,"REGARDS provides many implementation of this extension point :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-service/src/main/java/fr/cnes/regards/modules/ingest/service/chain/plugin/DefaultSingleAIPGeneration.java"},"DefaultSingleAIPGeneration")," : Build AIP with all informations from SIP"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/ingest-plugins/enhanced-descriptive-aip-generation/src/main/java/fr/cnes/regards/modules/ingest/plugins/StringEnhancedDescriptiveAipGeneration.java"},"StringEnhancedDescriptiveAipGeneration")," : Allows to add two given String to generated AIPs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/RegardsOss/regards-plugins/blob/master/ingest-plugins/enhanced-descriptive-aip-generation/src/main/java/fr/cnes/regards/modules/ingest/plugins/DoubleEnhancedDescriptiveAipGeneration.java"},"DoubleEnhancedDescriptiveAipGeneration")," : Allows to add a random Double to generated AIPs")),(0,a.kt)("h2",{id:"interface"},"Interface"),(0,a.kt)("p",null,"   ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-backend/blob/master/rs-ingest/ingest/ingest-domain/src/main/java/fr/cnes/regards/modules/ingest/domain/plugin/IAipGeneration.java"},"IAipGeneration")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"To learn more about how to create your own plugin see ",(0,a.kt)("a",{parentName:"p",href:"../../../../framework/modules/plugins/"},"Plugins")),(0,a.kt)("p",null,"Here under is an exemple of how to implements this extension point to create your own business logic."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Plugin(id = "exemple", version = "1.0.0", description = "exemple plugin",\n        author = "REGARDS Team", contact = "regards@c-s.fr", licence = "LGPLv3.0", owner = "CSSI",\n        url = "https://github.com/RegardsOss")\npublic class Plugin implements IAipGeneration {\n\n    @Override\n    public List<AIP> generate(SIP sip, UniformResourceName aipId, UniformResourceName sipId, String providerId) {\n    }\n}\n')))}g.isMDXComponent=!0}}]);