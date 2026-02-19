import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AppsSection } from "@/components/apps-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
