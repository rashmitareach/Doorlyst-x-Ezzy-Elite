import React from "react";

interface AdsMarketingBrandEngineProps {
  id: string;
}

export const AdsMarketingBrandEngine: React.FC<AdsMarketingBrandEngineProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always bg-[#ffffff] relative flex flex-col justify-between overflow-y-auto sm:overflow-hidden select-none border-b border-neutral-100"
    >
      <div className="w-full h-auto min-h-screen sm:h-full flex items-center justify-center p-3 sm:p-6 md:p-12 lg:p-16 xl:p-20 relative bg-[#090a0c] overflow-y-auto sm:overflow-hidden py-10 sm:py-6">
        {/* Premium cinematic architectural backdrop */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600"
            alt="Scenic luxury architectural sunset backdrop"
            className="w-full h-full object-cover brightness-[0.65] contrast-[1.03]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />
        </div>

        {/* Beautiful white card layout matching the Lookbook design perfectly */}
        <div className="w-full h-auto min-h-full sm:h-full max-w-[1240px] max-h-none sm:max-h-[720px] bg-white rounded-none shadow-[0_24px_80px_rgba(0,0,0,0.4)] border border-white/10 relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between overflow-visible sm:overflow-hidden z-20 animate-fade-in pb-10 sm:pb-12">
          
          {/* 2. Middle Content Area: Title and 4 Columns */}
          <div className="w-full flex-grow flex flex-col justify-center py-4 md:py-6">
            
            {/* Main Header & Intro */}
            <div className="text-left max-w-4xl mb-6 md:mb-8">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] text-neutral-950 tracking-tight mb-3">
                Ads & Marketing
              </h1>
              <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-950 font-normal leading-relaxed max-w-3xl">
                Through our AI engine, we have developed a smart marketing system designed to identify your ideal residents and guide them through a seamless digital path.
              </p>
              <div className="mt-3.5 flex items-center gap-2">
                <span className="h-[1.5px] w-6 bg-[#e5383b]"></span>
                <p className="font-mono text-[9px] md:text-[10px] tracking-widest text-[#e5383b] uppercase font-extrabold">
                  ENGAGEMENT AND CONVERSION SEQUENCE:
                </p>
              </div>
            </div>

            {/* Grid layout with 2 columns for precision marketing pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              
              {/* Pillar 1: Paid Campaigns */}
              <div className="border-t-2 border-[#e5383b] pt-3 text-left">
                <span className="font-mono text-[8.5px] text-[#e5383b] tracking-wider font-extrabold block mb-0.5">
                  SEQUENCE 01
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-950 mb-1.5">
                  Paid Campaigns
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-neutral-950/80 font-normal leading-relaxed">
                  Using our AI engine, we run precision ads across Meta, Google, and LinkedIn to place Ezzy Elite in front of the city's most influential business leaders and high-profile professionals.<br /><br />This ensures your masterpiece is seen by the right audience at the perfect moment to spark genuine interest.
                </p>
              </div>

              {/* Pillar 2: Lead Generation */}
              <div className="border-t-2 border-[#e5383b] pt-3 text-left">
                <span className="font-mono text-[8.5px] text-[#e5383b] tracking-wider font-extrabold block mb-0.5">
                  SEQUENCE 02
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-950 mb-1.5">
                  Lead Generation
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-neutral-950/80 font-normal leading-relaxed">
                  Our system focuses on finding high-quality, serious interest rather than just clicks.<br /><br />We guide potential buyers from their very first click to a confirmed inquiry, using personalized communication to build trust and encourage them to book a private site visit to experience the property.
                </p>
              </div>

            </div>

          </div>

          {/* 3. Footer branding block */}
          <div className="w-full flex items-center justify-between pt-3 border-t border-neutral-100/50 select-none pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest text-[#161a1d]/40 uppercase font-semibold">
              (ACQUISITION SYSTEM)
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#e5383b] uppercase font-bold">
              DIGITAL PRESTIGE &amp; ACCELERATION
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
