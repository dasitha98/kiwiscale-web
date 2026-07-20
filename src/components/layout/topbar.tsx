"use client";

import { siteConfig } from "@/config/site-config";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialIcons from "./social-icons";

const TopBar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/portfolio")) return null;

  return (
    <div className="bg-navy text-navy-foreground">
      <div className="container-narrow mx-auto flex items-center justify-between py-2 text-sm">
        <span className="hidden font-medium lg:block">Book Your Free Strategy Session</span>

        <div className="flex w-full items-center justify-between lg:w-auto lg:justify-start gap-4 sm:gap-6">
          <SocialIcons iconClassName="text-navy-foreground/70 hover:text-gold" />

          <div className="flex items-center gap-4 sm:gap-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-gold">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden md:inline">{siteConfig.phone}</span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden md:inline">{siteConfig.email}</span>
            </a>

            <Link
              href="/contact"
              className="rounded bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
