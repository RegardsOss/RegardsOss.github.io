"use strict";(self.webpackChunkregardsoss_github_io=self.webpackChunkregardsoss_github_io||[]).push([[226],{27621:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(74848),r=i(28453);const t={id:"scanned-files-manage-acquisition-chains",title:"Build OAIS products by scanning files",slug:"/user-guide/import-data/scanned-files/manage-acquisition-chains/"},a=void 0,l={id:"user-documentation/4_2-dataprovider/scanned-files-manage-acquisition-chains",title:"Build OAIS products by scanning files",description:"REGARDS peut automatiquement g\xe9n\xe9rer des produits au format OAIS \xe0 partir de vos fichiers de donn\xe9es stock\xe9s sur disque.",source:"@site/versioned_docs/version-1.15/user-documentation/4_2-dataprovider/acquisition-chain-configuration.md",sourceDirName:"user-documentation/4_2-dataprovider",slug:"/user-guide/import-data/scanned-files/manage-acquisition-chains/",permalink:"/docs/1.15/user-guide/import-data/scanned-files/manage-acquisition-chains/",draft:!1,unlisted:!1,editUrl:"https://github.com/RegardsOss/RegardsOss.github.io/edit/master/versioned_docs/version-1.15/user-documentation/4_2-dataprovider/acquisition-chain-configuration.md",tags:[],version:"1.15",frontMatter:{id:"scanned-files-manage-acquisition-chains",title:"Build OAIS products by scanning files",slug:"/user-guide/import-data/scanned-files/manage-acquisition-chains/"},sidebar:"manual",previous:{title:"Submit OAIS products",permalink:"/docs/1.15/user-guide/import-data/oais-files/submit-products/"},next:{title:"Manage OAIS products",permalink:"/docs/1.15/user-guide/import-data/oais-files/manage-products/"}},d={},c=[{value:"<img></img> Manage acquisition chains",id:"-manage-acquisition-chains",level:3},{value:"Cr\xe9er une cha\xeene d&#39;acquisition",id:"cr\xe9er-une-cha\xeene-dacquisition",level:2},{value:"Onglet General",id:"onglet-general",level:3},{value:"Onglet Files",id:"onglet-files",level:3},{value:"Onglet Plugins",id:"onglet-plugins",level:3},{value:"Lancement de la cha\xeene d&#39;acquisition",id:"lancement-de-la-cha\xeene-dacquisition",level:3},{value:"G\xe9rer les cha\xeenes d&#39;acquisition",id:"g\xe9rer-les-cha\xeenes-dacquisition",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"REGARDS peut automatiquement g\xe9n\xe9rer des produits au format OAIS \xe0 partir de vos fichiers de donn\xe9es stock\xe9s sur disque.\nIl vous suffira de param\xe9trer des cha\xeenes d'acquisition pour configurer le mode de d\xe9tection."}),"\n",(0,s.jsxs)(n.p,{children:["Dans le menu lat\xe9ral, cliquez sur ",(0,s.jsx)(n.strong,{children:"Add data"})," et observez la carte ",(0,s.jsx)(n.strong,{children:"Product Manager (OAIS)"}),"."]}),"\n",(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/menu-add-data.png",alt:"menu",height:"200"}),"\n",(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_2-dataprovider/acquisition-card.png",alt:"acquisition card",height:"200"}),"\n",(0,s.jsxs)(n.h3,{id:"-manage-acquisition-chains",children:[(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/configure.png",alt:"configure",height:"30",width:"30"})," Manage acquisition chains"]}),"\n",(0,s.jsx)(n.p,{children:"Dans cette cat\xe9gorie, vous pouvez cr\xe9er et g\xe9rer des cha\xeenes d'acquisition. Elles permettent de g\xe9n\xe9rer des SIPs \xe0 partir de donn\xe9es scann\xe9es sur disque. Ils seront ensuite fournis au syst\xe8me d'ingestion pour leur conservation sous forme d'AIPs."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Pour configurer les cha\xeenes d'acquisition, allez dans le menu ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Add data"})}),", dans la carte ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Data acquisition"})})," et cliquez sur le bouton ",(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/configure.png",alt:"configure",height:"25",width:"25"})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Acquisition chains"})}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"cr\xe9er-une-cha\xeene-dacquisition",children:"Cr\xe9er une cha\xeene d'acquisition"}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_2-dataprovider/acquisition-add-chain.png",alt:"add chain",width:"800"})}),"\n",(0,s.jsx)(n.p,{children:"Une cha\xeene d'acquisition permet de g\xe9n\xe9rer un ou plusieurs SIPs \xe0 partir de vos fichiers de donn\xe9es. Les SIPs seront ensuite confi\xe9s \xe0 une cha\xeene d'ingestion dans le but de transformer le SIP en AIP."}),"\n",(0,s.jsx)(n.p,{children:"Avant de pouvoir cr\xe9er une cha\xeene, vous devez obligatoirement avoir :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["configur\xe9 une ",(0,s.jsx)(n.a,{href:"/docs/1.15/user-guide/import-data/oais-files/introduction/",children:"cha\xeene d'ingestion"})]}),"\n",(0,s.jsxs)(n.li,{children:["param\xe9tr\xe9 un ",(0,s.jsx)(n.a,{href:"/docs/1.15/user-guide/project-configuration/storages/",children:"espace de stokage"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Une fois, ces op\xe9rations effectu\xe9es, vous pouvez cr\xe9er une cha\xeene d'acquisition en appuyez sur ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Create new Chain"})})," \xe0 partir de l'\xe9cran ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Acquisition chain"})}),".\nVous devrez remplir des champs servant \xe0 l'identification de la cha\xeene et s\xe9lectionner des plugins pour d\xe9tecter vos donn\xe9es, les valider et produire des sips. Si vous ne trouvez pas de plugins correspondants \xe0 votre cas d'utilisation, vous pouvez d\xe9velopper votre propre plugin dans REGARDS."]}),"\n",(0,s.jsx)(n.h3,{id:"onglet-general",children:"Onglet General"}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_2-dataprovider/acquisition-chain-general.png",alt:"add chain",width:"800"})}),"\n",(0,s.jsx)(n.p,{children:"Vous devez compl\xe9ter les champs suivants :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Chain name"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"}),", le nom de la cha\xeene qui sera ensuite visible dans la liste des cha\xeenes d'acquisition. Il sera aussi utilis\xe9 dans les sessions de suivi de l'acquisition en tant que fournisseur de la donn\xe9e (",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Source"})}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Active chain"})})," ",(0,s.jsx)(n.em,{children:"[Optionnel]"})," par d\xe9faut la cha\xeene est active"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Product versioning mode"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"}),", dans le cas o\xf9 plusieurs versions d'un produit serait d\xe9tect\xe9es, ce champ pr\xe9cise la fa\xe7on dont ces nouvelles versions seront g\xe9r\xe9es. Par d\xe9faut, une nouvelle version est cr\xe9\xe9e."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Starting mode"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"})," pr\xe9cise le d\xe9clenchement de votre cha\xeene, manuellement ou automatiquement de fa\xe7on p\xe9riodique. Si vous choisissez le mode automatique, pr\xe9cisez le cron dans le champ qui appara\xeetra."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Ingest chain"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"})," qui sera la cha\xeene d'ingestion utilis\xe9e pour convertir les SIPs en AIPs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Categories"})})," ",(0,s.jsx)(n.em,{children:"[Optionnel]"})," ces labels seront ajout\xe9s \xe0 toutes les donn\xe9es g\xe9n\xe9r\xe9es. Ils aideront \xe0 identifier plus facilement la th\xe9matique li\xe9es aux produits."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Storages"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"})," pr\xe9cisez ici les espaces de stockage qui seront utilis\xe9s pour sauvegarder les produits et les donn\xe9es associ\xe9es. Vous pouvez s\xe9lectionner de mani\xe8re individuelle l'espace sur lequel sera stock\xe9 un type particulier de fichier."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"onglet-files",children:"Onglet Files"}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_2-dataprovider/acquisition-chain-file-1.png",alt:"file (1)",width:"800"})}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez cr\xe9er sur cette page un ensemble de ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Files"})})," visibles dans la partie de gauche. Un SIP peut \xeatre associ\xe9 \xe0 un ou plusieurs types de fichiers. Les ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Files"})})," sont des configurations qui permettront de retrouver tous ces fichiers par type. Ils vont scanner tous les r\xe9pertoires indiqu\xe9s et d\xe9tecter les fichiers qui serviront \xe0 la g\xe9n\xe9ration de SIPs."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans l'exemple suivant, il y a deux ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Files"})})," :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Data"})," pour d\xe9tecter tous les fichiers avec l'extension ",(0,s.jsx)(n.em,{children:".dat"})," contenus dans les dossiers /input/validation/data/2376/2376_1 et /input/validation/data/2376/2376_2."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"Image"})," pour d\xe9tecter tous les fichiers avec l'extension ",(0,s.jsx)(n.em,{children:".jpg"})," contenus dans les dossiers /input/validation/data/2376/2376_1 et /input/validation/data/2376/2376_2."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Le plugin de g\xe9n\xe9ration des produits par d\xe9faut cr\xe9era ensuite un SIP pour chaque couple de fichiers de type ",(0,s.jsx)(n.em,{children:".dat"})," et ",(0,s.jsx)(n.em,{children:".jpg"})," de m\xeame nom."]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_2-dataprovider/acquisition-file-example-1.png",alt:"file example 1",width:"800"})}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_2-dataprovider/acquisition-file-example-2.png",alt:"file example 2",width:"800"})}),"\n",(0,s.jsxs)(n.p,{children:["Vous devez cr\xe9er un ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"File"})})," \xe0 minima, remplissez les champs suivants :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Name"})})," ",(0,s.jsx)(n.em,{children:"[Optionnel]"})," le nom du ",(0,s.jsx)(n.em,{children:"File"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Mandatory to build the product"})})," ",(0,s.jsx)(n.em,{children:"[Optionnel]"})," indique si le type de fichier est obligatoire pour construire le SIP. En reprenant l'exemple pr\xe9c\xe9dent, les fichiers de type ",(0,s.jsx)(n.em,{children:"Image"})," auraient pu \xeatre optionnels."]}),"\n",(0,s.jsxs)(n.li,{children:["le tableau ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Scan directories"})}),", vous devez ajouter au minimum un repertoire \xe0 scanner, pour cela pr\xe9cisez :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["le ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Directory to scan"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"}),", le r\xe9pertoire de scan des fichiers"]}),"\n",(0,s.jsxs)(n.li,{children:["la ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Last scanning date"})})," ",(0,s.jsx)(n.em,{children:"[Optionnel]"}),", vous pouvez laisser ce champ vide. Si vous pr\xe9cisez une valeur, seuls les fichiers dont la date de modification est sup\xe9rieure \xe0 la date de dernier scan seront pris en compte."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_2-dataprovider/acquisition-chain-file-2.png",alt:"file (2)",width:"800"})}),"\n",(0,s.jsxs)(n.p,{children:["S\xe9lectionnez ensuite le ",(0,s.jsx)("b",{children:(0,s.jsx)("i",{children:"Plugin to detect new data"})})," pour indiquer au syst\xe8me la mani\xe8re dont il devra d\xe9tecter les fichiers. Il existe plusieurs plugins, dont certains avec des param\xe8tres."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"GlobDiskScanning"})})," d\xe9tecte les fichiers contenus dans un r\xe9pertoire. Vous pouvez pr\xe9ciser un filtre sur les donn\xe9es, comme *.java. Par d\xe9faut, tous les fichiers seront scann\xe9s, appuyez sur le point d'interrogation dans la case pour en savoir plus sur la r\xe9daction du pattern."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"GlobDiskStreamScanning"})})," son fonctionnement bas\xe9 sur le m\xeame principe que ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"GlobDiskScanning"})})," mais il est plus efficace lorsque votre r\xe9pertoire contient un grand nombre de fichiers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"RegexDiskScanning"})})," utilise un pattern regex pour d\xe9tecter les fichiers"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"TarGzScanPLugin"})})," d\xe9tecte les fichiers avec l'extension '.tar.gz'."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"ZipScanPlugin"})})," d\xe9tecte les fichiers avec l'extension '.zip'."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Pr\xe9cisez ensuite :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Mime-type"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"})," l'identifiant de format de donn\xe9es auquel appartiennent les fichiers d\xe9tect\xe9s"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Data type"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"})," la cat\xe9gorie REGARDS correspondant \xe0 vos donn\xe9es (",(0,s.jsx)(n.em,{children:"RAWDATA"}),", ",(0,s.jsx)(n.em,{children:"QUICKLOOK_SD"}),", ",(0,s.jsx)(n.em,{children:"QUICKLOOK_MD"}),", ",(0,s.jsx)(n.em,{children:"QUICKLOOK_HD"}),", ",(0,s.jsx)(n.em,{children:"DOCUMENT"}),", ",(0,s.jsx)(n.em,{children:"THUHMNAIL"}),", ",(0,s.jsx)(n.em,{children:"OTHER"}),", ",(0,s.jsx)(n.em,{children:"AIP"}),", ",(0,s.jsx)(n.em,{children:"DESCRIPTION"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"onglet-plugins",children:"Onglet Plugins"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"REGARDS fournit des plugins de validation et de g\xe9n\xe9ration de SIPs par d\xe9faut, s'ils ne r\xe9pondent pas \xe0 vos besoins, vous pouvez en d\xe9velopper de nouveaux."})}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_2-dataprovider/acquisition-chain-plugins.png",alt:"plugins",width:"800"})}),"\n",(0,s.jsx)(n.p,{children:"La g\xe9n\xe9ration d'un SIP s'effectue en quatre \xe9tapes principales Chacune de ces \xe9tapes d\xe9pend de plugins effectuant des actions diff\xe9rentes :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Data validation plugin"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"})," utilis\xe9 pour valider vos donn\xe9es d'entr\xe9es. S\xe9lectionnez celui correspondant \xe0 vos besoins en lisant la description de chaque plugin."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Product generation plugin"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"})," sert \xe0 la g\xe9n\xe9ration des SIPs \xe0 partir des ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Files"})})," configur\xe9s. REGARDS fournit un plugin par d\xe9faut ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Default product plugin"})}),", qui cr\xe9\xe9 des SIPs avec une structure de base pr\xe9cis\xe9e dans le ",(0,s.jsx)(n.a,{href:"/docs/1.15/development/appendices/oais/",children:"document suivant"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Metadata generation plugin"})})," ",(0,s.jsx)(n.em,{children:"[Obligatoire]"})," compl\xe8te les SIPs avec des m\xe9tadonn\xe9es li\xe9s aux fichiers scann\xe9s. Le plugin *Default Product Plugin_ recherche des informations de base sur les fichiers comme la taille, le nom, la date de cr\xe9ation, etc. Vous pouvez, si besoin, d\xe9velopper votre propre plugin afin qu'il recherche des valeurs sp\xe9cifiques contenues dans les fichiers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Post treatment plugin"})})," ",(0,s.jsx)(n.em,{children:"[Optionnelle]"})," il est possible d'effectuer un post-traitement suite \xe0 la g\xe9n\xe9ration de vos SIPs."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Pour finir la cr\xe9ation de votre cha\xeene d'acquisition, appuyez sur le bouton ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Save"})}),". Vous serez ensuite redirig\xe9 vers l'\xe9cran ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Acquisition chains"})})," dans lequel vous pourrez voir la cha\xeene que vous venez de cr\xe9er."]}),"\n",(0,s.jsx)(n.h3,{id:"lancement-de-la-cha\xeene-dacquisition",children:"Lancement de la cha\xeene d'acquisition"}),"\n",(0,s.jsxs)(n.p,{children:["Pour lancer la g\xe9n\xe9ration de nouveaux produits, appuyez sur le bouton ",(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/play.png",alt:"play",height:"26"})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Run acquisition chain"})})," associ\xe9 \xe0 votre cha\xeene."]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pourrez ensuite suivre ce processus en cliquant sur le bouton ",(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/session.png",alt:"session",height:"23"})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"See session's details"})}),". R\xe9f\xe9rez-vous \xe0 la page ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"/docs/1.15/user-guide/monitoring/dashboard",children:"Monitor session"})})})," pour comprendre comment suivre l'acquisition."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"g\xe9rer-les-cha\xeenes-dacquisition",children:"G\xe9rer les cha\xeenes d'acquisition"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Plusieurs actions vous permettent de g\xe9rer les cha\xeenes d'acquisition."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Par groupe :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["En utilisant le s\xe9lecteur de ligne, vous pouvez cliquer sur le bouton ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Disable selected chains"})})," . Cela aura pour effet de rendre inactives toutes les cha\xeenes s\xe9lectionn\xe9es. Vous pourrez ainsi les supprimer d\xe9finitivement si vous n'en avez plus le besoin. Pour r\xe9activer les cha\xeenes appuyez sur le bouton ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Enable selected chains"})}),".",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"OK"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Par ligne :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/session.png",alt:"session",height:"22"})," Vous pouvez retrouver la ou les sessions d'acquisition li\xe9es \xe0 votre cha\xeene. Voir ",(0,s.jsx)("a",{href:"../../monitoring/dashboard",children:"Product monitoring dashboard"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/stop.png",alt:"stop",height:"25",width:"25"})," Arr\xeater la g\xe9n\xe9ration de produits en cours en appuyant sur le bouton stop"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/play.png",alt:"play",height:"25",width:"25"})," Modifier les informations li\xe9es \xe0 une cha\xeene en cliquant sur le bouton en forme de crayon"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/duplicate.png",alt:"duplicate",height:"25",width:"25"})," Dupliquer une cha\xeene d'acquisition si votre nouvelle cha\xeene contient des informations semblables"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/delete.png",alt:"delete",height:"25",width:"25"})," Supprimer une cha\xeene d'acquisition. Les cha\xeenes toujours actives ne peuvent pas \xeatre supprim\xe9es, d\xe9sactivez la cha\xeene \xe0 l'aide du toggle button ",(0,s.jsx)("img",{src:"/images/user-documentation/regards-icons/admin/toggle-button.png",alt:"toggle button",height:"25",width:"25"})," pour effectuer cette op\xe9ration."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez \xe9galement utiliser les outils de filtrage pour rechercher plus simplement des cha\xeenes. Pour cela, s\xe9lectionnez le filtre d\xe9sir\xe9 et appuyez sur le bouton ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Apply filters"})})," pour l'appliquer. Vous pourrez par la suite vider les filtres en appuyant sur ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Clear"})}),"."]}),"\n",(0,s.jsx)("div",{align:"center",children:(0,s.jsx)("img",{src:"/images/user-documentation/v1.4/4_1-ingest/ingest-update-chains.png",alt:"update chains",width:"800"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Si vous souhaitez scanner \xe0 nouveau tous les fichiers contenus dans un r\xe9pertoire, \xe9ditez la cha\xeene et supprimez toutes les dates de derni\xe8re acquisition."})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var s=i(96540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);