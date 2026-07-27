import OpenAI from "openai";
import { retrieveContext } from "@/features/chat/knowledge";

const SYSTEM_PROMPT =
  "You are the KiwiScale website assistant. Answer questions about KiwiScale's digital marketing and IT services concisely and helpfully, using the provided context when relevant. If you don't know something, say so and suggest contacting the team via the contact form.";

export async function POST(request: Request) {
  const { messages } = (await request.json()) as {
    messages: { role: "user" | "assistant"; content: string }[];
  };

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  const context = lastUserMessage
    ? await retrieveContext(client, lastUserMessage.content)
    : "";

  const systemContent = context
    ? `${SYSTEM_PROMPT}\n\nContext:\n${context}`
    : SYSTEM_PROMPT;

    console.log("System content:", systemContent);

  const stream = await client.chat.completions.create({
    model: "gpt-5-nano",
    stream: true,
    reasoning_effort: "minimal",
    verbosity: "low",
    messages: [{ role: "system", content: systemContent }, ...messages],
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content;
        if (text) controller.enqueue(encoder.encode(text));
      }
      controller.close();
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
