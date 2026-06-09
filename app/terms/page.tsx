import Link from "next/link";

export const metadata = {
  title: "Terms of Service | justanotherfilmgeek"
};

export default function TermsPage() {
  return (
    <main className="shell policy-shell">
      <h1>Terms of Service</h1>
      <section className="policy">
        <p>
          This website is a media pack intended for brand and collaboration evaluation. All
          statistics shown are provided for informational purposes.
        </p>
        <ul>
          <li>Do not reuse site content without permission.</li>
          <li>Campaign terms are agreed separately via direct outreach.</li>
          <li>External platforms such as TikTok are governed by their own terms.</li>
        </ul>
      </section>
      <p>
        <Link href="/">Back to media kit</Link>
      </p>
    </main>
  );
}
