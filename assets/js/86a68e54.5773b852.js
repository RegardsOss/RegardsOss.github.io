"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[66706],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=o,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42551:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={id:"frontend-packages-lazy-modules",title:"Dynamic lazy loadable modules",sidebar_label:"Overview - Lazy modules",slug:"/development/frontend/packages/lazy-modules/"},i=void 0,l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules",id:"version-1.12.0/development/frontend/modules/frontend-packages-lazy-modules",title:"Dynamic lazy loadable modules",description:"Description",source:"@site/versioned_docs/version-1.12.0/development/frontend/modules/dynamic-modules.md",sourceDirName:"development/frontend/modules",slug:"/development/frontend/packages/lazy-modules/",permalink:"/docs/1.12.0/development/frontend/packages/lazy-modules/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/frontend/modules/dynamic-modules.md",tags:[],version:"1.12.0",frontMatter:{id:"frontend-packages-lazy-modules",title:"Dynamic lazy loadable modules",sidebar_label:"Overview - Lazy modules",slug:"/development/frontend/packages/lazy-modules/"},sidebar:"dev",previous:{title:"Microservice plugin configurator",permalink:"/docs/1.12.0/development/frontend/packages/business-components/microservice-plugin-configurator/"},next:{title:"Authentication",permalink:"/docs/1.12.0/development/frontend/packages/lazy-modules/authentication/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Modules list",id:"modules-list",level:2},{value:"Module structure",id:"module-structure",level:2},{value:"About default icon:",id:"about-default-icon",level:3},{value:"Create a new module",id:"create-a-new-module",level:2},{value:"Dynamic Module architecture",id:"dynamic-module-architecture",level:2},{value:"Description",id:"description-1",level:3},{value:"AdminContainer",id:"admincontainer",level:3},{value:"The ModuleContainer",id:"the-modulecontainer",level:3},{value:"Styles",id:"styles",level:3},{value:"Reducer",id:"reducer",level:3},{value:"Messages",id:"messages",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Load a module",id:"load-a-module",level:2}],u={toc:d},m="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"A lazy loadable module is a plugable module that project administrator has to use to build the ",(0,o.kt)("inlineCode",{parentName:"p"},"User project")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Portal")," interfaces, enabling features and graphic component into user interfaces. Those modules can be configured from the project administration interface.  "),(0,o.kt)("p",null,"Microservices ",(0,o.kt)("inlineCode",{parentName:"p"},"rs-access-instance")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rs-access-project")," store the configuration of each modules and send it back to clients when browsing ",(0,o.kt)("inlineCode",{parentName:"p"},"User project")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Portal")," interfaces."),(0,o.kt)("h2",{id:"modules-list"},"Modules list"),(0,o.kt)("p",null,"REGARDS defines currently the following dynamic modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/authentication/"},"Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/embedded-html/"},"Embedded HTML")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/licenses/"},"License")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/menu/"},"Menu")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/order-cart/"},"Order Cart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/order-history/"},"Order History")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/project-about-page/"},"Project About Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/project-list/"},"Project List")),(0,o.kt)("li",{parentName:"ul"},"Search Form"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/search-graph/"},"Search Graph"),"  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/search-results/"},"Search Results")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/development/frontend/packages/lazy-modules/storage-monitoring/"},"Storage Monitoring"))),(0,o.kt)("h2",{id:"module-structure"},"Module structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 domain          : Contains module enumerations, constants and business logic\n |   \u251c\u2500\u2500 models          : Contains specific module actions, selectors and reducers (local actions, it would be in clients otherwise)\n |   \u251c\u2500\u2500 shapes          : Contains module specific shapes (configuration for instance)\n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file   \n \u2514\u2500\u2500 README.md  \n")),(0,o.kt)("h3",{id:"about-default-icon"},"About default icon:"),(0,o.kt)("p",null,"When creating a module, we must ensure the default icon is provided and respects the following rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Its path is ",(0,o.kt)("inlineCode",{parentName:"li"},"[module folder]/default-icon.svg")," where module name is also the module root folder"),(0,o.kt)("li",{parentName:"ul"},"Icon is an SVG"),(0,o.kt)("li",{parentName:"ul"},"Icon stroke and fill colors are specified on first \\<sgv",">"," tag - otherwise, the module icon cannot be updated with theme colors  ")),(0,o.kt)("p",null,"That icon should be used to represent the module or its instances. It is used, for instance, to display navigation links in menu module - when administrator chooses to use the default icon.  "),(0,o.kt)("p",null,"SVG icons are available, for instance, on the following sites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://material.io/icons/"},"https://material.io/icons/")," : Material design icons (default regards look and feel)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://materialdesignicons.com/"},"https://materialdesignicons.com/"),": Extension to material design icons  ")),(0,o.kt)("p",null,"Finally, note that each module default-icon.svg ",(0,o.kt)("strong",{parentName:"p"},"should be unique among all modules default icons"),", so that user can quickly identify the page and module types."),(0,o.kt)("h2",{id:"create-a-new-module"},"Create a new module"),(0,o.kt)("p",null,"You can create a new module using the yeoman generator ",(0,o.kt)("inlineCode",{parentName:"p"},"generator-regards-ui-module")," provided with sources into ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp/yeoman/generator-regards-ui-module"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd webapp/yeoman/generator-regards-ui-module\n$ npm install -g yo\n$ npm link\n$ cd ../../web_modules/modules\n$ yo regards-ui-module\n")),(0,o.kt)("p",null,"After the last command, informations will be asked for the new module to generate.",(0,o.kt)("br",{parentName:"p"}),"\n","When process is over, the complete structure of a module is iniatialized with some simple examples."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important :"),(0,o.kt)("br",{parentName:"p"}),"\n","Modules are not working as independent plugins into REGARDS yet. So to be able to use a new module into the REGARDS frontend, you have to : "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Add your module to the list of dependencies into the main "webapp/package.json" : "@regardsoss-modules/{new module name}": "{module version}"'),(0,o.kt)("li",{parentName:"ul"},"Add your module to the enumeration of available modules in @regardoss/modules/modulesManager (ModulesManager.js) in one of the following enumerations:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"VisibleModuleTypes: Modules that project administrator can instantiate"),(0,o.kt)("li",{parentName:"ul"},"HiddenModuleTypes: Modules that project administrator cannot instantiate (authentication for instance, as it is automatically added into the REGARDS interfaces)")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulations"),", your module is ready! You can now run the frontend with :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd webapp\n$ npm install\n$ npm run start:with* # choose here your project start task\n")),(0,o.kt)("p",null,"To instanciate and configure your new example module :  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"go to project administrator interface, section UI, sub section modules, to instanciate and configure your module."),(0,o.kt)("li",{parentName:"ul"},"go to user project interface to see your module running.")),(0,o.kt)("h2",{id:"dynamic-module-architecture"},"Dynamic Module architecture"),(0,o.kt)("h3",{id:"description-1"},"Description"),(0,o.kt)("p",null,"To understand the main architecture of a plugable module see the main.js file :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  // A React.Component rendering the module functionalities\n  ModuleContainer,\n  // A React.Component rendering the module administration form\n  AdminContainer,\n  // A js object containing needed styles for both ModuleContainer and AdminContainer\n  styles,\n  // A js object containing Redux reducers of both ModuleContainer and AdminContainer\n  reducer,\n  // A js object containing, by locale key ("en" / "fr"), the messages map: (string) key to (string) message\n  messages,\n  // A js object containing server side endpoints dependencies required to display module\n  dependencies,\n}\n')),(0,o.kt)("h3",{id:"admincontainer"},"AdminContainer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"AdminContainer")," ",(0,o.kt)("strong",{parentName:"p"},"is facultative"),". If you don't require a module configuration,\nyou don't need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"AdminContainer")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"main.js")," module entrypoint."),(0,o.kt)("p",null,"The here-under React component example shows how to create a form for module configuration. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { FormattedMessage } from 'react-intl'\nimport { i18nContextType } from '@regardsoss/i18n'\nimport { RenderTextField, RenderCheckbox, Field } from '@regardsoss/form-utils'\nimport { ModuleConfiguration } from '../shapes/ModuleConfiguration'\n\nclass AdminContainer extends React.Component {\n\n  static propTypes = {\n      // default module properties in configuration mode\n    ...AccessShapes.runtimeConfigurationModuleFields,\n    // redefines expected configuration shape for module (specifies THIS MODULE shape)\n    moduleConf: ModuleConfiguration.isRequired,\n  }\n\n  static contextTypes = {\n    ...i18nContextType,\n  }\n\n  render() {\n    const { intl } = this.context\n    /* \n     * Please note that each field name below takes in account the current namespace. For \n     * instance, the resulting name may be \"conf.myParameter\" (parent will resolve it \n     * according with current use case, namespace allows embedding modules into other\n     * modules)\n     */\n    const { adminForm: { currentNamespace } } = this.props\n    return (\n      <div>\n        <Field\n          name={`${currentNamespace}.myParameter`}\n          fullWidth\n          component={RenderTextField}\n          type=\"text\"\n          label={intl.formatMessage({ id: 'admin.example.my.parameter.label' })}\n        />\n        <Field\n          name={`${currentNamespace}.myParameter2`}\n          component={RenderCheckbox}\n          label={intl.formatMessage({ id: 'admin.example.my.parameter2.label' })}\n        />\n        { /* ... */ }\n      </div>\n    )\n  }\n}\nexport default AdminContainer\n\n")),(0,o.kt)("p",null,"Notes :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you should prefix all ",(0,o.kt)("inlineCode",{parentName:"li"},"Field")," names with ",(0,o.kt)("inlineCode",{parentName:"li"},"currentNamespace")," to let you receive that attribute value in your ",(0,o.kt)("inlineCode",{parentName:"li"},"ModuleContainer"),".",(0,o.kt)("br",{parentName:"li"}),"For example if you define ",(0,o.kt)("inlineCode",{parentName:"li"},"${currentNamespace}.myParameter")," you will receive ",(0,o.kt)("inlineCode",{parentName:"li"},"myParameter")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"moduleConf")," property of your module ",(0,o.kt)("inlineCode",{parentName:"li"},"ModuleContainer"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@regardsoss/form-utils")," module provides ready to use input fields")),(0,o.kt)("h3",{id:"the-modulecontainer"},"The ModuleContainer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleContainer")," ",(0,o.kt)("strong",{parentName:"p"},"is mandatory"),". This is the React component displayed at module runtime (ie, not configuration)"),(0,o.kt)("p",null,"The following ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleContainer")," example shows you how to retrieve the prop ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleConf")," which\ncontains the configuration created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"AdminContainer")," and injected in your module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { i18nContextType } from '@regardsoss/i18n'\nimport { themeContextType } from '@regardsoss/theme'\nimport { FormattedMessage } from 'react-intl'\n\nclass ModuleContainer extends React.Component {\n  static propTypes = {\n      // Application name \"user\" or \"portal\"\n      appName: PropTypes.string.isRequired,\n      // Current project name\n      project: PropTypes.string.isRequired,\n      // Module configuration\n      moduleConf: PropTypes.shape({\n        myParameter: PropTypes.string,\n        myParameter2: PropTypes.bool,\n      }).isRequired,\n  }\n\n  static contextTypes = {\n    ...i18nContextType,\n    ...themeContextType,\n  }\n\n  render() {\n    const { moduleTheme } = this.context\n    const { moduleConf: {myParameter} } = this.props\n    return (\n     <div>\n      <FormattedMessage id=\"example.message\" />\n      <div style={moduleTheme.myParameterStyles}>\n        {myParameter}\n       </div>\n     </div>\n     )\n  }\n\n}\nexport default ModuleContainer\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Notes: the module '@regardsoss/module-api' holds components to make modules writing a bit easier.")),(0,o.kt)("h3",{id:"styles"},"Styles"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"styles")," field ",(0,o.kt)("strong",{parentName:"p"},"is mandatory"),", although it can build an empty object. REGARDS frontend uses the ",(0,o.kt)("a",{parentName:"p",href:"http://www.material-ui.com/#/get-started/usage"},"Material-UI")," library to style all components using inline CSS styles."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Styles.js")," file, you can use the current theme to reuse a subpart of the overall theme, like illustrated in the example below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const formStyles = theme => ({\n\n  myParameterStyles: {\n    color : theme.palette.textColor,\n    width: '250px'\n  }\n\n})\nexport default formStyles\n")),(0,o.kt)("p",null,"In your module React component, you can access the styles using the context ",(0,o.kt)("inlineCode",{parentName:"p"},"this.context.moduleTheme"),",\nbut you need to explicit the ",(0,o.kt)("inlineCode",{parentName:"p"},"contextTypes")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"...themeContextType")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@regardsoss/theme"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n* Basic usage of the theme context\n*/\nclass Example extends React.Component {\n   static contextTypes = {\n     ...themeContextType\n   }\n\n   render() {\n     return (\n       <div style={this.context.moduleTheme.myParameterStyles}>\n        Test\n       </div>\n     )\n   }\n}\nexport default Example\n\n")),(0,o.kt)("p",null,"More information about the theme management are available in ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/development/frontend/view/theme/"},"theme page"),"."),(0,o.kt)("h3",{id:"reducer"},"Reducer"),(0,o.kt)("p",null,"The Redux ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," for module ",(0,o.kt)("strong",{parentName:"p"},"is mandatory"),". Lazy loadable modules have their own part created in the store.  "),(0,o.kt)("p",null,"The example below shows how to define your Redux tree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const reducers = {\n  todos: MyTodosReducer,\n  foo: MyFooReducer\n}\n")),(0,o.kt)("p",null,'With the previous example and for a module named "ExampleModule", the application will create the here-under subpart in the global application store :  '),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "modules.ExampleModule": {\n    "todos": {},\n    "foo" : {}\n  }\n  // rest of the redux tree\n}\n')),(0,o.kt)("p",null,"The same store can be accessed by both ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleContainer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AdminContainer"),"."),(0,o.kt)("h3",{id:"messages"},"Messages"),(0,o.kt)("p",null,"This parameter allows you to provide module messages, which are, by convention, stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/i18n"),".",(0,o.kt)("br",{parentName:"p"}),"\n","When exporting that object, you should provide an object like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const messages = {\n  en: {\n    'my.message.1': 'My message',\n  },\n  fr: {\n    'my.message.1': 'Mon message',\n  }\n}\n\n")),(0,o.kt)("p",null,"By convention, we import that object in module main.js file from ",(0,o.kt)("inlineCode",{parentName:"p"},"src/i18n/index.js")," (noted src/i18n in code). That file only imports all locales languages from corresponding files ",(0,o.kt)("inlineCode",{parentName:"p"},"messages.<language>.i18n.js"),", where language is 'en', 'fr'... Then it exports messages object as illustrated before."),(0,o.kt)("p",null,"More information about the internationalization are available in ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/development/frontend/view/international/"},"internationalization page"),"."),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"This file defines dependencies required to display ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleContainer")," (user field) and ",(0,o.kt)("inlineCode",{parentName:"p"},"AdminContainer")," (admin field). Those dependencies will be evaluated for the current user role.\nEach endpoint dependency required is composed in 3 parts, separated by the '@' caracter:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"<MICROSERVICE>@<ENDPOINT>@<HTTP_VERB>")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example of a module dependencies file:"),"  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\n/**\n * Dependencies needed to display ModuleContainer\n */\nconst user = [\n  'rs-dam@/models/attributes@GET',\n]\n/**\n * Dependencies needed to display AdminContainer\n */\nconst admin = [\n  'rs-dam@/models/attributes@POST',\n]\n\nexport default {\n  user,\n  admin,\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: REGARDS actions are able exporting such format dependencies using the method getDependency(VERB), where VERB enumeration can be found in @regardoss/store-utils.RequestVerbEnum")),(0,o.kt)("h2",{id:"load-a-module"},"Load a module"),(0,o.kt)("p",null,"Also most dynamic modules are made to be configured by the administrator, through REGARDS project administration interface, it is still possible to load them in code. The example below shows how to load authentication module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"    import { modulesManager } from '@regardoss/modules'\n    // ...\n\n    render() {\n    const moduleConfiguration = {\n       type: modulesManager.AllDynamicModuleTypes.AUTHENTICATION,\n       active: true,\n       conf: { // specific authentication module configuration field, will be the moduleConf field when in authentication ModuleContainer\n          showLoginWindow: this.state.isLogin,\n          showCancel: true,\n          showAskProjectAccess: false,\n          loginTitle: 'My login',\n          onCancelAction: this.onCancelLogin,\n       }\n    }\n    return (\n      <LazyModuleComponent\n        module={moduleConfiguration}\n        appName={'user'}\n        project={'project'}\n      />\n      )\n    }\n")))}p.isMDXComponent=!0}}]);