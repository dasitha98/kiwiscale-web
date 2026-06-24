import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { AlertTriangle, XCircle, ArrowRight } from "lucide-react";

const ProblemsSection = () => (
  <section id="problems" className="soft-gray-section section-padding">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Identify the Gaps</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Common Growth Problems & Red Flags</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          If any of these sound familiar, you&apos;re not alone — and there&apos;s a better way forward.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <div className="card-elevated p-8">
          <div className="flex items-center gap-3">
            <div className="gold-icon-box">
              <AlertTriangle className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-xl font-bold">Growth Blockers</h3>
          </div>
          <ul className="mt-8 space-y-5">
            {siteConfig.painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-gold-foreground">{i + 1}</span>
                <span className="pt-0.5">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-elevated border-destructive/20 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-destructive/10 border border-destructive/20">
              <XCircle className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="text-xl font-bold">Red Flags to Watch For</h3>
          </div>
          <ul className="mt-8 space-y-5">
            {siteConfig.redFlags.map((flag, i) => (
              <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/50" />
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/contact" className="btn-gold">
          Request a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ProblemsSection;
