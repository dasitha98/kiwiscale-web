"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useChat } from "../use-chat";
import ChatMessage from "./chat-message";

const HINT_STORAGE_KEY = "kiwiscale-chat-hint-dismissed";

const SUGGESTIONS = ["Our services", "Pricing", "Book a consultation"];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, regenerate, isStreaming } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => {
    if (sessionStorage.getItem(HINT_STORAGE_KEY)) return;
    const timer = setTimeout(() => setShowHint(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismissHint = () => {
    setShowHint(false);
    sessionStorage.setItem(HINT_STORAGE_KEY, "1");
  };

  const handleOpen = () => {
    setIsOpen((open) => !open);
    dismissHint();
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;
    setInput("");
    void sendMessage(trimmed);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <Card className="mb-3 flex h-128 w-80 flex-col overflow-hidden rounded-2xl border-gold/20 py-0 shadow-2xl shadow-gold/10 sm:w-104 animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-300">
          <div className="relative flex items-center justify-between overflow-hidden bg-linear-to-br from-primary via-primary to-navy px-4 py-4">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, hsl(var(--gold)) 0%, transparent 45%), radial-gradient(circle at 80% 0%, hsl(var(--gold)) 0%, transparent 35%)",
              }}
            />
            <div className="relative flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold shadow-lg shadow-gold/40">
                <Sparkles className="size-4 text-gold-foreground" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-primary-foreground">KiwiScale Assistant</p>
                <p className="flex items-center gap-1.5 text-xs text-primary-foreground/70">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
                  </span>
                  Online now
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="relative z-10 h-8 w-8 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X className="size-4" />
            </Button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto bg-muted/30 px-4 py-3">
            <div className={cn("flex flex-col gap-3", messages.length === 0 && "h-full")}>
              {messages.length === 0 && (
                <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 py-10 text-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-linear-to-br from-gold/20 to-gold/5 ring-1 ring-gold/20">
                    <Sparkles className="size-6 text-gold" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-heading text-base font-semibold text-foreground">
                      Hi, I&apos;m KiwiScale AI 👋
                    </p>
                    <p className="max-w-60 text-sm text-muted-foreground">
                      Ask me anything about KiwiScale&apos;s services, pricing, or how we can help grow your business.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {SUGGESTIONS.map((suggestion) => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => void sendMessage(suggestion)}
                        className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1.5 text-xs font-medium text-gold transition-colors hover:bg-gold/10"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                  timestamp={message.timestamp}
                  isStreaming={isStreaming && index === messages.length - 1}
                  onRegenerate={index === messages.length - 1 ? regenerate : undefined}
                />
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t bg-card p-3">
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a message…"
              disabled={isStreaming}
              aria-label="Chat message"
              className="focus-visible:ring-gold"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isStreaming || !input.trim()}
              aria-label="Send message"
              className="shrink-0 bg-gold text-gold-foreground shadow-md shadow-gold/30 hover:bg-gold/90 disabled:bg-gold/40 disabled:text-gold-foreground/60"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </Card>
      )}

      {!isOpen && showHint && (
        <div className="mb-3 flex max-w-60 animate-in fade-in slide-in-from-bottom-2 items-start gap-2 rounded-2xl rounded-br-sm border border-gold/20 bg-card px-3.5 py-2.5 text-sm shadow-lg shadow-gold/10 duration-300">
          <p className="text-foreground">
            👋 Need help? <span className="font-medium">Chat with us!</span>
          </p>
          <button
            type="button"
            onClick={dismissHint}
            aria-label="Dismiss"
            className="-mr-1 -mt-1 shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        </div>
      )}

      <Button
        size="icon"
        onClick={handleOpen}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={cn(
          "relative h-14 w-14 rounded-full bg-gold text-gold-foreground shadow-lg shadow-gold/40 transition-transform hover:scale-105 hover:bg-gold/90",
          !isOpen && "animate-pulse",
        )}
      >
        {!isOpen && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-gold opacity-40" />
        )}
        {isOpen ? <X className="size-5" /> : <MessageCircle className="size-6" />}
      </Button>
    </div>
  );
}
