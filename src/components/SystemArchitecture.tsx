import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Cpu, Monitor, Users, FileText, Shield, Network } from "lucide-react";

export const SystemArchitecture = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Architecture du Système Expert PROLOG
          </CardTitle>
          <CardDescription>
            Structure académique d'un système d'intelligence artificielle symbolique
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Base de Connaissances */}
          <div className="border rounded-lg p-4">
            <h3 className="flex items-center gap-2 font-semibold mb-3">
              <Database className="h-4 w-4" />
              Base de Connaissances
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-center">
                  <Users className="h-3 w-3 mr-1" />
                  Suspects (8)
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Entités représentant les personnes sous enquête
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-center">
                  <Shield className="h-3 w-3 mr-1" />
                  Crimes (8)
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Types de crimes: vol, assassinat, cybercrime, corruption...
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-center">
                  <FileText className="h-3 w-3 mr-1" />
                  Preuves (14)
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Types de preuves: ADN, empreintes, vidéo, documents...
                </p>
              </div>
            </div>
          </div>

          {/* Moteur d'Inférence */}
          <div className="border rounded-lg p-4">
            <h3 className="flex items-center gap-2 font-semibold mb-3">
              <Cpu className="h-4 w-4" />
              Moteur d'Inférence PROLOG
            </h3>
            <div className="space-y-3">
              <div className="bg-muted/50 p-3 rounded-md">
                <h4 className="font-medium">Algorithme de Résolution</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Utilise l'unification et la résolution SLD pour déduire la culpabilité
                </p>
              </div>
              <div className="bg-muted/50 p-3 rounded-md">
                <h4 className="font-medium">Cache Intelligence</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Optimisation des requêtes répétées avec mémorisation des résultats
                </p>
              </div>
              <div className="bg-muted/50 p-3 rounded-md">
                <h4 className="font-medium">Analyse de Patterns</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Détection automatique de comportements suspects récurrents
                </p>
              </div>
            </div>
          </div>

          {/* Règles Logiques */}
          <div className="border rounded-lg p-4">
            <h3 className="flex items-center gap-2 font-semibold mb-3">
              <Network className="h-4 w-4" />
              Système de Règles (9 règles)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Crimes Violents</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Règle assassinat (5 conditions)</li>
                  <li>• Règle vol armé (4 conditions)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Crimes Financiers</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Règle escroquerie (3 conditions)</li>
                  <li>• Règle fraude fiscale (3 conditions)</li>
                  <li>• Règle blanchiment (3 conditions)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Crimes Technologiques</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Règle cybercriminalité (3 conditions)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Crimes Institutionnels</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Règle corruption (3 conditions)</li>
                  <li>• Règle trafic de drogue (4 conditions)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Interface Utilisateur */}
          <div className="border rounded-lg p-4">
            <h3 className="flex items-center gap-2 font-semibold mb-3">
              <Monitor className="h-4 w-4" />
              Interface Utilisateur
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Requêtes Interactives</h4>
                <p className="text-sm text-muted-foreground">
                  Sélection suspect/crime avec analyse IA en temps réel
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Investigation Complète</h4>
                <p className="text-sm text-muted-foreground">
                  Analyse de tous les cas avec score de confiance
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};