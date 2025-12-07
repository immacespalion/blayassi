---
title: Calculer la somme des premiers d'une suite arithmétique
weight: 2
---

# Calculer la somme des premiers d'une suite arithmétique

## Comment faire ?

!!! methode "Comment calculer la somme des premiers d'une suite arithmétique ?"
    On veut calculer la somme $\textcolor{gray}{10 + 13 + 16 + \dots + 163}$.  
    

    1. **On vérifie qu'il s'agit bien d'une suite arithmétique**

        Il s’agit bien des termes d’une suite arithmétique puisqu’il faut ajouter 3 pour passer d’un terme à l’autre.

    1. **On identifie le premier terme, le dernier terme et le nombre de termes** :

        Ici le premier terme est $\textcolor{gray}{u_0 = 10+3\times 0 = 10}$.

        Le dernier terme est $\textcolor{gray}{u_{51} = 10 + 3\times 51 = 163}$

        Et il y a donc 52 termes dans la somme. 
    
    3. **On calcule la somme** :

        <div style="text-align: center;">
        $\textcolor{gray}{\begin{aligned}
            S &= 10 + 13 + 16 + \dots + 163 \\
            &= \dfrac{(u_0+u_{51})\times (51-0+1)}{2} \\
            &= \dfrac{(10+163)\times 52}{2} \\
            &= 4498
        \end{aligned}}$
        </div>

## S'entrainer ! 

<iframe src="https://coopmaths.fr/alea/?EEEE2e0a29491818281a26c60f22272e13461dc2133216230f2717ea0f1d17e612c72922132b26f117e60f2f181a2a762e5e0f1e2d0a13fe133612d112c72d9a2d9d27921a6e2a742e0127c7111925f02d3c2ae2278027562cf82c1327c2294a2cdc11110e8714c715d22b3e11202dfe2d96110e2cd22d992a9a139e1a400e8714d6169929562dfa" class="exerciseur" allowfullscreen></iframe>
