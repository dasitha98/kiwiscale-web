"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { Send, Phone, Mail } from "lucide-react";
import SocialIcons from "@/components/layout/social-icons";

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="soft-gray-section section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <div className="text-center">
          <span className="section-badge">Get in Touch</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Start the Conversation</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Tell us about your project. We respond within 24 hours.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10">
              <Phone className="h-4 w-4 text-gold" />
            </div>
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10">
              <Mail className="h-4 w-4 text-gold" />
            </div>
            {siteConfig.email}
          </a>
        </div>

        {submitted ? (
          <div className="mt-12 card-elevated border-gold/30 bg-gold/5 p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20">
              <Send className="h-7 w-7 text-gold" />
            </div>
            <h3 className="mt-5 text-xl font-bold">Thank you!</h3>
            <p className="mt-2 text-muted-foreground">We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input type="text" placeholder="Your Name *" required className="rounded-xl border border-border bg-background px-5 py-3.5 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20" />
              <input type="email" placeholder="Email *" required className="rounded-xl border border-border bg-background px-5 py-3.5 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <input type="text" placeholder="Company" className="rounded-xl border border-border bg-background px-5 py-3.5 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20" />
              <select className="rounded-xl border border-border bg-background px-5 py-3.5 text-sm text-muted-foreground outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20">
                <option value="">Budget Range</option>
                <option>$2,000 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your project *" required rows={5} className="w-full rounded-xl border border-border bg-background px-5 py-3.5 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20" />

            <button type="submit" className="btn-gold w-full text-base">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </button>

            <p className="text-center text-xs text-muted-foreground">
              By submitting, you agree to our{" "}
              <Link href="/privacy" className="underline transition-colors hover:text-gold">Privacy Policy</Link>.
            </p>
          </form>
        )}

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Follow us</span>
          <SocialIcons iconClassName="text-muted-foreground hover:text-gold" />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
