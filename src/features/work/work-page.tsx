import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  return (
    <main>
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Our Work</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Sample projects and active builds. Real case studies will replace these as we deliver results.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.sampleWork.map((work, i) => (
              <div key={i} className="flex flex-col rounded-xl border border-border p-6">
                <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-bold ${
                  work.label === "Sample" ? "bg-gold/10 text-gold-foreground" : "bg-primary/10 text-foreground"
                }`}>
                  {work.label}
                </span>
                <h2 className="mt-4 text-lg font-bold">{work.title}</h2>
                <div className="mt-3 flex-1 space-y-3 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Problem:</strong> {work.problem}</p>
                  <p><strong className="text-foreground">Approach:</strong> {work.approach}</p>
                  <p><strong className="text-foreground">Expected Outcome:</strong> {work.outcome}</p>
                </div>
                <Link href={`/work/${i}`} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-gold">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
