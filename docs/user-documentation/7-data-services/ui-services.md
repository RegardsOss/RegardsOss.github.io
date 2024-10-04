---
id: data-services-ui-services
title: Add UI services
slug: /user-guide/data-services/ui-services/
---

*Les services IHM sont des fonctionnalités supplémentaires du catalogue de données, accessible depuis l'interface utilisateur. *

<img src="/images/user-documentation/v1.4/6-catalog-consultation/catalog/user-interface-menu.png" alt="user menu" height="200"/> 
<img src="/images/user-documentation/v1.4/7-data-services/ui-services/ui-services-cards.png" alt="ui services cards" height="200"/>

---

## Configuration des services IHM

La liste des services IHM est configurable dans la partie administration de votre projet, depuis le menu ***User Interface*** et la carte ***Services configuration***.

Notez que les services existants sont très spécifiques et ne vont pas être maintenus dans des versions ultérieures de REGARDS.
Ils permettent notamment de gérer des ***features*** provenant de fem, étant donné que pour le moment, aucune interface d'administration ne permet de les gérer.

Développez vos propres services IHM pour enrichir l'utilisation du catalogue et proposer d'autres façons de visualiser la donnée. Vous pourriez par exemple, sélectionner des données pour les afficher sous forme de graphique et étudier l'évolution de certaines variables, ou encore afficher un rapport synthétique présentant des chiffres clés et pouvant s'exporter sous le format de votre choix.

Lorsque vous aurez développé votre service, ajoutez-le depuis la carte ***Plugin configuration*** en appuyant sur le bouton ***Add***.
Précisez ensuite le chemin d'accès à votre script contenant votre plugin, un aperçu des informations du script s'affichera dès que celui-ci aura été trouvé. Renseignez également quel type d'utilisateur aura le droit d'utiliser ce plugin.

Par exemple :

<div align="center">
  <img src="/images/user-documentation/v1.4/7-data-services/ui-services/example-service.png" alt="example service" width="800"/> 
</div>
 
Une fois votre plugin créé, vous pourrez le voir dans la liste des <b><i><i>UI Service plugin list</i></i></b> accessible depuis la carte <b><i><i>Services configuration</i></i></b>.

<div align="center">
  <img src="/images/user-documentation/v1.4/7-data-services/ui-services/services-plugin-list.png" alt="plugin list" width="800"/> 
</div>

Chaque bloc représente un type de service. L'écran accessible depuis le bouton ***Configuration*** liste toutes les instances de ce service ; chacune peut se paramétrer d'une manière spécifique. Le bouton ***Create*** vous permettra d'ajouter une nouvelle configuration.

<div align="center">
  <img src="/images/user-documentation/v1.4/7-data-services/ui-services/configuration-list.png" alt="configuration list" width="800"/> 
</div>

Vous aurez la possibilité d'activer ou non une configuration du service, et de l'associer ou non à tous les jeux de données existant de votre projet. Vous pouvez également activer ce plugin pour un ou plusieurs jeux de données directement depuis le jeu de données, pour cela suivez l'étape 5 de la section [création d'un jeu de données](../3-data-organization/dataset-collection.md).

## Application des services IHM

Les services IHM sont applicables sur les données du catalogue accessible depuis `http://<regards host>/user/<project>`.

Sur chaque donnée, vous pouvez appuyer sur le bouton <img src="/images/user-documentation/regards-icons/admin/gear-wheel.png" alt="gear wheel" height="25" width="25"/> ***Services*** pour voir les services associés. Cliquez ensuite sur le service IHM que vous souhaitez activer. Vous pouvez également les appliquer sur un groupe en cochant plusieurs cases, puis en appuyant sur le bouton qui s'affichera dans la barre au-dessus des données. Cela est uniquement possible lorsque le service le permet.

<div align="center">
  <img src="/images/user-documentation/v1.4/7-data-services/ui-services/catalog-ui-services.png" alt="services" width="800"/> 
</div>

Par exemple, le plugin de test affiche une pop-up contenant la répartition des données par date :

<div align="center">
  <img src="/images/user-documentation/v1.4/7-data-services/ui-services/catalog-example-service.png" alt="example service" width="800"/> 
</div>
