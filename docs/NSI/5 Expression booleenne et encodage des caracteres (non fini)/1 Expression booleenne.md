---
title: Expression booléenne
weight: 1
---

## Expression booléenne 🧩

Les **expressions booléennes** sont au cœur de la logique informatique.  
Elles permettent à la machine de **prendre des décisions** : exécuter un bloc de code ou non, répéter une boucle, etc.

Une expression booléenne est une **formule logique** qui peut prendre seulement deux valeurs :  
**Vrai (`True`)** ou **Faux (`False`)**.

---

## Les valeurs booléennes (rappel)

!!! definition "Définition"
    Une **valeur booléenne** (ou booléen) est une donnée qui ne peut prendre que deux valeurs possibles :

    - `True` (vrai)
    - `False` (faux)

Ces valeurs apparaissent souvent à la suite de **comparaisons** :

```python linenums="1"
x = 5
print(x > 3)    # True
print(x == 10)  # False
```

!!! python "Conversions booléennes"
    Il est possible d'effectuer des conversions entiers/booléen à l'aide des fonction `int` ou `bool` :

    - `int(True)` → 1
    - `int(False)` → 0
    - `bool(0)` → `False`
    - `bool(1)` → `True`
    - Tout nombre **non nul** est considéré comme `True`.

---

## Les opérateurs logiques : and, or, not, xor

Pour combiner plusieurs conditions, on utilise des opérateurs logiques.
Ils permettent de créer des expressions plus complexes.

!!! definition "Définition : opérateurs logiques"
    Les **opérateurs logiques** (ou opérateurs booléens) sont des opérations mathématiques qui relient deux variables booléennes.
    
    Les principaux opérateurs logiques sont :

    | **Opérateur** | **Signification** | **Notation Python** | **Autres notations** | **Résultat si** |
    |:--------------|:------------------|:-------------|:-------------|:----------------|
    | `and`         | ET logique        | `A and B`    | &, ∧ ou · | Vrai si A **et** B sont vrais |
    | `or`          | OU logique        | `A or B`     | ∥, ∨ ou + | Vrai si A **ou** B est vrai |
    | `not`         | NON logique       | `not A`      | ˜, ¬ ou ! | Vrai si A est faux |
    | `xor`         | OU exclusif       | `A != B` ou `A ^ B` | ⊕ ou ⊻ | Vrai si **exactement un seul** est vrai |

!!! definition "Définition : Tables de vérité"
    Une **table de vérité** permet de représenter le résultat d’un opérateur logique selon les valeurs des variables.

    <div align="center">

    | **A** | **B** | **A and B** | **A or B** | **A xor B** | **not A** |
    |:------:|:------:|:------------:|:-----------:|:------------:|:------------:|
    | False | False | False | False | False | True |
    | False | True | False | True | True | True |
    | True | False | False | True | True | False |
    | True | True | True | True | False | False |

    </div>

!!! warning "Caractère séquentiel (évaluation paresseuse)"
    En Python, les opérateurs `and` et `or` n’évaluent pas toujours les deux expressions.

    - `A and B` → si `A` est faux, alors `B` **n’est pas évalué** (le résultat sera forcément faux).  
    - `A or B` → si `A` est vrai, alors `B` **n’est pas évalué** (le résultat sera forcément vrai).

    Voici un petit programme mettant en évidence ce caractère séquentiel : 

    ```python linenums="1"
    def test():
        print("évalué")
        return True

    False and test()  # Rien ne s'affiche
    True or test()    # Rien ne s'affiche
    ```

    👉 Ce comportement s’appelle **l’évaluation paresseuse** (lazy evaluation).  
    Il permet d’**optimiser** le temps d’exécution et d’**éviter des erreurs** inutiles.

---

## Étudier une expression booléenne : méthode générale

!!! definition "Définition : Table de vérité (généralisation)"
    Une **table de vérité** est un tableau qui présente toutes les combinaisons possibles de valeurs pour les variables logiques d’une expression, et le résultat de cette expression.

!!! methode "Méthode pour construire une table de vérité"
    1. Lister les variables utilisées (ex : A, B, C).
    2. Énumérer toutes les combinaisons possibles de 0 et 1 (il y a $2^n$ lignes pour $n$ variables).
    3. Évaluer l’expression pour chaque combinaison.

=== "Exemple 1"

    Expression : `(A or B) and not(C)`

    <div align="center">

    | A | B | C | not(C) | (A or B) | Résultat final |
    |:-:|:-:|:-:|:-------:|:---------:|:----------------:|
    | 0 | 0 | 0 | 1 | 0 | 0 |
    | 0 | 0 | 1 | 0 | 0 | 0 |
    | 0 | 1 | 0 | 1 | 1 | 1 |
    | 0 | 1 | 1 | 0 | 1 | 0 |
    | 1 | 0 | 0 | 1 | 1 | 1 |
    | 1 | 0 | 1 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 1 | 1 | 1 |
    | 1 | 1 | 1 | 0 | 1 | 0 |

    </div>

=== "Exemple 2"

    Expression : `(A and B) or (not A and not B)`

    <div align="center">

    | A | B | not A | not B | (A and B) | (not A and not B) | Résultat |
    |:-:|:-:|:-:|:-:|:-:|:-:|:-:|
    | 0 | 0 | 1 | 1 | 0 | 1 | 1 |
    | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
    | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
    | 1 | 1 | 0 | 0 | 1 | 0 | 1 |

    </div>

    → On remarque que cette expression est vraie lorsque A et B ont la même valeur.

!!! tip "Astuce"
    Les tables de vérité servent aussi à :

    - vérifier l’équivalence de deux expressions logiques,
    - simplifier une expression compliquée,
    - ou déterminer les conditions de déclenchement d’un algorithme.

---

## Expressions booléennes en pratique

Les expressions booléennes sont partout dans les programmes : dans les conditions, les boucles, les tests d’erreur…

!!! example "Exemples simples"
    Voici quelques exemples que nous avons déjà rencontrés : 

    ```python linenums="1" title="Vérifier si un nombre est pair et positif"
    n = 6
    if n % 2 == 0 and n > 0:
        print("n est pair et positif")
    ```

    ```python linenums="1" title="Vérifier si un âge est dans une tranche"
    age = 17
    if 13 <= age <= 19:
        print("C’est un adolescent")
    ```

    ```python linenums="1" title="Vérifier si une valeur est en dehors d’un intervalle"
    age = 17
    x = 12
    if not (0 <= x <= 10):
        print("x n’est pas compris entre 0 et 10")
    ```

!!! warning "Erreurs fréquentes"
    - Oublier les parenthèses peut modifier le résultat d’une expression.
    - `and` est prioritaire sur `or` → toujours clarifier avec des parenthèses.
    - Ne pas confondre `=` (affectation) et `==` (comparaison) !

---

## À retenir 📌

!!! info "Résumé de la partie"
    - Une **expression booléenne** renvoie toujours `True` ou `False`.
    - Les **opérateurs logiques** (ou opérateurs booléens) sont des opérations mathématiques reliant deux variables booléennes.
    - `and` → et
    - `or` → ou (inclusif)
    - `not` → non
    - `xor` → ou (exclusif)
    - On peut étudier une expression grâce à une **table de vérité**.
    - En Python, `and` et `or` utilisent une évaluation séquentielle et `and` est prioritaire. 
    - Les booléens permettent à la machine de raisonner et décider.