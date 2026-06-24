import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main>
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            End-to-end digital marketing and technology solutions designed to grow your business.
          </p>

          <div className="mt-14 space-y-16">
            {siteConfig.services.map((service) => (
              <div key={service.slug} className="grid gap-8 md:grid-cols-2 items-start border-b border-border pb-16 last:border-0">
                <div>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p className="mt-3 text-muted-foreground">{service.summary}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold">What it solves</p>
                    <p className="mt-1 text-sm text-muted-foreground">{service.solves}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold">Outcomes</p>
                    <p className="mt-1 text-sm text-muted-foreground">{service.outcomes}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-gold">
                    Book a Call <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
