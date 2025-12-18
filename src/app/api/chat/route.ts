import { NextResponse } from "next/server";
import { searchTextbook } from "@/lib/textbook-knowledge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    // Simulate thinking delay for realism
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Search the textbook knowledge base
    const searchResults = searchTextbook(message);

    let reply: string;

    if (searchResults === "OUT_OF_SCOPE") {
      reply =
        "I can only answer questions based on the Physical AI textbook content. This query appears to be outside the scope of the 12 chapters covering humanoid robotics, actuators, sensors, control theory, and related topics.";
    } else {
      // Use the search results to formulate a response
      // In production, this would call an LLM API with the search results as context
      // For now, we'll extract a relevant snippet
      const lines = searchResults.split("\n");
      const relevantContent = lines.slice(0, 5).join("\n");

      reply = `Based on the textbook:\n\n${relevantContent}\n\n${
        lines.length > 5 ? "...(See full chapter for more details)" : ""
      }`;
    }

    return NextResponse.json({ reply, thinking: true });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      {
        reply:
          "I'm experiencing a neural network disruption. Please try rephrasing your question.",
      },
      { status: 500 }
    );
  }
}
