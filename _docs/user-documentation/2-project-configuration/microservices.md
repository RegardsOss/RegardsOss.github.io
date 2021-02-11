---
layout: classic-docs
title: Manage microservices
short-title: Microservices
categories:
  - user-documentation
---


<i>Le panneau ***Microservices*** vous permet d'avoir une vision globale des différents microservices du système, de leur état de fonctionnement, et de leur configuration. Sur cette page vous pouvez retrouver la liste de tous les microservices utilisés dans REGARDS. 
</i>

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/microservices/microservices-configure.png" alt="configuration microservices" width="800"> 
</div>

*****************


Depuis cet écran, vous pourrez :
- <img src="/assets/images/user-documentation/regards-icons/admin/cloud.png" alt="cloud" height="22"> ***Activer ou désactiver le mode maintenance*** des microservices. En activant ce mode, le microservice n'acceptera plus que des requêtes HTTP de type GET. Seule la consultation sera possible, aucune modification ou suppression n'est donc autorisée. Ce mode peut automatiquement s'activer lorsqu'un problème survient dans un microservice. Celui-ci se met dans un fonctionnement dégradé et attend l'intervention d'un administrateur.
- <img src="/assets/images/user-documentation/regards-icons/admin/plugins.png" alt="plugins" height="25"> ***Pour voir la liste de tous les plugins associé à un microservice***. En cliquant sur ce bouton, puis sur le bouton ***Empty plugins cache***, vous pourrez vider toutes les configurations des plugins ayant déjà été utilisées et sauvegardées. En effet, pour des raisons de performance, un plugin ayant déjà été utilisé est automatiquement conservé.
- <img src="/assets/images/user-documentation/regards-icons/admin/import-export.png" alt="import export" height="25"> ***Importer ou exporter la configuration du microservice***. La plupart des microservices peuvent se configurer par fichier JSON. En exportant une configuration, vous pourrez voir tout ce qui a été paramétré. Vous pourrez également réinitialiser la configuration en important un nouveau fichier.

<div align="center">
  <img src="/assets/images/user-documentation/2-project-configuration/microservices/microservices-import-export.png" alt="configuration microservices" width="800"> 
</div>

A partir de cette page vous pouvez télécharger la configuration du microservice en appuyant sur le bouton ***Export*** à droite de l'écran.
Vous pouvez également importer un nouveau fichier de configuration en appuyant sur le bouton ***Import from file***.