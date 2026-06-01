import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { OrbitalBranding } from "./components/OrbitalBranding";
import { AISandbox } from "./components/AISandbox";
import { BuyerTransformation } from "./components/BuyerTransformation";
import { SpecialStrategicPositioning } from "./components/SpecialStrategicPositioning";
import { AgencyShowcaseSection } from "./components/AgencyShowcaseSection";
import { ContentStrategySlider } from "./components/ContentStrategySlider";
import { AdsMarketingBrandEngine } from "./components/AdsMarketingBrandEngine";
import { AudiencePersonasSlider } from "./components/AudiencePersonasSlider";
import { BuyerConversionMap } from "./components/BuyerConversionMap";
import { CommercialsEzzy } from "./components/CommercialsEzzy";
import { MatchResult, EpicProject } from "./types";
import { 
  Building2, 
  MapPin, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Target, 
  PieChart, 
  Instagram, 
  Linkedin, 
  FileCheck2, 
  ShieldCheck, 
  Check, 
  Layers, 
  ArrowUpRight, 
  Flame, 
  Mail, 
  Copy, 
  Plus,
  SlidersHorizontal
} from "lucide-react";

// Importing generated premium images with ts-ignore for strict linter resolution
// @ts-ignore
import ezzyEliteFacade from "./assets/images/ezzy_elite_facade_1779441088942.png";
// @ts-ignore
import ezzyEliteInterior from "./assets/images/ezzy_elite_interior_1779441109685.png";

// Legacy projects array
const LEGACY_PROJECTS: EpicProject[] = [
  {
    name: "Ezzy Central",
    location: "Commercial Street, Bangalore CBD",
    year: "Launched 2013",
    quote: "Sovereign Commerce & Absolute Precision",
    description: "A landmark commercial structure wrapped in high-strength fluid crystalline glazing and polished steel framing, redefined the spatial density of Bangalore's key central shopping corridor.",
    bgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "The Corinth",
    location: "Hennur, Bangalore North",
    year: "Completed 2016",
    quote: "Neoclassical Symmetries Meet Contemporary Light",
    description: "Inspired by classical Greek orders and absolute geometry, featuring soaring hand-carved pillars, internal courtyard fountains, and modern high-ventilation glass atriums.",
    bgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
  },
  {
    name: "Ezzy Grande",
    location: "Whitefield, Bangalore East",
    year: "Completed 2019",
    quote: "Sovereign Villas for the Technocratic Elite",
    description: "An exclusive enclave of smart residences where dynamic fluid concrete facades frame expansive double-height volumes and automated subterranean car lounges.",
    bgUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop"
  }
];

// LuxID Atelier material pairing selections
interface MaterialPairing {
  id: string;
  name: string;
  materials: string;
  description: string;
  feeling: string;
}

const MATERIAL_PAIRINGS: MaterialPairing[] = [
  {
    id: "obsidian",
    name: "Obsidian & Liquid Brass",
    materials: "Hand-hammered volcanic basalt, mirror-polished liquid brass inlay, fluted smoky quartz glaze.",
    description: "Exudes monolithic sovereignty. Perfect for high-contrast living chambers where evening light catches the dark textured basalt.",
    feeling: "Deep Sovereignty"
  },
  {
    id: "calacatta",
    name: "Calacatta Gold & Fluid Bronze",
    materials: "Italian Calacatta Michelangelo marble, continuous hand-sculpted bronze ribbons, cashmere silk panels.",
    description: "A bright, celestial sanctuary. Sinuous gold veining seamlessly frames floor-to-ceiling biophilic glass terraces.",
    feeling: "Celestial Radiance"
  },
  {
    id: "cognac",
    name: "Cognac Oak & Basalt Silver",
    materials: "Fumed century-old cognac oak, wire-brushed silver granite, textured raw leather partitions.",
    description: "Tactile warmth and organic privilege. Combines the depth of aged wood with the enduring strength of local Bangalore granite.",
    feeling: "Quiet Sanctuary"
  }
];

// Instagram Grid Mockposts
interface InstaPost {
  id: number;
  pillar: "Architecture" | "Identity" | "Lifestyle";
  headline: string;
  subhead: string;
  visualAlt: string;
  aiStrategy: string;
  bgGradient: string;
}

const INSTA_POSTS: InstaPost[] = [
  {
    id: 1,
    pillar: "Architecture",
    headline: "Form Meets Biology",
    subhead: "The sinuous facade of Ezzy Elite breathes.",
    visualAlt: "Rendering showing sinuous green lines wrapping the exterior of Dickenson Road.",
    aiStrategy: "Displays the biomorphic architectural concept to attract design-conscious HNW founders.",
    bgGradient: "from-slate-900 via-teal-950 to-emerald-950"
  },
  {
    id: 2,
    pillar: "Identity",
    headline: "Private Commissions Only",
    subhead: "Under a partnership with LuxID, no two units are alike.",
    visualAlt: "Detailed close-up on the fluid bronze and volcanic basalt material pairings.",
    aiStrategy: "Drives exclusivity and scarcity by framing purchases as hand-crafted museum pieces.",
    bgGradient: "from-slate-900 via-amber-950 to-neutral-900"
  },
  {
    id: 3,
    pillar: "Lifestyle",
    headline: "Dickenson Road Legacy",
    subhead: "Bangalore CBD's final architectural masterwork.",
    visualAlt: "Elevated view overlooking the lush canopy of Cubbon Park from the penthouse pool.",
    aiStrategy: "Highlights geographic status and central location scarcity to target CBD executives.",
    bgGradient: "from-slate-900 via-sky-950 to-blue-950"
  }
];

export interface ReferenceCard {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  videoUrl?: string;
  reelUrl?: string;
  rating: number;
  tag: string;
}

const REFERENCE_CARDS: ReferenceCard[] = [
  {
    id: 1,
    name: "Vikram K. Shastry",
    title: "Venture Partner, CBD Bangalore",
    quote: "EZzy Elite's steel structure is an absolute tectonic masterpiece of safety and pure glass transparency.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&fit=crop",
    videoUrl: "https://www.dropbox.com/scl/fi/9m55pgwf76at0mcj3kvyy/AQMIrXVWdU9yh1mu5EV2Dhc-fE_Ww7fXqy8-WOOd6AQ4UdO5qCBwlXtwplW8Q-mgSxiAw2srR5lTiu8Klu3Z__1ZCZekrqOx99oZQCk.mp4?rlkey=ii4wtjcpp419n9v8ze4msbo1y&st=r28i4m0o&raw=1",
    reelUrl: "https://www.instagram.com/reel/DT-iIVujSuI/?igsh=MWo0NDE4a3kwOGtpcw==",
    rating: 5,
    tag: "Acoustics & Steel"
  },
  {
    id: 2,
    name: "Natasha Cooper",
    title: "LuxID Global Design Director",
    quote: "The integration of hand-sculpted bronze ribbons and basalt stone elements sets a new worldwide bar for bespoke luxury.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=400&fit=crop",
    videoUrl: "https://www.dropbox.com/scl/fi/ebjbwkxqk7rk31j6tidj7/AQMpL7D9sUH-WFQEwMMsWFOHqUV9965NvBe8evkNnOdQbvF2xJugOYGtC18utciZmC7tVO_n4ah70o0OyRp3-g5z-1.mp4?rlkey=7k2s0gpwmm70hkn6azb1u47v9&st=b9d2u9j7&raw=1",
    reelUrl: "https://www.instagram.com/reel/DV8ktGmjTWc/?igsh=MTgyYXhzcHphYWpiYQ==",
    rating: 5,
    tag: "Material Couture"
  },
  {
    id: 3,
    name: "Dr. Aditya Sen",
    title: "Owner, Penthouse Commission No. 3",
    quote: "The sound attenuation is profound. Living in the center of Bangalore's bustling CBD feels like an whispering sanctuary.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&fit=crop",
    videoUrl: "https://www.dropbox.com/scl/fi/k11hjxsm6jryc8qn02571/WhatsApp-Video-2026-05-30-at-12.15.23-PM.mp4?rlkey=pxn2w79dpzg5i5rj8g0bmjhao&st=rr8lpuxh&raw=1",
    rating: 5,
    tag: "Acoustics"
  },
  {
    id: 4,
    name: "Raymond G. Miller",
    title: "Lead Architect, Spatial Atelier London",
    quote: "A flawless translation of biophilic façade breathing. The kinetic glass louvers respond elegantly to Bangalore's clean dusk breeze.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&fit=crop",
    videoUrl: "https://www.dropbox.com/scl/fi/9aij58uoctihhdqztqlnl/AQOO0a0wBeNRQNVQcOvap1aWWZ4HfuZe4lDbYsEc-ohSWfUmmScwpa-CfGuPF6_2zKA74-0u6sx60qtpXiHpDHYhQcC5_WRvZ6_oUo.mp4?rlkey=4ngjnd1wxz1d4k38u9tp8jh71&st=mbttxkdr&raw=1",
    reelUrl: "https://www.instagram.com/reel/DSNDnBAE1Mu/?igsh=MWt0cWN1NzVhZmo2OA==",
    rating: 5,
    tag: "Biophilic Design"
  },
  {
    id: 5,
    name: "Kiran & Shalini Reddy",
    title: "Investors, Private Registry",
    quote: "Doorlyst's predictive target pairing delivered matches that align with lifestyle prestige. The execution is sovereign.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&fit=crop",
    videoUrl: "https://www.dropbox.com/scl/fi/4tvxhhms9h2adzhg9rc8j/AQNFXd1oXl4dCa5zmtozUmRfzb_0jus033tA2xcqq_cdq0AGZqzBZ8mICbDghEb6FFXcerO-CQU7WrjjMei9-Kh8Ka1C8r_6mSAYx9Q.mp4?rlkey=w9snzog0qac1xdose8sexkn14&st=5534re5t&raw=1",
    reelUrl: "https://www.instagram.com/reel/DR9fMPekWfv/?igsh=MXdiY3VyYWpvazBucA%3D%3D",
    rating: 5,
    tag: "Predictive Curation"
  },
  {
    id: 6,
    name: "Alistair Sterling",
    title: "Acoustics & Symmetrical Consultant",
    quote: "Perfect spatial symmetries. The dual-courtyard natural airflow and acoustic dampening create complete inner peace.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400&fit=crop",
    videoUrl: "https://www.dropbox.com/scl/fi/p3fmntaps686jnyif53nl/AQPeBENO93htsyeEkpzCNYhUQIrpSWmiBKXsIjQkxnrJ36aqi1fbeWOKsuXdeDO79ePO5HLqrUgHBSjHj6T_J73wjd-1sRpwi-fYj-Q.mp4?rlkey=1xr4g9iwq1l6n89dnvy2iuavw&st=wx397rez&raw=1",
    reelUrl: "https://www.instagram.com/reel/DO2Pv20CCcy/?igsh=MWlrYWVhZzgwb2UzZw==",
    rating: 5,
    tag: "Sovereign Engineering"
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [legacyIdx, setLegacyIdx] = useState<number>(0);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialPairing>(MATERIAL_PAIRINGS[0]);
  const [instaActivePost, setInstaActivePost] = useState<InstaPost | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const lastScrollTop = useRef<number>(0);
  
  // References Section states
  const [referenceAngle, setReferenceAngle] = useState<number>(0);
  const [isReferenceHovered, setIsReferenceHovered] = useState<boolean>(false);
  const [selectedReference, setSelectedReference] = useState<ReferenceCard>(REFERENCE_CARDS[0]);
  const [refDimensions, setRefDimensions] = useState({ rx: 510, ry: 105 });

  // Section 02.5 Credibility rotating arch states
  const [credibilityAngle, setCredibilityAngle] = useState<number>(180); // Start offset to distribute nicely over upper arc
  const [isCredibilityHovered, setIsCredibilityHovered] = useState<boolean>(false);
  const [credDimensions, setCredDimensions] = useState({ rx: 480, ry: 85 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setRefDimensions({ rx: 155, ry: 40 });
        setCredDimensions({ rx: 160, ry: 35 });
      } else if (w < 1024) {
        setRefDimensions({ rx: 320, ry: 75 });
        setCredDimensions({ rx: 290, ry: 60 });
      } else {
        setRefDimensions({ rx: 510, ry: 105 });
        setCredDimensions({ rx: 480, ry: 85 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth continuous rotation loop using requestAnimationFrame
  useEffect(() => {
    if (isReferenceHovered) return;
    let animId: number;
    const speed = 0.22; // noticeably faster, clean energetic motion
    const tick = () => {
      setReferenceAngle((prev) => (prev + speed) % 360);
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isReferenceHovered]);

  // Smooth continuous rotation loop for Credibility Arch cards
  useEffect(() => {
    if (isCredibilityHovered) return;
    let animId: number;
    const speed = 0.24; // fast cinematic dynamic motion
    const tick = () => {
      setCredibilityAngle((prev) => (prev + speed) % 360);
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isCredibilityHovered]);

  // Custom strategic feedback form
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const [agencyOnboarded, setAgencyOnboarded] = useState<boolean>(false);
  const [clientName, setClientName] = useState<string>("");
  const [clientTitle, setClientTitle] = useState<string>("");

  // Map landmark focus
  const [mapLandmark, setMapLandmark] = useState<string>("dickenson");

  // State to check if horizontal credibility marquee is hovered
  const [isMarqueeHovered, setIsMarqueeHovered] = useState<boolean>(false);

  // State to check active tab for Doorlyst About section operations
  const [aboutTab, setAboutTab] = useState<"who" | "mission" | "what">("who");

  // Auto-play the legacy projects of Ezzy Group since selectors are removed
  useEffect(() => {
    const timer = setInterval(() => {
      setLegacyIdx((prev) => (prev + 1) % LEGACY_PROJECTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Monitor scroll for custom side progress indicator
  useEffect(() => {
    const viewport = document.getElementById("app-viewport");
    if (!viewport) return;

    const handleScroll = () => {
      const st = viewport.scrollTop;
      const sh = viewport.scrollHeight;
      const ch = viewport.clientHeight;
      const percent = sh - ch ? (st / (sh - ch)) * 100 : 0;
      setScrollProgress(percent);

      // Scroll direction with minor hysteresis/threshold
      if (st <= 40) {
        setShowHeader(true);
      } else {
        const delta = st - lastScrollTop.current;
        if (delta > 5) {
          // Scrolling down: Slide Up to Hide
          setShowHeader(false);
        } else if (delta < -10) {
          // Scrolling up: Slide Down to Reveal
          setShowHeader(true);
        }
      }
      lastScrollTop.current = st;

      // Simple active section highlights
      const sections = [
        "hero", 
        "about-doorlyst", 
        "about-doorlyst-credibility", 
        "buyer-transformation",
        "ezzy-elite-positioning-editorial",
        "ezzy-elite-extra-canvas",
        "creative-agency-showcase",
        "about-ezzy", 
        "ezzy-creative-content-strategy",
        "ads-and-marketing",
        "ads-marketing-brand-engine",
        "buyer-personas",
        "buyer-conversion-map",
        "doorlyst-legacy-connection"
      ];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= ch / 2 && rect.bottom >= ch / 2) {
            setActiveSection(id);
          }
        }
      }
    };
    viewport.addEventListener("scroll", handleScroll);
    // Initial run to verify current state
    handleScroll();
    return () => viewport.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOnboardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName) {
      setAgencyOnboarded(true);
    }
  };

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth sm:snap-y sm:snap-mandatory bg-[#02050c] text-[#f3f4f6] relative font-sans selection:bg-[#e5383b] selection:text-white" id="app-viewport">
      
      {/* Floating GPS coordinates on Left edge */}
      <div className="fixed left-4 bottom-12 z-40 origin-left -rotate-90 -translate-x-1/2 text-[9px] font-mono uppercase tracking-[0.34em] text-gray-500 hidden xl:flex items-center gap-3">
        <span>Dickenson Road coordinates</span>
        <span className="text-[#e5383b] font-medium font-mono">12° 58' 41.2" N | 77° 37' 12.5" E</span>
      </div>

      {/* Floating Scroll Indicator on Right edge */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 hidden md:flex">
        <span className="text-[9px] font-mono text-[#e5383b] uppercase tracking-widest">{Math.round(scrollProgress)}%</span>
        <div className="w-[1px] h-32 bg-gray-800 relative">
          <div 
            className="absolute top-0 left-0 w-full bg-[#e5383b] transition-all duration-150" 
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest rotate-90 mt-2">Scroll</span>
      </div>

      {/* Elegant Editorial Fixed Header matching Veloture Reference */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-2 sm:px-4 md:px-16 py-3 md:py-6 ${
          showHeader
            ? activeSection === "hero" 
              ? "opacity-100 translate-y-0 bg-[#02050c]/35 backdrop-blur-[2px] border-b border-transparent" 
              : "opacity-100 translate-y-0 bg-[#02050c]/85 border-b border-white/5 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`} 
        id="main-header"
      >
         {/* Desktop Layout (lg and larger) */}
         <div className="hidden lg:flex max-w-7xl mx-auto justify-between items-center font-sans relative">
           {/* Top Left: About us & Ezzy Elite */}
           <div className="flex items-center gap-2 md:gap-4">
             <button 
                onClick={() => handleScrollTo("about-doorlyst")} 
                className={`border border-white/60 text-white hover:bg-white hover:text-[#02050c] text-xs lg:text-[16px] font-normal tracking-wider px-4 py-2 lg:px-5 lg:py-2 rounded-full transition-all duration-300 cursor-pointer uppercase ${activeSection === "about-doorlyst" || activeSection === "about-doorlyst-credibility" ? "bg-white text-[#02050c] font-medium" : ""}`}
                id="nav-link-aboutus"
              >
                 About us
              </button>
              <button 
                onClick={() => handleScrollTo("ezzy-elite-positioning-editorial")} 
                className={`border border-white/60 text-white hover:bg-white hover:text-[#02050c] text-xs lg:text-[16px] font-normal tracking-wider px-4 py-2 lg:px-5 lg:py-2 rounded-full transition-all duration-300 cursor-pointer uppercase ${activeSection === "ezzy-elite-positioning-editorial" || activeSection === "ezzy-elite-extra-canvas" ? "bg-white text-[#02050c] font-medium" : ""}`}
                id="nav-link-ezzyelite"
              >
                 Ezzy Elite
              </button>
           </div>
 
           {/* Top Center: Branding */}
           <div className="absolute left-1/2 -translate-x-1/2">
              <button 
                onClick={() => handleScrollTo("creative-agency-showcase")}
                className={`border border-white/60 text-white hover:bg-white hover:text-[#02050c] text-xs lg:text-[16px] font-normal tracking-wider px-4 py-2 lg:px-5 lg:py-2 rounded-full transition-all duration-300 cursor-pointer uppercase ${activeSection === "creative-agency-showcase" || activeSection === "about-ezzy" || activeSection === "ezzy-creative-content-strategy" ? "bg-white text-[#02050c] font-medium" : ""}`}
                id="nav-logo-branding"
              >
                 Branding
              </button>
           </div>
 
           {/* Top Right: Ads & Marketing */}
           <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => handleScrollTo("ads-marketing-brand-engine")}
                className={`border border-white/60 text-white hover:bg-white hover:text-[#02050c] text-xs lg:text-[16px] font-normal tracking-wider px-4 py-2 lg:px-5 lg:py-2 rounded-full transition-all duration-300 cursor-pointer uppercase whitespace-nowrap ${activeSection === "ads-and-marketing" || activeSection === "ads-marketing-brand-engine" || activeSection === "buyer-personas" ? "bg-white text-[#02050c] font-medium" : ""}`}
                id="nav-link-references"
              >
                 Ads & Marketing
              </button>
              <button
                onClick={() => handleScrollTo("doorlyst-legacy-connection")}
                className={`border border-white/60 text-white hover:bg-white hover:text-[#02050c] text-xs lg:text-[16px] font-normal tracking-wider px-4 py-2 lg:px-5 lg:py-2 rounded-full transition-all duration-300 cursor-pointer uppercase whitespace-nowrap ${activeSection === "doorlyst-legacy-connection" ? "bg-white text-[#02050c] font-medium" : ""}`}
                id="nav-link-contact"
              >
                 Contact us
              </button>
           </div>
         </div>

        {/* Mobile / Tablet Responsive Layout (lg hidden) - elegant single-row bar with zero scrolling and perfect fit */}
        <div className="lg:hidden w-full">
          <div className="flex items-center justify-between w-full gap-1.5 px-1">
            <button 
              onClick={() => handleScrollTo("about-doorlyst")} 
              className={`flex-1 text-center border border-white/40 text-white hover:bg-white hover:text-[#02050c] text-[6.5px] min-[350px]:text-[7.5px] min-[385px]:text-[8.5px] min-[420px]:text-[9.5px] font-extrabold tracking-tighter py-1.5 px-0.5 rounded-full transition-all duration-300 cursor-pointer uppercase whitespace-nowrap ${activeSection === "about-doorlyst" || activeSection === "about-doorlyst-credibility" ? "bg-white text-[#02050c] border-white" : ""}`}
            >
              About us
            </button>
            <button 
              onClick={() => handleScrollTo("ezzy-elite-positioning-editorial")} 
              className={`flex-1 text-center border border-white/40 text-white hover:bg-white hover:text-[#02050c] text-[6.5px] min-[350px]:text-[7.5px] min-[385px]:text-[8.5px] min-[420px]:text-[9.5px] font-extrabold tracking-tighter py-1.5 px-0.5 rounded-full transition-all duration-300 cursor-pointer uppercase whitespace-nowrap ${activeSection === "ezzy-elite-positioning-editorial" || activeSection === "ezzy-elite-extra-canvas" ? "bg-white text-[#02050c] border-white" : ""}`}
            >
              Ezzy Elite
            </button>
            <button 
              onClick={() => handleScrollTo("creative-agency-showcase")}
              className={`flex-1 text-center border border-white/40 text-white hover:bg-white hover:text-[#02050c] text-[6.5px] min-[350px]:text-[7.5px] min-[385px]:text-[8.5px] min-[420px]:text-[9.5px] font-extrabold tracking-tighter py-1.5 px-0.5 rounded-full transition-all duration-300 cursor-pointer uppercase whitespace-nowrap ${activeSection === "creative-agency-showcase" || activeSection === "about-ezzy" || activeSection === "ezzy-creative-content-strategy" ? "bg-white text-[#02050c] border-white" : ""}`}
            >
              Branding
            </button>
            <button
              onClick={() => handleScrollTo("ads-marketing-brand-engine")}
              className={`flex-1 text-center border border-white/40 text-white hover:bg-white hover:text-[#02050c] text-[6.5px] min-[350px]:text-[7.5px] min-[385px]:text-[8.5px] min-[420px]:text-[9.5px] font-extrabold tracking-tighter py-1.5 px-0.5 rounded-full transition-all duration-300 cursor-pointer uppercase whitespace-nowrap ${activeSection === "ads-and-marketing" || activeSection === "ads-marketing-brand-engine" || activeSection === "buyer-personas" ? "bg-white text-[#02050c] border-white" : ""}`}
            >
              Ads & Marketing
            </button>
            <button
              onClick={() => handleScrollTo("doorlyst-legacy-connection")}
              className={`flex-1 text-center border border-white/40 text-white hover:bg-white hover:text-[#02050c] text-[6.5px] min-[350px]:text-[7.5px] min-[385px]:text-[8.5px] min-[420px]:text-[9.5px] font-extrabold tracking-tighter py-1.5 px-0.5 rounded-full transition-all duration-300 cursor-pointer uppercase whitespace-nowrap ${activeSection === "doorlyst-legacy-connection" ? "bg-white text-[#02050c] border-white" : ""}`}
            >
              Contact us
            </button>
          </div>
        </div>
      </header>

      {/* ================= SECTION 01: HERO / LANDING PAGE ================= */}
      <section 
        id="hero" 
        className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always overflow-hidden relative flex flex-row select-none"
      >
        {/* Left Half: Pure Solid White */}
        <div className="w-1/2 min-h-screen sm:h-full bg-[#ffffff] relative z-0" />

        {/* Right Half: Swimming Pool & Natural Elements */}
        <div className="w-1/2 min-h-screen sm:h-full relative z-0 overflow-hidden bg-neutral-900">
          {/* Main Ripple Pool Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-105"
            style={{
              backgroundImage: 'url("https://www.dropbox.com/scl/fi/waoaxnfwj854cilr9neah/download-4-1.jpg?rlkey=pp6l4a9haqwl2c4fwq1fk31mk&st=15x3p5fv&raw=1")',
            }}
          />
          {/* Subtle water overlay to match original photo quality */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>

        {/* Coded Split Typography Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none px-4 sm:px-8">
          <div className="w-full flex items-center justify-center font-sans tracking-tight">
            {/* DOORLYST in bold red sans-serif on the Left (White) side */}
            <div className="w-1/2 text-right pr-2 sm:pr-4 md:pr-6 lg:pr-8 xl:pr-10">
              <span className="font-sans font-extrabold text-2xl sm:text-4xl md:text-6xl lg:text-[76px] xl:text-[88px] leading-none text-[#e5383b] uppercase tracking-tighter select-none block animate-fade-in">
                DOORLYST
              </span>
            </div>
            
            {/* X Separator placed directly at the boundary center */}
            <div className="shrink-0 flex items-center justify-center z-30 select-none mx-2 sm:mx-4">
              <span className="font-sans font-black text-lg sm:text-2xl md:text-4xl lg:text-5xl text-[#161815] leading-none">
                X
              </span>
            </div>

            {/* EZZY ELITE in elegant matching serif on the Right (Pool) side */}
            <div className="w-1/2 text-left pl-2 sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10">
              <span className="font-serif font-light text-2xl sm:text-4xl md:text-6xl lg:text-[76px] xl:text-[88px] leading-none text-white uppercase tracking-tighter select-none block animate-fade-in">
                EZZY ELITE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 02: ABOUT US - DOORLYST ================= */}
      <section 
        id="about-doorlyst" 
        className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always overflow-y-auto lg:overflow-hidden flex flex-col justify-center py-8 sm:py-8 md:py-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 relative"
        style={{
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center h-full space-y-2.5 sm:space-y-4 md:space-y-6">
          
          {/* Headline and Sub-headline stack */}
          <div className="text-left space-y-2 sm:space-y-4">
            <h2 
              className="text-[#161815] leading-snug max-w-6xl font-sans text-[17px] sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[40px] font-normal tracking-tight"
            >
              <span className="font-normal tracking-tight select-none mr-2 text-[#161815]">
                Doorlyst
              </span>
              is an <span className="italic font-bold text-[#e5383b] normal-case">AI-powered marketing engine</span> that translates architectural masterpieces into the digital narratives that help you find and connect with the right buyers.
            </h2>
            <p className="text-[#161815]/75 text-[11px] sm:text-sm md:text-base leading-relaxed font-sans max-w-5xl text-left select-none">
              Shaping the digital future of prestigious residences and connecting them with potential buyers.
            </p>
          </div>

          {/* Main Horizontal Tab Selector */}
          <div className="flex flex-row justify-center items-center space-x-1 sm:space-x-4 md:space-x-6 w-full z-10 py-1 border-y border-zinc-100/60 my-0.5 bg-white/20 backdrop-blur-[2px]">
            <button
              onClick={() => setAboutTab("who")}
              className={`px-2.5 sm:px-6 py-1.5 sm:py-2 rounded-full font-mono text-[8px] sm:text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer border relative overflow-hidden group ${
                aboutTab === "who"
                  ? "bg-[#e5383b] border-[#e5383b] text-white font-bold shadow-[0_8px_20px_-4px_rgba(255,41,56,0.35)] scale-103"
                  : "bg-white/70 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              }`}
            >
              {aboutTab === "who" && (
                <span className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
              )}
              <span className="relative z-10">WHO ARE WE</span>
            </button>

            <button
              onClick={() => setAboutTab("mission")}
              className={`px-2.5 sm:px-6 py-1.5 sm:py-2 rounded-full font-mono text-[8px] sm:text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer border relative overflow-hidden group ${
                aboutTab === "mission"
                  ? "bg-[#e5383b] border-[#e5383b] text-white font-bold shadow-[0_8px_20px_-4px_rgba(255,41,56,0.35)] scale-103"
                  : "bg-white/70 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              }`}
            >
              {aboutTab === "mission" && (
                <span className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
              )}
              <span className="relative z-10">MISSION & VISION</span>
            </button>

            <button
              onClick={() => setAboutTab("what")}
              className={`px-2.5 sm:px-6 py-1.5 sm:py-2 rounded-full font-mono text-[8px] sm:text-[11px] md:text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer border relative overflow-hidden group ${
                aboutTab === "what"
                  ? "bg-[#e5383b] border-[#e5383b] text-white font-bold shadow-[0_8px_20px_-4px_rgba(255,41,56,0.35)] scale-103"
                  : "bg-white/70 border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-400 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)]"
              }`}
            >
              {aboutTab === "what" && (
                <span className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
              )}
              <span className="relative z-10">WHAT WE DO</span>
            </button>
          </div>

          {/* Dynamic Animated Content Panel Bed */}
          <div className="relative flex-grow flex items-center w-full z-10 transition-all">
            <AnimatePresence mode="wait">
              {aboutTab === "who" && (
                <motion.div
                  key="who"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 min-h-[120px] md:min-h-[180px] bg-neutral-50 border border-neutral-200 p-3 sm:p-5 md:p-6 lg:p-7 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
                >
                  {/* Left content block */}
                  <div className="flex-grow space-y-2 w-full text-left z-10">
                    <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#e5383b] uppercase font-bold">
                      01 / STRATEGIC ADVISORY
                    </div>
                    <p className="text-neutral-800 text-[13px] sm:text-base md:text-lg leading-relaxed font-sans font-normal">
                      We are a strategic collective of marketing experts and data specialists. Since 2024, we have focused on bridging the gap between exceptional architectural visions and the high expectations of the city's most influential residents.
                    </p>
                  </div>
                </motion.div>
              )}

              {aboutTab === "mission" && (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 min-h-[120px] md:min-h-[180px] bg-neutral-50 border border-neutral-200 p-3 sm:p-5 md:p-6 lg:p-7 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
                >
                  {/* Left content block */}
                  <div className="flex-grow space-y-2 w-full text-left z-10">
                    <div className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#e5383b] uppercase font-bold">
                      02 / ENDURING STANDARD
                    </div>
                    <p className="text-neutral-800 text-[13px] sm:text-base md:text-lg leading-relaxed font-sans font-normal">
                      To evolve the premium real estate experience by shaping structural mastery into a lasting narrative of quiet distinction for the most prestigious micro-markets.
                    </p>
                  </div>
                </motion.div>
              )}

              {aboutTab === "what" && (
                <motion.div
                  key="what"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 min-h-[120px] md:min-h-[180px] bg-neutral-50 border border-neutral-200 p-3 sm:p-4 md:p-5 lg:p-6 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative overflow-hidden"
                >
                  {/* Mobile responsive: beautiful compact 2x2 grid of cards that fits nicely on any size screen without overflowing, containing the exact complete copy */}
                  <div className="md:hidden flex-grow space-y-2 w-full text-left z-10 p-0.5">
                    <div className="text-[9px] font-mono tracking-widest text-[#e5383b] uppercase font-bold">
                      03 / INTEGRATED OUTCOMES
                    </div>
                    {/* Compact 2x2 Grid for Mobile View with original exact copywriting */}
                    <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 mt-1">
                      {/* Item 1 */}
                      <div className="flex gap-1.5 text-left items-start">
                        <div className="w-1 h-1 rounded-full bg-[#e5383b] mt-1.5 flex-shrink-0" />
                        <div>
                          <span className="font-extrabold text-neutral-900 text-[9.5px] min-[375px]:text-[10.5px] font-sans block leading-tight">Market Advisory</span>
                          <p className="text-neutral-600 text-[8px] min-[350px]:text-[8.5px] min-[385px]:text-[9px] leading-relaxed font-sans font-normal mt-0.5">
                            Leveraging machine-learning insights and localized real estate metrics to decode purchase behaviors and lifestyle demands of elite active buyers.
                          </p>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex gap-1.5 text-left items-start">
                        <div className="w-1 h-1 rounded-full bg-[#e5383b] mt-1.5 flex-shrink-0" />
                        <div>
                          <span className="font-extrabold text-neutral-900 text-[9.5px] min-[375px]:text-[10.5px] font-sans block leading-tight">Product Positioning</span>
                          <p className="text-neutral-600 text-[8px] min-[350px]:text-[8.5px] min-[385px]:text-[9px] leading-relaxed font-sans font-normal mt-0.5">
                            Crafting sophisticated narrative lookbooks and digital masterpiece identities that highlight modern architectural marvels and bespoke premium materials.
                          </p>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex gap-1.5 text-left items-start">
                        <div className="w-1 h-1 rounded-full bg-[#e5383b] mt-1.5 flex-shrink-0" />
                        <div>
                          <span className="font-extrabold text-neutral-900 text-[9.5px] min-[375px]:text-[10.5px] font-sans block leading-tight">Acquisition Journeys</span>
                          <p className="text-neutral-600 text-[8px] min-[350px]:text-[8.5px] min-[385px]:text-[9px] leading-relaxed font-sans font-normal mt-0.5">
                            Engineering personalized, seamless buyer pathways from the first digital discovery down to private-invitation physical previews and exclusive tours.
                          </p>
                        </div>
                      </div>

                      {/* Item 4 */}
                      <div className="flex gap-1.5 text-left items-start">
                        <div className="w-1 h-1 rounded-full bg-[#e5383b] mt-1.5 flex-shrink-0" />
                        <div>
                          <span className="font-extrabold text-neutral-900 text-[9.5px] min-[375px]:text-[10.5px] font-sans block leading-tight">Growth Systems</span>
                          <p className="text-neutral-600 text-[8px] min-[350px]:text-[8.5px] min-[385px]:text-[9px] leading-relaxed font-sans font-normal mt-0.5">
                            Integrating advanced CRM platforms, custom optimization structures, and premium lead curation networks specifically adapted for boutique developer scaling.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop responsive layout: full grid */}
                  <div className="hidden md:block flex-grow text-left z-10 w-full">
                    {/* Title of active tab view */}
                    <div className="text-[10px] font-mono tracking-widest text-[#e5383b] uppercase font-bold text-left mb-3 px-2">
                      03 / INTEGRATED OUTCOMES
                    </div>

                    {/* Highly polished 2x2 grid structured with detailed copy to fill space beautifully (safe columns, no text wrapping constraints) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5 sm:gap-y-4 md:px-2">
                      
                      {/* Item 1 */}
                      <div className="flex gap-2.5 text-left py-1 px-1.5 rounded-xl hover:bg-black/5 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e5383b] mt-2 flex-shrink-0" />
                        <div className="space-y-0.5">
                          <span className="font-bold text-neutral-900 text-sm sm:text-base md:text-[17px] font-sans block">Market Advisory</span>
                          <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans font-normal">
                            Leveraging machine-learning insights and localized real estate metrics to decode purchase behaviors and lifestyle demands of elite active buyers.
                          </p>
                        </div>
                      </div>

                      {/* Item 2 */}
                      <div className="flex gap-2.5 text-left py-1 px-1.5 rounded-xl hover:bg-black/5 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e5383b] mt-2 flex-shrink-0" />
                        <div className="space-y-0.5">
                          <span className="font-bold text-neutral-900 text-sm sm:text-base md:text-[17px] font-sans block">Product Positioning</span>
                          <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans font-normal">
                            Crafting sophisticated narrative lookbooks and digital masterpiece identities that highlight modern architectural marvels and bespoke premium materials.
                          </p>
                        </div>
                      </div>

                      {/* Item 3 */}
                      <div className="flex gap-2.5 text-left py-1 px-1.5 rounded-xl hover:bg-black/5 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e5383b] mt-2 flex-shrink-0" />
                        <div className="space-y-0.5">
                          <span className="font-bold text-neutral-900 text-sm sm:text-base md:text-[17px] font-sans block">Acquisition Journeys</span>
                          <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans font-normal">
                            Engineering personalized, seamless buyer pathways from the first digital discovery down to private-invitation physical previews and exclusive tours.
                          </p>
                        </div>
                      </div>

                      {/* Item 4 */}
                      <div className="flex gap-2.5 text-left py-1 px-1.5 rounded-xl hover:bg-black/5 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e5383b] mt-2 flex-shrink-0" />
                        <div className="space-y-0.5">
                          <span className="font-bold text-neutral-900 text-sm sm:text-base md:text-[17px] font-sans block">Growth Systems</span>
                          <p className="text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans font-normal">
                            Integrating advanced CRM platforms, custom optimization structures, and premium lead curation networks specifically adapted for boutique developer scaling.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Minimal aesthetic spacer */}
          <div className="h-2 block" />

        </div>
      </section>
      {/* ================= SECTION 03: EZZY ELITE POSITIONING ================= */}
      <section 
        id="about-ezzy" 
        className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always overflow-y-auto sm:overflow-hidden flex flex-col justify-between py-10 md:py-14 px-6 md:px-16 lg:px-24 xl:px-32 relative bg-[#ffffff]"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'linear-gradient(to right, rgba(11, 19, 43, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11, 19, 43, 0.04) 1px, transparent 1px)',
          backgroundSize: '55px 55px'
        }}
      >
        {/* Top Pointers Line - placed cleanly at the top of Section 3, not overlapping items, strictly in one line with auto-scrolling marquee */}
        <div className="absolute top-[5%] md:top-[6%] left-0 right-0 z-40">
          <div className="max-w-5xl mx-auto overflow-hidden relative py-1 px-4">
            {/* Left and right gradient masks for a smooth fade effect on the edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex flex-row flex-nowrap gap-3 sm:gap-4 md:gap-6 w-max"
              animate={{ x: ["0%", "-33.33333%"] }}
              transition={{
                ease: "linear",
                duration: 16,
                repeat: Infinity,
              }}
            >
              {[
                { label: "EXPERIENCE", highlight: "2+ YEARS" },
                { label: "BUYERS CONNECTED", highlight: "100+" },
                { label: "BUILDERS & PROJECTS", highlight: "LEADING ROLE" },
                { label: "SALES SYSTEMS", highlight: "PROVEN SYSTEMS" },
              ].concat([
                { label: "EXPERIENCE", highlight: "2+ YEARS" },
                { label: "BUYERS CONNECTED", highlight: "100+" },
                { label: "BUILDERS & PROJECTS", highlight: "LEADING ROLE" },
                { label: "SALES SYSTEMS", highlight: "PROVEN SYSTEMS" },
              ]).concat([
                { label: "EXPERIENCE", highlight: "2+ YEARS" },
                { label: "BUYERS CONNECTED", highlight: "100+" },
                { label: "BUILDERS & PROJECTS", highlight: "LEADING ROLE" },
                { label: "SALES SYSTEMS", highlight: "PROVEN SYSTEMS" },
              ]).map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-[#f5f5f7] px-3 sm:px-4 py-1.5 rounded-full border border-neutral-200/40 shadow-[0_2px_8px_rgba(0,0,0,0.02)] shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e5383b]" />
                  <span className="font-mono text-[8px] sm:text-[9.5px] md:text-[10.5px] uppercase tracking-wider text-[#0b090a]/80 whitespace-nowrap">
                    <span className="font-extrabold text-[#e5383b] mr-1">{item.highlight}</span>
                    <span className="font-medium text-neutral-500">{item.label}</span>
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ================= EXACT REFERENCE FLOATING MINIMALIST LANDSCAPE CARDS ================= */}
        
        {/* Card 1: Top-Left (Indigo/Blue neon portrait) - Placed above "Digital." */}
        <div className="absolute top-[13%] sm:top-[17%] lg:top-[18%] xl:top-[19%] left-[12px] sm:left-[2.5%] lg:left-[4%] xl:left-[5%] z-10">
          <motion.div 
            style={{ willChange: "transform" }}
            animate={{ 
               x: [0, 6, 0],
               y: [0, -8, 0]
            }}
            transition={{ 
               duration: 4.5, 
               repeat: Infinity, 
               ease: "easeInOut",
               delay: 0.1
            }}
          >
            <div className="relative w-[114px] h-[76px] sm:w-[130px] sm:h-[88px] md:w-[170px] md:h-[115px] lg:w-[200px] lg:h-[135px] xl:w-[230px] xl:h-[155px] overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[26px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:scale-[1.04] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] transition-[transform,shadow] duration-700 ease-out cursor-pointer">
              <img 
                src="https://www.dropbox.com/scl/fi/fgwho1qe1qgdfmorkl1me/Road-Side-Evening-View_e-1.jpg?rlkey=krfdvw0x74ql41qsh4mfy87gj&st=tuw6zjbl&raw=1" 
                alt="Digital Art Blueprint" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Card 2: Top-Right (Deep Red backlight portrait) - Placed above "Digital." */}
        <div className="absolute top-[13%] sm:top-[17%] lg:top-[18%] xl:top-[19%] right-[12px] sm:right-[2.5%] lg:right-[4%] xl:right-[5%] z-10">
          <motion.div 
            style={{ willChange: "transform" }}
            animate={{ 
              x: [0, -6, 0],
              y: [0, 8, 0]
            }}
            transition={{ 
              duration: 5.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.7
            }}
          >
            <div className="relative w-[114px] h-[76px] sm:w-[130px] sm:h-[88px] md:w-[170px] md:h-[115px] lg:w-[200px] lg:h-[135px] xl:w-[230px] xl:h-[155px] overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[26px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:scale-[1.04] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] transition-[transform,shadow] duration-700 ease-out cursor-pointer">
              <img 
                src="https://www.dropbox.com/scl/fi/b7nk5ivn9v7unc7myivqj/Scene-6-1-1.jpg.png?rlkey=qg449ef86flccp7a4vxolbuz8&st=gxafk6f7&raw=1" 
                alt="Architectural Vision" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Card 3: Middle-Right (Vibrant Coral/Orange side profile) - Placed below "to move." right margin */}
        <div className="absolute bottom-[13%] sm:bottom-[10%] right-[12px] sm:right-[2.5%] lg:right-[4%] xl:right-[5%] z-10">
          <motion.div 
            style={{ willChange: "transform" }}
            animate={{ 
              x: [0, 5, 0],
              y: [0, -9, 0]
            }}
            transition={{ 
              duration: 5.0, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.4
            }}
          >
            <div className="relative w-[114px] h-[76px] sm:w-[130px] sm:h-[88px] md:w-[170px] md:h-[115px] lg:w-[200px] lg:h-[135px] xl:w-[230px] xl:h-[155px] overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[26px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:scale-[1.04] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] transition-[transform,shadow] duration-700 ease-out cursor-pointer">
              <img 
                src="https://www.dropbox.com/scl/fi/ihacr95apxwzf920ar5vw/22.jpeg?rlkey=80vhibq7u5m0xje779buskeiu&st=o2785zul&raw=1" 
                alt="Quiet Prestige" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Card 4: Bottom-Left (Beautiful silhouetted standing figure on dark horizon) - Placed below "Digital." left margin */}
        <div className="absolute bottom-[13%] sm:bottom-[10%] left-[12px] sm:left-[2.5%] lg:left-[4%] xl:left-[5%] z-10">
          <motion.div 
            style={{ willChange: "transform" }}
            animate={{ 
              x: [0, -5, 0],
              y: [0, 7, 0]
            }}
            transition={{ 
              duration: 6.0, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.9
            }}
          >
            <div className="relative w-[114px] h-[76px] sm:w-[130px] sm:h-[88px] md:w-[170px] md:h-[115px] lg:w-[200px] lg:h-[135px] xl:w-[230px] xl:h-[155px] overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[26px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:scale-[1.04] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] transition-[transform,shadow] duration-700 ease-out cursor-pointer">
              <img 
                src="https://www.dropbox.com/scl/fi/v9ljmnen2fw9coq2h7j3e/gen-ff-1.png?rlkey=kzt0qxiis3jj7jit811ttfe2a&st=kglpfgt1&raw=1" 
                alt="Vision Horizon" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Card 5: Lower Middle Part / Middle-Right Edge (Woman backlit in classic red/blue tones) - Centered beautifully at the bottom, safe from viewport cutoffs */}
        <div className="absolute bottom-[3.5%] left-1/2 -translate-x-1/2 sm:bottom-[1.5%] z-20">
          <motion.div 
            style={{ willChange: "transform" }}
            animate={{ 
              x: [0, 4, 0],
              y: [0, -6, 0]
            }}
            transition={{ 
              duration: 5.0, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1.0
            }}
          >
            <div className="relative w-[110px] h-[74px] sm:w-[120px] sm:h-[80px] md:w-[155px] md:h-[105px] lg:w-[185px] lg:h-[125px] xl:w-[210px] xl:h-[140px] overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[26px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:scale-[1.04] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] transition-[transform,shadow] duration-700 ease-out cursor-pointer">
              <img 
                src="https://www.dropbox.com/scl/fi/xow8dh6bcy012p5gspals/Copy-of-FRONT-OPTION-01-night-view-2.jpg?rlkey=heu25yr0rm5jn2m9mqns76wt8&st=20o2rs2z&raw=1" 
                alt="Elite Acquisition" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Card 6: Top Middle Part / Middle-Left Edge (New Portfolio Image) - Symmetrically aligned at the top center, matching the visual grid */}
        <div className="absolute top-[21%] left-1/2 -translate-x-1/2 sm:top-[17%] lg:top-[18%] xl:top-[19%] z-20">
          <motion.div 
            style={{ willChange: "transform" }}
            animate={{ 
              x: [0, -4, 0],
              y: [0, 6, 0]
            }}
            transition={{ 
              duration: 6.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.4
            }}
          >
            <div className="relative w-[110px] h-[74px] sm:w-[120px] sm:h-[80px] md:w-[155px] md:h-[105px] lg:w-[185px] lg:h-[125px] xl:w-[210px] xl:h-[140px] overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[26px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:scale-[1.04] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] transition-[transform,shadow] duration-700 ease-out cursor-pointer">
              <img 
                src="https://www.dropbox.com/scl/fi/jwq3oz90r7d89x2w7s3a1/WhatsApp-Image-2026-05-26-at-5.20.51-PM.jpeg?rlkey=9m525up9o0briy0pdvqjvv1vt&st=yegdubfh&raw=1" 
                alt="Elite Premium Portfolio" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>


        {/* ================= CENTRAL CONTENT WRAPPER ================= */}
        <div className="absolute inset-0 z-30 flex items-center justify-center p-6 pointer-events-none">
          {/* Main Display Typography (Exact Reference Style Layout) */}
          <div className="max-w-[218px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[620px] xl:max-w-[680px] pointer-events-auto bg-white/70 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none p-3 rounded-xl lg:p-0">
            <h2 className="font-serif font-medium tracking-tight text-neutral-900 mx-auto text-center text-[13px] sm:text-lg md:text-xl lg:text-[23px] xl:text-[26px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[1.45]">
              “Since 2024, Doorlyst has helped premium real estate brands connect with the right buyers through AI-driven marketing, branding, and modern sales strategies”
            </h2>
          </div>
        </div>


      </section>

      {/* ================= SECTION 02.8: BUYER TRANSFORMATION PORTAL ================= */}
      <BuyerTransformation />

      {/* ================= SECTION 02.9: EZZY ELITE POSITIONING EDITORIAL ================= */}
      <section 
        id="ezzy-elite-positioning-editorial" 
        className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always overflow-y-auto sm:overflow-hidden flex flex-col justify-between py-10 sm:py-8 md:py-10 px-0 relative bg-[#ffffff]"
        style={{
          backgroundColor: '#FFFFFF'
        }}
      >
        {/* Decorative subtle background accents */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
          style={{
            backgroundImage: "linear-gradient(to right, rgba(22, 26, 29, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 26, 29, 0.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }}
        />

        {/* Top Editorial Text Block - Exact same layout, copy, and proportions */}
        <div className="max-w-4xl mx-auto w-full relative z-10 px-6 sm:px-12 md:px-16 text-center select-none pt-4 sm:pt-6 md:pt-10 mb-8 sm:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-3.5 sm:space-y-4"
          >
            <div className="text-[11px] sm:text-[11px] font-mono tracking-[0.25em] text-[#e5383b] uppercase font-extrabold">
              Ezzy Elite
            </div>
            
            <p className="text-zinc-600 font-sans font-light text-[15.5px] sm:text-[14.5px] md:text-[15.5px] lg:text-[16.5px] max-w-3xl mx-auto leading-relaxed">
              <span className="font-extrabold text-neutral-900 tracking-tight font-sans">Project Overview:</span> A landmark masterpiece at Dickenson Road, Bangalore&rsquo;s most ionic postcode. Moving beyond just a residence to a &ldquo;private commission&rdquo; for those who value discretion.
            </p>
          </motion.div>
        </div>

        {/* Bottom 3-column elegant editorial picture triptych matching the updated design style layout */}
        <div className="w-full relative z-10 select-none pb-0 mt-auto px-4 sm:px-0">
          <div className="w-full h-auto sm:h-[52vh] md:h-[55vh] xl:h-[58vh] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-1 md:gap-2 relative bg-[#ffffff] sm:bg-neutral-150 overflow-hidden">
            
            {/* First Frame: Private Veranda Balcony */}
            <div className="w-full h-[280px] sm:h-full overflow-hidden group cursor-pointer bg-neutral-100 relative rounded-xl sm:rounded-none">
              <motion.div
                initial={{ scale: 1.0 }}
                whileInView={{ scale: 1.08 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  duration: 1.8, 
                  ease: [0.25, 0.8, 0.25, 1] 
                }}
                whileHover={{ 
                  scale: 1.13,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                className="w-full h-full"
              >
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/8vxuaiibkw64kun9vkfsv/elite-curtain-balcony.avif?rlkey=c8jral04rsq86oi5qj056uxtr&st=u2kc4j05&raw=1"
                  alt="Ezzy Elite Balcony & Veranda commission"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Subtle light vignette/gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* Middle Frame: Golden Hour Building Elevation */}
            <div className="w-full h-[280px] sm:h-full overflow-hidden group cursor-pointer bg-neutral-100 relative rounded-xl sm:rounded-none">
              <motion.div
                initial={{ scale: 1.0 }}
                whileInView={{ scale: 1.08 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  duration: 1.8, 
                  ease: [0.25, 0.8, 0.25, 1] 
                }}
                whileHover={{ 
                  scale: 1.13,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                className="w-full h-full"
              >
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/gpmx78w2la9nq4qz7vblc/250202_RARE-7155-BANGALORE-LUXURY_HERO_8KTeam.avif?rlkey=g5hzjartrilf144winqs0dc7r&st=2tz2nt34&raw=1"
                  alt="Ezzy Elite Bangalore Landmark Hero Elevation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Subtle light vignette/gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* Right Frame: Elegant Indoor Lounge Space */}
            <div className="w-full h-[280px] sm:h-full overflow-hidden group cursor-pointer bg-neutral-100 relative rounded-xl sm:rounded-none">
              <motion.div
                initial={{ scale: 1.0 }}
                whileInView={{ scale: 1.08 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  duration: 1.8, 
                  ease: [0.25, 0.8, 0.25, 1] 
                }}
                whileHover={{ 
                  scale: 1.13,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                className="w-full h-full"
              >
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/7zzpiym2976fjsx1b6ct9/elite-interior-living-dining.avif?rlkey=76cb909a0dqbj0s780mi67y4j&st=qu4o8l1u&raw=1"
                  alt="Ezzy Elite Living & Dining commission"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Subtle light vignette/gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 02.96: EZZY ELITE ADDITIONAL BLANK PAGE (BLANK WHITE BACKGROUND) ================= */}
      <section 
        id="ezzy-elite-extra-canvas" 
        className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always overflow-y-auto lg:overflow-hidden flex flex-col justify-center items-center relative bg-white"
        style={{ backgroundColor: '#ffffff' }}
      >
        <SpecialStrategicPositioning />
      </section>

      {/* ================= SECTION 02.97: CREATIVE AGENCY SHOWCASE ================= */}
      <AgencyShowcaseSection />

      {/* ================= CONTENT STRATEGY WITH SLIDER ================= */}
      <ContentStrategySlider id="ezzy-creative-content-strategy" />

      {/* ================= SECTION 06.5: ADS & MARKETING STORYBOARD (CIRCULAR ROTATING CAROUSEL) ================= */}
      <section
        id="ads-and-marketing"
        className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always overflow-y-auto sm:overflow-hidden flex flex-col justify-start pt-16 md:pt-20 pb-12 px-6 md:px-16 relative bg-[#ffffff]"
      >
        {/* Decorative subtle background drafting grid */}
        <div 
          className="absolute inset-0 opacity-[0.20] sm:opacity-[0.04] pointer-events-none z-0" 
          style={{
            backgroundImage: "linear-gradient(to right, rgba(229, 56, 59, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 56, 59, 0.4) 1px, transparent 1px)",
            backgroundSize: "45px 45px"
          }}
        />

        <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative z-10 py-2">
          
          {/* Header Area */}
          <div className="flex flex-col items-center justify-center text-center border-b border-[#161815]/10 pb-4 z-20 w-full animate-fade-in">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] text-[#e5383b] tracking-tight uppercase">
              Content Reference
            </h1>
          </div>

          {/* Central Rotating Orbit Stage */}
          <div 
            className="flex flex-grow items-center justify-center relative my-2 min-h-[300px] sm:min-h-[380px]"
            onMouseEnter={() => setIsReferenceHovered(true)}
            onMouseLeave={() => setIsReferenceHovered(false)}
            id="references-orbit-viewport"
          >
            {/* Elliptical golden orbit path visualizer */}
            <div 
              className="absolute border border-[#e5383b]/10 rounded-full pointer-events-none z-0 opacity-40"
              style={{
                width: refDimensions.rx * 2,
                height: refDimensions.ry * 2,
                transform: 'rotate(-2deg)',
              }}
            />

            {/* Orbiting Reference Cards (Reel Layout) */}
            {REFERENCE_CARDS.map((card, i) => {
              const cardCount = REFERENCE_CARDS.length;
              const currentCardAngle = (referenceAngle + (i * 360) / cardCount) % 360;
              const rad = (currentCardAngle * Math.PI) / 180;
              
              const x = Math.cos(rad) * refDimensions.rx;
              const y = Math.sin(rad) * refDimensions.ry;
              
              const depthRatio = (y + refDimensions.ry) / (refDimensions.ry * 2); // 0 at back, 1 at front
              
              const scale = 0.65 + depthRatio * 0.35; // scale from 0.65 to 1.00
              const opacity = 0.25 + depthRatio * 0.75; // opacity from 0.25 to 1.0
              // cards at the back match zIndex: 10, cards at the front match zIndex: 30
              const zIndex = depthRatio >= 0.5 ? 30 : 10; 
              
              const isActive = selectedReference.id === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedReference(card)}
                  className={`absolute aspect-[9/16] w-[78px] min-[370px]:w-[92px] sm:w-[125px] md:w-[135px] rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer shadow-xl ${
                    isActive 
                      ? "border-[#e5383b] shadow-2xl shadow-[#e5383b]/10 ring-2 ring-[#e5383b]/15" 
                      : "border-black/10 hover:border-[#e5383b]/40"
                  } bg-[#02050c]`}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                    transition: 'border-color 0.2s, transform 0.05s linear, opacity 0.2s',
                  }}
                  id={`reference-card-${card.id}`}
                >
                  {/* Media Content Container */}
                  {card.reelUrl ? (
                    <a
                      href={card.reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block w-full h-full overflow-hidden bg-slate-900 cursor-pointer pointer-events-auto"
                      onClick={() => {
                        setSelectedReference(card);
                      }}
                    >
                      {card.videoUrl ? (
                        <video
                          src={card.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover brightness-100 contrast-[1.05]"
                        />
                      ) : (
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-full object-cover brightness-100"
                        />
                      )}
                    </a>
                  ) : (
                    <div className="relative w-full h-full overflow-hidden bg-slate-900">
                      {card.videoUrl ? (
                        <video
                          src={card.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover brightness-100 contrast-[1.05]"
                        />
                      ) : (
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-full object-cover brightness-100"
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>



        </div>
      </section>

      {/* ================= SECTION 06.6B: ADS & MARKETING BRAND ENGINE ================= */}
      <AdsMarketingBrandEngine id="ads-marketing-brand-engine" />

      {/* ================= SECTION 06.7: AUDIENCE PERSONAS ================= */}
      <AudiencePersonasSlider id="buyer-personas" />

      {/* ================= SECTION 06.7B: BUYER CONVERSION MAP ================= */}
      <BuyerConversionMap id="buyer-conversion-map" />

      {/* ================= SECTION 06.7D: COMMERCIALS FOR EZZY ELITE ================= */}
      <CommercialsEzzy id="commercials" />

      {/* ================= SECTION 06.8: DOORLYST LEGACY CONNECTION ================= */}
      <section 
        id="doorlyst-legacy-connection" 
        className="min-h-screen sm:h-screen shrink-0 sm:snap-start sm:snap-always overflow-y-auto sm:overflow-hidden flex flex-col justify-between py-8 sm:py-12 md:py-16 px-6 md:px-16 lg:px-24 xl:px-32 relative text-neutral-900 bg-[#ffffff] select-none"
      >
        {/* Top Header Block */}
        <div className="w-full flex items-center justify-between pb-6 select-none">
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase font-bold">
          </span>
          <div className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase font-bold flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="text-[#e5383b]">Bangalore &bull; Mangalore</span>
            <span className="text-neutral-300 font-light">&bull;</span>
            <span className="text-[#e5383b] font-bold">Contact Us: <span className="select-text pointer-events-auto"><a href="tel:+919071001007" className="hover:opacity-85 transition-opacity duration-200">+91 9071001007</a></span></span>
          </div>
        </div>

        {/* Center Main Content (Left Aligned matching Tools reference) */}
        <div className="flex-grow flex flex-col justify-center max-w-[1200px] w-full mx-auto relative pl-0 sm:pl-4">
          
          {/* Huge displays bold leading styled EXACTLY like the reference image */}
          <div className="text-left mt-8 sm:mt-12 select-none">
            <h1 className="font-serif text-[56px] sm:text-[76px] md:text-[98px] lg:text-[115px] xl:text-[130px] font-semibold leading-[0.88] text-[#e5383b] tracking-tighter select-none">
              Doorlyst.
            </h1>
          </div>

          {/* Body Paragraph exactly below, left-aligned, width constrained */}
          <div className="mt-10 sm:mt-12 md:mt-16 max-w-[650px] text-left">
            <p className="font-sans text-sm sm:text-base md:text-lg text-zinc-650 font-light leading-relaxed">
              <strong className="font-bold text-neutral-950">Doorlyst</strong> helps you connect with the world&rsquo;s most discerning buyers. We <strong className="font-bold text-neutral-950">bridge the gap</strong> between your architectural masterpiece and elite acquisition by handling your entire <strong className="font-bold text-neutral-950">branding, digital narrative, and sales engine</strong>, ensuring <strong className="font-bold text-neutral-950">Ezzy Group</strong> becomes a <strong className="font-bold text-neutral-950">lasting legacy of success</strong>.
            </p>
          </div>

        </div>

        {/* Elegant Minimalist Footer */}
        <footer className="w-full flex justify-between items-center pt-6 border-t border-neutral-100 mt-auto select-none font-mono text-[9px] tracking-widest uppercase text-neutral-400 font-bold">
          <span></span>
          <span>ESTABLISHED 2024</span>
        </footer>
      </section>

    </div>
  );
}
