---
layout: classic-docs
title: Import data - FEM
short-title: Features
categories:
  - user-documentation
---

REGARDS vous permet également d'importer des fichiers de données par messages AMQP, nécessairement au format GeoJSON.
Contrairement aux fichiers de données respectant le format OAIS et pouvant être directement importés depuis le ***Product Manager***, ces types de fichiers n'ont pas de métadonnées permettant de les pérenniser (historique décrivant la donnée par exemple). Ainsi, ces fichiers ne sont pas transformés en AIP. 
Par ailleurs, ils ne sont pas accessibles depuis l'interface d'administration de REGARDS, mais en base de données depuis le service FEM.

> Une version ultérieure de REGARDS prévoit la possibilité de les gérer et les visualiser depuis l'interface d'administration
{: .tip .info}

Apprenez à [créer et gérer des features](/user-documentation/4_3-fem/manage-features/)