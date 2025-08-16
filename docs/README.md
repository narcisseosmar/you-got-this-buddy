# 🔍 Système Expert d'Enquête Policière PROLOG

Un système intelligent d'analyse criminalistique basé sur la logique de programmation PROLOG, développé avec React, TypeScript et Tailwind CSS.

## 📋 Table des matières

- [Vue d'ensemble](#vue-densemble)
- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Documentation technique](#documentation-technique)
- [Contribuer](#contribuer)

## 🎯 Vue d'ensemble

Ce système expert simule un moteur d'inférence PROLOG pour l'investigation policière. Il analyse automatiquement les preuves, applique des règles logiques et détermine la culpabilité des suspects en utilisant l'intelligence artificielle.

### Objectifs du projet

- **Automatisation de l'enquête** : Réduire le temps d'analyse des preuves
- **Cohérence logique** : Éliminer les erreurs humaines dans le raisonnement
- **Traçabilité** : Fournir un historique complet du processus de décision
- **Interactivité** : Interface intuitive pour les enquêteurs

## ✨ Fonctionnalités

### 🧠 Intelligence Artificielle
- **Moteur d'inférence PROLOG** : Raisonnement logique automatisé
- **Analyse des patterns** : Détection de liens entre preuves
- **Scoring intelligent** : Évaluation de la probabilité de culpabilité
- **Recommandations** : Suggestions d'actions d'enquête

### 🕵️ Système d'enquête
- **Base de faits** : Stockage structuré des preuves
- **Règles expertes** : Logique métier criminalistique
- **Requêtes interactives** : Interface de questionnement du système
- **Rapports détaillés** : Génération automatique de conclusions

### 🎨 Interface utilisateur
- **Design responsive** : Compatible mobile et desktop
- **Thème sombre/clair** : Adaptation automatique des préférences
- **Animations fluides** : Retours visuels en temps réel
- **Accessibilité** : Conforme aux standards WCAG

## 🏗️ Architecture

### Structure du projet

```
src/
├── components/           # Composants React réutilisables
│   ├── ui/              # Composants d'interface (shadcn/ui)
│   ├── QueryInterface.tsx   # Interface de requêtes
│   ├── SuspectCard.tsx     # Carte d'affichage suspect
│   └── RulesDisplay.tsx    # Affichage des règles
├── data/                # Données et configuration
│   └── crimeData.ts     # Base de faits et règles
├── pages/               # Pages de l'application
│   └── Index.tsx        # Page principale
├── types/               # Définitions TypeScript
│   └── CrimeSystem.ts   # Types du système expert
├── utils/               # Utilitaires et logique métier
│   └── prolog.ts        # Moteur d'inférence PROLOG
└── docs/                # Documentation
    ├── README.md        # Documentation principale
    ├── API.md           # Documentation API
    └── USER_GUIDE.md    # Guide utilisateur
```

### Technologies utilisées

- **React 18** : Framework JavaScript moderne
- **TypeScript** : Typage statique pour la robustesse
- **Tailwind CSS** : Framework CSS utilitaire
- **Shadcn/ui** : Composants d'interface pré-construits
- **Lucide React** : Icônes vectorielles
- **Vite** : Outil de build rapide

## 🚀 Installation

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Git

### Installation locale

```bash
# Cloner le repository
git clone https://github.com/votre-repo/crime-investigation-system.git
cd crime-investigation-system

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Ouvrir http://localhost:5173
```

### Déploiement

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## 📖 Utilisation

### 1. Interface de requêtes

1. **Sélectionner un suspect** dans la liste déroulante
2. **Choisir un crime** à investiguer
3. **Cliquer sur "Enquêter"** pour analyser
4. **Examiner les résultats** : preuves trouvées et raisonnement

### 2. Investigation complète

- Cliquer sur **"Investigation complète"** pour analyser tous les suspects
- Le système retourne automatiquement le cas le plus probable
- Résultats triés par force des preuves

### 3. Cartes de suspects

- **Vue d'ensemble** de tous les suspects
- **Preuves disponibles** pour chaque personne
- **Statut de culpabilité** en temps réel
- **Crimes confirmés** avec badges colorés

### 4. Règles du système

- **Visualisation des règles** logiques
- **Conditions requises** pour chaque type de crime
- **Explication du fonctionnement** du moteur d'inférence

## 🔧 Documentation technique

### Types de données

```typescript
interface Fact {
  type: string;           // Type de preuve
  suspect: string;        // Identifiant du suspect
  crime: string;          // Type de crime
}

interface Rule {
  name: string;           // Nom de la règle
  conditions: string[];   // Conditions requises
  conclusion: string;     // Conclusion de la règle
}

interface QueryResult {
  suspect: string;        // Suspect analysé
  crime: string;          // Crime investigué
  guilty: boolean;        // Résultat de culpabilité
  evidence: string[];     // Preuves trouvées
  reasoning: string[];    // Étapes du raisonnement
}
```

### Moteur PROLOG

Le moteur d'inférence simule la logique PROLOG :

1. **Chargement des faits** : Import des preuves disponibles
2. **Application des règles** : Vérification des conditions
3. **Inférence logique** : Déduction de la culpabilité
4. **Génération du rapport** : Formatage des résultats

### API interne

```typescript
class PrologEngine {
  // Vérifier la culpabilité d'un suspect
  isGuilty(suspect: string, crime: string): QueryResult

  // Obtenir les faits pour un suspect
  getFactsForSuspect(suspect: string): Fact[]

  // Investigation complète de tous les suspects
  investigateAll(): QueryResult[]
}
```

## 🎨 Personnalisation

### Thèmes et couleurs

Le système utilise des tokens CSS personnalisables :

```css
:root {
  --primary: 43 96% 56%;        /* Couleur principale */
  --secondary: 210 40% 98%;     /* Couleur secondaire */
  --background: 0 0% 100%;      /* Arrière-plan */
  --foreground: 222.2 84% 4.9%; /* Text principal */
}
```

### Ajout de nouvelles règles

```typescript
// Dans src/data/crimeData.ts
export const rules: Rule[] = [
  {
    name: 'nouvelle_regle',
    conditions: ['condition1', 'condition2'],
    conclusion: 'guilty of nouveau_crime'
  }
];
```

### Extension des types de preuves

```typescript
// Nouveaux types de faits
const nouveauxFaits = [
  'has_dna_evidence',      // Preuves ADN
  'has_video_surveillance', // Vidéosurveillance
  'has_phone_records'      // Enregistrements téléphoniques
];
```

## 🤝 Contribuer

### Guide de contribution

1. **Fork** le repository
2. **Créer une branche** : `git checkout -b feature/nouvelle-fonctionnalite`
3. **Commiter** : `git commit -m 'Ajout de nouvelle fonctionnalité'`
4. **Pousser** : `git push origin feature/nouvelle-fonctionnalite`
5. **Créer une Pull Request**

### Standards de code

- **ESLint** : Respect des règles de linting
- **TypeScript strict** : Typage complet obligatoire
- **Composants fonctionnels** : Utilisation des hooks React
- **Tests unitaires** : Couverture minimale de 80%

### Roadmap

- [ ] **Base de données** : Intégration Supabase
- [ ] **Authentification** : Gestion des utilisateurs
- [ ] **Historique** : Sauvegarde des enquêtes
- [ ] **Export** : Génération de rapports PDF
- [ ] **API REST** : Interface de programmation
- [ ] **Machine Learning** : Prédictions avancées

## 📞 Support

### Ressources d'aide

- **Documentation** : [docs/](./docs/)
- **Issues** : [GitHub Issues](https://github.com/votre-repo/issues)
- **Discussions** : [GitHub Discussions](https://github.com/votre-repo/discussions)

### Contact

- **Email** : support@crime-investigation.com
- **Discord** : [Serveur communautaire](https://discord.gg/crime-investigation)

---

*Développé avec ❤️ pour l'amélioration de la justice*