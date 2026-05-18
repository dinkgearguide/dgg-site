import { LegalPageLayout } from "@/components/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Affiliate Disclosure | Dink Gear Guide", "Affiliate disclosure placeholder for Dink Gear Guide.", "/affiliate-disclosure/");

export default function AffiliateDisclosurePage() {
  return (
    <LegalPageLayout title="Affiliate Disclosure">
      <p>This is placeholder legal content and should be reviewed before launch.</p>
      <p>This site contains affiliate links. The owner may earn a commission at no extra cost to the visitor if a visitor buys through those links.</p>
      <p>As an Amazon Associate I earn from qualifying purchases.</p>
      <p>Product recommendations should be independently reviewed by the visitor before purchase. Prices and availability may change.</p>
      <p>Dink Gear Guide does not guarantee tournament approval for any paddle or product. Users should verify tournament approval if needed before buying.</p>
    </LegalPageLayout>
  );
}
