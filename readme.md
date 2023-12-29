# Dashboard Project PEI 2023
Paul Mayaud - Candice Legay

## Description

Ce dépôt concerne l'initiative de la société P.E.IoT visant à réimaginer leur application commerciale par le biais d'une preuve de concept (POC) pour leurs produits de capteurs domotiques. P.E.IoT, spécialisée dans la vente de capteurs domestiques intelligents, a lancé un appel à propositions pour développer le POC de son offre. Le produit envisagé vise à fournir une vue d'ensemble du réseau de capteurs utilisé, avec des métriques, des statistiques et d'autres outils analytiques. L'ensemble des données fournies comprend trois collections : Mesures, Capteurs et Utilisateurs.

- **Users**  : Catalogue les foyers où des capteurs sont installés, fournissant ainsi une vue centrée sur l'utilisateur du réseau de capteurs.
- **Capteurs** : Enumère les différents types de capteurs déployés, détaillant la diversité et la gamme du matériel.
- **Mesures** : Contient les relevés de chaque capteur, offrant des données brutes pour l'analyse et la génération d'idées.

Notre équipe a innové en développant des widgets personnalisés spécialement conçus pour visualiser les données d'une manière intuitive et conviviale. Ces widgets présentent non seulement les données collectées par les mesures, les capteurs et les utilisateurs dans un format accessible, mais ils améliorent également l'interaction de l'utilisateur avec l'application. Parallèlement à ces widgets sur mesure, nous avons intégré des API existantes afin d'enrichir les capacités de l'application.

Projet réalisé par des étudiants à l'ECE Paris, M1 Product Engineer and Innovation.


## Installation

Afin de'accéder à ce dashboard il est nécessaire d'installer Node.js en cliquant [ici](https://nodejs.org/en).

Il vous faudra également vous créer un compte sur MongoDB afin d'accéder à la base de données, il vous suffit de suivre ce [lien](https://www.mongodb.com/fr-fr/cloud/atlas/register).

## Getting Started

Nous vous recommandons d'utiliser Visual Studio Code (VSCode) comme environnement de développement principal. Voici un bref guide sur la façon de configurer le projet :

Ouvrir le projet dans VSCode :

1. Lancez Visual Studio Code.
2. Accédez au menu "Fichier" et sélectionnez "Ouvrir un dossier".
3. Localisez et sélectionnez le répertoire racine du projet P.E.IoT pour l'ouvrir dans VSCode.
4. Une fois que le dossier du projet est ouvert dans VSCode, vous pouvez accéder au terminal intégré.
*Pour ouvrir le terminal, naviguez vers 'Terminal' dans le menu supérieur et sélectionner 'New Terminal'.*

Dans deux terminaux différents:

- lancer le server
    1. `cd server`
    1. `npm install`
    1. `npm run start`
- lancer le front 
    1. `cd web` 
    1. `npm install`
    1. `npm run dev`

## Features

Voici un récapitulatif des widgets que vous allez retrouver sur le dashboard : 

### **Server**

Ce propose repose sur une API REST qui permet d’accéder aux données mises en base de donnée. Cette API propose les 4 opérations CRUD (Creation, Research, Update,Delete des données) pour gerer les données de notre BDD.

### **Page Accueil**

   1. **Weather Widget**, ce widget a été implémenté à l'aide d'API existante [OpenWeather](https://openweathermap.org/api). Ce widget affiche la température et le taux d'humidité d'un pays sélectionner. Le fond du widget change de couleur en fonction de la température.
   1. **User Widget**, ce widget permet d'accéder à la taille de la maison, du nombre de personne dans cette maison ainsi que le pays du user que nous sélectionnons. L'utilisateur doit rentrer l'ID d'un utilisateur afin d'accéder à ces informations. Nous pouvons retrouver les différents ID de user dans la base de données directement.
   *Ce widget utilise les données de la BDD.*
   1. **AirQuality Widget**, il s'agit également d'un widget qui utilise l'API OpenWeather. Il indique, en fonction d'une adresse géographique, si l'air est pollué ou nous. 
   1. **Sensor Localisation Widget**, ce widget permet de connaître la moyenne de nombre de capteur en fonction de la pièce sélectionner. 
   *Ce widget utilise les données de la BDD.*
   1. **Average Widget**, il permet de connaître la valeur moyenne de la température, humidité et pollution de l'air de tous les capteurs. 
   *Ce widget utilise les données de la BDD.*
   1. **Sensor Per Year Widget**, ce widget permet de savoir combien de capteurs ont été achetés chaque années.
   *Ce widget utilise les données de la BDD.*
   1. **Graphique Widget**, il s'agit d'un graphique qui représente les valeurs récoltées sur la température, humidité et pollution de l'air d'un même capteur. Pour cela il est nécessaire de renter l'ID d'un capteur.
   *Ce widget utilise les données de la BDD.*

Cette page présente un bouton qui permet d'accéder à la page Admin.

Pour une visualisation du Dashboard, une vidéo de présentation est disponible **ici**.


### **Page Admin**

La page Admin permet de gérer notre base de données. La gestion de la base de données repose sur 3 opérations : 

   1. **CREATION** : Il est possible de choisir la collection dans laquelle nous voulons ajouté une données et de rentrée les informations de notre donnée. Une nouvelle donnée sera directement ajoutés à la base de données existante.
   1. **RESEARCH** : En choississant uen collection, cette opération permettera d'afficher toutes les données existentes dans notre base de données dans cette collection précise.
   1. **DELETE** : Il sera possible de supprimer une des données de notre base de données à partir de son ID.

Cette page présente un bouton qui permet de retourner sur la page d'accueil.

Pour une visualisation du Dashboard, une vidéo de présentation est disponible [**ici**](https://www.youtube.com/watch?v=gDCfefizPrY).


## Organisation

Afin de réaliser au mieux notre projet d'équipe nous avons utilisé Trello afin de se répartir les tâches et de suivre en continue l'évolution de notre projet. 
*Voir notre [Trello](https://trello.com/invite/b/M86vdpzI/ATTIc2bd829423e4bc87dc58be34f03e590628921D5C/projet-techweb).*

Une maquette du Dashboard a été réalisé sur Figma afin de réfléchir à la fois à l'expérience utilisateur (UX) et à l’interface utilisateur.
*Voir notre [Figma](https://www.figma.com/file/0iyKRcxl6SC1DxS4V1JtF7/Prototype-Tech-Web?type=design&node-id=1%3A2&mode=design&t=0gSPIYWpUlXoCwbk-1).*

Vous pouvez retrouver notre vidéo de présentation de notre dashboard avec ce lien youtube : *Voir la video [youtube](https://youtu.be/gDCfefizPrY).*

## Usages

Ce projet s'adapte sur PC, tablette et mobile.

## Versions

### **WEB**

- Axios 1.6.3
- Bootsrap 5.3.2
- Chart.js 4.4.1
- Chartjs-adapter-date-fns 3.0.0
- React 18.2.0
- React-chartjs-2 5.2.0
- React-dom 18.2.0
- React-router-dom 6.21.1

### **SERVER**

- CORS 2.8.5
- Express 5.0.0 - alpha.8
- Mongodb 6.3.0
- Mongoose 8.0.3