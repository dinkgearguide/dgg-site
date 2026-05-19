import type { Metadata } from "next";
import "./globals.css";
import { AffiliateDisclosureBanner } from "@/components/AffiliateDisclosureBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://dinkgearguide.com"),
  title: "Dink Gear Guide",
  description: "Beginner-friendly pickleball gear guides for paddles, starter sets, balls, bags, accessories, and gifts — simple advice without the hype."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
        <AffiliateDisclosureBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
