import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Appforge",
  description: "Terms of Service for SuperInvoice app.",
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">Terms of Service</h1>
        <p className="mb-10 text-sm text-muted-foreground">Last updated: February 2026</p>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By downloading, installing, or using SuperInvoice, you agree to be bound by these Terms of Service. If you
            do not agree to these terms, please do not use the application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">2. Description of Service</h2>
          <p className="text-muted-foreground">
            SuperInvoice is a mobile application that allows users to create, manage, and share invoices. The app
            provides tools for managing clients, products and services, and generating PDF invoices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">3. User Accounts and Responsibilities</h2>
          <p className="mb-3 text-muted-foreground">You are responsible for:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>The accuracy of all business information, client data, and invoice details you enter into the app.</li>
            <li>Ensuring your invoices comply with applicable local laws and tax regulations.</li>
            <li>Maintaining the security of your device and any data stored within the app.</li>
            <li>Any invoices generated and shared using the application.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">4. Free and Premium Plans</h2>
          <p className="mb-3 text-muted-foreground">SuperInvoice offers both free and premium plans:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong className="text-foreground">Free Plan:</strong> Allows creation of a limited number of invoices
              with a watermark applied to generated PDFs.
            </li>
            <li>
              <strong className="text-foreground">Premium Plan:</strong> Unlocks unlimited invoice creation,
              watermark-free PDFs, and access to additional features such as custom logos and signatures.
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            Premium subscriptions are billed through Google Play and are subject to the app store&apos;s terms and
            conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">5. Subscriptions and Payments</h2>
          <p className="mb-3 text-muted-foreground">
            Premium subscriptions are processed through Google Play. By purchasing a subscription:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Payment will be charged to your Google Play account upon confirmation of purchase.</li>
            <li>
              Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing
              period.
            </li>
            <li>You can manage or cancel your subscription through Google Play settings.</li>
            <li>Refunds are subject to Google Play&apos;s refund policy.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">6. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content, design, graphics, and software within SuperInvoice are the intellectual property of
            SuperInvoice and are protected by applicable copyright and trademark laws. You may not copy, modify,
            distribute, or reverse-engineer any part of the application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">7. Permitted Use</h2>
          <p className="mb-3 text-muted-foreground">
            You agree to use SuperInvoice only for lawful purposes. You may not:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Use the app to generate fraudulent or misleading invoices.</li>
            <li>Attempt to circumvent subscription restrictions or tamper with the app&apos;s functionality.</li>
            <li>Use the app in any way that violates applicable laws or regulations.</li>
            <li>
              Distribute or resell the application or any content generated by it for commercial purposes beyond normal
              invoicing.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">8. Disclaimer of Warranties</h2>
          <p className="mb-3 text-muted-foreground">
            SuperInvoice is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
            either express or implied. We do not guarantee that:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>The app will be error-free or uninterrupted.</li>
            <li>Invoices generated will meet all legal or regulatory requirements in your jurisdiction.</li>
            <li>Data stored on your device will be preserved in all circumstances.</li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            You are solely responsible for verifying that your invoices are accurate and legally compliant.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">9. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            To the fullest extent permitted by law, SuperInvoice and its developers shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use of the application,
            including but not limited to loss of data, revenue, or business opportunities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">10. Data and Privacy</h2>
          <p className="text-muted-foreground">
            Your use of SuperInvoice is also governed by our{" "}
            <a href="/privacy-policy" className="text-foreground underline underline-offset-4">
              Privacy Policy
            </a>
            . By using the app, you consent to the collection and use of information as described in our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">11. Termination</h2>
          <p className="text-muted-foreground">
            We reserve the right to terminate or suspend access to the application at any time, without prior notice,
            for conduct that we believe violates these Terms of Service or is harmful to other users or the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">12. Changes to Terms</h2>
          <p className="text-muted-foreground">
            We may update these Terms of Service from time to time. Continued use of the app after changes are posted
            constitutes your acceptance of the revised terms. We encourage you to review these terms periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">13. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard
            to conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">14. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:devforge4@gmail.com" className="text-foreground underline underline-offset-4">
              devforge4@gmail.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
