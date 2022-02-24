"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[18373],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),g=i,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45913:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={id:"depracated-plugins",title:"Plugins installation",slug:"/setup/deprecated/plugins/"},s=void 0,l={unversionedId:"setup/deprecated/depracated-plugins",id:"version-1.5.0/setup/deprecated/depracated-plugins",title:"Plugins installation",description:"Find plugins",source:"@site/versioned_docs/version-1.5.0/setup/deprecated/plugins.md",sourceDirName:"setup/deprecated",slug:"/setup/deprecated/plugins/",permalink:"/fr/docs/1.5.0/setup/deprecated/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/setup/deprecated/plugins.md",tags:[],version:"1.5.0",frontMatter:{id:"depracated-plugins",title:"Plugins installation",slug:"/setup/deprecated/plugins/"}},u=[{value:"Find plugins",id:"find-plugins",children:[],level:2},{value:"Add new plugin to a microservice",id:"add-new-plugin-to-a-microservice",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"find-plugins"},"Find plugins"),(0,o.kt)("p",null,"To find available plugins for REGARDS microservices you can check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-plugins/releases"},"official plugin repository on github")),(0,o.kt)("h2",{id:"add-new-plugin-to-a-microservice"},"Add new plugin to a microservice"),(0,o.kt)("p",null,"To add a new plugin to a microservice, you have to copy the 'jar' file of the plugin into the 'plugins/\\<microservice",">","' directory of the REGARDS install directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp plugin.jar /home/REGARDS/plugins/<microservice>/\nchown <regards_exec_user> /home/REGARDS/plugins/<microservice>/plugin.jar\nchmod 640 /home/REGARDS/plugins/<microservice>/plugin.jar\n")),(0,o.kt)("p",null,"After a new plugin is added to a microservice, you need to restart it. To do so, stop and start the microservice as explained in ","[Regards CLI]"),(0,o.kt)("p",null,"Then you can see that the plugin is well installed from the project HMI in the 'microservices' section."),(0,o.kt)("p",null,"Exemple for list ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog microservice plugins")," :"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"https://regards/admin/project1/microservice/rs-catalog/plugin/list")))}d.isMDXComponent=!0}}]);