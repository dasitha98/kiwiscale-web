import { Bot, User } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "../use-chat";
import MarkdownContent from "./markdown-content";
import MessageActions from "./message-actions";
import CtaCard, { shouldShowCta } from "./cta-card";
import TypingIndicator from "./typing-indicator";

function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export default function ChatMessage({
  role,
  content,
  timestamp,
  isStreaming,
  onRegenerate,
}: ChatMessageType & { isStreaming?: boolean; onRegenerate?: () => void }) {
  const isUser = role === "user";
  const isPending = !isUser && isStreaming && content.length === 0;

  return (
    <div className={cn("group flex animate-in fade-in slide-in-from-bottom-2 gap-2.5 duration-300", isUser && "flex-row-reverse")}>
      <Avatar className="h-7 w-7 shrink-0">
        <AvatarFallback className={cn(isUser ? "bg-gold text-gold-foreground" : "bg-muted")}>
          {isUser ? <User className="size-3.5" /> : <Bot className="size-3.5" />}
        </AvatarFallback>
      </Avatar>

      <div className={cn("flex max-w-[85%] flex-col gap-1", isUser && "items-end")}>
        <div className="flex items-center gap-2 px-0.5 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{isUser ? "You" : "KiwiScale AI"}</span>
          <span>{formatTime(timestamp)}</span>
        </div>

        <div
          className={cn(
            "rounded-2xl px-3.5 py-2.5 text-sm shadow-sm",
            isUser
              ? "rounded-tr-sm bg-gold text-gold-foreground shadow-gold/20"
              : "w-full rounded-tl-sm border bg-card text-card-foreground",
          )}
        >
          {isPending ? (
            <TypingIndicator />
          ) : isUser ? (
            <p className="whitespace-pre-wrap">{content}</p>
          ) : (
            <>
              <MarkdownContent content={content} />
              {!isStreaming && shouldShowCta(content) && <CtaCard />}
            </>
          )}
        </div>

        {!isUser && !isPending && (
          <MessageActions content={content} onRegenerate={!isStreaming ? onRegenerate : undefined} className="px-0.5" />
        )}
      </div>
    </div>
  );
}
