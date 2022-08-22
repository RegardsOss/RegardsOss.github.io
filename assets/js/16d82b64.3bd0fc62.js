"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[28283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(r),p=a,g=c["".concat(u,".").concat(p)]||c[p]||d[p]||i;return r?n.createElement(g,s(s({ref:t},m),{},{components:r})):n.createElement(g,s({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={id:"fem-settings",title:"FEM Settings",slug:"/user-guide/import-data/fem/manage-features-settings/"},s=void 0,o={unversionedId:"user-documentation/4_3-fem/fem-settings",id:"version-1.7.1/user-documentation/4_3-fem/fem-settings",title:"FEM Settings",description:"Vous avez la possibilit\xe9 de configurer les param\xe8tres de FEM. Ces param\xe8tres sont accessibles depuis le menu **Add data**, puis la carte **Products Manager (GeoJson)** et le bouton  ***Settings***.",source:"@site/versioned_docs/version-1.7.1/user-documentation/4_3-fem/manage-features-settings.md",sourceDirName:"user-documentation/4_3-fem",slug:"/user-guide/import-data/fem/manage-features-settings/",permalink:"/docs/1.7.1/user-guide/import-data/fem/manage-features-settings/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.7.1/user-documentation/4_3-fem/manage-features-settings.md",tags:[],version:"1.7.1",frontMatter:{id:"fem-settings",title:"FEM Settings",slug:"/user-guide/import-data/fem/manage-features-settings/"},sidebar:"manual",previous:{title:"Feature dissemination",permalink:"/docs/1.7.1/user-guide/import-data/fem/features-dissemination/"},next:{title:"Introduction",permalink:"/docs/1.7.1/user-guide/crawler/introduction/"}},u={},l=[{value:'<img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Les param\xe8tres',id:"-les-param\xe8tres",level:2}],m={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Vous avez la possibilit\xe9 de configurer les param\xe8tres de FEM. Ces param\xe8tres sont accessibles depuis le menu ",(0,a.kt)("strong",{parentName:"em"},"Add data"),", puis la carte ",(0,a.kt)("strong",{parentName:"em"},"Products Manager (GeoJson)")," et le bouton ",(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/gear-wheel.png",alt:"settings",height:"25",width:"25"})," ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)("em",{parentName:"strong"},"Settings")),".")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-les-param\xe8tres"},(0,a.kt)("img",{src:"/images/user-documentation/doc-icons/right-arrow.png",alt:"arrow",height:"12",width:"12"})," Les param\xe8tres"),(0,a.kt)("p",null,"Les param\xe8tres disponibles sont les suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enable notifications")," permet de notifier les autres services lors de la cr\xe9ation de la feature"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Date field")," correspond \xe0 la date de cr\xe9ation du dernier dump"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Enable module")," d\xe9termine si l'on doit activer la cr\xe9ation des dumps"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cron trigger")," d\xe9termine la fr\xe9quence de cr\xe9ation des dumps"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dump location")," est l'emplacement dans lequel doit \xeatre plac\xe9 les dumps")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"/images/user-documentation/v1.6/4_3-fem/fem-settings.png",alt:"search tools",width:"800"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"L'icone ",(0,a.kt)("img",{src:"/images/user-documentation/regards-icons/admin/default-value.png",alt:"edit",height:"25",width:"25"})," permet de remettre la valeur par d\xe9faut \xe0 un champ donn\xe9. La barre bleue pr\xe9sente \xe0 c\xf4t\xe9 d'un param\xe8tre signifie que sa valeur actuelle diff\xe8re de la valeur par d\xe9faut.")))}d.isMDXComponent=!0}}]);