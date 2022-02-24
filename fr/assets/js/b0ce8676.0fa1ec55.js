"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[51807],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return g}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),l=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),g=o,d=m["".concat(a,".").concat(g)]||m[g]||u[g]||i;return r?t.createElement(d,s(s({ref:n},p),{},{components:r})):t.createElement(d,s({ref:n},p))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1120:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],c={id:"frontend-packages-business-components-microservice-plugin",title:"Microservice plugin configurator",sidebar_label:"Microservice plugin configurator",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator/"},a=void 0,l={unversionedId:"development/frontend/components/business/frontend-packages-business-components-microservice-plugin",id:"version-1.4.0/development/frontend/components/business/frontend-packages-business-components-microservice-plugin",title:"Microservice plugin configurator",description:"Description",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/components/business/microservice-plugin-configurator.md",sourceDirName:"development/frontend/components/business",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator/",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components/microservice-plugin-configurator/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/components/business/microservice-plugin-configurator.md",tags:[],version:"1.4.0",frontMatter:{id:"frontend-packages-business-components-microservice-plugin",title:"Microservice plugin configurator",sidebar_label:"Microservice plugin configurator",slug:"/development/frontend/packages/business-components/microservice-plugin-configurator/"},sidebar:"version-1.4.0/dev",previous:{title:"Overview - Business components",permalink:"/fr/docs/1.4.0/development/frontend/packages/business-components/"},next:{title:"Overview - Lazy modules",permalink:"/fr/docs/1.4.0/development/frontend/packages/lazy-modules/"}},p=[{value:"Description",id:"description",children:[],level:3},{value:"PluginFormContainer",id:"pluginformcontainer",children:[],level:3},{value:"PluginListContainer",id:"pluginlistcontainer",children:[],level:3}],u={toc:p};function m(e){var n=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"This business component is common standard tool to render a configurator form for any plugin of any microservice.",(0,i.kt)("br",{parentName:"p"}),"\n","This component uses the standard plugin API of any microservice to retrieve plugins meta informations needed for configuration."),(0,i.kt)("h3",{id:"pluginformcontainer"},"PluginFormContainer"),(0,i.kt)("p",null,"Component to display a plugin form editor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n    static propTypes = {}\n    \n    render() {\n        return (\n            <PluginFormContainer\n                microserviceName='rs-catalog' // Microservice of the plugin to configure\n                pluginId='' // Plugin unique identifier to configure\n                pluginConfigurationId='' // Only for edition of an existing plugin configuration\n                formMode='create||edit||copy'\n                backUrl='' // Return route (back button on editor bottom)\n            />\n        )\n    }\n}\n")),(0,i.kt)("h3",{id:"pluginlistcontainer"},"PluginListContainer"),(0,i.kt)("p",null,"Component to display a select field containing all possible plugin implemtations of a given plugin type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { PluginFormContainer } from '@regardsoss/microservice-plugin-configurator'\nimport { DataManagementShapes } from '@regardsoss/shape'\n\nexport class ExampleContainer extends React.component {\n\n    static propTypes = {}\n    \n    onPluginSelection = (pluginDefinition) => {\n        console.info('selected plugin',pluginDefinition.id)\n    }\n    \n    render() {\n        return (\n            <PluginListContainer\n                title='' // Title of the list\n                selectLabel='' // Hint text of the select field\n                microserviceName='rs-catalog' // Microservice of the plugin type\n                pluginType='' // Plugin type\n                selectedPluginId='' // Default selected plugin identifier\n                handleSelect={this.onPluginSelection} // Function callback when a plugin implemtentation is selected.\n                errorText='' // error message to display on top of the list or null if no error.\n            />\n        )\n    }\n}\n")))}m.isMDXComponent=!0}}]);