import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Search, Share2, FileText } from "lucide-react";

const serviceIcons = [Globe, Smartphone, Search, Share2, FileText];

const outcomeTags: string[][] = [
  ["More inquiries", "Higher conversion"],
  ["Better reach", "Automation-ready"],
  ["Better visibility", "Qualified leads"],
  ["Engaged audience", "Social-driven leads"],
  ["Fresh content", "SEO authority"],
];

const ServicesOverviewSection = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">What We Offer</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Our Services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Everything you need to attract, convert, and retain high-value clients.
        </p>
      </div>

      <div className="mt-14 space-y-6">
        {siteConfig.services.map((service, i) => {
          const Icon = serviceIcons[i];
          return (
            <div key={service.slug} className="card-elevated grid gap-6 p-8 md:grid-cols-[auto_1fr_1fr]">
              <div className="gold-icon-box shrink-0">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold">What it solves</p>
                  <p className="mt-1 text-sm text-muted-foreground">{service.solves}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gold">Outcomes</p>
                  <p className="mt-1 text-sm text-muted-foreground">{service.outcomes}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {outcomeTags[i]?.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold text-gold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-gold">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesOverviewSection;
