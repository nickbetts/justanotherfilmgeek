import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | justanotherfilmgeek"
};

export default function PrivacyPage() {
  return (
    <main className="shell policy-shell">
      <h1>Privacy Policy</h1>
      <section className="policy">
        <p>
          This minisite is a public media pack for the TikTok creator
          <strong> @justanotherfilmgeek</strong>. It displays profile and campaign information for
          collaboration inquiries.
        </p>
        <ul>
          <li>We do not run analytics, ad pixels, or tracking scripts at this time.</li>
          <li>We do not sell personal information.</li>
          <li>Any TikTok data shown is public data or creator-approved data.</li>
          <li>Contact requests are handled through email only.</li>
          <li>
            A basic cookie/local-storage preference is used to remember that you accepted the
            cookie notice banner.
          </li>
        </ul>
        <p>
          If TikTok Login Kit is enabled later, OAuth tokens will be handled server-side and never
          exposed in public client code.
        </p>
      </section>
      <p>
        <Link href="/">Back to media kit</Link>
      </p>
    </main>
  );
}
