"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[44389],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,d=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return t?r.createElement(d,s(s({ref:n},p),{},{components:t})):r.createElement(d,s({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={id:"frontend-packages-business-components-microservice-plugin",title:"Microservice plugin configurator",sidebar_label:"Microservice plugin configurator",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator/"},s=void 0,a={unversionedId:"development/frontend/components/business/frontend-packages-business-components-microservice-plugin",id:"version-1.13.0/development/frontend/components/business/frontend-packages-business-components-microservice-plugin",title:"Microservice plugin configurator",description:"Description",source:"@site/versioned_docs/version-1.13.0/development/frontend/components/business/microservice-plugin-configurator.md",sourceDirName:"development/frontend/components/business",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator/",permalink:"/docs/development/frontend/packages/business-components/microservice-plugin-configurator/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/frontend/components/business/microservice-plugin-configurator.md",tags:[],version:"1.13.0",frontMatter:{id:"frontend-packages-business-components-microservice-plugin",title:"Microservice plugin configurator",sidebar_label:"Microservice plugin configurator",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator/"},sidebar:"dev",previous:{title:"Overview - Business components",permalink:"/docs/development/frontend/packages/business-components/"},next:{title:"Overview - Lazy modules",permalink:"/docs/development/frontend/packages/lazy-modules/"}},c={},l=[{value:"Description",id:"description",level:3},{value:"PluginFormContainer",id:"pluginformcontainer",level:3},{value:"PluginListContainer",id:"pluginlistcontainer",level:3}],p={toc:l},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"This business component is common standard tool to render a configurator form for any plugin of any microservice.",(0,o.kt)("br",{parentName:"p"}),"\n","This component uses the standard plugin API of any microservice to retrieve plugins meta informations needed for configuration."),(0,o.kt)("h3",{id:"pluginformcontainer"},"PluginFormContainer"),(0,o.kt)("p",null,"Component to display a plugin form editor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n    static propTypes = {}\n    \n    render() {\n        return (\n            <PluginFormContainer\n                microserviceName='rs-catalog' // Microservice of the plugin to configure\n                pluginId='' // Plugin unique identifier to configure\n                pluginConfigurationId='' // Only for edition of an existing plugin configuration\n                formMode='create||edit||copy'\n                backUrl='' // Return route (back button on editor bottom)\n            />\n        )\n    }\n}\n")),(0,o.kt)("h3",{id:"pluginlistcontainer"},"PluginListContainer"),(0,o.kt)("p",null,"Component to display a select field containing all possible plugin implemtations of a given plugin type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n    static propTypes = {}\n    \n    onPluginSelection = (pluginDefinition) => {\n        console.info('selected plugin',pluginDefinition.id)\n    }\n    \n    render() {\n        return (\n            <PluginListContainer\n                title='' // Title of the list\n                selectLabel='' // Hint text of the select field\n                microserviceName='rs-catalog' // Microservice of the plugin type\n                pluginType='' // Plugin type\n                selectedPluginId='' // Default selected plugin identifier\n                handleSelect={this.onPluginSelection} // Function callback when a plugin implemtentation is selected.\n                errorText='' // error message to display on top of the list or null if no error.\n            />\n        )\n    }\n}\n")))}m.isMDXComponent=!0}}]);