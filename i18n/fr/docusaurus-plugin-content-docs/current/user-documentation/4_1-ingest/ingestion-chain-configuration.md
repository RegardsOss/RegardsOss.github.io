---
id: oais-files-configure-ingestion-chains
title: Configure ingestion chains
slug: /user-guide/import-data/oais-files/configure-ingestion-chains
---

_Pour configurer les chaînes d'ingestion, allez dans le menu ***Add data***, dans la carte ***Products Manager (OAIS)*** et cliquez sur le bouton <img src="/images/user-documentation/regards-icons/admin/configure.png" alt="configure" height="25"/> ***Configure***. Appuyez ensuite sur ***Create new Chain***._

---

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Créer une chaîne d'ingestion

<div align="center">
    <img src="/images/user-documentation/4_1-ingest/ingest-add-chain.png" alt="add chain" width="800"/> 
</div>

L'ingestion d'un produit consiste en cinq étapes principales. Chacune de ces étapes dépend de plugins effectuant des actions différentes :

1. ***Pre-processing*** *[Optionnelle]* afin d'ajouter une étape de pré-processing avant l'ingestion des données. Il n'y a actuellement pas de plugins.
2. ***SIP validation*** *[Obligatoire]* vérifie la validité du SIP. Vous pouvez utiliser plusieurs plugins d'inspection pour vous assurez de la conformité de vos données. Si le résultat n'est pas valide, l'ingestion s'arrêtera et vous indiquera une erreur de traitement.
3. ***SIP transformation to AIP(s)*** *[Obligatoire]* il s'agit l'étape clé de l'ingestion permettant de générer les AIP issues des SIPs. Vous pouvez générer des AIPs selon plusieurs modèles pris en charge par les plugins d'ingestion.
4. ***Tag data*** *[Optionnelle]* permet d'associer des tags aux AIPs ingérées. Cela vous permettra par la suite d'identifier plus facilement les AIPs issues de cette ingestion.
5. ***Post-processing*** *[Optionnelle]* vous avez la possibilité d'effectuer n'importe quel traitement suite à l'ingestion des AIPs à l'aide de plugins de post-traitements. Il en existe actuellement un seul ***SSaltoSipadPostProcessingPlugin*** qui génère des fichiers XML sur disque à partir des AIPs créées.

A partir de l'écran ***Create a new processing chain***, vous avez deux façons de créer des chaînes d'ingestion.

<div align="center">
    <img src="/images/user-documentation/4_1-ingest/ingest-create-chain.png" alt="create chain" width="800"/> 
</div>

### Créer une chaîne à partir d'un fichier JSON (1)

- Créez sur votre disque un fichier JSON décrivant une chaîne d'ingestion (vous pouvez télécharger la _DefaultProcessingChain_ présente par défaut pour comprendre comment construire une chaîne d'ingestion).
- Cliquez sur le bouton ***Import from file***
- Sélectionnez un fichier au format JSON dans l'explorateur de fichier en cliquant sur ***Select a file***.
- Appuyez sur ***Import***
- Appuyez ensuite sur ***Create***
- Vérifiez la création de votre chaîne dans la liste
- Vous pouvez désormais ***[soumettre des SIPs](submit-products)*** avec la chaîne que vous venez de créer.

### Créer une chaîne manuellement (2)

Complétez les champs suivants :

- ***Name*** représentatif du nom de la chaîne,
- ***Description*** expliquant brièvement le fonctionnement de votre chaîne. Celle-ci sera visible dans la liste des chaînes d'ingestion, elle n'est néanmoins pas obligatoire.
- Choisissez les plugins associés à chacune des étapes d'ingestion présentées ci-dessus. Seuls deux plugins sont obligatoires ***Data validation*** et ***Data generation***
- Appuyez ensuite sur ***Create***
- Vérifiez la création de votre chaîne dans la liste
- Vous pouvez désormais ***[soumettre des SIPs](submit-products)*** avec la chaîne que vous venez de créer.

## <img src="/images/user-documentation/doc-icons/right-arrow.png" alt="arrow" height="12"/> Gérer les chaînes d'ingestion

Plusieurs actions vous permettent de gérer les chaînes d'ingestion :

- Vous pouvez modifier les informations liées à une chaîne en cliquant sur le bouton <img src="/images/user-documentation/regards-icons/admin/edit.png" alt="edit" height="25"/> ***Edit***
- Vous avez la possibilité de télécharger la chaîne sous forme de fichier JSON. Vous pourrez ainsi importer cette chaîne dans un autre projet REGARDS ou la conserver.
- Les chaînes peuvent être supprimées à l'exception de la ***DefaultProcessingChain*** qui est celle par défaut.

<div align="center">
    <img src="/images/user-documentation/4_1-ingest/ingest-update-chains.png" alt="update chains" width="800"/> 
</div>