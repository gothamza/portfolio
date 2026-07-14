# 📸 Guide d'Ajout des Images / Image Addition Guide

## 🇫🇷 Français

### Images Requises

Votre portfolio nécessite **5 images** pour être complet :

#### 1. Photo de Profil
**Nom du fichier** : `profile-photo.jpg`
- **Type** : Votre photo professionnelle
- **Dimensions recommandées** : 400x400px minimum (format carré idéal)
- **Format** : JPG ou PNG
- **Conseils** :
  - Photo de bonne qualité, bien éclairée
  - Fond neutre ou professionnel
  - Tenue professionnelle
  - Sourire naturel

#### 2-5. Images des Projets

**`project-dyslexai.jpg`**
- Screenshot ou visuel du projet DyslexAI (jeu éducatif)
- Dimensions : 800x600px recommandé
- Montrez l'interface ou une capture d'écran représentative

**`project-chatbot.jpg`**
- Screenshot du chatbot de santé ThinkAI
- Dimensions : 800x600px recommandé
- Interface du chatbot ou visualisation

**`project-plate-recognition.jpg`**
- Screenshot du système de reconnaissance de plaques
- Dimensions : 800x600px recommandé
- Exemple de détection ou interface

**`project-gym.jpg`**
- Screenshot de l'application de gestion de salle de sport
- Dimensions : 800x600px recommandé
- Interface admin ou client

### Comment Ajouter les Images

1. **Préparez vos images** avec les noms exacts listés ci-dessus
2. **Placez-les dans le dossier racine** du projet (même niveau que index.html)
3. **Vérifiez les noms** : ils doivent correspondre exactement (sensible à la casse)

### Comment Ajouter Plus d'Images de Diplôme (Slideshow)

Pour créer un diaporama automatique dans la section Éducation :

1. **Ajoutez vos images** avec les noms : `master-image.jpeg`, `master-image2.jpeg`, `master-image3.jpeg`
2. **Ouvrez `styles.css`** et cherchez `@keyframes educationSlideshow`
3. **Décommentez les sections** pour chaque image additionnelle :

```css
@keyframes educationSlideshow {
    0%, 100% { 
        background-image: url('master-image.jpeg');
    }
    /* Décommentez si vous avez master-image2.jpeg : */
    33% { 
        background-image: url('master-image2.jpeg');
    }
    /* Décommentez si vous avez master-image3.jpeg : */
    66% { 
        background-image: url('master-image3.jpeg');
    }
}
```

Le diaporama changera automatiquement toutes les 6-7 secondes!

### Optimiser vos Images

Pour de meilleures performances web :
- Utilisez [TinyPNG](https://tinypng.com/) pour compresser
- Gardez la taille sous 500KB par image
- Format JPG pour photos, PNG pour captures d'écran avec texte

### Si vous n'avez pas certaines images

**Option 1** : Créez des placeholders temporaires
- Utilisez [Placeholder.com](https://placeholder.com/)
- URL exemple : `https://via.placeholder.com/800x600/6366f1/ffffff?text=Nom+du+Projet`

**Option 2** : Utilisez des images génériques
- [Unsplash](https://unsplash.com/) pour images libres de droits
- [Pexels](https://www.pexels.com/) pour photos gratuites

---

## 🇬🇧 English

### Required Images

Your portfolio needs **5 images** to be complete:

#### 1. Profile Photo
**Filename**: `profile-photo.jpg`
- **Type**: Your professional photo
- **Recommended size**: 400x400px minimum (square format ideal)
- **Format**: JPG or PNG
- **Tips**:
  - Good quality, well-lit photo
  - Neutral or professional background
  - Professional attire
  - Natural smile

#### 2-5. Project Images

**`project-dyslexai.jpg`**
- Screenshot or visual of DyslexAI project (educational game)
- Dimensions: 800x600px recommended
- Show interface or representative screenshot

**`project-chatbot.jpg`**
- Screenshot of ThinkAI health chatbot
- Dimensions: 800x600px recommended
- Chatbot interface or visualization

**`project-plate-recognition.jpg`**
- Screenshot of license plate recognition system
- Dimensions: 800x600px recommended
- Detection example or interface

**`project-gym.jpg`**
- Screenshot of gym management application
- Dimensions: 800x600px recommended
- Admin or client interface

### How to Add Images

1. **Prepare your images** with the exact names listed above
2. **Place them in the root folder** of the project (same level as index.html)
3. **Check names**: they must match exactly (case-sensitive)

### Optimize Your Images

For better web performance:
- Use [TinyPNG](https://tinypng.com/) to compress
- Keep size under 500KB per image
- JPG format for photos, PNG for screenshots with text

### If You Don't Have Some Images

**Option 1**: Create temporary placeholders
- Use [Placeholder.com](https://placeholder.com/)
- Example URL: `https://via.placeholder.com/800x600/6366f1/ffffff?text=Project+Name`

**Option 2**: Use generic images
- [Unsplash](https://unsplash.com/) for free stock photos
- [Pexels](https://www.pexels.com/) for free images

---

## 📁 Structure Finale / Final Structure

```
portfolio/
│
├── index.html
├── styles.css
├── script.js
├── README.md
├── IMAGES-GUIDE.md
├── .gitignore
│
└── images/
    ├── profile-photo.jpg          ← Votre photo / Your photo
    ├── master-image.jpeg          ← Education background
    ├── master-image2.jpeg         ← Education slideshow
    ├── master-image3.jpeg         ← Education slideshow
    ├── master-image4.jpeg         ← Education slideshow
    ├── Hackathon ThinkAI.jpg      ← ThinkAI event
    ├── Hackathon DyslexAI.jpeg    ← DyslexAI event
    ├── clube1.jpeg                ← Club Pragnomos
    ├── clube presnetation.jpeg    ← Agora presentation
    └── SPORTS3.jpg                ← Sports activities
```

## ✅ Checklist

- [ ] profile-photo.jpg ajouté
- [ ] master-image.jpeg ajouté (Education background)
- [ ] master-image2.jpeg ajouté (optional - slideshow)
- [ ] master-image3.jpeg ajouté (optional - slideshow)
- [ ] project-dyslexai.jpg ajouté
- [ ] project-chatbot.jpg ajouté
- [ ] project-plate-recognition.jpg ajouté
- [ ] project-gym.jpg ajouté
- [ ] Images optimisées (< 500KB chacune)
- [ ] Noms de fichiers vérifiés

