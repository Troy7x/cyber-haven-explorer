
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface HackingToolProps {
  tool: {
    name: string;
    category: string;
    description: string;
    icon: LucideIcon;
    url: string;
    complexity: string;
    usage: string;
  };
}

const HackingToolCard: React.FC<HackingToolProps> = ({ tool }) => {
  const getComplexityColor = (complexity: string) => {
    switch (complexity.toLowerCase()) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-green-400';
      default:
        return 'text-blue-400';
    }
  };
  
  return (
    <div className="cyber-card p-5 rounded-xl transition-all duration-300 border border-white/10 hover:border-cyber-accent/50 relative overflow-hidden group">
      {/* Background glow effect */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-transparent via-transparent to-cyber-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="flex items-start gap-3 mb-3 relative z-10">
        <div className="p-2 bg-cyber-accent/10 rounded-md text-cyber-accent">
          <tool.icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-white group-hover:text-cyber-accent transition-colors">{tool.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded">{tool.category}</span>
            <span className={`text-xs ${getComplexityColor(tool.complexity)}`}>
              {tool.complexity} complexity
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-white/70 text-sm mb-3 relative z-10">{tool.description}</p>
      
      <div className="bg-cyber-darker rounded-md p-3 text-xs text-white/60 mb-3 relative z-10">
        <strong className="block text-white/80 mb-1">Primary uses:</strong>
        {tool.usage}
      </div>
      
      <a 
        href={tool.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-cyber-accent hover:text-cyber-accent/80 text-sm flex items-center justify-end mt-2 relative z-10"
      >
        Learn more <ExternalLink className="h-3 w-3 ml-1" />
      </a>
    </div>
  );
};

export default HackingToolCard;
