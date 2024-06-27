"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[24242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(y,i(i({ref:t},c),{},{components:a})):r.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},i=void 0,s={unversionedId:"development/backend/framework/starters/backend-framework-starters-gson",id:"version-1.13.0/development/backend/framework/starters/backend-framework-starters-gson",title:"GSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.13.0/development/backend/framework/starters/gson-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/gson/",permalink:"/docs/1.13.0/development/backend/framework/starters/gson/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/framework/starters/gson-starter.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},sidebar:"dev",previous:{title:"GeoJSON starter",permalink:"/docs/1.13.0/development/backend/framework/starters/geojson/"},next:{title:"HATEOAS starter",permalink:"/docs/1.13.0/development/backend/framework/starters/hateoas/"}},p={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"Create type adapters or adapter factories",id:"create-type-adapters-or-adapter-factories",level:3},{value:"Register a type adapter",id:"register-a-type-adapter",level:3},{value:"Register a type adapter as a component",id:"register-a-type-adapter-as-a-component",level:3},{value:"Register a type adapter factory",id:"register-a-type-adapter-factory",level:3},{value:"Register a type adapter factory as a component",id:"register-a-type-adapter-factory-as-a-component",level:3},{value:"Work with polymorphic classes",id:"work-with-polymorphic-classes",level:3},{value:"Register a <code>Gsonable</code> polymorphic factory",id:"register-a-gsonable-polymorphic-factory",level:4},{value:"Register a custom polymorphic factory",id:"register-a-custom-polymorphic-factory",level:4},{value:"Exclude field from serialization",id:"exclude-field-from-serialization",level:3}],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"purpose"},"Purpose"),(0,n.kt)("p",null,"This starter is making easier the use of GSON with new features."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"# Scan package for annotated adapters or factories\nregards.gson.scan-prefix=fr.cnes.regards\n")),(0,n.kt)("p",null,"To avoid conflict between Jackson and GSON with SPRING, set the following property :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-properties"},"spring.http.converters.preferred-json-mapper=gson\n")),(0,n.kt)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,n.kt)("p",null,"Starter autoconfigures a ",(0,n.kt)("strong",{parentName:"p"},"GsonHttpMessageConverter")," automatically injected in available HTTP message converters."),(0,n.kt)("p",null,"Il autoconfigures a ",(0,n.kt)("inlineCode",{parentName:"p"},"Gson")," instance with default adapters and filters plus the introspected ones."),(0,n.kt)("h2",{id:"how-to"},"How to"),(0,n.kt)("h3",{id:"create-type-adapters-or-adapter-factories"},"Create type adapters or adapter factories"),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/gson"},"GSON reference project"),"."),(0,n.kt)("h3",{id:"register-a-type-adapter"},"Register a type adapter"),(0,n.kt)("p",null,"Just create a class extending ",(0,n.kt)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",(0,n.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapter")," with a ",(0,n.kt)("strong",{parentName:"p"},"no arg constructor")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapter(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n    ...\n}\n")),(0,n.kt)("h3",{id:"register-a-type-adapter-as-a-component"},"Register a type adapter as a component"),(0,n.kt)("p",null,"Just create a class extending ",(0,n.kt)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",(0,n.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterBean")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterBean(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),(0,n.kt)("h3",{id:"register-a-type-adapter-factory"},"Register a type adapter factory"),(0,n.kt)("p",null,"Just create a class implementing ",(0,n.kt)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",(0,n.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," with a ",(0,n.kt)("strong",{parentName:"p"},"no arg constructor"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactory\npublic class YourFactory implements TypeAdapterFactory {\n    ...\n}\n")),(0,n.kt)("h3",{id:"register-a-type-adapter-factory-as-a-component"},"Register a type adapter factory as a component"),(0,n.kt)("p",null,"Just create a class implementing ",(0,n.kt)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",(0,n.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean")," (or ",(0,n.kt)("inlineCode",{parentName:"p"},"Component"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactoryBean\npublic class YourFactory implements TypeAdapterFactory {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),(0,n.kt)("h3",{id:"work-with-polymorphic-classes"},"Work with polymorphic classes"),(0,n.kt)("h4",{id:"register-a-gsonable-polymorphic-factory"},"Register a ",(0,n.kt)("inlineCode",{parentName:"h4"},"Gsonable")," polymorphic factory"),(0,n.kt)("p",null,"Just annotate the top interface or abstract class of a hierarchical set of classes with ",(0,n.kt)("inlineCode",{parentName:"p"},"Gsonable"),". Under the hood, the starter will register a dynamically created ",(0,n.kt)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory"),". You optionnaly can specify the discriminator name in ",(0,n.kt)("inlineCode",{parentName:"p"},"Gsonable")," and the discriminator values on sub types through ",(0,n.kt)("inlineCode",{parentName:"p"},"GsonDiscriminator"),"."),(0,n.kt)("p",null,"During GSON serialization, factory will inject a discriminator property whose name is either ",(0,n.kt)("inlineCode",{parentName:"p"},"@type@")," or the specified one and the value is either the class name or the specified discriminator value.",(0,n.kt)("br",{parentName:"p"}),"\n","During deserialization, factory build the target object according to its discriminator value."),(0,n.kt)("h4",{id:"register-a-custom-polymorphic-factory"},"Register a custom polymorphic factory"),(0,n.kt)("p",null,"Just create a class extending ",(0,n.kt)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory")," and annotated with either ",(0,n.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@GsonTypeAdapterFactory\npublic class YourAdapterFactory extends PolymorphicTypeAdapterFactory<YourInterface> {\n\n    public EntityAdapterFactory() {\n        super(YourInterface.class, "discriminatorName", true);\n        registerSubtype(YourClass1.class, "disVal1");\n        registerSubtype(YourClass2.class, "disVal2");\n    }\n}\n')),(0,n.kt)("h3",{id:"exclude-field-from-serialization"},"Exclude field from serialization"),(0,n.kt)("p",null,"Just annotate field with ",(0,n.kt)("inlineCode",{parentName:"p"},"GsonIgnore")," to exclude a particular field."))}u.isMDXComponent=!0}}]);