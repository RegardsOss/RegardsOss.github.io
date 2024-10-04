"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[14883],{86356:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var t=a(74848),s=a(28453);const n={id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},o=void 0,i={id:"development/backend/framework/starters/backend-framework-starters-gson",title:"GSON starter",description:"Purpose",source:"@site/versioned_docs/version-1.13.0/development/backend/framework/starters/gson-starter.md",sourceDirName:"development/backend/framework/starters",slug:"/development/backend/framework/starters/gson/",permalink:"/docs/1.13.0/development/backend/framework/starters/gson/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.13.0/development/backend/framework/starters/gson-starter.md",tags:[],version:"1.13.0",frontMatter:{id:"backend-framework-starters-gson",title:"GSON starter",slug:"/development/backend/framework/starters/gson/"},sidebar:"dev",previous:{title:"GeoJSON starter",permalink:"/docs/1.13.0/development/backend/framework/starters/geojson/"},next:{title:"HATEOAS starter",permalink:"/docs/1.13.0/development/backend/framework/starters/hateoas/"}},c={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Autoconfiguration",id:"autoconfiguration",level:2},{value:"How to",id:"how-to",level:2},{value:"Create type adapters or adapter factories",id:"create-type-adapters-or-adapter-factories",level:3},{value:"Register a type adapter",id:"register-a-type-adapter",level:3},{value:"Register a type adapter as a component",id:"register-a-type-adapter-as-a-component",level:3},{value:"Register a type adapter factory",id:"register-a-type-adapter-factory",level:3},{value:"Register a type adapter factory as a component",id:"register-a-type-adapter-factory-as-a-component",level:3},{value:"Work with polymorphic classes",id:"work-with-polymorphic-classes",level:3},{value:"Register a <code>Gsonable</code> polymorphic factory",id:"register-a-gsonable-polymorphic-factory",level:4},{value:"Register a custom polymorphic factory",id:"register-a-custom-polymorphic-factory",level:4},{value:"Exclude field from serialization",id:"exclude-field-from-serialization",level:3}];function l(e){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"purpose",children:"Purpose"}),"\n",(0,t.jsx)(r.p,{children:"This starter is making easier the use of GSON with new features."}),"\n",(0,t.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-properties",children:"# Scan package for annotated adapters or factories\nregards.gson.scan-prefix=fr.cnes.regards\n"})}),"\n",(0,t.jsx)(r.p,{children:"To avoid conflict between Jackson and GSON with SPRING, set the following property :"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-properties",children:"spring.http.converters.preferred-json-mapper=gson\n"})}),"\n",(0,t.jsx)(r.h2,{id:"autoconfiguration",children:"Autoconfiguration"}),"\n",(0,t.jsxs)(r.p,{children:["Starter autoconfigures a ",(0,t.jsx)(r.strong,{children:"GsonHttpMessageConverter"})," automatically injected in available HTTP message converters."]}),"\n",(0,t.jsxs)(r.p,{children:["Il autoconfigures a ",(0,t.jsx)(r.code,{children:"Gson"})," instance with default adapters and filters plus the introspected ones."]}),"\n",(0,t.jsx)(r.h2,{id:"how-to",children:"How to"}),"\n",(0,t.jsx)(r.h3,{id:"create-type-adapters-or-adapter-factories",children:"Create type adapters or adapter factories"}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"https://github.com/google/gson",children:"GSON reference project"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"register-a-type-adapter",children:"Register a type adapter"}),"\n",(0,t.jsxs)(r.p,{children:["Just create a class extending ",(0,t.jsx)(r.code,{children:"TypeAdapter"})," and annotated with ",(0,t.jsx)(r.code,{children:"GsonTypeAdapter"})," with a ",(0,t.jsx)(r.strong,{children:"no arg constructor"})," :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"@GsonTypeAdapter(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n    ...\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"register-a-type-adapter-as-a-component",children:"Register a type adapter as a component"}),"\n",(0,t.jsxs)(r.p,{children:["Just create a class extending ",(0,t.jsx)(r.code,{children:"TypeAdapter"})," and annotated with ",(0,t.jsx)(r.code,{children:"GsonTypeAdapterBean"})," :"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"@GsonTypeAdapterBean(adapted = Your.class)\npublic class LinkAdapter extends TypeAdapter<Your> {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"register-a-type-adapter-factory",children:"Register a type adapter factory"}),"\n",(0,t.jsxs)(r.p,{children:["Just create a class implementing ",(0,t.jsx)(r.code,{children:"TypeAdapterFactory"})," and annotated with ",(0,t.jsx)(r.code,{children:"GsonTypeAdapterFactory"})," with a ",(0,t.jsx)(r.strong,{children:"no arg constructor"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"@GsonTypeAdapterFactory\npublic class YourFactory implements TypeAdapterFactory {\n    ...\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"register-a-type-adapter-factory-as-a-component",children:"Register a type adapter factory as a component"}),"\n",(0,t.jsxs)(r.p,{children:["Just create a class implementing ",(0,t.jsx)(r.code,{children:"TypeAdapterFactory"})," and annotated with ",(0,t.jsx)(r.code,{children:"GsonTypeAdapterFactoryBean"})," (or ",(0,t.jsx)(r.code,{children:"Component"}),"):"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"@GsonTypeAdapterFactoryBean\npublic class YourFactory implements TypeAdapterFactory {\n\n    @Autowired\n    private MyService service;\n    ...\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"work-with-polymorphic-classes",children:"Work with polymorphic classes"}),"\n",(0,t.jsxs)(r.h4,{id:"register-a-gsonable-polymorphic-factory",children:["Register a ",(0,t.jsx)(r.code,{children:"Gsonable"})," polymorphic factory"]}),"\n",(0,t.jsxs)(r.p,{children:["Just annotate the top interface or abstract class of a hierarchical set of classes with ",(0,t.jsx)(r.code,{children:"Gsonable"}),". Under the hood, the starter will register a dynamically created ",(0,t.jsx)(r.code,{children:"PolymorphicTypeAdapterFactory"}),". You optionnaly can specify the discriminator name in ",(0,t.jsx)(r.code,{children:"Gsonable"})," and the discriminator values on sub types through ",(0,t.jsx)(r.code,{children:"GsonDiscriminator"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["During GSON serialization, factory will inject a discriminator property whose name is either ",(0,t.jsx)(r.code,{children:"@type@"})," or the specified one and the value is either the class name or the specified discriminator value.",(0,t.jsx)(r.br,{}),"\n","During deserialization, factory build the target object according to its discriminator value."]}),"\n",(0,t.jsx)(r.h4,{id:"register-a-custom-polymorphic-factory",children:"Register a custom polymorphic factory"}),"\n",(0,t.jsxs)(r.p,{children:["Just create a class extending ",(0,t.jsx)(r.code,{children:"PolymorphicTypeAdapterFactory"})," and annotated with either ",(0,t.jsx)(r.code,{children:"GsonTypeAdapterFactory"})," or ",(0,t.jsx)(r.code,{children:"GsonTypeAdapterFactoryBean"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'@GsonTypeAdapterFactory\npublic class YourAdapterFactory extends PolymorphicTypeAdapterFactory<YourInterface> {\n\n    public EntityAdapterFactory() {\n        super(YourInterface.class, "discriminatorName", true);\n        registerSubtype(YourClass1.class, "disVal1");\n        registerSubtype(YourClass2.class, "disVal2");\n    }\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"exclude-field-from-serialization",children:"Exclude field from serialization"}),"\n",(0,t.jsxs)(r.p,{children:["Just annotate field with ",(0,t.jsx)(r.code,{children:"GsonIgnore"})," to exclude a particular field."]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>i});var t=a(96540);const s={},n=t.createContext(s);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);