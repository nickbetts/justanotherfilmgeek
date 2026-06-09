import Link from "next/link";

export const metadata = {
  title: "Terms of Service | justanotherfilmgeek"
};

export default function TermsPage() {
  return (
    <main className="shell policy-shell">
      <h1>Terms of Service</h1>
      <section className="policy-block">
        <p>
          This website is a media pack intended for brand and collaboration evaluation. By using
          this site, you agree to use it for lawful informational purposes only.
        </p>
        <ul>
          <li>Do not copy or republish content from this site without permission.</li>
          <li>Displayed metrics are provided as-is and may change over time.</li>
          <li>Campaign deliverables and commercial terms are agreed separately in writing.</li>
          <li>External platforms such as TikTok are governed by their own terms and policies.</li>
        </ul>
        <p>
          This site currently does not provide user accounts, user-generated content, or e-commerce
          transactions.
        </p>
      </section>
      <p>
        <Link className="policy-back" href="/">
        ← Back to media kit
      </Link>
      </p>
    </main>
  );
}
