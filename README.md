# Portfolio Valentin Leblanc

Site portfolio moderne, responsive et professionnel pour présenter le profil, les compétences, les expériences, les projets et les informations de contact de Valentin Leblanc.

## Fichiers

- `index.html` : structure du site
- `style.css` : design responsive, thème sombre, animations et effets visuels
- `script.js` : menu mobile, animations au scroll, compteurs, terminal animé, retour en haut et formulaire mailto
- `assets/photo.jpg` : photo de profil
- `assets/cv.pdf` : emplacement prévu pour le CV

## Lancer le site

Ouvrir simplement `index.html` dans un navigateur.

Il est aussi possible de lancer un serveur local depuis ce dossier :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Personnalisation

- Remplacer `assets/cv.pdf` par le vrai CV.
- Modifier les liens GitHub dans la section projets quand ils seront disponibles.
- Ajuster les textes directement dans `index.html`.
- Les couleurs principales sont définies au début de `style.css` dans `:root`.

## Contact

Le formulaire ouvre l'application mail avec un message prérempli vers `valentin.leblanc.informatique@gmail.com`. Pour un envoi automatique sans ouverture du client mail, il faudra ajouter un service externe ou un backend.
