
import React, { useEffect, useRef } from 'react';

interface HexagonNetworkProps {
  nodeCount?: number;
}

const HexagonNetwork: React.FC<HexagonNetworkProps> = ({ nodeCount = 15 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Clear any existing nodes
    const existingNodes = container.querySelectorAll('.hexagon-node');
    existingNodes.forEach(node => node.remove());
    
    // Create random pulsing nodes
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      node.classList.add('hexagon-node');
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      node.style.left = `${x}%`;
      node.style.top = `${y}%`;
      
      // Random size
      const size = Math.random() * 2 + 2;
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      
      // Random animation delay
      const delay = Math.random() * 5;
      node.style.animationDelay = `${delay}s`;
      
      container.appendChild(node);
    }

    // Animation frame for connecting lines
    let animationFrameId: number;
    const ctx = document.createElement('canvas').getContext('2d');
    
    if (ctx) {
      const canvas = ctx.canvas;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '1';
      container.appendChild(canvas);
      
      const drawLines = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const nodes = container.querySelectorAll('.hexagon-node');
        const nodePositions: { x: number, y: number, active: boolean }[] = [];
        
        nodes.forEach(node => {
          const rect = node.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          
          nodePositions.push({
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2,
            active: node.classList.contains('active')
          });
        });
        
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.2)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < nodePositions.length; i++) {
          for (let j = i + 1; j < nodePositions.length; j++) {
            const distance = Math.sqrt(
              Math.pow(nodePositions[i].x - nodePositions[j].x, 2) +
              Math.pow(nodePositions[i].y - nodePositions[j].y, 2)
            );
            
            if (distance < 150) {
              const opacity = 0.2 * (1 - distance / 150);
              ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
              
              ctx.beginPath();
              ctx.moveTo(nodePositions[i].x, nodePositions[i].y);
              ctx.lineTo(nodePositions[j].x, nodePositions[j].y);
              ctx.stroke();
            }
          }
        }
        
        animationFrameId = requestAnimationFrame(drawLines);
      };
      
      drawLines();
      
      // Handle window resize
      const handleResize = () => {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [nodeCount]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="hexagon-grid"></div>
    </div>
  );
};

export default HexagonNetwork;
