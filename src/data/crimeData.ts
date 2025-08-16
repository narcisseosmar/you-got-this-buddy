import { Suspect, Crime, Fact, Rule } from '@/types/CrimeSystem';

export const suspects: Suspect[] = [
  { name: 'John', id: 'john' },
  { name: 'Mary', id: 'mary' },
  { name: 'Alice', id: 'alice' },
  { name: 'Bruno', id: 'bruno' },
  { name: 'Sophie', id: 'sophie' }
];

export const crimes: Crime[] = [
  { type: 'vol', id: 'vol' },
  { type: 'assassinat', id: 'assassinat' },
  { type: 'escroquerie', id: 'escroquerie' }
];

export const facts: Fact[] = [
  // John - Vol
  { type: 'has_motive', suspect: 'john', crime: 'vol' },
  { type: 'was_near_crime_scene', suspect: 'john', crime: 'vol' },
  { type: 'has_fingerprint_on_weapon', suspect: 'john', crime: 'vol' },

  // Mary - Assassinat
  { type: 'has_motive', suspect: 'mary', crime: 'assassinat' },
  { type: 'was_near_crime_scene', suspect: 'mary', crime: 'assassinat' },
  { type: 'has_fingerprint_on_weapon', suspect: 'mary', crime: 'assassinat' },

  // Alice - Escroquerie
  { type: 'has_motive', suspect: 'alice', crime: 'escroquerie' },
  { type: 'has_bank_transaction', suspect: 'alice', crime: 'escroquerie' },

  // Bruno - Escroquerie
  { type: 'has_bank_transaction', suspect: 'bruno', crime: 'escroquerie' },

  // Sophie - Escroquerie
  { type: 'owns_fake_identity', suspect: 'sophie', crime: 'escroquerie' }
];

export const rules: Rule[] = [
  {
    name: 'is_guilty_assassination',
    conditions: [
      'has_motive',
      'was_near_crime_scene', 
      'has_fingerprint_on_weapon',
      'eyewitness_identification'
    ],
    conclusion: 'guilty of assassination'
  },
  {
    name: 'is_guilty_vol',
    conditions: [
      'has_motive',
      'was_near_crime_scene',
      'has_fingerprint_on_weapon'
    ],
    conclusion: 'guilty of vol'
  },
  {
    name: 'is_guilty_escroquerie',
    conditions: [
      'has_motive',
      'has_bank_transaction'
    ],
    conclusion: 'guilty of escroquerie'
  }
];