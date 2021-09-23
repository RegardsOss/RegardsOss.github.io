"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27734],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?i.createElement(g,r(r({ref:n},u),{},{components:t})):i.createElement(g,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},51110:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var i=t(87462),a=t(63366),l=(t(67294),t(3905)),r=["components"],o={id:"frontend-plugins",title:"REGARDS Frontend Plugins",sidebar_label:"Plugins introduction",slug:"/development/frontend/plugins/"},s=void 0,p={unversionedId:"development/frontend/plugins/frontend-plugins",id:"version-1.5.0/development/frontend/plugins/frontend-plugins",isDocsHomePage:!1,title:"REGARDS Frontend Plugins",description:"Presentation",source:"@site/versioned_docs/version-1.5.0/development/frontend/plugins/plugins.md",sourceDirName:"development/frontend/plugins",slug:"/development/frontend/plugins/",permalink:"/fr/docs/1.5.0/development/frontend/plugins/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/frontend/plugins/plugins.md",version:"1.5.0",frontMatter:{id:"frontend-plugins",title:"REGARDS Frontend Plugins",sidebar_label:"Plugins introduction",slug:"/development/frontend/plugins/"},sidebar:"version-1.5.0/dev",previous:{title:"Storage monitoring",permalink:"/fr/docs/1.5.0/development/frontend/packages/lazy-modules/storage-monitoring/"},next:{title:"Criteria",permalink:"/fr/docs/1.5.0/development/frontend/plugins/criteria/"}},u=[{value:"Presentation",id:"presentation",children:[]},{value:"Main principles",id:"main-principles",children:[]},{value:"Create a new plugin",id:"create-a-new-plugin",children:[]},{value:"Plugin folder structure",id:"plugin-folder-structure",children:[]},{value:"Commands",id:"commands",children:[{value:"1. Install plugin",id:"1-install-plugin",children:[]},{value:"2. Compile plugin",id:"2-compile-plugin",children:[]},{value:"3. Tests commands",id:"3-tests-commands",children:[]},{value:"4. Lint source code",id:"4-lint-source-code",children:[]},{value:"5. Plugins group commands",id:"5-plugins-group-commands",children:[]}]},{value:"Deploy plugin",id:"deploy-plugin",children:[{value:"For development",id:"for-development",children:[]},{value:"For production",id:"for-production",children:[]}]},{value:"Implementation",id:"implementation",children:[{value:"Plugin entry point",id:"plugin-entry-point",children:[]},{value:"plugin-info.json",id:"plugin-infojson",children:[]},{value:"Plugin configuration view",id:"plugin-configuration-view",children:[]},{value:"Plugin user view",id:"plugin-user-view",children:[]},{value:"Redux management in plugins",id:"redux-management-in-plugins",children:[]},{value:"Building reducers",id:"building-reducers",children:[]},{value:"Building actions and selectors",id:"building-actions-and-selectors",children:[]}]}],d={toc:u};function c(e){var n=e.components,o=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"presentation"},"Presentation"),(0,l.kt)("p",null,"REGARDS UI plugins are pieces of Javascript files bundled together that can be added dynamically into the user interface.\nThey allow administrators creating dedicated UI parts to match project needs.\nThere are two types of plugins:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"criterion plugins"),", that are used in the search form of search-results module (",(0,l.kt)("a",{parentName:"li",href:"../plugins/criteria/"},"more details here"),")")),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(26263).Z}),"\n",(0,l.kt)("em",{parentName:"p"},"A search form example, with several criteria plugins")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"service plugins"),", that adds functionalities to an entity or a selection of entities (",(0,l.kt)("a",{parentName:"li",href:"../plugins/service/"},"more detail here"),").")),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(81465).Z}),"\n",(0,l.kt)("em",{parentName:"p"},"Some services example: on lines, services for one entity. On header, services for current selection.")),(0,l.kt)("p",null,"The following sections describe common considerations and methods for all plugins."),(0,l.kt)("h2",{id:"main-principles"},"Main principles"),(0,l.kt)("p",null,"Each plugin:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Is defined as an independent NPM package, in plugins folder"),(0,l.kt)("li",{parentName:"ul"},"Is built as a small bundle, independent of the main application"),(0,l.kt)("li",{parentName:"ul"},"Exposes a component view, with optional styles, messages and reducers"),(0,l.kt)("li",{parentName:"ul"},"Exposes a definition, allowing REGARDS interfaces to create automated configuration forms"),(0,l.kt)("li",{parentName:"ul"},"Is provided through a server, outside main application source code. When in develop mode, that server may be ",(0,l.kt)("inlineCode",{parentName:"li"},"webpack-dev-server"),". In production mode, it could in any public repository, or in default REGARDS ",(0,l.kt)("inlineCode",{parentName:"li"},"plugins repository"),".")),(0,l.kt)("p",null,"On a development point of view, plugins are very similar to REGARDS user modules, as they expose a view, reducers, styles and messages. However, they do not define any administration view, which is built automatically based on ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin-info.json")," content."),(0,l.kt)("h2",{id:"create-a-new-plugin"},"Create a new plugin"),(0,l.kt)("p",null,"All plugin types can be created using the frontend plugin generator in ",(0,l.kt)("inlineCode",{parentName:"p"},"webapp/yeoman/generator-regards-ui-plugin"),". To install and use the generator, run the following commands, in ",(0,l.kt)("inlineCode",{parentName:"p"},"rs-frontend")," folder:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd webapp/yeoman/generator-regards-ui-plugin\n$ npm install -g\n$ npm install -g yo\n$ cd ../../plugins\n$ yo regards-ui-plugin\n")),(0,l.kt)("p",null,"Yeoman will ask you several parameters to generate the new plugin, depending on the chosen type. Once finished, the plugin folder is initialized with a basic example."),(0,l.kt)("h2",{id:"plugin-folder-structure"},"Plugin folder structure"),(0,l.kt)("p",null,"The following folder structure is generated by Yeoman. It matches REGARDS standard NPM packages structure:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"node_modules"),": Installed node modules from package JSON"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"reports"),": Built reports for coverage and tests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"src"),": Plugin main source folder",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"clients"),": Plugin redux API clients"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"components"),": Plugin React components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"containers"),": Plugin React containers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"i18n"),": Plugin internationalization"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"styles"),": Plugin graphic styles"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"main"),".js: Plugin exported index"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"plugin"),"-info.js: Plugin definition"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"reducer"),".js: Redux reducers builder"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"target"),": Built sources for plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tests"),": Plugin tests source folder"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"package.json"),": Npm module file describing plugin module"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"README.md"),": Plugin README"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"webpack.\\<mode",">",".js"),": Webpack files for plugin building")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: node_modules, reports and target folders may not be present initially, as they are build folders. Some other folders or files, like clients or reducer.js, are not initially created. They should be added by developer when required.")),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"Plugin ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file holds NPM plugin commands to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"install command (standard for any NPM package)"),(0,l.kt)("li",{parentName:"ul"},"compile plugin"),(0,l.kt)("li",{parentName:"ul"},"run plugin test"),(0,l.kt)("li",{parentName:"ul"},"compute plugin report coverage"),(0,l.kt)("li",{parentName:"ul"},"lint plugin code")),(0,l.kt)("p",null,"In order to use those commands, rs-frontend repository must have been installed (see ",(0,l.kt)("a",{parentName:"p",href:"../introduction/setup/"},"Frontend setup page"),"), as it provides the core webpack DLLs, used to lower compilation duration and plugin bundle size."),(0,l.kt)("h3",{id:"1-install-plugin"},"1. Install plugin"),(0,l.kt)("p",null,"Before running any other command, plugin should be installed, using command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm i\n")),(0,l.kt)("h3",{id:"2-compile-plugin"},"2. Compile plugin"),(0,l.kt)("p",null,"The following commands compile the plugin into a usable plugin bundle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run build:dev\nmyPlugin:$ npm run build:watch\nmyPlugin:$ npm run build:production\n")),(0,l.kt)("p",null,"Command modes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build:dev"),": Builds the bundle once for development - main application webpack dev server must be running."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build:watch"),": Watches for code changes. Triggers ",(0,l.kt)("inlineCode",{parentName:"li"},"build:dev")," on detection"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build:production"),": Builds the bundle once for production - build result can be pasted on definitive location.")),(0,l.kt)("h3",{id:"3-tests-commands"},"3. Tests commands"),(0,l.kt)("p",null,"The following commands run any mocha test in files matching patterns ",(0,l.kt)("inlineCode",{parentName:"p"},"*.test.js")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"*.test.jsx"),", and stored in ",(0,l.kt)("inlineCode",{parentName:"p"},"/tests")," folder:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run test\nmyPlugin:$ npm run test:watch\nmyPlugin:$ npm run test:coverage\n")),(0,l.kt)("p",null,"Command modes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"test:mocha"),": Runs all tests once and shows tests results"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test:watch"),": Watches for code changes. Triggers ",(0,l.kt)("inlineCode",{parentName:"li"},"test:mocha")," on detection"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"test:coverage"),": Runs tests and creates a coverage report")),(0,l.kt)("h3",{id:"4-lint-source-code"},"4. Lint source code"),(0,l.kt)("p",null,"The following commands check lint rules expectations in ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"tests")," folders, then display a report:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run lint\nmyPlugin:$ npm run lint:fix\n")),(0,l.kt)("p",null,"Command options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lint:fix"),": Attempts to correct issues.")),(0,l.kt)("h3",{id:"5-plugins-group-commands"},"5. Plugins group commands"),(0,l.kt)("p",null,"Additionally, some commands are provided in ",(0,l.kt)("inlineCode",{parentName:"p"},"rs-frontend/webapp/scripts")," folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"webapp:$ ./scripts/build-all-plugins dev criterion\nwebapp:$ ./scripts/test-all-plugins services\nwebapp:$ ./scripts/lint-all-plugins all\nwebapp:$ ./scripts/compareDependencies.js ./package.json ./plugins/criterion/string/package.json\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"build-all-plugins"),": Builds all plugins found in ",(0,l.kt)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"test-all-plugins"),": Tests all plugins found in ",(0,l.kt)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"lint-all-plugins"),": Lints all plugins found in ",(0,l.kt)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"compareDependencies"),": Compares dependencies of the first and second package.json files as parameters (helps upgrading plugin dependencies versions when core dependencies changed)")),(0,l.kt)("h2",{id:"deploy-plugin"},"Deploy plugin"),(0,l.kt)("p",null,"To use a plugin, the following requirements must be met:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The plugin bundle must be available. The method to use depends on development phase (see sections hereafter)"),(0,l.kt)("li",{parentName:"ol"},"The plugin must be declared. That declaration can be performed through REGARDS project administration interface, like shown in the picture below (User interface / Plugins)")),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(58608).Z}),"\n",(0,l.kt)("em",{parentName:"p"},'Declaring the plugin "example-criterion"')),(0,l.kt)("h3",{id:"for-development"},"For development"),(0,l.kt)("p",null,"The development build commands appends plugin into the running instance of webpack-dev-server, under the path ",(0,l.kt)("inlineCode",{parentName:"p"},"/plugins/{pluginTypeFolder}/{pluginName}/plugin.js"),". That means ",(0,l.kt)("strong",{parentName:"p"},"main application")," ",(0,l.kt)("inlineCode",{parentName:"p"},"build:watch")," command must be running.\nOnce build command has been performed, the plugin can be declared, like any other plugin (see parent section)"),(0,l.kt)("h3",{id:"for-production"},"For production"),(0,l.kt)("p",null,"For production, the bundle resulting of ",(0,l.kt)("inlineCode",{parentName:"p"},"npm build:production"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"target/prod/plugin.js"),", must be pasted in a location that can be accessed through a Public URL. It is either possible to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Paste it in REGARDS plugins repository (depends on server configuration), then reference it using a relative URL like ",(0,l.kt)("inlineCode",{parentName:"li"},"/plugins/{pluginTypeFolder}/{pluginName}/plugin.js")),(0,l.kt)("li",{parentName:"ul"},"Paste it in any other public location, then reference it by an absolute URL.")),(0,l.kt)("p",null,"Once the bundle has been made publicly available, it is possible to declare it (see parent section)"),(0,l.kt)("h2",{id:"implementation"},"Implementation"),(0,l.kt)("h3",{id:"plugin-entry-point"},"Plugin entry point"),(0,l.kt)("p",null,"The entry point of a plugin is ",(0,l.kt)("inlineCode",{parentName:"p"},"main.js")," file - as configured in plugin package.json. It describes all required information to load and display the plugin.",(0,l.kt)("br",{parentName:"p"}),"\n","The ",(0,l.kt)("inlineCode",{parentName:"p"},"initPlugin")," method is used to bundled easily that information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"initPlugin(<ReactComponent>, <pluginInfo>, <React-redux reducers builder>, <messages>, <styles>)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReactComponent"),": The main React component of the plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluginInfo")," : The plugin-info.json object, holding plugin declaration."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"React-redux reducers builder")," : (Optional, can be set to null) 1 function taking plugin instance ID as parameter and returning a map of reducer field to reducer function (see ",(0,l.kt)("a",{parentName:"li",href:"#redux-management"},"Redux management")," section)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"messages")," : Internationalization messages as an object with languages as keys (en|fr), then message keys as sub keys and message value by locale as value (see example below)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"styles")," : an object like ",(0,l.kt)("inlineCode",{parentName:"li"},"{ styles: buildStylesMethod}"),", where buildStylesMethod is a function taking current muiTheme as single parameter and returning plugin styles (see modules documentation for declaring and using module theme).")),(0,l.kt)("h3",{id:"plugin-infojson"},"plugin-info.json"),(0,l.kt)("p",null,"That file is used by the plugin loader to define the configuration required by the plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version": "1.0.0",\n  "author": "Someone",\n  "company": "Some company",\n  "email": "someone@some-company.com",\n  "url": "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type": "CRITERIA",\n  "conf": {}\n}\n')),(0,l.kt)("p",null,"Notes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," field marks the plugin type (criterion or service plugin)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"conf")," field content is specific to the plugin type")),(0,l.kt)("h3",{id:"plugin-configuration-view"},"Plugin configuration view"),(0,l.kt)("p",null,"Plugin configuration forms are ",(0,l.kt)("em",{parentName:"p"},"automatically created by the main application"),", using plugin-info.json. Hence there is no need for configuration views in plugins."),(0,l.kt)("h3",{id:"plugin-user-view"},"Plugin user view"),(0,l.kt)("p",null,"Main react component, exported as the first parameter of the ",(0,l.kt)("inlineCode",{parentName:"p"},"initPlugin")," method, within ",(0,l.kt)("inlineCode",{parentName:"p"},"main.js"),", is the first displayed component after loading.\nThat component receives, no matter the plugin type, the property ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginInstanceId"),", that is a ",(0,l.kt)("strong",{parentName:"p"},"unique id for that instance of plugin")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notes:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Other plugin properties are specific to the plugin type, see ",(0,l.kt)("a",{parentName:"li",href:"../plugins/criteria/"},"criterion")," or ",(0,l.kt)("a",{parentName:"li",href:"../plugins/service/"},"service")," plugin pages for more detail."),(0,l.kt)("li",{parentName:"ul"},"Component is instantiated with its own ",(0,l.kt)("strong",{parentName:"li"},"intl")," and ",(0,l.kt)("strong",{parentName:"li"},"theme"),", using current context (see ",(0,l.kt)("a",{parentName:"li",href:"../view/international/"},"Internationalization")," and ",(0,l.kt)("a",{parentName:"li",href:"../view/theme/"},"Theme")," pages for more detail")),(0,l.kt)("h3",{id:"redux-management-in-plugins"},"Redux management in plugins"),(0,l.kt)("p",null,"Plugins can, optionally, export reducers to be able using and updating their own space in Redux store. In REGARDS, components usually manage a static Redux store space. However, as one plugin can be instantiated many times, such system would result in all plugin instances sharing the same Redux store space, and thus the same state. Therefore, plugins have to address a ",(0,l.kt)("em",{parentName:"p"},"dynamic")," Redux store.",(0,l.kt)("br",{parentName:"p"}),"\n","For that reason, ",(0,l.kt)("inlineCode",{parentName:"p"},"initPlugin")," expects to receive an optional ",(0,l.kt)("inlineCode",{parentName:"p"},"buildReducer")," method, and not a static reducers map. That method must return, ",(0,l.kt)("em",{parentName:"p"},"given the unique ",(0,l.kt)("inlineCode",{parentName:"em"},"pluginInstanceId")),", the plugin reduce methods map."),(0,l.kt)("h3",{id:"building-reducers"},"Building reducers"),(0,l.kt)("p",null,"The plugin buildReducer function aims at providing a different dynamic reducers for each plugin instance. Therefore it must use ",(0,l.kt)("inlineCode",{parentName:"p"},"pluginInstanceId")," parameter to generate unique reducers namespaces. That way, the system ensures plugin instance 1 will not reduce plugin instance 2 Redux actions and reciprocally."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Build plugin reducers function example (might be placed in reducer.js file):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// ...\n/*\n * Build reducer function\n * @param {string} pluginInstanceId plugin instance ID, must be used to generate unique namespaces and store paths\n * @return {*} reducers configuration for plugin instance\n */\nexport default function buildReducer(pluginInstanceId) {\n  return {\n    myModel1: getMyModel1Client(pluginInstanceId).reducer,\n    myModel2: getMyModel2Client(pluginInstanceId).reducer,\n  };\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"An example is available in enumerated criterion, at path webapp/plugins/criterion/enumerated/src/reducer.js")),(0,l.kt)("h3",{id:"building-actions-and-selectors"},"Building actions and selectors"),(0,l.kt)("p",null,"Redux actions must also be dynamically built using pluginInstanceID, since the namespace is used by plugin reducer to filter actions it should handle or ignore.",(0,l.kt)("br",{parentName:"p"}),"\n","Furthermore, as the redux store space are separated, the selectors must also be dynamic. The selectors path contains the two elements below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"First path element: ",(0,l.kt)("inlineCode",{parentName:"li"},"{Plugin name}.{Plugin instance ID}")," where plugin name matches name from plugin-info.json and plugin instance ID is the value provided to both buildReducer method and main component."),(0,l.kt)("li",{parentName:"ul"},"Second path element is the reducer map key in the value returned by buildReducer method (myModel1 or myModel2 in example before)")),(0,l.kt)("p",null,"Since the plugin instance ID is provided to the main component, it is possible to write the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"  class MyPluginContainer extends React.Component {\n  static mapStateToProps(state, { pluginInstanceId }) {\n      return {\n        myValue: new MyModel1Selectors(pluginInstanceId).getMyValue(state)\n      }\n    }\n")),(0,l.kt)("p",null,"However, that approach is ",(0,l.kt)("strong",{parentName:"p"},"considered a bad practice"),", as selectors and actions would be instantiated each time mapStateToProps and mapDispatchToProps are called, what consumes lot of browser memory.\nTo solve that issue, REGARDS provides the ",(0,l.kt)("inlineCode",{parentName:"p"},"@regardsoss/plugins-api/PluginsClientsMap")," class, that is a lazy clients map. Using it avoids creating new actions and selectors instances each time mapStateToProp and mapDispatchToPropsToProps are called."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"  class MyPluginContainer extends React.Component {\n    // That map will hold the instances of actions and selectors\n    static CLIENTS_MAP = new PluginsClientsMap()\n\n    static mapStateToProps(state, { pluginInstanceId }) {\n      const mySelectors = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).selectors\n      return {\n        myValue: mySelectors.getMyValue(state)\n      }\n    }\n\n    static mapDispatchToPropsToProps(dispatch, { pluginInstanceId }) {\n      const myActions = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).actions\n      return {\n        dispatchSomething: () => dispatch(myActions.doSomething())\n      }\n    }\n\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note: The PluginsClientsMap is a simple tool that buffers a map on pluginInstanceId => builder => builtValue. It is very straightforward code and can be replaced by a locally coded buffer if you prefer. In order to work correctly, it requires clientBuilder instance - buildMyClient in previous example - to be a constant JS function reference for a single client.")))}c.isMDXComponent=!0},58608:function(e,n,t){n.Z=t.p+"assets/images/plugin-declaration-52d0beeb46506b107339218bab244952.png"},26263:function(e,n,t){n.Z=t.p+"assets/images/search-form-a8a71415dcfe4946947ed220830bbd49.png"},81465:function(e,n,t){n.Z=t.p+"assets/images/services-example-d82acec2d90c6a78d8830e68ed5e56a6.png"}}]);