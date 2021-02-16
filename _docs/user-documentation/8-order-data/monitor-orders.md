---
layout: classic-docs
title: Monitor orders
short-title: Orders
categories:
  - user-documentation
---

<i>Suivez les commandes effectuées dans votre projet</i>

<img src="/assets/images/user-documentation/8-order-data/command-menu.png" alt="user menu" height="200"> 
<img src="/assets/images/user-documentation/8-order-data/orders-card.png" alt="user menu" height="200"> 


*****************

Depuis l'interface d'administration, le menu ***Commands*** et la carte ***Orders***, appuyez sur le bouton ***List***.
Sur l'écran ***Orders***, vous pouvez visualiser toutes les commandes effectuées dans votre projet. 

<div align="center">
  <img src="/assets/images/user-documentation/8-order-data/order/order-list.png" alt="order list" width="800"> 
</div>

Les informations suivantes sont indiquées :
- ***User***, l'adresse mail de l'utilisateur ayant effectué la commande
- ***Label***, l'intitulé qu'il a renseigné lors de sa commande
- ***Progress***, le pourcentage de livraison 
- ***Creation***, la date à laquelle la commande a été créée
- ***Total size***, la taille totale des fichiers 
- ***Errors count***, le nombre d'erreurs éventuellement survenues
- ***Status***, l'état de livraison de la commande parmi :
  - ***waiting user***, une intervention de l'utilisateur est attendue pour terminer le processus de commande
  - ***done***, la commande a été livrée et téléchargée avec succès
  - ***pending***, la commande est en attente
  - ***running***, la commande est en cours de traitement
  - ***pause***, la commande a été mise en pause lors de son exécution
  - ***expired***, les fichiers associés à la commande ne sont plus téléchargeables car la commande a expiré
  - ***failed***, la commande des fichiers a échoué
  - ***warning***, la commande s'est correctement terminée mais avec des warnings
  - ***removed***, la commande a été supprimée
  - ***unknown***, le statut est inconnu

Par défaut les colonnes suivantes ne sont pas affichées, vous pouvez décidez de l'affichage des colonnes en appuyant sur le bouton ***Columns***.
- ***Expiration***, la date jusqu'à laquelle les fichiers de la commande sont téléchargeables
- ***Objects count***, le nombre d'objets téléchargés


> Vous pourrez télécharger ce rapport sous format .csv en appuyant sur le bouton ***Summary***.
{: .tip .info}

> A tout moment en tant qu'administrateur, vous avez la possibilité de mettre une commande en pause ou l'annuler en appuyant sur les boutons correspondants présents sur chaque ligne.
{: .tip .info}

> N'hésitez pas à utiliser les filtres de tri par ***User*** pour vous aider dans vos recherches. 
{: .tip .info}