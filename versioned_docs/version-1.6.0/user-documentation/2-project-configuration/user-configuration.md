---
id: project-configuration-user-interface
title: Customize user interface
slug: /user-guide/project-configuration/user-interface/
---

_L'onglet ***User Interface*** vous permettra de configurer une grande variété de paramètres. Depuis le menu ***User Interface***, vous pouvez régler l'aspect de l'interface user ainsi que les fonctionnalités que celle-ci peut proposer._

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-menu.png" alt="ui menu" width="800"/> 
</div>

---

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> UI settings

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-settings/configure-ui-settings.png" alt="ui settings" width="800"/> 
</div>

L'écran **_User interface settings_** est principalement découpé en trois parties :

- **_Data presentation_**
  - En naviguant dans le catalogue, vous remarquerez que chaque donnée peut être, si vous le souhaitez, associée à une quicklook ou à d'un groupe de quicklooks. Une quicklook est une petite image décrivant la donnée, elle peut par exemple offrir un aperçu de la zone géographique concernée. Lorsque vous précisez **_primary_**, la première quicklook sera sélectionnée pour l'affichage de l'aperçu. Pour comprendre comment associer une quicklook à une donnée, lisez la rubrique dataObject dans la page [REGARDS OAIS implementation](../../../development/appendices/oais/)
  - Cochez la case **_Show products version_** si vous souhaitez afficher le numéro de version dans le nom de la donnée lorsque vous accéderez à sa description
- **_Quota warning_**
  - **_Low quota warning_** est un seuil de téléchargements restants en dessous duquel une alerte s'affichera sous votre **_Login_** de l'interface utilisateur.
  - **_Low download rate warning_** est un seuil de téléchargements simultanés restants en dessous duquel une alerte s'affichera sous votre **_Login_** de l'interface utilisateur.
- **_Data and documents models_**
  - dans la partie de gauche, les jeux de données de type **_Data_** de votre projet sont listés. Faites les basculer de gauche à droite, à l'aide des flèches, si vous voulez que REGARDS les considèrent comme des documents.

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Theme configuration

Il existe cinq thèmes de base dans REGARDS vous permettant de modifier la couleur, l'aspect de l'interface et de ses composants ainsi que l'image de fond.
Que ce soit dans la partie d'administration ou utilisateur, changer le thème en appuyant sur le bouton en forme de <img src="/images/user-documentation/regards-icons/admin/palette.png" alt="palette" height="25" width="25"/> palette.

S'ils ne vous conviennent pas, vous pouvez modifier ceux de base ou en ajouter depuis la carte **_Themes configuration_** accessible depuis le menu **_User Interface_**.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/themes/themes-list.png" alt="theme list" width="800"/> 
</div>

Pour ajouter un nouveau thème, cliquez sur le bouton **_Add a new theme_**, donnez lui un nom et sélectionnez dans la liste **_Based on Material UI theme_**, une palette de couleur de base claire ou foncée. Changez ensuite la couleur des éléments en les sélectionnant depuis les rubriques principales **_Palette_**, **_Material UI components_**, **_Regards components_** et **_Modules themes_**. La partie de droite vous offrira un aperçu des éléments en question.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/themes/add-theme.png" alt="add theme" width="800"/> 
</div>

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> UI modules

L'interface utilisateur est basée sur l'utilisation de modules que ce soit pour consulter et gérer vos données, commander des données ou spécifier la disposition des éléments.

Dans cette partie, la configuration générale des modules sera décrite ainsi que les modules utilitaires suivants :

- **_menu_**
- **_embedded-html_**

Les modules de [consultation du catalogue](../../catalog/introduction/) et de [commande](../../order/introduction/) font l'objet de rubriques à part entière, leur utilisation étant orientée métier.

#### Configuration générale des modules

Pour créer un module, appuyez sur le bouton **_Add_** de la carte **_UI modules_**, accessible depuis le menu **_User Interface_**.
Tous les modules ont une partie d'identification commune, où vous devrez préciser :

- **_Module type_**, le type de module existant dans REGARDS
- **_Description_**, la description du module qui apparaîtra ensuite dans la liste des modules
- **_Layout container_**, la position du module, parmi :
  - **_page-top-header_**
  - **_page-sub-header_**
  - **_page-content-module_**
  - **_page-footer_**

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-modules/create-module.png" alt="create module" width="800"/> 
</div>

#### Module menu

Il ne peut exister qu'un module de type **_menu_**, il est configuré par défaut dans REGARDS. Retrouvez-le depuis la liste des **_UI modules_**.

Il correspond à la barre de menu de l'interface utilisateur :

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-modules/menu-bar.png" alt="create module" width="800"/> 
</div>

Sélectionnez les cases pour afficher ou non les icônes de la partie droite du menu :

- <img src="/images/user-documentation/regards-icons/user/login.png" alt="login" height="25" width="25"/> <b><i>Display authentication option</i></b>
  l'icône de connexion à la page. Une fois connecté, vous pourrez éditer votre profil et réglez la fréquence à laquelle vous souhaitez recevoir des mails récapitulant les notifications non lues. Notez que vous pouvez cacher l'icône de loggin si toutes les données de votre projet sont publiques et ne requièrent aucun accès spécifique.
- <img src="/images/user-documentation/regards-icons/user/cart.png" alt="cart" height="25" width="25"/> <b><i>Display cart link</i></b> l'icône de commande des paniers. Il faut qu'un module de type <b><i>order</i></b> ait été configuré au préalable. Voir la rubrique <a href="../../order/introduction/">commande</a> pour en apprendre plus sur les commandes de données.
- <img src="/images/user-documentation/regards-icons/user/bell.png" alt="bell" height="25" width="25"/> <b><i>Display notification center</i></b> toute notification provenant du système se retrouvera dans la liste qui s'affichera lorsque vous cliquerez sur cet icône.
- <img src="/images/user-documentation/regards-icons/user/flag.png" alt="flag" height="25" width="25"/> <b><i>Display Locale selector</i></b> l'icône de sélection de langue. Pour le moment, il n'y a que le français et l'anglais.
- <img src="/images/user-documentation/regards-icons/admin/palette.png" alt="palette" height="25" width="25"/> <b><i>Display Theme selector</i></b> pour changer le thème de REGARDS

Dans la partie **_browsing_**, vous avez la possibilité de créer des liens et de modifier la disposition des icônes de l'interface utilisateur.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-modules/menu-browsing.png" alt="browsing" width="800"/> 
</div>

- _Ajout de liens_

Vous pouvez ajouter un lien en cliquant sur le bouton **_New link_**.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-modules/menu-link.png" alt="link" width="400"/> 
</div>

- Paramétrez :
  - l'icône associé à ce lien (invisible, par défaut ou personnalisé en ajoutant une URL d'accès à l'image )
  - le nom du lien en anglais et en français
  - l'URL de redirection du lien
  - l'endroit où vous l'afficherez (dans la barre de menu ou dans un dossier de la barre de menu) et sa position
  - sa visibilité selon les rôles utilisateurs. Pour en savoir plus sur les rôles, lisez la partie _rôles des utilisateurs_ de la page [Manage users](../../project-configuration/users/)

Cliquez sur **_Confirm_**

- _Ajout de dossiers_

Un dossier est un élément dans lequel vous pouvez regrouper des modules ou des liens. Pour ajouter un dossier, cliquez sur **_New section_**.
Editez ensuite tous les modules que vous souhaitez déplacer vers cette section.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-modules/menu-move.png" alt="move" width="400"/> 
</div>

- _Visibilité des modules_

Vous pouvez limiter la visibilité des modules selon le rôle de l'utilisateur. Visualisez l'aperçu du menu depuis la partie **_Preview_** et observez les changements de visibilité selon sélectionné depuis la liste **_Preview as..._**

#### Module embedded-html

Le module **_embedded-html_** permet d'intégrer un site web dans l'interface utillisateur. Pour l'ajouter cliquez sur le bouton **_Add_** de la carte **_UI module_**, puis compléter les champs :

- **_Module type_**, sélectionnez **_embedded-html_**
- **_Description_**, le nom de votre module
- **_Layout container_**, sélectionnez **_page-content-module (dynamic)_**
- **_Activate modules_**, cochez la case
- **_Page settings_**, choisissez ou non de définir ce module comme page d'accueil de l'interface utilisateur et configurez l'icône du module
- Donnez un titre en anglais et en français au module dans l'interface user.
- **_Module settings_**, remplissez l'URL du site vers l'accueil anglais et français s'il existe.

Vous pouvez par exemple afficher la documentation REGARDS dans l'interface utilisateur :

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-modules/embedded-configuration.png" alt="configuration" width="800"/> 
</div>

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/user-interface/ui-modules/embedded-user.png" alt="ui" width="800"/> 
</div>

:::caution
Le site en question doit explicitement autoriser l'ouverture de ses ressources à des utilisateurs extérieurs (CORS) car votre utilisateur va accéder à cette ressource en utilisant un autre nom de domaine que celui qui héberge la ressource en question.
:::

### <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12" width="12"/> Plugins configuration

Il existe deux types de plugins utilisés par l'interface utilisateur.

- des plugins de type critère utilisés dans les recherches du catalogue. Référez-vous à la partie Search Tab de la page **_[Configure the catalog](../../catalog/configuration/)_** pour en savoir plus.
- des plugins de type service utilisés dans le catalogue pour de la visualisation de données. Référez-vous à la page **_[Add UI services](../../data-services/ui-services/)_** pour en savoir plus.
