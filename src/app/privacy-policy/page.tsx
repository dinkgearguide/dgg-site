import { LegalPageLayout } from "@/components/LegalPageLayout";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Privacy Policy | Dink Gear Guide", "Privacy policy for the static Dink Gear Guide site.", "/privacy-policy/");

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p>Dink Gear Guide is currently a static website. It does not use a backend database, account system, checkout flow, payment processor, or server-side form handler.</p>
      <p>The contact form and email signup form are currently interface-only features. They do not transmit, store, or process submitted names, email addresses, or messages unless a third-party provider is connected in the future.</p>
      <p>Affiliate partners and retailers may use their own tracking technologies after you click an outbound product link. Their websites are governed by their own privacy policies, not this policy.</p>
      <p>Dink Gear Guide may use Cloudflare Web Analytics to understand aggregate site traffic and performance. Cloudflare Web Analytics is used to view general information such as page views, referrers, browser and device context, and page performance metrics. It is not used to create visitor accounts or collect information submitted through forms.</p>
      <p>Cloudflare states that its Web Analytics beacon does not use cookies or browser storage and does not collect or use visitors&apos; personal data for this analytics product. Cloudflare&apos;s processing of analytics information is governed by Cloudflare&apos;s own privacy and data policies.</p>
      <p>Because this site is static, requests for access, deletion, or correction are limited to information the site actually stores. At this time, the site does not store visitor account data.</p>
    </LegalPageLayout>
  );
}
