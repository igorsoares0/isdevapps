import { Smartphone } from "lucide-react"

export function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 pt-20 text-center">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <Smartphone className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">Mobile App Publisher</span>
        </div>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          We build apps that people love to use
        </h1>

        <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          We create and publish our own mobile apps, focused on thoughtful design and real utility.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#apps"
            className="inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            See Our Apps
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 items-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
