# 🔌 Documentation API - Système Expert PROLOG

Documentation technique complète de l'API interne du système d'enquête policière.

## 📋 Vue d'ensemble

### Architecture API

Le système expose une API interne TypeScript pour :
- **Moteur d'inférence PROLOG** : Logique de raisonnement
- **Gestion des données** : Manipulation des faits et règles
- **Interface utilisateur** : Composants React modulaires

### Principes de conception

- **Type Safety** : TypeScript strict pour éviter les erreurs
- **Immutabilité** : Données non modifiables en runtime
- **Performance** : Optimisation des algorithmes d'inférence
- **Extensibilité** : Architecture modulaire pour évolutions

## 🏗️ Types de données

### Types principaux

```typescript
// Définition d'un suspect
interface Suspect {
  name: string;     // Nom complet du suspect
  id: string;       // Identifiant unique (kebab-case)
}

// Définition d'un crime
interface Crime {
  type: string;     // Type de crime (vol, assassinat, escroquerie)
  id: string;       // Identifiant unique
}

// Fait établi dans l'enquête
interface Fact {
  type: string;     // Type de preuve/fait
  suspect: string;  // ID du suspect concerné
  crime: string;    // ID du crime associé
}

// Règle logique du système expert
interface Rule {
  name: string;           // Nom de la règle (snake_case)
  conditions: string[];   // Conditions requises (ET logique)
  conclusion: string;     // Conclusion de la règle
}

// Résultat d'une requête d'investigation
interface QueryResult {
  suspect: string;        // ID du suspect analysé
  crime: string;          // ID du crime investigué
  guilty: boolean;        // Résultat de culpabilité
  evidence: string[];     // Preuves trouvées
  reasoning: string[];    // Étapes du raisonnement
}
```

### Types d'extension

```typescript
// Métadonnées d'enquête
interface InvestigationMetadata {
  timestamp: Date;        // Moment de l'analyse
  duration: number;       // Durée en millisecondes
  rulesApplied: string[]; // Règles utilisées
  confidence: number;     // Niveau de confiance (0-1)
}

// Configuration du moteur
interface EngineConfig {
  strictMode: boolean;    // Mode strict d'inférence
  enableCache: boolean;   // Cache des résultats
  maxDepth: number;       // Profondeur max de récursion
}
```

## 🧠 Moteur d'inférence PROLOG

### Classe principale

```typescript
class PrologEngine {
  private facts: Fact[];
  private rules: Rule[];
  private config: EngineConfig;

  constructor(config?: Partial<EngineConfig>)
  
  // Méthodes publiques
  isGuilty(suspect: string, crime: string): QueryResult
  getFactsForSuspect(suspect: string): Fact[]
  investigateAll(): QueryResult[]
  
  // Méthodes utilitaires
  addFact(fact: Fact): void
  removeFact(fact: Fact): void
  updateRule(ruleName: string, newRule: Rule): void
}
```

### Méthodes détaillées

#### `isGuilty(suspect: string, crime: string): QueryResult`

Analyse la culpabilité d'un suspect pour un crime spécifique.

**Paramètres :**
- `suspect` : Identifiant du suspect à analyser
- `crime` : Type de crime à investiguer

**Retour :** Objet `QueryResult` avec :
- Statut de culpabilité (boolean)
- Preuves trouvées (array)
- Raisonnement détaillé (array)

**Exemple d'utilisation :**

```typescript
const engine = new PrologEngine();
const result = engine.isGuilty('john', 'vol');

if (result.guilty) {
  console.log(`${result.suspect} est coupable de ${result.crime}`);
  console.log('Preuves:', result.evidence);
} else {
  console.log('Innocence établie ou preuves insuffisantes');
}
```

**Algorithme interne :**

1. **Recherche de règle applicable**
   ```typescript
   const applicableRule = this.rules.find(rule => 
     rule.conclusion.includes(crime)
   );
   ```

2. **Vérification des conditions**
   ```typescript
   for (const condition of applicableRule.conditions) {
     const factExists = this.facts.some(fact => 
       fact.type === condition && 
       fact.suspect === suspect && 
       fact.crime === crime
     );
   }
   ```

3. **Traitement spécial pour l'assassinat**
   ```typescript
   if (crime === 'assassinat' && allConditionsMet) {
     // Vérification témoin oculaire
     if (suspect === 'mary') {
       evidence.push('eyewitness_identification');
     }
   }
   ```

#### `getFactsForSuspect(suspect: string): Fact[]`

Récupère tous les faits associés à un suspect.

**Paramètres :**
- `suspect` : Identifiant du suspect

**Retour :** Array de `Fact`

**Exemple :**

```typescript
const facts = engine.getFactsForSuspect('alice');
console.log(`Alice a ${facts.length} preuves associées`);

facts.forEach(fact => {
  console.log(`- ${fact.type} pour ${fact.crime}`);
});
```

#### `investigateAll(): QueryResult[]`

Lance une investigation complète de tous les suspects pour tous les crimes.

**Retour :** Array de `QueryResult` filtrés (seulement ceux avec preuves)

**Logique de filtrage :**

```typescript
for (const suspect of suspects) {
  for (const crime of crimes) {
    const result = this.isGuilty(suspect, crime);
    if (result.evidence.length > 0) {
      results.push(result);
    }
  }
}
```

### Configuration avancée

```typescript
const engineConfig: EngineConfig = {
  strictMode: true,        // Toutes conditions requises
  enableCache: true,       // Cache des résultats
  maxDepth: 10            // Limite récursion
};

const engine = new PrologEngine(engineConfig);
```

## 📊 Gestion des données

### Chargement des données

```typescript
// Import depuis le fichier de données
import { suspects, crimes, facts, rules } from '@/data/crimeData';

// Utilisation dans l'application
const engine = new PrologEngine();
console.log(`Système initialisé avec ${facts.length} faits`);
```

### Structure des données

#### Suspects disponibles

```typescript
export const suspects: Suspect[] = [
  { name: 'John', id: 'john' },
  { name: 'Mary', id: 'mary' },
  { name: 'Alice', id: 'alice' },
  { name: 'Bruno', id: 'bruno' },
  { name: 'Sophie', id: 'sophie' }
];
```

#### Types de crimes

```typescript
export const crimes: Crime[] = [
  { type: 'vol', id: 'vol' },
  { type: 'assassinat', id: 'assassinat' },
  { type: 'escroquerie', id: 'escroquerie' }
];
```

#### Base de faits

```typescript
export const facts: Fact[] = [
  // Preuves pour John (vol)
  { type: 'has_motive', suspect: 'john', crime: 'vol' },
  { type: 'was_near_crime_scene', suspect: 'john', crime: 'vol' },
  { type: 'has_fingerprint_on_weapon', suspect: 'john', crime: 'vol' },
  
  // Preuves pour Mary (assassinat)
  { type: 'has_motive', suspect: 'mary', crime: 'assassinat' },
  { type: 'was_near_crime_scene', suspect: 'mary', crime: 'assassinat' },
  { type: 'has_fingerprint_on_weapon', suspect: 'mary', crime: 'assassinat' },
  // ... autres faits
];
```

### Types de preuves disponibles

| Type | Description | Crimes applicables |
|------|-------------|-------------------|
| `has_motive` | Motif établi | Tous |
| `was_near_crime_scene` | Présence sur les lieux | vol, assassinat |
| `has_fingerprint_on_weapon` | Empreintes sur l'arme | vol, assassinat |
| `has_bank_transaction` | Transaction suspecte | escroquerie |
| `owns_fake_identity` | Fausse identité | escroquerie |
| `eyewitness_identification` | Témoin oculaire | assassinat |

## 🎨 Composants React

### QueryInterface

Interface principale d'interrogation du système.

```typescript
interface QueryInterfaceProps {
  onResultChange?: (result: QueryResult | null) => void;
  defaultSuspect?: string;
  defaultCrime?: string;
}

export const QueryInterface: React.FC<QueryInterfaceProps> = ({
  onResultChange,
  defaultSuspect,
  defaultCrime
}) => {
  // Implémentation...
};
```

**État interne :**

```typescript
const [selectedSuspect, setSelectedSuspect] = useState<string>("");
const [selectedCrime, setSelectedCrime] = useState<string>("");
const [queryResult, setQueryResult] = useState<QueryResult | null>(null);
const [isLoading, setIsLoading] = useState(false);
```

**Méthodes principales :**

```typescript
const handleQuery = async () => {
  setIsLoading(true);
  await new Promise(resolve => setTimeout(resolve, 800)); // Simulation
  const result = engine.isGuilty(selectedSuspect, selectedCrime);
  setQueryResult(result);
  setIsLoading(false);
  onResultChange?.(result);
};
```

### SuspectCard

Composant d'affichage d'un suspect avec ses preuves.

```typescript
interface SuspectCardProps {
  name: string;
  facts: Fact[];
  guilt?: { crime: string; guilty: boolean }[];
  onClick?: (suspect: string) => void;
}

export const SuspectCard: React.FC<SuspectCardProps> = ({
  name,
  facts,
  guilt,
  onClick
}) => {
  // Rendu de la carte...
};
```

**Logique de couleur :**

```typescript
const guiltyOfCrimes = guilt?.filter(g => g.guilty) || [];
const isGuilty = guiltyOfCrimes.length > 0;

const cardClass = `p-6 border-2 transition-all duration-300 hover:shadow-lg ${
  isGuilty ? 'border-destructive bg-destructive/5' : 'border-border bg-card'
}`;
```

### RulesDisplay

Affichage formaté des règles du système.

```typescript
interface RulesDisplayProps {
  showExplanation?: boolean;
  highlightRule?: string;
}

export const RulesDisplay: React.FC<RulesDisplayProps> = ({
  showExplanation = true,
  highlightRule
}) => {
  // Rendu des règles...
};
```

## 🔧 Utilitaires

### Fonctions d'aide

```typescript
// Formatage des noms de preuves
export const getFactLabel = (factType: string): string => {
  const labels: Record<string, string> = {
    'has_motive': 'Motif',
    'was_near_crime_scene': 'Près de la scène',
    'has_fingerprint_on_weapon': 'Empreintes sur arme',
    'has_bank_transaction': 'Transaction bancaire',
    'owns_fake_identity': 'Fausse identité',
    'eyewitness_identification': 'Témoin oculaire'
  };
  return labels[factType] || factType;
};

// Icônes pour les types de preuves
export const getFactIcon = (factType: string): React.ReactNode => {
  const icons: Record<string, React.ReactNode> = {
    'has_motive': <UserX className="w-4 h-4" />,
    'was_near_crime_scene': <MapPin className="w-4 h-4" />,
    'has_fingerprint_on_weapon': <Fingerprint className="w-4 h-4" />,
    // ... autres icônes
  };
  return icons[factType] || null;
};
```

### Validation des données

```typescript
// Validation d'un fait
export const validateFact = (fact: Fact): boolean => {
  return (
    typeof fact.type === 'string' &&
    typeof fact.suspect === 'string' &&
    typeof fact.crime === 'string' &&
    fact.type.length > 0 &&
    fact.suspect.length > 0 &&
    fact.crime.length > 0
  );
};

// Validation d'une règle
export const validateRule = (rule: Rule): boolean => {
  return (
    typeof rule.name === 'string' &&
    Array.isArray(rule.conditions) &&
    typeof rule.conclusion === 'string' &&
    rule.conditions.length > 0
  );
};
```

## 🚀 Extensions possibles

### Nouvelle API pour base de données

```typescript
interface DatabaseAPI {
  // Suspects
  createSuspect(suspect: Suspect): Promise<Suspect>;
  updateSuspect(id: string, updates: Partial<Suspect>): Promise<Suspect>;
  deleteSuspect(id: string): Promise<void>;
  
  // Faits
  addFact(fact: Fact): Promise<Fact>;
  removeFact(factId: string): Promise<void>;
  getFactsByCase(caseId: string): Promise<Fact[]>;
  
  // Historique
  saveInvestigation(result: QueryResult): Promise<string>;
  getInvestigationHistory(userId: string): Promise<QueryResult[]>;
}
```

### API Machine Learning

```typescript
interface MLEngine {
  // Prédictions
  predictGuilty(suspect: string, crime: string): Promise<{
    probability: number;
    confidence: number;
    factors: string[];
  }>;
  
  // Apprentissage
  trainModel(cases: QueryResult[]): Promise<void>;
  getModelAccuracy(): Promise<number>;
  
  // Suggestions
  suggestNextSteps(currentState: QueryResult): Promise<string[]>;
}
```

### WebSocket pour collaboration

```typescript
interface CollaborationAPI {
  // Connexion temps réel
  connect(investigationId: string): WebSocket;
  
  // Événements
  onUserJoined(callback: (user: User) => void): void;
  onResultShared(callback: (result: QueryResult, user: User) => void): void;
  
  // Actions collaboratives
  shareResult(result: QueryResult): void;
  requestReview(result: QueryResult, reviewerId: string): void;
}
```

## 📈 Performance

### Optimisations implémentées

- **Cache des résultats** : Évite les recalculs identiques
- **Lazy loading** : Chargement différé des composants
- **Memoization** : React.memo pour les composants
- **Algorithme efficace** : Complexité O(n*m) pour n suspects et m crimes

### Métriques de performance

```typescript
interface PerformanceMetrics {
  queryTime: number;          // Temps de requête (ms)
  memoryUsage: number;        // Mémoire utilisée (MB)
  cacheHitRate: number;       // Taux de succès cache (%)
  rulesEvaluated: number;     // Nombre de règles évaluées
}
```

---

*Documentation générée automatiquement - Version 1.0.0*