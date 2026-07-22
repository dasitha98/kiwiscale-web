"use client";

import { useCallback, useState } from "react";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  const sendMessage = useCallback(
    async (content: string) => {
      const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
      setMessages([...nextMessages, { role: "assistant", content: "" }]);
      setIsStreaming(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: nextMessages }),
        });

        if (!response.body) throw new Error("No response body");

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let assistantContent = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantContent += decoder.decode(value, { stream: true });
          setMessages([...nextMessages, { role: "assistant", content: assistantContent }]);
        }
      } catch {
        setMessages([
          ...nextMessages,
          { role: "assistant", content: "Sorry, something went wrong. Please try again." },
        ]);
      } finally {
        setIsStreaming(false);
      }
    },
    [messages],
  );

  return { messages, sendMessage, isStreaming };
}
