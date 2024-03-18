"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[76831],{15680:(e,n,i)=>{i.d(n,{xA:()=>u,yg:()=>c});var t=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(i),m=a,c=g["".concat(s,".").concat(m)]||g[m]||d[m]||l;return i?t.createElement(c,r(r({ref:n},u),{},{components:i})):t.createElement(c,r({ref:n},u))}));function c(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[g]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7502:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=i(58168),a=(i(96540),i(15680));const l={id:"frontend-plugins",title:"REGARDS Frontend Plugins",sidebar_label:"Plugins introduction",slug:"/development/frontend/plugins/"},r=void 0,o={unversionedId:"development/frontend/plugins/frontend-plugins",id:"development/frontend/plugins/frontend-plugins",title:"REGARDS Frontend Plugins",description:"Presentation",source:"@site/docs/development/frontend/plugins/plugins.md",sourceDirName:"development/frontend/plugins",slug:"/development/frontend/plugins/",permalink:"/docs/development/frontend/plugins/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/plugins/plugins.md",tags:[],version:"current",frontMatter:{id:"frontend-plugins",title:"REGARDS Frontend Plugins",sidebar_label:"Plugins introduction",slug:"/development/frontend/plugins/"},sidebar:"dev",previous:{title:"Storage monitoring",permalink:"/docs/development/frontend/packages/lazy-modules/storage-monitoring/"},next:{title:"Criteria",permalink:"/docs/development/frontend/plugins/criteria/"}},s={},p=[{value:"Presentation",id:"presentation",level:2},{value:"Main principles",id:"main-principles",level:2},{value:"Create a new plugin",id:"create-a-new-plugin",level:2},{value:"Plugin folder structure",id:"plugin-folder-structure",level:2},{value:"Commands",id:"commands",level:2},{value:"1. Install plugin",id:"1-install-plugin",level:3},{value:"2. Compile plugin",id:"2-compile-plugin",level:3},{value:"3. Tests commands",id:"3-tests-commands",level:3},{value:"4. Lint source code",id:"4-lint-source-code",level:3},{value:"5. Plugins group commands",id:"5-plugins-group-commands",level:3},{value:"Deploy plugin",id:"deploy-plugin",level:2},{value:"For development",id:"for-development",level:3},{value:"For production",id:"for-production",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Plugin entry point",id:"plugin-entry-point",level:3},{value:"plugin-info.json",id:"plugin-infojson",level:3},{value:"Plugin configuration view",id:"plugin-configuration-view",level:3},{value:"Plugin user view",id:"plugin-user-view",level:3},{value:"Redux management in plugins",id:"redux-management-in-plugins",level:3},{value:"Building reducers",id:"building-reducers",level:3},{value:"Building actions and selectors",id:"building-actions-and-selectors",level:3}],u={toc:p},g="wrapper";function d(e){let{components:n,...l}=e;return(0,a.yg)(g,(0,t.A)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"presentation"},"Presentation"),(0,a.yg)("p",null,"REGARDS UI plugins are pieces of Javascript files bundled together that can be added dynamically into the user interface.\nThey allow administrators creating dedicated UI parts to match project needs.\nThere are two types of plugins:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"criterion plugins"),", that are used in the search form of search-results module (",(0,a.yg)("a",{parentName:"li",href:"/docs/development/frontend/plugins/criteria/"},"more details here"),")")),(0,a.yg)("p",null,(0,a.yg)("img",{src:i(23777).A,width:"1680",height:"948"}),"\n",(0,a.yg)("em",{parentName:"p"},"A search form example, with several criteria plugins")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"service plugins"),", that adds functionalities to an entity or a selection of entities (",(0,a.yg)("a",{parentName:"li",href:"/docs/development/frontend/plugins/service/"},"more detail here"),").")),(0,a.yg)("p",null,(0,a.yg)("img",{src:i(14909).A,width:"1680",height:"979"}),"\n",(0,a.yg)("em",{parentName:"p"},"Some services example: on lines, services for one entity. On header, services for current selection.")),(0,a.yg)("p",null,"The following sections describe common considerations and methods for all plugins."),(0,a.yg)("h2",{id:"main-principles"},"Main principles"),(0,a.yg)("p",null,"Each plugin:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Is defined as an independent NPM package, in plugins folder"),(0,a.yg)("li",{parentName:"ul"},"Is built as a small bundle, independent of the main application"),(0,a.yg)("li",{parentName:"ul"},"Exposes a component view, with optional styles, messages and reducers"),(0,a.yg)("li",{parentName:"ul"},"Exposes a definition, allowing REGARDS interfaces to create automated configuration forms"),(0,a.yg)("li",{parentName:"ul"},"Is provided through a server, outside main application source code. When in develop mode, that server may be ",(0,a.yg)("inlineCode",{parentName:"li"},"webpack-dev-server"),". In production mode, it could in any public repository, or in default REGARDS ",(0,a.yg)("inlineCode",{parentName:"li"},"plugins repository"),".")),(0,a.yg)("p",null,"On a development point of view, plugins are very similar to REGARDS user modules, as they expose a view, reducers, styles and messages. However, they do not define any administration view, which is built automatically based on ",(0,a.yg)("inlineCode",{parentName:"p"},"plugin-info.json")," content."),(0,a.yg)("h2",{id:"create-a-new-plugin"},"Create a new plugin"),(0,a.yg)("p",null,"All plugin types can be created using the frontend plugin generator in ",(0,a.yg)("inlineCode",{parentName:"p"},"webapp/yeoman/generator-regards-ui-plugin"),". To install and use the generator, run the following commands, in ",(0,a.yg)("inlineCode",{parentName:"p"},"rs-frontend")," folder:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"$ cd webapp/yeoman/generator-regards-ui-plugin\n$ npm install -g\n$ npm install -g yo\n$ cd ../../plugins\n$ yo regards-ui-plugin\n")),(0,a.yg)("p",null,"Yeoman will ask you several parameters to generate the new plugin, depending on the chosen type. Once finished, the plugin folder is initialized with a basic example."),(0,a.yg)("h2",{id:"plugin-folder-structure"},"Plugin folder structure"),(0,a.yg)("p",null,"The following folder structure is generated by Yeoman. It matches REGARDS standard NPM packages structure:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"node_modules"),": Installed node modules from package JSON"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"reports"),": Built reports for coverage and tests"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"src"),": Plugin main source folder",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"clients"),": Plugin redux API clients"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"components"),": Plugin React components"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"containers"),": Plugin React containers"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"i18n"),": Plugin internationalization"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"styles"),": Plugin graphic styles"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"main"),".js: Plugin exported index"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"plugin"),"-info.js: Plugin definition"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"reducer"),".js: Redux reducers builder"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"target"),": Built sources for plugins"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"tests"),": Plugin tests source folder"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"package.json"),": Npm module file describing plugin module"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"README.md"),": Plugin README"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"webpack.\\<mode",">",".js"),": Webpack files for plugin building")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Note: node_modules, reports and target folders may not be present initially, as they are build folders. Some other folders or files, like clients or reducer.js, are not initially created. They should be added by developer when required.")),(0,a.yg)("h2",{id:"commands"},"Commands"),(0,a.yg)("p",null,"Plugin ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json")," file holds NPM plugin commands to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"install command (standard for any NPM package)"),(0,a.yg)("li",{parentName:"ul"},"compile plugin"),(0,a.yg)("li",{parentName:"ul"},"run plugin test"),(0,a.yg)("li",{parentName:"ul"},"compute plugin report coverage"),(0,a.yg)("li",{parentName:"ul"},"lint plugin code")),(0,a.yg)("p",null,"In order to use those commands, rs-frontend repository must have been installed (see ",(0,a.yg)("a",{parentName:"p",href:"/docs/development/frontend/introduction/setup/"},"Frontend setup page"),"), as it provides the core webpack DLLs, used to lower compilation duration and plugin bundle size."),(0,a.yg)("h3",{id:"1-install-plugin"},"1. Install plugin"),(0,a.yg)("p",null,"Before running any other command, plugin should be installed, using command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm i\n")),(0,a.yg)("h3",{id:"2-compile-plugin"},"2. Compile plugin"),(0,a.yg)("p",null,"The following commands compile the plugin into a usable plugin bundle:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run build:dev\nmyPlugin:$ npm run build:watch\nmyPlugin:$ npm run build:production\n")),(0,a.yg)("p",null,"Command modes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:dev"),": Builds the bundle once for development - main application webpack dev server must be running."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:watch"),": Watches for code changes. Triggers ",(0,a.yg)("inlineCode",{parentName:"li"},"build:dev")," on detection"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"build:production"),": Builds the bundle once for production - build result can be pasted on definitive location.")),(0,a.yg)("h3",{id:"3-tests-commands"},"3. Tests commands"),(0,a.yg)("p",null,"The following commands run any mocha test in files matching patterns ",(0,a.yg)("inlineCode",{parentName:"p"},"*.test.js")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"*.test.jsx"),", and stored in ",(0,a.yg)("inlineCode",{parentName:"p"},"/tests")," folder:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run test\nmyPlugin:$ npm run test:watch\nmyPlugin:$ npm run test:coverage\n")),(0,a.yg)("p",null,"Command modes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"test")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"test:mocha"),": Runs all tests once and shows tests results"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"test:watch"),": Watches for code changes. Triggers ",(0,a.yg)("inlineCode",{parentName:"li"},"test:mocha")," on detection"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"test:coverage"),": Runs tests and creates a coverage report")),(0,a.yg)("h3",{id:"4-lint-source-code"},"4. Lint source code"),(0,a.yg)("p",null,"The following commands check lint rules expectations in ",(0,a.yg)("inlineCode",{parentName:"p"},"src")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"tests")," folders, then display a report:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"myPlugin:$ npm run lint\nmyPlugin:$ npm run lint:fix\n")),(0,a.yg)("p",null,"Command options:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"lint:fix"),": Attempts to correct issues.")),(0,a.yg)("h3",{id:"5-plugins-group-commands"},"5. Plugins group commands"),(0,a.yg)("p",null,"Additionally, some commands are provided in ",(0,a.yg)("inlineCode",{parentName:"p"},"rs-frontend/webapp/scripts")," folder."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"webapp:$ ./scripts/build-all-plugins dev criterion\nwebapp:$ ./scripts/test-all-plugins services\nwebapp:$ ./scripts/lint-all-plugins all\nwebapp:$ ./scripts/compareDependencies.js ./package.json ./plugins/criterion/string/package.json\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"build-all-plugins"),": Builds all plugins found in ",(0,a.yg)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"test-all-plugins"),": Tests all plugins found in ",(0,a.yg)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"lint-all-plugins"),": Lints all plugins found in ",(0,a.yg)("inlineCode",{parentName:"li"},"rs-frontend/webapp/plugins")," (can be restricted with parameters)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"compareDependencies"),": Compares dependencies of the first and second package.json files as parameters (helps upgrading plugin dependencies versions when core dependencies changed)")),(0,a.yg)("h2",{id:"deploy-plugin"},"Deploy plugin"),(0,a.yg)("p",null,"To use a plugin, the following requirements must be met:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The plugin bundle must be available. The method to use depends on development phase (see sections hereafter)"),(0,a.yg)("li",{parentName:"ol"},"The plugin must be declared. That declaration can be performed through REGARDS project administration interface, like shown in the picture below (User interface / Plugins)")),(0,a.yg)("p",null,(0,a.yg)("img",{src:i(6614).A,width:"1680",height:"497"}),"\n",(0,a.yg)("em",{parentName:"p"},'Declaring the plugin "example-criterion"')),(0,a.yg)("h3",{id:"for-development"},"For development"),(0,a.yg)("p",null,"The development build commands appends plugin into the running instance of webpack-dev-server, under the path ",(0,a.yg)("inlineCode",{parentName:"p"},"/plugins/{pluginTypeFolder}/{pluginName}/plugin.js"),". That means ",(0,a.yg)("strong",{parentName:"p"},"main application")," ",(0,a.yg)("inlineCode",{parentName:"p"},"build:watch")," command must be running.\nOnce build command has been performed, the plugin can be declared, like any other plugin (see parent section)"),(0,a.yg)("h3",{id:"for-production"},"For production"),(0,a.yg)("p",null,"For production, the bundle resulting of ",(0,a.yg)("inlineCode",{parentName:"p"},"npm build:production"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"target/prod/plugin.js"),", must be pasted in a location that can be accessed through a Public URL. It is either possible to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Paste it in REGARDS plugins repository (depends on server configuration), then reference it using a relative URL like ",(0,a.yg)("inlineCode",{parentName:"li"},"/plugins/{pluginTypeFolder}/{pluginName}/plugin.js")),(0,a.yg)("li",{parentName:"ul"},"Paste it in any other public location, then reference it by an absolute URL.")),(0,a.yg)("p",null,"Once the bundle has been made publicly available, it is possible to declare it (see parent section)"),(0,a.yg)("h2",{id:"implementation"},"Implementation"),(0,a.yg)("h3",{id:"plugin-entry-point"},"Plugin entry point"),(0,a.yg)("p",null,"The entry point of a plugin is ",(0,a.yg)("inlineCode",{parentName:"p"},"main.js")," file - as configured in plugin package.json. It describes all required information to load and display the plugin.",(0,a.yg)("br",{parentName:"p"}),"\n","The ",(0,a.yg)("inlineCode",{parentName:"p"},"initPlugin")," method is used to bundled easily that information."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"initPlugin(<ReactComponent>, <pluginInfo>, <React-redux reducers builder>, <messages>, <styles>)\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ReactComponent"),": The main React component of the plugin"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"pluginInfo")," : The plugin-info.json object, holding plugin declaration."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"React-redux reducers builder")," : (Optional, can be set to null) 1 function taking plugin instance ID as parameter and returning a map of reducer field to reducer function (see ",(0,a.yg)("a",{parentName:"li",href:"#redux-management"},"Redux management")," section)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"messages")," : Internationalization messages as an object with languages as keys (en|fr), then message keys as sub keys and message value by locale as value (see example below)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"styles")," : an object like ",(0,a.yg)("inlineCode",{parentName:"li"},"{ styles: buildStylesMethod}"),", where buildStylesMethod is a function taking current muiTheme as single parameter and returning plugin styles (see modules documentation for declaring and using module theme).")),(0,a.yg)("h3",{id:"plugin-infojson"},"plugin-info.json"),(0,a.yg)("p",null,"That file is used by the plugin loader to define the configuration required by the plugin."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version": "1.0.0",\n  "author": "Someone",\n  "company": "Some company",\n  "email": "someone@some-company.com",\n  "url": "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type": "CRITERIA",\n  "conf": {}\n}\n')),(0,a.yg)("p",null,"Notes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"type")," field marks the plugin type (criterion or service plugin)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"conf")," field content is specific to the plugin type")),(0,a.yg)("h3",{id:"plugin-configuration-view"},"Plugin configuration view"),(0,a.yg)("p",null,"Plugin configuration forms are ",(0,a.yg)("em",{parentName:"p"},"automatically created by the main application"),", using plugin-info.json. Hence there is no need for configuration views in plugins."),(0,a.yg)("h3",{id:"plugin-user-view"},"Plugin user view"),(0,a.yg)("p",null,"Main react component, exported as the first parameter of the ",(0,a.yg)("inlineCode",{parentName:"p"},"initPlugin")," method, within ",(0,a.yg)("inlineCode",{parentName:"p"},"main.js"),", is the first displayed component after loading.\nThat component receives, no matter the plugin type, the property ",(0,a.yg)("inlineCode",{parentName:"p"},"pluginInstanceId"),", that is a ",(0,a.yg)("strong",{parentName:"p"},"unique id for that instance of plugin")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Notes:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Other plugin properties are specific to the plugin type, see ",(0,a.yg)("a",{parentName:"li",href:"/docs/development/frontend/plugins/criteria/"},"criterion")," or ",(0,a.yg)("a",{parentName:"li",href:"/docs/development/frontend/plugins/service/"},"service")," plugin pages for more detail."),(0,a.yg)("li",{parentName:"ul"},"Component is instantiated with its own ",(0,a.yg)("strong",{parentName:"li"},"intl")," and ",(0,a.yg)("strong",{parentName:"li"},"theme"),", using current context (see ",(0,a.yg)("a",{parentName:"li",href:"/docs/development/frontend/view/international/"},"Internationalization")," and ",(0,a.yg)("a",{parentName:"li",href:"/docs/development/frontend/view/theme/"},"Theme")," pages for more detail")),(0,a.yg)("h3",{id:"redux-management-in-plugins"},"Redux management in plugins"),(0,a.yg)("p",null,"Plugins can, optionally, export reducers to be able using and updating their own space in Redux store. In REGARDS, components usually manage a static Redux store space. However, as one plugin can be instantiated many times, such system would result in all plugin instances sharing the same Redux store space, and thus the same state. Therefore, plugins have to address a ",(0,a.yg)("em",{parentName:"p"},"dynamic")," Redux store.",(0,a.yg)("br",{parentName:"p"}),"\n","For that reason, ",(0,a.yg)("inlineCode",{parentName:"p"},"initPlugin")," expects to receive an optional ",(0,a.yg)("inlineCode",{parentName:"p"},"buildReducer")," method, and not a static reducers map. That method must return, ",(0,a.yg)("em",{parentName:"p"},"given the unique ",(0,a.yg)("inlineCode",{parentName:"em"},"pluginInstanceId")),", the plugin reduce methods map."),(0,a.yg)("h3",{id:"building-reducers"},"Building reducers"),(0,a.yg)("p",null,"The plugin buildReducer function aims at providing a different dynamic reducers for each plugin instance. Therefore it must use ",(0,a.yg)("inlineCode",{parentName:"p"},"pluginInstanceId")," parameter to generate unique reducers namespaces. That way, the system ensures plugin instance 1 will not reduce plugin instance 2 Redux actions and reciprocally."),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Build plugin reducers function example (might be placed in reducer.js file):")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"// ...\n/*\n * Build reducer function\n * @param {string} pluginInstanceId plugin instance ID, must be used to generate unique namespaces and store paths\n * @return {*} reducers configuration for plugin instance\n */\nexport default function buildReducer(pluginInstanceId) {\n  return {\n    myModel1: getMyModel1Client(pluginInstanceId).reducer,\n    myModel2: getMyModel2Client(pluginInstanceId).reducer,\n  };\n}\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"An example is available in enumerated criterion, at path webapp/plugins/criterion/enumerated/src/reducer.js")),(0,a.yg)("h3",{id:"building-actions-and-selectors"},"Building actions and selectors"),(0,a.yg)("p",null,"Redux actions must also be dynamically built using pluginInstanceID, since the namespace is used by plugin reducer to filter actions it should handle or ignore.",(0,a.yg)("br",{parentName:"p"}),"\n","Furthermore, as the redux store space are separated, the selectors must also be dynamic. The selectors path contains the two elements below:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"First path element: ",(0,a.yg)("inlineCode",{parentName:"li"},"{Plugin name}.{Plugin instance ID}")," where plugin name matches name from plugin-info.json and plugin instance ID is the value provided to both buildReducer method and main component."),(0,a.yg)("li",{parentName:"ul"},"Second path element is the reducer map key in the value returned by buildReducer method (myModel1 or myModel2 in example before)")),(0,a.yg)("p",null,"Since the plugin instance ID is provided to the main component, it is possible to write the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"  class MyPluginContainer extends React.Component {\n  static mapStateToProps(state, { pluginInstanceId }) {\n      return {\n        myValue: new MyModel1Selectors(pluginInstanceId).getMyValue(state)\n      }\n    }\n")),(0,a.yg)("p",null,"However, that approach is ",(0,a.yg)("strong",{parentName:"p"},"considered a bad practice"),", as selectors and actions would be instantiated each time mapStateToProps and mapDispatchToProps are called, what consumes lot of browser memory.\nTo solve that issue, REGARDS provides the ",(0,a.yg)("inlineCode",{parentName:"p"},"@regardsoss/plugins-api/PluginsClientsMap")," class, that is a lazy clients map. Using it avoids creating new actions and selectors instances each time mapStateToProp and mapDispatchToPropsToProps are called."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},"  class MyPluginContainer extends React.Component {\n    // That map will hold the instances of actions and selectors\n    static CLIENTS_MAP = new PluginsClientsMap()\n\n    static mapStateToProps(state, { pluginInstanceId }) {\n      const mySelectors = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).selectors\n      return {\n        myValue: mySelectors.getMyValue(state)\n      }\n    }\n\n    static mapDispatchToPropsToProps(dispatch, { pluginInstanceId }) {\n      const myActions = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).actions\n      return {\n        dispatchSomething: () => dispatch(myActions.doSomething())\n      }\n    }\n\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Note: The PluginsClientsMap is a simple tool that buffers a map on pluginInstanceId => builder => builtValue. It is very straightforward code and can be replaced by a locally coded buffer if you prefer. In order to work correctly, it requires clientBuilder instance - buildMyClient in previous example - to be a constant JS function reference for a single client.")))}d.isMDXComponent=!0},6614:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/plugin-declaration-52d0beeb46506b107339218bab244952.png"},23777:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/search-form-a8a71415dcfe4946947ed220830bbd49.png"},14909:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/services-example-d82acec2d90c6a78d8830e68ed5e56a6.png"}}]);