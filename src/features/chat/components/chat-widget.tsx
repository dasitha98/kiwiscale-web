"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import Link from "next/link";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Phone,
  Mail,
  CalendarCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site-config";
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
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
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

  const isThinking =
    isStreaming && messages[messages.length - 1]?.content === "";

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {isOpen && (
        <Card className="animate-fade-in-up mb-3 flex h-112 w-80 flex-col overflow-hidden rounded-2xl border-none py-0 shadow-2xl ring-1 ring-black/5 sm:w-96">
          <div className="navy-gradient flex items-center gap-3 px-4 py-4">
            <div className="gold-icon-box h-10 w-10 shrink-0">
              <Sparkles className="size-5 text-gold" />
            </div>
            <div className="min-w-0">
              <p className="font-heading text-sm font-bold text-navy-foreground">
                KiwiScale Assistant
              </p>
              <p className="flex items-center gap-1.5 text-xs text-navy-foreground/70">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                Online now
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto h-8 w-8 shrink-0 text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X className="size-4" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="soft-gray-section flex-1 overflow-y-auto px-4 py-4"
          >
            <div className="flex flex-col gap-3">
              {messages.length === 0 && (
                <div className="card-elevated px-3 py-3 text-sm text-muted-foreground">
                  Hi! I&apos;m the KiwiScale assistant — ask me about our
                  services, pricing, or how the 14-day launch plan works.
                </div>
              )}
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  role={message.role}
                  content={message.content}
                  timestamp={message.timestamp}
                  isStreaming={isStreaming && index === messages.length - 1}
                  onRegenerate={
                    index === messages.length - 1 ? regenerate : undefined
                  }
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 border-t border-border bg-background px-4 py-2.5 text-xs">
            <div className="flex flex-col gap-1 text-muted-foreground">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:text-gold"
              >
                <Phone className="size-3" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 hover:text-gold"
              >
                <Mail className="size-3" />
                {siteConfig.email}
              </a>
            </div>
            <Button
              asChild
              size="sm"
              className="h-8 shrink-0 gap-1.5 rounded-full bg-gold px-3 text-xs text-gold-foreground shadow-md hover:bg-gold/90"
            >
              <Link href="/contact">
                <CalendarCheck className="size-3.5" />
                Book a Call
              </Link>
            </Button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border bg-background p-3"
          >
            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a message…"
              disabled={isStreaming}
              aria-label="Chat message"
              className="rounded-full border-border bg-muted focus-visible:ring-gold"
            />
            <Button
              type="submit"
              size="icon"
              disabled={isStreaming || !input.trim()}
              aria-label="Send message"
              className="h-9 w-9 shrink-0 rounded-full bg-gold text-gold-foreground shadow-md hover:scale-105 hover:bg-gold/90 disabled:opacity-40 disabled:hover:scale-100"
            >
              <Send className="size-4" />
            </Button>
          </form>
        </Card>
      )}

      <div className="relative h-14 w-14">
        {!isOpen && (
          <>
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/60 [animation-duration:2s]" />
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/40 [animation-delay:0.6s] [animation-duration:2s]" />
          </>
        )}
        <Button
          size="icon"
          className="relative h-14 w-14 rounded-full bg-gold text-gold-foreground shadow-[0_8px_24px_-4px_hsl(var(--gold)/0.5)] transition-transform hover:scale-105 hover:bg-gold/90"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <X className="size-6" />
          ) : (
            <MessageCircle className="size-6" />
          )}
        </Button>
      </div>
    </div>
  );
}
