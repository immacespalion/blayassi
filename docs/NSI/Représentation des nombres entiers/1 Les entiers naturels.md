---
title: Représentation des entiers naturels
weight: 2 
---

# Représentation des entiers en base 2, 8, 10 et 16 🔢

Les ordinateurs ne raisonnent pas comme nous. Ils utilisent des **systèmes de numération différents**, adaptés à leur fonctionnement interne.

---

## Pourquoi plusieurs bases ? 🤔

Avant de découvrir des systèmes de numération utilisés en informatique, il est utile de prendre un moment pour **réfléchir à notre propre manière de compter**.  
On utilise tous les jours des nombres, mais **sait-on vraiment comment notre système fonctionne ?** Pourquoi utilisons-nous ces dix chiffres ? Quelle est l’importance de la position dans un nombre ?

Comprendre cela nous aidera à mieux saisir les bases que nous allons aborder ensuite… et à ne pas les considérer comme des bizarreries informatiques.

### Le système décimal de position 🔟

Le système que nous utilisons tous les jours est appelé **système de numération décimal de position**.

!!! definition "Définition : Système de numération décimal de position"
    Notre système de numération est appelé **système de numération décimal de position** car :  

    - **Décimal** ➝ parce qu’il utilise **10 chiffres** : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9  
    - **De position** ➝ car **la valeur d’un chiffre dépend de sa place** dans le nombre : le **même chiffre** peut avoir **des valeurs différentes** selon sa position.

Prenons par exemple le nombre $343$. Les deux chiffres $3$ n'ont pas la même valeur : 

| Chiffre | Position (puissance de 10) | Valeur |
|---------|-----------------------------|--------|
| 3       | centaines ($10^2$)             | 300    |
| 4       | dizaines ($10^1$)              | 40     |
| 3       | unités ($10^0$)                | 3      |

Donc $343 = 3\times 10^2 + 4\times 10^1 + 3\times 10^0$

!!! info "Comparaison avec des systèmes de numération plus anciens"
    Ce fonctionnement est **très différent** des anciens systèmes comme :

    - Le système égyptien : chaque symbole avait une valeur **fixe**, qu’il soit placé avant ou après.
    - Le système romain : les lettres s’ajoutent ou se soustraient, **mais leur position n’a pas de poids multiplicatif**.

### Définitions des bases

Pour parler du "système postionnel de numération à 10 chiffres", il est courant de parler de **base 10**. Cette notion peut s’étendre à d’autres bases :

!!! definition "Base de numération"
    Une **base n** est un système de numération positionnel comportant $n$ chiffres différents.

Dans la suite, nous travaillerons également avec les trois bases suivantes : 

- La **base 2** (binaire) : utilisé par les ordinateurs qui ne possèdent que deux états possibles : 0 et 1.
- La **base 8** (octale) : plus compacte que la base 2, chaque **chiffre en base 8** correspondant à **3 chiffres** en base 2.
- La **base 16** (hexadécimale) : très utilisée en informatique. Elle permet, entre autres, de lire facilement des nombres binaires, représenter les **adresses mémoire** et les **couleurs en HTML/CSS**, etc.


Ces bases peuvent sembler nouvelles, mais elles suivent les mêmes règles que le système décimal… à une différence près : le nombre de chiffres utilisé.

Voici un tableau récapitulatif : 

| Base | Nom            | Chiffres utilisés        | Exemple du nombre 10 |
|------|----------------|--------------------------|-----------------------|
| 2    | Binaire        | 0, 1                     | $1010_2$                 |
| 8    | Octale         | 0, 1, 2, 3, 4, 5, 6, 7                    | $12_8$                  |
| 10   | Décimale       | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9                   | $123_{10}$                 |
| 16   | Hexadécimale   | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F             | $A8_{16}$                  |

!!! tip "Astuce"
    Comme vous pouvez le voir dans l'exemple précédent, pour différencier la base, on l'**indique en indice**.

!!! definition "Définitions : le bit et l'octet"
    - Le système binaire est donc un système de numération positionnelle utilisant deux chiffres. Ces chiffres sont nommés **bit** (de l'anglais **bi**nary dig**it**, soit "chiffre binaire").

    - Avec $n$ bits, on peut représenter $2^n$ nombres. Dans le cas des entiers naturels, on peut compter de $0$ à $2^n-1$...

    - Un ensemble de 8 bits forme un **octet** (*byte* en anglais)

---

## Convertir un entier naturel vers la base 10 🔁

Un nombre en base 2, 8 ou 16 peut être converti en base 10 en utilisant **la décomposition en puissances de la base**.  
C’est exactement le même principe que celui vu pour le décimal : on décompose selon les puissances de la base.

### Méthode générale 🛠️

Soit un nombre écrit dans une base $b$ (par exemple en base 2, 8 ou 16).  
On décompose ce nombre comme une somme de **chiffres × puissances de la base**, en partant de la droite.

!!! methode "Méthode : Conversion de la base $b$ à la base 10 (théorique)"
    Soit $N$ un entier naturel dont l'écriture en base $b$ est la suivante : $N_b = a_n a_{n-1} ... a_1 a_0$.
    
    Alors : $N_{10} = a_n \times b^n + a_{n-1} \times b^{n-1} + \dots + a_1 \times b^1 + a_0 \times b^0$

### Exemples 

Voici quelques exemples : 

- **Exemple 1 : Binaire vers décimal** 🧮

    Convertir $1011_2$ en base 10

    | Chiffre | Puissance de 2 | Valeur |
    |---------|----------------|--------|
    | 1       | $2^3$ = 8       | 8      |
    | 0       | $2^2$ = 4       | 0      |
    | 1       | $2^1$ = 2       | 2      |
    | 1       | $2^0$ = 1       | 1      |

    Ainsi, $1011_2 = 1\times 2^3 + 0\times 2^2 + 1\times 2^1 + 1\times 2^0 = 8 + 0 + 2 + 1 = 11_{10}$

- **Exemple 2 : Octal vers décimal** 🐙

    Convertir $56_8$ en base 10

    | Chiffre | Puissance de 8 | Valeur |
    |---------|----------------|--------|
    | 5       | $8^1$ = 8       | 40     |
    | 6       | $8^0$ = 1       | 6      |

    Ainsi, $56_8 = 5\times 8^1 + 6 \times 8^0 = 5\times 8 + 6 \times 1 = 40 + 6 = 46_{10}$

- **Exemple 3 : Hexadécimal vers décimal** 🔥

    Convertir $2F_{16}$ en base 10  (`F` correspond à **15** en base 10)

    | Chiffre | Puissance de 16 | Valeur |
    |---------|------------------|--------|
    | 2       | $16^1$ = 16       | 32     |
    | F (=15) | $16^0$ = 1        | 15     |

    Ainsi, $2F_{16} = 2\times 16^1 + 15 \times 16^0 = 2\times 16 + 15\times 1 = 32 + 15 = 47_{10}$

!!! tip "Astuces"
    - Voici quelques puissances utiles à retenir : 
        - $2^0 =1, 2^1 = 2, 2^2 = 4, 2^3=8, 2^4 = 16, 2^5 = 32, 2^6 = 64, 2^7 = 128, 2^8 = 256$, etc.
        - $8^0 = 1$, $8^1 = 8$, $8^2 = 64$, etc.
        - $16^0 = 1$, $16^1 = 16$, $16^2 = 256$, etc.
    - Voici les correspondances entre chiffres hexadécimaux et décimaux :  

        | Base 10 | 10 | 11 | 12 | 13 | 14 | 15 |
        | --- | --- | --- | --- | --- | --- | ---|
        | Base 16 | A | B | C | D | E | F |

--- 

## Convertir un entier naturel de la base 10 vers une autre base 🔄

Convertir un nombre de la base 10 vers une autre base (comme 2, 8 ou 16), c’est exprimer ce nombre **comme une somme de puissances décroissantes de la nouvelle base**.  
Mais au lieu de faire la décomposition "à la main", on utilise une méthode **plus rapide** : la **division euclidienne répétée**.

### Méthode générale 🛠️

!!! methode "Méthode : Conversion de la base 10 vers la base $b$"
    Pour convertir un entier naturel $N$ en base $b$ :
    
    1. Diviser $N$ par $b$ et noter le **reste**.
    2. Diviser le **quotient obtenu** par $b$, et noter à nouveau le reste.
    3. Répéter jusqu’à ce que le quotient soit nul.
    4. **Lire les restes de bas en haut** : cela donne le nombre en base $b$.

### Exemples 

Comme précédemment, voici quelques exemples pratiques : 

- Exemple 1 : Décimal → Binaire 🧮

    Convertir $13_{10}$ en base 2 :

    | Étape | Division         | Quotient | Reste |
    |-------|------------------|----------|-------|
    | 1     | $13 ÷ 2$         | 6        | 1     |
    | 2     | $6 ÷ 2$          | 3        | 0     |
    | 3     | $3 ÷ 2$          | 1        | 1     |
    | 4     | $1 ÷ 2$          | 0        | 1     |

    Lecture des restes de bas en haut → **$13_{10} = 1101_2$**

- Exemple 2 : Décimal → Octal 🐙

    Convertir $46_{10}$ en base 8 :

    | Étape | Division         | Quotient | Reste |
    |-------|------------------|----------|-------|
    | 1     | $46 ÷ 8$         | 5        | 6     |
    | 2     | $5 ÷ 8$          | 0        | 5     |

    Lecture des restes de bas en haut → **$46_{10} = 56_8$**

- Exemple 3 : Décimal → Hexadécimal 🔥

    Convertir $47_{10}$ en base 16 :

    | Étape | Division         | Quotient | Reste |
    |-------|------------------|----------|-------|
    | 1     | $47 ÷ 16$        | 2        | 15    |
    | 2     | $2 ÷ 16$         | 0        | 2     |

    Rappel : **15 en hexadécimal = F**  
    Lecture des restes de bas en haut → **$47_{10} = 2F_{16}$**

### Avec Python

Nous aurons l'occasion de programmer nous même des fonctions permettant d'effectuer des conversions entre les différentes bases. Toutefois, la bibliothèque Python possède déjà des fonctions permettant des conversions de la base 10 vers les bases 2 et 16. 

!!! python "Fonctions `bin` et `hex`"
    - `bin(i)` convertit un nombre entier `i` en binaire dans une chaine de caractère avec le préfixe `0b`.

        Par exemple, `bin(11)` renvoie `'0b1011'`. Ainsi $11_{10} = 1011_2$.

    - `hex(i)` convertit un nombre entier `i` en hexadécimal dans une chaine de caractère avec le préfixe `0x`.

        Par exemple, `hex(195)` renvoie `0xc3`. Ainsi, $195_{10}=C3_{16}$

    - `int(chaine, base)` convertit la chaine écrite dans la base passée en paramètre en un nombre entier décimal.

        Par exemple, `int('1110', base=2)` renvoie `14` et `int('1110', base=16)` renvoie `4368`.

--- 

## Addition et multiplication posée dans une base ➕

Jusqu’à présent, nous avons appris à **représenter les entiers dans différentes bases**.  
Mais que se passe-t-il lorsqu’on veut **effectuer des calculs**, comme une addition ou une multiplication ?  
Pas besoin d’algorithmes complexes : on peut **poser les opérations**, comme en base 10… en suivant les règles de la base !

Dans cette partie, nous allons voir comment effectuer :
- une **addition posée**
- une **multiplication posée**
dans une base quelconque, en particulier **la base 2**.

### Addition posée 🔢

Poser une addition dans une base, c’est appliquer **les mêmes étapes** qu’en base 10 : on **ajoute colonne par colonne**, en partant de la droite, et on **garde la retenue** pour la colonne suivante.

En base 2, il n’y a que deux chiffres : **0** et **1**. On obtient donc :

| $a$ | $b$ | $a + b$ | Retenue ? | Résultat |
|----|-----|---------|-----------|----------|
| 0  | 0   | 0       | 0         | 0        |
| 0  | 1   | 1       | 0         | 1        |
| 1  | 0   | 1       | 0         | 1        |
| 1  | 1   | 2       | 1         | 0        |
| 1  | 1 + 1 retenue | 3         | 1         | 1        |

!!! methode "Méthode : Addition posée dans une base $b$"
    1. Aligner les deux nombres.
    2. Additionner **chiffre par chiffre**, en partant de la droite.
    3. Si la somme dépasse la base $b$, on **garde le reste** et on **retient 1**.
    4. Ajouter la **retenue** à la colonne suivante.

Prenons pour exemple, la somme suivante : $1011_2 + 1101_2$

On pose l'addition colonne par colonne, avec les retenues au-dessus :

\[
\begin{array}{ccccc}
  & (1) & (1) & (1) & (1) \\
  & 1 & 0 & 1 & 1 \\
+ & 1 & 1 & 0 & 1 \\
\hline
1 & 1 & 0 & 0 & 0
\end{array}
\]

Donc : $1011_2 + 1101_2 = \boxed{11000_2}$

### Multiplication posée ✖️

La multiplication posée fonctionne de la **même façon qu’en base 10** :

1. On **multiplie chaque chiffre du second nombre** par l’ensemble du premier.
2. On **décale** chaque ligne d’un cran vers la gauche.
3. On **additionne** toutes les lignes intermédiaires.

!!! methode "Méthode : Multiplication posée dans une base $b$"
    1. Multiplier chaque chiffre du second nombre (de droite à gauche) par tous les chiffres du premier.
    2. Appliquer les règles de la base pour chaque multiplication.
    3. Décaler chaque ligne comme en base 10.
    4. Faire la somme finale.

Prenons pour exemple le produit suivant : $101_2 \times 11_2$.

On décompose le calcul ligne par ligne, puis on additionne :

\[
\begin{array}{ccccc}
      &      & 1 & 0 & 1 \\
\times&      &   & 1 & 1 \\
\hline
      &      & 1 & 0 & 1 \\
+     &    1 & 0 & 1 &   \\
\hline
      & 1    & 1 & 1 & 1 
\end{array}
\]

Donc :  $101_2 \times 11_2 = \boxed{1111_2}$

### Astuces et erreurs fréquentes ❗

!!! warning "Attention aux erreurs fréquentes"
    - **Oublier la retenue** lors d’une addition → résultat faux
    - **Ne pas regrouper les bits par 4** lors de conversion hexadécimale (erreur classique)
    - **Mal décaler** les lignes lors d’une multiplication
    - Penser que $1 + 1 = 1$ en binaire… alors que c’est $10_2$ (retenue obligatoire)
    - Ne pas **vérifier le résultat en base 10** : toujours utile en contrôle 😉

---

## En résumé

Voici une carte mentale qui vous résume les différentes méthodes à utiliser pour convertir un entier naturel d'une base à l'autre. 

![Carte mentale résumé de cette partie](../../files/NSI/Numeration/cartementale.png)

Nous savons désormais :

- [x] Représenter **n’importe quel entier naturel** dans les bases 2, 8, 10 et 16  
- [x] **Convertir un entier** d’une base à une autre (base 10 → autre base et inversement)  
- [x] Lire et écrire **des nombres binaires, octaux et hexadécimaux**  
- [x] Réaliser des **additions et multiplications posées** dans une base donnée (notamment la base 2)

Ces compétences sont essentielles pour aborder la suite : la **représentation des entiers relatifs**.