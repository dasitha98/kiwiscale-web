"use client";

import { useState } from "react";
import { Check, Copy, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";

import { cn } from "@/lib/utils";

export default function MessageActions({
  content,
  onRegenerate,
  className,
}: {
  content: string;
  onRegenerate?: () => void;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [vote, setVote] = useState<"up" | "down" | null>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100",
        className,
      )}
    >
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy message"
        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </button>
      {onRegenerate && (
        <button
          type="button"
          onClick={onRegenerate}
          aria-label="Regenerate response"
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <RotateCcw className="size-3.5" />
        </button>
      )}
      <button
        type="button"
        onClick={() => setVote((current) => (current === "up" ? null : "up"))}
        aria-label="Good response"
        className={cn(
          "rounded-md p-1.5 transition-colors hover:bg-muted hover:text-foreground",
          vote === "up" ? "text-gold" : "text-muted-foreground",
        )}
      >
        <ThumbsUp className="size-3.5" />
      </button>
      <button
        type="button"
        onClick={() => setVote((current) => (current === "down" ? null : "down"))}
        aria-label="Bad response"
        className={cn(
          "rounded-md p-1.5 transition-colors hover:bg-muted hover:text-foreground",
          vote === "down" ? "text-destructive" : "text-muted-foreground",
        )}
      >
        <ThumbsDown className="size-3.5" />
      </button>
    </div>
  );
}
