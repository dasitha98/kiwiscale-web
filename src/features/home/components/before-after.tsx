import { siteConfig } from "@/config/site-config";
import { ArrowRight, X, Check } from "lucide-react";

const BeforeAfterSection = () => (
  <section id="before-after" className="navy-gradient section-padding">
    <div className="container-narrow mx-auto text-navy-foreground">
      <div className="text-center">
        <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
          Transformation
        </span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Before & After</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-navy-foreground/50">
          Example targets — what transformation looks like for a typical engagement.
        </p>
        <p className="mx-auto mt-1 text-xs italic text-navy-foreground/30">
          *All figures shown are example targets, not guaranteed results.
        </p>
      </div>

      <div className="mt-14 grid items-stretch gap-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-8">
          <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-navy-foreground/40">Before</h3>
          <ul className="space-y-5">
            {siteConfig.beforeAfter.before.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-navy-foreground/60">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20">
                  <X className="h-3 w-3 text-destructive" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center md:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold">
            <ArrowRight className="h-7 w-7 text-gold-foreground" />
          </div>
        </div>

        <div className="rounded-2xl border border-gold/30 bg-gold/5 p-8">
          <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-gold">After</h3>
          <ul className="space-y-5">
            {siteConfig.beforeAfter.after.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-navy-foreground/90">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20">
                  <Check className="h-3 w-3 text-gold" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
