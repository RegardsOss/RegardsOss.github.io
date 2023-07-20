"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[51785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(n),u=l,h=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var m=2;m<r;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=n(87462),l=(n(67294),n(3905));const r={id:"frontend-view-theme",title:"Material and module themes",sidebar_label:"Theme",slug:"/development/frontend/view/theme/"},a=void 0,i={unversionedId:"development/frontend/components/frontend-view-theme",id:"development/frontend/components/frontend-view-theme",title:"Material and module themes",description:"Description",source:"@site/docs/development/frontend/components/theme.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/view/theme/",permalink:"/docs/development/frontend/view/theme/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/components/theme.md",tags:[],version:"current",frontMatter:{id:"frontend-view-theme",title:"Material and module themes",sidebar_label:"Theme",slug:"/development/frontend/view/theme/"},sidebar:"dev",previous:{title:"Internationalization",permalink:"/docs/development/frontend/view/international/"},next:{title:"Forms",permalink:"/docs/development/frontend/view/forms/"}},s={},m=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"How to",id:"how-to",level:2},{value:"Get properties from the MUI and module themes context",id:"get-properties-from-the-mui-and-module-themes-context",level:3},{value:"Connect with Material UI theme context",id:"connect-with-material-ui-theme-context",level:3},{value:"Connect with MUI and module theme",id:"connect-with-mui-and-module-theme",level:3},{value:"1. Declare style builder",id:"1-declare-style-builder",level:3},{value:"2. Connect component to module theme provider",id:"2-connect-component-to-module-theme-provider",level:3},{value:"2.a Using ModuleStyleProvider",id:"2a-using-modulestyleprovider",level:4},{value:"2.b Using withModuleStyle",id:"2b-using-withmodulestyle",level:4},{value:"3. Add context type",id:"3-add-context-type",level:3}],d={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"@regards/theme")," (web_modules/utils/theme) projects holds components and tools designed to simplify the use of global ",(0,l.kt)("a",{parentName:"p",href:"http://www.material-ui.com/#/customization/themes"},"Material-ui")," theme - called MUI theme in the next lines - over all REGARDS frontend react components. MUI theme holds a dictionnary of variables, sorted by categories, defining styles like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"padding"),(0,l.kt)("li",{parentName:"ul"},"margin"),(0,l.kt)("li",{parentName:"ul"},"borders"),(0,l.kt)("li",{parentName:"ul"},"colors "),(0,l.kt)("li",{parentName:"ul"},"and so on...")),(0,l.kt)("p",null,"Beside MUI theme, some of the ",(0,l.kt)("inlineCode",{parentName:"p"},"regards/theme")," components also provides a connector with ",(0,l.kt)("inlineCode",{parentName:"p"},"module theme")," context. The context corresponds to specific variables built by a theme builder function for a component or a group of components."),(0,l.kt)("p",null,"Both MUI and module themes context will be detailed in following sections."),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"To use the REGARDS theme components and tools you must add the here under package to your package.json dependencies:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@regardsoss/theme")),(0,l.kt)("h2",{id:"how-to"},"How to"),(0,l.kt)("h3",{id:"get-properties-from-the-mui-and-module-themes-context"},"Get properties from the MUI and module themes context"),(0,l.kt)("p",null,"In components ",(0,l.kt)("strong",{parentName:"p"},"with theme context")," (see later sections), you can retrieve theme properties in:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"this.context.muiTheme"),": That object holds Material UI theme categories, palette, card, and so on. Please refer to Material UI official documentation for more details about that object."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"this.context.moduleTheme"),": That object holds module theme, as exported by the theme builder function.")),(0,l.kt)("p",null,"In order to access those context elements, the component must declare the ",(0,l.kt)("inlineCode",{parentName:"p"},"themeContextType")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"contextTypes"),", as shown in example below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { themeContextType } from '@regardsoss/theme'\n\nexport class ExampleComponent extends React.Component {\n\n  static contextTypes = {\n      ...themeContextType,\n  }\n\n  render() {\n    const mainColor = this.context.muiTheme.palette.priamy1Color\n    const someModuleStyle = this.context.moduleTheme.aValue\n    ...\n  }\n}\n")),(0,l.kt)("h3",{id:"connect-with-material-ui-theme-context"},"Connect with Material UI theme context"),(0,l.kt)("p",null,"In REGARDS, the MUI theme context can be provided to children by using ",(0,l.kt)("strong",{parentName:"p"},"ThemeProvider")," component like demonstrated in following exmaple. Please note that this connector adds only MUI theme context, not the module theme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ThemeProvider } from '@regardsoss/theme'\n\nexport class ExampleContainer extends React.Component {\n\n  render() {\n    return (\n      <ThemeProvider>\n        <ExampleComponent />\n      </ThemeProvider>\n    )\n  }\n}\n")),(0,l.kt)("p",null,"In the previous example, ExampleComponent will be able to access the MUI theme variables through context ",(0,l.kt)("em",{parentName:"p"},"but ExampleContainer will not"),". Indeed context is defined for ",(0,l.kt)("strong",{parentName:"p"},"ThemeProvider children"),", in the React meaning."),(0,l.kt)("p",null,"Note: Most of the time, REGARDS developer doesn't need to use the ThemeProvider, as MUI Theme context is provided in all REGARDS applications."),(0,l.kt)("h3",{id:"connect-with-mui-and-module-theme"},"Connect with MUI and module theme"),(0,l.kt)("p",null,"As explained before in this page, REGARDS allows a component or a group of components to define custom styles, called ",(0,l.kt)("inlineCode",{parentName:"p"},"module styles"),", through a style builder function. The developer should follow the next steps to define and access such theme in components."),(0,l.kt)("h3",{id:"1-declare-style-builder"},"1","."," Declare style builder"),(0,l.kt)("p",null,"The style builder function produces a javascript object based on MUI theme as parameter. Such object must be structured to match component(s) needs at render time. By convention in REGARDS, style builder functions are placed in styles.js files. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// content of styles.js\n\n/**\n * Builds module style on theme\n */\nexport default theme => ({ // MUI theme is provided as function parameter, to access MUI colors and such...\n  myCustomPane: {\n    color: theme.palette.textColor,\n  }\n  // ...\n})\n")),(0,l.kt)("p",null,"When dealing with styles, we also declare frequently an index.js file, that only exports the style builder function in an object like { style: styleBuilderFunction }. That makes it easier to instantiate context later on."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// content of index.js\nimport styles from './styles'\n\nmodule.exports = { styles }\n\n")),(0,l.kt)("h3",{id:"2-connect-component-to-module-theme-provider"},"2","."," Connect component to module theme provider"),(0,l.kt)("p",null,"In REGARDS, the MUI and module theme contexts can be provided to children by using either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"ModuleStyleProvider")," component")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"withModuleStyle")," decorator function"),(0,l.kt)("p",{parentName:"li"},"Those two methods are detailed in sections below."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"Note: Theme connectors also define an optional parameter/property called ",(0,l.kt)("inlineCode",{parentName:"em"},"stackCallingContext")," (false by default). That property, when true, indicates that the new context and parent context should be merged. It results in providing both parent and new context themes to children. When exploring REGARDS code, that method is frequently encountered, especially in common components, as it allows the calling component defining children using calling context themes while API components still access themes in their own context.")))),(0,l.kt)("h4",{id:"2a-using-modulestyleprovider"},"2",".","a Using ModuleStyleProvider"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ModuleStyleProvider")," component provides MUI module themes context to its React children, as demonstrated in example below.\nIt defines the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"module"),": an object with a single field ",(0,l.kt)("inlineCode",{parentName:"li"},"styles"),", holding the style builder function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stackCallingContext"),": an optional boolean, false by default. See note in parent section for more detail.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"  import { ModuleStyleProvider } from '@regardsoss/theme'\n  import ExampleComponent from './ExampleComponent'\n  import moduleStyles from '../../styles' // assuming there is an index.js\n\n  export class ExampleContainer extends React.Component {\n\n    render() {\n      return (\n        <ModuleStyleProvider module={moduleStyles}>\n          <ExampleComponent />\n        </ModuleStyleProvider>)\n    }\n  }\n")),(0,l.kt)("p",null,"In the previous example, ExampleComponent will be able to access muiTheme and moduleTheme through context ",(0,l.kt)("em",{parentName:"p"},"but ExampleContainer will not"),". Indeed context is defined for ",(0,l.kt)("strong",{parentName:"p"},"ModuleStyleProvider children"),", in the React meaning."),(0,l.kt)("p",null,"For instance, in the following React tree, B and C can access themes through context, but A can not."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<A>\n  <ModuleStyleProvider module={moduleStyles}>\n      <B>\n        <C />\n      </B>\n  </ModuleStyleProvider>\n</A>\n")),(0,l.kt)("h4",{id:"2b-using-withmodulestyle"},"2",".","b Using withModuleStyle"),(0,l.kt)("p",null,"To use the REGARDS withModuleStyle decorator method, you need to export the component decorated with that method. It defines the following parameters (matching with ModuleStyleProvider properties described before):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"module")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"stackCallingContext"))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { withModuleStyle } from '@regardsoss/theme'\nimport moduleStyles from '../../styles' // assuming there is an index.js\n\nclass ExampleContainer extends React.Component {\n\n  render() {\n    // ...\n  }\n}\n\nexport withModuleStyle(moduleStyles)(ExampleContainer)\n")),(0,l.kt)("p",null,"The use of ",(0,l.kt)("inlineCode",{parentName:"p"},"withModuleStyle(moduleStyles)(ExampleContainer)")," means that module theme context will be defined for ExampleContainer and all its children. Therefore, if we define the ",(0,l.kt)("inlineCode",{parentName:"p"},"contextTypes")," in this container, it will be able accessing the module theme through its context."),(0,l.kt)("h3",{id:"3-add-context-type"},"3","."," Add context type"),(0,l.kt)("p",null,"Finally, theme context can be used in container children, and in container itself when withModuleStyle decorator method was used. To access it, as seen in first 'how to' section, the developer has to declare context types, like in example below."),(0,l.kt)("p",null,"Example: a component declaring and consuming theme context:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { withModuleStyle } from '@regardsoss/theme'\nimport moduleStyles from '../../styles' // assuming there is an index.js\n\nclass CompleteExample extends React.Component {\n\n  static contextTypes = {\n      ...themeContextType,\n  }\n\n  render() {\n    const { moduleTheme, muiTheme } = this.context\n    const styleFromTheme = { color: muiTheme.palette.textColor }\n    return (\n      <div>\n        <div style={styleFromTheme}>Using MUI theme color </div>\n        { /* \n        we suppose here that style builder returned something like \n        { completeExample: { border: '1px solid red', ...} } \n        */ }\n        <div style={moduleTheme.completeExample.style}>Using some module theme </div>\n      </div>\n    )\n    // ...\n  }\n}\n\nexport withModuleStyle(moduleStyles)(CompleteExample)\n")))}c.isMDXComponent=!0}}]);