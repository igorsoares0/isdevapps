import { Layers, Zap, Users } from "lucide-react"

const values = [
  {
    icon: Layers,
    title: "Thoughtful Design",
    description: "Clean, intuitive interfaces that provide a seamless experience for every user.",
  },
  {
    icon: Zap,
    title: "Real Performance",
    description: "Lightweight and fast apps, optimized to run smoothly on any device.",
  },
  {
    icon: Users,
    title: "User First",
    description: "Every product decision is made with the people who use our apps in mind.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">About</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          How We Work
        </h2>
        <p className="mt-3 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
          We are an independent publisher that builds and ships our own mobile apps with quality and purpose.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                <v.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
