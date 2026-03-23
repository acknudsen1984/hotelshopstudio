import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Hotel Shop",
  description: "Hotel Shop privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        <section className="bg-white border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
            <p className="text-xs text-muted tracking-widest uppercase font-sans mb-4">Legal</p>
            <h1 className="font-display text-4xl sm:text-5xl text-charcoal font-light">
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
            <div className="max-w-2xl space-y-8 font-sans text-charcoal/80 text-sm leading-relaxed">

              <div>
                <h2 className="font-display text-xl text-charcoal font-light mb-2">Overview</h2>
                <p>
                  Hotel Shop (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the site&rdquo;) is a curated shopping resource.
                  We take your privacy seriously. This policy explains what information we
                  collect and how we use it.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl text-charcoal font-light mb-2">Information We Collect</h2>
                <p>
                  We collect email addresses when you voluntarily subscribe to our newsletter
                  via the email signup form. We do not collect payment information, physical
                  addresses, or any other personal data directly.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl text-charcoal font-light mb-2">Email Communications</h2>
                <p>
                  If you subscribe to our email list, we will send you periodic newsletters
                  featuring curated product recommendations. We use ConvertKit to manage
                  our email list. You may unsubscribe at any time by clicking the
                  unsubscribe link in any email we send.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl text-charcoal font-light mb-2">Affiliate Links</h2>
                <p>
                  Hotel Shop participates in the Amazon Associates affiliate program.
                  When you click a product link and make a purchase on Amazon, we may earn
                  a small commission at no additional cost to you. We only recommend
                  products we believe in.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl text-charcoal font-light mb-2">Analytics</h2>
                <p>
                  We may use standard web analytics tools to understand how visitors
                  interact with our site. This data is aggregated and not used to
                  personally identify you.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl text-charcoal font-light mb-2">Third-Party Links</h2>
                <p>
                  Our site contains links to Amazon and other third-party websites.
                  We are not responsible for the privacy practices of those sites and
                  encourage you to review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl text-charcoal font-light mb-2">Contact</h2>
                <p>
                  If you have questions about this policy, you may contact us through
                  our website.
                </p>
              </div>

              <p className="text-xs text-muted pt-4 border-t border-border">
                Last updated: {new Date().getFullYear()}
              </p>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
