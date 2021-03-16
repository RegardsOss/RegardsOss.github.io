(window.webpackJsonp=window.webpackJsonp||[]).push([[2450],{2520:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(3),o=t(7),r=(t(0),t(2701)),i={id:"frontend-packages-lazy-modules",title:"Dynamic lazy loadable modules",sidebar_label:"Overview - Lazy modules",slug:"/development/frontend/packages/lazy-modules"},l={unversionedId:"development/frontend/modules/frontend-packages-lazy-modules",id:"version-1.4.0/development/frontend/modules/frontend-packages-lazy-modules",isDocsHomePage:!1,title:"Dynamic lazy loadable modules",description:"Description",source:"@site/versioned_docs/version-1.4.0/development/frontend/modules/dynamic-modules.md",slug:"/development/frontend/packages/lazy-modules",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/modules/dynamic-modules.md",version:"1.4.0",sidebar_label:"Overview - Lazy modules",sidebar:"version-1.4.0/dev",previous:{title:"Microservice plugin configurator",permalink:"/docs/1.4.0/development/frontend/packages/business-components/microservice-plugin-configurator"},next:{title:"Frontend - Dynamic module Authentication",permalink:"/docs/1.4.0/development/frontend/packages/lazy-modules/authentication"}},s=[{value:"Description",id:"description",children:[]},{value:"Modules list",id:"modules-list",children:[]},{value:"Module structure",id:"module-structure",children:[{value:"About default icon:",id:"about-default-icon",children:[]}]},{value:"Create a new module",id:"create-a-new-module",children:[]},{value:"Dynamic Module architecture",id:"dynamic-module-architecture",children:[{value:"Description",id:"description-1",children:[]},{value:"AdminContainer",id:"admincontainer",children:[]},{value:"The ModuleContainer",id:"the-modulecontainer",children:[]},{value:"Styles",id:"styles",children:[]},{value:"Reducer",id:"reducer",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Dependencies",id:"dependencies",children:[]}]},{value:"Load a module",id:"load-a-module",children:[]}],c={toc:s};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"A lazy loadable module is a plugable module that project administrator has to use to build the ",Object(r.b)("inlineCode",{parentName:"p"},"User project")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Portal")," interfaces, enabling features and graphic component into user interfaces. Those modules can be configured from the project administration interface.  "),Object(r.b)("p",null,"Microservices ",Object(r.b)("inlineCode",{parentName:"p"},"rs-access-instance")," and ",Object(r.b)("inlineCode",{parentName:"p"},"rs-access-project")," store the configuration of each modules and send it back to clients when browsing ",Object(r.b)("inlineCode",{parentName:"p"},"User project")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Portal")," interfaces."),Object(r.b)("h2",{id:"modules-list"},"Modules list"),Object(r.b)("p",null,"REGARDS defines currently the following dynamic modules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/authentication"},"Authentication")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/embedded-html"},"Embedded HTML")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/licenses"},"License")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/menu"},"Menu")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/order-cart"},"Order Cart")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/order-history"},"Order History")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/project-about-page"},"Project About Page")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/project-list"},"Project List")),Object(r.b)("li",{parentName:"ul"},"Search Form"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/search-graph"},"Search Graph"),"  "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/search-results"},"Search Results")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"lazy-modules/storage-monitoring"},"Storage Monitoring"))),Object(r.b)("h2",{id:"module-structure"},"Module structure"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"}," .  \n \u251c\u2500\u2500 src  \n |   \u251c\u2500\u2500  \n |   \u251c\u2500\u2500 clients         : Define all backend clients needed to request/send information  \n |   \u251c\u2500\u2500 components      : React component to display panels  \n |   \u251c\u2500\u2500 containers      : React-Redux logic to handle module functions  \n |   \u251c\u2500\u2500 domain          : Contains module enumerations, constants and business logic\n |   \u251c\u2500\u2500 models          : Contains specific module actions, selectors and reducers (local actions, it would be in clients otherwise)\n |   \u251c\u2500\u2500 shapes          : Contains module specific shapes (configuration for instance)\n |   \u251c\u2500\u2500 i18n            : Messages and labels internationalization  \n |   \u251c\u2500\u2500 styles          : Panels styles (inline css objects)  \n |   \u251c\u2500\u2500 main.js         : Module exported index  \n |   \u251c\u2500\u2500 reducer.js      : Redux reducers  \n |   \u2514\u2500\u2500 router.js       : React-router configuration  \n \u251c\u2500\u2500 tests  \n \u251c\u2500\u2500 default-icon.svg    : Default module icon as svg, mandatory\n \u251c\u2500\u2500 package.json        : Npm module description file   \n \u2514\u2500\u2500 README.md  \n")),Object(r.b)("h3",{id:"about-default-icon"},"About default icon:"),Object(r.b)("p",null,"When creating a module, we must ensure the default icon is provided and respects the following rules:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Its path is ",Object(r.b)("inlineCode",{parentName:"li"},"[module folder]/default-icon.svg")," where module name is also the module root folder"),Object(r.b)("li",{parentName:"ul"},"Icon is an SVG"),Object(r.b)("li",{parentName:"ul"},"Icon stroke and fill colors are specified on first \\<sgv",">"," tag - otherwise, the module icon cannot be updated with theme colors  ")),Object(r.b)("p",null,"That icon should be used to represent the module or its instances. It is used, for instance, to display navigation links in menu module - when administrator chooses to use the default icon.  "),Object(r.b)("p",null,"SVG icons are available, for instance, on the following sites:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://material.io/icons/"},"https://material.io/icons/")," : Material design icons (default regards look and feel)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://materialdesignicons.com/"},"https://materialdesignicons.com/"),": Extension to material design icons  ")),Object(r.b)("p",null,"Finally, note that each module default-icon.svg ",Object(r.b)("strong",{parentName:"p"},"should be unique among all modules default icons"),", so that user can quickly identify the page and module types."),Object(r.b)("h2",{id:"create-a-new-module"},"Create a new module"),Object(r.b)("p",null,"You can create a new module using the yeoman generator ",Object(r.b)("inlineCode",{parentName:"p"},"generator-regards-ui-module")," provided with sources into ",Object(r.b)("inlineCode",{parentName:"p"},"webapp/yeoman/generator-regards-ui-module"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ cd webapp/yeoman/generator-regards-ui-module\n$ npm install -g yo\n$ npm link\n$ cd ../../web_modules/modules\n$ yo regards-ui-module\n")),Object(r.b)("p",null,"After the last command, informations will be asked for the new module to generate.",Object(r.b)("br",{parentName:"p"}),"\n","When process is over, the complete structure of a module is iniatialized with some simple examples."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Important :"),Object(r.b)("br",{parentName:"p"}),"\n","Modules are not working as independent plugins into REGARDS yet. So to be able to use a new module into the REGARDS frontend, you have to : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Add your module to the list of dependencies into the main "webapp/package.json" : "@regardsoss-modules/{new module name}": "{module version}"'),Object(r.b)("li",{parentName:"ul"},"Add your module to the enumeration of available modules in @regardoss/modules/modulesManager (ModulesManager.js) in one of the following enumerations:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"VisibleModuleTypes: Modules that project administrator can instantiate"),Object(r.b)("li",{parentName:"ul"},"HiddenModuleTypes: Modules that project administrator cannot instantiate (authentication for instance, as it is automatically added into the REGARDS interfaces)")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Congratulations"),", your module is ready! You can now run the frontend with :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ cd webapp\n$ npm install\n$ npm run start:with* # choose here your project start task\n")),Object(r.b)("p",null,"To instanciate and configure your new example module :  "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"go to project administrator interface, section UI, sub section modules, to instanciate and configure your module."),Object(r.b)("li",{parentName:"ul"},"go to user project interface to see your module running.")),Object(r.b)("h2",{id:"dynamic-module-architecture"},"Dynamic Module architecture"),Object(r.b)("h3",{id:"description-1"},"Description"),Object(r.b)("p",null,"To understand the main architecture of a plugable module see the main.js file :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  // A React.Component rendering the module functionalities\n  ModuleContainer,\n  // A React.Component rendering the module administration form\n  AdminContainer,\n  // A js object containing needed styles for both ModuleContainer and AdminContainer\n  styles,\n  // A js object containing Redux reducers of both ModuleContainer and AdminContainer\n  reducer,\n  // A js object containing, by locale key ("en" / "fr"), the messages map: (string) key to (string) message\n  messages,\n  // A js object containing server side endpoints dependencies required to display module\n  dependencies,\n}\n')),Object(r.b)("h3",{id:"admincontainer"},"AdminContainer"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"AdminContainer")," ",Object(r.b)("strong",{parentName:"p"},"is facultative"),". If you don't require a module configuration,\nyou don't need to specify the ",Object(r.b)("inlineCode",{parentName:"p"},"AdminContainer")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"main.js")," module entrypoint."),Object(r.b)("p",null,"The here-under React component example shows how to create a form for module configuration. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { FormattedMessage } from 'react-intl'\nimport { i18nContextType } from '@regardsoss/i18n'\nimport { RenderTextField, RenderCheckbox, Field } from '@regardsoss/form-utils'\nimport { ModuleConfiguration } from '../shapes/ModuleConfiguration'\n\nclass AdminContainer extends React.Component {\n\n  static propTypes = {\n      // default module properties in configuration mode\n    ...AccessShapes.runtimeConfigurationModuleFields,\n    // redefines expected configuration shape for module (specifies THIS MODULE shape)\n    moduleConf: ModuleConfiguration.isRequired,\n  }\n\n  static contextTypes = {\n    ...i18nContextType,\n  }\n\n  render() {\n    const { intl } = this.context\n    /* \n     * Please note that each field name below takes in account the current namespace. For \n     * instance, the resulting name may be \"conf.myParameter\" (parent will resolve it \n     * according with current use case, namespace allows embedding modules into other\n     * modules)\n     */\n    const { adminForm: { currentNamespace } } = this.props\n    return (\n      <div>\n        <Field\n          name={`${currentNamespace}.myParameter`}\n          fullWidth\n          component={RenderTextField}\n          type=\"text\"\n          label={intl.formatMessage({ id: 'admin.example.my.parameter.label' })}\n        />\n        <Field\n          name={`${currentNamespace}.myParameter2`}\n          component={RenderCheckbox}\n          label={intl.formatMessage({ id: 'admin.example.my.parameter2.label' })}\n        />\n        { /* ... */ }\n      </div>\n    )\n  }\n}\nexport default AdminContainer\n\n")),Object(r.b)("p",null,"Notes :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"you should prefix all ",Object(r.b)("inlineCode",{parentName:"li"},"Field")," names with ",Object(r.b)("inlineCode",{parentName:"li"},"currentNamespace")," to let you receive that attribute value in your ",Object(r.b)("inlineCode",{parentName:"li"},"ModuleContainer"),".",Object(r.b)("br",{parentName:"li"}),"For example if you define ",Object(r.b)("inlineCode",{parentName:"li"},"${currentNamespace}.myParameter")," you will receive ",Object(r.b)("inlineCode",{parentName:"li"},"myParameter")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"moduleConf")," property of your module ",Object(r.b)("inlineCode",{parentName:"li"},"ModuleContainer"),". "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"@regardsoss/form-utils")," module provides ready to use input fields")),Object(r.b)("h3",{id:"the-modulecontainer"},"The ModuleContainer"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"ModuleContainer")," ",Object(r.b)("strong",{parentName:"p"},"is mandatory"),". This is the React component displayed at module runtime (ie, not configuration)"),Object(r.b)("p",null,"The following ",Object(r.b)("inlineCode",{parentName:"p"},"ModuleContainer")," example shows you how to retrieve the prop ",Object(r.b)("inlineCode",{parentName:"p"},"moduleConf")," which\ncontains the configuration created with the ",Object(r.b)("inlineCode",{parentName:"p"},"AdminContainer")," and injected in your module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"import { i18nContextType } from '@regardsoss/i18n'\nimport { themeContextType } from '@regardsoss/theme'\nimport { FormattedMessage } from 'react-intl'\n\nclass ModuleContainer extends React.Component {\n  static propTypes = {\n      // Application name \"user\" or \"portal\"\n      appName: PropTypes.string.isRequired,\n      // Current project name\n      project: PropTypes.string.isRequired,\n      // Module configuration\n      moduleConf: PropTypes.shape({\n        myParameter: PropTypes.string,\n        myParameter2: PropTypes.bool,\n      }).isRequired,\n  }\n\n  static contextTypes = {\n    ...i18nContextType,\n    ...themeContextType,\n  }\n\n  render() {\n    const { moduleTheme } = this.context\n    const { moduleConf: {myParameter} } = this.props\n    return (\n     <div>\n      <FormattedMessage id=\"example.message\" />\n      <div style={moduleTheme.myParameterStyles}>\n        {myParameter}\n       </div>\n     </div>\n     )\n  }\n\n}\nexport default ModuleContainer\n\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Notes: the module '@regardsoss/module-api' holds components to make modules writing a bit easier.")),Object(r.b)("h3",{id:"styles"},"Styles"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"styles")," field ",Object(r.b)("strong",{parentName:"p"},"is mandatory"),", although it can build an empty object. REGARDS frontend uses the ",Object(r.b)("a",{parentName:"p",href:"http://www.material-ui.com/#/get-started/usage"},"Material-UI")," library to style all components using inline CSS styles."),Object(r.b)("p",null,"In the ",Object(r.b)("inlineCode",{parentName:"p"},"Styles.js")," file, you can use the current theme to reuse a subpart of the overall theme, like illustrated in the example below."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const formStyles = theme => ({\n\n  myParameterStyles: {\n    color : theme.palette.textColor,\n    width: '250px'\n  }\n\n})\nexport default formStyles\n")),Object(r.b)("p",null,"In your module React component, you can access the styles using the context ",Object(r.b)("inlineCode",{parentName:"p"},"this.context.moduleTheme"),",\nbut you need to explicit the ",Object(r.b)("inlineCode",{parentName:"p"},"contextTypes")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"...themeContextType")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@regardsoss/theme"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"/**\n* Basic usage of the theme context\n*/\nclass Example extends React.Component {\n   static contextTypes = {\n     ...themeContextType\n   }\n\n   render() {\n     return (\n       <div style={this.context.moduleTheme.myParameterStyles}>\n        Test\n       </div>\n     )\n   }\n}\nexport default Example\n\n")),Object(r.b)("p",null,"More information about the theme management are available in ",Object(r.b)("a",{parentName:"p",href:"../view/theme/"},"theme page"),"."),Object(r.b)("h3",{id:"reducer"},"Reducer"),Object(r.b)("p",null,"The Redux ",Object(r.b)("inlineCode",{parentName:"p"},"reducer")," for module ",Object(r.b)("strong",{parentName:"p"},"is mandatory"),". Lazy loadable modules have their own part created in the store.  "),Object(r.b)("p",null,"The example below shows how to define your Redux tree."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const reducers = {\n  todos: MyTodosReducer,\n  foo: MyFooReducer\n}\n")),Object(r.b)("p",null,'With the previous example and for a module named "ExampleModule", the application will create the here-under subpart in the global application store :  '),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "modules.ExampleModule": {\n    "todos": {},\n    "foo" : {}\n  }\n  // rest of the redux tree\n}\n')),Object(r.b)("p",null,"The same store can be accessed by both ",Object(r.b)("inlineCode",{parentName:"p"},"ModuleContainer")," and ",Object(r.b)("inlineCode",{parentName:"p"},"AdminContainer"),"."),Object(r.b)("h3",{id:"messages"},"Messages"),Object(r.b)("p",null,"This parameter allows you to provide module messages, which are, by convention, stored in ",Object(r.b)("inlineCode",{parentName:"p"},"src/i18n"),".",Object(r.b)("br",{parentName:"p"}),"\n","When exporting that object, you should provide an object like:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const messages = {\n  en: {\n    'my.message.1': 'My message',\n  },\n  fr: {\n    'my.message.1': 'Mon message',\n  }\n}\n\n")),Object(r.b)("p",null,"By convention, we import that object in module main.js file from ",Object(r.b)("inlineCode",{parentName:"p"},"src/i18n/index.js")," (noted src/i18n in code). That file only imports all locales languages from corresponding files ",Object(r.b)("inlineCode",{parentName:"p"},"messages.<language>.i18n.js"),", where language is 'en', 'fr'... Then it exports messages object as illustrated before."),Object(r.b)("p",null,"More information about the internationalization are available in ",Object(r.b)("a",{parentName:"p",href:"../view/international"},"internationalization page"),"."),Object(r.b)("h3",{id:"dependencies"},"Dependencies"),Object(r.b)("p",null,"This file defines dependencies required to display ",Object(r.b)("inlineCode",{parentName:"p"},"ModuleContainer")," (user field) and ",Object(r.b)("inlineCode",{parentName:"p"},"AdminContainer")," (admin field). Those dependencies will be evaluated for the current user role.\nEach endpoint dependency required is composed in 3 parts, separated by the '@' caracter:",Object(r.b)("br",{parentName:"p"}),"\n",Object(r.b)("inlineCode",{parentName:"p"},"<MICROSERVICE>@<ENDPOINT>@<HTTP_VERB>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Example of a module dependencies file:"),"  "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"\n/**\n * Dependencies needed to display ModuleContainer\n */\nconst user = [\n  'rs-dam@/models/attributes@GET',\n]\n/**\n * Dependencies needed to display AdminContainer\n */\nconst admin = [\n  'rs-dam@/models/attributes@POST',\n]\n\nexport default {\n  user,\n  admin,\n}\n\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Note: REGARDS actions are able exporting such format dependencies using the method getDependency(VERB), where VERB enumeration can be found in @regardoss/store-utils.RequestVerbEnum")),Object(r.b)("h2",{id:"load-a-module"},"Load a module"),Object(r.b)("p",null,"Also most dynamic modules are made to be configured by the administrator, through REGARDS project administration interface, it is still possible to load them in code. The example below shows how to load authentication module."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"    import { modulesManager } from '@regardoss/modules'\n    // ...\n\n    render() {\n    const moduleConfiguration = {\n       type: modulesManager.AllDynamicModuleTypes.AUTHENTICATION,\n       active: true,\n       conf: { // specific authentication module configuration field, will be the moduleConf field when in authentication ModuleContainer\n          showLoginWindow: this.state.isLogin,\n          showCancel: true,\n          showAskProjectAccess: false,\n          loginTitle: 'My login',\n          onCancelAction: this.onCancelLogin,\n       }\n    }\n    return (\n      <LazyModuleComponent\n        module={moduleConfiguration}\n        appName={'user'}\n        project={'project'}\n      />\n      )\n    }\n")))}d.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),d=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),p=a,b=u["".concat(i,".").concat(p)]||u[p]||m[p]||r;return t?o.a.createElement(b,l(l({ref:n},c),{},{components:t})):o.a.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);