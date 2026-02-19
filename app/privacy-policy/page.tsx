import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Appforge",
  description: "Privacy Policy for SuperInvoice app.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-10 text-sm text-muted-foreground">Last updated: February 2026</p>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to SuperInvoice. We respect your privacy and are committed to protecting your personal data. This
            Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile
            application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">2. Information We Collect</h2>
          <p className="mb-3 text-muted-foreground">We may collect the following types of information:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong className="text-foreground">Business Information:</strong> Business name, owner name, address,
              email, phone number, website, and tax ID that you provide in Settings.
            </li>
            <li>
              <strong className="text-foreground">Client Information:</strong> Names, email addresses, phone numbers,
              and addresses of your clients that you add to the app.
            </li>
            <li>
              <strong className="text-foreground">Invoice Data:</strong> Invoice numbers, amounts, items, dates, and
              payment details you create within the app.
            </li>
            <li>
              <strong className="text-foreground">Media Files:</strong> Logo images, signature images, and QR code
              images that you upload.
            </li>
            <li>
              <strong className="text-foreground">Purchase Information:</strong> Subscription status and transaction
              details processed through the app store.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">3. How We Use Your Information</h2>
          <p className="mb-3 text-muted-foreground">Your information is used to:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Generate invoices and PDF documents as requested by you.</li>
            <li>Store your business and client details locally on your device for convenience.</li>
            <li>Process and manage your subscription status.</li>
            <li>Improve app functionality and user experience.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">4. Data Storage</h2>
          <p className="text-muted-foreground">
            All your business data, client information, and invoices are stored locally on your device. We do not upload
            or store your invoices, client details, or business information on external servers. Subscription and
            purchase data is managed by the respective app store (Google Play).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">5. Third-Party Services</h2>
          <p className="mb-3 text-muted-foreground">We use the following third-party services:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>
              <strong className="text-foreground">RevenueCat:</strong> To manage in-app subscriptions and purchases.
              RevenueCat may collect anonymized usage data. Please refer to RevenueCat&apos;s privacy policy for more
              details.
            </li>
            <li>
              <strong className="text-foreground">Google Play Billing:</strong> For processing payments and
              subscriptions.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">6. Data Sharing</h2>
          <p className="mb-3 text-muted-foreground">
            We do not sell, trade, or rent your personal information to third parties. Your data may only be shared
            when:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>You explicitly choose to share an invoice via email, messaging apps, or other sharing methods.</li>
            <li>Required by law or legal proceedings.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">7. Data Security</h2>
          <p className="text-muted-foreground">
            We take reasonable measures to protect your information. Since data is stored locally on your device, its
            security is also dependent on your device&apos;s security settings, such as screen lock and encryption.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">8. Your Rights</h2>
          <p className="mb-3 text-muted-foreground">You have the right to:</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Access, update, or delete your business and client information at any time through the app settings.</li>
            <li>Delete all app data by uninstalling the application.</li>
            <li>Cancel your subscription at any time through the app store.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">9. Children&apos;s Privacy</h2>
          <p className="text-muted-foreground">
            SuperInvoice is not intended for use by children under the age of 13. We do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">10. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Any changes will be reflected in the app with an
            updated revision date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-semibold">11. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
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
