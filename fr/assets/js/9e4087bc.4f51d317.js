"use strict";(self.webpackChunkRegardsOss_github_io=self.webpackChunkRegardsOss_github_io||[]).push([[53608,29514,5601],{63012:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=r(67294),l=r(81904),n=r(36742),o=r(24973);function i(e){var t=e.year,r=e.posts;return a.createElement(a.Fragment,null,a.createElement("h3",null,t),a.createElement("ul",null,r.map((function(e){return a.createElement("li",{key:e.metadata.date},a.createElement(n.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var t=e.years;return a.createElement("section",{className:"margin-vert--lg"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},a.createElement(i,e))})))))}function c(e){var t,r,n=e.archive,i=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),c=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(t=n.blogPosts,r=t.reduceRight((function(e,t){var r=t.metadata.date.split("-")[0],a=e.get(r)||[];return e.set(r,[t].concat(a))}),new Map),Array.from(r,(function(e){return{year:e[0],posts:e[1]}})));return a.createElement(l.Z,{title:i,description:c},a.createElement("header",{className:"hero hero--primary"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},i),a.createElement("p",{className:"hero__subtitle"},c))),a.createElement("main",null,m.length>0&&a.createElement(s,{years:m})))}},90154:function(e,t,r){r.d(t,{Z:function(){return v}});var a=r(87462),l=r(63366),n=r(67294),o=r(86010),i=r(36742),s=r(941),c=r(44996),m="container_grid_345B",u="col_1_18Mg",d="col_2_1mR8",f=r(52263);var g=function(){return(0,f.Z)(),n.createElement("div",{className:u},n.createElement("p",null,n.createElement("strong",null,"A framework and a set of plugins to build scientific archives.")),n.createElement("p",null,"REGARDS is an Open Source data valorization product, highly flexible to various themes, modular, efficient, long-lasting, evolutionary and scalable, aims at providing services to Mission Centers and laboratories, and is able to deal with huge amount of data. ",n.createElement("br",null),"Our goal is to allow a strong commitment from user community in the development of modules and plugins."),n.createElement("p",null,n.createElement("strong",null,"We welcome ",n.createElement("a",{href:"https://github.com/RegardsOss/RegardsOss.github.io/blob/master/CONTRIBUTING.md"},"your contributions")," to make these documents better.")),n.createElement("div",null,n.createElement("img",{src:"/img/logos/courbe-institutionnelle-signature_y110-inverser.png"})))},h=["to","href","label","prependBaseUrlToHref"];function E(e){var t=e.to,r=e.href,o=e.label,s=e.prependBaseUrlToHref,m=(0,l.Z)(e,h),u=(0,c.Z)(t),d=(0,c.Z)(r,{forcePrependBaseUrl:!0});return n.createElement(i.Z,(0,a.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:s?d:r}:{to:u},m),o)}var p=function(e){var t=e.url,r=e.alt;return n.createElement("img",{className:"footer__logo",alt:r,src:t})};var v=function(){var e=(0,s.LU)().footer,t=e||{},r=t.copyright,a=t.links,l=void 0===a?[]:a,i=t.logo,u=void 0===i?{}:i,f=(0,c.Z)(u.src);return e?n.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:m},n.createElement(g,null),l&&l.length>0&&l.map((function(e,t){return n.createElement("div",{key:t,className:d},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(E,e))}))):null)}))),(u||r)&&n.createElement("div",{className:"footer__bottom text--center"},u&&u.src&&n.createElement("div",{className:"margin-bottom--sm"},u.href?n.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:_stylesModule.default.footerLogoLink},n.createElement(p,{alt:u.alt,url:f})):n.createElement(p,{alt:u.alt,url:f})),r?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null)):null}}}]);