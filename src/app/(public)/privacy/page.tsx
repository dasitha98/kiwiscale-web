import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Privacy() {
  return (
    <main className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl prose prose-sm">
        <h1 className="text-3xl font-extrabold">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: February 2026</p>

        <h2 className="mt-8 text-xl font-bold">1. Information We Collect</h2>
        <p className="text-muted-foreground">We collect information you provide directly, such as your name, email, company, and message when you fill out our contact form.</p>

        <h2 className="mt-6 text-xl font-bold">2. How We Use Your Information</h2>
        <p className="text-muted-foreground">We use the information to respond to your inquiries, provide our services, and improve your experience on our website.</p>

        <h2 className="mt-6 text-xl font-bold">3. Data Storage</h2>
        <p className="text-muted-foreground">Your data is stored securely and is not shared with third parties except as required to provide our services.</p>

        <h2 className="mt-6 text-xl font-bold">4. Cookies</h2>
        <p className="text-muted-foreground">We use essential cookies and analytics tools such as Google Analytics 4 to understand how visitors use our site.</p>

        <h2 className="mt-6 text-xl font-bold">5. Your Rights</h2>
        <p className="text-muted-foreground">You have the right to request access to, correction of, or deletion of your personal information at any time.</p>

        <h2 className="mt-6 text-xl font-bold">6. Contact</h2>
        <p className="text-muted-foreground">
          For privacy-related inquiries, contact us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-gold underline">{siteConfig.email}</a>.
        </p>
      </div>
    </main>
  );
}
