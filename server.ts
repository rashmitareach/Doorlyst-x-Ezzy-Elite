import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// API route for AI profile matchmaking simulator
app.post("/api/profile-match", async (req, res) => {
  const { personaType, customDetails } = req.body;
  
  if (!ai) {
    // Return high-quality, realistic static mock structure if API key is not fully loaded
    console.log("No GEMINI_API_KEY loaded; returning premium dynamic mockup.");
    return res.json({
      error: false,
      isDemo: true,
      buyerPersona: personaType || "The Sovereignty Seeker",
      psychographics: "This elite individual values multi-generational status, microscopic privacy, and spatial storytelling. They do not purchase square footage; they commission physical manifestations of their worldly triumphs.",
      drivers: [
        "Uncompromising spatial anonymity and multi-tier security",
        "Biophilic curves representing organic, living wealth architecture",
        "Atelier connection directly linking home layout to their global travel habits"
      ],
      adCopy: {
        headline: "DOORLYST X EZZY ELITE: The Silence of Dickenson Road",
        instagramGridText: "An architecture that breathes. The biomorphic facades of Ezzy Elite rise like sculpted monoliths. No two commissions are identical. Bangalore CBD's final architectural statement. #QuietLuxury",
        linkedinText: "When power becomes quiet, luxury becomes bespoke. Announcing India's first Private Architectural Commissions on Dickenson Road, Bangalore. An exclusive sales engine partnership Powered by Doorlyst AI.",
        whatsappHook: "Greetings. Settle into Bengaluru's ultimate physical legacy. A personal LuxID Global Atelier portfolio has been reserved for your curation. May we coordinate an exclusive delivery?"
      },
      unitDesign: "A private 8,500 sq ft pavilion utilizing hand-hammered charcoal basalt, custom golden bronze mesh screens, and private glass-enclosed micro-canopies with continuous biophilic cooling.",
      funnelStrategy: "Geofenced high-net-worth digital curation, coupled with an ultra-premium physical portfolio hand-delivered to the target’s central secretariat."
    });
  }

  try {
    const promptMessage = `
      You are the Principal Creative Strategy Director at Doorlyst (an AI-powered premium real estate sales engine).
      We are preparing a strategic pitch portfolio for Ezzy Elite (the flagship boutique project on Dickenson Road, Bangalore).
      Dickenson Road is Bangalore's most iconic and influential CBD address.
      Ezzy Elite features 'quiet luxury', artistic biomorphism, a sinuous green facade, and a partnership with LuxID Global Atelier supporting 'Private Commissions' where every residence is customized.
      
      Analyze the following buyer target profile and match them to an Ezzy Elite residence:
      - Persona Category: ${personaType}
      - Additional Context/Details: ${customDetails || "A highly influential global citizen."}

      Provide a high-fidelity creative positioning strategy and matching proposal in rigid JSON format:
      1. buyerPersona: Human label for the sub-bracket (e.g. "The CBD Power Executive", "The Sovereignty Seeker", "The Silicon Nomad")
      2. psychographics: A 2-3 sentence deep analysis of what drives their decision-making in ultra-premium real estate (touch on quiet luxury, unspoken privilege, status, legacy)
      3. drivers: A list of exactly 3 bulleted high-luxury motivations (rich, elaborate phrases)
      4. adCopy: An object containing:
         - headline: A highly editorial, poetic, minimal headline (Cormorant-style)
         - instagramGridText: Craft copy suitable for an Instagram editorial post, highly evocative, premium styling hashtag
         - linkedinText: Narrative suitable for a business/legacy-minded founder or executive
         - whatsappHook: Direct, extremely polished outreach script from the Doorlyst sales concierge
      5. unitDesign: A bespoke architectural description created specifically for them by LuxID Global Atelier (called something poetic e.g. 'The Obsidian Pavilion', 'The Leaf-Trim Sky Villa', describing materials and spatial layout)
      6. funnelStrategy: The precise digital-to-concierge marketing funnel trigger Doorlyst AI has configured.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptMessage,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["buyerPersona", "psychographics", "drivers", "adCopy", "unitDesign", "funnelStrategy"],
          properties: {
            buyerPersona: { type: Type.STRING },
            psychographics: { type: Type.STRING },
            drivers: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            adCopy: {
              type: Type.OBJECT,
              required: ["headline", "instagramGridText", "linkedinText", "whatsappHook"],
              properties: {
                headline: { type: Type.STRING },
                instagramGridText: { type: Type.STRING },
                linkedinText: { type: Type.STRING },
                whatsappHook: { type: Type.STRING }
              }
            },
            unitDesign: { type: Type.STRING },
            funnelStrategy: { type: Type.STRING }
          }
        }
      }
    });

    const resultText = response.text ? response.text.trim() : "";
    const parsedData = JSON.parse(resultText);
    res.json({ error: false, isDemo: false, ...parsedData });

  } catch (error: any) {
    console.error("Gemini API error in server.ts:", error);
    res.status(500).json({
      error: true,
      message: error.message || "Internal server error"
    });
  }
});

// Serve frontend assets
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Doorlyst x Ezzy Elite Luxury Server running on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
