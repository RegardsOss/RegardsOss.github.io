"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[63849],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,c=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return t?r.createElement(c,a(a({ref:n},m),{},{components:t})):r.createElement(c,a({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52019:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"frontend-view-forms",title:"Redux form",sidebar_label:"Forms",slug:"/development/frontend/view/forms/"},d=void 0,s={unversionedId:"development/frontend/components/frontend-view-forms",id:"version-1.5.0/development/frontend/components/frontend-view-forms",isDocsHomePage:!1,title:"Redux form",description:"Description",source:"@site/versioned_docs/version-1.5.0/development/frontend/components/redux-forms.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/view/forms/",permalink:"/docs/1.5.0/development/frontend/view/forms/",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.5.0/development/frontend/components/redux-forms.md",tags:[],version:"1.5.0",frontMatter:{id:"frontend-view-forms",title:"Redux form",sidebar_label:"Forms",slug:"/development/frontend/view/forms/"},sidebar:"version-1.5.0/dev",previous:{title:"Theme",permalink:"/docs/1.5.0/development/frontend/view/theme/"},next:{title:"Re-usable components",permalink:"/docs/1.5.0/development/frontend/packages/components/"}},m=[{value:"Description",id:"description",children:[]},{value:"How to use",id:"how-to-use",children:[{value:"Simple example",id:"simple-example",children:[]},{value:"REGARDS form-utils",id:"regards-form-utils",children:[]},{value:"More",id:"more",children:[]}]}],p={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The REGARDS frontend uses the ",(0,i.kt)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/"},"redux-form")," library to create forms.\nThis library stores in the common ",(0,i.kt)("inlineCode",{parentName:"p"},"redux store")," all informations about the current state of the form."),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("h3",{id:"simple-example"},"Simple example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"\nimport { reduxForm } from 'redux-form'\nimport { RenderTextField, Field, ErrorTypes, ValidationHelpers } from '@regardsoss/form-utils'\n\nexport class ExampleComponent extends React.Component {\n\n  componentDidMount() {\n    const initialValues = {\n      // initialize the form field named 'label'\n      label: 'default label',\n    }\n    this.props.initialize(initialValues)\n  }\n\n  handleSubmit(formValues) {\n    ...\n  }\n\n  render() {\n    return (\n      { /* \n       Form with onSubmitMethod: onSubmit is first delegated to redux handleSubmit method that calls this.handleSubmit after execution. That mechanism allows Redux forms to compute mulitple state variable (pristine, invalid, submitting...)\n       */ }\n      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}> \n        <Field\n          name=\"label\" // field name\n          component={RenderTextField} // field render component\n          type=\"text\" // field type\n          label=\"Label\" // field label to display at user\n          validate={ValidationHelpers.validRequiredString} // validator: computes if the field value is valid\n          fullWidth // field consumes parent full width, quite standard in REGARDS frontend\n        />\n      </form>\n    )\n  }\n}\n\n/* export the field as connected: reduxForm method will decorate ExampleComponent to add many properties like:\n * pristine: has the form changed?\n * submitting: is the form currently submitting?\n * invalid: is there an invalid field in form?\n * handleSubmit: submit method wrapper\n * ...\n */ \nexport default reduxForm({\n  form: 'example-form' // form name in redux store\n})(ExampleComponent)\n\n")),(0,i.kt)("h3",{id:"regards-form-utils"},"REGARDS form-utils"),(0,i.kt)("p",null,"In the upper example you can see that each ",(0,i.kt)("inlineCode",{parentName:"p"},"Field")," component use a ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," parameter to define the field render. The REGARDS\nlibrary  ",(0,i.kt)("inlineCode",{parentName:"p"},"@regardsoss/form-utils")," provides the following render components types :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RenderArrayObjectField : Render a field to configure an array of objects"),(0,i.kt)("li",{parentName:"ul"},"RenderArrayTextField : Render a field to configure an array of strings"),(0,i.kt)("li",{parentName:"ul"},"RenderAutoCompleteField: Render a field to configure a single value with auto completion"),(0,i.kt)("li",{parentName:"ul"},"RenderCheckbox: Render a boolean checkbox field"),(0,i.kt)("li",{parentName:"ul"},"RenderDateTimeField: Render a date time field"),(0,i.kt)("li",{parentName:"ul"},"RenderDoubleLabelToggle: Render a boolean toggle field with double labels field"),(0,i.kt)("li",{parentName:"ul"},"RenderFileFieldWithMui : Render a field to upload a file from the local user system"),(0,i.kt)("li",{parentName:"ul"},"RenderJsonCodeEditorField : Render a  field to configure a complex json object within a JSON editor"),(0,i.kt)("li",{parentName:"ul"},"RenderMapField : Render a field to configure a Map of objects"),(0,i.kt)("li",{parentName:"ul"},"RenderPageableAutoCompleteField : Render a field to configure a single value with auto completion by fetching pageable server endpoint"),(0,i.kt)("li",{parentName:"ul"},"RenderRadio: Render a choice field as radio"),(0,i.kt)("li",{parentName:"ul"},"RenderSelectField: Render a choice field as list input"),(0,i.kt)("li",{parentName:"ul"},"RenderSlider: Render a number field as slider"),(0,i.kt)("li",{parentName:"ul"},"RenderTextField: Render a string field as input"),(0,i.kt)("li",{parentName:"ul"},"RenderToggle: Render a boolean field as simple label toggle")),(0,i.kt)("p",null,"Those components can be imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"@regardsoss/form-utils"),", like shown below: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { RenderTextField, RenderToggle, RenderDoubleLabelToggle } from `@regardsoss/form-utils`\n")),(0,i.kt)("h3",{id:"more"},"More"),(0,i.kt)("p",null,"To understand more about using ",(0,i.kt)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/"},"redux-form")," library see the ",(0,i.kt)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/docs/api/"},"API")," official documentation"))}u.isMDXComponent=!0}}]);