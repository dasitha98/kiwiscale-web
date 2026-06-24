"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WorkPreviewSection = () => {
  const [activeTab, setActiveTab] = useState<"sample" | "building">("sample");

  const sampleWork = siteConfig.sampleWork.filter((w) => w.label === "Sample");
  const buildingWork = siteConfig.sampleWork.filter((w) => w.label === "Currently Building");

  const items = activeTab === "sample" ? sampleWork : buildingWork;

  return (
    <section id="work" className="soft-gray-section section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center">
          <span className="section-badge">Portfolio</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Work & Builds</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A look at what we&apos;re building. Real case studies coming soon.
          </p>

          <div className="mx-auto mt-8 inline-flex rounded-full border border-border bg-muted/30 p-1">
            <button
              onClick={() => setActiveTab("sample")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                activeTab === "sample" ? "bg-gold text-gold-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sample Work
            </button>
            <button
              onClick={() => setActiveTab("building")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                activeTab === "building"
                  ? "bg-gold text-gold-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Currently Building
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((work, i) => (
            <div key={i} className="card-elevated flex flex-col p-7 transition-all duration-300">
              <span
                className={`inline-block self-start rounded-full px-3.5 py-1 text-xs font-bold ${
                  work.label === "Sample" ? "bg-gold/20 text-gold" : "border border-border text-muted-foreground"
                }`}
              >
                {work.label}
              </span>
              <h3 className="mt-5 text-lg font-bold">{work.title}</h3>
              <div className="mt-4 flex-1 space-y-3 text-sm text-muted-foreground">
                <p><strong className="text-foreground/80">Problem:</strong> {work.problem}</p>
                <p><strong className="text-foreground/80">Approach:</strong> {work.approach}</p>
                <p><strong className="text-foreground/80">Expected:</strong> {work.outcome}</p>
              </div>
              <Link
                href={`/work/${i}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors hover:text-gold/80"
              >
                View Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/work" className="btn-gold">
            View All Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkPreviewSection;
