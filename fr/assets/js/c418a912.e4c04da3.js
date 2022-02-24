"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[10512],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64901:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={id:"frontend-introduction-setup",title:"Development setup and build",sidebar_label:"Setup",slug:"/development/frontend/introduction/setup/"},p=void 0,s={unversionedId:"development/frontend/frontend-introduction-setup",id:"version-1.4.0/development/frontend/frontend-introduction-setup",title:"Development setup and build",description:"Requirements",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/setup.md",sourceDirName:"development/frontend",slug:"/development/frontend/introduction/setup/",permalink:"/fr/docs/1.4.0/development/frontend/introduction/setup/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.4.0/development/frontend/setup.md",tags:[],version:"1.4.0",frontMatter:{id:"frontend-introduction-setup",title:"Development setup and build",sidebar_label:"Setup",slug:"/development/frontend/introduction/setup/"},sidebar:"version-1.4.0/dev",previous:{title:"Bus message events",permalink:"/fr/docs/1.4.0/development/backend/storage/events/"},next:{title:"Setting up an IDE",permalink:"/fr/docs/1.4.0/development/frontend/introduction/ide/"}},d=[{value:"Requirements",id:"requirements",children:[],level:3},{value:"Quick setup",id:"quick-setup",children:[{value:"Compile for production deployment",id:"compile-for-production-deployment",children:[],level:3},{value:"Run for developement",id:"run-for-developement",children:[],level:3},{value:"Run tests",id:"run-tests",children:[],level:3},{value:"Run test coverage",id:"run-test-coverage",children:[],level:3},{value:"Lint",id:"lint",children:[],level:3},{value:"Known issues",id:"known-issues",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"node v8.10"),(0,o.kt)("li",{parentName:"ul"},"npm v5.7.1 (npm i -g npm to upgrade)")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As REGARDS frontend is developed around two main libraries, ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React")," and ",(0,o.kt)("a",{parentName:"p",href:"http://redux.js.org"},"Redux"),", we highly recommand new developers to start by watching the here under ",(0,o.kt)("a",{parentName:"p",href:"https://egghead.io"},"Egghead")," videos to learn the basics of these two libraries."),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://egghead.io/courses/react-native-fundamentals"},"React")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://egghead.io/courses/getting-started-with-redux"},"Redux"))),(0,o.kt)("p",{parentName:"div"},"New developers can also check at the ",(0,o.kt)("a",{parentName:"p",href:"https://v0.material-ui.com/#/components/app-bar"},"Material-ui")," library which is used to design all components of the REGARDS frontend."))),(0,o.kt)("h2",{id:"quick-setup"},"Quick setup"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("inlineCode",{parentName:"p"},"rs-frontend")," repository, available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-frontend"},"on GitHub")," and open the webapp folder in cloned repository using your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd regards-frontend/webapp\n")),(0,o.kt)("p",null,"Then install all dependencies, and produce all required webpack DLL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Please note that, after a new GIT branch checkout and when installed Node version is greater than 8, it may be required to delete all package-lock.json in project. It can be done using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd webapp\nfind . -name 'package-lock*' -exec rm {} \\;\n")),(0,o.kt)("h3",{id:"compile-for-production-deployment"},"Compile for production deployment"),(0,o.kt)("p",null,"This two commands will generate the entire webapp for production environement with all plugins compiled.\nThe result is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist/prod")," directory. You can ignore this step if you want to produce a production build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:production\nnpm run build:plugins\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulation"),", you're now ready to launch the application !"),(0,o.kt)("h3",{id:"run-for-developement"},"Run for developement"),(0,o.kt)("p",null,"The command below allow you to run the frontend webapp in development mode with hot sources reload.\nHowever, you need to override the REGARDS gateway address by replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"http://172.26.47.107")," by the address\nof your local REGARDS gateway instance in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/webapp/webpack.dev.preprod.config.js")," file. Then you can launch :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run start:withpreprod\n")),(0,o.kt)("p",null,"Optionally, you may also build the plugins, using the following command in webapp folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./scripts/build-all-plugins dev all\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Congratulation"),", you're now ready to access to your local front instance at the address ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3333"},"localhost:3333"),"."),(0,o.kt)("p",null,"Notes:\n-",(0,o.kt)("em",{parentName:"p"},"Some REGARDS NPM tasks provide runnable using the proxy mock server. You may want to look deeper in those tasks when developping new features or without backend"),"\n-",(0,o.kt)("em",{parentName:"p"},"REGARDS NPM tasks are currently defined for continous integration servers at ",(0,o.kt)("a",{parentName:"em",href:"https://www.c-s.fr/"},"CS SI"))),(0,o.kt)("h3",{id:"run-tests"},"Run tests"),(0,o.kt)("p",null,"The following command runs the app tests and create reports in ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp/reports/mocha/")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),(0,o.kt)("h3",{id:"run-test-coverage"},"Run test coverage"),(0,o.kt)("p",null,"The following command runs application coverage (lcov, xunit) and reports in ",(0,o.kt)("inlineCode",{parentName:"p"},"webapp/reports/coverage/")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run test:coverage\n")),(0,o.kt)("h3",{id:"lint"},"Lint"),(0,o.kt)("p",null,"The following command lint the REGARDS frontend application code and fixes automatically all formatting problems."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run lint:fix\n")),(0,o.kt)("p",null,"The developers should always run that comment before committing code files."),(0,o.kt)("h3",{id:"known-issues"},"Known issues"),(0,o.kt)("p",null,"When you install this application, all these NPM warnings can be safely ignored :  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm WARN optional SKIPPING OPTIONAL DEPENDENCY")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm WARN enoent ENOENT: no such file or directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm WARN <some dependency>@<version> requires a peer of <another dependency>@<version> but none is installed. You must install peer dependencies yourself.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"npm WARN rollback Rolling back <some dependency>@<version> failed (this is probably harmless)"))))}c.isMDXComponent=!0}}]);