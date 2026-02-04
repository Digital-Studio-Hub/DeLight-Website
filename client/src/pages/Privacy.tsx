import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="pt-12 pb-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8" data-testid="text-privacy-title">
            Privacy <span className="text-gradient">Policy</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  DeLight Films ("we," "our," or "us") respects your privacy and is committed
                  to protecting your personal data. This privacy policy explains how we collect,
                  use, and safeguard your information when you visit our website or engage our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Project details and requirements you provide through our contact form</li>
                  <li>Technical data such as browser type, IP address, and device information</li>
                  <li>Usage data about how you interact with our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Respond to your inquiries and provide our services</li>
                  <li>Communicate with you about projects and updates</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect
                  your personal data against unauthorized access, alteration, disclosure,
                  or destruction. However, no method of transmission over the Internet is
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use third-party services for email delivery and analytics.
                  These services have their own privacy policies governing the use of
                  your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under applicable data protection laws, you have rights including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>The right to access your personal data</li>
                  <li>The right to rectification of inaccurate data</li>
                  <li>The right to erasure of your data</li>
                  <li>The right to restrict processing</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this privacy policy or our data practices,
                  please contact us at:
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