import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section id="final-cta" className="navy-gradient section-padding">
    <div className="container-narrow mx-auto text-center text-navy-foreground">
      <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
        Let&apos;s Talk
      </span>
      <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
        Ready to Expand Your Client Base<br className="hidden sm:block" /> With Confidence?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-navy-foreground/60">
        Let&apos;s build a system that attracts the right clients, converts them consistently, and scales with your business.
      </p>
      <Link href="/contact" className="btn-gold mt-10 text-base">
        Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  </section>
);

export default FinalCTASection;
