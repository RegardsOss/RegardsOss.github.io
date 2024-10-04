"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[61250],{23470:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=i(74848),l=i(28453);const r={id:"frontend-plugins",title:"REGARDS Frontend Plugins",sidebar_label:"Plugins introduction",slug:"/development/frontend/plugins/"},t=void 0,d={id:"development/frontend/plugins/frontend-plugins",title:"REGARDS Frontend Plugins",description:"Presentation",source:"@site/versioned_docs/version-1.15/development/frontend/plugins/plugins.md",sourceDirName:"development/frontend/plugins",slug:"/development/frontend/plugins/",permalink:"/docs/1.15/development/frontend/plugins/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/frontend/plugins/plugins.md",tags:[],version:"1.15",frontMatter:{id:"frontend-plugins",title:"REGARDS Frontend Plugins",sidebar_label:"Plugins introduction",slug:"/development/frontend/plugins/"},sidebar:"dev",previous:{title:"Storage monitoring",permalink:"/docs/1.15/development/frontend/packages/lazy-modules/storage-monitoring/"},next:{title:"Criteria",permalink:"/docs/1.15/development/frontend/plugins/criteria/"}},o={},a=[{value:"Presentation",id:"presentation",level:2},{value:"Main principles",id:"main-principles",level:2},{value:"Create a new plugin",id:"create-a-new-plugin",level:2},{value:"Plugin folder structure",id:"plugin-folder-structure",level:2},{value:"Commands",id:"commands",level:2},{value:"1. Install plugin",id:"1-install-plugin",level:3},{value:"2. Compile plugin",id:"2-compile-plugin",level:3},{value:"3. Tests commands",id:"3-tests-commands",level:3},{value:"4. Lint source code",id:"4-lint-source-code",level:3},{value:"5. Plugins group commands",id:"5-plugins-group-commands",level:3},{value:"Deploy plugin",id:"deploy-plugin",level:2},{value:"For development",id:"for-development",level:3},{value:"For production",id:"for-production",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Plugin entry point",id:"plugin-entry-point",level:3},{value:"plugin-info.json",id:"plugin-infojson",level:3},{value:"Plugin configuration view",id:"plugin-configuration-view",level:3},{value:"Plugin user view",id:"plugin-user-view",level:3},{value:"Redux management in plugins",id:"redux-management-in-plugins",level:3},{value:"Building reducers",id:"building-reducers",level:3},{value:"Building actions and selectors",id:"building-actions-and-selectors",level:3}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"presentation",children:"Presentation"}),"\n",(0,s.jsx)(n.p,{children:"REGARDS UI plugins are pieces of Javascript files bundled together that can be added dynamically into the user interface.\nThey allow administrators creating dedicated UI parts to match project needs.\nThere are two types of plugins:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"criterion plugins"}),", that are used in the search form of search-results module (",(0,s.jsx)(n.a,{href:"/docs/1.15/development/frontend/plugins/criteria/",children:"more details here"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(23777).A+"",width:"1680",height:"948"}),"\n",(0,s.jsx)(n.em,{children:"A search form example, with several criteria plugins"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"service plugins"}),", that adds functionalities to an entity or a selection of entities (",(0,s.jsx)(n.a,{href:"/docs/1.15/development/frontend/plugins/service/",children:"more detail here"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(14909).A+"",width:"1680",height:"979"}),"\n",(0,s.jsx)(n.em,{children:"Some services example: on lines, services for one entity. On header, services for current selection."})]}),"\n",(0,s.jsx)(n.p,{children:"The following sections describe common considerations and methods for all plugins."}),"\n",(0,s.jsx)(n.h2,{id:"main-principles",children:"Main principles"}),"\n",(0,s.jsx)(n.p,{children:"Each plugin:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Is defined as an independent NPM package, in plugins folder"}),"\n",(0,s.jsx)(n.li,{children:"Is built as a small bundle, independent of the main application"}),"\n",(0,s.jsx)(n.li,{children:"Exposes a component view, with optional styles, messages and reducers"}),"\n",(0,s.jsx)(n.li,{children:"Exposes a definition, allowing REGARDS interfaces to create automated configuration forms"}),"\n",(0,s.jsxs)(n.li,{children:["Is provided through a server, outside main application source code. When in develop mode, that server may be ",(0,s.jsx)(n.code,{children:"webpack-dev-server"}),". In production mode, it could in any public repository, or in default REGARDS ",(0,s.jsx)(n.code,{children:"plugins repository"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["On a development point of view, plugins are very similar to REGARDS user modules, as they expose a view, reducers, styles and messages. However, they do not define any administration view, which is built automatically based on ",(0,s.jsx)(n.code,{children:"plugin-info.json"})," content."]}),"\n",(0,s.jsx)(n.h2,{id:"create-a-new-plugin",children:"Create a new plugin"}),"\n",(0,s.jsxs)(n.p,{children:["All plugin types can be created using the frontend plugin generator in ",(0,s.jsx)(n.code,{children:"webapp/yeoman/generator-regards-ui-plugin"}),". To install and use the generator, run the following commands, in ",(0,s.jsx)(n.code,{children:"rs-frontend"})," folder:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cd webapp/yeoman/generator-regards-ui-plugin\n$ npm install -g\n$ npm install -g yo\n$ cd ../../plugins\n$ yo regards-ui-plugin\n"})}),"\n",(0,s.jsx)(n.p,{children:"Yeoman will ask you several parameters to generate the new plugin, depending on the chosen type. Once finished, the plugin folder is initialized with a basic example."}),"\n",(0,s.jsx)(n.h2,{id:"plugin-folder-structure",children:"Plugin folder structure"}),"\n",(0,s.jsx)(n.p,{children:"The following folder structure is generated by Yeoman. It matches REGARDS standard NPM packages structure:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"node_modules"}),": Installed node modules from package JSON"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"reports"}),": Built reports for coverage and tests"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"src"}),": Plugin main source folder","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"clients"}),": Plugin redux API clients"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"components"}),": Plugin React components"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"containers"}),": Plugin React containers"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"i18n"}),": Plugin internationalization"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"styles"}),": Plugin graphic styles"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"main"}),".js: Plugin exported index"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"plugin"}),"-info.js: Plugin definition"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"reducer"}),".js: Redux reducers builder"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"target"}),": Built sources for plugins"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"tests"}),": Plugin tests source folder"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"package.json"}),": Npm module file describing plugin module"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"README.md"}),": Plugin README"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"webpack.<mode>.js"}),": Webpack files for plugin building"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: node_modules, reports and target folders may not be present initially, as they are build folders. Some other folders or files, like clients or reducer.js, are not initially created. They should be added by developer when required."})}),"\n",(0,s.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,s.jsxs)(n.p,{children:["Plugin ",(0,s.jsx)(n.code,{children:"package.json"})," file holds NPM plugin commands to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"install command (standard for any NPM package)"}),"\n",(0,s.jsx)(n.li,{children:"compile plugin"}),"\n",(0,s.jsx)(n.li,{children:"run plugin test"}),"\n",(0,s.jsx)(n.li,{children:"compute plugin report coverage"}),"\n",(0,s.jsx)(n.li,{children:"lint plugin code"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In order to use those commands, rs-frontend repository must have been installed (see ",(0,s.jsx)(n.a,{href:"/docs/1.15/development/frontend/introduction/setup/",children:"Frontend setup page"}),"), as it provides the core webpack DLLs, used to lower compilation duration and plugin bundle size."]}),"\n",(0,s.jsx)(n.h3,{id:"1-install-plugin",children:"1. Install plugin"}),"\n",(0,s.jsx)(n.p,{children:"Before running any other command, plugin should be installed, using command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"myPlugin:$ npm i\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-compile-plugin",children:"2. Compile plugin"}),"\n",(0,s.jsx)(n.p,{children:"The following commands compile the plugin into a usable plugin bundle:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"myPlugin:$ npm run build:dev\nmyPlugin:$ npm run build:watch\nmyPlugin:$ npm run build:production\n"})}),"\n",(0,s.jsx)(n.p,{children:"Command modes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"build:dev"}),": Builds the bundle once for development - main application webpack dev server must be running."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"build:watch"}),": Watches for code changes. Triggers ",(0,s.jsx)(n.code,{children:"build:dev"})," on detection"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"build:production"}),": Builds the bundle once for production - build result can be pasted on definitive location."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-tests-commands",children:"3. Tests commands"}),"\n",(0,s.jsxs)(n.p,{children:["The following commands run any mocha test in files matching patterns ",(0,s.jsx)(n.code,{children:"*.test.js"})," or ",(0,s.jsx)(n.code,{children:"*.test.jsx"}),", and stored in ",(0,s.jsx)(n.code,{children:"/tests"})," folder:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"myPlugin:$ npm run test\nmyPlugin:$ npm run test:watch\nmyPlugin:$ npm run test:coverage\n"})}),"\n",(0,s.jsx)(n.p,{children:"Command modes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test"})," or ",(0,s.jsx)(n.code,{children:"test:mocha"}),": Runs all tests once and shows tests results"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test:watch"}),": Watches for code changes. Triggers ",(0,s.jsx)(n.code,{children:"test:mocha"})," on detection"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test:coverage"}),": Runs tests and creates a coverage report"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-lint-source-code",children:"4. Lint source code"}),"\n",(0,s.jsxs)(n.p,{children:["The following commands check lint rules expectations in ",(0,s.jsx)(n.code,{children:"src"})," and ",(0,s.jsx)(n.code,{children:"tests"})," folders, then display a report:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"myPlugin:$ npm run lint\nmyPlugin:$ npm run lint:fix\n"})}),"\n",(0,s.jsx)(n.p,{children:"Command options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"lint:fix"}),": Attempts to correct issues."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-plugins-group-commands",children:"5. Plugins group commands"}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, some commands are provided in ",(0,s.jsx)(n.code,{children:"rs-frontend/webapp/scripts"})," folder."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"webapp:$ ./scripts/build-all-plugins dev criterion\nwebapp:$ ./scripts/test-all-plugins services\nwebapp:$ ./scripts/lint-all-plugins all\nwebapp:$ ./scripts/compareDependencies.js ./package.json ./plugins/criterion/string/package.json\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"build-all-plugins"}),": Builds all plugins found in ",(0,s.jsx)(n.code,{children:"rs-frontend/webapp/plugins"})," (can be restricted with parameters)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"test-all-plugins"}),": Tests all plugins found in ",(0,s.jsx)(n.code,{children:"rs-frontend/webapp/plugins"})," (can be restricted with parameters)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"lint-all-plugins"}),": Lints all plugins found in ",(0,s.jsx)(n.code,{children:"rs-frontend/webapp/plugins"})," (can be restricted with parameters)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"compareDependencies"}),": Compares dependencies of the first and second package.json files as parameters (helps upgrading plugin dependencies versions when core dependencies changed)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-plugin",children:"Deploy plugin"}),"\n",(0,s.jsx)(n.p,{children:"To use a plugin, the following requirements must be met:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"The plugin bundle must be available. The method to use depends on development phase (see sections hereafter)"}),"\n",(0,s.jsx)(n.li,{children:"The plugin must be declared. That declaration can be performed through REGARDS project administration interface, like shown in the picture below (User interface / Plugins)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:i(6614).A+"",width:"1680",height:"497"}),"\n",(0,s.jsx)(n.em,{children:'Declaring the plugin "example-criterion"'})]}),"\n",(0,s.jsx)(n.h3,{id:"for-development",children:"For development"}),"\n",(0,s.jsxs)(n.p,{children:["The development build commands appends plugin into the running instance of webpack-dev-server, under the path ",(0,s.jsx)(n.code,{children:"/plugins/{pluginTypeFolder}/{pluginName}/plugin.js"}),". That means ",(0,s.jsx)(n.strong,{children:"main application"})," ",(0,s.jsx)(n.code,{children:"build:watch"})," command must be running.\nOnce build command has been performed, the plugin can be declared, like any other plugin (see parent section)"]}),"\n",(0,s.jsx)(n.h3,{id:"for-production",children:"For production"}),"\n",(0,s.jsxs)(n.p,{children:["For production, the bundle resulting of ",(0,s.jsx)(n.code,{children:"npm build:production"}),", ",(0,s.jsx)(n.code,{children:"target/prod/plugin.js"}),", must be pasted in a location that can be accessed through a Public URL. It is either possible to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Paste it in REGARDS plugins repository (depends on server configuration), then reference it using a relative URL like ",(0,s.jsx)(n.code,{children:"/plugins/{pluginTypeFolder}/{pluginName}/plugin.js"})]}),"\n",(0,s.jsx)(n.li,{children:"Paste it in any other public location, then reference it by an absolute URL."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Once the bundle has been made publicly available, it is possible to declare it (see parent section)"}),"\n",(0,s.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.h3,{id:"plugin-entry-point",children:"Plugin entry point"}),"\n",(0,s.jsxs)(n.p,{children:["The entry point of a plugin is ",(0,s.jsx)(n.code,{children:"main.js"})," file - as configured in plugin package.json. It describes all required information to load and display the plugin.",(0,s.jsx)(n.br,{}),"\n","The ",(0,s.jsx)(n.code,{children:"initPlugin"})," method is used to bundled easily that information."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"initPlugin(<ReactComponent>, <pluginInfo>, <React-redux reducers builder>, <messages>, <styles>)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ReactComponent"}),": The main React component of the plugin"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pluginInfo"})," : The plugin-info.json object, holding plugin declaration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"React-redux reducers builder"})," : (Optional, can be set to null) 1 function taking plugin instance ID as parameter and returning a map of reducer field to reducer function (see ",(0,s.jsx)(n.a,{href:"#redux-management",children:"Redux management"})," section)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"messages"})," : Internationalization messages as an object with languages as keys (en|fr), then message keys as sub keys and message value by locale as value (see example below)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"styles"})," : an object like ",(0,s.jsx)(n.code,{children:"{ styles: buildStylesMethod}"}),", where buildStylesMethod is a function taking current muiTheme as single parameter and returning plugin styles (see modules documentation for declaring and using module theme)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"plugin-infojson",children:"plugin-info.json"}),"\n",(0,s.jsx)(n.p,{children:"That file is used by the plugin loader to define the configuration required by the plugin."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "my-plugin",\n  "description": "It is my plugin",\n  "version": "1.0.0",\n  "author": "Someone",\n  "company": "Some company",\n  "email": "someone@some-company.com",\n  "url": "www.my-plugin-is-awesome.com",\n  "license": "GPL-V3",\n  "type": "CRITERIA",\n  "conf": {}\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," field marks the plugin type (criterion or service plugin)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"conf"})," field content is specific to the plugin type"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"plugin-configuration-view",children:"Plugin configuration view"}),"\n",(0,s.jsxs)(n.p,{children:["Plugin configuration forms are ",(0,s.jsx)(n.em,{children:"automatically created by the main application"}),", using plugin-info.json. Hence there is no need for configuration views in plugins."]}),"\n",(0,s.jsx)(n.h3,{id:"plugin-user-view",children:"Plugin user view"}),"\n",(0,s.jsxs)(n.p,{children:["Main react component, exported as the first parameter of the ",(0,s.jsx)(n.code,{children:"initPlugin"})," method, within ",(0,s.jsx)(n.code,{children:"main.js"}),", is the first displayed component after loading.\nThat component receives, no matter the plugin type, the property ",(0,s.jsx)(n.code,{children:"pluginInstanceId"}),", that is a ",(0,s.jsx)(n.strong,{children:"unique id for that instance of plugin"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Other plugin properties are specific to the plugin type, see ",(0,s.jsx)(n.a,{href:"/docs/1.15/development/frontend/plugins/criteria/",children:"criterion"})," or ",(0,s.jsx)(n.a,{href:"/docs/1.15/development/frontend/plugins/service/",children:"service"})," plugin pages for more detail."]}),"\n",(0,s.jsxs)(n.li,{children:["Component is instantiated with its own ",(0,s.jsx)(n.strong,{children:"intl"})," and ",(0,s.jsx)(n.strong,{children:"theme"}),", using current context (see ",(0,s.jsx)(n.a,{href:"/docs/1.15/development/frontend/view/international/",children:"Internationalization"})," and ",(0,s.jsx)(n.a,{href:"/docs/1.15/development/frontend/view/theme/",children:"Theme"})," pages for more detail"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"redux-management-in-plugins",children:"Redux management in plugins"}),"\n",(0,s.jsxs)(n.p,{children:["Plugins can, optionally, export reducers to be able using and updating their own space in Redux store. In REGARDS, components usually manage a static Redux store space. However, as one plugin can be instantiated many times, such system would result in all plugin instances sharing the same Redux store space, and thus the same state. Therefore, plugins have to address a ",(0,s.jsx)(n.em,{children:"dynamic"})," Redux store.",(0,s.jsx)(n.br,{}),"\n","For that reason, ",(0,s.jsx)(n.code,{children:"initPlugin"})," expects to receive an optional ",(0,s.jsx)(n.code,{children:"buildReducer"})," method, and not a static reducers map. That method must return, ",(0,s.jsxs)(n.em,{children:["given the unique ",(0,s.jsx)(n.code,{children:"pluginInstanceId"})]}),", the plugin reduce methods map."]}),"\n",(0,s.jsx)(n.h3,{id:"building-reducers",children:"Building reducers"}),"\n",(0,s.jsxs)(n.p,{children:["The plugin buildReducer function aims at providing a different dynamic reducers for each plugin instance. Therefore it must use ",(0,s.jsx)(n.code,{children:"pluginInstanceId"})," parameter to generate unique reducers namespaces. That way, the system ensures plugin instance 1 will not reduce plugin instance 2 Redux actions and reciprocally."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Build plugin reducers function example (might be placed in reducer.js file):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"// ...\n/*\n * Build reducer function\n * @param {string} pluginInstanceId plugin instance ID, must be used to generate unique namespaces and store paths\n * @return {*} reducers configuration for plugin instance\n */\nexport default function buildReducer(pluginInstanceId) {\n  return {\n    myModel1: getMyModel1Client(pluginInstanceId).reducer,\n    myModel2: getMyModel2Client(pluginInstanceId).reducer,\n  };\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"An example is available in enumerated criterion, at path webapp/plugins/criterion/enumerated/src/reducer.js"})}),"\n",(0,s.jsx)(n.h3,{id:"building-actions-and-selectors",children:"Building actions and selectors"}),"\n",(0,s.jsxs)(n.p,{children:["Redux actions must also be dynamically built using pluginInstanceID, since the namespace is used by plugin reducer to filter actions it should handle or ignore.",(0,s.jsx)(n.br,{}),"\n","Furthermore, as the redux store space are separated, the selectors must also be dynamic. The selectors path contains the two elements below:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["First path element: ",(0,s.jsx)(n.code,{children:"{Plugin name}.{Plugin instance ID}"})," where plugin name matches name from plugin-info.json and plugin instance ID is the value provided to both buildReducer method and main component."]}),"\n",(0,s.jsx)(n.li,{children:"Second path element is the reducer map key in the value returned by buildReducer method (myModel1 or myModel2 in example before)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Since the plugin instance ID is provided to the main component, it is possible to write the following code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"  class MyPluginContainer extends React.Component {\n  static mapStateToProps(state, { pluginInstanceId }) {\n      return {\n        myValue: new MyModel1Selectors(pluginInstanceId).getMyValue(state)\n      }\n    }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["However, that approach is ",(0,s.jsx)(n.strong,{children:"considered a bad practice"}),", as selectors and actions would be instantiated each time mapStateToProps and mapDispatchToProps are called, what consumes lot of browser memory.\nTo solve that issue, REGARDS provides the ",(0,s.jsx)(n.code,{children:"@regardsoss/plugins-api/PluginsClientsMap"})," class, that is a lazy clients map. Using it avoids creating new actions and selectors instances each time mapStateToProp and mapDispatchToPropsToProps are called."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"  class MyPluginContainer extends React.Component {\n    // That map will hold the instances of actions and selectors\n    static CLIENTS_MAP = new PluginsClientsMap()\n\n    static mapStateToProps(state, { pluginInstanceId }) {\n      const mySelectors = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).selectors\n      return {\n        myValue: mySelectors.getMyValue(state)\n      }\n    }\n\n    static mapDispatchToPropsToProps(dispatch, { pluginInstanceId }) {\n      const myActions = MyPluginContainer.CLIENTS_MAP.getClient(buildMyClient, pluginInstanceId).actions\n      return {\n        dispatchSomething: () => dispatch(myActions.doSomething())\n      }\n    }\n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: The PluginsClientsMap is a simple tool that buffers a map on pluginInstanceId => builder => builtValue. It is very straightforward code and can be replaced by a locally coded buffer if you prefer. In order to work correctly, it requires clientBuilder instance - buildMyClient in previous example - to be a constant JS function reference for a single client."})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6614:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/plugin-declaration-52d0beeb46506b107339218bab244952.png"},23777:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/search-form-a8a71415dcfe4946947ed220830bbd49.png"},14909:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/services-example-d82acec2d90c6a78d8830e68ed5e56a6.png"},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>d});var s=i(96540);const l={},r=s.createContext(l);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);