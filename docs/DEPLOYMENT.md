# 🚀 Guide de Déploiement GitHub Pages

## Étape par Étape

### 📋 Prérequis

- Compte GitHub : https://github.com/join
- Git installé sur votre machine
- Les images ajoutées au projet

### 1️⃣ Créer un Dépôt GitHub

**Option A : Dépôt Personnel (URL Simple)**
1. Allez sur GitHub.com
2. Cliquez sur "New repository" (bouton vert)
3. Nom du dépôt : `gothamza.github.io` (remplacez `gothamza` par votre username)
4. Description : "Portfolio professionnel - Hamza Bouktitiya"
5. Cochez "Public"
6. **NE PAS** initialiser avec README (vous en avez déjà un)
7. Cliquez "Create repository"

**Option B : Dépôt de Projet**
1. Nom du dépôt : `portfolio`
2. Suivez les mêmes étapes que ci-dessus

### 2️⃣ Configurer Git Localement

Ouvrez un terminal dans votre dossier MYWEBSITE :

```bash
# Vérifiez que git est déjà initialisé
git status

# Si git n'est pas initialisé, faites :
git init
```

### 3️⃣ Ajouter vos Fichiers

```bash
# Ajoutez tous les fichiers
git add .

# Vérifiez les fichiers ajoutés
git status

# Créez votre premier commit
git commit -m "Initial commit: Portfolio Hamza Bouktitiya"
```

### 4️⃣ Connecter à GitHub

**Pour Option A (gothamza.github.io) :**
```bash
git remote add origin https://github.com/gothamza/gothamza.github.io.git
git branch -M main
git push -u origin main
```

**Pour Option B (portfolio) :**
```bash
git remote add origin https://github.com/gothamza/portfolio.git
git branch -M main
git push -u origin main
```

**Note** : Remplacez `gothamza` par votre vrai username GitHub !

### 5️⃣ Activer GitHub Pages

1. Sur GitHub, allez dans votre dépôt
2. Cliquez sur "Settings" (⚙️ en haut à droite)
3. Dans le menu de gauche, cliquez sur "Pages"
4. Sous "Source" :
   - Branch : Sélectionnez `main`
   - Folder : Sélectionnez `/ (root)`
5. Cliquez "Save"
6. ✅ Une bannière verte apparaîtra avec votre URL !

### 6️⃣ Accéder à votre Site

**Option A** : `https://gothamza.github.io/`
**Option B** : `https://gothamza.github.io/portfolio/`

⏱️ Le site sera disponible dans 2-5 minutes.

---

## 🔄 Mettre à Jour votre Portfolio

Après avoir modifié des fichiers :

```bash
# Voir ce qui a changé
git status

# Ajouter les modifications
git add .

# Créer un commit
git commit -m "Description de vos changements"

# Pousser vers GitHub
git push
```

⏱️ Les changements seront visibles en 1-2 minutes sur votre site.

---

## ❌ Résolution de Problèmes

### Erreur : "remote origin already exists"

```bash
# Supprimez l'ancien remote
git remote remove origin

# Ajoutez le nouveau
git remote add origin https://github.com/gothamza/votre-repo.git
```

### Erreur : "Authentication failed"

**Solution 1 : Personal Access Token (Recommandé)**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Cochez "repo"
4. Générez et copiez le token
5. Utilisez-le comme mot de passe quand Git le demande

**Solution 2 : GitHub Desktop**
- Téléchargez [GitHub Desktop](https://desktop.github.com/)
- Plus simple pour gérer vos dépôts

### Le site ne s'affiche pas

1. Vérifiez que GitHub Pages est activé (Settings → Pages)
2. Attendez 5 minutes
3. Vérifiez l'URL (avec ou sans `/portfolio/`)
4. Effacez le cache du navigateur (Ctrl + F5)
5. Vérifiez que `index.html` est bien à la racine

### Les images ne s'affichent pas

1. Vérifiez que les noms de fichiers sont exacts (case-sensitive)
2. Vérifiez que les images sont dans le dossier racine
3. Faites un nouveau commit avec les images :
   ```bash
   git add *.jpg
   git commit -m "Add images"
   git push
   ```

---

## 📱 Tester le Site

### Test Responsive
- Chrome DevTools : F12 → Toggle device toolbar
- Testez sur : Mobile, Tablet, Desktop

### Test de Performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### Test sur Navigateurs
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 🎯 Prochaines Étapes

1. ✅ Déployer le site
2. 📸 Ajouter vos vraies images
3. 🔗 Mettre à jour le lien LinkedIn
4. 📱 Tester sur mobile
5. 📤 Partager sur LinkedIn
6. 📝 Ajouter le lien dans votre CV
7. 🐙 Mettre le lien dans votre bio GitHub

---

## 🆘 Besoin d'Aide ?

### Ressources Utiles
- [Documentation GitHub Pages](https://docs.github.com/pages)
- [Guide Git](https://git-scm.com/book/fr/v2)
- [Markdown Guide](https://www.markdownguide.org/)

### Support
Si vous rencontrez des problèmes, vérifiez :
1. Les noms de fichiers (sensibles à la casse)
2. Que vous êtes dans le bon dossier
3. Que Git est installé : `git --version`
4. Votre connexion internet

---

**Bonne chance avec votre portfolio ! 🚀**

