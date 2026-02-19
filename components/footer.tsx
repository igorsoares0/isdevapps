export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="text-sm text-muted-foreground">
          {"© 2026 Appforge. All rights reserved."}
        </span>
        <nav className="flex gap-6">
          <a href="/privacy-policy" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="/terms-of-service" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Terms
          </a>
        </nav>
      </div>
    </footer>
  )
}
