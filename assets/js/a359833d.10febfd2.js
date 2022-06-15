"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[98048],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,v=p["".concat(u,".").concat(m)]||p[m]||l[m]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39226:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(83117),s=n(80102),i=(n(67294),n(3905)),o=["components"],a={id:"data-services-introduction",title:"Introduction",slug:"/user-guide/data-services/introduction/"},u=void 0,c={unversionedId:"user-documentation/data-services/data-services-introduction",id:"version-1.8.0/user-documentation/data-services/data-services-introduction",title:"Introduction",description:"Les services de donn\xe9es sont des plugins suppl\xe9mentaires propos\xe9s dans le catalogue. Par d\xe9faut, REGARDS fournit un certain nombre d'outils permettant la consultation de la donn\xe9e. Avec l'utilisation de plugins, vous pouvez enrichir et personnaliser l'utilisation du catalogue afin de fournir des services suppl\xe9mentaires d'analyse et de traitements l\xe9gers de la donn\xe9e.",source:"@site/versioned_docs/version-1.8.0/user-documentation/7-data-services/introduction-services.md",sourceDirName:"user-documentation/7-data-services",slug:"/user-guide/data-services/introduction/",permalink:"/docs/1.8.0/user-guide/data-services/introduction/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.8.0/user-documentation/7-data-services/introduction-services.md",tags:[],version:"1.8.0",frontMatter:{id:"data-services-introduction",title:"Introduction",slug:"/user-guide/data-services/introduction/"},sidebar:"manual",previous:{title:"STAC protocol",permalink:"/docs/1.8.0/user-guide/catalog/protocols/stac"},next:{title:"Add UI services",permalink:"/docs/1.8.0/user-guide/data-services/ui-services/"}},d={},l=[],p={toc:l};function m(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Les services de donn\xe9es sont des plugins suppl\xe9mentaires propos\xe9s dans le catalogue. Par d\xe9faut, REGARDS fournit un certain nombre d'outils permettant la consultation de la donn\xe9e. Avec l'utilisation de plugins, vous pouvez enrichir et personnaliser l'utilisation du catalogue afin de fournir des services suppl\xe9mentaires d'analyse et de traitements l\xe9gers de la donn\xe9e."),(0,i.kt)("p",null,"Il en existe deux types de services de donn\xe9es :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"les ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"../processing-services/"},"processing services"))),". Contrairement aux ",(0,i.kt)("a",{parentName:"li",href:"../../order/processing/"},"processings")," intervenant lors de commandes de donn\xe9es, les processing services sont des traitements synchrones ; par cons\xe9quent, ils doivent \xeatre l\xe9gers et rapides."),(0,i.kt)("li",{parentName:"ul"},"les ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"../ui-services/"},"ui services")))," proposant des outils de visualisation de la donn\xe9e.")))}m.isMDXComponent=!0}}]);