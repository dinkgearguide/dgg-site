import { LegalPageLayout } from "@/components/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Terms of Use | Dink Gear Guide", "Terms of use for Dink Gear Guide.", "/terms/");

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use">
      <p>Content on Dink Gear Guide is provided for general informational purposes. It is not professional sports, coaching, medical, legal, financial, or purchasing advice.</p>
      <p>Product details may change without notice. Users are responsible for checking current prices, availability, specifications, included accessories, return policies, shipping terms, and approval status before purchase.</p>
      <p>No content on this site should be treated as a medical, pain-relief, treatment, or injury-prevention claim. Choose gear based on your own needs and consult qualified professionals when appropriate.</p>
      <p>Dink Gear Guide may link to third-party retailers or resources. Those websites are controlled by their respective owners and may have different terms, privacy practices, prices, and policies.</p>
      <p>By using this site, you agree to use the information responsibly and to make your own final purchase decisions.</p>
    </LegalPageLayout>
  );
}
