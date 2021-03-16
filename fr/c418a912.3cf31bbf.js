(window.webpackJsonp=window.webpackJsonp||[]).push([[2002],{2072:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),o=(t(0),t(2701)),i={id:"frontend-introduction-setup",title:"Development setup and build",sidebar_label:"Setup",slug:"/development/frontend/introduction/setup"},l={unversionedId:"development/frontend/frontend-introduction-setup",id:"version-1.4.0/development/frontend/frontend-introduction-setup",isDocsHomePage:!1,title:"Development setup and build",description:"Requirements",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/setup.md",slug:"/development/frontend/introduction/setup",permalink:"/fr/docs/1.4.0/development/frontend/introduction/setup",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/i18n/fr/docusaurus-plugin-content-docs/version-1.4.0/development/frontend/setup.md",version:"1.4.0",sidebar_label:"Setup",sidebar:"version-1.4.0/dev",previous:{title:"Bus message events",permalink:"/fr/docs/1.4.0/development/backend/storage/events"},next:{title:"Integrated development environments",permalink:"/fr/docs/1.4.0/development/frontend/introduction/ide"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Quick setup",id:"quick-setup",children:[{value:"Compile for production deployment",id:"compile-for-production-deployment",children:[]},{value:"Run for developement",id:"run-for-developement",children:[]},{value:"Run tests",id:"run-tests",children:[]},{value:"Run test coverage",id:"run-test-coverage",children:[]},{value:"Lint",id:"lint",children:[]},{value:"Known issues",id:"known-issues",children:[]}]}],c={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"node v8.10"),Object(o.b)("li",{parentName:"ul"},"npm v5.7.1 (npm i -g npm to upgrade)")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"As REGARDS frontend is developed around two main libraries, ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org"},"React")," and ",Object(o.b)("a",{parentName:"p",href:"http://redux.js.org"},"Redux"),", we highly recommand new developers to start by watching the here under ",Object(o.b)("a",{parentName:"p",href:"https://egghead.io"},"Egghead")," videos to learn the basics of these two libraries."),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://egghead.io/courses/react-native-fundamentals"},"React")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://egghead.io/courses/getting-started-with-redux"},"Redux"))),Object(o.b)("p",{parentName:"div"},"New developers can also check at the ",Object(o.b)("a",{parentName:"p",href:"https://v0.material-ui.com/#/components/app-bar"},"Material-ui")," library which is used to design all components of the REGARDS frontend."))),Object(o.b)("h2",{id:"quick-setup"},"Quick setup"),Object(o.b)("p",null,"Clone the ",Object(o.b)("inlineCode",{parentName:"p"},"rs-frontend")," repository, available ",Object(o.b)("a",{parentName:"p",href:"https://github.com/RegardsOss/regards-frontend"},"on GitHub")," and open the webapp folder in cloned repository using your terminal:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"cd regards-frontend/webapp\n")),Object(o.b)("p",null,"Then install all dependencies, and produce all required webpack DLL:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Please note that, after a new GIT branch checkout and when installed Node version is greater than 8, it may be required to delete all package-lock.json in project. It can be done using the following commands:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"cd webapp\nfind . -name 'package-lock*' -exec rm {} \\;\n")),Object(o.b)("h3",{id:"compile-for-production-deployment"},"Compile for production deployment"),Object(o.b)("p",null,"This two commands will generate the entire webapp for production environement with all plugins compiled.\nThe result is in the ",Object(o.b)("inlineCode",{parentName:"p"},"dist/prod")," directory. You can ignore this step if you want to produce a production build."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm run build:production\nnpm run build:plugins\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Congratulation"),", you're now ready to launch the application !"),Object(o.b)("h3",{id:"run-for-developement"},"Run for developement"),Object(o.b)("p",null,"The command below allow you to run the frontend webapp in development mode with hot sources reload.\nHowever, you need to override the REGARDS gateway address by replacing ",Object(o.b)("inlineCode",{parentName:"p"},"http://172.26.47.107")," by the address\nof your local REGARDS gateway instance in the ",Object(o.b)("inlineCode",{parentName:"p"},"/webapp/webpack.dev.preprod.config.js")," file. Then you can launch :"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm run start:withpreprod\n")),Object(o.b)("p",null,"Optionally, you may also build the plugins, using the following command in webapp folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"./scripts/build-all-plugins dev all\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Congratulation"),", you're now ready to access to your local front instance at the address ",Object(o.b)("a",{parentName:"p",href:"http://localhost:3333"},"localhost:3333"),"."),Object(o.b)("p",null,"Notes:\n-",Object(o.b)("em",{parentName:"p"},"Some REGARDS NPM tasks provide runnable using the proxy mock server. You may want to look deeper in those tasks when developping new features or without backend"),"\n-",Object(o.b)("em",{parentName:"p"},"REGARDS NPM tasks are currently defined for continous integration servers at ",Object(o.b)("a",{parentName:"em",href:"https://www.c-s.fr/"},"CS SI"))),Object(o.b)("h3",{id:"run-tests"},"Run tests"),Object(o.b)("p",null,"The following command runs the app tests and create reports in ",Object(o.b)("inlineCode",{parentName:"p"},"webapp/reports/mocha/")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm test\n")),Object(o.b)("h3",{id:"run-test-coverage"},"Run test coverage"),Object(o.b)("p",null,"The following command runs application coverage (lcov, xunit) and reports in ",Object(o.b)("inlineCode",{parentName:"p"},"webapp/reports/coverage/")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm run test:coverage\n")),Object(o.b)("h3",{id:"lint"},"Lint"),Object(o.b)("p",null,"The following command lint the REGARDS frontend application code and fixes automatically all formatting problems."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm run lint:fix\n")),Object(o.b)("p",null,"The developers should always run that comment before committing code files."),Object(o.b)("h3",{id:"known-issues"},"Known issues"),Object(o.b)("p",null,"When you install this application, all these NPM warnings can be safely ignored :  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm WARN enoent SKIPPING OPTIONAL DEPENDENCY: ENOENT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm WARN optional SKIPPING OPTIONAL DEPENDENCY")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm WARN enoent ENOENT: no such file or directory")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm WARN <some dependency>@<version> requires a peer of <another dependency>@<version> but none is installed. You must install peer dependencies yourself.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"npm WARN rollback Rolling back <some dependency>@<version> failed (this is probably harmless)"))))}s.isMDXComponent=!0},2701:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),s=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);