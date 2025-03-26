
import React from 'react';
import { Download, BookOpen, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResourceProps {
  resource: {
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    downloadUrl: string;
    category: string;
    language: string;
    pages: number;
  };
}

const ResourceCard: React.FC<ResourceProps> = ({ resource }) => {
  return (
    <div className="cyber-card p-5 rounded-xl hover:shadow-lg transition-all duration-300 group border border-cyber-accent/20 hover:border-cyber-accent/50">
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-24 h-32 overflow-hidden rounded-md bg-cyber-darker flex-shrink-0">
            {resource.imageUrl ? (
              <img 
                src={resource.imageUrl} 
                alt={resource.title} 
                className="object-cover w-full h-full"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-cyber-darker text-cyber-accent">
                <BookOpen className="w-12 h-12 opacity-50" />
              </div>
            )}
            <div className="absolute top-0 right-0 bg-cyber-accent/80 text-black text-xs font-bold py-1 px-2 rounded-bl">
              {resource.category}
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-medium text-white mb-1 group-hover:text-cyber-accent transition-colors">
              {resource.title}
            </h3>
            <p className="text-white/60 text-sm mb-2">{resource.author}</p>
            <div className="flex flex-wrap gap-2 text-xs text-white/50">
              <span className="inline-flex items-center">
                <Languages className="w-3 h-3 mr-1" /> {resource.language}
              </span>
              <span>{resource.pages} pages</span>
            </div>
          </div>
        </div>
        
        <p className="text-white/70 text-sm mb-4 line-clamp-3">{resource.description}</p>
        
        <div className="mt-auto pt-2">
          <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="w-full cyber-btn-outline flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              <span>Download Resource</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
