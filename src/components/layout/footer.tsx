import { siteConfig } from "@/config/site-config";
import Link from "next/link";
import SocialIcons from "./social-icons";

const Footer = () => (
  <footer className="navy-gradient">
    <div className="container-narrow mx-auto py-20 md:py-28 pb-8">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="text-xl font-heading font-extrabold text-navy-foreground">{siteConfig.name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/50">{siteConfig.tagline}</p>
          <p className="mt-2 text-sm text-navy-foreground/50">{siteConfig.address}</p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">Pages</h4>
          <ul className="mt-5 space-y-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-navy-foreground/50 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">Legal</h4>
          <ul className="mt-5 space-y-3">
            <li><Link href="/privacy" className="text-sm text-navy-foreground/50 transition-colors hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-navy-foreground/50 transition-colors hover:text-gold">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="mt-5 space-y-3">
            <li><a href={`tel:${siteConfig.phone}`} className="text-sm text-navy-foreground/50 transition-colors hover:text-gold">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="text-sm text-navy-foreground/50 transition-colors hover:text-gold">{siteConfig.email}</a></li>
          </ul>
          <SocialIcons className="mt-5" iconClassName="text-navy-foreground/50 hover:text-gold" />
        </div>
      </div>

      <div className="mt-16 border-t border-navy-foreground/10 pt-8 text-center text-xs text-navy-foreground/30">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
