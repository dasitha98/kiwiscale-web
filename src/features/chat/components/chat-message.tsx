import { Sparkles, User } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "../use-chat";

export default function ChatMessage({ role, content }: ChatMessageType) {
  const isUser = role === "user";

  return (
    <div className={cn("flex items-end gap-2", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="gold-icon-box h-7 w-7 shrink-0">
          <Sparkles className="size-3.5 text-gold" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[75%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm shadow-sm",
          isUser
            ? "rounded-br-sm bg-navy text-navy-foreground"
            : "rounded-bl-sm bg-white text-foreground",
        )}
      >
        {content || "…"}
      </div>
      {isUser && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary">
          <User className="size-3.5 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
}
