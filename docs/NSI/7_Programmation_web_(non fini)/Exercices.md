---
title: Exercices
weight: 10
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

## HTML - Principe et premières balises

!!! exoordi "Exercice 1 - :fontawesome-solid-star: :fontawesome-regular-star: :fontawesome-regular-star:"
    Rechercher sur le web les balises HTML permettant de : 
    
    1. Mettre un mot en gras
    2. Mettre un mot en italique
    3. Mettre un mot en style `code`
    4. Mettre un mot en exposant

    ??? success "Correction"
        1. `<strong>`
        2. `<em>`
        3. `<code>`
        4. `<sup>`
   
!!! exoordi "Exercice 2 - :fontawesome-solid-star: :fontawesome-solid-star: :fontawesome-regular-star:"
    Compléter le code nécessaire entre les deux balises `<body>` et `</body>` afin d'avoir une prévisualisation qui ressemble à l'image ci-dessous (le copier/coller ne fonctionnera pas sur l'image, les pointillés sont à remplacer par son nom).

    ![image](../../files/NSI/HTML/Balises_Exo1.png)

    ---

    {{ html_playground("demo", "<!DOCTYPE html>
<html lang=\"fr\">
    <head>
        <meta charset=\"utf-8\">
        <title>Premières balises</title>
    </head>
    <body>
        Bonjour...
    </body>
</html>") }}

    ??? success "Correction"

        ```html linenums="1"
        <!DOCTYPE html>
        <html lang="fr">
            <head>
                <meta charset="utf-8">
                <title>Premières balises</title>
            </head>
            <body>
                <p>
                    Bonjour à tous.<br>
                    Je m'appelle ... et je suis ici pour m'exercer en <strong>HTML</strong>.
                </p>
                <p>
                    Dans cet exercice, je code mon 1<sup>er</sup> fichier <code>.html</code>.
                    Vivement que l'on puisse insérer des images, créer des liens
                    vers d'autres pages et utiliser de jolies couleurs grâce au
                    <strong>CSS</strong>.
                </p>
            </body>
        </html>
        ```

!!! exoordi "Exercice 3 - :fontawesome-solid-star: :fontawesome-solid-star: :fontawesome-regular-star:"
    Avant tout, commencez par créer un répertoire nommé `Site_exo_3` (par exemple) dans lequel vous pourrez stocker les différents fichiers conçus au cours de cet exerice. 

    1. Lancez un éditeur de texte
    2. Créez un nouveau fichier.
    3. L'`enregistrer sous...` le nom `essai01.html` dans votre répertoire. 
        
        ⚠️ Vérifiez que le type de ce fichier est `Hyper Text Markup Language`.
    4. Allez dans le répertoire dans lequel vous avez sauvegardé ce fichier puis double-cliquer sur essai01.html. Normalement le navigateur internet doit s'ouvrir… sur une page blanche. Si oui, fermez cette page, sinon, recommencez depuis la question 1°/.

!!! exoordi "Exercice 4 - :fontawesome-solid-star: :fontawesome-solid-star: :fontawesome-solid-star:"
    Repérer et corriger toutes les erreurs de syntaxe dans le code ci-dessous.
    
    Le rendu final doit correspondre à l'image ci-dessous : 

    ![rendu final](../../files/NSI/HTML/rendu_exo4.png)

    ---

    {{ html_playground("demo", "<!DOCTYPE html>
<html lang=\"fr\">
    <head>
        <meta charset=\"utf-8\">
        <title>Corriger les erreurs</title>
    </head>
    <body>
        <p>Créer des exemples de fichier <code>.html<code> est souvent
		<strong>fastidieux.</p></strong>
		<p>En effet, outre les </em>problèmes de balises<em>, il faut
		aussi inventer un 1<sup>er</sup> voire un 2<sub>nd</sup> texte
		à insérer dans les balises.
		</p>
    </body>
</html>") }}

    ??? success "Correction"

        ```html linenums="1"
        <!DOCTYPE html>
        <html lang="fr">
            <head>
                <meta charset="utf-8">
                <title>Corriger les erreurs</title>
            </head>
            <body>
                <p>
                Créer des exemples de fichier <code>.html</code> est souvent
                <strong>fastidieux.</strong>
                </p>
                <p>
                En effet, outre les <em>problèmes de balises</em>, il faut aussi
                inventer un 1<sup>er</sup> voire un 2<sup>nd</sup> texte à insérer
                dans les balises.
                </p>
            </body>
        </html>
        ```

!!! exoordi "Exercice 5 - :fontawesome-solid-star: :fontawesome-solid-star: :fontawesome-solid-star:"
    A l'aide d'un éditeur de texte, créer un fichier simple `.html`, nommé `favoris.html` avec pour contenu les informations suivantes :

    - Nom et Prénom en gras
    - Le texte suivant : Sites utiles en NSI

---

## HTML - Titres, listes et balises génériques