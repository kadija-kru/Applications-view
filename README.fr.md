# Application Tiles - Composant Web SharePoint (WebPart)

[English](README.md) | **Français**

## 🎯 Qu'est-ce que c'est ?

Ce projet est un **WebPart SharePoint Framework (SPFx)**, **PAS une page complète**.

### WebPart vs Page - Quelle est la différence ?

#### 📦 **WebPart (Composant Web)** ← C'EST CE PROJET
Un WebPart est un **composant réutilisable** que vous pouvez ajouter à n'importe quelle page SharePoint :
- ✅ C'est comme un **widget** ou un **bloc** que vous placez sur une page
- ✅ Vous pouvez l'ajouter, le déplacer, le configurer sur n'importe quelle page SharePoint
- ✅ Une page peut contenir **plusieurs WebParts** différents
- ✅ Les administrateurs peuvent le configurer sans coder

**Exemple d'utilisation :**
1. Vous créez une page SharePoint normale
2. Vous cliquez sur "Modifier"
3. Vous ajoutez ce WebPart "Application Tiles" à votre page
4. Vous configurez les applications à afficher
5. Vous pouvez aussi ajouter d'autres WebParts (actualités, calendrier, etc.)

#### 📄 **Page (Page complète)** ← CE N'EST PAS CELA
Une page complète est un site web entier avec son propre URL, navigation, etc.

## 🎨 Ce que fait ce WebPart

Ce WebPart affiche une **grille d'icônes d'applications** configurable et responsive :

```
┌─────────────────────────────────────────┐
│   Page SharePoint                       │
│                                         │
│   [Titre de la page]                   │
│                                         │
│   ┌───────────────────────────────┐    │
│   │  📱 WebPart Application Tiles │    │
│   │  ┌────┐ ┌────┐ ┌────┐ ┌────┐ │    │
│   │  │ HR │ │ PM │ │Sales│ │ IT │ │    │
│   │  └────┘ └────┘ └────┘ └────┘ │    │
│   │  ┌────┐ ┌────┐ ┌────┐ ┌────┐ │    │
│   │  │Inv.│ │Fin.│ │Form│ │Cust│ │    │
│   │  └────┘ └────┘ └────┘ └────┘ │    │
│   └───────────────────────────────┘    │
│                                         │
│   [Autres WebParts si besoin]          │
│                                         │
└─────────────────────────────────────────┘
```

## ✨ Fonctionnalités

- 🎨 **Grille Responsive** : 4 colonnes (bureau) → 1 colonne (mobile)
- ⚙️ **Configuration Sans Code** : Ajoutez et configurez les tuiles via l'interface
- 🎭 **Icônes Fluent UI** : Plus de 600 icônes Microsoft disponibles
- 🖼️ **Icônes Personnalisées** : Utilisez vos propres images
- 🌈 **Adaptation au Thème** : S'adapte automatiquement aux couleurs SharePoint
- ♿ **Accessible** : Navigation clavier, lecteurs d'écran
- 📱 **Mobile-Friendly** : Fonctionne parfaitement sur tous les appareils

## 🚀 Installation et Déploiement

### Prérequis

- Node.js 18.17.1 ou supérieur
- Droits d'administrateur SharePoint pour déployer

### Étapes d'installation

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-dépôt>
   cd Applications-view
   ```

2. **Installer les dépendances** ⚠️ **OBLIGATOIRE**
   ```bash
   npm install
   ```

3. **Construire le package de déploiement**
   ```bash
   npm run ship
   ```
   Cela créera un fichier `.sppkg` dans `sharepoint/solution/`

4. **Déployer dans SharePoint**
   - Ouvrez votre catalogue d'applications SharePoint
   - Téléversez le fichier `.sppkg`
   - Déployez-le dans votre tenant

5. **Ajouter à une page**
   - Créez ou modifiez une page SharePoint
   - Cliquez sur "Ajouter un composant WebPart"
   - Cherchez "App Tiles"
   - Ajoutez-le à votre page

## ⚙️ Configuration

Une fois le WebPart ajouté à votre page :

1. **Cliquez sur l'icône d'édition** (crayon) sur le WebPart
2. **Panneau de propriétés s'ouvre** à droite
3. **Cliquez sur "Manage tiles"** (Gérer les tuiles)
4. **Ajoutez vos applications :**
   - Titre : Nom de l'application
   - Description : Courte description
   - Nom de l'icône : Nom de l'icône Fluent UI ou URL d'image
   - URL du lien : Où l'application doit mener
   - Ouvrir dans un nouvel onglet : Cochez si nécessaire

### Exemples de noms d'icônes Fluent UI

- `ContactCard` - Pour RH/Personnel
- `ProjectCollection` - Pour gestion de projets
- `Money` - Pour applications financières
- `Repair` - Pour support IT
- `ProductList` - Pour inventaire
- `BarChartVertical` - Pour analytique
- `Education` - Pour formation
- `People` - Pour portails clients

Liste complète : https://uifabricicons.azurewebsites.net/

## 🛠️ Développement Local

Pour tester localement :

```bash
npm install
npm run serve
```

Ouvrez https://localhost:4321/temp/workbench.html

## 📚 Documentation Complète

- [README English](README.md)
- [Configuration Guide](docs/CONFIGURATION.md)
- [Features](docs/FEATURES.md)
- [Technical Specs](docs/TECHNICAL-SPECS.md)
- [Visual Guide](docs/VISUAL-GUIDE.md)

## ❓ Questions Fréquentes

### Est-ce une application autonome ?
**Non**, c'est un composant (WebPart) qui s'ajoute à des pages SharePoint existantes.

### Dois-je coder pour l'utiliser ?
**Non**, une fois déployé, tout se configure via l'interface utilisateur.

### Puis-je l'utiliser sur plusieurs pages ?
**Oui**, vous pouvez ajouter ce WebPart sur autant de pages SharePoint que vous voulez.

### Est-ce compatible avec Teams ?
**Oui**, ce WebPart fonctionne aussi dans Microsoft Teams.

### Puis-je modifier les couleurs ?
**Oui**, il s'adapte automatiquement au thème SharePoint de votre site.

## 🏗️ Architecture Technique

**Type de Projet :** SharePoint Framework (SPFx) WebPart  
**Framework :** React + TypeScript  
**UI Library :** Fluent UI (Microsoft)  
**Version SPFx :** 1.18.2  
**Node.js :** 18.17.1 - 18.x  

## 📝 Licence

MIT License - Voir [LICENSE](LICENSE)

## 🤝 Contribution

Voir [CONTRIBUTING.md](CONTRIBUTING.md)

---

**Construit avec ❤️ en utilisant SharePoint Framework**
