import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "../use-chat";

export default function ChatMessage({ role, content }: ChatMessageType) {
  const isUser = role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
        )}
      >
        {content || "…"}
      </div>
    </div>
  );
}
