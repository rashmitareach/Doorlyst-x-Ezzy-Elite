import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  User, 
  Users,
  Target,
  Coins,
  Compass,
  Globe,
  Star, 
  Quote
} from "lucide-react";

interface Particle {
  id: number;
  top: string;
  speed: number;
  scale: number;
  yDrift: number;
}

export const BuyerTransformation: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Dissolve particle templates for cards
  const dissolveParticles: Particle[] = Array.from({ length: 12 }, (_, i) => {
    const ratio = i / 12;
    return {
      id: i,
      top: `${15 + ratio * 70}%`, 
      speed: 15 + (i % 4) * 18, 
      scale: 0.5 + (i % 3) * 0.4,
      yDrift: -6 + (i % 5) * 3, 
    };
  });

  // Intel/absorption particle burst templates centered under the core
  const middleParticles = Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * 2 * Math.PI;
    return {
      id: i,
      x: Math.cos(angle) * 45,
      y: Math.sin(angle) * 35,
      scale: 0.5 + (i % 3) * 0.35,
    };
  });

  return (
    <section 
      id="buyer-transformation" 
      className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always overflow-y-auto sm:overflow-hidden flex flex-col justify-center py-6 md:py-10 px-6 md:px-16 lg:px-24 xl:px-32 relative text-white"
      style={{
        backgroundColor: "#000000",
        backgroundImage: "radial-gradient(circle at center, rgba(229, 56, 59, 0.12) 0%, transparent 85%)"
      }}
    >
      {/* Precision light visual alignment layout grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
        
        {/* HEADER BLOCK: Clean, high-contrast minimal luxury style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#ba181b]/25 pb-4">
          <div className="text-left space-y-1">
            <h2 
              className="font-serif text-2xl md:text-[32px] lg:text-[38px] text-white font-semibold tracking-tighter leading-none mt-1"
            >
              The Buyer <span className="italic font-semibold text-[#e5383b]">Transformation</span> Portal
            </h2>
          </div>
          
          <div className="max-w-xs md:max-w-md mt-2 md:mt-0 text-left md:text-right">
            <p className="text-zinc-400 text-[11px] md:text-xs leading-relaxed font-sans font-medium">
              Turning global leads into potential buyers and customers.
            </p>
          </div>
        </div>

        {/* CENTRAL CONVERSION STAGE (moved directly in the empty space below heading) */}
        <div 
          className="h-[220px] sm:h-[260px] md:h-[295px] lg:h-[320px] xl:h-[350px] w-full relative overflow-hidden rounded-2xl bg-[#000000] border border-zinc-800/60 flex items-center justify-center my-1.5 shadow-[0_12px_45px_rgba(0,0,0,0.4)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Symmetrical horizontal lanes guiding the motion */}
          <div className="absolute left-0 right-0 h-full w-full pointer-events-none z-0 flex flex-col justify-around py-[15%]">
            <div className="h-[1px] bg-gradient-to-r from-white/5 via-[#e5383b]/20 to-transparent w-full" />
            <div className="h-[1px] bg-gradient-to-r from-white/5 via-[#e5383b]/20 to-transparent w-full animate-pulse" />
            <div className="h-[1px] bg-gradient-to-r from-white/5 via-[#e5383b]/20 to-transparent w-full" />
          </div>

          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ba181b]/30 to-transparent z-0 top-[50%] -translate-y-1/2 pointer-events-none" />


          {/* ================= LEFT SIDE: INCOMING ICONS (FLOWING WITH CONTINUOUS TIMING) ================= */}
          <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-10">
            
            {/* ICON 1 (Top path - RK, Warm Amber/Earth gradient) */}
            <motion.div
              animate={{
                left: ["2%", "50%"],
                top: ["20%", "50%"],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.0, 1.0, 0.2]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 2.0,
                delay: 0.1,
                ease: "linear"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-9 h-9 bg-gradient-to-tr from-[#1a120b] via-[#3d251e] to-[#7f5539] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-white tracking-tighter">RK</span>
                </div>
              </div>
            </motion.div>

            {/* ICON 2 (Upper Middle path - SR, Slate/Steel gradient) */}
            <motion.div
              animate={{
                left: ["2%", "50%"],
                top: ["35%", "50%"],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.0, 1.0, 0.2]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 2.5,
                delay: 1.2,
                ease: "linear"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-9 h-9 bg-gradient-to-tr from-[#2d3142] via-[#4f5d75] to-[#bfc0c0] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-white tracking-tighter">SR</span>
                </div>
              </div>
            </motion.div>

            {/* ICON 3 (Center path - MD, Teal/Emerald gradient) */}
            <motion.div
              animate={{
                left: ["2%", "50%"],
                top: ["50%", "50%"],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.0, 1.0, 0.2]
              }}
              transition={{
                duration: 2.0,
                repeat: Infinity,
                repeatDelay: 1.8,
                delay: 0.4,
                ease: "linear"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-9 h-9 bg-gradient-to-tr from-[#1b4332] via-[#2d6a4f] to-[#52b788] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-white tracking-tighter">MD</span>
                </div>
              </div>
            </motion.div>

            {/* ICON 4 (Lower Middle path - TL, Purple/Amethyst gradient) */}
            <motion.div
              animate={{
                left: ["2%", "50%"],
                top: ["65%", "50%"],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.0, 1.0, 0.2]
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 2.2,
                delay: 1.8,
                ease: "linear"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-9 h-9 bg-gradient-to-tr from-[#3d0066] via-[#5c0099] to-[#b366ff] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-white tracking-tighter">TL</span>
                </div>
              </div>
            </motion.div>

            {/* ICON 5 (Bottom path - HQ, Carbon/Red accent gradient) */}
            <motion.div
              animate={{
                left: ["2%", "50%"],
                top: ["80%", "50%"],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.0, 1.0, 0.2]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2.8,
                delay: 0.8,
                ease: "linear"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-9 h-9 bg-gradient-to-tr from-neutral-800 via-neutral-900 to-[#e5383b] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 border border-white/20">
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-white tracking-tighter">HQ</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ================= INTAKE/DISSOLVE PARTICLES UNDER THE CORE ================= */}
          {middleParticles.map((p) => {
            return (
              <motion.div
                key={`mid-p-${p.id}`}
                animate={{
                  x: [0, p.x * 0.6, p.x * 1.2, 0],
                  y: [0, p.y * 0.6, p.y * 1.2, 0],
                  opacity: [0, 0.95, 0, 0],
                  scale: [0.1, p.scale, 0.1, 0.1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  times: [0, 0.5, 0.9, 1.0],
                  ease: "easeOut"
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "2.5px",
                  height: "2.5px",
                  backgroundColor: "#e5383b",
                  borderRadius: "50%",
                  boxShadow: "0 0 5px rgba(229, 56, 59, 0.7)",
                  zIndex: 15,
                  pointerEvents: "none"
                }}
              />
            );
          })}

          {/* ================= CENTER LOGO / CONVERSION MODULE (PERFECTLY CENTERED IN THE CIRCLES) ================= */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-40 sm:h-40 z-20 flex items-center justify-center select-none"
            id="doorlyst-portal"
          >
            {/* Ambient rotating luxury vector rings */}
            <motion.div 
              className="absolute w-16 h-16 sm:w-24 sm:h-24 border border-[#ba181b]/25 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
            <motion.div 
              className="absolute w-20 h-20 sm:w-28 sm:h-28 border border-dashed border-[#b1a7a6]/25 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
            />

            {/* Pulsing Core Intake Absorption Wave */}
            <motion.div 
              className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#ba181b]/35"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Pristine Luxury Doorlyst Red Monogram Core (Centered Perfectly) */}
            <div className="absolute w-12 h-12 min-[370px]:w-14 min-[370px]:h-14 sm:w-20 sm:h-20 shadow-[0_12px_36px_rgba(229,56,59,0.25),_0_2px_6px_rgba(255,255,255,0.15)] rounded-[12px] sm:rounded-[20px] flex items-center justify-center overflow-hidden border border-white/20">
              <img 
                src="https://dl.dropboxusercontent.com/scl/fi/mz7urgq79mrydmvfumyzl/WhatsApp-Image-2026-05-26-at-12.23.40-PM.jpeg?rlkey=zggh3tl2j4yj27k8ctol4xo9v&st=wfe65l2b&dl=1"
                alt="Doorlyst Portal Center Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE: FEEDBACK CARDS (EMERGING FROM THE CENTER HUD & DUST SPARKS) ================= */}
          <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-10">

            {/* CARD 1 (Emerges organically from center hub, sliding on Lane 1) */}
            <motion.div
              animate={{
                left: ["50%", "60%", "85%", "98%"],
                top: ["50%", "24%", "24%", "24%"],
                opacity: [0, 1, 1, 0],
                scale: [0.1, 1.0, 1.0, 0.4],
                filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]
              }}
              transition={{
                duration: 5.0,
                times: [0, 0.20, 0.85, 1.0],
                repeat: Infinity,
                repeatDelay: 9.0,
                delay: 0.0,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative">
                {/* Premium feedback card */}
                <div className="w-[140px] sm:w-[170px] md:w-[205px] bg-white border border-[#b1a7a6]/25 rounded-xl p-2 sm:p-3 shadow-[0_6px_20px_rgba(229,56,59,0.03)] relative overflow-hidden text-left flex flex-col justify-between h-[68px] sm:h-[80px] md:h-[92px] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(229,56,59,0.08)]">
                  {/* Subtle decorative brackets */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#0b090a]/15" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#0b090a]/15" />

                  {/* Top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ba181b] to-[#e5383b]" />

                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-mono tracking-wider text-zinc-400 uppercase font-bold">
                      SUCCESS MILESTONE
                    </span>
                    <div className="flex space-x-0.5 text-[#e5383b] shrink-0">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                    </div>
                  </div>

                  {/* Clean text description */}
                  <p className="text-[#161a1d] font-sans font-bold text-[12px] sm:text-[14px] md:text-[15.5px] leading-tight tracking-tight my-0.5 truncate-two-lines">
                    "Excellent support from start to finish"
                  </p>
                </div>

                {/* TRAILING SPARKS */}
                <div className="absolute inset-y-0 -left-6 w-14 pointer-events-none overflow-hidden h-full">
                  {dissolveParticles.map((pt) => (
                    <motion.div
                      key={`card1-pt-${pt.id}`}
                      animate={{
                        x: [0, 0, -pt.speed, -pt.speed],
                        y: [0, 0, pt.yDrift * 0.8, pt.yDrift * 0.8],
                        opacity: [0, 0, 0.9, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.86, 0.90, 0.94],
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      style={{
                        position: "absolute",
                        top: pt.top,
                        right: "12px",
                        width: `${pt.scale * 2.5}px`,
                        height: `${pt.scale * 2.5}px`,
                        backgroundColor: "#e5383b",
                        borderRadius: "50%",
                        boxShadow: "0 0 6px rgba(229, 56, 59, 0.2)"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 2 (Emerges organically from center hub, sliding on Lane 2) */}
            <motion.div
              animate={{
                left: ["50%", "60%", "85%", "98%"],
                top: ["50%", "34%", "34%", "34%"],
                opacity: [0, 1, 1, 0],
                scale: [0.1, 0.95, 0.95, 0.4],
                filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]
              }}
              transition={{
                duration: 5.0,
                times: [0, 0.20, 0.85, 1.0],
                repeat: Infinity,
                repeatDelay: 9.0,
                delay: 2.0,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative">
                {/* Premium feedback card */}
                <div className="w-[140px] sm:w-[170px] md:w-[205px] bg-white border border-[#b1a7a6]/25 rounded-xl p-2 sm:p-3 shadow-[0_6px_20px_rgba(229,56,59,0.03)] relative overflow-hidden text-left flex flex-col justify-between h-[68px] sm:h-[80px] md:h-[92px] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(229,56,59,0.08)]">
                  {/* Subtle decorative brackets */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#0b090a]/15" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#0b090a]/15" />

                  {/* Top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#660708] to-[#ba181b]" />

                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-mono tracking-wider text-zinc-400 uppercase font-bold">
                      CURATED MATCH
                    </span>
                    <div className="flex space-x-0.5 text-[#ba181b] shrink-0">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                    </div>
                  </div>

                  {/* Clean text description */}
                  <p className="text-[#161a1d] font-sans font-bold text-[12px] sm:text-[14px] md:text-[15.5px] leading-tight tracking-tight my-0.5 truncate-two-lines">
                    "Found exactly what we needed"
                  </p>
                </div>

                {/* TRAILING SPARKS */}
                <div className="absolute inset-y-0 -left-6 w-14 pointer-events-none overflow-hidden h-full">
                  {dissolveParticles.map((pt) => (
                    <motion.div
                      key={`card2-pt-${pt.id}`}
                      animate={{
                        x: [0, 0, -pt.speed, -pt.speed],
                        y: [0, 0, pt.yDrift * 0.8, pt.yDrift * 0.8],
                        opacity: [0, 0, 0.9, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.86, 0.90, 0.94],
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      style={{
                        position: "absolute",
                        top: pt.top,
                        right: "12px",
                        width: `${pt.scale * 2.5}px`,
                        height: `${pt.scale * 2.5}px`,
                        backgroundColor: "#e5383b",
                        borderRadius: "50%",
                        boxShadow: "0 0 6px rgba(229, 56, 59, 0.2)"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 3 (Emerges organically from center hub, sliding on Lane 3) */}
            <motion.div
              animate={{
                left: ["50%", "60%", "85%", "98%"],
                top: ["50%", "44%", "44%", "44%"],
                opacity: [0, 1, 1, 0],
                scale: [0.1, 1.0, 1.0, 0.4],
                filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]
              }}
              transition={{
                duration: 5.0,
                times: [0, 0.20, 0.85, 1.0],
                repeat: Infinity,
                repeatDelay: 9.0,
                delay: 4.0,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative">
                {/* Premium feedback card */}
                <div className="w-[140px] sm:w-[170px] md:w-[205px] bg-white border border-[#b1a7a6]/25 rounded-xl p-2 sm:p-3 shadow-[0_6px_20px_rgba(229,56,59,0.03)] relative overflow-hidden text-left flex flex-col justify-between h-[68px] sm:h-[80px] md:h-[92px] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(229,56,59,0.08)]">
                  {/* Subtle decorative brackets */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#0b090a]/15" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#0b090a]/15" />

                  {/* Top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ba181b]/50" />

                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-mono tracking-wider text-zinc-400 uppercase font-bold">
                      TRANSPARENT FLOW
                    </span>
                    <div className="flex space-x-0.5 text-[#ba181b] shrink-0">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                    </div>
                  </div>

                  {/* Clean text description */}
                  <p className="text-[#161a1d] font-sans font-bold text-[12px] sm:text-[14px] md:text-[15.5px] leading-tight tracking-tight my-0.5 truncate-two-lines">
                    "Easy and hassle-free experience"
                  </p>
                </div>

                {/* TRAILING SPARKS */}
                <div className="absolute inset-y-0 -left-6 w-14 pointer-events-none overflow-hidden h-full">
                  {dissolveParticles.map((pt) => (
                    <motion.div
                      key={`card3-pt-${pt.id}`}
                      animate={{
                        x: [0, 0, -pt.speed, -pt.speed],
                        y: [0, 0, pt.yDrift * 0.8, pt.yDrift * 0.8],
                        opacity: [0, 0, 0.9, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.86, 0.90, 0.94],
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      style={{
                        position: "absolute",
                        top: pt.top,
                        right: "12px",
                        width: `${pt.scale * 2.5}px`,
                        height: `${pt.scale * 2.5}px`,
                        backgroundColor: "#e5383b",
                        borderRadius: "50%",
                        boxShadow: "0 0 6px rgba(229, 56, 59, 0.2)"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 4 (Emerges organically from center hub, sliding on Lane 4) */}
            <motion.div
              animate={{
                left: ["50%", "60%", "85%", "98%"],
                top: ["50%", "54%", "54%", "54%"],
                opacity: [0, 1, 1, 0],
                scale: [0.1, 0.95, 0.95, 0.4],
                filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]
              }}
              transition={{
                duration: 5.0,
                times: [0, 0.20, 0.85, 1.0],
                repeat: Infinity,
                repeatDelay: 9.0,
                delay: 6.0,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative">
                {/* Premium feedback card */}
                <div className="w-[140px] sm:w-[170px] md:w-[205px] bg-white border border-[#b1a7a6]/25 rounded-xl p-2 sm:p-3 shadow-[0_6px_20px_rgba(229,56,59,0.03)] relative overflow-hidden text-left flex flex-col justify-between h-[68px] sm:h-[80px] md:h-[92px] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(229,56,59,0.08)]">
                  {/* Subtle decorative brackets */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#0b090a]/15" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#0b090a]/15" />

                  {/* Top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a4161a] to-[#e5383b]" />

                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-mono tracking-wider text-zinc-400 uppercase font-bold">
                      EXCELLENCE RATED
                    </span>
                    <div className="flex space-x-0.5 text-[#e5383b] shrink-0">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                    </div>
                  </div>

                  {/* Clean text description */}
                  <p className="text-[#161a1d] font-sans font-bold text-[12px] sm:text-[14px] md:text-[15.5px] leading-tight tracking-tight my-0.5 truncate-two-lines">
                    "Amazing experience overall"
                  </p>
                </div>

                {/* TRAILING SPARKS */}
                <div className="absolute inset-y-0 -left-6 w-14 pointer-events-none overflow-hidden h-full">
                  {dissolveParticles.map((pt) => (
                    <motion.div
                      key={`card4-pt-${pt.id}`}
                      animate={{
                        x: [0, 0, -pt.speed, -pt.speed],
                        y: [0, 0, pt.yDrift * 0.8, pt.yDrift * 0.8],
                        opacity: [0, 0, 0.9, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.86, 0.90, 0.94],
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      style={{
                        position: "absolute",
                        top: pt.top,
                        right: "12px",
                        width: `${pt.scale * 2.5}px`,
                        height: `${pt.scale * 2.5}px`,
                        backgroundColor: "#e5383b",
                        borderRadius: "50%",
                        boxShadow: "0 0 6px rgba(229, 56, 59, 0.2)"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 5 (Emerges organically from center hub, sliding on Lane 5) */}
            <motion.div
              animate={{
                left: ["50%", "60%", "85%", "98%"],
                top: ["50%", "64%", "64%", "64%"],
                opacity: [0, 1, 1, 0],
                scale: [0.1, 1.0, 1.0, 0.4],
                filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]
              }}
              transition={{
                duration: 5.0,
                times: [0, 0.20, 0.85, 1.0],
                repeat: Infinity,
                repeatDelay: 9.0,
                delay: 8.0,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative">
                {/* Premium feedback card */}
                <div className="w-[140px] sm:w-[170px] md:w-[205px] bg-white border border-[#b1a7a6]/25 rounded-xl p-2 sm:p-3 shadow-[0_6px_20px_rgba(229,56,59,0.03)] relative overflow-hidden text-left flex flex-col justify-between h-[68px] sm:h-[80px] md:h-[92px] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(229,56,59,0.08)]">
                  {/* Subtle decorative brackets */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#0b090a]/15" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#0b090a]/15" />

                  {/* Top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#660708] via-[#a4161a] to-[#b1a7a6]" />

                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-mono tracking-wider text-zinc-400 uppercase font-bold">
                      SECURED ASSET
                    </span>
                    <div className="flex space-x-0.5 text-[#b1a7a6] shrink-0">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                    </div>
                  </div>

                  {/* Clean text description */}
                  <p className="text-[#161a1d] font-sans font-bold text-[12px] sm:text-[14px] md:text-[15.5px] leading-tight tracking-tight my-0.5 truncate-two-lines">
                    "Stress-free property purchase"
                  </p>
                </div>

                {/* TRAILING SPARKS */}
                <div className="absolute inset-y-0 -left-6 w-14 pointer-events-none overflow-hidden h-full">
                  {dissolveParticles.map((pt) => (
                    <motion.div
                      key={`card5-pt-${pt.id}`}
                      animate={{
                        x: [0, 0, -pt.speed, -pt.speed],
                        y: [0, 0, pt.yDrift * 0.8, pt.yDrift * 0.8],
                        opacity: [0, 0, 0.9, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.86, 0.90, 0.94],
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      style={{
                        position: "absolute",
                        top: pt.top,
                        right: "12px",
                        width: `${pt.scale * 2.5}px`,
                        height: `${pt.scale * 2.5}px`,
                        backgroundColor: "#e5383b",
                        borderRadius: "50%",
                        boxShadow: "0 0 6px rgba(229, 56, 59, 0.2)"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 6 (Emerges organically from center hub, sliding on Lane 1 - Staggered) */}
            <motion.div
              animate={{
                left: ["50%", "60%", "85%", "98%"],
                top: ["50%", "24%", "24%", "24%"],
                opacity: [0, 1, 1, 0],
                scale: [0.1, 0.92, 0.92, 0.4],
                filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]
              }}
              transition={{
                duration: 5.0,
                times: [0, 0.20, 0.85, 1.0],
                repeat: Infinity,
                repeatDelay: 9.0,
                delay: 10.0,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative">
                {/* Premium feedback card */}
                <div className="w-[140px] sm:w-[170px] md:w-[205px] bg-white border border-[#b1a7a6]/25 rounded-xl p-2 sm:p-3 shadow-[0_6px_20px_rgba(229,56,59,0.03)] relative overflow-hidden text-left flex flex-col justify-between h-[68px] sm:h-[80px] md:h-[92px] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(229,56,59,0.08)]">
                  {/* Subtle decorative brackets */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#0b090a]/15" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#0b090a]/15" />

                  {/* Top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#b1a7a6] to-[#e5383b]" />

                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-mono tracking-wider text-zinc-400 uppercase font-bold">
                      ELITE PARTNER
                    </span>
                    <div className="flex space-x-0.5 text-[#e5383b] shrink-0">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                    </div>
                  </div>

                  {/* Clean text description */}
                  <p className="text-[#161a1d] font-sans font-bold text-[12px] sm:text-[14px] md:text-[15.5px] leading-tight tracking-tight my-0.5 truncate-two-lines">
                    "Best property consultants around"
                  </p>
                </div>

                {/* TRAILING SPARKS */}
                <div className="absolute inset-y-0 -left-6 w-14 pointer-events-none overflow-hidden h-full">
                  {dissolveParticles.map((pt) => (
                    <motion.div
                      key={`card6-pt-${pt.id}`}
                      animate={{
                        x: [0, 0, -pt.speed, -pt.speed],
                        y: [0, 0, pt.yDrift * 0.8, pt.yDrift * 0.8],
                        opacity: [0, 0, 0.9, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.86, 0.90, 0.94],
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      style={{
                        position: "absolute",
                        top: pt.top,
                        right: "12px",
                        width: `${pt.scale * 2.5}px`,
                        height: `${pt.scale * 2.5}px`,
                        backgroundColor: "#e5383b",
                        borderRadius: "50%",
                        boxShadow: "0 0 6px rgba(229, 56, 59, 0.2)"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 7 (Emerges organically from center hub, sliding on Lane 5 - Staggered) */}
            <motion.div
              animate={{
                left: ["50%", "60%", "85%", "98%"],
                top: ["50%", "64%", "64%", "64%"],
                opacity: [0, 1, 1, 0],
                scale: [0.1, 1.05, 1.05, 0.4],
                filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(2px)"]
              }}
              transition={{
                duration: 5.0,
                times: [0, 0.20, 0.85, 1.0],
                repeat: Infinity,
                repeatDelay: 9.0,
                delay: 12.0,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                transform: "translate(-50%, -50%)"
              }}
              className="z-10 cursor-pointer pointer-events-auto"
            >
              <div className="relative">
                {/* Premium feedback card */}
                <div className="w-[140px] sm:w-[170px] md:w-[205px] bg-white border border-[#b1a7a6]/25 rounded-xl p-2 sm:p-3 shadow-[0_6px_20px_rgba(229,56,59,0.03)] relative overflow-hidden text-left flex flex-col justify-between h-[68px] sm:h-[80px] md:h-[92px] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(229,56,59,0.08)]">
                  {/* Subtle decorative brackets */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#0b090a]/15" />
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#0b090a]/15" />

                  {/* Top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ba181b] to-[#e5383b]" />

                  <div className="flex justify-between items-center">
                    <span className="text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-mono tracking-wider text-zinc-400 uppercase font-bold">
                      DREAM REALIZED
                    </span>
                    <div className="flex space-x-0.5 text-[#e5383b] shrink-0">
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                      <Star className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 fill-current" />
                    </div>
                  </div>

                  {/* Clean text description */}
                  <p className="text-[#161a1d] font-sans font-bold text-[12px] sm:text-[14px] md:text-[15.5px] leading-tight tracking-tight my-0.5 truncate-two-lines">
                    "Made our dream home possible"
                  </p>
                </div>

                {/* TRAILING SPARKS */}
                <div className="absolute inset-y-0 -left-6 w-14 pointer-events-none overflow-hidden h-full">
                  {dissolveParticles.map((pt) => (
                    <motion.div
                      key={`card7-pt-${pt.id}`}
                      animate={{
                        x: [0, 0, -pt.speed, -pt.speed],
                        y: [0, 0, pt.yDrift * 0.8, pt.yDrift * 0.8],
                        opacity: [0, 0, 0.9, 0]
                      }}
                      transition={{
                        duration: 3,
                        times: [0, 0.86, 0.90, 0.94],
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      style={{
                        position: "absolute",
                        top: pt.top,
                        right: "12px",
                        width: `${pt.scale * 2.5}px`,
                        height: `${pt.scale * 2.5}px`,
                        backgroundColor: "#e5383b",
                        borderRadius: "50%",
                        boxShadow: "0 0 6px rgba(229, 56, 59, 0.2)"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Symmetrical screen margins fade elements for luxurious blur entry & exit */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none z-15" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none z-15" />

        </div>

      </div>
    </section>
  );
};
