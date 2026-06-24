import { siteConfig } from "@/config/site-config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => (
  <section id="faq" className="soft-gray-section section-padding">
    <div className="container-narrow mx-auto max-w-3xl">
      <div className="text-center">
        <span className="section-badge">Common Questions</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
      </div>

      <Accordion type="single" collapsible className="mt-12">
        {siteConfig.faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/60">
            <AccordionTrigger className="text-left text-base font-semibold hover:text-gold py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
