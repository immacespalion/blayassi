---
title: Exercices
weight: 6
---

# Exercices 

Vous trouverez ci-dessous les exercices de cette séquence.

- Les exercices marqués avec :fontawesome-solid-pencil: se réalisent **sans ordinateur**.  
  Ceux indiqués par :fontawesome-solid-laptop: nécessitent **un ordinateur**.

- Le **niveau de difficulté** est indiqué par des étoiles :  
    <ul style="list-style: none;">
        <li>:fontawesome-solid-star: :fontawesome-regular-star: :fontawesome-regular-star: → Exercices pour **s'approprier les notions**.</li>
        <li>:fontawesome-solid-star: :fontawesome-solid-star: :fontawesome-regular-star: → Exercices pour **renforcer vos compétences**.</li>
        <li>:fontawesome-solid-star: :fontawesome-solid-star: :fontawesome-solid-star: → Exercices pour vous **challenger** et tester vos acquis.</li>
    </ul>

Les corrections sont généralement disponibles, mais elles ne doivent être consultées **qu'après validation de votre production par l'enseignant**.

---

## Tables de données

!!! exopapier "Exercice 1 - :fontawesome-solid-star: :fontawesome-regular-star: :fontawesome-regular-star:"
    On donne l'affectation suivante : 

    ```python
    billets = [
        {'nom': 'Riton', 'dest': 'Rio'},
        {'nom': 'Rita', 'dest': 'Roanne'},
        {'nom': 'Florence', 'dest': 'Florence'},
    ]
    ```

    1. Quelle expression Python a pour valeur `Riton` après cette affectation ? 
        - `billet['Riton']`
        - `billets['Riton'][0]`
        - `nom[0]['billets']`
        - `billets[0]['nom']`

    2. Qu'affiche le programme Python suivant après l'affectation ci-dessus ?

        ```python
        for i in range(len(billets)):
            if billets[i]['noms'] == billets[i]['dest']:
                print(i)
        ```

    ??? success "Correction"
        1. `billets[0]['nom']` puisque `Riton` correponds au `nom` du premier enregistrement de la table (indice 0).

        2. Un seul enregistrement correspond au critère de sélection : `Florence` qui va à `Florence`. Son enregistrement étant le 3e de liste, son indice `i` sera donc 2.

!!! exopapier "Exercice 2 - :fontawesome-solid-star: :fontawesome-solid-star: :fontawesome-regular-star:"
    Qu'affiche le programme Python suivant ?

    ```python
    voyages = [
        {'nom': 'Riton', 'dest': 'Rio'},
        {'nom': 'Rita', 'dest': 'Roanne'},
        {'nom': 'Florence', 'dest': 'Florence'},
    ]

    durees = {
        {'dest': 'Rio', 'nbheures': 12},
        {'dest': 'Roanne', 'nbheures': 1},
    }

    for i in range(len(voyages)):
        for j in range(len(durees)):
            if voyages[i]['dest'] == durees[j]['dest'] and durees[j]['dest'] >= 2 :
                print(voyages[i]['nom'])
    ```

    ??? success "Correction"
        Seul le voyage à Rio dure plus de 2 heures (n'ayant pas d'information pour Florence). Ainsi,  le programme affichera uniquement `Riton`.

!!! exopapier "Exercice 3 - :fontawesome-solid-star: :fontawesome-regular-star: :fontawesome-regular-star:"
    Trouver toutes les erreurs de syntaxe dans le fichier CSV ci-dessous : 

    ```CSV linenums="1"
    Titre,Auteur,Extrait,Année 
    Air vif,Eluard,J'ai regardé devant moi,1951
    Je vis...,Labé,J'ai chaud extrême en endurant froidure
    Heureux..,du Bellay,Heureux qui comme Ulysse, à fait...,1552
    "La voix,Baudelaire,Mon berceau s'adossait...",1857
    ```

    ??? success "Correction"
        Ligne 1 : ok

        Ligne 2 : ok

        Ligne 3 : Il manque la valeur pour `Année` : `Je vis...,Labé,J'ai chaud extrême en endurant froidure,1555`


        Ligne 4 : La virgule dans la citation va poser problème puisqu'il s'agit également du délimiteur. Il faut entourer la citation de guillemets : `Heureux..,du Bellay,"Heureux qui comme Ulysse, à fait...",1552`

        Ligne 5 : Les guillemets sont mals positionnés. Lors que l'importation, seul `Titre` et `Auteur` auront une valeur. Version rectifiée : `La voix,Baudelaire,Mon berceau s'adossait...,1857`

!!! exopapier "Exercice 4 - :fontawesome-solid-star: :fontawesome-regular-star: :fontawesome-regular-star:"
    On souhaite stocker dans une table l'inventaire d'un magasin.
    
    Ce dernier vend des biens dont il possède une certaine quantité en stock.Les produits peuvent être indisponibles (épuisés chez le fournisseur) et être en vente libre ou non. Proposer des noms de descripteurs et types Python pour une telle table d'inventaire.

    ??? success "Correction"
        - **produit** : le nom du produit (*chaine de caractères*)
        - **prix** : le prix du produit (*nombre flottant*)
        - **quantité** : la quantité d'exemplaire en stock magasin (*nombre entier*)
        - **épuisé** : indique si le produit est toujours en stock fournisseur (*booléen*)
        - **libre** : indique si le produit est en vente libre (*booléen*)

!!! exopapier "Exercice 5 - :fontawesome-solid-star: :fontawesome-regular-star: :fontawesome-regular-star:"
    On considère la table suivante :

    | réf. | désignation | prix | qté |
    | ---  | ---         | ---  | --- |
    |18635 | lot crayons HB | 2,30 | 1 |
    |15223 | stylo rouge | 1,50 | 3   |
    |20112 | cahier petits carreaux | 3,50 | 2 |

    Écrire cette table au format CSV

    ??? success "Correction"
        Avec pour délimiteur le symbole `;` : 

        ```CSV
        réf.;désignation;prix;qté
        18635;lot de crayons HB;2,30;1
        15223;stylo rouge;1,50;3
        20112;cahier petits carreaux;3,50;2
        ```

        Avec pour délimiteur le symbole `,` : 

        ```CSV
        réf.;désignation;prix;qté
        18635,lot de crayons HB,"2,30",1
        15223,stylo rouge,"1,50",3
        20112,cahier petits carreaux,"3,50",2
        ```

!!! exoordi "Exercice 6 - :fontawesome-solid-star: :fontawesome-regular-star: :fontawesome-regular-star:"
    1. Télécharger ce fichier : [pokedex.csv :fontawesome-solid-file-csv:](../../files/NSI/CSV/pokedex.csv)
    2. Ouvrir ce fichier CSV avec LibreOffice Calc. Observer l'importance de préciser les délimitateurs.
    3. L'ouvrir ensuite avec un éditeur de texte pour observer sa construction.

!!! exoordi "Exercice 7 - :fontawesome-solid-star: :fontawesome-regular-star: :fontawesome-regular-star:"
    1. Ouvrir LibreOffice Calc et créer un tableau ayant 3 colonnes : $n$, $n^2$ et $n^3$ et 21 lignes (descripteurs + $n$ allant de 1 à 20).

    2. Enregistrer le fichier

    3. Aller dans le menu `Fichier` puis `Enregistrer sous` et enfin choisir `text csv`. Choisir la virgule comme séparateur.

    4. Ouvrir ensuite le fichier `csv` ainsi créé avec un éditeur de texte et observer la structure du document.

!!! exoordi "Exercice 8 - :fontawesome-solid-star: :fontawesome-solid-star: :fontawesome-regular-star:"
    1. Télécharger ce fichier : [pokedex.csv :fontawesome-solid-file-csv:](../../files/NSI/CSV/pokedex.csv)
    2. Copier et exécuter ce code : 

        ```python
        import csv

        with open('pokedex.csv') as fichier: #On charge le document CSV dans une variable "fichier"
            table = []
            for enregistrement in csv.DictReader(fichier, delimiter=';'): #On applique la fonction "DictReader" au fichier en précisant le délimiteur 
                table.append(dict(enregistrement))
        ```
    3. Contrôler que la variable `table` est bien une liste de dictionnaire.

    4. Le code précédent construit la liste `table` par ajouts successifs. Transformer le code pour la construire en compréhension.

    ??? success "Correction"
        Question 4 :

        ```python 
        import csv

        with open('pokedex.csv') as fichier: #On charge le document CSV dans une variable "fichier"
            table = [enregistrement for enregistrement in csv.DictReader(fichier, delimiter=";")]
        ```



---

## Manipulation et traitement