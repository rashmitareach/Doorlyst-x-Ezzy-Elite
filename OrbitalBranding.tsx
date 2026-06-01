import React from "react";

interface OrbitalBrandingProps {
  text?: string;
  size?: number;
  speed?: string; // e.g. "20s"
}

export const OrbitalBranding: React.FC<OrbitalBrandingProps> = ({
  text = "EZZY ELITE • LUXURY PRIVATE COMMISSION • LUXID GLOBAL • ",
  size = 180,
  speed = "20s",
}) => {
  const radius = 60;
  const center = 80;

  return (
    <div 
      className="relative flex items-center justify-center select-none" 
      style={{ width: size, height: size }}
      id="branding-orbital-widget"
    >
      {/* Decorative center gold leaf pulse */}
      <div className="absolute w-3 h-3 bg-[#e5383b] rounded-full animate-pulse shadow-[0_0_15px_rgba(229,56,59,0.7)]" />
      <div className="absolute w-12 h-12 border border-[#ba181b]/30 rounded-full animate-ping-slow" />

      {/* Rotating SVG with circle path text */}
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full animate-spin"
        style={{ animationDuration: speed }}
      >
        <defs>
          <path
            id="textCirclePath"
            d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text className="font-mono text-[9px] uppercase tracking-[0.2em] fill-[#b1a7a6] font-medium letter-spacing-1.5 opacity-90">
          <textPath href="#textCirclePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
};
