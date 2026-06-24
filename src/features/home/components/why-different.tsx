import { siteConfig } from "@/config/site-config";
import { Check } from "lucide-react";

const WhyDifferentSection = () => (
  <section id="different" className="soft-gray-section section-padding">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Our Edge</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Why We&apos;re Different</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We don&apos;t do cookie-cutter. Every engagement is built around your goals.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.differentiators.map((item) => (
          <div key={item.title} className="card-elevated p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground">
              <Check className="h-5 w-5" strokeWidth={3} />
            </div>
            <h3 className="mt-5 text-base font-bold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDifferentSection;
