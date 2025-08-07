import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "./constans";

// Correctly initialize the client with the API key as a string
const geminiAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export default geminiAI;
