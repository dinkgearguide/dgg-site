import { LegalPageLayout } from "@/components/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Affiliate Disclosure | Dink Gear Guide", "Affiliate disclosure for Dink Gear Guide.", "/affiliate-disclosure/");

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageLayout title="Affiliate Disclosure">
      <p>Dink Gear Guide may earn money from affiliate links. If you click an affiliate link and make a purchase, the site owner may earn a commission at no extra cost to you.</p>
      <p>When Amazon Associates links are active on this site, the required disclosure is: &quot;As an Amazon Associate I earn from qualifying purchases.&quot;</p>
      <p>Affiliate relationships do not control the basic editorial goal of the site: practical, beginner-friendly pickleball gear guidance. Product recommendations should still be independently reviewed by each visitor before purchase.</p>
      <p>Prices, availability, shipping terms, product specifications, included accessories, warranty terms, and retailer policies may change. Always check the retailer&apos;s current product page before buying.</p>
      <p>Dink Gear Guide does not guarantee tournament approval for any paddle or product. If you plan to play in sanctioned tournaments, verify approval with the relevant governing body before buying.</p>
    </LegalPageLayout>
  );
}
