import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface AudiencePersonasSliderProps {
  id: string;
}

interface PersonaData {
  id: number;
  title: string;
  age: string;
  income: string;
  family: string;
  netWorth: string;
  middleLabel: string;
  middleText: string;
  rightBlock1Title: string;
  rightBlock1List: string[];
  rightBlock2Title: string;
  rightBlock2List: string[];
  buyingTrigger: string;
  objectionText?: string;
  imageUrl: string;
  imageClass?: string;
}

const PERSONAS: PersonaData[] = [
  {
    id: 1,
    title: "The CBD Power Executive",
    age: "36–52",
    income: "High-Earning Plus",
    family: "C-Suite / Partner",
    netWorth: "₹15–40 Cr",
    middleLabel: "LIFESTYLE",
    middleText: "They live and breathe work-life integration, often working in MG Road or UB City and traveling globally to hubs like London or Singapore.",
    rightBlock1Title: "PROFILE BACKGROUND",
    rightBlock1List: [
      "**C-Suite Leadership** – Leading corporation executives, partners, and decision-makers aged 36–52",
      "**₹15–40 Cr Net Worth** – Strong financial position demanding absolute real estate perfection",
      "**Global Travelers** – Often traveling to major international hubs like London or Singapore"
    ],
    rightBlock2Title: "ESSENTIAL NEEDS",
    rightBlock2List: [
      "**Prestigious Central Address** – Outstanding city-center location that directly matches their professional status",
      "**Zero Maintenance** – Demands luxury without the upkeep or security hassles of an independent house",
      "**Seamless Work-from-Home** – Top-tier cloud, hybrid office, and remote connection setups"
    ],
    buyingTrigger: "Seeing the sinuous green facade and realizing it is the only project in the CBD that feels like a private estate rather than a standard apartment.",
    objectionText: "“Too expensive” - “This is the last true limited-edition address in central Bangalore it will be impossible to replicate.”",
    imageUrl: "https://www.dropbox.com/scl/fi/vv03h6s4wy6egule7zjgn/WhatsApp-Image-2026-05-27-at-1.34.50-PM-1.jpeg?rlkey=3z0xzdnni8pkil0mi0jmc6n6c&st=b4q0hfhx&raw=1",
    imageClass: "object-cover object-[center_20%]"
  },
  {
    id: 2,
    title: "The Serial Entrepreneur / Family Business Head",
    age: "38–48",
    income: "Ultra UHNW Plus",
    family: "Founder / Chair",
    netWorth: "₹25–100 Cr+",
    middleLabel: "PSYCHOGRAPHICS",
    middleText: "They value control and personalization, seeking a 'flagship' residence that reflects their success quietly.",
    rightBlock1Title: "PROFILE BACKGROUND",
    rightBlock1List: [
      "**Self-Made Business Leaders** – Independent company founders and heads of major family companies aged 38–48",
      "**₹25–100 Cr+ Net Worth** – Dynamic ultra-high-net-worth individuals building real multi-generational wealth",
      "**Quiet Luxury Seekers** – Values control, quiet architectural excellence, and custom personalization"
    ],
    rightBlock2Title: "PREFERRED FEATURES",
    rightBlock2List: [
      "**Customizable Internal Layouts** – Fully customized interiors designed exclusively as custom private commissions",
      "**Private Elevator Access** – Complete security checkpoints with direct, private access from entrance to residence",
      "**Elite Rooftop Spaces** – Exclusive areas reserved for peer-to-peer networking"
    ],
    buyingTrigger: "The “Private Commission” model, which allows them to see themselves as the patron of their own architectural masterpiece.",
    objectionText: "“I want to design my home myself with my own architect.” - “Each residence at Ezzy Elite is a private commission—we provide the raw biophilic structural canvas and work directly with your elite design teams to realize your singular vision.”",
    imageUrl: "https://www.dropbox.com/scl/fi/xp38z1j2biaeqjq84b7gy/powerful-indian-woman-45-years-260nw-2491104799.jpg?rlkey=lg86w9y20vd2mzar253ohi0wb&st=6jlkqcbx&raw=1",
    imageClass: "object-cover object-[center_12%]"
  },
  {
    id: 3,
    title: "The Global NRI / Returning to India",
    age: "45–58",
    income: "Global Professional",
    family: "Modern NRI Family",
    netWorth: "₹30–150 Cr",
    middleLabel: "GOALS",
    middleText: "A world-class 'home base' that requires zero maintenance while they are away, backed by high-standard security and finishes.",
    rightBlock1Title: "PROFILE BACKGROUND",
    rightBlock1List: [
      "**High-Earning Professionals** – Tech, financial, or healthcare executives aged 45–58 planning their Indian anchor",
      "**Bangalore-Global Split** – Regularly splitting time between Bangalore and cities like Dubai or London",
      "**Premium Standards** – Demands international finishing levels, secure biometric access, and complete discretion"
    ],
    rightBlock2Title: "PREFERRED FEATURES",
    rightBlock2List: [
      "**24/7 Premium Concierge** – Round-the-clock professional service desk and smart global package coordination",
      "**Property Management Packages** – Completely maintenance-free, locked-down security while away",
      "**Smart-Home Living** – Completely automated systems controllable on cloud from anywhere in the world"
    ],
    buyingTrigger: "The promise of absolute discretion, ensuring they don't feel exposed while living in the heart of the city.",
    objectionText: "“Who will manage construction quality or maintenance while I’m abroad?” - “Ezzy Elite provides exclusive property management, biometric cloud tracking, and premium international maintenance SLAs so your investment remains pristine and hassle-free.”",
    imageUrl: "https://www.dropbox.com/scl/fi/fu95ima4rvr08zi1hxvh3/NRI-Family-in-the-UAE-1024x640.jpg?rlkey=or2udwghsq9m6puk3hn9q0y8l&st=8xv1dvuo&raw=1",
    imageClass: "object-cover object-center"
  }
];

export const AudiencePersonasSlider: React.FC<AudiencePersonasSliderProps> = ({ id }) => {
  const [activePage, setActivePage] = useState(0);
  const persona = PERSONAS[activePage];

  // Helper function to format list text (bold main point, normal sub point)
  const renderFormattedText = (text: string) => {
    if (text.includes("**") && text.includes("–")) {
      const parts = text.split("–");
      const boldPart = parts[0].replace(/\*\*/g, "").trim();
      const normalPart = parts.slice(1).join("–").trim();
      return (
        <span className="font-sans text-[11px] lg:text-[11.5px] leading-relaxed text-neutral-950">
          <strong className="font-bold text-neutral-950">{boldPart}</strong> &ndash; <span className="font-light text-neutral-950/75">{normalPart}</span>
        </span>
      );
    }
    // Fallback bold parsing
    if (text.includes("**")) {
      const parts = text.split("**");
      return (
        <span className="font-sans text-[11px] lg:text-[11.5px] leading-relaxed text-neutral-950">
          {parts.map((part, i) => i % 2 === 1 ? (
            <strong key={i} className="font-bold text-neutral-950">{part}</strong>
          ) : (
            <span key={i} className="font-light text-neutral-950/75">{part}</span>
          ))}
        </span>
      );
    }
    return <span className="font-sans font-light text-neutral-950/75 text-[11px] lg:text-[11.5px] leading-relaxed">{text}</span>;
  };

  return (
    <section
      id={id}
      className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always bg-[#ffffff] relative flex flex-col justify-between overflow-y-auto sm:overflow-hidden select-none"
    >
      {/* 3-Page lookbook slider with a white exhibition canvas */}
      <div className="w-full h-auto min-h-screen sm:h-full flex-grow flex flex-col justify-between py-6 sm:py-3 md:py-4 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 relative text-neutral-950 bg-[#ffffff]">
        
        {/* Centered Lookbook Dossier Card Container to prevent sprawling in wide viewports */}
        <div className="flex-grow flex items-center justify-center w-full my-auto py-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`personas-page-${activePage}`}
              initial={{ opacity: 0, scale: 0.985, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: -12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-7xl bg-white border border-neutral-200/50 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.01)] p-3 sm:p-4 md:p-5 lg:p-6 text-left grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch"
            >
              {/* Left Column: Portrait image & Demographics Card (lg:col-span-3) */}
              <div className="lg:col-span-3 flex flex-col justify-between space-y-3">
                {/* Visual Lookbook Image representing the Persona */}
                <div className="relative overflow-hidden rounded-xl border border-neutral-200/60 shadow-sm bg-neutral-50 h-40 sm:h-44 md:h-48 lg:h-40 xl:h-44 w-full shrink-0 flex items-center justify-center">
                  <img 
                    src={persona.imageUrl} 
                    alt={persona.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${persona.imageClass || "object-cover"}`}
                  />
                </div>

                {/* Demographics Summary Card */}
                <div className="bg-white border border-neutral-200/50 p-2.5 sm:p-3 rounded-xl space-y-1.5 shadow-[0_1px_6px_rgba(0,0,0,0.005)] transition-colors flex-grow flex flex-col justify-center">
                  <h4 className="text-[8.5px] font-sans font-bold uppercase tracking-widest text-[#e5383b] pb-1 border-b border-neutral-100">
                    DEMOGRAPHICS &amp; MORE
                  </h4>
                  <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-[10px] sm:text-xs pt-0.5">
                    <div className="flex flex-col py-0.5 border-b border-neutral-100">
                      <span className="font-sans text-[8.5px] text-neutral-950/50 font-bold tracking-wider uppercase">AGE</span>
                      <span className="font-sans font-bold text-neutral-950 text-[11px] lg:text-[11.5px]">{persona.age}</span>
                    </div>
                    <div className="flex flex-col py-0.5 border-b border-neutral-100">
                      <span className="font-sans text-[8.5px] text-neutral-950/50 font-bold tracking-wider uppercase">NET WORTH</span>
                      <span className="font-sans font-bold text-neutral-950 text-[11px] lg:text-[11.5px]">{persona.netWorth}</span>
                    </div>
                    <div className="flex flex-col py-0.5">
                      <span className="font-sans text-[8.5px] text-neutral-950/50 font-bold tracking-wider uppercase">PROFILE TYPE</span>
                      <span className="font-sans font-bold text-neutral-950 text-[11px] lg:text-[11.5px] truncate" title={persona.family}>{persona.family}</span>
                    </div>
                    <div className="flex flex-col py-0.5">
                      <span className="font-sans text-[8.5px] text-neutral-950/50 font-bold tracking-wider uppercase">INCOME FOCUS</span>
                      <span className="font-sans font-bold text-neutral-950 text-[11px] lg:text-[11.5px]">{persona.income}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column: Identity Badge, Title, Lifestyle, and Buying Trigger banner (lg:col-span-4) */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-3 py-0.5">
                <div className="space-y-2.5">
                  {/* Badge & Clean Title */}
                  <div className="space-y-0.5">
                    <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.25em] text-[#e5383b] font-bold uppercase block">
                      AUDIENCE PERSONA
                    </span>
                    <h1 className="font-serif text-base lg:text-[18px] xl:text-[20px] font-normal text-neutral-950 tracking-tight leading-tight">
                      {persona.title}
                    </h1>
                  </div>
 
                  {/* Lifestyle Summary */}
                  <div className="space-y-0.5 border-l-2 border-[#e5383b] pl-3">
                    <span className="text-[8.5px] font-sans tracking-widest text-[#e5383b] uppercase font-bold block">
                      {persona.middleLabel}
                    </span>
                    <p className="font-sans text-[11.5px] lg:text-[12px] text-neutral-950 font-light leading-relaxed">
                      {persona.middleText}
                    </p>
                  </div>
                </div>

                {/* Buying Trigger Banner & Objection Card - Fills the empty space */}
                <div className="bg-white border border-neutral-200/50 border-l-2 border-l-[#e5383b] p-2.5 rounded-r-xl space-y-1.5 shadow-[0_1px_6px_rgba(0,0,0,0.005)]">
                  <div className="space-y-0.5">
                    <span className="text-[8px] sm:text-[9.5px] font-sans tracking-wider text-[#e5383b] font-bold uppercase block">
                      buying trigger
                    </span>
                    <p className="font-sans text-[10.5px] sm:text-[11px] lg:text-[11.5px] text-neutral-950 leading-relaxed italic font-bold">
                      &ldquo;{persona.buyingTrigger}&rdquo;
                    </p>
                  </div>
                  {persona.objectionText && (
                    <div className="pt-1 border-t border-neutral-100 space-y-0.5">
                      <span className="text-[8px] sm:text-[9px] font-sans tracking-wider text-[#e5383b] font-bold uppercase block">
                        objection handled by ezzy elite
                      </span>
                      <p className="font-sans text-[9px] sm:text-[9.5px] leading-relaxed text-neutral-950/75 font-light">
                        {persona.objectionText}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Profile summary & Needs / Preferred features matching exactly requested layout, no gaps or empty space */}
              <div className="lg:col-span-5 flex flex-col justify-between py-0.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                  {/* Block 1 */}
                  <div className="space-y-1.5 flex flex-col">
                    <h4 className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#e5383b] border-b border-neutral-200/70 pb-1">
                      {persona.rightBlock1Title}
                    </h4>
                    <ul className="space-y-1 pt-1 flex-grow">
                      {persona.rightBlock1List.map((item, i) => (
                        <li key={i} className="text-[11px] lg:text-[11.5px] text-neutral-950 leading-relaxed font-light flex items-start gap-1.5">
                          <span className="text-[#e5383b] text-[8.5px] mt-1 shrink-0">•</span>
                          {renderFormattedText(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
 
                  {/* Block 2 */}
                  <div className="space-y-1.5 flex flex-col">
                    <h4 className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#e5383b] border-b border-neutral-200/70 pb-1">
                      {persona.rightBlock2Title}
                    </h4>
                    <ul className="space-y-1 pt-1 flex-grow">
                      {persona.rightBlock2List.map((item, i) => (
                        <li key={i} className="text-[11px] lg:text-[11.5px] text-neutral-950 leading-relaxed flex items-start gap-1.5">
                          <span className="text-[#e5383b] text-[8.5px] mt-1 shrink-0">•</span>
                          {renderFormattedText(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Swipe options / Page controls matching Slide 0 & 1 design perfectly */}
        <div className="w-full flex items-center justify-between border-t border-neutral-100 pt-3 sm:pt-4 select-none mt-auto">
          {/* Navigation Dots Indicator */}
          <div className="flex items-center gap-2.5">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActivePage(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activePage === idx ? "w-8 bg-[#e5383b]" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                title={`Cohort ${idx + 1}`}
              />
            ))}
          </div>

          {/* Elegant page label */}
          <div className="hidden lg:flex flex-col items-center">
            <span className="text-[9px] font-sans tracking-widest text-[#e5383b] uppercase font-bold">
              {activePage === 0 
                ? "EXECUTIVE PROFILE" 
                : activePage === 1 
                ? "ENTREPRENEUR PROFILE" 
                : "GLOBAL NRI PROFILE"}
            </span>
          </div>

          {/* Swipe Buttons with highly visible bold red 'SWIPE' and long arrow */}
          <div className="flex items-center gap-3 sm:gap-4 select-none">
            <button
              onClick={() => setActivePage((prev) => Math.max(0, prev - 1))}
              disabled={activePage === 0}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                activePage === 0
                  ? "border-neutral-100 text-neutral-300 cursor-not-allowed"
                  : "border-[#e5383b]/20 text-[#e5383b]/80 hover:text-[#e5383b] hover:bg-[#e5383b]/5"
              }`}
              title="Previous Page"
            >
              <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={() => setActivePage((prev) => (prev + 1) % 3)}
              className="flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full border-2 border-[#e5383b] bg-white text-[#e5383b] hover:bg-[#e5383b]/5 active:scale-[0.97] transition-all cursor-pointer font-bold select-none group shadow-[0_4px_12px_rgba(229,56,59,0.1)]"
              title="Next Page / Swipe"
            >
              <span className="font-sans text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#e5383b]">
                SWIPE
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <svg 
                  width="36" 
                  height="12" 
                  viewBox="0 0 36 12" 
                  fill="none"
                  className="stroke-[3] stroke-[#e5383b]"
                >
                  <path 
                    d="M1 6H33M33 6L27 1M33 6L27 11" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="stroke-[#e5383b]"
                  />
                </svg>
              </motion.div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
