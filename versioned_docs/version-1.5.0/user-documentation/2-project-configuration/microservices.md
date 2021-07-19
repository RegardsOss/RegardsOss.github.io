---
id: project-configuration-microservices
title: Manage microservices
slug: /user-guide/project-configuration/microservices/
---

_Le panneau ***Microservices*** vous permet d'avoir une vision globale des différents microservices du système, de leur état de fonctionnement, et de leur configuration. Sur cette page vous pouvez retrouver la liste de tous les microservices utilisés dans REGARDS._

<div align="center">
  <img src="/images/user-documentation/2-project-configuration/microservices/microservices-configure.png" alt="configuration microservices" width="800"/> 
</div>

---

Depuis cet écran, vous pourrez :

- <img src="/images/user-documentation/regards-icons/admin/cloud.png" alt="cloud" height="22"/> <b><i>Activer ou désactiver le mode maintenance</i></b> des microservices. En activant ce mode, le microservice n'acceptera plus que des requêtes HTTP de type GET. Seule la consultation sera possible, aucune modification ou suppression n'est donc autorisée. Ce mode peut automatiquement s'activer lorsqu'un problème survient dans un microservice. Celui-ci se met dans un fonctionnement dégradé et attend l'intervention d'un administrateur.
- <img src="/images/user-documentation/regards-icons/admin/plugins.png" alt="plugins" height="25"/> <b><i>Pour voir la liste de tous les plugins associé à un microservice</i></b> En cliquant sur ce bouton, puis sur le bouton <b><i>Empty plugins cache</i></b> vous pourrez vider toutes les configurations des plugins ayant déjà été utilisées et sauvegardées. En effet, pour des raisons de performance, un plugin ayant déjà été utilisé est automatiquement conservé.
- <img src="/images/user-documentation/regards-icons/admin/import-export.png" alt="import export" height="25"/> <b><i>Importer ou exporter la configuration du microservice</i></b> La plupart des microservices peuvent se configurer par fichier JSON. En exportant une configuration, vous pourrez voir tout ce qui a été paramétré. Vous pourrez également réinitialiser la configuration en important un nouveau fichier.

<div align="center">
  <img src="/images/user-documentation/2-project-configuration/microservices/microservices-import-export.png" alt="configuration microservices" width="800"/> 
</div>

A partir de cette page vous pouvez télécharger la configuration du microservice en appuyant sur le bouton ***Export*** à droite de l'écran.
Vous pouvez également importer un nouveau fichier de configuration en appuyant sur le bouton ***Import from file***.
