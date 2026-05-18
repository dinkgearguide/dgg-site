import type { Metadata } from "next";
import "./globals.css";
import { AffiliateDisclosureBanner } from "@/components/AffiliateDisclosureBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://dinkgearguide.com"),
  title: "Dink Gear Guide",
  description: "Beginner-friendly pickleball gear without the guesswork."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={websiteJsonLd()} />
        <AffiliateDisclosureBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
