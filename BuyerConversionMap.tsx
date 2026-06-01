import React from "react";
import { Coffee, Compass, MessageSquare, ArrowDown, ArrowRight } from "lucide-react";

interface BuyerConversionMapProps {
  id?: string;
}

export const BuyerConversionMap: React.FC<BuyerConversionMapProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always bg-white relative flex flex-col justify-between overflow-y-auto sm:overflow-hidden select-none py-6 sm:py-8"
    >

      {/* Top Banner / Badge */}
      <div className="absolute top-4 left-6 z-20">
        <div className="border border-neutral-200 bg-neutral-50 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest text-[#e5383b] uppercase font-bold shadow-sm inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e5383b]" />
          Data Grid System
        </div>
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center py-10 lg:py-4">
        
        {/* Left Column: Editorial Style Title & Description */}
        <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left space-y-3 shrink-0">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] text-[#e5383b] tracking-tight">
            The Buyer<br className="hidden lg:block" /> Conversion Map
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-500 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
            A streamlined client journey designed to turn enquiries into successful closures.
          </p>
        </div>

        {/* Right Column: Infographics Block */}
        <div className="lg:col-span-8 w-full flex flex-col items-center justify-center space-y-3">
          
          {/* STEP 1: Enquiry (Middle Top) */}
          <div className="flex flex-col items-center shrink-0">
            <div className="bg-neutral-950 text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-md flex items-center gap-2">
              <span>Enquiry</span>
            </div>
            <ArrowDown className="w-4 h-4 text-[#e5383b] mt-1" />
          </div>

          {/* STEP 2: Three Main Steps in 1 Line */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 w-full bg-neutral-50/50 rounded-2xl border border-neutral-150 p-3 sm:p-2 max-w-2xl shrink-0">
            {/* Box A: Qualify Lead */}
            <div className="flex-1 bg-white border border-neutral-200 px-3 py-2 rounded-xl text-center shadow-xs">
              <span className="text-[11px] font-bold text-neutral-800">1. Qualify Lead</span>
            </div>

            <ArrowRight className="hidden sm:block w-4 h-4 text-[#e5383b] shrink-0 self-center" />
            <ArrowDown className="block sm:hidden w-4 h-4 text-[#e5383b] shrink-0 self-center my-0.5" />

            {/* Box B: Follow-Up Call */}
            <div className="flex-1 bg-white border border-neutral-200 px-3 py-2 rounded-xl text-center shadow-xs flex items-center justify-center">
              <span className="text-[11px] font-bold text-neutral-800">2. Follow-Up Call</span>
            </div>

            <ArrowRight className="hidden sm:block w-4 h-4 text-[#e5383b] shrink-0 self-center" />
            <ArrowDown className="block sm:hidden w-4 h-4 text-[#e5383b] shrink-0 self-center my-0.5" />

            {/* Box C: Site Visit */}
            <div className="flex-1 bg-neutral-900 border border-neutral-950 px-3 py-2 rounded-xl text-center shadow-xs font-extrabold text-white">
              <span className="text-[11.5px]">3. Site Visit</span>
            </div>
          </div>

          {/* Vertical Arrow below "Site Visit" */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 shrink-0">
            <div className="hidden sm:block sm:col-span-2" />
            <div className="flex justify-center items-center">
              <div className="flex flex-col items-center">
                <ArrowDown className="w-4.5 h-4.5 text-[#e5383b]" />
              </div>
            </div>
          </div>

          {/* STEP 3: Site Visit Details in a line with separate boxes */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 shrink-0">
            <div className="hidden sm:block sm:col-span-1" /> {/* Push to the right/side columns to align directly under Site Visit */}
            <div className="sm:col-span-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2">
              <div className="bg-white border border-neutral-200 px-2.5 py-1.5 rounded-lg text-[10px] font-bold text-neutral-700 shadow-xs flex items-center justify-center gap-1">
                <Coffee className="w-2.5 h-2.5 text-neutral-500 shrink-0" />
                <span>Breakfast Meeting</span>
              </div>
              <ArrowRight className="hidden sm:block w-2.5 h-2.5 text-neutral-300 shrink-0" />
              <ArrowDown className="block sm:hidden w-2.5 h-2.5 text-neutral-300 shrink-0 self-center my-0.5" />
              <div className="bg-white border border-neutral-200 px-2.5 py-1.5 rounded-lg text-[10px] font-bold text-neutral-700 shadow-xs flex items-center justify-center gap-1">
                <Compass className="w-2.5 h-2.5 text-neutral-500 shrink-0" />
                <span>Site Tour</span>
              </div>
              <ArrowRight className="hidden sm:block w-2.5 h-2.5 text-neutral-300 shrink-0" />
              <ArrowDown className="block sm:hidden w-2.5 h-2.5 text-neutral-300 shrink-0 self-center my-0.5" />
              <div className="bg-neutral-900 border border-neutral-950 px-2.5 py-1.5 rounded-lg text-[10px] font-black text-white shadow-xs flex items-center justify-center gap-1 select-none">
                <MessageSquare className="w-2.5 h-2.5 text-[#e5383b] shrink-0" />
                <span>Ezzy office - Discussion</span>
              </div>
            </div>
          </div>

          {/* Two arrows below Ezzy office - Discussion */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 shrink-0">
            <div className="hidden sm:block sm:col-span-2" /> {/* Push to the right columns, aligning with Ezzy office discussion */}
            <div className="sm:col-span-1 flex justify-center items-center">
              <div className="flex items-center justify-around sm:justify-between w-full max-w-[140px] text-[#e5383b] font-black text-lg select-none px-2 py-1">
                <span>↙</span>
                <span>↘</span>
              </div>
            </div>
          </div>

          {/* STEP 4: Dual flowchart boxes aligned directly under the option arrows */}
          <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
            <div className="hidden sm:block sm:col-span-1" /> {/* Offset by 1 column so the boxes are under Column 2 and Column 3 */}
            
            {/* Option 2: Revisit & Close (Left side under ↙ Arrow) */}
            <div className="sm:col-span-1">
              <div className="border border-[#e5383b]/20 bg-white rounded-xl p-3 flex flex-col justify-between shadow-xs h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5">
                    <span className="text-[10px] font-black text-neutral-900 uppercase tracking-wider">2. Revisit Flow</span>
                    <span className="text-[8px] bg-[#e5383b]/10 border border-[#e5383b]/20 text-[#e5383b] font-mono px-1.5 py-0.5 rounded font-bold uppercase">Direct Path</span>
                  </div>
                  
                  <p className="text-[11px] text-neutral-800 font-bold leading-relaxed text-center py-1 bg-neutral-50 rounded border border-neutral-150">
                    Revisit Scheduling
                  </p>

                  <div className="pt-2 border-t border-dashed border-neutral-150">
                    <div className="bg-[#e5383b] text-white rounded-lg p-2.5 text-center font-black text-[10px] uppercase tracking-wider shadow-xs">
                      DEAL CLOSED
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 1: Ghosted Flowchart (Right side under ↘ Arrow) */}
            <div className="sm:col-span-1">
              <div className="border border-neutral-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-xs h-full">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5 mb-1.5">
                    <span className="text-[10px] font-black text-[#e5383b] uppercase tracking-wider">1. Ghosted Flow</span>
                    <span className="text-[8px] bg-neutral-100 border border-neutral-200 text-neutral-600 font-mono px-1.5 py-0.5 rounded font-bold uppercase">Automated</span>
                  </div>
                  
                  {/* Flow Trigger */}
                  <div className="text-center">
                    <div className="inline-block bg-neutral-50 border border-neutral-150 px-2 py-1 rounded text-[10px] font-bold text-neutral-800 shadow-3xs">
                      If the lead ghosts you
                    </div>
                    <div className="text-[#e5383b] text-base font-black leading-none my-1 flex justify-center">↓</div>
                    <div className="bg-[#e5383b]/5 border border-[#e5383b]/20 px-2.5 py-1.5 rounded-lg text-center shadow-3xs">
                      <span className="block text-[10.5px] font-extrabold text-[#e5383b] uppercase tracking-tight">
                        Re-Engagement Marketing Campaigns
                      </span>
                    </div>
                  </div>

                  {/* Two columns/options below */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-dashed border-neutral-150 mt-1.5">
                    {/* Option 1: Cold */}
                    <div className="flex flex-col justify-between bg-neutral-50/50 border border-neutral-150 p-2 rounded-lg">
                      <div>
                        <span className="block text-[8px] font-extrabold text-neutral-400 uppercase tracking-widest">Option 1</span>
                        <p className="text-[9.5px] font-semibold text-neutral-500 leading-tight">Lead goes cold or becomes inactive</p>
                      </div>
                      <div className="flex items-center gap-1 mt-1.5 pt-1 border-t border-neutral-150">
                        <span className="text-neutral-400 font-black text-[10px]">→</span>
                        <span className="text-[9.5px] font-extrabold text-neutral-500 uppercase tracking-tighter">Lost Inquiry</span>
                      </div>
                    </div>

                    {/* Option 2: Warm */}
                    <div className="flex flex-col justify-between bg-[#e5383b]/5 border border-[#e5383b]/10 p-2 rounded-lg">
                      <div>
                        <span className="block text-[8px] font-extrabold text-[#e5383b] uppercase tracking-widest">Option 2</span>
                        <p className="text-[9.5px] font-bold text-neutral-800 leading-tight">Warm response received</p>
                      </div>
                      <div className="mt-1.5 pt-1 border-t border-[#e5383b]/10 space-y-1">
                        <div className="flex items-center gap-1">
                          <span className="text-neutral-900 font-black text-[10px]">→</span>
                          <span className="text-[9.5px] font-extrabold text-neutral-900">Revisit</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[#e5383b] font-black text-[10px]">→</span>
                          <span className="text-[9.5px] font-black text-[#e5383b] uppercase tracking-tight">Deal Closure</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Footer System Accent Block */}
      <div className="w-full flex items-center justify-center pb-1.5 select-none border-t border-neutral-150 pt-2 text-center shrink-0 relative z-10">
        <span className="text-[8px] font-mono text-neutral-400 tracking-wider font-bold uppercase">
          EZZY ELITE × DOORLYST CONVERSION PIPELINE SYSTEM
        </span>
      </div>
    </section>
  );
};
