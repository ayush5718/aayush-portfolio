import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";
import { getSystemPrompt } from "@/lib/chat-utils";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY!,
        });

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            config: {
                systemInstruction: getSystemPrompt(),
            },
            contents: [{ role: "user", parts: [{ text: message }] }],
        });

        // In the new @google/genai SDK, the response is usually handled via .value
        const text = response.text || (response as any).value?.text?.() || "No response generated";

        return NextResponse.json({ text });
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { error: "Failed to generate response", details: error.message },
            { status: 500 }
        );
    }
}
