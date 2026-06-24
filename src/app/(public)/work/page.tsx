import type { Metadata } from "next";
import { WorkPage } from "@/features/work";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Sample projects and active builds from KiwiScale.",
};

export default function Work() {
  return <WorkPage />;
}
