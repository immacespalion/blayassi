---
title: Fusion de tables
weight: 4
---

# Fusion et transformation des tables 🔗

Dans certaines situations, une seule table ne suffit pas.  
On peut avoir besoin de **croiser plusieurs sources de données** pour enrichir les informations, comme associer des notes à une table d’élèves, ou relier des réservations à des clients.

Cette opération s’appelle la **fusion de tables**, ou **jointure**.  
Elle permet de combiner des **enregistrements** issus de deux tables en utilisant un **descripteur commun**.

---

## 1 - Fusion de tables : pourquoi et comment 🔄

### Pourquoi fusionner deux tables ? 🤝

Prenons un exemple concret ! On dispose de deux fichiers téléchargeables ci-dessous :

- [client.csv](../../files/NSI/CSV/client.csv)
- [commande.csv](../../files/NSI/CSV/commande.csv)

Le premier fichier peut être représenté par une table contenant les **informations sur les clients** :

| id_client | nom      | prénom   |
|-----------|----------|----------|
| 1         | Bagou    | Albert   |
| 2         | Charabia | Barnabé  |
| 3         | Blabla   | Casimir  |
| 4         | Paulitik | Zoé      |
| 5         | Escro    | Virgil   |
| 6         | Manteux  | Rémi     |

Le second fichier contient les informations à propos des différentes **commandes** passées :

| id_commande | id_client | descriptif                          |
|-------------|-----------|-------------------------------------|
| 1           | 2         | bouilloire                          |
| 2           | 3         | Livre Apprendre Python              |
| 3           | 2         | Livre Apprendre HTML                |
| 4           | 4         | Livre Apprendre CSS                 |
| 5           | 6         | couverture                          |
| 6           | 4         | VTT                                 |
| 7           | 4         | smartphone                          |
| 8           | 1         | cahiers                             |
| 9           | 2         | Livre Le réseau internet            |
| 10          | 3         | Livre Les systèmes d’exploitation   |
| 11          | 1         | Livre Algorithmique                 |

Ces deux tables partagent un **descripteur commun** : `id_client`.  
Fusionner les deux permettrait d’obtenir une table complète qui lie chaque commande à une personne réelle (avec son nom et prénom), et non pas seulement à un identifiant.

On souhaite donc construire une **liste de dictionnaires**, dans laquelle chaque dictionnaire regroupera les **informations du client** et **celles de la commande associée**, par exemple :

```python
{"id_client": 2, "nom": "Charabia", "prénom": "Barnabé", "id_commande": 3, "descriptif": "Livre Apprendre HTML"}
```

👉 Naturellement, seuls les clients ayant passé **au moins une commande** apparaîtront dans cette nouvelle table. Autrement dit, on ne fusionne les lignes que lorsqu’il y a correspondance sur le champ `id_client`.

### Comment fusionner ces deux tables en Python ? 🧪

Maintenant que nous avons compris l'objectif, voyons comment **réaliser cette fusion en Python**.

L’idée est de :  

1. Lire les deux fichiers CSV (`client.csv` et `commande.csv`) ;
2. Pour chaque **commande**, retrouver le **client correspondant** grâce au `id_client` ;
3. Créer un nouveau **dictionnaire fusionné** contenant les informations du client et de sa commande ;
4. Ajouter ce dictionnaire à une nouvelle table.