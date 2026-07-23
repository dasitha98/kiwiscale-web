import { Phone, Mail, CalendarClock } from "lucide-react";

const CTA_KEYWORDS =
  /\b(pricing|quote|consultation|booking|book a|appointment|meeting|phone call|project|contact)\b/i;

export function shouldShowCta(content: string) {
  return CTA_KEYWORDS.test(content);
}

export default function CtaCard() {
  return (
    <div className="mt-2 flex flex-col gap-2 rounded-lg border border-gold/25 bg-gold/5 p-3">
      <p className="text-xs font-semibold text-gold">Ready to talk to KiwiScale?</p>
      <div className="flex flex-col gap-1.5 text-sm">
        <a
          href="tel:+64224178796"
          className="flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-gold/10"
        >
          <Phone className="size-4 text-gold" />
          +64 22 417 8796
        </a>
        <a href="/contact" className="flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-gold/10">
          <Mail className="size-4 text-gold" />
          Contact KiwiScale
        </a>
        <a href="/contact" className="flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-gold/10">
          <CalendarClock className="size-4 text-gold" />
          Book a Consultation
        </a>
      </div>
    </div>
  );
}
