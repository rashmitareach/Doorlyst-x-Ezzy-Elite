import React from "react";
import { Check } from "lucide-react";

interface CommercialsEzzyProps {
  id?: string;
}

export const CommercialsEzzy: React.FC<CommercialsEzzyProps> = ({ id }) => {
  return (
    <section 
      id={id || "commercials-ezzy"} 
      className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always bg-[#f5f5f7] relative flex flex-col justify-center overflow-y-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 md:px-12"
    >
      <div className="w-full max-w-[1140px] mx-auto flex flex-col justify-center items-center z-10 py-1">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-6 max-w-2xl select-none">
          <h1 className="font-sans text-2xl sm:text-3xl md:text-[36px] font-bold tracking-tight text-neutral-900 leading-none">
            Commercials for Ezzy Elite
          </h1>
        </div>
 
        {/* PRICING PLANS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 w-full items-stretch animate-fade-in px-1 sm:px-0">
          
          {/* CARD 1: Walk-Through Videos */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 lg:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-neutral-100 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 animate-fade-in">
            <div>
              {/* Nested inner container with fixed height on desktop for perfect alignment across all columns */}
              <div className="bg-[#efeff1] rounded-[16px] sm:rounded-[20px] p-3.5 text-center relative flex flex-col justify-between h-[130px] sm:h-[140px] mb-4 select-none border border-neutral-200/10 shrink-0">
                <div className="my-[1px] flex items-baseline justify-start text-left">
                  <span className="font-sans font-extrabold text-[16px] min-[375px]:text-[17px] sm:text-[18px] md:text-[19px] tracking-tight text-[#000000]">
                    ₹16,00,000
                  </span>
                </div>
 
                <p className="font-sans text-[11px] sm:text-xs text-neutral-800 text-left font-bold mt-1 mb-auto">
                  Walk-Through Videos
                </p>
 
                <button className="bg-[#111113] hover:bg-[#222225] text-white text-[11px] sm:text-xs font-bold py-2 px-3 rounded-lg w-full transition-all tracking-wide shadow-xs active:scale-[0.98] cursor-pointer mt-2">
                  Walk-Through Videos
                </button>
              </div>
 
              {/* Bullet Features Section - Fits clean underneath */}
              <div className="space-y-1.5 md:space-y-2 px-1 pb-1">
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-semibold" style={{ fontWeight: 600 }}>Walk-Through Videos</strong>
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-normal">Deliverable:</strong> High-end walk-through videos of interiors/exteriors
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-normal">Duration:</strong> 2.5 minutes per video
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-normal">Timeline:</strong> 120 days
                  </span>
                </div>
              </div>
            </div>
          </div>
 
          {/* CARD 2: Marketing & Ad Campaign Management - ACCENT CARD */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 lg:p-5 shadow-[0_16px_48px_rgba(0,0,0,0.03)] border border-neutral-100 flex flex-col justify-between relative hover:shadow-[0_24px_54px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              {/* Nested inner container styled identically in height for seamless layout symmetry, highlighted with lavender tone */}
              <div className="bg-[#dfe6f4] rounded-[16px] sm:rounded-[20px] p-3.5 text-center relative flex flex-col justify-between h-[130px] sm:h-[140px] mb-4 select-none border border-neutral-200/10 shrink-0">
                <div className="my-[1px] flex items-baseline justify-start text-left">
                  <span className="font-sans font-extrabold text-[16px] min-[375px]:text-[17px] sm:text-[18px] md:text-[19px] tracking-tight text-[#000000]">
                    ₹6,25,000/month
                  </span>
                </div>
 
                <p className="font-sans text-[11px] sm:text-xs text-neutral-800 text-left font-bold mt-1 mb-auto leading-tight">
                  Marketing & Ad Campaign Management
                </p>
 
                <button className="bg-[#111113] hover:bg-[#222225] text-white text-[11px] sm:text-xs font-bold py-2 px-3 rounded-lg w-full transition-all tracking-wide shadow-xs active:scale-[0.98] cursor-pointer mt-2">
                  Marketing & Ad Campaigns
                </button>
              </div>
 
              {/* Bullet Features Section - Fits clean underneath */}
              <div className="space-y-1.5 md:space-y-2 px-1 pb-1">
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-semibold" style={{ fontWeight: 600 }}>Marketing & Ad Campaign Management</strong>
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-normal">Scope:</strong> End-to-end digital marketing and ads management
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-normal">Monthly Ad Spend:</strong> ₹5,00,000
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-normal">Service Charge:</strong> 25% of ad spend (₹1.25L/mo)
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    0.5% success fee on each successfully completed sale
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    Includes campaign strategy, execution, tracking, and optimization.
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    Covers all graphic designs and video production assets.
                  </span>
                </div>
              </div>
            </div>
          </div>
 
          {/* CARD 3: Virtual Reality (VR) Setup */}
          <div className="bg-white rounded-[20px] sm:rounded-[24px] p-4 lg:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-neutral-100 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div>
              {/* Nested inner container styled identically in height for seamless layout symmetry */}
              <div className="bg-[#efeff1] rounded-[16px] sm:rounded-[20px] p-3.5 text-center relative flex flex-col justify-between h-[130px] sm:h-[140px] mb-4 select-none border border-neutral-200/10 shrink-0">
                <div className="my-[1px] flex items-baseline justify-start text-left">
                  <span className="font-sans font-extrabold text-[16px] min-[375px]:text-[17px] sm:text-[18px] md:text-[19px] tracking-tight text-[#000000]">
                    ₹12,00,000 – ₹15,00,000
                  </span>
                </div>
 
                <p className="font-sans text-[11px] sm:text-xs text-neutral-800 text-left font-bold mt-1 mb-auto">
                  Virtual Reality (VR) Setup
                </p>
 
                <button className="bg-[#111113] hover:bg-[#222225] text-white text-[11px] sm:text-xs font-bold py-2 px-3 rounded-lg w-full transition-all tracking-wide shadow-xs active:scale-[0.98] cursor-pointer mt-2">
                  Virtual Reality (VR) Setup
                </button>
              </div>
 
              {/* Bullet Features Section - Fits clean underneath */}
              <div className="space-y-1.5 md:space-y-2 px-1 pb-1">
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-semibold" style={{ fontWeight: 600 }}>Virtual Reality (VR) Setup</strong>
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-normal">Deliverable:</strong> Immersive VR experience virtual tours
                  </span>
                </div>
                <div className="flex gap-2 items-start text-left">
                  <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-normal">
                    <strong className="text-neutral-900 font-normal">Timeline:</strong> 60 days
                  </span>
                </div>
              </div>
            </div>
          </div>
 
        </div>
 
      </div>
    </section>
  );
};
