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
          This minisite is used as a creator media pack. It displays public profile data and
          campaign contact information.
        </p>
        <ul>
          <li>We do not sell personal information.</li>
          <li>Any TikTok data displayed is either public data or creator-approved data.</li>
          <li>If TikTok Login Kit is enabled, OAuth tokens are stored server-side only.</li>
          <li>Contact requests are handled through email.</li>
        </ul>
      </section>
      <p>
        <Link href="/">Back to media kit</Link>
      </p>
    </main>
  );
}
