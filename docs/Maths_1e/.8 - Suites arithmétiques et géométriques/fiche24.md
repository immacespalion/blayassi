---
title: Démontrer qu'une suite est arithmétique
weight: 1
---

# Démontrer qu'une suite est arithmétique

## Comment faire ?

!!! methode "Comment démontrer qu'une suite est arithmétique ?"
    On considère les suites $(u_n)$ et $(v_n)$ définies sur $\mathbb{N}$ par : 

    <div style="text-align: center;">
    $\textcolor{gray}{\left\lbrace \begin{aligned}
    & u_0 = 2 \\
    & u_{n+1} = u_n + 6
    \end{aligned}\right. \ \ \ \ \ \text{et} \ \ \ \ \  v_n = -5n^2 + 7}$ 
    </div>

    Ces suites sont-elles arithmétiques ?  

    1. **On calcule la différence $u_{n+1} - u_n$** :  
       
        <div style="text-align: center;">
            $\textcolor{gray}{\begin{aligned}
            u_{n+1} - u_n &= (u_n + 6) - u_n &\quad et \quad& v_{n+1} - v_n &= (-5(n+1)^2 + 7) - (-5n^2 + 7)\\
            &= u_n + 6 - u_n &\quad& &= -5(n^2 + 2n + 1) + 7 + 5n^2 - 7 \\
            &= u_n -u_n -6 &\quad& &= -5n^2 - 10n - 5 + 7 + 5n^2 - 7 \\
            &= 6 &\quad& &= -10n - 5
            \end{aligned}}$
        </div>

    2. **Si la différence est constante et indépendante de $n$, alors la suite est arithmétique de raison $u_{n+1} - u_n$. Sinon, la suite n’est pas arithmétique.**.  

        Ici, $\textcolor{gray}{u_{n+1} - u_n = 6 \in \mathbb{R}}$, donc $(u_n)$ est arithmétique de raison $6$.  
        Par contre, $\textcolor{gray}{v_{n+1} - v_n = -10n - 5}$ (dépend de $n$), donc $(v_n)$ n'est pas arithmétique.


## S'entrainer ! 

#### Calculer la raison d'une suite arithmétique

<iframe src="https://coopmaths.fr/alea/?EEEE2e0a29491819266015f70f22272e13461dc2133214bb2b1614bb272e13350f2c17e611a70f2c13a62da32dfa0f2217e60f1c272e132b2e3627c127cb277b27c817e81336133512d10f2d29592a7617f8263127022a762c942a72111f262e2d3c2b042716139e13a02e0327802d42295927802637295928ee0e8714d813f2139e197e2d9a2c7a0065" class="exerciseur" allowfullscreen></iframe>

#### Donner la forme explicite d'une suite arithmétique

<iframe src="https://coopmaths.fr/alea/?EEEE2e0a2949181713fd26280f22272e13461dc21332151f2b1614bb272e13350f2c17e611a70f2c13a62da32dfa0f1c272e132b2e3627c127cb277b27c817e81336133512d10f2d29592a7617f92bab2b3e2c942a7211132baf2ada11122f312a7a26f62d9611110e8714c715d22b3e11202dfe2d96110e2cd22d992a9a139e1a400e8714d6169929562dfa" class="exerciseur" allowfullscreen></iframe>

#### Calculer les termes d'une suite arithmétique

<iframe src="https://coopmaths.fr/alea/?EEEE2e0a294917e8262a14920f22272e13461dc2133214572b1614bb272e13350f2c17e611a711a80f1c272e132b2e3627c127cb277b27c817e81336133512d10f2d29592a7617f8263127022a762c942a762cf82d962cd627c811110e8714c715d22b3e11202dfe2d96110e2cd22d992a9a139e1a400e8714d6169929562dfa" class="exerciseur" allowfullscreen></iframe>