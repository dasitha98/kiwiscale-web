import Image from "next/image";
import { siteConfig } from "@/config/site-config";

const ClientsPartnersSection = () => (
  <section id="partners" className="py-12 soft-gray-section overflow-hidden">
    <div className="container-narrow mx-auto mb-8 text-center">
      <span className="section-badge">Trust Signals</span>
      <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
        Trusted By Clients &amp; Partners
      </h3>
    </div>

    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-soft-gray to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-soft-gray to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...siteConfig.clientLogos, ...siteConfig.clientLogos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="mx-10 flex shrink-0 items-center justify-center"
          >
            {logo.image ? (
              <Image
                src={logo.image}
                alt={logo.name}
                width={160}
                height={48}
                className="h-12 max-w-[160px] object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ) : (
              <span className="text-xl font-bold tracking-wide text-muted-foreground/50 transition-colors duration-300 hover:text-foreground">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsPartnersSection;
