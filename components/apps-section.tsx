import { Download, Star } from "lucide-react"

const apps = [
  {
    name: "FocusFlow",
    description: "A productivity app with smart focus techniques and intelligent task management.",
    category: "Productivity",
    downloads: "120K+",
    rating: "4.8",
  },
  {
    name: "MealPlan",
    description: "Healthy meal planning with personalized recipes and an automatic shopping list.",
    category: "Health",
    downloads: "85K+",
    rating: "4.7",
  },
  {
    name: "PetCare",
    description: "Complete pet health and routine management with automatic reminders.",
    category: "Lifestyle",
    downloads: "200K+",
    rating: "4.9",
  },
  {
    name: "BudgetWise",
    description: "Simple financial tracking with clear charts and monthly savings goals.",
    category: "Finance",
    downloads: "150K+",
    rating: "4.6",
  },
]

export function AppsSection() {
  return (
    <section id="apps" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Portfolio</p>
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Our Apps
        </h2>
        <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
          A selection of the apps we have built and published on the major app stores.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {apps.map((app) => (
            <div
              key={app.name}
              className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:bg-secondary"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-muted-foreground">{app.category}</span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{app.name}</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <span className="text-sm font-bold">{app.name.charAt(0)}</span>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {app.description}
              </p>

              <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Download className="h-3.5 w-3.5" />
                  {app.downloads}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5" />
                  {app.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
