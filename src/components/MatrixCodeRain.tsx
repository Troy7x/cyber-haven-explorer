
import React, { useEffect, useRef } from 'react';

interface MatrixCodeRainProps {
  density?: number;
  speed?: number;
  color?: string;
}

const MatrixCodeRain: React.FC<MatrixCodeRainProps> = ({
  density = 30,
  speed = 15,
  color = '#0ea5e9'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to use in the Matrix rain
    const matrixChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$+-=*/><[]{}()|~';
    const font_size = 14;

    // Calculate columns (adjust density)
    const columns = Math.floor(canvas.width / (font_size / (35 / density)));
    
    // Array to track the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -500); // Start above viewport at different positions
    }

    // Render the Matrix code rain
    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${font_size}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const character = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Draw the character
        ctx.fillText(character, i * (font_size * 0.6), drops[i] * font_size);

        // Move the drop down
        drops[i]++;

        // Randomly reset drop position if it's off screen or randomly
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };

    // Animation loop
    const animationSpeed = 35 - speed; // Invert speed so higher number = faster
    const interval = setInterval(draw, animationSpeed);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [density, speed, color]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default MatrixCodeRain;
