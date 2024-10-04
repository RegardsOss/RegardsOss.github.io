"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[52521],{44604:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453);const r={id:"frontend-view-international",title:"Internationalization",sidebar_label:"Internationalization",slug:"/development/frontend/view/international/"},o=void 0,a={id:"development/frontend/components/frontend-view-international",title:"Internationalization",description:"Description",source:"@site/versioned_docs/version-1.15/development/frontend/components/internationalization.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/view/international/",permalink:"/docs/1.15/development/frontend/view/international/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/development/frontend/components/internationalization.md",tags:[],version:"1.15",frontMatter:{id:"frontend-view-international",title:"Internationalization",sidebar_label:"Internationalization",slug:"/development/frontend/view/international/"},sidebar:"dev",previous:{title:"Backend interactions",permalink:"/docs/1.15/development/frontend/data/clients/"},next:{title:"Theme",permalink:"/docs/1.15/development/frontend/view/theme/"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"How to",id:"how-to",level:2},{value:"Internationalize text in REGARDS",id:"internationalize-text-in-regards",level:3},{value:"Connect with internationalization context",id:"connect-with-internationalization-context",level:3},{value:"Using I18nProvider",id:"using-i18nprovider",level:3},{value:"Using withI18n",id:"using-withi18n",level:3},{value:"I18n messages files",id:"i18n-messages-files",level:3},{value:"Use parameter in messages",id:"use-parameter-in-messages",level:3},{value:"More informations",id:"more-informations",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@regards/i18n"})," (web_modules/utils/i18n) module holds components and tools designed to simplify the internationalization of all messages in the REGARDS frontend."]}),"\n",(0,t.jsxs)(n.p,{children:["The REGARDS internationalization implementation uses ",(0,t.jsx)(n.a,{href:"https://github.com/yahoo/react-intl",children:"react-intl"})," library."]}),"\n",(0,t.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["To use the REGARDS ",(0,t.jsx)(n.code,{children:"I18nProvider"})," you must add the here under packages to your package.json dependencies:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@regardsoss/i18n"}),"\n",(0,t.jsx)(n.li,{children:"react-intl"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to",children:"How to"}),"\n",(0,t.jsx)(n.h3,{id:"internationalize-text-in-regards",children:"Internationalize text in REGARDS"}),"\n",(0,t.jsxs)(n.p,{children:["In components ",(0,t.jsx)(n.strong,{children:"with i18n context"})," (see later sections), you can retrieve internationalized messages using:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"this.context.intl.formatMessage"})," method, which produces a string out of the two parameters:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["First parameter is an object, where field ",(0,t.jsx)(n.code,{children:"id"})," is the message key"]}),"\n",(0,t.jsx)(n.li,{children:"Second parameter is an object, where each field key is the value key in messages (allowing messages with dynamic values)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Notes :"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To use the ",(0,t.jsx)(n.code,{children:"formatMessage"})," method of the ",(0,t.jsx)(n.a,{href:"https://github.com/yahoo/react-intl",children:"react-intl"})," library, you need to define the react component context with the react-intl properties. To do so, you can use the ",(0,t.jsx)(n.code,{children:"i18nContextType"})," of the ",(0,t.jsx)(n.code,{children:"@regardsoss/i18n"})," package."]}),"\n",(0,t.jsxs)(n.li,{children:["Value returned by ",(0,t.jsx)(n.code,{children:"formatMessage"})," is a string (and not a React.Element)."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"import { i18nContextType } from '@regardsoss/i18n'\n\nexport class ExampleComponent extends React.Component {\n\n  static contextTypes = {\n      ...i18nContextType,\n    }\n\n  render() {\n    const { intl: { formatMessage } } = this.context\n    return (\n      <div>\n        <span>{formatMessage({ id: 'example.message' })}</span>\n      </div>\n    )\n  }\n}\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"connect-with-internationalization-context",children:"Connect with internationalization context"}),"\n",(0,t.jsx)(n.p,{children:"In REGARDS, the internationalization context can be provided to children by using either:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"I18nProvider"})," component"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"withI18n"})," decorator function"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Those two methods are detailed in sections below."}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["What's ",(0,t.jsx)(n.code,{children:"stackCallingContext"}),"?"]}),(0,t.jsxs)(n.p,{children:["I18N connectors also define an optional parameter/property called ",(0,t.jsx)(n.code,{children:"stackCallingContext"})," (false by default).",(0,t.jsx)(n.br,{}),"\n","That property, when true, indicates that the new context and parent context should be merged. It results in providing both parent and new context messages to children. When exploring REGARDS code, that method is frequently encountered, especially in common components, as it allows the calling component defining children using calling context messages while API components still access messages in their own context.*"]})]}),"\n",(0,t.jsx)(n.h3,{id:"using-i18nprovider",children:"Using I18nProvider"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"I18nProvider"})," component provides internationalization context to its React children as demonstrated in example below.\nIt defines the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"messages"})," : an object, where first level key is locale (like 'en' or 'fr') and second level key are messages keys. Most of the time, we import directly the messages folder index.js file, as it exports ",(0,t.jsx)(n.code,{children:"{en:enMessage, fr:frMessages}"}),", which matches expected shape."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"stackCallingContext"}),": an optional boolean, false by default. See note in parent section for more detail."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { I18nProvider } from '@regardsoss/i18n'\nimport messages from '../i18n' // will contain {en:..., fr:...}\n\nexport class ExampleContainer extends React.Component {\n\n  render() {\n    return (\n      <I18nProvider messages={messages}>\n        <ExampleComponent />\n      </I18nProvider>\n    )\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the previous example, ExampleComponent will be able to access the i18n through context ",(0,t.jsx)(n.em,{children:"but ExampleContainer will not"}),". Indeed context is defined for ",(0,t.jsx)(n.strong,{children:"I18NProvider children"}),", in the React meaning."]}),"\n",(0,t.jsx)(n.p,{children:"For instance, in the following React tree, B and C can access messages context, but A can not."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"<A>\n  <I18nProvider messages={messages}>\n      <B>\n        <C />\n      </B>\n  </I18nProvider>\n</A>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-withi18n",children:"Using withI18n"}),"\n",(0,t.jsx)(n.p,{children:"To use the REGARDS withI18n decorator method, you need to export the component decorated with that method. It defines the following parameters (matching with I18NProvider properties described before):"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"messages"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"stackCallingContext"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { withI18n } from '@regardsoss/i18n'\nimport messages from '../i18n'\n\nclass ExampleContainer extends React.Component {\n\n  render() {\n    const { intl: { formatMessage } } = this.context\n\n    return (\n      {formatMessage({ id: 'example.message' })}\n    )\n  }\n}\n\nexport withI18n(messages)(ExampleContainer)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The use of ",(0,t.jsx)(n.code,{children:"withI18n(messages)(ExampleContainer)"})," means that messages context will be defined for ExampleContainer and all its children. Therefore, if we define the ",(0,t.jsx)(n.code,{children:"contextTypes"})," in this container, it will be able accessing the messages through its context."]}),"\n",(0,t.jsxs)(n.p,{children:["The instruction ",(0,t.jsx)(n.code,{children:"import messages from '../i18n"})," corresponds to messages files import explained in the next section."]}),"\n",(0,t.jsx)(n.h3,{id:"i18n-messages-files",children:"I18n messages files"}),"\n",(0,t.jsxs)(n.p,{children:["As explained in the previous sections, the ",(0,t.jsx)(n.code,{children:"I18nProvider"})," component or ",(0,t.jsx)(n.code,{children:"withI18n"})," method expects to receive an object that maps a list of locales onto a list of messages. For each locale object, keys will be the message key and value the internationalized message.\nIn REGARDS, by design, each locale messages dictionnary is defined in a file named ",(0,t.jsx)(n.code,{children:"messages.{LOCALE}.i18n.js"}),", where ",(0,t.jsx)(n.code,{children:"{LOCALE}"})," is locale shorthand ('en', 'fr')."]}),"\n",(0,t.jsx)(n.p,{children:"The example below illustrates a messages.en.i18n.js file content:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\nimport { Locales } from '@regardsoss/form-utils'\n\nconst messages = {\n  ...Locales.en, // form messages, required when dealing with forms\n  'example.message' : 'Example message to display',\n  'other.example.message' : 'Other example message to display'\n}\n\nexport default messages\n"})}),"\n",(0,t.jsx)(n.p,{children:"And here is the similar example for a messages.fr.i18n.js file content:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\nimport { Locales } from '@regardsoss/form-utils'\n\nconst messages = {\n  ...Locales.fr, // form messages, required when dealing with forms\n  'example.message' : 'Message d\\'exemple \xe0 afficher',\n  'other.example.message' : 'Un autre message d\\'exemple \xe0 afficher'\n}\n\nexport default messages\n"})}),"\n",(0,t.jsx)(n.p,{children:"To regroup the multiple language files, we usually create an index.js file as :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import en from './messages.en.i18n'\nimport fr from './messages.fr.i18n'\n\nmodule.exports = {\n  en,\n  fr,\n}\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["That file exports precisely what the ",(0,t.jsx)(n.code,{children:"messages"})," parameter/property consumes when using withI18n or I18nProvider."]}),"\n",(0,t.jsx)(n.h3,{id:"use-parameter-in-messages",children:"Use parameter in messages"}),"\n",(0,t.jsxs)(n.p,{children:["With the reac-intl library, it is possible to use parameters in internationalizzed message.",(0,t.jsx)(n.br,{}),"\n","Let's illustrate how to create it."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a parametrized message"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"'example.message.with.parameter': 'Hello {name} ?'\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Provide parameter when rendering"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"  static contextTypes = {\n    ...i18nContextType,\n  }\n    \n  render() {\n    const { intl: { formatMessage } } = this.context\n    const name = 'john'\n    return (\n      <div>\n        <span>{message}</span>\n        {formatMessage({ id: 'example.message.with.parameter' }, { name })}\n      </div>\n    )\n  }\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also customize the displayed message using the provided value."}),"\n",(0,t.jsxs)(n.p,{children:["For string parameters, you can use ",(0,t.jsx)(n.code,{children:"select"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"  'example.message.with.string.parameter': 'Hello {name, select, john {John Doe} other {you}}',\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For boolean parameters, you can use ",(0,t.jsx)(n.code,{children:"select"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"  'example.message.with.boolean.parameter': 'Sir, {accepted, select, true {please enter in the room} other {you cannot come in this place}}.',\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For integer parameters, you can use ",(0,t.jsx)(n.code,{children:"plural"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"  'example.message.with.integer.parameter': `{count, plural,\n    =0 {None}\n    one {Single entity}\n    other {Many entities}\n  }`,\n"})}),"\n",(0,t.jsx)(n.h3,{id:"more-informations",children:"More informations"}),"\n",(0,t.jsxs)(n.p,{children:["As the REGARDS I18nProvider is used only to provide messages to the ",(0,t.jsx)(n.a,{href:"https://github.com/yahoo/react-intl",children:"react-intl"})," library all\ncomponents that have the message context can use any ",(0,t.jsx)(n.a,{href:"https://github.com/yahoo/react-intl",children:"react-intl"})," functionality. You can refer to the official documentation to see more functionalities like ",(0,t.jsx)(n.code,{children:"Date internationalization"})," or ",(0,t.jsx)(n.code,{children:"HTML display"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);