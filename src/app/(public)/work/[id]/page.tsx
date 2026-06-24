import { WorkDetailPage } from "@/features/work";
import { siteConfig } from "@/config/site-config";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const work = siteConfig.sampleWork[Number(id)];
  return {
    title: work?.title ?? "Work Detail",
    description: work?.problem ?? "",
  };
}

export default async function WorkDetail({ params }: PageProps) {
  const { id } = await params;
  return <WorkDetailPage id={id} />;
}
