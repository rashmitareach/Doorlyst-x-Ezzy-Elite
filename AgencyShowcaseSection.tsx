import React from "react";
import { motion } from "motion/react";

interface CardItem {
  id: string;
  num: string;
  category: string;
  title: string;
  desc: string;
}

const cardsData: CardItem[] = [
  {
    id: "branding",
    num: "01",
    category: "Branding",
    title: "Brand Positioning",
    desc: 'Our focus is on "Quiet Distinction" choosing privacy and rarity over being flashy. This makes Ezzy Elite feel like a private hideaway for the few who want something truly special.',
  },
  {
    id: "design",
    num: "02",
    category: "Design",
    title: "Luxury Visual Identity",
    desc: "We use a sleek, magazine-style look with dark navy and gold. This ensures the project feels like a world-class, trusted brand with real authority.",
  },
  {
    id: "marketing",
    num: "03",
    category: "Marketing",
    title: "Digital Presence Refinement",
    desc: "We create a smooth online experience that makes it easy for busy, high-profile buyers to find exactly what they need. Every step is designed to respect their time and meet their high standards.",
  },
  {
    id: "socials",
    num: "04",
    category: "Socials",
    title: "Visual Storytelling",
    desc: 'We tell the story of an "Elite Lifestyle" by focusing on the unique curves and top-tier materials of the building. This turns simple architectural features into a meaningful emotional connection.',
  },
];

export const AgencyShowcaseSection: React.FC = () => {
  return (
    <section
      id="creative-agency-showcase"
      className="w-full min-h-screen lg:h-screen shrink-0 sm:snap-start sm:snap-always overflow-y-auto lg:overflow-hidden flex flex-col justify-center items-center relative bg-white text-neutral-900 p-4 sm:p-6 md:p-12 lg:px-20 py-8 md:py-12"
    >
      {/* Background Grid Accent Lines with perfect black opacity (no hidden blue or other tints) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-100 bg-white" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)',
          backgroundSize: '55px 55px'
        }}
      />

      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between h-full relative z-10 gap-6 lg:gap-8">
        
        {/* Top Header Section Flow - Styled as a Centered Editorial Block */}
        <div className="w-full text-center space-y-3 sm:space-y-4 pt-2 sm:pt-4">
          {/* Centered Spaced Crimson Red Label matching other pages */}
          <span className="text-[10px] sm:text-[11px] font-sans text-[#e5383b] font-bold tracking-[0.35em] uppercase block">
            Branding Strategy
          </span>
          
          {/* Centered Description Paragraph in 1 same font style and size, bold & clean */}
          <h2 className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-950 leading-relaxed font-semibold max-w-4xl mx-auto px-4">
            A strategic roadmap to defining a unique digital identity that mirrors the project's structural mastery and elite positioning.
          </h2>
        </div>

        {/* 2x2 Grid of Floating Minimalist Cards - Image-free, focused on pure typographic elegance with exactly 3 colors & 3 fonts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-7 sm:gap-y-8 w-full mt-2 lg:mt-4">
          {cardsData.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white border border-neutral-950/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center relative shadow-[0_8px_30px_rgba(0,0,0,0.01)] group min-h-[160px]"
            >
              {/* Distinctive Small Corner Badge Tag in Red and Black, font-mono */}
              <div className="absolute -top-3.5 right-6 flex items-center bg-white border border-[#e5383b]/30 rounded-full py-0.5 pl-1 pr-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.01)] text-[10px] font-mono">
                <span className="flex items-center justify-center w-4 h-4 bg-neutral-950 text-white rounded-full text-[8.5px] font-bold mr-1.5">
                  {card.num}
                </span>
                <span className="text-[#e5383b] font-bold uppercase tracking-wider text-[8px]">
                  {card.category}
                </span>
              </div>

              {/* Context Copy Content Block */}
              <div className="flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-950 font-sans">
                  {card.title}
                </h3>
                
                <p className="text-[12px] sm:text-[13px] md:text-[13.5px] text-neutral-950/70 font-normal leading-relaxed mt-2.5 max-w-2xl font-sans">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
