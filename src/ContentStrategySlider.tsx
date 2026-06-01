import React, { useState, useEffect } from "react";

interface ContentStrategySliderProps {
  id: string;
}

export const ContentStrategySlider: React.FC<ContentStrategySliderProps> = ({ id }) => {
  const [timeStr, setTimeStr] = useState("14:04:50 (UTC)");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utcH = String(now.getUTCHours()).padStart(2, "0");
      const utcm = String(now.getUTCMinutes()).padStart(2, "0");
      const utcs = String(now.getUTCSeconds()).padStart(2, "0");
      setTimeStr(`${utcH}:${utcm}:${utcs} (UTC)`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id={id}
      className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always bg-[#ffffff] relative flex flex-col justify-between overflow-y-auto sm:overflow-hidden select-none border-b border-neutral-100"
    >
      <div className="w-full min-h-screen sm:h-full flex items-center justify-center p-3 sm:p-6 md:p-12 lg:p-16 xl:p-20 relative bg-[#0b0c10] overflow-visible sm:overflow-hidden py-10 sm:py-6">
        {/* Premium cinematic beach sunrise backdrop */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src="https://www.dropbox.com/scl/fi/lt5b4a5xtzu11rrbjx8tb/download-13.jpg?rlkey=td4jm9uao4sxcy3epd2sextyt&st=b7d6w0yb&raw=1"
            alt="Scenic warm sunset coast"
            className="w-full h-full object-cover brightness-[0.72] contrast-[1.02]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        </div>

        {/* Exact lookbook card layout, centered beautifully with optimized padding to perfectly fit the content */}
        <div className="w-full h-auto min-h-0 sm:h-full max-w-[1200px] sm:max-h-[700px] bg-white rounded-none shadow-[0_24px_80px_rgba(0,0,0,0.4)] border border-white/10 relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between overflow-visible sm:overflow-hidden z-20">
          
          {/* 1. Header block */}
          <div className="w-full flex items-center justify-center pb-4 border-b border-neutral-100 select-none pointer-events-none">
            {/* Center parenthesized categories list centered beautifully */}
            <div className="flex items-center gap-7 text-[10px] font-mono tracking-widest text-[#e5383b] uppercase font-bold">
              <span>(ARCHITECTURE)</span>
              <span>(IDENTITY)</span>
              <span>(LIFESTYLE)</span>
            </div>
          </div>

          {/* 2. Middle Body: Elegant Editorial Lookbook Layout for Content Pillars */}
          <div className="w-full flex-grow flex flex-col justify-center py-4 md:py-8 lg:py-10">
            {/* Top Intro Section */}
            <div className="text-left max-w-5xl">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] text-neutral-950 tracking-tight mb-3">
                Content Pillars
              </h1>
              <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-950 font-normal leading-relaxed max-w-4xl">
                This section defines our strategic content framework, using high-fidelity Reels & Cinematic Videos and a refined Social Media Direction to showcase the "1% Luxury Lifestyle" offered at Bangalore’s most prestigious address.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-[1.5px] w-6 bg-[#e5383b]"></span>
                <p className="font-mono text-[9px] md:text-[10px] tracking-widest text-[#e5383b] uppercase font-bold">
                  Our strategy is built on three core themes:
                </p>
              </div>
            </div>

            {/* 3 Columns Grid for the Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-5 lg:mt-6">
              {/* Pillar 1: Architecture */}
              <div className="border-t-2 border-[#e5383b] pt-3 text-left">
                <div>
                  <span className="font-mono text-[8px] text-[#e5383b] tracking-wider font-extrabold block mb-0.5">
                    THEME 01
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-950 mb-1">
                    Architecture
                  </h3>
                  <p className="font-mono text-[10px] font-bold text-[#e5383b] uppercase tracking-wide mb-1.5">
                    (The Design)
                  </p>
                </div>
                <p className="font-sans text-[11px] sm:text-[12px] md:text-[13px] text-neutral-950/80 font-normal leading-relaxed">
                  We will use Cinematic Videos to highlight the building's natural, flowing shapes and unique green features, positioning it as a one-of-a-kind landmark in the skyline.
                </p>
              </div>

              {/* Pillar 2: Identity */}
              <div className="border-t-2 border-[#e5383b] pt-3 text-left">
                <div>
                  <span className="font-mono text-[8px] text-[#e5383b] tracking-wider font-extrabold block mb-0.5">
                    THEME 02
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-950 mb-1">
                    Identity
                  </h3>
                  <p className="font-mono text-[10px] font-bold text-[#e5383b] uppercase tracking-wide mb-1.5">
                    (The Custom Interiors)
                  </p>
                </div>
                <p className="font-sans text-[11px] sm:text-[12px] md:text-[13px] text-neutral-950/80 font-normal leading-relaxed">
                  Through Curated Content, we focus on the hand-crafted Luxe interior, emphasizing that every home is a personal masterpiece designed specifically for its owner.
                </p>
              </div>

              {/* Pillar 3: Lifestyle */}
              <div className="border-t-2 border-[#e5383b] pt-3 text-left">
                <div>
                  <span className="font-mono text-[8px] text-[#e5383b] tracking-wider font-extrabold block mb-0.5">
                    THEME 03
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-neutral-950 mb-1">
                    Lifestyle
                  </h3>
                  <p className="font-mono text-[10px] font-bold text-[#e5383b] uppercase tracking-wide mb-1.5">
                    (The Central Location)
                  </p>
                </div>
                <p className="font-sans text-[11px] sm:text-[12px] md:text-[13px] text-neutral-950/80 font-normal leading-relaxed">
                  Our Social Media Direction focuses on the prestige of the location, placing the project at the very heart of the city’s social scene near exclusive spots like UB City and the Bangalore Club.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Label branding */}
          <div className="w-full flex items-center justify-between pt-3 border-t border-neutral-100/50 select-none pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              (STRATEGY CORE)
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#e5383b] uppercase font-bold">
              ESTABLISHED PRESTIGE
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
