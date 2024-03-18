"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[36043],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=p(t),d=i,u=g["".concat(l,".").concat(d)]||g[d]||c[d]||r;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(58168),i=(t(96540),t(15680));const r={id:"frontend-view-international",title:"Internationalization",sidebar_label:"Internationalization",slug:"/development/frontend/view/international/"},o=void 0,s={unversionedId:"development/frontend/components/frontend-view-international",id:"version-1.12.0/development/frontend/components/frontend-view-international",title:"Internationalization",description:"Description",source:"@site/versioned_docs/version-1.12.0/development/frontend/components/internationalization.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/view/international/",permalink:"/docs/1.12.0/development/frontend/view/international/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.12.0/development/frontend/components/internationalization.md",tags:[],version:"1.12.0",frontMatter:{id:"frontend-view-international",title:"Internationalization",sidebar_label:"Internationalization",slug:"/development/frontend/view/international/"},sidebar:"dev",previous:{title:"Backend interactions",permalink:"/docs/1.12.0/development/frontend/data/clients/"},next:{title:"Theme",permalink:"/docs/1.12.0/development/frontend/view/theme/"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"How to",id:"how-to",level:2},{value:"Internationalize text in REGARDS",id:"internationalize-text-in-regards",level:3},{value:"Connect with internationalization context",id:"connect-with-internationalization-context",level:3},{value:"Using I18nProvider",id:"using-i18nprovider",level:3},{value:"Using withI18n",id:"using-withi18n",level:3},{value:"I18n messages files",id:"i18n-messages-files",level:3},{value:"Use parameter in messages",id:"use-parameter-in-messages",level:3},{value:"More informations",id:"more-informations",level:3}],m={toc:p},g="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(g,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"@regards/i18n")," (web_modules/utils/i18n) module holds components and tools designed to simplify the internationalization of all messages in the REGARDS frontend. "),(0,i.yg)("p",null,"The REGARDS internationalization implementation uses ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/yahoo/react-intl"},"react-intl")," library."),(0,i.yg)("h2",{id:"dependencies"},"Dependencies"),(0,i.yg)("p",null,"To use the REGARDS ",(0,i.yg)("inlineCode",{parentName:"p"},"I18nProvider")," you must add the here under packages to your package.json dependencies:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"@regardsoss/i18n"),(0,i.yg)("li",{parentName:"ul"},"react-intl")),(0,i.yg)("h2",{id:"how-to"},"How to"),(0,i.yg)("h3",{id:"internationalize-text-in-regards"},"Internationalize text in REGARDS"),(0,i.yg)("p",null,"In components ",(0,i.yg)("strong",{parentName:"p"},"with i18n context")," (see later sections), you can retrieve internationalized messages using:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"this.context.intl.formatMessage")," method, which produces a string out of the two parameters:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"First parameter is an object, where field ",(0,i.yg)("inlineCode",{parentName:"li"},"id")," is the message key"),(0,i.yg)("li",{parentName:"ul"},"Second parameter is an object, where each field key is the value key in messages (allowing messages with dynamic values)")))),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Notes :")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To use the ",(0,i.yg)("inlineCode",{parentName:"li"},"formatMessage")," method of the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/yahoo/react-intl"},"react-intl")," library, you need to define the react component context with the react-intl properties. To do so, you can use the ",(0,i.yg)("inlineCode",{parentName:"li"},"i18nContextType")," of the ",(0,i.yg)("inlineCode",{parentName:"li"},"@regardsoss/i18n")," package."),(0,i.yg)("li",{parentName:"ul"},"Value returned by ",(0,i.yg)("inlineCode",{parentName:"li"},"formatMessage")," is a string (and not a React.Element).")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"import { i18nContextType } from '@regardsoss/i18n'\n\nexport class ExampleComponent extends React.Component {\n\n  static contextTypes = {\n      ...i18nContextType,\n    }\n\n  render() {\n    const { intl: { formatMessage } } = this.context\n    return (\n      <div>\n        <span>{formatMessage({ id: 'example.message' })}</span>\n      </div>\n    )\n  }\n}\n\n")),(0,i.yg)("h3",{id:"connect-with-internationalization-context"},"Connect with internationalization context"),(0,i.yg)("p",null,"In REGARDS, the internationalization context can be provided to children by using either:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"I18nProvider")," component"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"withI18n")," decorator function")),(0,i.yg)("p",null,"Those two methods are detailed in sections below."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"What's ",(0,i.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"stackCallingContext"),"?"),(0,i.yg)("p",{parentName:"admonition"},"I18N connectors also define an optional parameter/property called ",(0,i.yg)("inlineCode",{parentName:"p"},"stackCallingContext")," (false by default).",(0,i.yg)("br",{parentName:"p"}),"\n","That property, when true, indicates that the new context and parent context should be merged. It results in providing both parent and new context messages to children. When exploring REGARDS code, that method is frequently encountered, especially in common components, as it allows the calling component defining children using calling context messages while API components still access messages in their own context.*")),(0,i.yg)("h3",{id:"using-i18nprovider"},"Using I18nProvider"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"I18nProvider")," component provides internationalization context to its React children as demonstrated in example below.\nIt defines the following properties:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"messages")," : an object, where first level key is locale (like 'en' or 'fr') and second level key are messages keys. Most of the time, we import directly the messages folder index.js file, as it exports {en:enMessage, fr:frMessages}, which matches expected shape."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"stackCallingContext"),": an optional boolean, false by default. See note in parent section for more detail.")),(0,i.yg)("p",null,"Example :"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { I18nProvider } from '@regardsoss/i18n'\nimport messages from '../i18n' // will contain {en:..., fr:...}\n\nexport class ExampleContainer extends React.Component {\n\n  render() {\n    return (\n      <I18nProvider messages={messages}>\n        <ExampleComponent />\n      </I18nProvider>\n    )\n  }\n}\n")),(0,i.yg)("p",null,"In the previous example, ExampleComponent will be able to access the i18n through context ",(0,i.yg)("em",{parentName:"p"},"but ExampleContainer will not"),". Indeed context is defined for ",(0,i.yg)("strong",{parentName:"p"},"I18NProvider children"),", in the React meaning."),(0,i.yg)("p",null,"For instance, in the following React tree, B and C can access messages context, but A can not."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<A>\n  <I18nProvider messages={messages}>\n      <B>\n        <C />\n      </B>\n  </I18nProvider>\n</A>\n")),(0,i.yg)("h3",{id:"using-withi18n"},"Using withI18n"),(0,i.yg)("p",null,"To use the REGARDS withI18n decorator method, you need to export the component decorated with that method. It defines the following parameters (matching with I18NProvider properties described before):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"messages")," "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"stackCallingContext"))),(0,i.yg)("p",null,"Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"import { withI18n } from '@regardsoss/i18n'\nimport messages from '../i18n'\n\nclass ExampleContainer extends React.Component {\n\n  render() {\n    const { intl: { formatMessage } } = this.context\n\n    return (\n      {formatMessage({ id: 'example.message' })}\n    )\n  }\n}\n\nexport withI18n(messages)(ExampleContainer)\n")),(0,i.yg)("p",null,"The use of ",(0,i.yg)("inlineCode",{parentName:"p"},"withI18n(messages)(ExampleContainer)")," means that messages context will be defined for ExampleContainer and all its children. Therefore, if we define the ",(0,i.yg)("inlineCode",{parentName:"p"},"contextTypes")," in this container, it will be able accessing the messages through its context."),(0,i.yg)("p",null,"The instruction ",(0,i.yg)("inlineCode",{parentName:"p"},"import messages from '../i18n")," corresponds to messages files import explained in the next section."),(0,i.yg)("h3",{id:"i18n-messages-files"},"I18n messages files"),(0,i.yg)("p",null,"As explained in the previous sections, the ",(0,i.yg)("inlineCode",{parentName:"p"},"I18nProvider")," component or ",(0,i.yg)("inlineCode",{parentName:"p"},"withI18n")," method expects to receive an object that maps a list of locales onto a list of messages. For each locale object, keys will be the message key and value the internationalized message.\nIn REGARDS, by design, each locale messages dictionnary is defined in a file named ",(0,i.yg)("inlineCode",{parentName:"p"},"messages.{LOCALE}.i18n.js"),", where {LOCALE} is locale shorthand ('en', 'fr')."),(0,i.yg)("p",null,"The example below illustrates a messages.en.i18n.js file content:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"\nimport { Locales } from '@regardsoss/form-utils'\n\nconst messages = {\n  ...Locales.en, // form messages, required when dealing with forms\n  'example.message' : 'Example message to display',\n  'other.example.message' : 'Other example message to display'\n}\n\nexport default messages\n")),(0,i.yg)("p",null,"And here is the similar example for a messages.fr.i18n.js file content:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"\nimport { Locales } from '@regardsoss/form-utils'\n\nconst messages = {\n  ...Locales.fr, // form messages, required when dealing with forms\n  'example.message' : 'Message d\\'exemple \xe0 afficher',\n  'other.example.message' : 'Un autre message d\\'exemple \xe0 afficher'\n}\n\nexport default messages\n")),(0,i.yg)("p",null,"To regroup the multiple language files, we usually create an index.js file as : "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import en from './messages.en.i18n'\nimport fr from './messages.fr.i18n'\n\nmodule.exports = {\n  en,\n  fr,\n}\n\n")),(0,i.yg)("p",null,"That file exports precisely what the ",(0,i.yg)("inlineCode",{parentName:"p"},"messages")," parameter/property consumes when using withI18n or I18nProvider."),(0,i.yg)("h3",{id:"use-parameter-in-messages"},"Use parameter in messages"),(0,i.yg)("p",null,"With the reac-intl library, it is possible to use parameters in internationalizzed message.",(0,i.yg)("br",{parentName:"p"}),"\n","Let's illustrate how to create it."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a parametrized message")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"'example.message.with.parameter': 'Hello {name} ?'\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Provide parameter when rendering")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"  static contextTypes = {\n    ...i18nContextType,\n  }\n    \n  render() {\n    const { intl: { formatMessage } } = this.context\n    const name = 'john'\n    return (\n      <div>\n        <span>{message}</span>\n        {formatMessage({ id: 'example.message.with.parameter' }, { name })}\n      </div>\n    )\n  }\n")),(0,i.yg)("p",null,"You can also customize the displayed message using the provided value."),(0,i.yg)("p",null,"For string parameters, you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"select"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  'example.message.with.string.parameter': 'Hello {name, select, john {John Doe} other {you}}',\n")),(0,i.yg)("p",null,"For boolean parameters, you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"select"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  'example.message.with.boolean.parameter': 'Sir, {accepted, select, true {please enter in the room} other {you cannot come in this place}}.',\n")),(0,i.yg)("p",null,"For integer parameters, you can use ",(0,i.yg)("inlineCode",{parentName:"p"},"plural"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-javascript"},"  'example.message.with.integer.parameter': `{count, plural,\n    =0 {None}\n    one {Single entity}\n    other {Many entities}\n  }`,\n")),(0,i.yg)("h3",{id:"more-informations"},"More informations"),(0,i.yg)("p",null,"As the REGARDS I18nProvider is used only to provide messages to the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/yahoo/react-intl"},"react-intl")," library all\ncomponents that have the message context can use any ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/yahoo/react-intl"},"react-intl")," functionality. You can refer to the official documentation to see more functionalities like ",(0,i.yg)("inlineCode",{parentName:"p"},"Date internationalization")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"HTML display"),"."))}c.isMDXComponent=!0}}]);