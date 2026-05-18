import { LegalPageLayout } from "@/components/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacy Policy | Dink Gear Guide", "Privacy policy placeholder for the static Dink Gear Guide site.", "/privacy-policy/");

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>This is placeholder legal content and should be reviewed before launch.</p>
      <p>The current static site does not collect personal information through backend systems. There is no database, authentication system, checkout, or server-side form handling.</p>
      <p>Contact and email forms are placeholders unless later connected to a third-party service. They currently do not transmit or store submitted data.</p>
      <p>Affiliate partners may use their own tracking after users click outbound affiliate links. Visitors should review those partners&apos; privacy policies.</p>
      <p>Analytics may be added later. If analytics are added, this policy should be updated to explain what is collected and how it is used.</p>
    </LegalPageLayout>
  );
}
