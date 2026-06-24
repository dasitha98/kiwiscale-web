import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const CompanyOverviewSection = () => (
  <section id="overview" className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="section-badge">Company Overview</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Meet the Founder</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground lg:mx-0">
            We help New Zealand businesses build client growth systems that actually work — combining
            strategy, execution, and smart automation so you get consistent, qualified inquiries
            without the guesswork. Ready to see how it works?
          </p>

          <ul className="mt-8 space-y-4">
            {siteConfig.companyOverview.founderBullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground lg:justify-start justify-center">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
            {siteConfig.companyOverview.trustLine}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="/contact" className="btn-navy text-base">
              Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="#launch-plan"
              className="inline-flex items-center gap-1 text-sm font-bold text-foreground transition-colors hover:text-gold gold-underline underline"
            >
              See the 14-Day Launch Plan
            </a>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <div className="relative aspect-video w-full">
              <iframe
                src={siteConfig.companyOverview.videoUrl}
                title="Company Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {siteConfig.companyOverview.videoCaption}
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CompanyOverviewSection;
