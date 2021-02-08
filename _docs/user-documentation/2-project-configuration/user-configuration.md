---
layout: classic-docs
title: Customize user interface
short-title: UI
categories:
  - user-documentation
---

<i>L'onglet ***User Interface*** vous permettra de configurer une grande variété de paramètres. Depuis le menu ***User Interface***, vous pouvez régler l'aspect de l'interface user ainsi que les fonctionnalités que celle-ci peut proposer.</i>


<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/ui-menu.png/" alt="ui menu" width="800"> 
</div>

{% include toc.md %}




### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> UI settings

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/ui-settings/configure-ui-settings.png" alt="ui settings" width="800"> 
</div>

[completer]

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Theme configuration

Il existe cinq thèmes de base dans REGARDS vous permettant de modifier la couleur, l'aspect de l'interface et de ses composants ainsi que l'image de fond. 
Que ce soit dans la partie d'administration ou utilisateur, changer le thème en appuyant sur le bouton en forme de palette <img src="/assets/images/user-documentation/regards-icons/admin/palette.png" alt="palette" height="25">.


S'ils ne vous conviennent pas, vous pouvez modifier ceux de base ou en ajouter depuis la carte ***Themes configuration*** accessible depuis le menu ***User Interface***.

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/themes/themes-list.png" alt="theme list" width="800"> 
</div>

Pour ajouter un nouveau thème, cliquez sur le bouton ***Add a new theme***, donnez lui un nom et sélectionnez dans la liste ***Based on Material UI theme***, une palette de couleur de base claire ou foncée. Changez ensuite la couleur des éléments en les sélectionnant depuis les rubriques principales ***Palette***, ***Material UI components***, ***Regards components*** et ***Modules themes***. La partie de droite vous offrira un aperçu des éléments en question.


<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/themes/add-theme.png" alt="add theme" width="800"> 
</div>


### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> UI modules

L'interface utilisateur est basée sur l'utilisation de modules que ce soit pour consulter et gérer vos données, commander des données ou spécifier la disposition des éléments.

Dans cette partie, la configuration générale des modules sera décrite ainsi que les modules utilitaires suivants :
- ***menu***
- ***embedded-html***
- ***licences***

Les modules de [consultation du catalogue](/user-documentation/6-catalog-consultation/introduction-catalog/) et de [commande](/user-documentation/8-order-data/introduction-order/) font l'objet de rubriques à part entière, leur utilisation étant orientée métier.


#### Configuration générale des modules

Pour créer un module, appuyez sur le bouton ***Add*** de la carte ***UI modules***, accessible depuis le menu ***User Interface***.
Tous les modules ont une partie d'identification commune, où vous devrez préciser :
- ***Module type***, le type de module existant dans REGARDS
- ***Description***, la description du module qui apparaîtra ensuite dans la liste des modules
- ***Layout container***, la position du module, parmi :
    - ***page-top-header***
    - ***page-sub-header***
    - ***page-content-module***
    - ***page-footer***

    
<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/ui-modules/create-module.png" alt="create module" width="800"> 
</div>

#### Module Menu

Il ne peut exister qu'un module de type ***menu***, il est configuré par défaut dans REGARDS. Retrouvez-le depuis la liste des ***UI modules***.

Il correspond à la barre de menu de l'interface utilisateur :

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/ui-modules/menu-bar.png" alt="create module" width="800"> 
</div>


Sélectionnez les cases pour afficher ou non les icônes de la partie droite du menu :
 
- <img src="/assets/images/user-documentation/regards-icons/user/login.png" alt="login" height="25"> ***Display authentication option***
l'icône de connexion à la page. Il se peut que celui-ci ne soit pas nécessaire si toutes vos données sont publiques et ne requièrent pas un accès spécifique.
- <img src="/assets/images/user-documentation/regards-icons/user/replace.png" alt="login" height="25"> ***Display cart link*** l'icône de commande des paniers. Il faut qu'un module de type ***order*** ait été configuré au préalable. Voir la rubrique [commande](/user-documentation/8-order-data/introduction-order/) pour en apprendre plus sur les commandes de données.
- <img src="/assets/images/user-documentation/regards-icons/user/bell.png" alt="bell" height="25"> ***Display notification center*** toute notification provenant du système se retrouvera dans la liste qui s'affichera lorsque vous cliquerez sur cet icône.
- <img src="/assets/images/user-documentation/regards-icons/user/flag.png" alt="flag" height="25"> ***Display Locale selector*** l'icône de sélection de langue. Pour le moment, il n'y a que le français et l'anglais.
- <img src="/assets/images/user-documentation/regards-icons/user/palette.png" alt="palette" height="25"> ***Display Theme selector*** pour changer le thème de REGARDS

Dans la partie ***browsing***, vous avez la possibilité de créer des liens et de modifier la disposition des icônes de l'interface utilisateur.

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/ui-modules/menu-browsing.png" alt="browsing" width="800"> 
</div>


- *Ajout de liens*

Vous pouvez ajouter un lien en cliquant sur le bouton ***New link***. 

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/ui-modules/menu-link.png" alt="link" width="400"> 
</div>

- Paramétrez :
  - l'icône associé à ce lien (invisible, par défaut ou personnalisé en ajoutant une URL d'accès à l'image )
  - le nom du lien en anglais et en français  
  - l'URL de redirection du lien
  - l'endroit où vous l'afficherez (dans la barre de menu ou dans un dossier de la barre de menu) et sa position
  - sa visibilité selon les rôles utilisateurs. Pour en savoir plus sur les rôles, lisez la partie *rôles des utilisateurs* de la page [Manage users](/user-documentation/2-project-configuration/users/)

Cliquez sur ***Confirm***

- *Ajout de dossiers*

Un dossier est un élément dans lequel vous pouvez regrouper des modules ou des liens. Pour ajouter un dossier, cliquez sur ***New section***.
Editez ensuite tous les modules que vous souhaitez déplacer vers cette section. 

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/user-interface/ui-modules/menu-move.png" alt="move" width="400"> 
</div>

- *Visibilité des modules*

Vous pouvez limiter la visibilité des modules selon le rôle de l'utilisateur. Visualisez l'aperçu du menu depuis la partie ***Preview*** et observez les changements de visibilité selon sélectionné depuis la liste ***Preview as...***

#### Module embedded-html

[completer]

### <img src="/assets/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"> Plugins configuration

[completer]

