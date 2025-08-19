export interface Suspect {
  name: string;
  id: string;
}

export interface Crime {
  type: string;
  id: string;
}

export interface Fact {
  type: 'has_motive' | 'was_near_crime_scene' | 'has_fingerprint_on_weapon' | 'has_bank_transaction' | 
        'owns_fake_identity' | 'eyewitness_identification' | 'has_dna_evidence' | 'has_camera_evidence' |
        'has_computer_evidence' | 'has_network_logs' | 'has_phone_records' | 'has_document_evidence' |
        'has_property_evidence' | 'has_alibi';
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