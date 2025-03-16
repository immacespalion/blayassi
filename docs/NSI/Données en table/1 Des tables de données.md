---
title: Des tables de données
weight: 1 
---

# Présentation et représentation des tables de données 📊

Les données sont partout dans notre quotidien, que ce soit sous forme de relevés météorologiques, de bases de clients ou encore de résultats d'examens. Pour les exploiter efficacement, elles doivent être organisées de manière structurée. 

L’une des façons les plus courantes de représenter des données est sous **forme de table**, c'est-à-dire un ensemble d’informations **organisées en lignes et colonnes**. Ce format est simple à comprendre et permet d’appliquer facilement des traitements automatisés.

Dans cette partie, nous allons voir **pourquoi** structurer les données sous forme de table, découvrir les **principaux termes associés**, explorer différentes **représentations en Python** et apprendre à **manipuler des fichiers CSV**, un format standard pour stocker des données tabulaires.

---

## 1 - Pourquoi structurer les données sous forme de table ? 📋

Pour représenter de **manière organisée des données**, on choisit généralement un "tableau" : un ensemble de **lignes et de colonnes**, similaire à ce que l'on retrouve dans un tableur (comme Excel, Numbers ou Google Sheets). 

!!! definition "Définition : Table"
    Une **table** est un **ensemble structuré de données**, organisé en **lignes** et **colonnes**. Elle permet de stocker et manipuler des informations de manière efficace.

    *Exemple : Imaginons un fichier contenant des informations sur des élèves :*

    | ID  | Nom      | Âge | Moyenne |
    |-----|---------|----|---------|
    | 1   | Alice    | 16 | 15.8    |
    | 2   | Bob      | 17 | 13.2    |
    | 3   | Clara    | 16 | 17.5    |

Chaque élément de la table possède sa propre ligne. On parlera d'**enregistrement**.

!!! definition "Définition : Enregistrement"
    Un **enregistrement** (ou **ligne**) est une **entrée unique** dans la table, contenant plusieurs valeurs associées à chaque descripteur.

    *Exemple : L’enregistrement `(2, "Bob", 17, 13.2)` représente un élève de 17 ans avec une moyenne de **13.2**.*

Afin d'organiser, dans un premier temps, et de traiter, dans un second temps, les données de notre table, il est nécessaire que tous les enregistrements possèdent les mêmes types d'informations, les mêmes **descripteurs**.

!!! definition "Définition : Descripteur"
    Un **descripteur** correspond au **nom d’une colonne** dans une table. Il identifie le type d’information stocké dans cette colonne.

    *Exemple : Dans la table d'élèves précédente, les descripteurs sont `"ID"`, `"Nom"`, `"Âge"` et `"Moyenne"`.*

Il sera également nécessaire que la table soit complète : chaque **enregistrement** doit posséder une **valeur** pour chaque **descripteur**.

!!! definition "Définition : Valeur"
    Une **valeur** est une donnée individuelle stockée dans une **cellule** de la table. Elle correspond à l’intersection entre une ligne et un descripteur.

    *Exemple : `"Alice"` est une valeur pour le descripteur `"Nom"`, **16** est une valeur pour le descripteur `"Âge"`.*

#### **Pourquoi utiliser des tables ?** 📌
Structurer les données sous forme de table présente plusieurs **avantages** :

- **Clarté et lisibilité** : les données sont organisées de manière tabulaire, ce qui les rend faciles à lire et interpréter.
- **Manipulation efficace** : il est simple d’effectuer des opérations comme le tri, la recherche ou la sélection de certaines lignes.
- **Interopérabilité** : les formats tabulaires (comme CSV) sont largement utilisés dans les bases de données, les tableurs et les logiciels de traitement de données.
- **Automatisation** : avec un langage comme **Python**, il est facile d’automatiser des tâches de traitement et d’analyse de grandes quantités de données.

!!! note "Représentation des tables en Python"
    Plusieurs structures de données peuvent être utilisées pour représenter un enregistrement d'une table en Python :
    
    - **Un tuple** : `(2, "Bob", 17, 13.2)`
    - **Une liste** : `[2, "Bob", 17, 13.2]`
    - **Un dictionnaire** : `{ "ID": 2, "Nom": "Bob", "Âge": 17, "Moyenne": 13.2 }`

    Le **dictionnaires** est généralement le plus pratique, car il permet un accès **direct aux valeurs par descripteur**, plutôt que par position d’index.

    Une table complète peut donc être représentée sous forme de **liste de dictionnaires** : 

    ```python 
    table = [
        {"ID": 1, "Nom": "Alice", "Âge": 16, "Moyenne": 15.8},
        {"ID": 2, "Nom": "Bob", "Âge": 17, "Moyenne": 13.2},
        {"ID": 3, "Nom": "Clara", "Âge": 16, "Moyenne": 17.5}
    ]
    ```

!!! info "À retenir !"
    * Une **table** est une collection (un ensemble) d'**enregistrements**.
    * Chaque **enregistrement** contient une **valeur** pour chaque **descripteur** de la table.
    * En **Python**, la **liste de dictionnaires** est souvent le meilleur choix pour représenter une table, car elle permet un accès rapide aux valeurs via les **descripteurs**.

---