import { Suspect, Crime, Fact, Rule } from '@/types/CrimeSystem';

export const suspects: Suspect[] = [
  { name: 'Jean Dupont', id: 'jean' },
  { name: 'Marie Martin', id: 'marie' },
  { name: 'Alice Bernard', id: 'alice' },
  { name: 'Bruno Moreau', id: 'bruno' },
  { name: 'Sophie Dubois', id: 'sophie' },
  { name: 'Paul Lemaire', id: 'paul' },
  { name: 'Julie Rousseau', id: 'julie' },
  { name: 'Marc Petit', id: 'marc' }
];

export const crimes: Crime[] = [
  { type: 'Vol à main armée', id: 'vol' },
  { type: 'Assassinat', id: 'assassinat' },
  { type: 'Escroquerie financière', id: 'escroquerie' },
  { type: 'Cybercriminalité', id: 'cybercrime' },
  { type: 'Corruption', id: 'corruption' },
  { type: 'Trafic de drogue', id: 'trafic' },
  { type: 'Fraude fiscale', id: 'fraude' },
  { type: 'Blanchiment d\'argent', id: 'blanchiment' }
];

export const facts: Fact[] = [
  // === FAITS CONCERNANT LES SUSPECTS ===
  
  // Jean Dupont - Vol à main armée
  { type: 'has_motive', suspect: 'jean', crime: 'vol' },
  { type: 'was_near_crime_scene', suspect: 'jean', crime: 'vol' },
  { type: 'has_fingerprint_on_weapon', suspect: 'jean', crime: 'vol' },
  { type: 'has_camera_evidence', suspect: 'jean', crime: 'vol' },

  // Marie Martin - Assassinat
  { type: 'has_motive', suspect: 'marie', crime: 'assassinat' },
  { type: 'was_near_crime_scene', suspect: 'marie', crime: 'assassinat' },
  { type: 'has_fingerprint_on_weapon', suspect: 'marie', crime: 'assassinat' },
  { type: 'has_dna_evidence', suspect: 'marie', crime: 'assassinat' },
  { type: 'eyewitness_identification', suspect: 'marie', crime: 'assassinat' },

  // Alice Bernard - Escroquerie financière
  { type: 'has_motive', suspect: 'alice', crime: 'escroquerie' },
  { type: 'has_bank_transaction', suspect: 'alice', crime: 'escroquerie' },
  { type: 'owns_fake_identity', suspect: 'alice', crime: 'escroquerie' },

  // Bruno Moreau - Cybercriminalité
  { type: 'has_motive', suspect: 'bruno', crime: 'cybercrime' },
  { type: 'has_computer_evidence', suspect: 'bruno', crime: 'cybercrime' },
  { type: 'has_network_logs', suspect: 'bruno', crime: 'cybercrime' },

  // Sophie Dubois - Corruption
  { type: 'has_motive', suspect: 'sophie', crime: 'corruption' },
  { type: 'has_bank_transaction', suspect: 'sophie', crime: 'corruption' },
  { type: 'has_phone_records', suspect: 'sophie', crime: 'corruption' },

  // Paul Lemaire - Trafic de drogue
  { type: 'has_motive', suspect: 'paul', crime: 'trafic' },
  { type: 'was_near_crime_scene', suspect: 'paul', crime: 'trafic' },
  { type: 'has_phone_records', suspect: 'paul', crime: 'trafic' },
  { type: 'has_camera_evidence', suspect: 'paul', crime: 'trafic' },

  // Julie Rousseau - Fraude fiscale
  { type: 'has_motive', suspect: 'julie', crime: 'fraude' },
  { type: 'has_bank_transaction', suspect: 'julie', crime: 'fraude' },
  { type: 'has_document_evidence', suspect: 'julie', crime: 'fraude' },

  // Marc Petit - Blanchiment d'argent
  { type: 'has_motive', suspect: 'marc', crime: 'blanchiment' },
  { type: 'has_bank_transaction', suspect: 'marc', crime: 'blanchiment' },
  { type: 'has_property_evidence', suspect: 'marc', crime: 'blanchiment' },

  // === FAITS CROISÉS (Plusieurs suspects) ===
  { type: 'has_alibi', suspect: 'bruno', crime: 'vol' },
  { type: 'has_alibi', suspect: 'sophie', crime: 'assassinat' },
  { type: 'was_near_crime_scene', suspect: 'paul', crime: 'vol' }
];

export const rules: Rule[] = [
  // === RÈGLES POUR LES CRIMES VIOLENTS ===
  {
    name: 'is_guilty_assassination',
    conditions: [
      'has_motive',
      'was_near_crime_scene', 
      'has_fingerprint_on_weapon',
      'has_dna_evidence',
      'eyewitness_identification'
    ],
    conclusion: 'guilty of assassination'
  },
  {
    name: 'is_guilty_vol',
    conditions: [
      'has_motive',
      'was_near_crime_scene',
      'has_fingerprint_on_weapon',
      'has_camera_evidence'
    ],
    conclusion: 'guilty of vol'
  },

  // === RÈGLES POUR LES CRIMES FINANCIERS ===
  {
    name: 'is_guilty_escroquerie',
    conditions: [
      'has_motive',
      'has_bank_transaction',
      'owns_fake_identity'
    ],
    conclusion: 'guilty of escroquerie'
  },
  {
    name: 'is_guilty_fraude',
    conditions: [
      'has_motive',
      'has_bank_transaction',
      'has_document_evidence'
    ],
    conclusion: 'guilty of fraude'
  },
  {
    name: 'is_guilty_blanchiment',
    conditions: [
      'has_motive',
      'has_bank_transaction',
      'has_property_evidence'
    ],
    conclusion: 'guilty of blanchiment'
  },

  // === RÈGLES POUR LES CRIMES TECHNOLOGIQUES ===
  {
    name: 'is_guilty_cybercrime',
    conditions: [
      'has_motive',
      'has_computer_evidence',
      'has_network_logs'
    ],
    conclusion: 'guilty of cybercrime'
  },

  // === RÈGLES POUR LES CRIMES INSTITUTIONNELS ===
  {
    name: 'is_guilty_corruption',
    conditions: [
      'has_motive',
      'has_bank_transaction',
      'has_phone_records'
    ],
    conclusion: 'guilty of corruption'
  },
  {
    name: 'is_guilty_trafic',
    conditions: [
      'has_motive',
      'was_near_crime_scene',
      'has_phone_records',
      'has_camera_evidence'
    ],
    conclusion: 'guilty of trafic'
  },

  // === RÈGLES D'INNOCENCE ===
  {
    name: 'is_innocent_alibi',
    conditions: [
      'has_alibi'
    ],
    conclusion: 'not guilty - alibi confirmed'
  }
];