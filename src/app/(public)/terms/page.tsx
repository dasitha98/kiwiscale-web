import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Terms() {
  return (
    <main className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl prose prose-sm">
        <h1 className="text-3xl font-extrabold">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: February 2026</p>

        <h2 className="mt-8 text-xl font-bold">1. Services</h2>
        <p className="text-muted-foreground">{siteConfig.name} provides digital marketing, web development, and technology consulting services as agreed upon in individual project scopes.</p>

        <h2 className="mt-6 text-xl font-bold">2. Payment</h2>
        <p className="text-muted-foreground">Payment terms are outlined in individual project agreements. All fees are in NZD unless otherwise stated.</p>

        <h2 className="mt-6 text-xl font-bold">3. Intellectual Property</h2>
        <p className="text-muted-foreground">Upon full payment, clients receive ownership of all deliverables unless otherwise agreed. Third-party licenses remain with their respective owners.</p>

        <h2 className="mt-6 text-xl font-bold">4. Limitation of Liability</h2>
        <p className="text-muted-foreground">Our liability is limited to the fees paid for the specific services in question. We do not guarantee specific business outcomes.</p>

        <h2 className="mt-6 text-xl font-bold">5. Termination</h2>
        <p className="text-muted-foreground">Either party may terminate an engagement with 14 days written notice. Fees for work completed are non-refundable.</p>

        <h2 className="mt-6 text-xl font-bold">6. Contact</h2>
        <p className="text-muted-foreground">
          Questions about these terms? Contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold underline">{siteConfig.email}</a>.
        </p>
      </div>
    </main>
  );
}
