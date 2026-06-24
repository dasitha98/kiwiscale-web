"use client";

import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { useRef, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      {!reducedMotion && (
        <video
          ref={videoRef}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.35]"
          src="/videos/hero-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          preload="metadata"
        />
      )}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-background/60" />
      <div className="pointer-events-none absolute -right-40 -top-40 z-[2] h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 z-[2] h-[600px] w-[600px] rounded-full bg-gold/[0.04] blur-3xl" />

      <div className="relative z-[3] section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-gold">
                  Digital Marketing & IT Solutions
                </span>
              </div>

              <h1 className="mx-auto mt-6 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:mx-0 lg:max-w-none lg:text-[3.25rem] [word-spacing:0.1em]">
                Your Next Client Is <span className="text-gold">Already Searching</span> for You Online
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0">
                We make sure they find you — with a strategy-first growth system that combines SEO, paid ads, conversion
                design, and smart automation.
              </p>

              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/contact" className="btn-gold text-base">
                  Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground/10 px-6 py-3.5 text-sm font-bold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5"
                >
                  <Play className="h-4 w-4 fill-gold text-gold" />
                  See How It Works
                </Link>
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
                {siteConfig.hero.trustLine}
              </p>
            </div>

            <div className="mx-auto w-full max-w-md space-y-4 lg:mx-0 lg:max-w-none">
              {[
                {
                  num: "01",
                  title: "Attract the Right Traffic",
                  desc: "SEO, content marketing, and targeted paid campaigns bring qualified visitors to your site.",
                },
                {
                  num: "02",
                  title: "Convert Visitors to Leads",
                  desc: "High-converting landing pages, compelling CTAs, and smart lead capture forms.",
                },
                {
                  num: "03",
                  title: "Scale What Works",
                  desc: "Data-driven optimisation, automated follow-ups, and measurable reporting.",
                },
              ].map((card) => (
                <div
                  key={card.num}
                  className="group flex items-start gap-5 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-gold/30"
                >
                  <span className="shrink-0 text-2xl font-extrabold text-gold">{card.num}</span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
