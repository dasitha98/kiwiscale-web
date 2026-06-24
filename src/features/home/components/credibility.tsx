import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Search, Share2, FileText } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web Development",
    outcome: "Conversion-focused websites that win inquiries",
    summary: "High-converting websites, landing pages, and CMS solutions.",
    solves: "Outdated sites that don't generate leads or reflect your brand value.",
    points: ["Landing pages + CMS", "Performance & SEO-ready"],
    tags: ["More inquiries", "Higher conversion"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    outcome: "Apps built to support growth",
    summary: "MVPs, iOS and Android builds tailored to your business.",
    solves: "The need for a mobile presence to reach clients wherever they are.",
    points: ["MVP to launch", "Scalable architecture"],
    tags: ["Better reach", "Automation-ready"],
  },
  {
    icon: Search,
    title: "SEO",
    outcome: "Rank higher and attract intent-driven traffic",
    summary: "Technical SEO and content strategy to increase visibility.",
    solves: "Poor search rankings and low organic traffic.",
    points: ["Technical SEO", "Content strategy"],
    tags: ["Better visibility", "Qualified leads"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    outcome: "Turn attention into clients",
    summary: "Content planning, paid campaigns, and organic strategy.",
    solves: "Lack of social presence and inconsistent brand messaging.",
    points: ["Content plan", "Campaign execution"],
    tags: ["Engaged audience", "Social-driven leads"],
  },
  {
    icon: FileText,
    title: "Content Management",
    outcome: "Consistent content that supports growth",
    summary: "Website updates, blog operations, and content workflows.",
    solves: "Stale website content and no consistent publishing schedule.",
    points: ["Website updates", "Blog/content ops"],
    tags: ["Fresh content", "SEO authority"],
  },
];

const CredibilitySection = () => (
  <section id="offer" className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Capabilities</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What We Offer</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Everything you need to attract, convert, and scale — built as one system.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-6">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="card-elevated flex w-full flex-col p-6 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <div className="gold-icon-box mb-4">
              <cap.icon className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{cap.summary}</p>
            <p className="mt-3 text-sm font-medium text-gold">{cap.outcome}</p>
            <ul className="mt-3 space-y-2">
              {cap.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {cap.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-semibold text-gold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Link href="/contact" className="btn-gold text-base">
          Get a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm font-bold text-foreground transition-colors hover:text-gold gold-underline underline"
        >
          See Services
        </Link>
      </div>
    </div>
  </section>
);

export default CredibilitySection;
