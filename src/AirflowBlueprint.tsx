import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wind, Volume2, Shield, Activity, Radio, Minimize2 } from "lucide-react";

interface AirflowBlueprintProps {
  onClose?: () => void;
}

export const AirflowBlueprint: React.FC<AirflowBlueprintProps> = ({ onClose }) => {
  const [windSpeed, setWindSpeed] = useState<number>(3.8); // in m/s
  const [thermalDiff, setThermalDiff] = useState<number>(4.2); // temp difference in deg C
  const [dbReduction, setDbReduction] = useState<number>(57); // decibel drop rate in dB
  const [activeZone, setActiveZone] = useState<"north" | "south" | "neutral">("neutral");
  const [soundPhase, setSoundPhase] = useState<number>(0);

  // Auto-modulate sound/phase and tiny variations for authentic real-time simulation feel
  useEffect(() => {
    const interval = setInterval(() => {
      setSoundPhase((prev) => (prev + 1) % 360);
      // Small premium diagnostic fluctuates
      setWindSpeed((prev) => {
        const next = prev + (Math.random() - 0.5) * 0.15;
        return parseFloat(Math.max(1.5, Math.min(6.5, next)).toFixed(2));
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Compute live volumetric exchange rate (simulated aerodynamic formula)
  const volExchange = (windSpeed * 18.5 * (1 + thermalDiff / 10)).toFixed(1);

  return (
    <div 
      className="w-full h-full relative bg-[#0b090a] border border-[#a4161a]/30 rounded-lg overflow-hidden flex flex-col justify-between"
      id="airflow-blueprint-container"
    >
      {/* Blueprint Grid Background Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(164, 22, 26, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(164, 22, 26, 0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      />
      
      {/* Radiant Glowing Core Spheres */}
      <div className="absolute top-[30%] left-[30%] w-72 h-72 bg-[#660708]/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[25%] w-80 h-80 bg-[#a4161a]/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* 1. Header Toolbar */}
      <div className="border-b border-[#b1a7a6]/10 px-5 py-3 flex justify-between items-center bg-black/40 backdrop-blur-sm z-10">
        <div className="flex items-center space-x-3">
          <Activity className="w-3.5 h-3.5 text-[#e5383b] animate-pulse" />
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#b1a7a6] uppercase font-bold">
            THERMOGRAPHIC VECTOR SCHEMATIC
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-[#a4161a]/15 border border-[#ba181b]/35 px-2 py-0.5 rounded text-[8px] font-mono text-[#e5383b] uppercase tracking-widest font-semibold">
            TELEMETRY ONLINE
          </span>
          {onClose && (
            <button 
              onClick={onClose}
              className="text-white/40 hover:text-[#e5383b] transition-colors p-1"
              title="Close Blueprint"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Central Active CAD Simulation Canvas */}
      <div className="flex-grow relative flex items-center justify-center p-4">
        {/* SVG Drawing Canvas of the Dual Courtyards */}
        <svg 
          viewBox="0 0 600 400" 
          className="w-full h-full max-h-[290px] drop-shadow-2xl z-10 select-none"
        >
          {/* Defs block for gradients and markers */}
          <defs>
            <linearGradient id="breezeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#660708" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#e5383b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ba181b" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="acousticDamp" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#a4161a" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#0b090a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* BACKGROUND LAYOUT: Concrete Outer Respective Envelope */}
          <rect 
            x="50" 
            y="40" 
            width="500" 
            height="320" 
            rx="16" 
            fill="none" 
            stroke="#a4161a" 
            strokeWidth="1" 
            strokeOpacity="0.15" 
          />

          {/* 15m Scale Guideline */}
          <line x1="60" y1="340" x2="160" y2="340" stroke="#b1a7a6" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="60" y1="335" x2="60" y2="345" stroke="#b1a7a6" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="160" y1="335" x2="160" y2="345" stroke="#b1a7a6" strokeWidth="1" strokeOpacity="0.3" />
          <text x="110" y="330" className="font-mono text-[7px] fill-white/40 uppercase text-center text-anchor-middle font-bold">Scale: 15 Meters</text>

          {/* Dual Courtyard Structural Pods Outline */}
          {/* North Courtyard Pod */}
          <rect 
            x="120" 
            y="100" 
            width="140" 
            height="140" 
            rx="10" 
            fill="#161a1d" 
            stroke={activeZone === "north" ? "#e5383b" : "#a4161a"} 
            strokeWidth={activeZone === "north" ? "1.5" : "1"} 
            strokeOpacity={activeZone === "north" ? "0.8" : "0.3"}
            className="transition-all duration-300"
            onClick={() => setActiveZone("north")}
            style={{ cursor: "pointer" }}
          />
          {/* North Garden Inner Open Void */}
          <circle 
            cx="190" 
            cy="170" 
            r="45" 
            fill="#0b090a" 
            stroke="#a4161a" 
            strokeWidth="0.75" 
            strokeOpacity="0.4" 
            strokeDasharray="4 2"
          />

          {/* South Courtyard Pod */}
          <rect 
            x="340" 
            y="160" 
            width="140" 
            height="140" 
            rx="10" 
            fill="#161a1d" 
            stroke={activeZone === "south" ? "#e5383b" : "#a4161a"} 
            strokeWidth={activeZone === "south" ? "1.5" : "1"} 
            strokeOpacity={activeZone === "south" ? "0.8" : "0.3"}
            className="transition-all duration-300"
            onClick={() => setActiveZone("south")}
            style={{ cursor: "pointer" }}
          />
          {/* South Garden Inner Open Void */}
          <circle 
            cx="410" 
            cy="230" 
            r="45" 
            fill="#0b090a" 
            stroke="#ba181b" 
            strokeWidth="0.75" 
            strokeOpacity="0.4" 
            strokeDasharray="4 2"
          />

          {/* Sinuous Interlocking Convective Corridor Pathway */}
          <path 
            d="M 60,170 Q 130,170 190,170 T 310,200 T 410,230 Q 480,230 540,230" 
            fill="none" 
            stroke="url(#breezeGrad)" 
            strokeWidth="4" 
            strokeOpacity="0.3" 
          />

          {/* ANIMATED CONVECTIVE CURRENT ARROWS / MOTION VECTORS */}
          <motion.path 
            d="M 60,170 Q 130,170 190,170 T 310,200 T 410,230 Q 480,230 540,230" 
            fill="none" 
            stroke="#e5383b" 
            strokeWidth="1.5" 
            strokeDasharray="15 35"
            animate={{ strokeDashoffset: [-200, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 8 / (windSpeed / 3), 
              ease: "linear" 
            }}
          />

          <motion.path 
            d="M 60,162 Q 130,162 190,162 T 310,192 T 410,222 Q 480,222 540,222" 
            fill="none" 
            stroke="#d3d3d3" 
            strokeWidth="0.75" 
            strokeDasharray="10 40"
            animate={{ strokeDashoffset: [-200, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 10 / (windSpeed / 3), 
              ease: "linear",
              delay: 0.5 
            }}
          />

          {/* Wind vortex circles showing localized spiraling currents in gardens */}
          {/* North Courtyard Spirals */}
          <motion.circle 
            cx="190" 
            cy="170" 
            r="30" 
            fill="none" 
            stroke="#e5383b" 
            strokeWidth="1" 
            strokeDasharray="8 12"
            strokeOpacity="0.5"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15 / (windSpeed / 2), ease: "linear" }}
            style={{ transformOrigin: "190px 170px" }}
          />

          {/* South Courtyard Spirals */}
          <motion.circle 
            cx="410" 
            cy="230" 
            r="32" 
            fill="none" 
            stroke="#ba181b" 
            strokeWidth="1" 
            strokeDasharray="12 8"
            strokeOpacity="0.4"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12 / (windSpeed / 2), ease: "linear" }}
            style={{ transformOrigin: "410px 230px" }}
          />

          {/* NOISE DIFFUSION RIPPLES (ACOUSTIC ATTENUATION WAVES) */}
          <g transform="translate(60, 250)">
            <circle cx="0" cy="0" r="4" fill="#660708" fillOpacity="0.7" />
            <motion.circle 
              cx="0" cy="0" r="10" fill="none" stroke="#a4161a" strokeWidth="0.5"
              animate={{ r: [6, 45], opacity: [0.7, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut" }}
            />
            <motion.circle 
              cx="0" cy="0" r="10" fill="none" stroke="#a4161a" strokeWidth="0.5"
              animate={{ r: [6, 45], opacity: [0.7, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeOut", delay: 1.1 }}
            />
            <text x="12" y="3" className="font-mono text-[6.5px] fill-[#e5383b] uppercase font-bold">85dB City Noise</text>
          </g>

          {/* Noise attenuation buffer shield lines around courtyards */}
          <line x1="100" y1="80" x2="100" y2="260" stroke="#ba181b" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="320" y1="120" x2="320" y2="300" stroke="#ba181b" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />

          {/* Sound dissipation lines behind barriers */}
          <g transform="translate(190, 170)">
            <circle cx="0" cy="0" r="25" fill="url(#acousticDamp)" pointerEvents="none" />
            <text x="0" y="3" className="font-mono text-[7px] fill-[#f5f3f4] font-bold uppercase tracking-widest text-anchor-middle text-center" style={{ textAnchor: "middle" }}>
              24dB Sanctuary
            </text>
          </g>

          <g transform="translate(410, 230)">
            <circle cx="0" cy="0" r="25" fill="url(#acousticDamp)" pointerEvents="none" />
            <text x="0" y="3" className="font-mono text-[7px] fill-[#f5f3f4] font-bold uppercase tracking-widest text-anchor-middle text-center" style={{ textAnchor: "middle" }}>
              26dB Sanctuary
            </text>
          </g>

          {/* Interactive Node Anchors (Hover targets) */}
          <g 
            transform="translate(190, 120)" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveZone("north")}
            onMouseLeave={() => setActiveZone("neutral")}
          >
            <circle cx="0" cy="0" r="10" fill="#0b090a" stroke="#a4161a" strokeWidth="1" />
            <circle cx="0" cy="0" r="4" fill={activeZone === "north" ? "#e5383b" : "#a4161a"} className="animate-pulse" />
            <text x="15" y="3" className="font-mono text-[7.5px] fill-white/80 uppercase font-semibold">Courtyard Alpha (North)</text>
          </g>

          <g 
            transform="translate(410, 180)" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveZone("south")}
            onMouseLeave={() => setActiveZone("neutral")}
          >
            <circle cx="0" cy="0" r="10" fill="#0b090a" stroke="#a4161a" strokeWidth="1" />
            <circle cx="0" cy="0" r="4" fill={activeZone === "south" ? "#e5383b" : "#a4161a"} className="animate-pulse" />
            <text x="15" y="3" className="font-mono text-[7.5px] fill-white/80 uppercase font-semibold">Courtyard Beta (South)</text>
          </g>

          {/* Dynamic Vector Arrows highlighting biophilic envelope breathing */}
          <g transform="translate(500, 100)">
            <path d="M 0,0 L 20,[-5]" stroke="#e5383b" strokeWidth="0.75" fill="none" markerEnd="arrow" />
            <motion.path 
              d="M 0,0 L 15,-10" stroke="#f5f3f4" strokeWidth="1" fill="none"
              animate={{ opacity: [0.1, 1, 0.1], x: [0, 5], y: [0, -5] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            />
            <text x="20" y="-12" className="font-mono text-[6px] fill-white/40 uppercase font-semibold">Thermal Exit Flow</text>
          </g>

          <g transform="translate(80, 80)">
            <motion.path 
              d="M -15,10 L 0,0" stroke="#a4161a" strokeWidth="1.2" fill="none"
              animate={{ opacity: [0.1, 1, 0.1], x: [-5, 0], y: [5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
            />
            <text x="-45" y="-5" className="font-mono text-[6px] fill-white/40 uppercase font-semibold">Purified Intake</text>
          </g>

        </svg>

        {/* Floating Indicator Labels */}
        <div className="absolute top-4 left-4 bg-black/60 border border-white/10 p-2.5 rounded text-left backdrop-blur-md max-w-[150px] font-mono">
          <span className="text-[7px] text-[#e5383b] tracking-wider uppercase block font-bold mb-1">VENTILATION LAYER</span>
          <div className="space-y-1">
            <div className="flex justify-between text-[9px] text-white">
              <span className="text-white/50">CONVECTIVE:</span> 
              <span className="font-bold text-[#e5383b]">ACTIVE</span>
            </div>
            <div className="flex justify-between text-[9px] text-white">
              <span className="text-white/50">VOLUME RATE:</span> 
              <span className="font-bold">{volExchange} m³/h</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 bg-black/60 border border-white/10 p-2.5 rounded text-right backdrop-blur-md max-w-[150px] font-mono">
          <span className="text-[7px] text-[#e5383b] tracking-wider uppercase block font-bold mb-1">ACOUSTIC ATTENUATION</span>
          <div className="space-y-1">
            <div className="flex justify-between text-[9px] text-white space-x-2">
              <span className="text-white/50">OUTER SOUND:</span> 
              <span className="font-bold text-red-400">85 dB</span>
            </div>
            <div className="flex justify-between text-[9px] text-white space-x-2">
              <span className="text-white/50">COURTYARD:</span> 
              <span className="font-bold text-[#e5383b]">24 dB</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Interactive Mechanics Control Slider Panel */}
      <div className="border-t border-white/10 p-4 md:p-5 bg-black/60 backdrop-blur-sm z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-left">
        {/* Slider 1: Wind velocity simulator */}
        <div className="w-full md:w-5/12 space-y-1.5 flex flex-col justify-start">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1.5">
              <Wind className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span className="text-[9px] font-mono tracking-widest text-white/70 uppercase font-semibold">
                Thermal Breeze Speed
              </span>
            </div>
            <span className="text-xs font-mono text-[#e5383b] font-bold">{windSpeed} m/s</span>
          </div>
          <input 
            type="range"
            min="1.0"
            max="10.0"
            step="0.1"
            value={windSpeed}
            onChange={(e) => setWindSpeed(parseFloat(e.target.value))}
            className="w-full select-none cursor-pointer accent-[#e5383b] h-1 bg-white/10 rounded-lg appearance-none"
          />
        </div>

        {/* Slider 2: Acoustic dampening quotient */}
        <div className="w-full md:w-5/12 space-y-1.5 flex flex-col justify-start">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1.5">
              <Volume2 className="w-3.5 h-3.5 text-[#e5383b]" />
              <span className="text-[9px] font-mono tracking-widest text-white/70 uppercase font-semibold">
                Acoustic Shield Rating
              </span>
            </div>
            <span className="text-xs font-mono text-[#e5383b] font-bold">-{dbReduction} dB Drop</span>
          </div>
          <input 
            type="range"
            min="20"
            max="80"
            value={dbReduction}
            onChange={(e) => setDbReduction(parseInt(e.target.value))}
            className="w-full select-none cursor-pointer accent-[#e5383b] h-1 bg-white/10 rounded-lg appearance-none"
          />
        </div>

        {/* Live Vector Diagnostic readout */}
        <div className="w-full md:w-2/12 border-l border-white/10 pl-0 md:pl-4 py-1 flex flex-col justify-center items-start md:items-end">
          <span className="text-[7px] font-mono text-white/40 uppercase tracking-widest block">EFFICIENCY COEFF</span>
          <span className="font-mono text-lg font-bold text-white tracking-tight">
            {(0.92 + (windSpeed / 50) + (dbReduction / 1000)).toFixed(3)}
          </span>
        </div>
      </div>
    </div>
  );
};
