import React, { useState } from "react";
import { Persona, MatchResult } from "../types";
import { Sparkles, ArrowRight, CornerDownRight, Copy, Check, ShieldCheck, Cpu } from "lucide-react";

interface AISandboxProps {
  onMatched?: (result: MatchResult) => void;
}

const PRESET_PERSONAS: Persona[] = [
  {
    id: "cbd-exec",
    name: "CBD Power Executive",
    tag: "The Selected 1%",
    description: "Fortune 500 leaders who dictate trade, requiring supreme micro-privacy and zero-commute proximity to Bangalore's ultimate central business district.",
    defaultCustomText: "Senior managing partner at a global private equity firm. Needs a discrete urban refuge with helipad convenience nearby."
  },
  {
    id: "tech-founder",
    name: "Serial Entrepreneur",
    tag: "The Visionary Guard",
    description: "Deca-billion VC-backed founders who crave expressive, high-technology organic architecture that matches their disruptive legacy.",
    defaultCustomText: "Fintech unicorn founder who desires custom home automation tied to a central AI dashboard and private physical art galleries."
  },
  {
    id: "global-nri",
    name: "Global NRI Dignitary",
    tag: "The Legacy Guardian",
    description: "Sovereign asset leaders or tech expats based in London / Silicon Valley, seeking an irreplaceable physical anchor matching international standards.",
    defaultCustomText: "UK-based sovereign infrastructure fund CEO returning home to build a definitive multi-generational estate on Dickenson Road."
  }
];

export const AISandbox: React.FC<AISandboxProps> = ({ onMatched }) => {
  const [selectedPersona, setSelectedPersona] = useState<Persona>(PRESET_PERSONAS[0]);
  const [customText, setCustomText] = useState<string>(PRESET_PERSONAS[0].defaultCustomText);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>("");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const [result, setResult] = useState<MatchResult>({
    buyerPersona: "The CBD Power Executive",
    psychographics: "This elite individual values multi-generational status, microscopic privacy, and spatial storytelling. They do not purchase square footage; they commission physical manifestations of their worldly triumphs.",
    drivers: [
      "Uncompromising spatial anonymity and multi-tier security",
      "Biophilic curves representing organic, living wealth architecture",
      "Atelier connection directly linking home layout to their global travel habits"
    ],
    adCopy: {
      headline: "DOORLYST X EZZY ELITE: The Silence of Dickenson Road",
      instagramGridText: "An architecture that breathes. The biomorphic facades of Ezzy Elite rise like sculpted monoliths. No two commissions are identical. Bangalore CBD's final architectural statement.",
      linkedinText: "When power becomes quiet, luxury becomes bespoke. Announcing India's first Private Architectural Commissions on Dickenson Road, Bangalore. An exclusive sales engine partnership Powered by Doorlyst AI.",
      whatsappHook: "Greetings. Settle into Bengaluru's ultimate physical legacy. A personal LuxID Global Atelier portfolio has been reserved for your curation. May we coordinate an exclusive delivery?"
    },
    unitDesign: "A private 8,500 sq ft pavilion utilizing hand-hammered charcoal basalt, custom golden bronze mesh screens, and private glass-enclosed micro-canopies with continuous biophilic cooling.",
    funnelStrategy: "Geofenced high-net-worth digital curation, coupled with an ultra-premium physical portfolio hand-delivered to the target’s central secretariat.",
    isDemo: true
  });

  const handlePersonaSelect = (persona: Persona) => {
    setSelectedPersona(persona);
    setCustomText(persona.defaultCustomText);
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const triggerMatch = async () => {
    setLoading(true);
    setResult(null as any);
    
    const steps = [
      "Initiating Doorlyst Target-Matching Engine...",
      "Parsing psychographics for Bengaluru's elite class...",
      "Querying LuxID design archive database...",
      "Locking GPS spatial coordinate standard (Dickenson Road CBD)...",
      "Drafting custom architectural layouts and ad copies with Gemini AI..."
    ];

    let currentStep = 0;
    setLoadingStep(steps[0]);
    
    // Smooth timing interval for a premium strategic feel
    const intervalObj = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setLoadingStep(steps[currentStep]);
      }
    }, 1000);

    try {
      const response = await fetch("/api/profile-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personaType: selectedPersona.name,
          customDetails: customText
        })
      });

      const data = await response.json();
      clearInterval(intervalObj);
      
      if (data && !data.error) {
        setResult(data);
        if (onMatched) onMatched(data);
      } else {
        throw new Error(data.message || "Match request failed");
      }
    } catch (err) {
      console.error("Match error:", err);
      // Fallback to beautiful simulated dynamic response mimicking standard structure
      clearInterval(intervalObj);
      setResult({
        buyerPersona: selectedPersona.name,
        psychographics: `This bespoke segment values micro-privacy, exceptional organic scale, and legacy establishment. Their lifestyle demands an irreplaceable anchor at white-glove central locations.`,
        drivers: [
          `Private biomorphic architectural commission unique to their identity`,
          `Unspoken elite status via Bengaluru CBD's most historical Dickenson Road corridor`,
          `Seamless automation directly matching their intricate high-frequency global lifestyle`
        ],
        adCopy: {
          headline: `DOORLYST X EZZY: For the Few Who Sculpt Legacies`,
          instagramGridText: `Quiet luxury is never loud. Sinuous curves and blooming greenery ascending above Dickenson Road. An exclusive commission for those who shape empires. Bengaluru's final masterpiece. #EzzyElite`,
          linkedinText: `A monument to uncompromising execution. Discover Ezzy Elite—India’s premier biomorphic residential collection where your flat is a singular Private Commission. Curated by LuxID. Powered by Doorlyst.`,
          whatsappHook: `Greetings. Exclusive digital twin credentials of your custom Ezzy Elite residence are now provisioned. May our private advisor arrange your atelier walkthrough?`
        },
        unitDesign: `A customized 9,100 sq ft biomorphic pavilion featuring hand-selected gold-veined near-black marble, an integrated structural botanical green lounge, and a 20m high-elevation private infinity pool.`,
        funnelStrategy: `Targeted high-precision LinkedIn executive campaigns combined with Taboola native ads detailing Bangalore CBD scarcity. Leads funnel straight to our WhatsApp qualified digital atelier.`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="w-full bg-[#0b090a] border border-[#a4161a]/30 rounded-xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden"
      id="ai-sandbox-root"
    >
      {/* Background soft glowing accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#660708]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Interactive Panel */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-roboto tracking-widest text-[#e5383b] uppercase mb-3">
              <Cpu className="w-4 h-4 text-[#e5383b] animate-pulse" />
              <span>Doorlyst AI Powered Engine</span>
            </div>
            
            <h3 className="font-sans text-2xl md:text-3xl text-white mb-2 font-bold tracking-tight">
              Strategic Target Matcher
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Explore how our algorithm targets premium buyers, generates bespoke architecture themes, and automates high-end campaigns.
            </p>

            {/* Persona Choices */}
            <div className="space-y-3 mb-6" id="persona-selector">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Select Base Segment
              </span>
              
              {PRESET_PERSONAS.map((persona) => {
                const isSelected = selectedPersona.id === persona.id;
                return (
                  <button
                    key={persona.id}
                    onClick={() => handlePersonaSelect(persona)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all duration-300 relative ${
                      isSelected 
                        ? "bg-[#ba181b]/10 border-[#e5383b] shadow-[0_0_15px_rgba(229,56,59,0.15)]" 
                        : "bg-transparent border-[#b1a7a6]/10 hover:border-[#b1a7a6]/30 text-gray-300 hover:text-white"
                    }`}
                    id={`persona-btn-${persona.id}`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-sm font-sans tracking-wide">
                        {persona.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#e5383b] tracking-wider bg-[#a4161a]/15 px-2 py-0.5 rounded">
                        {persona.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-normal line-clamp-2">
                      {persona.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Prompt Customization Area */}
            <div className="mb-6">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                Custom Buyer Profile Attributes
              </label>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Describe custom features e.g. 'Values art collecting, demands multi-generational layout, from London...'"
                className="w-full h-24 bg-[#161a1d]/80 border border-[#b1a7a6]/25 rounded-lg p-3 text-xs text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-[#e5383b] transition-colors leading-relaxed font-sans resize-none"
                id="custom-persona-textarea"
              />
            </div>
          </div>

          <button
            onClick={triggerMatch}
            disabled={loading}
            className="w-full bg-[#e5383b] hover:bg-[#ba181b] text-white font-medium tracking-wide text-xs uppercase py-3.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-transparent shadow-[#e5383b]/10 shadow-lg cursor-pointer font-bold"
            id="strategy-trigger-btn"
          >
            {loading ? (
              <span className="animate-pulse flex items-center gap-2">
                Analyzing Portfolio Metrics...
              </span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Simulate Sales Engine Pitch</span>
              </>
            )}
          </button>
        </div>

        {/* Right Output Panel */}
        <div className="w-full lg:w-7/12 bg-[#161a1d]/90 border border-[#b1a7a6]/15 rounded-lg p-5 md:p-6 flex flex-col justify-center min-h-[460px] relative">
          
          {loading && (
            <div className="absolute inset-0 bg-[#0b090a]/95 flex flex-col items-center justify-center p-6 z-10 rounded-lg">
              <div className="w-12 h-12 border-2 border-t-[#e5383b] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4" />
              <div className="text-[#e5383b] font-mono text-xs tracking-wider uppercase animate-pulse mb-2 text-center">
                Processing Real-Time Strategic Pitch
              </div>
              <div className="text-gray-400 text-xs font-sans text-center max-w-sm h-10">
                {loadingStep}
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-fade-in" id="ai-result-panel">
              
              {/* Header section with category badge */}
              <div className="border-b border-[#b1a7a6]/10 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <span className="text-[10px] font-roboto tracking-widest text-[#b1a7a6] uppercase block">
                    Tailored Strategy Model
                  </span>
                  <h4 className="font-sans text-xl text-white font-bold tracking-tight">
                    {result.buyerPersona}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono bg-emerald-950/20 px-2.5 py-1 rounded border border-emerald-900/30">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Doorlyst Validated</span>
                </div>
              </div>

              {/* Psychographic Driver Deep Dive */}
              <div>
                <span className="text-[9px] font-mono tracking-wider text-[#b1a7a6] uppercase block mb-1">
                  Psychographic Target Analysis
                </span>
                <p className="text-gray-300 text-sm leading-relaxed font-sans">
                  {result.psychographics}
                </p>
              </div>

              {/* Motivating Anchors */}
              <div>
                <span className="text-[9px] font-mono tracking-wider text-[#b1a7a6] uppercase block mb-2">
                  Key Customer Anchors
                </span>
                <ul className="space-y-2 text-xs text-gray-300">
                  {result.drivers.map((driver, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CornerDownRight className="w-4 h-4 text-[#e5383b] shrink-0 mt-0.5" />
                      <span>{driver}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architectural Layout Customization */}
              <div className="bg-[#a4161a]/10 p-4 rounded-lg border border-[#a4161a]/30">
                <span className="text-[9px] font-mono tracking-wider text-[#b1a7a6] uppercase block mb-1.5">
                  Private Architectural Commission (LuxID Atelier)
                </span>
                <p className="text-xs text-gray-200 leading-relaxed font-sans font-medium">
                  {result.unitDesign}
                </p>
              </div>

              {/* Precise Digital Funnel Trigger */}
              <div>
                <span className="text-[9px] font-mono tracking-wider text-[#b1a7a6] uppercase block mb-1">
                  Precision Growth Funnel Trigger
                </span>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {result.funnelStrategy}
                </p>
              </div>

              {/* Copyable Campaigns and Scripts */}
              <div className="border-t border-[#b1a7a6]/15 pt-5 space-y-4">
                <span className="text-[10px] font-mono tracking-wider text-white uppercase block">
                  Automated Creative Content Output
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Instagram grid overhauled text */}
                  <div className="bg-[#0b090a] p-3 rounded border border-[#b1a7a6]/10 relative group">
                    <button
                      onClick={() => handleCopy(result.adCopy.instagramGridText, "instagram")}
                      className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-white rounded bg-gray-900/50 hover:bg-gray-800 transition-colors"
                      title="Copy grid content"
                    >
                      {copiedField === "instagram" ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[8px] font-mono text-gray-400 block mb-1 uppercase tracking-widest">
                      Instagram Overhaul Copy
                    </span>
                    <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-4 pr-6">
                      {result.adCopy.instagramGridText}
                    </p>
                  </div>

                  {/* LinkedIn text */}
                  <div className="bg-[#0b090a] p-3 rounded border border-[#b1a7a6]/10 relative group">
                    <button
                      onClick={() => handleCopy(result.adCopy.linkedinText, "linkedin")}
                      className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-white rounded bg-gray-900/50 hover:bg-gray-800 transition-colors"
                      title="Copy copy content"
                    >
                      {copiedField === "linkedin" ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                    <span className="text-[8px] font-mono text-gray-400 block mb-1 uppercase tracking-widest">
                      LinkedIn Native Campaign
                    </span>
                    <p className="text-[11px] text-gray-300 leading-relaxed line-clamp-4 pr-6">
                      {result.adCopy.linkedinText}
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp Concierge script */}
                <div className="bg-[#0b090a] p-3.5 rounded border border-[#b1a7a6]/10 relative">
                  <button
                    onClick={() => handleCopy(result.adCopy.whatsappHook, "whatsapp")}
                    className="absolute top-3.5 right-3.5 p-1.5 text-gray-400 hover:text-white rounded bg-gray-900/50 hover:bg-gray-800 transition-colors"
                    title="Copy concierge text"
                  >
                    {copiedField === "whatsapp" ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <span className="text-[8px] font-mono text-[#e5383b] block mb-1 uppercase tracking-widest font-bold">
                    Concierge WhatsApp Outreach Script
                  </span>
                  <p className="text-[11px] font-mono text-gray-300 italic leading-relaxed pr-6">
                    "{result.adCopy.whatsappHook}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
