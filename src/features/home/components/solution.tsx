import { siteConfig } from "@/config/site-config";
import { Zap, MousePointerClick, RefreshCcw, TrendingUp } from "lucide-react";

const icons = [Zap, MousePointerClick, RefreshCcw, TrendingUp];

const SolutionSection = () => (
  <section id="solution" className="soft-gray-section section-padding">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Our System</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          We Build Intelligent Systems That Deliver<br className="hidden sm:block" /> Predictable Client Growth.
        </h2>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.pillars.map((pillar, i) => {
          const Icon = icons[i];
          return (
            <div key={pillar.title} className="card-elevated p-8 text-center">
              <div className="gold-icon-box mx-auto">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <span className="mt-5 block text-3xl font-extrabold text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SolutionSection;
