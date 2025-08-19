import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fact } from "@/types/CrimeSystem";
import { UserX, Eye, Fingerprint, MapPin, CreditCard, IdCard, AlertCircle, Target, User } from "lucide-react";

interface SuspectCardProps {
  name: string;
  facts: Fact[];
  guilt?: { crime: string; guilty: boolean }[];
}

const getFactIcon = (factType: string) => {
  switch (factType) {
    case 'has_motive':
      return <Target className="w-4 h-4" />;
    case 'was_near_crime_scene':
      return <MapPin className="w-4 h-4" />;
    case 'has_fingerprint_on_weapon':
      return <Fingerprint className="w-4 h-4" />;
    case 'has_bank_transaction':
      return <CreditCard className="w-4 h-4" />;
    case 'owns_fake_identity':
      return <User className="w-4 h-4" />;
    case 'eyewitness_identification':
      return <Eye className="w-4 h-4" />;
    case 'has_dna_evidence':
      return <AlertCircle className="w-4 h-4" />;
    case 'has_camera_evidence':
      return <Eye className="w-4 h-4" />;
    case 'has_computer_evidence':
      return <AlertCircle className="w-4 h-4" />;
    case 'has_network_logs':
      return <AlertCircle className="w-4 h-4" />;
    case 'has_phone_records':
      return <AlertCircle className="w-4 h-4" />;
    case 'has_document_evidence':
      return <AlertCircle className="w-4 h-4" />;
    case 'has_property_evidence':
      return <AlertCircle className="w-4 h-4" />;
    case 'has_alibi':
      return <AlertCircle className="w-4 h-4" />;
    default:
      return null;
  }
};

const getFactLabel = (factType: string) => {
  switch (factType) {
    case 'has_motive':
      return 'Mobile identifié';
    case 'was_near_crime_scene':
      return 'Présence sur les lieux';
    case 'has_fingerprint_on_weapon':
      return 'Empreintes sur l\'arme';
    case 'has_bank_transaction':
      return 'Transaction bancaire';
    case 'owns_fake_identity':
      return 'Fausse identité';
    case 'eyewitness_identification':
      return 'Témoin oculaire';
    case 'has_dna_evidence':
      return 'Preuves ADN';
    case 'has_camera_evidence':
      return 'Vidéosurveillance';
    case 'has_computer_evidence':
      return 'Preuves informatiques';
    case 'has_network_logs':
      return 'Logs réseau';
    case 'has_phone_records':
      return 'Relevés téléphoniques';
    case 'has_document_evidence':
      return 'Documents falsifiés';
    case 'has_property_evidence':
      return 'Biens suspects';
    case 'has_alibi':
      return 'Alibi confirmé';
    default:
      return factType;
  }
};

export const SuspectCard = ({ name, facts, guilt }: SuspectCardProps) => {
  const guiltyOfCrimes = guilt?.filter(g => g.guilty) || [];
  const isGuilty = guiltyOfCrimes.length > 0;

  return (
    <Card className={`p-6 border-2 transition-all duration-300 hover:shadow-lg ${
      isGuilty ? 'border-destructive bg-destructive/5' : 'border-border bg-card'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-foreground capitalize">{name}</h3>
        {isGuilty && (
          <Badge variant="destructive" className="font-semibold">
            COUPABLE
          </Badge>
        )}
      </div>

      {guiltyOfCrimes.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-destructive mb-2">Crimes confirmés:</h4>
          <div className="flex flex-wrap gap-1">
            {guiltyOfCrimes.map(({ crime }) => (
              <Badge key={crime} variant="outline" className="border-destructive text-destructive">
                {crime}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-muted-foreground">Preuves disponibles:</h4>
        {facts.length === 0 ? (
          <p className="text-sm text-muted-foreground italic">Aucune preuve</p>
        ) : (
          <div className="space-y-2">
            {facts.map((fact, index) => (
              <div key={index} className="flex items-center justify-between p-2 rounded bg-secondary/50">
                <div className="flex items-center gap-2">
                  {getFactIcon(fact.type)}
                  <span className="text-sm">{getFactLabel(fact.type)}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {fact.crime}
                </Badge>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};