import { ImageWithFallback } from './figma/ImageWithFallback';
import { UI_SPRITES } from '../data/sprites';
import { useState } from 'react';

interface StartScreenProps {
  onStart: () => void;
  frameWidth: number;
}

export function StartScreen({ onStart, frameWidth }: StartScreenProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Calcular dimensiones del logo basándose en frameWidth
  // Logo escalado proporcionalmente al marco decorativo (frameWidth base: 112px)
  // Logo con ancho de aproximadamente 90% del frameWidth para dejarlo centrado con margen
  const logoWidth = frameWidth;

  return (
    <div className="flex flex-col items-center justify-center gap-12 p-8 text-center h-full">
      {/* ═══════════════════════════════════════════════════════════
          LOGO DEL TÍTULO
          ═══════════════════════════════════════════════════════════
          CÓMO REEMPLAZAR:
          1. Sube tu imagen a: /ui/title-logo.png
          2. Tamaño recomendado: 800x200px (horizontal)
          3. Estilo: Logo "DRYB4LL" en pixel art
          ═══════════════════════════════════════════════════════════ */}
      <div className="animate-pulse">
        <ImageWithFallback 
          src={UI_SPRITES.titleLogo}
          alt="DRYB4LL"
          className="object-contain"
          style={{ 
            imageRendering: 'pixelated',
            width: `${logoWidth}px`,
            height: 'auto',
          }}
        />
      </div>
      
      {/* ═══════════════════════════════════════════════════════════
          BOTÓN DE COMENZAR
          ═══════════════════════════════════════════════════════════
          CÓMO REEMPLAZAR:
          1. Sube tus imágenes a: /ui/button-start.png y /ui/button-start-hover.png
          2. Tamaño recomendado: 400x120px (horizontal)
          3. Estilo: Botón "COMENZAR" en pixel art
          ═══════════════════════════════════════════════════════════ */}
      <button
        onClick={onStart}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="animate-pulse transition-transform hover:scale-105"
      >
        <ImageWithFallback 
          src={isHovered ? UI_SPRITES.buttonStartHover : UI_SPRITES.buttonStart}
          alt="Comenzar"
          className="w-auto h-auto object-contain"
          style={{ 
            imageRendering: 'pixelated',
            transform: 'scale(2)'
          }}
        />
      </button>
    </div>
  );
}
