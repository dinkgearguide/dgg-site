import { LegalPageLayout } from "@/components/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Terms of Use | Dink Gear Guide", "Terms of use placeholder for Dink Gear Guide.", "/terms/");

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use">
      <p>This is placeholder legal content and should be reviewed before launch.</p>
      <p>Content on Dink Gear Guide is informational. It is not professional sports, medical, legal, or financial advice.</p>
      <p>Product details may change. Users are responsible for checking current prices, availability, specifications, retailer policies, and approval status before purchase.</p>
      <p>No content on this site should be treated as a medical or injury-prevention claim. Choose gear based on your own needs and consult qualified professionals when appropriate.</p>
    </LegalPageLayout>
  );
}
