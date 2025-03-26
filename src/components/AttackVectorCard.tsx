
import React, { useState } from 'react';
import { Code, ShieldCheck, Tool, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface AttackVectorProps {
  attackVector: {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    technicalDetails: string;
    examples: string[];
    countermeasures: string[];
    tools: string[];
    severity: string;
  };
}

const AttackVectorCard: React.FC<AttackVectorProps> = ({ attackVector }) => {
  const [expanded, setExpanded] = useState(false);
  
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'bg-red-900/50 text-red-200';
      case 'high':
        return 'bg-orange-900/50 text-orange-200';
      case 'medium':
        return 'bg-yellow-900/50 text-yellow-200';
      case 'low':
        return 'bg-green-900/50 text-green-200';
      default:
        return 'bg-blue-900/50 text-blue-200';
    }
  };
  
  return (
    <div className="cyber-card p-5 rounded-xl transition-all duration-300 hover:shadow-glow-sm">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-cyber-accent/20 rounded-md text-cyber-accent">
          <attackVector.icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-white">{attackVector.title}</h3>
            <span className={`px-2 py-0.5 rounded text-xs ${getSeverityColor(attackVector.severity)}`}>
              {attackVector.severity}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-white/70 text-sm mb-3">{attackVector.description}</p>
      
      <Button 
        variant="ghost" 
        onClick={() => setExpanded(!expanded)} 
        className="w-full justify-between text-cyber-accent hover:text-cyber-accent/80 hover:bg-white/5 p-2"
      >
        <span>Technical Details</span>
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>
      
      {expanded && (
        <div className="mt-3 space-y-4 animate-accordion-down">
          <div>
            <p className="text-white/80 text-sm mb-2">{attackVector.technicalDetails}</p>
          </div>
          
          <div>
            <div className="flex items-center text-white/90 mb-2">
              <Code className="h-4 w-4 mr-2 text-cyber-accent" />
              <h4 className="text-sm font-medium">Examples</h4>
            </div>
            <div className="bg-cyber-darker rounded-md p-3 overflow-x-auto font-mono text-xs">
              {attackVector.examples.map((example, index) => (
                <div key={index} className="mb-1 last:mb-0 text-cyan-400">
                  {example}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center text-white/90 mb-2">
              <ShieldCheck className="h-4 w-4 mr-2 text-green-500" />
              <h4 className="text-sm font-medium">Countermeasures</h4>
            </div>
            <ul className="list-disc list-inside space-y-1 text-white/70 text-sm ml-1">
              {attackVector.countermeasures.map((measure, index) => (
                <li key={index}>{measure}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="flex items-center text-white/90 mb-2">
              <Tool className="h-4 w-4 mr-2 text-orange-400" />
              <h4 className="text-sm font-medium">Tools</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {attackVector.tools.map((tool, index) => (
                <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded text-white/70">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttackVectorCard;
