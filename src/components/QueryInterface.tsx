import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { PrologEngine } from "@/utils/prolog";
import { QueryResult } from "@/types/CrimeSystem";
import { Search, CheckCircle, XCircle, Brain } from "lucide-react";
import { suspects, crimes } from "@/data/crimeData";

export const QueryInterface = () => {
  const [selectedSuspect, setSelectedSuspect] = useState<string>("");
  const [selectedCrime, setSelectedCrime] = useState<string>("");
  const [queryResult, setQueryResult] = useState<QueryResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const engine = new PrologEngine();

  const handleQuery = async () => {
    if (!selectedSuspect || !selectedCrime) return;
    
    setIsLoading(true);
    // Simulate processing time for dramatic effect
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const result = engine.isGuilty(selectedSuspect, selectedCrime);
    setQueryResult(result);
    setIsLoading(false);
  };

  const handleInvestigateAll = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const results = engine.investigateAll();
    // For display purposes, show the first guilty result or most evidence
    const bestResult = results
      .filter(r => r.guilty)
      .sort((a, b) => b.evidence.length - a.evidence.length)[0] || 
      results.sort((a, b) => b.evidence.length - a.evidence.length)[0];
    
    setQueryResult(bestResult);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-r from-card to-card/50 border-primary/20">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Système d'Enquête PROLOG</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Suspect:</label>
            <Select value={selectedSuspect} onValueChange={setSelectedSuspect}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un suspect" />
              </SelectTrigger>
              <SelectContent>
                {suspects.map(suspect => (
                  <SelectItem key={suspect.id} value={suspect.id}>
                    {suspect.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Crime:</label>
            <Select value={selectedCrime} onValueChange={setSelectedCrime}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner un crime" />
              </SelectTrigger>
              <SelectContent>
                {crimes.map(crime => (
                  <SelectItem key={crime.id} value={crime.id}>
                    {crime.type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Button 
              onClick={handleQuery} 
              disabled={!selectedSuspect || !selectedCrime || isLoading}
              className="flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              {isLoading ? "Analyse..." : "Enquêter"}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleInvestigateAll}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <Brain className="w-4 h-4" />
              Investigation complète
            </Button>
          </div>
        </div>
      </Card>

      {queryResult && (
        <Card className={`p-6 border-2 transition-all duration-500 ${
          queryResult.guilty 
            ? 'border-destructive bg-destructive/5' 
            : 'border-success bg-success/5'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {queryResult.guilty ? (
                <XCircle className="w-6 h-6 text-destructive" />
              ) : (
                <CheckCircle className="w-6 h-6 text-success" />
              )}
              <h3 className="text-xl font-bold">
                Résultat: {queryResult.suspect} / {queryResult.crime}
              </h3>
            </div>
            <Badge 
              variant={queryResult.guilty ? "destructive" : "default"}
              className={queryResult.guilty ? "" : "bg-success text-success-foreground"}
            >
              {queryResult.guilty ? "COUPABLE" : "NON COUPABLE"}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Preuves trouvées:</h4>
              <div className="space-y-2">
                {queryResult.evidence.length === 0 ? (
                  <p className="text-muted-foreground italic">Aucune preuve</p>
                ) : (
                  queryResult.evidence.map((evidence, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded bg-secondary/50">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-sm">{evidence}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-foreground">Raisonnement:</h4>
              <div className="space-y-1 font-mono text-xs">
                {queryResult.reasoning.map((step, index) => (
                  <div key={index} className={`p-2 rounded ${
                    step.includes('✓') ? 'bg-success/10 text-success' :
                    step.includes('✗') ? 'bg-destructive/10 text-destructive' :
                    'bg-secondary/30 text-muted-foreground'
                  }`}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};