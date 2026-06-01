import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FolderItem {
  id: string;
  title: string;
  subtleLabel: string;
  arrowColor: string;
  arrowRotation: string;
  arrowPos: { top?: string; left?: string; right?: string; bottom?: string };
  info: string;
}

export function SpecialStrategicPositioning() {
  const [selectedFolder, setSelectedFolder] = useState<FolderItem | null>(null);

  const folders: FolderItem[] = [
    {
      id: "luxury",
      title: "Luxury Positioning",
      subtleLabel: "Private Commission Paradigm",
      arrowColor: "#e5383b", // Brand red as requested
      arrowRotation: "rotate-[-45deg]", // Points left-down at the folder tab/card
      arrowPos: { top: "15%", right: "-35px" },
      info: "We move the narrative away from being a \"luxury apartment\" to a \"Private Commission\" model. Each residence is positioned as a one-of-a-kind structural masterpiece, sculpted exclusively for the selected few who value rarity over repetition."
    },
    {
      id: "branding",
      title: "Digital Branding Opportunity",
      subtleLabel: "Rhythmic Biomorphic Narrative",
      arrowColor: "#e5383b", // Brand red as requested
      arrowRotation: "rotate-[135deg]", // Points right-down at the folder tab/card
      arrowPos: { top: "15%", left: "-35px" },
      info: "The building’s unique, sinuous green facade provides a rhythmic foundation for visual storytelling. We leverage these biomorphic curves to create a digital identity that feels modern and elite, turning physical features into emotional connections."
    },
    {
      id: "audience",
      title: "Premium Audience Relevance",
      subtleLabel: "Scarcity & Wealth Security",
      arrowColor: "#e5383b", // Brand red as requested
      arrowRotation: "rotate-0", // Points up-left directly at the folder tab/card
      arrowPos: { bottom: "15%", right: "-35px" },
      info: "We tap into the extreme scarcity of boutique supply in Bangalore’s CBD, where properties show 8–12% annual appreciation. Ezzy Elite is positioned as the definitive answer for high-profile buyers seeking a legendary address where status is an unspoken privilege."
    },
    {
      id: "online",
      title: "Online Presence Opportunity",
      subtleLabel: "Seamless Acquisition Journey",
      arrowColor: "#e5383b", // Brand red as requested
      arrowRotation: "rotate-[90deg]", // Points up-right directly at the folder tab/card
      arrowPos: { bottom: "15%", left: "-35px" },
      info: "We ensure the project’s digital identity mirrors its uncompromising physical execution. By building a sophisticated online presence, we ensure the acquisition journey is as seamless and refined as the residence itself."
    }
  ];

  return (
    <div className="w-full flex flex-col justify-between items-center min-h-screen lg:h-full lg:max-h-screen py-6 lg:py-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 relative select-none overflow-y-auto lg:overflow-hidden bg-white">
      
      {/* Background Subtle Accent Matrix */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-100" 
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(to right, rgba(11, 19, 43, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11, 19, 43, 0.04) 1px, transparent 1px)',
          backgroundSize: '55px 55px'
        }}
      />
      
      {/* 1. Main Heading: Sized smaller elegant header block to ensure comfortable vertical layout on one page */}
      <div className="w-full text-center relative z-10 pt-1 pb-1">
        <h1 className="font-sans font-black text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] xl:text-[42px] tracking-[-0.04em] text-neutral-900 uppercase leading-[0.95] select-none text-center">
          Ezzy Elite
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-950 font-black">
            Strategic Positioning
          </span>
         </h1>
        <div className="w-12 h-[2px] bg-[#e5383b] mx-auto mt-1.5 rounded-full" />
      </div>

      {/* 2. Main Content Canvas */}
      <div className="w-full max-w-5xl flex-grow grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center relative z-20 my-auto py-1 sm:py-2">
        
        {/* LEFT COLUMN - Folders 1 & 3 */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-row lg:flex-col justify-center gap-6 sm:gap-8 lg:gap-8 xl:gap-10 items-center lg:items-start">
          
          {/* Folder 1: Luxury Positioning */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer group relative"
            onClick={() => setSelectedFolder(folders[0])}
          >
            {/* Vintage style digital folder icon with gorgeous drop shadow */}
            <div className="w-24 sm:w-28 h-16 sm:h-20 bg-sky-200 hover:bg-[#e5383b] group-hover:bg-[#e5383b] transition-colors rounded-tr-lg rounded-b-xl relative shadow-md flex items-end p-2 sm:p-2.5">
              <div className="absolute top-[-5px] left-0 w-10 h-3 bg-sky-200 group-hover:bg-[#e5383b] transition-colors rounded-t-md" />
              <div className="absolute inset-[2.5px] rounded-lg bg-sky-100/20 group-hover:bg-[#ffffff]/10 pointer-events-none" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            
            <div className="mt-2 space-y-0.5">
              <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase font-black block text-center lg:text-left">FOLDER 01</span>
              <h3 className="font-sans font-bold text-xs sm:text-xs text-neutral-900 group-hover:text-[#e5383b] transition-colors tracking-tight">
                {folders[0].title}
              </h3>
            </div>

            {/* Custom brand-red cursor pointing left into the folder card */}
            <div 
              style={{ top: folders[0].arrowPos.top, right: folders[0].arrowPos.right }}
              className="absolute hidden lg:flex items-center select-none pointer-events-none group-hover:-translate-x-1.5 transition-transform duration-300"
            >
              {/* Radial tick marks */}
              <div className="absolute -left-1.5 -top-1.5 flex gap-0.5">
                <span className="w-1 h-1 bg-red-100 rounded-full animate-ping" />
              </div>
              <svg 
                className={`w-7 h-7 ${folders[0].arrowRotation}`} 
                viewBox="0 0 24 24" 
                fill={folders[0].arrowColor}
              >
                <path d="M7 2l12 11.2-5.8.8L17 20l-2.5 1-3.8-6.1-3.7 3.1z" />
              </svg>
            </div>
          </motion.div>

          {/* Folder 3: Premium Audience Relevance */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left cursor-pointer group relative"
            onClick={() => setSelectedFolder(folders[2])}
          >
            <div className="w-24 sm:w-28 h-16 sm:h-20 bg-sky-200 hover:bg-[#e5383b] group-hover:bg-[#e5383b] transition-colors rounded-tr-lg rounded-b-xl relative shadow-md flex items-end p-2 sm:p-2.5">
              <div className="absolute top-[-5px] left-0 w-10 h-3 bg-sky-200 group-hover:bg-[#e5383b] transition-colors rounded-t-md" />
              <div className="absolute inset-[2.5px] rounded-lg bg-sky-100/20 group-hover:bg-[#ffffff]/10 pointer-events-none" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            
            <div className="mt-2 space-y-0.5">
              <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase font-black block text-center lg:text-left">FOLDER 03</span>
              <h3 className="font-sans font-bold text-xs sm:text-xs text-neutral-900 group-hover:text-[#e5383b] transition-colors tracking-tight">
                {folders[2].title}
              </h3>
            </div>

            {/* Custom brand-red cursor pointing left into the folder card */}
            <div 
              style={{ bottom: folders[2].arrowPos.bottom, right: folders[2].arrowPos.right }}
              className="absolute hidden lg:flex items-center select-none pointer-events-none group-hover:-translate-x-1.5 transition-transform duration-300"
            >
              <svg 
                className={`w-7 h-7 ${folders[2].arrowRotation}`} 
                viewBox="0 0 24 24" 
                fill={folders[2].arrowColor}
              >
                <path d="M7 2l12 11.2-5.8.8L17 20l-2.5 1-3.8-6.1-3.7 3.1z" />
              </svg>
            </div>
          </motion.div>

        </div>

        {/* MIDDLE COLUMN - The Hero Statement */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-center text-center px-4 py-3 sm:py-4 lg:py-6 bg-neutral-50/50 border border-neutral-100 rounded-2xl relative overflow-hidden shadow-sm">
          
          {/* Subtle background luxury badge icon */}
          <div className="absolute inset-x-0 top-[-30px] flex justify-center opacity-[0.03] select-none pointer-events-none">
            <span className="font-serif italic font-extrabold text-[110px] text-neutral-900 leading-none">E</span>
          </div>

          <div className="space-y-3 relative z-10 max-w-lg mx-auto">
            {/* Soft gold detail */}
            <span className="text-[9px] font-mono tracking-[0.3em] text-[#e5383b] font-bold uppercase block">
              strategic thesis
            </span>
            
            {/* Elegant Serif typographic frame mapping the path */}
            <p className="font-serif italic font-normal text-xs sm:text-sm md:text-base lg:text-[18px] leading-relaxed text-neutral-900 px-2 sm:px-4">
              &ldquo;We have mapped out a path to position this project not just as a residence, but as the <span className="font-medium">definitive choice</span> for those seeking a <span className="font-semibold text-neutral-950 not-italic">private commission</span> in the heart of Bangalore.&rdquo;
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Folders 2 & 4 */}
        <div className="lg:col-span-3 xl:col-span-3 flex flex-row lg:flex-col justify-center gap-6 sm:gap-8 lg:gap-8 xl:gap-10 items-center lg:items-end">
          
          {/* Folder 2: Digital Branding Opportunity */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center lg:items-end text-center lg:text-right cursor-pointer group relative"
            onClick={() => setSelectedFolder(folders[1])}
          >
            <div className="w-24 sm:w-28 h-16 sm:h-20 bg-sky-200 hover:bg-[#e5383b] group-hover:bg-[#e5383b] transition-colors rounded-tr-lg rounded-b-xl relative shadow-md flex items-end p-2 sm:p-2.5">
              <div className="absolute top-[-5px] left-0 w-10 h-3 bg-sky-200 group-hover:bg-[#e5383b] transition-colors rounded-t-md" />
              <div className="absolute inset-[2.5px] rounded-lg bg-sky-100/20 group-hover:bg-[#ffffff]/10 pointer-events-none" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            
            <div className="mt-2 space-y-0.5">
              <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase font-black block text-center lg:text-right">FOLDER 02</span>
              <h3 className="font-sans font-bold text-xs sm:text-xs text-neutral-900 group-hover:text-[#e5383b] transition-colors tracking-tight">
                {folders[1].title}
              </h3>
            </div>

            {/* Custom brand-red cursor pointing right into the folder card */}
            <div 
              style={{ top: folders[1].arrowPos.top, left: folders[1].arrowPos.left }}
              className="absolute hidden lg:flex items-center select-none pointer-events-none group-hover:translate-x-1.5 transition-transform duration-300"
            >
              <svg 
                className={`w-7 h-7 ${folders[1].arrowRotation}`} 
                viewBox="0 0 24 24" 
                fill={folders[1].arrowColor}
              >
                <path d="M7 2l12 11.2-5.8.8L17 20l-2.5 1-3.8-6.1-3.7 3.1z" />
              </svg>
            </div>
          </motion.div>

          {/* Folder 4: Online Presence Opportunity */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center lg:items-end text-center lg:text-right cursor-pointer group relative"
            onClick={() => setSelectedFolder(folders[3])}
          >
            <div className="w-24 sm:w-28 h-16 sm:h-20 bg-sky-200 hover:bg-[#e5383b] group-hover:bg-[#e5383b] transition-colors rounded-tr-lg rounded-b-xl relative shadow-md flex items-end p-2 sm:p-2.5">
              <div className="absolute top-[-5px] left-0 w-10 h-3 bg-sky-200 group-hover:bg-[#e5383b] transition-colors rounded-t-md" />
              <div className="absolute inset-[2.5px] rounded-lg bg-sky-100/20 group-hover:bg-[#ffffff]/10 pointer-events-none" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            
            <div className="mt-2 space-y-0.5">
              <span className="text-[8px] font-mono tracking-widest text-neutral-400 uppercase font-black block text-center lg:text-right">FOLDER 04</span>
              <h3 className="font-sans font-bold text-xs sm:text-xs text-neutral-900 group-hover:text-[#e5383b] transition-colors tracking-tight">
                {folders[3].title}
              </h3>
            </div>

            {/* Custom brand-red cursor pointing right into the folder card */}
            <div 
              style={{ bottom: folders[3].arrowPos.bottom, left: folders[3].arrowPos.left }}
              className="absolute hidden lg:flex items-center select-none pointer-events-none group-hover:translate-x-1.5 transition-transform duration-300"
            >
              <svg 
                className={`w-7 h-7 ${folders[3].arrowRotation}`} 
                viewBox="0 0 24 24" 
                fill={folders[3].arrowColor}
              >
                <path d="M7 2l12 11.2-5.8.8L17 20l-2.5 1-3.8-6.1-3.7 3.1z" />
              </svg>
            </div>
          </motion.div>

        </div>

      </div>

      {/* 3. Footer Branding Removed */}

      {/* POPUP CARD MODAL - Opens elegantly on a pristine white blank page in the middle overlay */}
      <AnimatePresence>
        {selectedFolder && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#ffffff] z-50 flex items-center justify-center p-6"
          >
            {/* Modal Box Styled as a beautiful Minimalist White Folder Sheet */}
            <motion.div 
              initial={{ scale: 0.96, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#ffffff] border border-neutral-200 shadow-xl max-w-xl w-full rounded-2xl p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#e5383b]" />
              
              {/* Back / Close button */}
              <button 
                onClick={() => setSelectedFolder(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center bg-neutral-50 border border-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 hover:border-neutral-200 transition-all cursor-pointer z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-950 tracking-tight leading-tight">
                    {selectedFolder.title}
                  </h2>
                </div>

                <div className="text-neutral-300 w-20 border-b border-neutral-200" />

                {/* Primary Information Content with premium text wrapping and sizing */}
                <p className="font-sans text-sm sm:text-base text-neutral-800 leading-relaxed font-light font-sans">
                  {selectedFolder.info}
                </p>

                <div className="pt-4 flex justify-end items-center text-[10px] font-mono text-neutral-400">
                  <span className="underline cursor-pointer text-[#e5383b] font-bold" onClick={() => setSelectedFolder(null)}>
                    CLOSE FOLDER
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
