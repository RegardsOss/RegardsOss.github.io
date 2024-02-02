"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[69212],{95788:(e,n,t)=>{t.d(n,{Iu:()=>m,yg:()=>g});var a=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=o,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||r;return t?a.createElement(g,i(i({ref:n},m),{},{components:t})):a.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(45072),o=(t(11504),t(95788));const r={id:"frontend-introduction-architecture",title:"Architecture overview",sidebar_label:"Architecture",slug:"/development/frontend/introduction/architecture/"},i=void 0,s={unversionedId:"development/frontend/frontend-introduction-architecture",id:"version-1.13.0/development/frontend/frontend-introduction-architecture",title:"Architecture overview",description:"Presentation",source:"@site/versioned_docs/version-1.13.0/development/frontend/arch.md",sourceDirName:"development/frontend",slug:"/development/frontend/introduction/architecture/",permalink:"/docs/1.13.0/development/frontend/introduction/architecture/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/frontend/arch.md",tags:[],version:"1.13.0",frontMatter:{id:"frontend-introduction-architecture",title:"Architecture overview",sidebar_label:"Architecture",slug:"/development/frontend/introduction/architecture/"},sidebar:"dev",previous:{title:"Setting up an IDE",permalink:"/docs/1.13.0/development/frontend/introduction/ide/"},next:{title:"Lint",permalink:"/docs/1.13.0/development/frontend/introduction/eslint/"}},l={},d=[{value:"Presentation",id:"presentation",level:2},{value:"Structure",id:"structure",level:2},{value:"Common businness modules (business-common)",id:"common-businness-modules-business-common",level:2},{value:"Business modules",id:"business-modules",level:2},{value:"Eslint configuration module",id:"eslint-configuration-module",level:2},{value:"Mocks",id:"mocks",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Components modules",id:"components-modules",level:2},{value:"Data",id:"data",level:2},{value:"Modules",id:"modules",level:2},{value:"Utils modules",id:"utils-modules",level:2}],m={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.c)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"presentation"},"Presentation"),(0,o.yg)("p",null,"The REGARDS frontend contains three differents interfaces:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"Portal interface"),", fully configurable (layout, theme and modules displayed), that lists projects. "),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"User interface"),", fully configurable (layout, theme and modules displayed), that lets users browse project content. "),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"Administrator interface"),", that allows ",(0,o.yg)("strong",{parentName:"li"},"Instance admin")," creating Projects and ",(0,o.yg)("strong",{parentName:"li"},"Project Admin")," configuring them. ")),(0,o.yg)("p",null,"For the ",(0,o.yg)("inlineCode",{parentName:"p"},"Portal")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"User")," interfaces, REGARDS UI defines ",(0,o.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/frontend/packages/lazy-modules/"},"Dynamic modules")," to bring UI features that the administrator can control (options, layout, menus....)."),(0,o.yg)("h2",{id:"structure"},"Structure"),(0,o.yg)("p",null,"The REGARDS frontend is divided in several NPM modules. Each one has a ",(0,o.yg)("inlineCode",{parentName:"p"},"package.json")," file defining the name of the module. It allows us to import a module using that name instead of module relative path."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"import { configureStore } from '@regardsoss/store' // Good\nimport { configureStore } from '../web_modules/data/store/src/main.js' // Bad practice\n")),(0,o.yg)("p",null,"Before further explanation about the role of each module and folders, let's have a look on the global rs-frontend/webapp folder structure."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'\u251c\u2500\u2500 webapp                                    # REGARDS Frontend webapp folder\n    \u251c\u2500\u2500 dist                                  # transpiled code for dev and prod \n    \u251c\u2500\u2500 eslint-config-es6-rules               # Eslint configuration for project (as a module)\n    \u251c\u2500\u2500 mocks                                 # Holds mock servers for features development\n    \u251c\u2500\u2500 plugins                               # REGARDS plugins\n    \u251c\u2500\u2500 reports                               # Local reports\n    |  \u251c\u2500\u2500 coverage                           # Coverage report\n    |  \u251c\u2500\u2500 mocha                              # Test report\n    \u251c\u2500\u2500 resources                             # Some demo resources\n    \u251c\u2500\u2500 scripts                               # Some helper scripts for installing, building... Mainly for plugins usage\n    \u251c\u2500\u2500 src                                   # frontend starter source code, common to user, portal and admin applications\n    |  \u251c\u2500\u2500 main.jsx                           # Starter React file\n    |  \u251c\u2500\u2500 rootReducer.js                     # Loads the Redux tree\n    |  \u2514\u2500\u2500 rootRouter.js                      # Loads the react-router logic\n    \u251c\u2500\u2500 tests                                 # Tests corresponding to src folder\n    \u251c\u2500\u2500 web_modules                           # Contains all @regardsoss modules, except builder and lint ones\n    |  \u251c\u2500\u2500 business-common                    # Reusable business logic, often shared between admin and user app\n    |  \u251c\u2500\u2500 business-modules                   # Application static modules and specific applications starters `admin`, `portal` and `user`\n    |  \u251c\u2500\u2500 components                         # Reusable React components\n    |  \u251c\u2500\u2500 data                               # data related reusable elements\n    |  |  \u251c\u2500\u2500 api                             # module holding normalizer configurations for backend API\n    |  |  \u251c\u2500\u2500 client                          # module holding redux client to fetch data from backend\n    |  |  \u251c\u2500\u2500 domain                          # module holding business domain enumerations and constants\n    |  |  \u251c\u2500\u2500 shape                           # React PropTypes related with backend data and normalized data\n    |  |  \u2514\u2500\u2500 store                           # Redux store helpers and configurators\n    |  \u251c\u2500\u2500 modules                            # Dynamic modules \n    |  \u251c\u2500\u2500 utils                              # REGARDS "generic" toolkit\n    |  \u2514\u2500\u2500 vendors                            # External libraries forks\n    \u251c\u2500\u2500 webpack-config-front                  # Module holding plugins and modules webpack transpiler and defining dev and prod build constants\n    \u251c\u2500\u2500 yeoman                                # Yeoman templates (cli to generate frontend modules and plugins)\n    \u251c\u2500\u2500 package.json                          # Define npm scripts and list all dependencies\n    \u251c\u2500\u2500 webpack.*.config.js                   # Various webpack configuration files, corresponding to similar NPM task\n')),(0,o.yg)("h2",{id:"common-businness-modules-business-common"},"Common businness modules (business-common)"),(0,o.yg)("p",null,"This folder contains business related modules, shared accross many REGARDS modules and/or applications"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"admin-data-entities-attributes-management"),":\nShared React component to handle entities attributes configuration"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"attributes-common"),": Shared React components to configure and display attributes values"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"endpoints-common"),": Shared data fetcher and storage for endpoint access rights"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"entities-common"),": Shared React components for entities related UI services (like displaying entity detail)"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"global-system-error"),": Shared React components to display errors in REGARDS interfaces"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"project-handler"),": Shared react High Order Component to fetch and publish in Redux store (see later sections) the current project"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"user-metadata-common"),": Shared project user metadata definition and edition React components")),(0,o.yg)("h2",{id:"business-modules"},"Business modules"),(0,o.yg)("p",null,"This folder contains all applications modules that are not ",(0,o.yg)("em",{parentName:"p"},"dynamic")," - ie that cannot be configured and set up in user nor in portal applications. Therefore it contains application starters (admin, user, portal) plus all administration interface modules."),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Note: The administration application is structured in a thematic tree, like seen in the tree below. Each module at a given tree level imports and setupq the modules below (reducers, routers,...)")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\u251c\u2500\u2500 portal                                              # Portal app starter\n\u251c\u2500\u2500 user                                                # User app starter\n\u2514\u2500\u2500 admin                                               # Admin app starter\n    \u251c\u2500\u2500 admin-board-collections                         # Data (rs-dam tenant)\n        \u251c\u2500\u2500 admin-data-collection-management            # Collection \n        \u2514\u2500\u2500 admin-data-dataset-management               # Dataset \n    \u251c\u2500\u2500 admin-board-models                              # Modelisation (rs-dam tenant)\n        \u251c\u2500\u2500 admin-data-attributemodel-management        # Attribute model\n        \u251c\u2500\u2500 admin-data-fragment-management              # Fragment \n        \u251c\u2500\u2500 admin-data-model-management                 # Model \n        \u251c\u2500\u2500 admin-data-attribute-plugins-management\n        \u2514\u2500\u2500 admin-data-modelattribute-management        # Model attribute association\n    \u251c\u2500\u2500 admin-board-acquisition                         # Acquisition\n        \u251c\u2500\u2500 admin-data-datasource-management            # Datasource \n        \u251c\u2500\u2500 admin-ingest-processing-chain-management\n        \u251c\u2500\u2500 admin-ingest-sip-management\n        \u251c\u2500\u2500 admin-document-management\n        \u251c\u2500\u2500 admin-data-provider-management\n        \u251c\u2500\u2500 admin-data-connection-management            # Connection \n        \u2514\u2500\u2500 admin-storage-management\n    \u251c\u2500\u2500 admin-microservice-management                   # Java Plugins and microservice lifecycle\n    \u251c\u2500\u2500 admin-project-management                        # Project (rs-admin instance)\n    \u251c\u2500\u2500 admin-board-account                             # Account (rs-admin instance)\n        \u2514\u2500\u2500 admin-account-management                   \n    \u251c\u2500\u2500 admin-ui-management                             # User interface (rs-access-*)\n        \u251c\u2500\u2500 admin-ui-module-management                  # UI Modules configuration\n        \u251c\u2500\u2500 admin-ui-plugin-management                  # UI Plugin\n        \u251c\u2500\u2500 admin-ui-layout-management                  # UI Layout\n        \u251c\u2500\u2500 admin-ui-service-management                 # UI Plugin services\n        \u2514\u2500\u2500 admin-ui-theme-management                   # UI Theme\n    \u251c\u2500\u2500 admin-user-management                           # User configuration (rs-admin tenant)\n        \u251c\u2500\u2500 admin-user-projectuser-management           # Project User \n        \u251c\u2500\u2500 admin-user-role-management                  # Role\n        \u251c\u2500\u2500 admin-user-authentication-plugins-management \n        \u251c\u2500\u2500 admin-order-management \n        \u2514\u2500\u2500 admin-user-role-resource-access-management  # REST resource authorisation per role\n    \u2514\u2500\u2500 admin-board-dataaccess                    # Data access rights (rs-dam tenant)\n        \u251c\u2500\u2500 admin-accessright-accessgroup-management    # Data access groups\n        \u251c\u2500\u2500 admin-dataaccess-searchengines-management\n        \u251c\u2500\u2500 admin-dataaccess-services-management\n        \u2514\u2500\u2500 admin-accessright-dataaccess-management     # Data access rights per group \n\n\n\n\n")),(0,o.yg)("h2",{id:"eslint-configuration-module"},"Eslint configuration module"),(0,o.yg)("p",null,"The folder ",(0,o.yg)("inlineCode",{parentName:"p"},"eslint-config-es6-rules")," holds the lint configuration module for REGARDS frontend. Lint corresponds to the set of style rules that are applied to project code."),(0,o.yg)("h2",{id:"mocks"},"Mocks"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"mocks")," folder contains runnable mock servers:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"front")," folder contains a standalone server that answers all front end calls based on a node JS server"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"json")," folder contains a standalone server that answers all front end calls using JSONServer"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("em",{parentName:"li"},"proxy")," folder contains a standalone server that answers known front end calls based on a local node JS server and is able to report unknown URL onto configured backend server, acting as a proxy")),(0,o.yg)("p",null,"Those servers are used to develop and test new functionnalities. The team recently uses ",(0,o.yg)("strong",{parentName:"p"},"proxy")," server for most new features development."),(0,o.yg)("h2",{id:"plugins"},"Plugins"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"plugins")," folder contains REGARDS front end plugins code. Those plugins are separed of front end core code. However, it is convenient for development to keep the folder within webapp to address compilation, version and references issues. For more detail about plugins, see ",(0,o.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/frontend/plugins/"},"plugins page")),(0,o.yg)("h2",{id:"components-modules"},"Components modules"),(0,o.yg)("p",null,"This package provides ",(0,o.yg)("strong",{parentName:"p"},"React")," generic components to handle forms, buttons, cards and so on. More details are available in ",(0,o.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/frontend/packages/components/"},"components detail page")),(0,o.yg)("h2",{id:"data"},"Data"),(0,o.yg)("p",null,"This folder holds API data related modules (server fetching, shapes, redux store, middlewares...). See ",(0,o.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/frontend/data/ui-data/"},"data presentation page")),(0,o.yg)("h2",{id:"modules"},"Modules"),(0,o.yg)("p",null,"This folder contains all ",(0,o.yg)("em",{parentName:"p"},"dynamic")," modules, ie all modules that can be configured to be displayed in user and portal application. For more details, see ",(0,o.yg)("a",{parentName:"p",href:"/docs/1.13.0/development/frontend/packages/lazy-modules/"},"dynamic modules sections"),"  "),(0,o.yg)("h2",{id:"utils-modules"},"Utils modules"),(0,o.yg)("p",null,"This folder holds modules, one by folder, providing high level tools and components shared by all application interfaces (administration, user application and portal application)."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"adapters"),": Provides enriched components from external librairies - adds headless render or default styles to a component for instance"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"authentication-utils"),": Interact with the API to authenticate users. Provides some helpers to authenticate the user, get authentication state, and so on. Also manages 'external authentication parameters' used, for instance, by the mail link sent when creating a new account email"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"display-control"),": Provides ready to use React components to show/hide a component depending on a logic - show loading when fetching, hide a button when user has not sufficient rights, and so on..."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"file-utils"),": Provides ready to use React components to manage files."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"form-utils"),": Provides ready to use internationalized React components and various tools to manage and update ",(0,o.yg)("a",{parentName:"li",href:"http://redux-form.com"},"Redux forms")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"i18n"),": Provides tools and components to manage internationalization. Note: REGARDS i18n system relies on ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/yahoo/react-intl"},"React intl")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"i18n-ui"),": Provides i18n graphic interactors to select / display current i18n state in application"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"layout"),": Provides components and tools to handle REGARDS user interface layout customizing and render"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"mime-types"),": Provides tools and enumerationrs related with MIME type management in REGARDS"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"modules"),": Provides components and tools to show dynamic modules in REGARDS interfaces"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"modules-api"),": Provides tools to implement new modules configuration and user interfaces"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"plugins"),': Provides components and tools to show plugins in REGARDS interfaces. Note that this modules is only related with "UI plugins"; "Backend plugins" are not handled here'),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"plugins-api"),": Provides tools to implement new UI plugins in REGARDS."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"redux"),": Provides tools to connect with application Redux store"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"store-utils"),": Provides redux generic actions, reducers and selectors to make ",(0,o.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/redux-api-middleware"},"Redux API middleware")," use easier with REGARDS backend. Also provides some other standard redux models for REGARDS, like partitions storage model"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"test-helpers"),": Provides test  tools for react components headless tests.\n",(0,o.yg)("em",{parentName:"li"},"Note: this modules is only provided for test, it should never be bundled with the core application. Therefore the developer must not use it outside test code")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"theme"),": Provide tools and components to manage REGARDS components theme. Note: it relies on ",(0,o.yg)("a",{parentName:"li",href:"http://www.material-ui.com/#/customization/themes"},"Material UI theme")," system"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"theme-ui"),": Provides theme graphic interactors to select / display current theme state in application")))}p.isMDXComponent=!0}}]);