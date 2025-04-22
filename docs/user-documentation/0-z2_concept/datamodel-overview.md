---
id: datamodel-overview
title: Data models
slug: /user-guide/datamodel-overview/
---

Dans REGARDS, et comme expliqué dans les concepts de base, les **modèles de données** sont la notion clé pour la mise en place de votre catalogue. Ils définissent non seulement la manière dont votre catalogue sera construit, mais aussi comment il pourra être consulté.

:::info
Il est donc **obligatoire**, avant toute utilisation de REGARDS, de **bien réfléchir à la structure des données** que votre catalogue devra contenir.
Vous pouvez pour cela utiliser un ou plusieurs modèles de données.
:::

Une fois un modèle de données défini, les seules actions possibles sont : 
 - Ajouter un nouvel attribut
 - Ajouter un nouveau fragment

Les modèles de données sont associés aux **attributs**. Tout attribut créé ne peut être modifié que sur certains aspects.
Un fois un attribut créé, il est **impossible** de modifier : 
 - Son **nom**
 - Son **type**
 - Le **fragment** dans lequel il est

Dans REGARDS, vous pouvez définir un ou plusieurs modèles de données. Chaque modèle est défini par :  
- **Un nom**  
- **Une liste d'attributs**  

Dans REGARDS, les attributs des modèles sont partagés entre les modèles. Chaque attribut est défini par :  
- **Un nom** : Identifiant unique de l'attribut.  
- **Un libellé** : Le libellé de l'attribut tel qu'il sera affiché dans les diverses IHM de REGARDS.  
- **Un type** : Le type de l'attribut parmi une liste prédéfinie.  
- **Une description** : Une description affichée dans les diverses IHM de REGARDS.  
- **Une unité** (optionnel) : Permet de définir la façon dont la valeur de la métadonnée sera présentée.  
- **Un fragment** (optionnel) : Permet de définir une section ou un regroupement d'attributs par thématique.  
- **Modifiable** : Vrai ou faux. Indique si la valeur de l'attribut sera modifiable lors des mises à jour du produit.  
- **Optionnel** : Vrai ou faux. Indique si l'attribut est obligatoire ou non.  
- **Recherchable** : Vrai ou faux. Indique si l'attribut sera recherchable depuis les multiples moteurs de recherche de REGARDS.  
- **Restrictions** : Un ensemble de restrictions sur les valeurs possibles de l'attribut.  

La définition des modèles de données et des attributs de votre catalogue est décrite plus en détail dans la section [Organisation de vos données](../3-data-organization/models.md).