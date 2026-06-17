---
id: crawler-configure-connection
title: Configure external database connection
slug: /user-guide/crawler/configure-connection/
---

_Pour configurer une connexion à une base de données externe, veuillez suivre les étapes suivantes._

- Depuis ***Add data*** et la carte ***Crawling***, cliquez sur ***Configure connection to external databases*** puis sur ***Add***.

<div align="center">
    <img src="/images/user-documentation/v1.4/5-crawler/crawler-connections.png" alt="database" width="800"/> 
</div>

- Donnez le nom de la connexion, sélectionnez un plugin de connexion à une base de données selon votre type de base. 
  Entrez un utilisateur, son mot de passe, une adresse d’accès à une base de données, son port, son nom ainsi que le 
  mode de sécurisation de la connexion (SSL mode).

:::info SSL mode
La valeur par défaut pour SSL mode est ***require***.
Deux valeurs sont possibles :
- ***require*** : la connexion à la base de données doit obligatoirement être établie via SSL/TLS. Si une connexion sécurisée ne peut pas être négociée, la connexion échoue.
- ***prefer*** : le client tente d'abord d'établir une connexion SSL/TLS. Si ce n'est pas possible, il bascule sur une connexion non chiffrée.
:::

<div align="center">
    <img src="/images/user-documentation/v2.4/5-crawler/crawler-add-connection.png" alt="database" width="800"/> 
</div>

- Cliquez sur ***Save***
- Testez ensuite la connexion en appuyant sur le bouton ***play***, un message s’affiche pour indiquer que la connexion est fonctionnelle.

<div align="center">
    <img src="/images/user-documentation/v1.4/5-crawler/crawler-connected.png" alt="connected" width="800"/> 
</div>

- Appuyez sur ***Previous*** pour revenir à la carte ***Crawling***

Vous pouvez désormais [ajouter des éléments au catalogue depuis cette nouvelle source de données](database.md)
