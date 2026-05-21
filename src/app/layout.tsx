import type { Metadata } from "next";
import "./globals.css";
import { AffiliateDisclosureBanner } from "@/components/AffiliateDisclosureBanner";
import { CloudflareAnalytics } from "@/components/CloudflareAnalytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: siteConfig.name,
  description: siteConfig.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AffiliateDisclosureBanner />
        <Header />
        {children}
        <Footer />
        <CloudflareAnalytics />
      </body>
    </html>
  );
}
