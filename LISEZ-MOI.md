## Wild Code School - Reims - Semaines 6 à 11 (du lundi 4 avril au mercredi 11 mai 2022)

## Projet 2 - Intitulé : PoSteries

Equipe de développeurs : 
Jaafar Cherif, Simon Duc, Louis Dufourmantelle, Valentin Morette.

## Objectifs du projet :

- Développer une application web dynamique à l'aide de HTML, CSS, ReactJS.
- Utiliser les données d'une API.
- Appliquer la méthode de gestion de projet agile SCRUM : via les interfaces Google Sheet (product backlog) et Trello (sprint backlog).
- Utiliser les interfaces de versioning Git et GitHub.

## Concept du projet : 

- L'application web PoSteries en une phrase c'est : "un quiz qui consiste à trouver le titre d'un film à partir de son affiche".
- API choisie : l'API "The Movie Database" (TMDB) qui recense de nombreuses informations (affiche, synopsis, équipe du film, popularité, box office...) sur des milliers de films et de séries.
- Quelques précisions sur le système de jeu :
        Différentes catégories de films à choisir.
        Quatre choix de réponses possibles.
        Un temps de réponse limité via un timer.
        Une affiche de film floutée qui se nettifie en fonction du timer.
        Un système de scoring lié au timer.
        Des indices disponibles pour aider le joueur.

## Informations complémentaires sur l'environnement du projet :

## Concept

Ce template est conçu pour servir de base à tous les projets (P2/P3) suivants la stack React-Node-MySQL telle qu'enseignée à la Wild Code School. Il est préconfiguré avec un ensemble d'outils qui aideront les élèves à produire un code correspondant mieux aux standards du monde du travail et plus facile à maintenir, tout en restant simple à utiliser.

## Installation & Utilisation

### Pour commencer un projet

- Sur VSCode, installer les plugins **Prettier - Code formatter** et **ESLint** et les configurer
- Cloner ce dépôt, se rendre à l'intérieur
- Lancer la commande `npm run setup`
- _NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans `backend/.env.sample`_

### Liste des commandes et signification

- `setup` : Initialisation du frontend et du backend ainsi que des outils
- `dev` : Démarrage des deux serveurs (frontend + backend) dans un même terminal
- `dev-front` : Démarrage d'un serveur React pour le frontend
- `dev-back` : Démarrage d'un serveur Express pour le backend
- `lint` : Exécute des outils de validation de code (sera exécutée automatiquement à chaque _commit_)
- `fix` : Fixe les erreurs de formatage (à lancer si `lint` ne passe pas)

## Pour plus d'informations

### Listing des outils utilisés

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

### Reste à faire

Prettier:

- corriger la config front/back pour qu'elle suive le même standard qu'ESLint

Testing:

- ajouter des tests unitaires sur le front et le back, avec les commandes associées

Vérifications:

- s'assurer que les principaux outils utilisés lors de la formation sont compatibles avec ce template
- deploiements ? Compatible avec Netlify/Vercel/Heroku ?
- fonctionnement avec yarn/pnpm
