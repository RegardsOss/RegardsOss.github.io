"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[92491],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={id:"depracated-plugins",title:"Plugins installation",slug:"/setup/deprecated/plugins/"},a=void 0,s={unversionedId:"setup/deprecated/depracated-plugins",id:"version-1.6.0/setup/deprecated/depracated-plugins",title:"Plugins installation",description:"Find plugins",source:"@site/versioned_docs/version-1.6.0/setup/deprecated/plugins.md",sourceDirName:"setup/deprecated",slug:"/setup/deprecated/plugins/",permalink:"/docs/1.6.0/setup/deprecated/plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.6.0/setup/deprecated/plugins.md",tags:[],version:"1.6.0",frontMatter:{id:"depracated-plugins",title:"Plugins installation",slug:"/setup/deprecated/plugins/"}},l={},c=[{value:"Find plugins",id:"find-plugins",level:2},{value:"Add new plugin to a microservice",id:"add-new-plugin-to-a-microservice",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"find-plugins"},"Find plugins"),(0,i.kt)("p",null,"To find available plugins for REGARDS microservices you can check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-plugins/releases"},"official plugin repository on github")),(0,i.kt)("h2",{id:"add-new-plugin-to-a-microservice"},"Add new plugin to a microservice"),(0,i.kt)("p",null,"To add a new plugin to a microservice, you have to copy the 'jar' file of the plugin into the 'plugins/\\<microservice",">","' directory of the REGARDS install directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp plugin.jar /home/REGARDS/plugins/<microservice>/\nchown <regards_exec_user> /home/REGARDS/plugins/<microservice>/plugin.jar\nchmod 640 /home/REGARDS/plugins/<microservice>/plugin.jar\n")),(0,i.kt)("p",null,"After a new plugin is added to a microservice, you need to restart it. To do so, stop and start the microservice as explained in ","[Regards CLI]"),(0,i.kt)("p",null,"Then you can see that the plugin is well installed from the project HMI in the 'microservices' section."),(0,i.kt)("p",null,"Exemple for list ",(0,i.kt)("inlineCode",{parentName:"p"},"catalog microservice plugins")," :"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"https://regards/admin/project1/microservice/rs-catalog/plugin/list")))}u.isMDXComponent=!0}}]);