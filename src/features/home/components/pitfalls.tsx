import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

const PitfallsSection = () => (
  <section id="pitfalls" className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Before You Commit</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          4 Mistakes That Cost Businesses Thousands
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Avoid these common traps that look fine at first — but quietly drain your budget as you grow.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {siteConfig.pitfalls.map((pitfall, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-gold/30 hover:shadow-sm">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-sm font-bold text-destructive">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{pitfall.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{pitfall.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-background p-6">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle className="h-5 w-5 text-gold" />
            <h3 className="text-base font-bold">Warning Signs Checklist</h3>
          </div>
          <ul className="space-y-4">
            {siteConfig.pitfallChecklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Not sure if your setup can scale? We&apos;ll review it — free.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
          <Link href="/contact" className="btn-gold">
            Request a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="#launch-plan"
            className="text-sm font-bold text-foreground transition-colors hover:text-gold gold-underline underline"
          >
            See the 14-Day Launch Plan
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PitfallsSection;
