"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[88352],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return t?r.createElement(g,l(l({ref:n},d),{},{components:t})):r.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const o={id:"frontend-introduction-setup",title:"Development setup and build",sidebar_label:"Setup",slug:"/development/frontend/introduction/setup/"},l=void 0,i={unversionedId:"development/frontend/frontend-introduction-setup",id:"version-1.13.0/development/frontend/frontend-introduction-setup",title:"Development setup and build",description:"Requirements",source:"@site/versioned_docs/version-1.13.0/development/frontend/setup.md",sourceDirName:"development/frontend",slug:"/development/frontend/introduction/setup/",permalink:"/docs/1.13.0/development/frontend/introduction/setup/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/frontend/setup.md",tags:[],version:"1.13.0",frontMatter:{id:"frontend-introduction-setup",title:"Development setup and build",sidebar_label:"Setup",slug:"/development/frontend/introduction/setup/"},sidebar:"dev",previous:{title:"REST API",permalink:"/docs/1.13.0/development/backend/services/lta-manager/api-swagger"},next:{title:"Setting up an IDE",permalink:"/docs/1.13.0/development/frontend/introduction/ide/"}},p={},s=[{value:"Requirements",id:"requirements",level:3},{value:"Quick setup",id:"quick-setup",level:2},{value:"Compile for production deployment",id:"compile-for-production-deployment",level:3},{value:"Run for developement",id:"run-for-developement",level:3},{value:"Run tests",id:"run-tests",level:3},{value:"Run test coverage",id:"run-test-coverage",level:3},{value:"Lint",id:"lint",level:3},{value:"Known issues",id:"known-issues",level:3}],d={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"requirements"},"Requirements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"node v8.10+"),(0,a.yg)("li",{parentName:"ul"},"npm v16+ (npm i -g npm to upgrade)")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"As REGARDS frontend is developed around two main libraries, ",(0,a.yg)("a",{parentName:"p",href:"https://reactjs.org"},"React")," and ",(0,a.yg)("a",{parentName:"p",href:"http://redux.js.org"},"Redux"),", we highly recommand new developers to start by watching the here under ",(0,a.yg)("a",{parentName:"p",href:"https://egghead.io"},"Egghead")," videos to learn the basics of these two libraries."),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://egghead.io/courses/react-native-fundamentals"},"React")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://egghead.io/courses/getting-started-with-redux"},"Redux"))),(0,a.yg)("p",{parentName:"admonition"},"New developers can also check at the ",(0,a.yg)("a",{parentName:"p",href:"https://v0.material-ui.com/#/components/app-bar"},"Material-ui")," library which is used to design all components of the REGARDS frontend.")),(0,a.yg)("h2",{id:"quick-setup"},"Quick setup"),(0,a.yg)("p",null,"Clone the ",(0,a.yg)("inlineCode",{parentName:"p"},"rs-frontend")," repository, available ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-frontend"},"on GitHub")," and open the webapp folder in cloned repository using your terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd regards-frontend/webapp\n")),(0,a.yg)("p",null,"Then install all dependencies, and produce all required webpack DLL:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Please note that, after a new GIT branch checkout and when installed Node version is greater than 8, it may be required to delete all package-lock.json in project. It can be done using the following commands:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd webapp\nfind . -name 'package-lock*' -exec rm {} \\;\n")),(0,a.yg)("h3",{id:"compile-for-production-deployment"},"Compile for production deployment"),(0,a.yg)("p",null,"This two commands will generate the entire webapp for production environement with all plugins compiled.\nThe result is in the ",(0,a.yg)("inlineCode",{parentName:"p"},"dist/prod")," directory. You can ignore this step if you want to produce a production build."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm run build:production\nnpm run build:plugins\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Congratulation"),", you're now ready to launch the application !"),(0,a.yg)("h3",{id:"run-for-developement"},"Run for developement"),(0,a.yg)("p",null,"The command below allow you to run the frontend webapp in development mode with hot sources reload.\nHowever, you need to override the REGARDS gateway address by replacing ",(0,a.yg)("inlineCode",{parentName:"p"},"http://172.26.47.107")," by the address\nof your local REGARDS gateway instance in the ",(0,a.yg)("inlineCode",{parentName:"p"},"/webapp/webpack.dev.preprod.config.js")," file. Then you can launch :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm run start:withpreprod\n")),(0,a.yg)("p",null,"Optionally, you may also build the plugins, using the following command in webapp folder:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"./scripts/build-all-plugins dev all\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Congratulation"),", you're now ready to access to your local front instance at the address ",(0,a.yg)("a",{parentName:"p",href:"http://localhost:3333"},"localhost:3333"),"."),(0,a.yg)("p",null,"Notes:\n-",(0,a.yg)("em",{parentName:"p"},"Some REGARDS NPM tasks provide runnable using the proxy mock server. You may want to look deeper in those tasks when developping new features or without backend"),"\n-",(0,a.yg)("em",{parentName:"p"},"REGARDS NPM tasks are currently defined for continous integration servers at ",(0,a.yg)("a",{parentName:"em",href:"https://www.c-s.fr/"},"CS SI"))),(0,a.yg)("h3",{id:"run-tests"},"Run tests"),(0,a.yg)("p",null,"The following command runs the app tests and create reports in ",(0,a.yg)("inlineCode",{parentName:"p"},"webapp/reports/mocha/")," folder:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),(0,a.yg)("h3",{id:"run-test-coverage"},"Run test coverage"),(0,a.yg)("p",null,"The following command runs application coverage (lcov, xunit) and reports in ",(0,a.yg)("inlineCode",{parentName:"p"},"webapp/reports/coverage/")," folder:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm run test:coverage\n")),(0,a.yg)("h3",{id:"lint"},"Lint"),(0,a.yg)("p",null,"The following command lint the REGARDS frontend application code and fixes automatically all formatting problems."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm run lint:fix\n")),(0,a.yg)("p",null,"The developers should always run that comment before committing code files."),(0,a.yg)("h3",{id:"known-issues"},"Known issues"),(0,a.yg)("p",null,"When you install this application, all these NPM warnings can be safely ignored :  "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm WARN optional SKIPPING OPTIONAL DEPENDENCY")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm WARN enoent ENOENT: no such file or directory")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm WARN <some dependency>@<version> requires a peer of <another dependency>@<version> but none is installed. You must install peer dependencies yourself.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"npm WARN rollback Rolling back <some dependency>@<version> failed (this is probably harmless)"))))}c.isMDXComponent=!0}}]);