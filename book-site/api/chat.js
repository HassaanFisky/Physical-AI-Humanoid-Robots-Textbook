// Vercel Serverless Function for Chat API
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, history = [] } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Message required",
      answer: "Please provide a valid question.",
      sources: [],
    });
  }

  const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

  if (!OPENROUTER_API_KEY) {
    return res.json({
      answer:
        "The AI assistant is not configured. Please add OPENROUTER_API_KEY to your environment variables. In the meantime, check Chapter 1 for an introduction to Physical AI!",
      sources: ["Chapter 1: Introduction"],
    });
  }

  const SYSTEM_PROMPT = `You are an AI textbook assistant for "Physical AI & Humanoid Robotics".

RULES:
1. Answer ONLY from the textbook content about physical AI and humanoid robotics
2. Include max 3 source citations: "Chapter X: Title"
3. If unsure, reply: "I don't know from the textbook"
4. Keep replies ≤120 words
5. Offer "Read more in Chapter X" when relevant

CHAPTERS:
- Chapter 1: Introduction to Physical AI
- Chapter 2: Core Concepts & Architecture
- Chapter 3: Practical Implementation
- Chapter 4: Case Studies (Atlas, Optimus, Digit)
- Chapter 5: Resources & Tools`;

  try {
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.slice(-6),
      { role: "user", content: message },
    ];

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://physical-ai-textbook.vercel.app",
          "X-Title": "Physical AI Textbook",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: messages,
          max_tokens: 500,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("OpenRouter API error");
    }

    const data = await response.json();
    const answer =
      data.choices[0]?.message?.content ||
      "I apologize, I could not generate a response.";

    const sourceMatches = answer.match(/Chapter \d+:.*?(?=\.|$)/gi) || [];
    const sources = sourceMatches.slice(0, 3);

    return res.json({
      answer,
      sources: sources.length > 0 ? sources : ["Chapter 1: Introduction"],
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({
      answer:
        "I'm having trouble connecting right now. Please try again in a moment.",
      sources: [],
      error: error.message,
    });
  }
}
