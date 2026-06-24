import ScrollDotsNav from "@/components/shared/scroll-dots-nav";
import HeroSection from "./components/hero";
import ClientsPartnersSection from "./components/clients-partners";
import CredibilitySection from "./components/credibility";
import ProblemsSection from "./components/problems";
import PitfallsSection from "./components/pitfalls";
import SolutionSection from "./components/solution";
import WhyDifferentSection from "./components/why-different";
import CompanyOverviewSection from "./components/company-overview";
import BeforeAfterSection from "./components/before-after";
import WorkPreviewSection from "./components/work-preview";
import LaunchPlanSection from "./components/launch-plan";
import FAQSection from "./components/faq";
import FinalCTASection from "./components/final-cta";
import ContactFormSection from "./components/contact-form";
import ServicesOverviewSection from "./components/services-overview";
import CompeteSmarterSection from "./components/compete-smarter";

export default function HomePage() {
  return (
    <>
      <ScrollDotsNav />
      <main>
        <HeroSection />
        <ClientsPartnersSection />
        <CredibilitySection />
        <ProblemsSection />
        <PitfallsSection />
        <SolutionSection />
        <WhyDifferentSection />
        <CompanyOverviewSection />
        <BeforeAfterSection />
        <ServicesOverviewSection />
        <CompeteSmarterSection />
        <WorkPreviewSection />
        <LaunchPlanSection />
        <FAQSection />
        <FinalCTASection />
        <ContactFormSection />
      </main>
    </>
  );
}
