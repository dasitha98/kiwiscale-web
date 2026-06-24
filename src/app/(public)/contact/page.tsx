import type { Metadata } from "next";
import { ContactPage } from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with KiwiScale. We respond within 24 hours.",
};

export default function Contact() {
  return <ContactPage />;
}
