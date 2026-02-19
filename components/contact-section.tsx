import { Mail, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {"Let's Talk"}
        </h2>
        <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          Want to learn more about our apps or explore a partnership? Reach out to us.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="mailto:hello@appforge.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            hello@appforge.com
          </a>
        </div>

        <div className="mt-10 flex gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            X
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
