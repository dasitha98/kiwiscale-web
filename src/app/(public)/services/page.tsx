import type { Metadata } from "next";
import { ServicesPage } from "@/features/services";

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end digital marketing and technology solutions designed to grow your business.",
};

export default function Services() {
  return <ServicesPage />;
}
