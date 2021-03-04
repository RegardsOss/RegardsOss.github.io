(window.webpackJsonp=window.webpackJsonp||[]).push([[2071],{2141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),o=(n(0),n(2701)),a={id:"global-configuration-introduction",title:"Introduction",slug:"/user-guide/global-configuration/introduction"},c={unversionedId:"user-documentation/1-global-configuration/global-configuration-introduction",id:"user-documentation/1-global-configuration/global-configuration-introduction",isDocsHomePage:!1,title:"Introduction",description:"*REGARDS offre la possibilit\xe9 de cr\xe9er plusieurs projets avec leurs propres th\xe9matiques.",source:"@site/docs/user-documentation/1-global-configuration/introduction-global-configuration.md",slug:"/user-guide/global-configuration/introduction",permalink:"/docs/next/user-guide/global-configuration/introduction",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/user-documentation/1-global-configuration/introduction-global-configuration.md",version:"current",sidebar:"manual",previous:{title:"Glossary",permalink:"/docs/next/user-guide/glossary"},next:{title:"Customize portal interface",permalink:"/docs/next/user-guide/global-configuration/portal"}},u=[],l={toc:u};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"REGARDS offre la possibilit\xe9 de cr\xe9er plusieurs projets avec leurs propres th\xe9matiques.\nDepuis l'interface d'administration, g\xe9rez vos projets et les utilisateurs du syst\xe8me. ")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Cette rubrique est uniquement r\xe9serv\xe9e au ",Object(o.b)("inlineCode",{parentName:"p"},"super administrator")," d\xe9fini lors de l'installation du syst\xe8me, il est seul ayant-droit pour acc\xe9der \xe0 l'interface d'administration de tous les projets REGARDS."))),Object(o.b)("hr",null),Object(o.b)("p",null,"L'interface d'administration est accessible depuis l'adresse ",Object(o.b)("inlineCode",{parentName:"p"},"http://<regards host>/admin"),"."),Object(o.b)("p",null,"Depuis celle-ci, vous pourrez :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"projects"},"Cr\xe9er et g\xe9rer des projets")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"users"},"Identifier les utilisateurs et contr\xf4ler leurs droits d'acc\xe8s")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"portal"},"Personnaliser l'interface"))),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"/images/user-documentation/1-global-configuration/admin-instance-hmi.png",alt:"interface admin",width:"800"})))}s.isMDXComponent=!0},2701:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);