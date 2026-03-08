# CV DYNAMIQUE
Application web pour créer des CV professionnels.

## Architecture du projet
CV_DYNAMIQUE_2/
├── api/
│ ├── config.php
│ ├── get_user_cv.php
│ ├── login.php
│ ├── logout.php
│ ├── register.php
│ └── save_cv.php
├── css/
├── img/
│ ├── photo_Cv_Executif.png
│ ├── photo_Cv_Minimaliste.png
│ └── photo_Cv_Moderne.png
├── js/
│  ├── script.js
├── db.php  
├── database.sql
├── editor.html
├── index.html
└── inscription.html

##  Choix techniques

- **PHP** : Pour le serveur et l'API
- **MySQL** : Pour la base de données
- **HTML/CSS/JavaScript** : Pour l'interface


## 👥 Répartition des tâches

### Équipe de développement

| Membre | Rôle | Tâches réalisées |
|--------|------|------------------|
| **Serigne** | Développeur Backend & Base de données | - Création de la base de données (MySQL) ET Développement des API login, register et logout - Configuration de db.php

| **Rama** | Développeuse Frontend | - Création des pages HTML (index.html, inscription.html) ET Intégration des templates de CV (img/) - Design CSS et mise en page

| **Ghislain** | Développeur Full Stack | - Développement des API save_cv.php et get_user_cv.php - Création et intégration de editor.html - Configuration de api/config.php - Liaison entre le frontend et le backend  Scripts JavaScript (script.js)


### Répartition détaillée par fichier

| Fichier | Responsable |
|---------|-------------|
| `database.sql` | Serigne |
| `db.php` | Serigne |
| `api/login.php` | Serigne |
| `api/register.php` | Serigne |
| `api/logout.php` | Serigne |
| `index.html` | Rama |
| `inscription.html` | Rama |
| `css/` (tous les fichiers) | Rama |
| `img/` (photos des templates) | Rama |
| `script.js` | Ghislain |
| `api/config.php` | Ghislain |
| `api/save_cv.php` | Ghislain |
| `api/get_user_cv.php` | Ghislain |
| `editor.html` | Ghislain |


## Difficultés rencontrées

**Problème 1 :** Difficulté à se coordonner sur les tâches.

**Solution :** Nous avons mis en place des réunions régulières sur Discord et utilisé un tableau Trello.

**Problème 2 :** Les CV n'étaient pas sauvegardés quand on cliquait sur le bouton.

**Solution :** Nous avons vérifié que l'événement 'click' était bien attaché au bouton et que l'API save_cv.php était appelée.

**Problème 3 :** Les champs du CV se vidaient après rafraîchissement.

**Solution :** Nous avons utilisé localStorage pour sauvegarder temporairement les données.


**Problème 4 :** Les appels à l'API avec fetch ne fonctionnaient pas.

**Solution :** Nous avons utilisé .then() et .catch() pour afficher les erreurs dans la console.

 