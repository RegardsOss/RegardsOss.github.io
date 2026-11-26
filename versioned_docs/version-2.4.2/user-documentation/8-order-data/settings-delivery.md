---
id: delivery-settings
title: Delivery settings
slug: /user-guide/order-data/settings-delivery/
---

_Vous avez la possibilité de configurer les paramètres de livraison. Ces paramètres sont accessibles depuis le menu 
**Commands**, puis la carte **Delivery** et le bouton <img src="/images/user-documentation/regards-icons/admin/gear-wheel.png" alt="settings" height="25" width="25"/> ***Settings***._

---

## Les paramètres

Les paramètres disponibles sont les suivants :

- **Durée avant expiration de la demande de livraison**, en heures
- **Bucket** sur lequel seront déposés les fichiers **pendant la construction de la commande**
- **Bucket** sur lequel seront déposés les **archives ZIP de livraison** une fois la commande terminée
- **Taille maximale en octets pour une commande**. Attention, cette valeur ne doit pas être supérieure à la taille 
  maximale d'une sous-commande.
- **Paramètres du Serveur S3** sur lequel sont livrées les fichiers :
  - Schéma d'URI
  - Adresse du serveur S3
  - Port d'accès au serveur S3
  - Clé de connexion au serveur S3
  - Mot de passe de connexion au serveur S3
  - Région

![](./sources/delivery-settings.png)

:::info
L'icone <img src="/images/user-documentation/regards-icons/admin/default-value.png" alt="edit" height="25" width="25"/> permet de remettre la valeur par défaut à un champ donné. La barre bleue présente à côté d'un paramètre signifie que sa valeur actuelle diffère de la valeur par défaut.
:::

## Format de livraison

Les commandes sont livrées sur le serveur S3 (exemple: MinIO) au format zip, avec les conventions suivantes :

1. Si tous les fichiers commandés concernent le même produit :
   * Nom du zip : `<id_produit>_v<version>.zip`
   * Contenu du fichier : tous les fichiers commandés à la racine du zip
2. Si plusieurs produits sont concernés par la commande :
   * Nom du zip : `delivery-<correlationId>.zip` (`correlationId` est spécifié lors de la
     [commande initiale](../../development/backend/services/delivery/api-guides/amqp/publish-a-delivery-request#body))
   * Contenu du fichier : un répertoire par produit, nommé `<id_produit>_v<version>`, contenant les fichiers associés 
     à ce produit 