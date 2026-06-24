import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { QueryProvider, ThemeProvider } from "@/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: {
    default: "KiwiScale — Digital Marketing & IT Solutions",
    template: "%s | KiwiScale",
  },
  description:
    "Strategy-first digital marketing and IT solutions for New Zealand businesses. SEO, web development, mobile apps, social media marketing and content management.",
  keywords: [
    "digital marketing",
    "web development",
    "SEO",
    "New Zealand",
    "Auckland",
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://digitaledge.co.nz",
    siteName: "KiwiScale",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
