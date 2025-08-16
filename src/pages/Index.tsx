import { SuspectCard } from "@/components/SuspectCard";
import { QueryInterface } from "@/components/QueryInterface";
import { RulesDisplay } from "@/components/RulesDisplay";
import { PrologEngine } from "@/utils/prolog";
import { suspects } from "@/data/crimeData";
import { Shield, Scale, Brain, FileSearch } from "lucide-react";

const Index = () => {
  const engine = new PrologEngine();
  
  // Get investigation results for display
  const investigationResults = engine.investigateAll();
  const suspectGuiltyMap = new Map<string, { crime: string; guilty: boolean }[]>();
  
  investigationResults.forEach(result => {
    if (!suspectGuiltyMap.has(result.suspect)) {
      suspectGuiltyMap.set(result.suspect, []);
    }
    suspectGuiltyMap.get(result.suspect)!.push({ 
      crime: result.crime, 
      guilty: result.guilty 
    });
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-card border-b border-border">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
        }}></div>
        
        <div className="relative container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Système d'Enquête 
              <span className="text-primary"> PROLOG</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Système expert d'investigation policière utilisant la programmation logique. 
              Analysez les preuves et déterminez la culpabilité des suspects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 border border-border/50">
                <Brain className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Intelligence Artificielle</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Moteur d'inférence basé sur PROLOG
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 border border-border/50">
                <Scale className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Logique Déductive</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Règles et faits pour l'analyse
                </p>
              </div>
              
              <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 border border-border/50">
                <FileSearch className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Investigation</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Analyse des preuves et suspects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="space-y-12">
          {/* Query Interface */}
          <QueryInterface />

          {/* Suspects Grid */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Suspects & Preuves
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suspects.map(suspect => {
                const facts = engine.getFactsForSuspect(suspect.id);
                const guilt = suspectGuiltyMap.get(suspect.id) || [];
                
                return (
                  <SuspectCard 
                    key={suspect.id}
                    name={suspect.name}
                    facts={facts}
                    guilt={guilt}
                  />
                );
              })}
            </div>
          </div>

          {/* Rules Display */}
          <RulesDisplay />
        </div>
      </div>
    </div>
  );
};

export default Index;
