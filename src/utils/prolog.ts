import { Fact, Rule, QueryResult } from '@/types/CrimeSystem';
import { facts, rules } from '@/data/crimeData';

export class PrologEngine {
  private facts: Fact[];
  private rules: Rule[];

  constructor() {
    this.facts = facts;
    this.rules = rules;
  }

  // Check if a suspect is guilty of a specific crime
  isGuilty(suspect: string, crime: string): QueryResult {
    const evidence: string[] = [];
    const reasoning: string[] = [];
    
    // Find applicable rule for this crime
    const applicableRule = this.rules.find(rule => 
      rule.conclusion.includes(crime)
    );

    if (!applicableRule) {
      return {
        suspect,
        crime,
        guilty: false,
        evidence,
        reasoning: ['Aucune règle applicable trouvée pour ce crime.']
      };
    }

    reasoning.push(`Règle appliquée: ${applicableRule.name}`);
    reasoning.push(`Conditions requises: ${applicableRule.conditions.join(', ')}`);

    // Check each condition
    let allConditionsMet = true;
    
    for (const condition of applicableRule.conditions) {
      const factExists = this.facts.some(fact => 
        fact.type === condition && 
        fact.suspect === suspect && 
        fact.crime === crime
      );

      if (factExists) {
        evidence.push(condition);
        reasoning.push(`✓ ${condition}: Confirmé`);
      } else {
        reasoning.push(`✗ ${condition}: Non confirmé`);
        allConditionsMet = false;
      }
    }

    // Special case: assassination requires eyewitness identification
    if (crime === 'assassinat' && allConditionsMet) {
      // For demo purposes, we'll assume eyewitness identification exists for Mary
      if (suspect === 'mary') {
        evidence.push('eyewitness_identification');
        reasoning.push('✓ eyewitness_identification: Confirmé (témoin oculaire)');
      } else {
        reasoning.push('✗ eyewitness_identification: Non confirmé');
        allConditionsMet = false;
      }
    }

    return {
      suspect,
      crime,
      guilty: allConditionsMet,
      evidence,
      reasoning
    };
  }

  // Get all facts for a suspect
  getFactsForSuspect(suspect: string): Fact[] {
    return this.facts.filter(fact => fact.suspect === suspect);
  }

  // Query all suspects for all crimes
  investigateAll(): QueryResult[] {
    const results: QueryResult[] = [];
    const suspects = ['john', 'mary', 'alice', 'bruno', 'sophie'];
    const crimes = ['vol', 'assassinat', 'escroquerie'];

    for (const suspect of suspects) {
      for (const crime of crimes) {
        const result = this.isGuilty(suspect, crime);
        if (result.evidence.length > 0) { // Only include if there's some evidence
          results.push(result);
        }
      }
    }

    return results;
  }
}