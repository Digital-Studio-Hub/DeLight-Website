import { Layout } from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="pt-12 pb-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8" data-testid="text-terms-title">
            Terms of <span className="text-gradient">Service</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the DeLight Films website and services, you agree
                  to be bound by these Terms of Service. If you do not agree to these terms,
                  please do not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DeLight Films provides professional film production services including but
                  not limited to movie and series production, commercial creation, music video
                  production, and motion graphics. All services are subject to separate
                  contractual agreements.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and
                  video content, is the property of DeLight Films or its content suppliers
                  and is protected by South African and international copyright laws.
                  Unauthorized use of any content may violate copyright, trademark, and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Project Agreements</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Specific project terms, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Project scope and deliverables</li>
                  <li>Payment terms and schedules</li>
                  <li>Intellectual property rights for produced content</li>
                  <li>Timeline and milestones</li>
                  <li>Revision policies</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Will be outlined in individual project contracts and proposals.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When using our website or engaging our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Not use the website for unlawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DeLight Films shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising from your use of our website
                  or services. Our total liability shall not exceed the amount paid by you
                  for the specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance
                  with the laws of the Republic of South Africa. Any disputes arising from
                  these terms shall be subject to the exclusive jurisdiction of the South
                  African courts.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be
                  effective immediately upon posting to the website. Your continued use of
                  the website after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground mt-4">
                  Email: <a href="mailto:info@delightfilms.co.za" className="text-primary hover:underline">info@delightfilms.co.za</a>
                  <br />
                  Phone: <a href="tel:0680677789" className="text-primary hover:underline">068 067 7789</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}