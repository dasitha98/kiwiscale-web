import { Crosshair, Layers, BarChart3 } from "lucide-react";

const CompeteSmarterSection = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Competitive Advantage</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Compete Smarter</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          We help you stand out, attract the right clients, and convert them consistently.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {[
          { icon: Crosshair, title: "Positioning That Differentiates", desc: "Clarify what makes you unique and communicate it with authority across every channel." },
          { icon: Layers, title: "Balanced Acquisition Mix", desc: "SEO, social media, and paid advertising working together for sustainable growth." },
          { icon: BarChart3, title: "Conversion System", desc: "Landing pages, tracking, and follow-up sequences that turn interest into revenue." },
        ].map((item) => (
          <div key={item.title} className="card-elevated p-8 text-center">
            <div className="gold-icon-box mx-auto">
              <item.icon className="h-6 w-6 text-gold" />
            </div>
            <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CompeteSmarterSection;
