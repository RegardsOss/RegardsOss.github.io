"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15903],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20153:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],a={id:"frontend-packages-business-components",title:"REGARDS business components",sidebar_label:"Overview - Business components",slug:"/development/frontend/packages/business-components/"},c=void 0,p={unversionedId:"development/frontend/components/frontend-packages-business-components",id:"development/frontend/components/frontend-packages-business-components",isDocsHomePage:!1,title:"REGARDS business components",description:"Description",source:"@site/docs/development/frontend/components/business-index.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/packages/business-components/",permalink:"/docs/development/frontend/packages/business-components/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/components/business-index.md",version:"current",frontMatter:{id:"frontend-packages-business-components",title:"REGARDS business components",sidebar_label:"Overview - Business components",slug:"/development/frontend/packages/business-components/"},sidebar:"dev",previous:{title:"Re-usable components",permalink:"/docs/development/frontend/packages/components/"},next:{title:"Microservice plugin configurator",permalink:"/docs/development/frontend/packages/business-components/microservice-plugin-configurator/"}},l=[{value:"Description",id:"description",children:[]}],u={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"webapp/business")," folder provides re-usable business oriented modules, each of them holding a set of React Component often shared between admin and user applications. The complete list of those modules is:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"admin-data-entities-attributes-management: Component to display a REGARDS entity (DATASET, COLLECTION, DOCUMENT, ..) attributes configurator form "),(0,s.kt)("li",{parentName:"ul"},"attributes-common: Components to display a REGARDS attribute configuration field for standard, dynamic and regroupements attributes"),(0,s.kt)("li",{parentName:"ul"},"endpoints-common: Backend global client to retrieve access rights on microservices endpoints "),(0,s.kt)("li",{parentName:"ul"},"entities-common: Components to display a REGARDS entity (DATASET, COLLECTION, DOCUMENT, DATA, ....) description or apply a service on entity"),(0,s.kt)("li",{parentName:"ul"},"global-system-error: Application decorator to handle server requests errors"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"../business-components/microservice-plugin-configurator/"},"microservice-plugin-configurator"),": Component to configure any backend plugin of any REGARDS microservice "),(0,s.kt)("li",{parentName:"ul"},"order-common: Components to handle REGARDS orders"),(0,s.kt)("li",{parentName:"ul"},"project-handler: Application decorator to retrieve current project "),(0,s.kt)("li",{parentName:"ul"},"user-metadata-common: Component to display a REGARDS user metadata configator fields. Used for user creation/updates")))}m.isMDXComponent=!0}}]);