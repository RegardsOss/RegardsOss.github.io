(window.webpackJsonp=window.webpackJsonp||[]).push([[1926],{1996:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),o=(r(0),r(2701)),c={id:"depracated-plugins",title:"Plugins installation",slug:"/setup/deprecated/plugins"},a={unversionedId:"setup/deprecated/depracated-plugins",id:"version-1.4.0/setup/deprecated/depracated-plugins",isDocsHomePage:!1,title:"Plugins installation",description:"Find plugins",source:"@site/versioned_docs/version-1.4.0/setup/deprecated/plugins.md",slug:"/setup/deprecated/plugins",permalink:"/docs/setup/deprecated/plugins",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/setup/deprecated/plugins.md",version:"1.4.0"},s=[{value:"Find plugins",id:"find-plugins",children:[]},{value:"Add new plugin to a microservice",id:"add-new-plugin-to-a-microservice",children:[]}],p={toc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"find-plugins"},"Find plugins"),Object(o.b)("p",null,"To find available plugins for REGARDS microservices you can check the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-plugins/releases"},"official plugin repository on github")),Object(o.b)("h2",{id:"add-new-plugin-to-a-microservice"},"Add new plugin to a microservice"),Object(o.b)("p",null,"To add a new plugin to a microservice, you have to copy the 'jar' file of the plugin into the 'plugins/\\<microservice",">","' directory of the REGARDS install directory."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cp plugin.jar /home/REGARDS/plugins/<microservice>/\nchown <regards_exec_user> /home/REGARDS/plugins/<microservice>/plugin.jar\nchmod 640 /home/REGARDS/plugins/<microservice>/plugin.jar\n")),Object(o.b)("p",null,"After a new plugin is added to a microservice, you need to restart it. To do so, stop and start the microservice as explained in ","[Regards CLI]"),Object(o.b)("p",null,"Then you can see that the plugin is well installed from the project HMI in the 'microservices' section."),Object(o.b)("p",null,"Exemple for list ",Object(o.b)("inlineCode",{parentName:"p"},"catalog microservice plugins")," :"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"https://regards/admin/project1/microservice/rs-catalog/plugin/list")))}l.isMDXComponent=!0},2701:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=n,b=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?i.a.createElement(b,a(a({ref:t},p),{},{components:r})):i.a.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<o;p++)c[p]=r[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);