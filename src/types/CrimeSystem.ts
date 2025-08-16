export interface Suspect {
  name: string;
  id: string;
}

export interface Crime {
  type: string;
  id: string;
}

export interface Fact {
  type: 'has_motive' | 'was_near_crime_scene' | 'has_fingerprint_on_weapon' | 'has_bank_transaction' | 'owns_fake_identity' | 'eyewitness_identification';
  suspect: string;
  crime: string;
}

export interface Rule {
  name: string;
  conditions: string[];
  conclusion: string;
}

export interface QueryResult {
  suspect: string;
  crime: string;
  guilty: boolean;
  evidence: string[];
  reasoning: string[];
}