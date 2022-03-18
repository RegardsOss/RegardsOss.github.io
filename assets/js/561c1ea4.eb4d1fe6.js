"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[45142],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),a=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=a(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=a(t),d=i,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(g,u(u({ref:r},l),{},{components:t})):n.createElement(g,u({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,u=new Array(o);u[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,u[1]=s;for(var a=2;a<o;a++)u[a]=t[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},11822:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return a},toc:function(){return l},default:function(){return m}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),u=["components"],s={id:"project-configuration-microservices",title:"Manage microservices",slug:"/user-guide/project-configuration/microservices/"},c=void 0,a={unversionedId:"user-documentation/project-configuration/project-configuration-microservices",id:"version-1.6.0/user-documentation/project-configuration/project-configuration-microservices",title:"Manage microservices",description:"Le panneau ***Microservices*** vous permet d'avoir une vision globale des diff\xe9rents microservices du syst\xe8me, de leur \xe9tat de fonctionnement, et de leur configuration. Sur cette page vous pouvez retrouver la liste de tous les microservices utilis\xe9s dans REGARDS.",source:"@site/versioned_docs/version-1.6.0/user-documentation/2-project-configuration/microservices.md",sourceDirName:"user-documentation/2-project-configuration",slug:"/user-guide/project-configuration/microservices/",permalink:"/docs/1.6.0/user-guide/project-configuration/microservices/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/user-documentation/2-project-configuration/microservices.md",tags:[],version:"1.6.0",frontMatter:{id:"project-configuration-microservices",title:"Manage microservices",slug:"/user-guide/project-configuration/microservices/"},sidebar:"version-1.6.0/manual",previous:{title:"Customize user interface",permalink:"/docs/1.6.0/user-guide/project-configuration/user-interface/"},next:{title:"Manage storage locations",permalink:"/docs/1.6.0/user-guide/project-configuration/storages/"}},l=[],p={toc:l};function m(e){var r=e.components,t=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Le panneau ",(0,o.kt)("strong",{parentName:"em"},(0,o.kt)("em",{parentName:"strong"},"Microservices"))," vous permet d'avoir une vision globale des diff\xe9rents microservices du syst\xe8me, de leur \xe9tat de fonctionnement, et de leur configuration. Sur cette page vous pouvez retrouver la liste de tous les microservices utilis\xe9s dans REGARDS.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/2-project-configuration/microservices/microservices-configure.png",alt:"configuration microservices",width:"800"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Depuis cet \xe9cran, vous pourrez :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{src:"/images/user-documentation/regards-icons/admin/cloud.png",alt:"cloud",height:"22"})," ",(0,o.kt)("b",null,(0,o.kt)("i",null,"Activer ou d\xe9sactiver le mode maintenance"))," des microservices. En activant ce mode, le microservice n'acceptera plus que des requ\xeates HTTP de type GET. Seule la consultation sera possible, aucune modification ou suppression n'est donc autoris\xe9e. Ce mode peut automatiquement s'activer lorsqu'un probl\xe8me survient dans un microservice. Celui-ci se met dans un fonctionnement d\xe9grad\xe9 et attend l'intervention d'un administrateur."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{src:"/images/user-documentation/regards-icons/admin/plugins.png",alt:"plugins",height:"25",width:"25"})," ",(0,o.kt)("b",null,(0,o.kt)("i",null,"Pour voir la liste de tous les plugins associ\xe9 \xe0 un microservice"))," En cliquant sur ce bouton, puis sur le bouton ",(0,o.kt)("b",null,(0,o.kt)("i",null,"Empty plugins cache"))," vous pourrez vider toutes les configurations des plugins ayant d\xe9j\xe0 \xe9t\xe9 utilis\xe9es et sauvegard\xe9es. En effet, pour des raisons de performance, un plugin ayant d\xe9j\xe0 \xe9t\xe9 utilis\xe9 est automatiquement conserv\xe9."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{src:"/images/user-documentation/regards-icons/admin/import-export.png",alt:"import export",height:"25",width:"25"})," ",(0,o.kt)("b",null,(0,o.kt)("i",null,"Importer ou exporter la configuration du microservice"))," La plupart des microservices peuvent se configurer par fichier JSON. En exportant une configuration, vous pourrez voir tout ce qui a \xe9t\xe9 param\xe9tr\xe9. Vous pourrez \xe9galement r\xe9initialiser la configuration en important un nouveau fichier.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"/images/user-documentation/v1.4/2-project-configuration/microservices/microservices-import-export.png",alt:"configuration microservices",width:"800"})),(0,o.kt)("p",null,"A partir de cette page vous pouvez t\xe9l\xe9charger la configuration du microservice en appuyant sur le bouton ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Export"))," \xe0 droite de l'\xe9cran.\nVous pouvez \xe9galement importer un nouveau fichier de configuration en appuyant sur le bouton ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Import from file")),"."))}m.isMDXComponent=!0}}]);