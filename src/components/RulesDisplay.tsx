import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { rules } from "@/data/crimeData";
import { Scale, ArrowRight } from "lucide-react";

export const RulesDisplay = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Scale className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Règles du Système</h2>
      </div>

      <div className="space-y-4">
        {rules.map((rule, index) => (
          <div key={index} className="p-4 rounded-lg bg-secondary/30 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="font-mono text-xs">
                {rule.name}
              </Badge>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">SI:</h4>
                <div className="flex flex-wrap gap-2">
                  {rule.conditions.map((condition, condIndex) => (
                    <div key={condIndex} className="flex items-center gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {condition}
                      </Badge>
                      {condIndex < rule.conditions.length - 1 && (
                        <span className="text-muted-foreground text-xs">ET</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>

              <div className="flex-1">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">ALORS:</h4>
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  {rule.conclusion}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted/50">
        <h3 className="font-semibold text-foreground mb-2">Comment ça marche:</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Le système utilise la logique de programmation PROLOG pour analyser les faits et appliquer les règles. 
          Chaque règle définit les conditions nécessaires pour déterminer la culpabilité d'un suspect pour un crime spécifique. 
          Le moteur d'inférence vérifie si toutes les conditions sont satisfaites par les faits disponibles.
        </p>
      </div>
    </Card>
  );
};