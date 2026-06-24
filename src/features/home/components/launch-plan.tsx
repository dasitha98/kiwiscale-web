import { siteConfig } from "@/config/site-config";
import { CheckCircle } from "lucide-react";

const LaunchPlanSection = () => (
  <section id="launch-plan" className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">The Process</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Your 14-Day Launch Plan</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          From audit to launch in two weeks. Here&apos;s the roadmap.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.launchPlan.map((step, i) => (
            <div key={i} className="card-elevated relative p-7 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-extrabold text-gold-foreground">
                {i + 1}
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gold">{step.days}</p>
              <h3 className="mt-2 text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-xl card-elevated p-8">
        <h3 className="text-lg font-bold">What We Need From You</h3>
        <ul className="mt-6 space-y-4">
          {siteConfig.launchChecklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default LaunchPlanSection;
