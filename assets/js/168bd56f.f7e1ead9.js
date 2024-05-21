"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[58201],{15680:(e,a,r)=>{r.d(a,{xA:()=>c,yg:()=>u});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=t.createContext({}),l=function(e){var a=t.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},c=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=n,u=d["".concat(p,".").concat(g)]||d[g]||y[g]||o;return r?t.createElement(u,i(i({ref:a},c),{},{components:r})):t.createElement(u,i({ref:a},c))}));function u(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},30055:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(58168),n=(r(96540),r(15680));const o={id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},i=void 0,s={unversionedId:"development/backend/framework/starters/backend-framework-starters-gson",id:"version-1.11.0/development/backend/framework/starters/backend-framework-starters-gson",title:"GSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.11.0/development/backend/framework/starters/gson-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/gson/",permalink:"/docs/1.11.0/development/backend/framework/starters/gson/",draft:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.11.0/development/backend/framework/starters/gson-starter.md",tags:[],version:"1.11.0",frontMatter:{id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},sidebar:"dev",previous:{title:"GeoJSON starter",permalink:"/docs/1.11.0/development/backend/framework/starters/geojson/"},next:{title:"HATEOAS starter",permalink:"/docs/1.11.0/development/backend/framework/starters/hateoas/"}},p={},l=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"Create type adapters or adapter factories",id:"create-type-adapters-or-adapter-factories",level:3},{value:"Register a type adapter",id:"register-a-type-adapter",level:3},{value:"Register a type adapter as a component",id:"register-a-type-adapter-as-a-component",level:3},{value:"Register a type adapter factory",id:"register-a-type-adapter-factory",level:3},{value:"Register a type adapter factory as a component",id:"register-a-type-adapter-factory-as-a-component",level:3},{value:"Work with polymorphic classes",id:"work-with-polymorphic-classes",level:3},{value:"Register a <code>Gsonable</code> polymorphic factory",id:"register-a-gsonable-polymorphic-factory",level:4},{value:"Register a custom polymorphic factory",id:"register-a-custom-polymorphic-factory",level:4},{value:"Exclude field from serialization",id:"exclude-field-from-serialization",level:3}],c={toc:l},d="wrapper";function y(e){let{components:a,...r}=e;return(0,n.yg)(d,(0,t.A)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"purpose"},"Purpose"),(0,n.yg)("p",null,"This starter is making easier the use of GSON with new features."),(0,n.yg)("h2",{id:"configuration"},"Configuration"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-properties"},"# Scan package for annotated adapters or factories\nregards.gson.scan-prefix=fr.cnes.regards\n")),(0,n.yg)("p",null,"To avoid conflict between Jackson and GSON with SPRING, set the following property :"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-properties"},"spring.http.converters.preferred-json-mapper=gson\n")),(0,n.yg)("h2",{id:"autoconfiguration"},"Autoconfiguration"),(0,n.yg)("p",null,"Starter autoconfigures a ",(0,n.yg)("strong",{parentName:"p"},"GsonHttpMessageConverter")," automatically injected in available HTTP message converters."),(0,n.yg)("p",null,"Il autoconfigures a ",(0,n.yg)("inlineCode",{parentName:"p"},"Gson")," instance with default adapters and filters plus the introspected ones."),(0,n.yg)("h2",{id:"how-to"},"How to"),(0,n.yg)("h3",{id:"create-type-adapters-or-adapter-factories"},"Create type adapters or adapter factories"),(0,n.yg)("p",null,"See ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/google/gson"},"GSON reference project"),"."),(0,n.yg)("h3",{id:"register-a-type-adapter"},"Register a type adapter"),(0,n.yg)("p",null,"Just create a class extending ",(0,n.yg)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",(0,n.yg)("inlineCode",{parentName:"p"},"GsonTypeAdapter")," with a ",(0,n.yg)("strong",{parentName:"p"},"no arg constructor")," :"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapter(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n    ...\n}\n")),(0,n.yg)("h3",{id:"register-a-type-adapter-as-a-component"},"Register a type adapter as a component"),(0,n.yg)("p",null,"Just create a class extending ",(0,n.yg)("inlineCode",{parentName:"p"},"TypeAdapter")," and annotated with ",(0,n.yg)("inlineCode",{parentName:"p"},"GsonTypeAdapterBean")," :"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterBean(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),(0,n.yg)("h3",{id:"register-a-type-adapter-factory"},"Register a type adapter factory"),(0,n.yg)("p",null,"Just create a class implementing ",(0,n.yg)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",(0,n.yg)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," with a ",(0,n.yg)("strong",{parentName:"p"},"no arg constructor"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactory\npublic class YourFactory implements TypeAdapterFactory {\n    ...\n}\n")),(0,n.yg)("h3",{id:"register-a-type-adapter-factory-as-a-component"},"Register a type adapter factory as a component"),(0,n.yg)("p",null,"Just create a class implementing ",(0,n.yg)("inlineCode",{parentName:"p"},"TypeAdapterFactory")," and annotated with ",(0,n.yg)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean")," (or ",(0,n.yg)("inlineCode",{parentName:"p"},"Component"),"):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},"@GsonTypeAdapterFactoryBean\npublic class YourFactory implements TypeAdapterFactory {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n")),(0,n.yg)("h3",{id:"work-with-polymorphic-classes"},"Work with polymorphic classes"),(0,n.yg)("h4",{id:"register-a-gsonable-polymorphic-factory"},"Register a ",(0,n.yg)("inlineCode",{parentName:"h4"},"Gsonable")," polymorphic factory"),(0,n.yg)("p",null,"Just annotate the top interface or abstract class of a hierarchical set of classes with ",(0,n.yg)("inlineCode",{parentName:"p"},"Gsonable"),". Under the hood, the starter will register a dynamically created ",(0,n.yg)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory"),". You optionnaly can specify the discriminator name in ",(0,n.yg)("inlineCode",{parentName:"p"},"Gsonable")," and the discriminator values on sub types through ",(0,n.yg)("inlineCode",{parentName:"p"},"GsonDiscriminator"),"."),(0,n.yg)("p",null,"During GSON serialization, factory will inject a discriminator property whose name is either ",(0,n.yg)("inlineCode",{parentName:"p"},"@type@")," or the specified one and the value is either the class name or the specified discriminator value.",(0,n.yg)("br",{parentName:"p"}),"\n","During deserialization, factory build the target object according to its discriminator value."),(0,n.yg)("h4",{id:"register-a-custom-polymorphic-factory"},"Register a custom polymorphic factory"),(0,n.yg)("p",null,"Just create a class extending ",(0,n.yg)("inlineCode",{parentName:"p"},"PolymorphicTypeAdapterFactory")," and annotated with either ",(0,n.yg)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactory")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"GsonTypeAdapterFactoryBean"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-java"},'@GsonTypeAdapterFactory\npublic class YourAdapterFactory extends PolymorphicTypeAdapterFactory<YourInterface> {\n\n    public EntityAdapterFactory() {\n        super(YourInterface.class, "discriminatorName", true);\n        registerSubtype(YourClass1.class, "disVal1");\n        registerSubtype(YourClass2.class, "disVal2");\n    }\n}\n')),(0,n.yg)("h3",{id:"exclude-field-from-serialization"},"Exclude field from serialization"),(0,n.yg)("p",null,"Just annotate field with ",(0,n.yg)("inlineCode",{parentName:"p"},"GsonIgnore")," to exclude a particular field."))}y.isMDXComponent=!0}}]);