"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[39697],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,c=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(c,l(l({ref:t},m),{},{components:n})):r.createElement(c,l({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),l=["components"],a={id:"frontend-view-forms",title:"Redux form",sidebar_label:"Forms",slug:"/development/frontend/view/forms/"},d=void 0,s={unversionedId:"development/frontend/components/frontend-view-forms",id:"development/frontend/components/frontend-view-forms",title:"Redux form",description:"Description",source:"@site/docs/development/frontend/components/redux-forms.md",sourceDirName:"development/frontend/components",slug:"/development/frontend/view/forms/",permalink:"/docs/development/frontend/view/forms/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/components/redux-forms.md",tags:[],version:"current",frontMatter:{id:"frontend-view-forms",title:"Redux form",sidebar_label:"Forms",slug:"/development/frontend/view/forms/"},sidebar:"dev",previous:{title:"Theme",permalink:"/docs/development/frontend/view/theme/"},next:{title:"Re-usable components",permalink:"/docs/development/frontend/packages/components/"}},m={},u=[{value:"Description",id:"description",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"REGARDS form-utils",id:"regards-form-utils",level:3},{value:"More",id:"more",level:3}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The REGARDS frontend uses the ",(0,i.kt)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/"},"redux-form")," library to create forms.\nThis library stores in the common ",(0,i.kt)("inlineCode",{parentName:"p"},"redux store")," all informations about the current state of the form."),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("h3",{id:"simple-example"},"Simple example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"\nimport { reduxForm } from 'redux-form'\nimport { RenderTextField, Field, ErrorTypes, ValidationHelpers } from '@regardsoss/form-utils'\n\nexport class ExampleComponent extends React.Component {\n\n  componentDidMount() {\n    const initialValues = {\n      // initialize the form field named 'label'\n      label: 'default label',\n    }\n    this.props.initialize(initialValues)\n  }\n\n  handleSubmit(formValues) {\n    ...\n  }\n\n  render() {\n    return (\n      { /* \n       Form with onSubmitMethod: onSubmit is first delegated to redux handleSubmit method that calls this.handleSubmit after execution. That mechanism allows Redux forms to compute mulitple state variable (pristine, invalid, submitting...)\n       */ }\n      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}> \n        <Field\n          name=\"label\" // field name\n          component={RenderTextField} // field render component\n          type=\"text\" // field type\n          label=\"Label\" // field label to display at user\n          validate={ValidationHelpers.validRequiredString} // validator: computes if the field value is valid\n          fullWidth // field consumes parent full width, quite standard in REGARDS frontend\n        />\n      </form>\n    )\n  }\n}\n\n/* export the field as connected: reduxForm method will decorate ExampleComponent to add many properties like:\n * pristine: has the form changed?\n * submitting: is the form currently submitting?\n * invalid: is there an invalid field in form?\n * handleSubmit: submit method wrapper\n * ...\n */ \nexport default reduxForm({\n  form: 'example-form' // form name in redux store\n})(ExampleComponent)\n\n")),(0,i.kt)("h3",{id:"regards-form-utils"},"REGARDS form-utils"),(0,i.kt)("p",null,"In the upper example you can see that each ",(0,i.kt)("inlineCode",{parentName:"p"},"Field")," component use a ",(0,i.kt)("inlineCode",{parentName:"p"},"component")," parameter to define the field render. The REGARDS\nlibrary  ",(0,i.kt)("inlineCode",{parentName:"p"},"@regardsoss/form-utils")," provides the following render components types :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RenderArrayObjectField : Render a field to configure an array of objects"),(0,i.kt)("li",{parentName:"ul"},"RenderArrayTextField : Render a field to configure an array of strings"),(0,i.kt)("li",{parentName:"ul"},"RenderAutoCompleteField: Render a field to configure a single value with auto completion"),(0,i.kt)("li",{parentName:"ul"},"RenderCheckbox: Render a boolean checkbox field"),(0,i.kt)("li",{parentName:"ul"},"RenderDateTimeField: Render a date time field"),(0,i.kt)("li",{parentName:"ul"},"RenderDoubleLabelToggle: Render a boolean toggle field with double labels field"),(0,i.kt)("li",{parentName:"ul"},"RenderFileFieldWithMui : Render a field to upload a file from the local user system"),(0,i.kt)("li",{parentName:"ul"},"RenderJsonCodeEditorField : Render a  field to configure a complex json object within a JSON editor"),(0,i.kt)("li",{parentName:"ul"},"RenderMapField : Render a field to configure a Map of objects"),(0,i.kt)("li",{parentName:"ul"},"RenderPageableAutoCompleteField : Render a field to configure a single value with auto completion by fetching pageable server endpoint"),(0,i.kt)("li",{parentName:"ul"},"RenderRadio: Render a choice field as radio"),(0,i.kt)("li",{parentName:"ul"},"RenderSelectField: Render a choice field as list input"),(0,i.kt)("li",{parentName:"ul"},"RenderSlider: Render a number field as slider"),(0,i.kt)("li",{parentName:"ul"},"RenderTextField: Render a string field as input"),(0,i.kt)("li",{parentName:"ul"},"RenderToggle: Render a boolean field as simple label toggle")),(0,i.kt)("p",null,"Those components can be imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"@regardsoss/form-utils"),", like shown below: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { RenderTextField, RenderToggle, RenderDoubleLabelToggle } from `@regardsoss/form-utils`\n")),(0,i.kt)("h3",{id:"more"},"More"),(0,i.kt)("p",null,"To understand more about using ",(0,i.kt)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/"},"redux-form")," library see the ",(0,i.kt)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/docs/api/"},"API")," official documentation"))}f.isMDXComponent=!0}}]);