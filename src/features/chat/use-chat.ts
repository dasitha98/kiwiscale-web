"use client";

import { useCallback, useState } from "react";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

async function streamChat(
  history: ChatMessage[],
  onChunk: (assistantContent: string) => void,
) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history.map(({ role, content }) => ({ role, content })) }),
  });

  if (!response.body) throw new Error("No response body");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let assistantContent = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    assistantContent += decoder.decode(value, { stream: true });
    onChunk(assistantContent);
  }
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  const runStream = useCallback(async (history: ChatMessage[]) => {
    setMessages([...history, { role: "assistant", content: "", timestamp: Date.now() }]);
    setIsStreaming(true);

    try {
      await streamChat(history, (assistantContent) => {
        setMessages([...history, { role: "assistant", content: assistantContent, timestamp: Date.now() }]);
      });
    } catch {
      setMessages([
        ...history,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsStreaming(false);
    }
  }, []);

  const sendMessage = useCallback(
    async (content: string) => {
      const nextMessages: ChatMessage[] = [...messages, { role: "user", content, timestamp: Date.now() }];
      await runStream(nextMessages);
    },
    [messages, runStream],
  );

  const regenerate = useCallback(async () => {
    const lastUserIndex = messages.map((message) => message.role).lastIndexOf("user");
    if (lastUserIndex === -1) return;
    await runStream(messages.slice(0, lastUserIndex + 1));
  }, [messages, runStream]);

  return { messages, sendMessage, regenerate, isStreaming };
}
