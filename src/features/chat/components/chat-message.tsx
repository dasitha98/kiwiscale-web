import { Sparkles, User } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "../use-chat";
import MarkdownContent from "./markdown-content";
import CtaCard, { shouldShowCta } from "./cta-card";
import TypingIndicator from "./typing-indicator";

export default function ChatMessage({
  role,
  content,
  isStreaming,
}: ChatMessageType & { isStreaming?: boolean; onRegenerate?: () => void }) {
  const isUser = role === "user";
  const isPending = !isUser && isStreaming && content.length === 0;

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
        {isPending ? (
          <TypingIndicator />
        ) : isUser ? (
          content
        ) : (
          <>
            <MarkdownContent content={content} />
            {!isStreaming && shouldShowCta(content) && <CtaCard />}
          </>
        )}
      </div>
      {isUser && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary">
          <User className="size-3.5 text-secondary-foreground" />
        </div>
      )}
    </div>
  );
}
