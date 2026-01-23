---
title: Déterminer le cosinus et le sinus d'un réel
weight: 1
---

# Déterminer le cosinus et le sinus d'un réel

## Comment faire ?

!!! methode "Comment déterminer la mesure principale d’un angle ?"

    On prendra pour exemple l’angle de mesure $\textcolor{gray}{\frac{13\pi}{4}}$ rad.

    1. **Déterminer, si nécessaire, la mesure principale de l'angle (voir fiche 11)** 

        Ici, $\textcolor{gray}{\frac{13\pi}{4} \notin ] -\pi ; \pi ]}$ donc on doit déterminer la mesure principale.

        $$
        \textcolor{gray}{\frac{13\pi}{4} - 2\pi = \frac{5\pi}{4} \notin ] -\pi ; \pi ]}
        $$

        On continue :

        $$
        \textcolor{gray}{\frac{5\pi}{4} - 2\pi = \frac{-3\pi}{4} \in ] -\pi ; \pi ]}
        $$

        L’angle de mesure $\textcolor{gray}{\frac{13\pi}{4}}$ rad correspond donc à l’angle de mesure principale **$\textcolor{gray}{\frac{-3\pi}{4}}$**.

    2. **Si la mesure de l’angle fait partie des valeurs remarquables, on conclut. Sinon, on utilise lesangles as sociés (symétrie sur le cercle) pour déterminer le cosinus et le sinus.**

        Les angles de mesures $\textcolor{gray}{\frac{-3\pi}{4}}$ et $\textcolor{gray}{\frac{\pi}{4}}$ sont symétriques par rapport à l’origine.

        Ainsi :

        $$
        \textcolor{gray}{\cos \left(\textcolor{gray}{\frac{13\pi}{4}}\right) = \cos \left(\textcolor{gray}{\frac{-3\pi}{4}}\right) = -\cos \left(\textcolor{gray}{\frac{\pi}{4}}\right) = \textcolor{gray}{-\frac{\sqrt{2}}{2}}}
        $$

        De même :

        $$
        \textcolor{gray}{\sin \left(\textcolor{gray}{\frac{13\pi}{4}}\right) = \sin \left(\textcolor{gray}{\frac{-3\pi}{4}}\right) = -\sin \left(\textcolor{gray}{\frac{\pi}{4}}\right) = \textcolor{gray}{-\frac{\sqrt{2}}{2}}}
        $$

!!! info "Angles remarquables"
    
    Voici un tableau récapitulatif des valeurs remarquables du cosinus et du sinus pour certains angles courants.

    <div style="display: flex; justify-content: center;">
    <table style="border-collapse: collapse; text-align: center;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Angle</th>
            <th style="border: 1px solid black; padding: 8px;">$0$</th>
            <th style="border: 1px solid black; padding: 8px;">$\dfrac{\pi}{6}$</th>
            <th style="border: 1px solid black; padding: 8px;">$\dfrac{\pi}{4}$</th>
            <th style="border: 1px solid black; padding: 8px;">$\dfrac{\pi}{3}$</th>
            <th style="border: 1px solid black; padding: 8px;">$\dfrac{\pi}{2}$</th>
            <th style="border: 1px solid black; padding: 8px;">$\pi$</th>
            <th style="border: 1px solid black; padding: 8px;">$\dfrac{3\pi}{2}$</th>
            <th style="border: 1px solid black; padding: 8px;">$2\pi$</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;"><b>cos$(x)$</b></td>
            <td style="border: 1px solid black;">$1$</td>
            <td style="border: 1px solid black;">$\dfrac{\sqrt{3}}{2}$</td>
            <td style="border: 1px solid black;">$\dfrac{\sqrt{2}}{2}$</td>
            <td style="border: 1px solid black;">$\dfrac{1}{2}$</td>
            <td style="border: 1px solid black;">$0$</td>
            <td style="border: 1px solid black;">$-1$</td>
            <td style="border: 1px solid black;">$0$</td>
            <td style="border: 1px solid black;">$1$</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black;"><b>sin$(x)$</b></td>
            <td style="border: 1px solid black;">$0$</td>
            <td style="border: 1px solid black;">$\dfrac{1}{2}$</td>
            <td style="border: 1px solid black;">$\dfrac{\sqrt{2}}{2}$</td>
            <td style="border: 1px solid black;">$\dfrac{\sqrt{3}}{2}$</td>
            <td style="border: 1px solid black;">$1$</td>
            <td style="border: 1px solid black;">$0$</td>
            <td style="border: 1px solid black;">$-1$</td>
            <td style="border: 1px solid black;">$0$</td>
        </tr>
    </table>
    </div>

## S'entrainer !

<iframe src="https://coopmaths.fr/alea/?EEEE2e0a294917e9278b15f50f22272e13461e8d12c72b1613350f1d17e612c72d0a14572cff17e2132a139e13ac132b2922132b26f117e60f2f181a2a762e5e0f1e2d0a13ff133612d112c72d9a2d9d27921a96139e1a400e8714d6169927c72ade2b3e2c942a7611102bb029532e0811122d5c2a76112029532e0811110e8714c715d22b042c8e139e1a400e8714d6168a006c" class="exerciseur" allowfullscreen></iframe>