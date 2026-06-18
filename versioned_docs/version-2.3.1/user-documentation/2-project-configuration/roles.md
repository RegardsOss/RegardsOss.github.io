---
id: project-configuration-roles
title: Manage roles
slug: /user-guide/project-configuration/roles/
---

_Gérez les utilisateurs du projet depuis le menu ***Users*** de l'administration du projet, dans la carte ***Roles***._

<img src="/images/user-documentation/v2.1/2-project-configuration/roles/users-menu.png" height="200"/>
<img src="/images/user-documentation/v2.1/2-project-configuration/roles/roles-card.png" height="200"/>


### Rôles par défaut

Certains rôles, décrits dans l'IHM, sont créées par défaut.
Il est possible de créer de nouveaux rôles, en héritant d'un rôle existant. 
Cela signifie que le nouveau rôle héritera de tous les accès du rôle existant.
Les rôles par défaut sont les suivants (chaque rôle de la liste hérite des droits du rôle précédent, aussi sont-ils 
classés du rôle possédant le moins de permissions au rôle en possédant le plus).

- **_Public_** : attribué aux utilisateurs non connectés. Les utilisateurs de ce rôle possèdent les droits suivants :
  * Accès aux fonctionnalités de consultation dans l'IHM utilisateur du projet
  * Pas d'accès aux fonctinnalités de l'IHM d'administration du projet 

- **_Registered users_** : attribué aux utilisateurs enregistrés. Les utilisateurs de ce rôle possèdent tous les 
  droits accordés aux utilisateurs du rôle _Public_, plus les suivants :
  * Accès aux fonctionnalités de téléchargement des données dans l'IHM utilisateur du projet
  * Accès aux fonctinnalités de commande des données (avec ou sans traitement) dans l'IHM utilisateur du projet
  * Pas d'accès aux fonctinnalités de l'IHM d'administration du projet

- **_Operator_** : attribué aux exploitants. Les utilisateurs de ce rôle possèdent tous les
  droits accordés aux utilisateurs du rôle _Registered Users_, plus les suivants :

   Au niveau de l'**IHM Administration du projet** :
    - Onglet **Users** : 

  | Nom de la carte  | Actions autorisées                                                                               | 
  |:-----------------|:-------------------------------------------------------------------------------------------------| 
  | **Users**        | - Lister les utilisateurs du projet<br/>- Télécharger la liste au format CSV                     |  
  | **Access group** | - Lister les groupes d'accès du projet <br/>- Lister les utilisateurs pour chaque groupe d'accès |

      - Onglet **Add data** : 

  | Nom de la carte               | Actions autorisées                                                                                                                                                                                                                       | 
  |:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **Dashboard**                 | - Consulter le tableau de bord                                                                                                                                                                                                                  |  
  | **Data acquisition**          | - Lister les chaînes d'acquisition <br/>- Lancer, activer/désactiver, changer le mode (manuel ou automatique) d'une chaîne d'acquisition                                                                                                        |   
  | **Product Manager (OAIS)**    | - Lister les chaînes d'ingestion<br/>- Consulter les produits OAIS <br/>- Consulter les traitements sur les produits OAIS <br/>- Relancer un traitement sur un produit OAIS<br/>- Soumettre des produits OAIS                                   |    
  | **Product Manager (GeoJSON)** | - Consulter les produits GeoJSON<br/>- Supprimer, notifier un produit GeoJSON<br/>- Consulter les traitements sur les produits GeoJSON<br/>- Supprimer, notifier un produit GeoJSON<br/>- Relancer, supprimer un requête sur un produit GeoJSON |  
  | **Crawling**                  | - Consulter les aspirations de données<br/>- Ajouter, activer/désactiver, éditer, supprimer une aspiration de données                                                                                                                           |  
  | **Storage**                   | - Lister les espaces de stockage<br/>- Recalculer les taux d'occupation des espaces de stockage                                                                                                                                                 |  
  | **Worker monitoring**         | - Consulter les requêtes sur les workers<br/>- Relancer une requête à un worker                                                                                                                                                                 |

      - Onglet **Orders** : 

  | Nom de la carte | Actions autorisées                                                                                                                                                                   | 
  |:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **Orders**      | - Consulter les commandes du projet<br/>- Télécharger la liste des commandes au format CSV<br/>- Voir le détail d'une commande<br/>- Relancer, annuler, mettre en pause une commande |  
  | **Processing**  | - Consulter les traitements                                                                                                                                                          |   

- **_Administrator_** : attribué aux administrateurs du projet. Les utilisateurs de ce rôle possèdent tous les
  droits accordés aux utilisateurs du rôle _Operator_, plus les suivants :

  Au niveau de l'**IHM Administration du projet** :
    - Onglet **Users** :
  
  | Nom de la carte | Actions autorisées                                               | 
  |:----------------|:-----------------------------------------------------------------| 
  | **Users**       | - Supprimer, éditer, activer/désactiver l'accès à un utilisateur |  

    - Onglet **Data models** :

  | Nom de la carte                   | Actions autorisées                                                                                                                                                                                                               | 
  |:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **Models**                        | - Lister les modèles de données<br/>- Ajouter un modèle de données<br/>- Télécharger un modèle de données<br/>- Lier des attributs à un modèle de données<br/>- Editer un modèle de données<br/>- Dupliquer un modèle de données |  
  | **Model attributes**              | - Lister les attibuts de modèles de données<br/>- Ajouter un attribut de modèles de données<br/>- Editer, supprimer un attribut de modèles de données<br/>- Réinitialiser le cache des attributs de modèles de données<br/>      |
  | **Fragments**                     | - Lister les fragments<br/>- Ajouter un fragment<br/>- Editer un fragment<br/>- Télécharger un fragment                                                                                                                          |
  | **Attribute calculation plugins** | - Lister les plugins de calcul des attributs<br/>- Dupliquer la configuration d'un plugin de calcul d'attributs                                                                                                                  |

      - Onglet **Add data** : 

  | Nom de la carte               | Actions autorisées                                                                                                                                                                                                                                                                                      | 
    |:------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **Data acquisition**          | - Créer une nouvelle chaîne d'acquisition<br/>- Dupliquer une chaîne d'acquisition<br/>- Supprimer une chaîne d'acquisition                                                                                                                                                                             |   
  | **Product Manager (OAIS)**    | - Configurer les paramètres du service d'ingestion des produits OAIS<br/>- Créer une chaîne d'ingestion<br/>- Editer une chaîne d'ingestion<br/>- Exporter une chaîne d'ingestion au format JSON<br/>- Modifier, supprimer, notifier un produit OAIS<br/>- Supprimer un traitement sur une produit OAIS |    
  | **Product Manager (GeoJSON)** | - Configurer les paramètres du service Feature Manager                                                                                                                                                                                                                                                  |  
  | **Storage**                   | - Configurer les paramètres de stockage<br/>- Créer un espace de stockage<br/>- Editer, supprimer un espace de stockage<br/>- Copier les fichiers d'un espace de stockage verds un autre<br/>- Augmenter ou diminuer la priorité de la configuration dun espace de stockage                             |  
  | **Worker monitoring**         | - Configurer les paramètres du service Worker manager<br/>- Supprimer une requête à un worker                                                                                                                                                                                                           |
  | **LTA Manager**               | - Configurer les paramètres du service LTA manager<br/>- Consulter les demandes de pérennisation<br/>- supprimer une demande de pérennisation                                                                                                                                                           |

      - Onglet **User Interface** : 

  | Nom de la carte           | Actions autorisées                                                   | 
  |:--------------------------|:---------------------------------------------------------------------| 
  | **UI settings**           | - Configurer les paramètres de l'interface utilisateur               |   
  | **Layout configuration**  | - Configurer l'agencement de l'interface utilisateur                 |    
  | **UI modules**            | - Lister les modules de l'interface utilisateur                      |  
  | **Themes configuration**  | - Lister les thèmes de l'apparence de REGARDS<br/>- Ajouter un thème |  
  | **Plugins configuration** | - Lister les plugins utilisés sur l'interface utilisateur            |

      - Onglet **Orders** : 

  | Nom de la carte | Actions autorisées                                                           | 
    |:----------------|:-----------------------------------------------------------------------------| 
  | **Orders**      | - Configurer les paramètres de commande                                      |  
  | **Processing**  | - Configurer un nouveau traitement<br/>- Surveiller les traitements en cours |   
  | **Delivery**    | - Configurer les paramètres des livraisons                                   |   

- **_Super Administrator_** : rôle spécial permettant d'outrepasser n'importe quelle interdiction d'accès aux 
  fonctionnalités et aux données. Les utilisateurs de ce rôle possèdent tous les accès, c'est-à-dire les droits des 
  utilisateurs _Administrator_ plus les suivants :

  Au niveau de l'**IHM Administration du projet** :
  - Onglet **Users** :

  | Nom de la carte           | Actions autorisées                                                                                                                                    | 
    |:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **Users**                 | - Configurer les paramètres des utilisateurs<br/>- Créer un utilisateur                                                                               |  
  | **Roles**                 | - Lister les rôles pour le projet<br/>- Ajouter un rôle<br/>- Editer un rôle<br/>- Configurer les ressources accessibles pour un rôle                 |
  | **Access group**          | - Editer un groupe d'accès<br/>- Configurer les droits d'accès pour un groupe<br/>- Dupliquer un groupe d'accès                                       |
  | **Authentication system** | - Lister les différents systèmes d'anthentification du projet<br/>- Ajouter un système d'authentification (_identity provider_ ou _service provider_) |

    - Onglet **Data models** :

  | Nom de la carte                   | Actions autorisées                                                           <br/>                                               | 
  |:----------------------------------|:---------------------------------------------------------------------------------------------------------------------------------| 
  | **Attribute calculation plugins** | - Ajouter un plugin de calcul des attributs<br/>- Editer, activer/désactiver <br/>ou supprimer un plugin de calcul des attributs |

    - Onglet **Collections & Datasets** :

  | Nom de la carte | Actions autorisées                                                                                                                                                     | 
  |:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **Collections** | - Lister les collections du projet<br/>- Afficher les détails d'une collection<br/>- Editer, supprimer, dupliquer une collection<br/>- Ajouter une nouvelle collection |
  | **Datasets**    | - Lister les jeux de données du projet<br/>- Afficher les détails d'un jeu de données<br/>- Editer, supprimer un jeu de données<br/>- Créer une nouveau jeu de données |

  - Onglet **Add Data** :

  | Nom de la carte | Actions autorisées                                                                                                                                                                                                      | 
    |:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **Crawling**    | - Configurer les connexions aux bases de données externes<br/>- Suivre les aspirations de données<nr/>- Supprimer une aspiration de données<br/>- Programmer une aspiration de données<br/>- Réinitialiser le catalogue |

  - Onglet **Catalog access** :

  | Nom de la carte     | Actions autorisées                                                                                                                                                                        | 
   |:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **Search protocol** | - Lister les protocoles de recherche d'accès aux données du projet<br/>- Définir un nouveau protocole de recherche<br/>- Editer, supprimer un protocole de recherche                      |
  | **Services**        | - Lister les services applicables aux données du catalogue<br/>- Ajouter un service applicable aux données du catalogue<br/>- Editer, dupliquer, activer/désactiver, supprimer un service |

  - Onglet **Microservices** :

  | Nom de la carte        | Actions autorisées                                                                                                                                                                                            | 
     |:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| 
  | **_Nom d'un service_** | - Lister les plugins associés au microsevice<br/>- Activer/désactiver le mode maintenance du microservice<br/>- Télécharger la configuration du microservice<br/>- Importer une configuration du microservice |

      - Onglet **User Interface** : 

  | Nom de la carte           | Actions autorisées                                                                                              | 
    |:--------------------------|:----------------------------------------------------------------------------------------------------------------| 
  | **UI modules**            | - Créer un module d'interface<br/>- Editer, dupliquer, activer/désactiver, supprimer <br/>un module d'interface |  
  | **Themes configuration**  | - Rendre un thème visible ou invisible pour les utilisateurs<br/>- Editer, supprimer, dupliquer un thème        |  
  | **Plugins configuration** | - Ajouter un plugin d'interface<br/>- Editer/supprimer un plugin d'interface                                    |


### Actions sur les rôles

Vous pouvez supprimer un rôle (autre que ceux définis par défaut) en appuyant sur le bouton <img src="/images/user-documentation/regards-icons/admin/delete.png" alt="link" height="25" width="25"/>.

**Attention**, le bouton de suppression n'est disponible que si le rôle n'est assigné à aucun utilisateur du projet.

Dans le cas d'un rôle autre que ceux définis par défaut, il est possible de modifier le nom du rôle ainsi que le 
rôle dont il hérite en appuyant sur le bouton <img src="/images/user-documentation/regards-icons/admin/edit.png" 
alt="link" height="25" width="25"/>.

Vous pouvez décider d'ajouter des rôles supplémentaires, en reprenant les concepts de ces cinq rôles, afin de les personnaliser. Appuyez sur le bouton **_Add_** de la carte **_Roles_**. Donnez un nom au nouveau rôle et choisissez le niveau d'accès, puis appuyez sur le bouton **_Save_**.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/add-role.png" alt="add role" width="800"/>
</div>

Retournez ensuite dans la page listant les rôles et appuyez sur le bouton <img src="/images/user-documentation/regards-icons/admin/link.png" alt="link" height="25" width="25"/> **_Configure resources access_** du rôle en question.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/role-list.png" alt="role list" width="800"/>
</div>

Pour chaque microservice, vous pourrez gérer individuellement l'accès à chaque endpoint REST. Notez que vous pouvez 
seulement activer ou désactiver l'accès aux endpoints nécessitant un rôle supérieur à celui configuré dans le modèle de base.
C'est pourquoi le bouton n'est pas disponible pour le rôle _**Super Administrateur**_, qui possède déjà l'accès à 
tous les endpoints.

<div align="center">
  <img src="/images/user-documentation/v1.4/2-project-configuration/users/authorize-role-actions.png" alt="add role" width="800"/>
</div>
