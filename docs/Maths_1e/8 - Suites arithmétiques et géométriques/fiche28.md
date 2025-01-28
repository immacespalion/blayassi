---
title: Calculer la somme des premiers termes d'une suite géométrique
weight: 5
---

# Calculer la somme des premiers termes d'une suite géométrique

## Comment faire ?

!!! methode "Comment calculer la somme des premiers termes d'une suite géométrique ?"
    On veut calculer la somme $\textcolor{gray}{S = -3 + 9 - 27 + 81 - 243 + 729}$.

    1. **On s'assure qu'il s'agit bien d'une suite géométrique :**

        Ici, on remarque qu'il faut multiplier par -3 pour passer d'un terme à l'autre. Il s'agit donc bien d'une suite géométrique.

    2. **On identifie le premier terme, la raison et le nombre de terme :**

        Ici, le premier terme est $\textcolor{gray}{u_1 = (-3)^1 = -3}$.

        Le dernier terme est $\textcolor{gray}{u_6 = (-3)^6 = 729}$.

        Et la raison de la suite est $\textcolor{gray}{q = -3}$.

    3. **On utilise la formule pour calculer la somme :**

        <div style="text-align: center;">
        $\textcolor{gray}{\begin{aligned}
            S &= -3 + 9 - 27 + 81 - 243 + 729 \\
            &= (-3)^1 + (-3)^2 + \dots + (-3)^6 \\
            &= (-3) \times \dfrac{1 - (-3)^6}{1 - (-3)} \\
            &= 546
        \end{aligned}}$
        </div>

## S'entrainer !

<iframe src="https://coopmaths.fr/alea/?EEEE2e0a294917ee159125fe0f22272e13461dc2133216240f2717ea0f1d17e612c72922132b26f117e60f2f181a2a762e5e0f1e2d0a13fe133612d112c72d9a2d9d27921a6e2a742e0127c7111925f02d3c2ae2278027562cf82c1327c2294a2cdc112127c72ada2cf82716139e13a02e0327802d42295927802842139e1a400e8714d616942a9a139e1a400e8714d616992cd22c7a0065" class="exerciseur" allowfullscreen></iframe>

