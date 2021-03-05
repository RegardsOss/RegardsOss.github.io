(window.webpackJsonp=window.webpackJsonp||[]).push([[1984],{2054:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(2699)),a={id:"frontend-view-forms",title:"Redux form",sidebar_label:"Forms",slug:"/development/frontend/view/forms"},l={unversionedId:"development/frontend/components/frontend-view-forms",id:"development/frontend/components/frontend-view-forms",isDocsHomePage:!1,title:"Redux form",description:"Description",source:"@site/docs/development/frontend/components/redux-forms.md",slug:"/development/frontend/view/forms",permalink:"/fr/docs/development/frontend/view/forms",editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/docs/development/frontend/components/redux-forms.md",version:"current",sidebar_label:"Forms",sidebar:"dev",previous:{title:"Material and module themes",permalink:"/fr/docs/development/frontend/view/theme"},next:{title:"REGARDS components",permalink:"/fr/docs/development/frontend/packages/components"}},d=[{value:"Description",id:"description",children:[]},{value:"How to use",id:"how-to-use",children:[{value:"Simple example",id:"simple-example",children:[]},{value:"REGARDS form-utils",id:"regards-form-utils",children:[]},{value:"More",id:"more",children:[]}]}],m={toc:d};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"The REGARDS frontend uses the ",Object(i.b)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/"},"redux-form")," library to create forms.\nThis library stores in the common ",Object(i.b)("inlineCode",{parentName:"p"},"redux store")," all informations about the current state of the form."),Object(i.b)("h2",{id:"how-to-use"},"How to use"),Object(i.b)("h3",{id:"simple-example"},"Simple example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"\nimport { reduxForm } from 'redux-form'\nimport { RenderTextField, Field, ErrorTypes, ValidationHelpers } from '@regardsoss/form-utils'\n\nexport class ExampleComponent extends React.Component {\n\n  componentDidMount() {\n    const initialValues = {\n      // initialize the form field named 'label'\n      label: 'default label',\n    }\n    this.props.initialize(initialValues)\n  }\n\n  handleSubmit(formValues) {\n    ...\n  }\n\n  render() {\n    return (\n      { /* \n       Form with onSubmitMethod: onSubmit is first delegated to redux handleSubmit method that calls this.handleSubmit after execution. That mechanism allows Redux forms to compute mulitple state variable (pristine, invalid, submitting...)\n       */ }\n      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}> \n        <Field\n          name=\"label\" // field name\n          component={RenderTextField} // field render component\n          type=\"text\" // field type\n          label=\"Label\" // field label to display at user\n          validate={ValidationHelpers.validRequiredString} // validator: computes if the field value is valid\n          fullWidth // field consumes parent full width, quite standard in REGARDS frontend\n        />\n      </form>\n    )\n  }\n}\n\n/* export the field as connected: reduxForm method will decorate ExampleComponent to add many properties like:\n * pristine: has the form changed?\n * submitting: is the form currently submitting?\n * invalid: is there an invalid field in form?\n * handleSubmit: submit method wrapper\n * ...\n */ \nexport default reduxForm({\n  form: 'example-form' // form name in redux store\n})(ExampleComponent)\n\n")),Object(i.b)("h3",{id:"regards-form-utils"},"REGARDS form-utils"),Object(i.b)("p",null,"In the upper example you can see that each ",Object(i.b)("inlineCode",{parentName:"p"},"Field")," component use a ",Object(i.b)("inlineCode",{parentName:"p"},"component")," parameter to define the field render. The REGARDS\nlibrary  ",Object(i.b)("inlineCode",{parentName:"p"},"@regardsoss/form-utils")," provides the following render components types :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RenderArrayObjectField : Render a field to configure an array of objects"),Object(i.b)("li",{parentName:"ul"},"RenderArrayTextField : Render a field to configure an array of strings"),Object(i.b)("li",{parentName:"ul"},"RenderAutoCompleteField: Render a field to configure a single value with auto completion"),Object(i.b)("li",{parentName:"ul"},"RenderCheckbox: Render a boolean checkbox field"),Object(i.b)("li",{parentName:"ul"},"RenderDateTimeField: Render a date time field"),Object(i.b)("li",{parentName:"ul"},"RenderDoubleLabelToggle: Render a boolean toggle field with double labels field"),Object(i.b)("li",{parentName:"ul"},"RenderFileFieldWithMui : Render a field to upload a file from the local user system"),Object(i.b)("li",{parentName:"ul"},"RenderJsonCodeEditorField : Render a  field to configure a complex json object within a JSON editor"),Object(i.b)("li",{parentName:"ul"},"RenderMapField : Render a field to configure a Map of objects"),Object(i.b)("li",{parentName:"ul"},"RenderPageableAutoCompleteField : Render a field to configure a single value with auto completion by fetching pageable server endpoint"),Object(i.b)("li",{parentName:"ul"},"RenderRadio: Render a choice field as radio"),Object(i.b)("li",{parentName:"ul"},"RenderSelectField: Render a choice field as list input"),Object(i.b)("li",{parentName:"ul"},"RenderSlider: Render a number field as slider"),Object(i.b)("li",{parentName:"ul"},"RenderTextField: Render a string field as input"),Object(i.b)("li",{parentName:"ul"},"RenderToggle: Render a boolean field as simple label toggle")),Object(i.b)("p",null,"Those components can be imported from ",Object(i.b)("inlineCode",{parentName:"p"},"@regardsoss/form-utils"),", like shown below: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"import { RenderTextField, RenderToggle, RenderDoubleLabelToggle } from `@regardsoss/form-utils`\n")),Object(i.b)("h3",{id:"more"},"More"),Object(i.b)("p",null,"To understand more about using ",Object(i.b)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/"},"redux-form")," library see the ",Object(i.b)("a",{parentName:"p",href:"https://redux-form.com/6.8.0/docs/api/"},"API")," official documentation "))}s.isMDXComponent=!0},2699:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),s=function(e){var n=o.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,f=c["".concat(a,".").concat(u)]||c[u]||p[u]||i;return t?o.a.createElement(f,l(l({ref:n},m),{},{components:t})):o.a.createElement(f,l({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var m=2;m<i;m++)a[m]=t[m];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);