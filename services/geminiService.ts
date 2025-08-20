
import { GoogleGenAI, Type } from "@google/genai";
import type { Organization } from '../types';

// IMPORTANT: The API key must be set in the environment variables.
// Do not hardcode the API key here.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might have a more sophisticated way of handling this,
  // but for this example, we'll throw an error if the key is missing.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      name: {
        type: Type.STRING,
        description: "The full name of the organization.",
      },
      type: {
        type: Type.STRING,
        enum: ["Hospital", "NGO", "Blood Bank"],
        description: "The type of organization.",
      },
      address: {
        type: Type.STRING,
        description: "The complete physical address of the organization.",
      },
      phone: {
        type: Type.STRING,
        description: "The primary contact phone number, including country/area code.",
      },
      contact_method: {
        type: Type.STRING,
        enum: ["call", "message", "both"],
        description: "Preferred method of contact. 'both' if call and message are acceptable.",
      },
    },
    required: ["name", "type", "address", "phone", "contact_method"],
  },
};

export const findOrganizations = async (location: string): Promise<Organization[]> => {
  if (!API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }
  
  const prompt = `
    Find 5 to 8 emergency service organizations (Hospitals, NGOs, Blood Banks) in or very close to "${location}". 
    For each organization, provide its name, type, full address, a valid phone number, and a contact method.
    The contact method should be 'call' if they primarily take phone calls, 'message' for text/SMS, or 'both' if either is fine.
    Return the result as a JSON array.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const responseText = response.text.trim();
    if (!responseText) {
        return [];
    }
    const parsedJson = JSON.parse(responseText);
    
    // The response is expected to be an array of organizations
    if (Array.isArray(parsedJson)) {
        return parsedJson as Organization[];
    } else {
        console.error("Unexpected JSON structure from API:", parsedJson);
        return [];
    }

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to fetch data from Gemini API.");
  }
};
