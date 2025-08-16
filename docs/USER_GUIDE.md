# 📚 Guide Utilisateur - Système Expert d'Enquête PROLOG

Ce guide vous accompagne dans l'utilisation complète du système d'investigation policière.

## 🚀 Premiers pas

### Accès au système

1. **Ouvrir l'application** dans votre navigateur
2. **Familiariser-vous** avec l'interface principale
3. **Explorer** les différentes sections disponibles

### Interface principale

L'écran d'accueil présente :
- **En-tête** : Titre et description du système
- **Interface de requêtes** : Zone d'investigation interactive
- **Cartes de suspects** : Vue d'ensemble des personnes
- **Règles du système** : Logique du moteur d'inférence

## 🔍 Utilisation de l'interface de requêtes

### Investigation ciblée

1. **Sélection du suspect**
   - Cliquer sur le menu déroulant "Suspect"
   - Choisir parmi : John, Mary, Alice, Bruno, Sophie

2. **Choix du crime**
   - Ouvrir le menu "Crime"
   - Sélectionner : vol, assassinat, ou escroquerie

3. **Lancement de l'enquête**
   - Cliquer sur le bouton **"Enquêter"**
   - Attendre l'analyse (simulation de 0.8s)

4. **Analyse des résultats**
   - **Statut** : COUPABLE (rouge) ou NON COUPABLE (vert)
   - **Preuves trouvées** : Liste des éléments confirmés
   - **Raisonnement** : Étapes logiques détaillées

### Investigation complète

- **Bouton "Investigation complète"** : Analyse tous les suspects pour tous les crimes
- **Résultat automatique** : Affiche le cas le plus probable
- **Tri intelligent** : Priorise les résultats avec le plus de preuves

### Interprétation des résultats

#### Codes couleur
- 🔴 **Rouge** : Suspect coupable
- 🟢 **Vert** : Suspect innocenté
- 🟡 **Jaune** : Preuves insuffisantes

#### Symboles du raisonnement
- ✓ **Coche verte** : Condition vérifiée
- ✗ **Croix rouge** : Condition non remplie
- ℹ️ **Information** : Règle appliquée

## 👤 Cartes de suspects

### Informations affichées

Chaque carte de suspect présente :

1. **Nom du suspect** (en haut de la carte)
2. **Badge de culpabilité** (si applicable)
3. **Crimes confirmés** (section rouge)
4. **Preuves disponibles** (section principale)

### Types de preuves

| Icône | Type | Description |
|-------|------|-------------|
| 👤 | Motif | Raison de commettre le crime |
| 📍 | Près de la scène | Présence sur les lieux |
| 👆 | Empreintes sur arme | Preuves physiques |
| 💳 | Transaction bancaire | Preuves financières |
| 🆔 | Fausse identité | Usurpation d'identité |
| 👁️ | Témoin oculaire | Identification visuelle |

### Statuts des suspects

- **COUPABLE** : Au moins un crime confirmé
- **Neutre** : Aucun crime prouvé (carte grise)
- **Preuves partielles** : Éléments disponibles mais insuffisants

## ⚖️ Règles du système

### Compréhension des règles

Chaque règle suit la structure logique :
```
SI [condition1] ET [condition2] ET [condition3]
ALORS [conclusion]
```

### Règles actives

1. **Règle d'assassinat**
   - Conditions : motif + présence + empreintes + témoin
   - Spécificité : Requiert un témoin oculaire

2. **Règle de vol**
   - Conditions : motif + présence + empreintes
   - Application : Crimes contre les biens

3. **Règle d'escroquerie**
   - Conditions : motif + transaction bancaire
   - Focus : Crimes financiers

### Logique d'inférence

Le système fonctionne selon ces principes :

1. **Chargement des faits** : Import des preuves disponibles
2. **Sélection de règle** : Choix de la règle applicable au crime
3. **Vérification des conditions** : Test de chaque prérequis
4. **Conclusion logique** : Déduction basée sur les résultats
5. **Génération du rapport** : Formatage pour l'utilisateur

## 💡 Conseils d'utilisation

### Bonnes pratiques

1. **Investigation systématique**
   - Commencer par l'investigation complète
   - Se concentrer ensuite sur les cas positifs
   - Analyser les preuves manquantes

2. **Analyse comparative**
   - Comparer les profils de suspects
   - Identifier les patterns communs
   - Noter les incohérences

3. **Documentation**
   - Capturer les résultats importants
   - Noter les raisonnements complexes
   - Archiver les cas résolus

### Cas d'usage types

#### Enquête de routine
1. Investigation complète initiale
2. Analyse des suspects positifs
3. Vérification des preuves manquantes
4. Conclusion et rapport

#### Investigation ciblée
1. Sélection d'un suspect spécifique
2. Test pour différents types de crimes
3. Analyse détaillée du raisonnement
4. Validation croisée

#### Validation de règles
1. Test systématique de chaque règle
2. Vérification de la cohérence logique
3. Identification des lacunes
4. Proposition d'améliorations

## 🔧 Fonctionnalités avancées

### Simulation de l'IA

Le système simule un délai d'analyse pour reproduire :
- **Complexité du raisonnement** : Temps de réflexion
- **Réalisme de l'enquête** : Processus méthodique
- **Retour utilisateur** : Indication visuelle de traitement

### Interface responsive

L'application s'adapte automatiquement :
- **Desktop** : Affichage en grille complète
- **Tablette** : Réorganisation des colonnes
- **Mobile** : Empilement vertical des éléments

### Thème adaptatif

Le système respecte les préférences :
- **Mode sombre** : Adaptation automatique le soir
- **Mode clair** : Interface standard diurne
- **Contraste élevé** : Accessibilité renforcée

## ❓ FAQ

### Questions fréquentes

**Q : Pourquoi Mary est-elle la seule coupable d'assassinat ?**
R : L'assassinat requiert un témoin oculaire, condition uniquement remplie pour Mary dans les données actuelles.

**Q : Comment ajouter de nouveaux suspects ?**
R : Les suspects sont définis dans le fichier `src/data/crimeData.ts`. Une interface d'administration pourrait être développée.

**Q : Le système peut-il gérer des crimes complexes ?**
R : Oui, en ajoutant de nouvelles règles et types de preuves dans la configuration.

**Q : Les résultats sont-ils sauvegardés ?**
R : Actuellement non, mais l'intégration d'une base de données est prévue.

### Résolution de problèmes

**Problème** : L'interface ne répond pas
**Solution** : Rafraîchir la page, vérifier la connexion internet

**Problème** : Résultats incohérents
**Solution** : Vérifier les données dans `crimeData.ts`, relancer l'analyse

**Problème** : Affichage cassé
**Solution** : Vider le cache du navigateur, utiliser un navigateur moderne

## 📈 Évolutions futures

### Fonctionnalités prévues

- **Authentification** : Comptes utilisateurs personnalisés
- **Historique** : Sauvegarde des enquêtes menées
- **Export** : Génération de rapports PDF/Word
- **Collaboration** : Partage d'enquêtes entre utilisateurs
- **IA avancée** : Machine learning pour prédictions

### Améliorations interface

- **Graphiques** : Visualisation des liens entre preuves
- **Timeline** : Chronologie des événements
- **Cartes** : Géolocalisation des scènes de crime
- **Photos** : Intégration d'images de preuves

---

*Pour toute question supplémentaire, consultez la documentation technique ou contactez le support.*