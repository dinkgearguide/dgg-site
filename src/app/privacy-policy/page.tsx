import { LegalPageLayout } from "@/components/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacy Policy | Dink Gear Guide", "Privacy policy for the static Dink Gear Guide site.", "/privacy-policy/");

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>Dink Gear Guide is currently a static website. It does not use a backend database, account system, checkout flow, payment processor, or server-side form handler.</p>
      <p>The contact form and email signup form are currently interface-only features. They do not transmit, store, or process submitted names, email addresses, or messages unless a third-party provider is connected in the future.</p>
      <p>Affiliate partners and retailers may use their own tracking technologies after you click an outbound product link. Their websites are governed by their own privacy policies, not this policy.</p>
      <p>Dink Gear Guide may add privacy-conscious analytics in the future to understand aggregate traffic and improve the site. If analytics are added, this policy should be updated to describe the provider, data collected, and opt-out options where applicable.</p>
      <p>Because this site is static, requests for access, deletion, or correction are limited to information the site actually stores. At this time, the site does not store visitor account data.</p>
    </LegalPageLayout>
  );
}
