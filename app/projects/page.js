import Link from "next/link";

/**
 * Projects Page — /projects (Next.js App Router)
 * -------------------------------------------------
 * Same neon token system as the homepage (app/globals.css).
 * Four projects, each with its own accent color pulled from
 * the same four-color palette as the MERN stack strip.
 */

export const metadata = {
  title: "Projects — Your Name",
  description: "A selection of full-stack MERN projects.",
};

const projects = [
  {
    index: "01",
    title: "Budget Planner",
    tagline: "Personal finance, made visible.",
    description:
      "A budgeting app for tracking income and expenses by category, with monthly trend charts and savings goals. Auth-gated, per-user data, and CSV import for existing spreadsheets.",
    highlights: [
      "Category-based budgeting with monthly rollovers",
      "Interactive spend trend charts",
      "CSV import/export for existing records",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    color: "var(--color-primary)",
    liveHref: "https://budget-buddy-fawn-theta.vercel.app/",
    codeHref: "#",
  },
  {
    index: "02",
    title: "E-Commerce Platform",
    tagline: "Storefront and admin, in one codebase.",
    description:
      "A full shopping experience: product catalog, cart, and Stripe checkout on the customer side, plus an admin panel for managing inventory and orders on the other.",
    highlights: [
      "Stripe-powered checkout with order confirmation emails",
      "Admin dashboard for products, stock, and orders",
      "Role-based access for admin vs. customer accounts",
    ],
    tags: ["Next.js", "Express", "MongoDB", "Stripe"],
    color: "var(--color-secondary)",
    liveHref: "#",
    codeHref: "#",
  },
  {
    index: "03",
    title: "To-Do Web App",
    tagline: "Task management that stays out of your way.",
    description:
      "A task manager with drag-and-drop reordering, due dates, and priority tags. Works offline and syncs to the cloud once you're back online.",
    highlights: [
      "Drag-and-drop reordering across lists",
      "Offline-first with background cloud sync",
      "Due-date reminders and priority tagging",
    ],
    tags: ["React", "Node.js", "MongoDB"],
    color: "var(--color-accent)",
    liveHref: "#",
    codeHref: "#",
  },
  {
    index: "04",
    title: "Portfolio Website",
    tagline: "This site.",
    description:
      "A neon, futuristic portfolio built to showcase full-stack work — the same one you're looking at right now. Built mobile-first with a shared design-token system.",
    highlights: [
      "Reusable color/type tokens via CSS variables",
      "Animated hero signature built in pure CSS",
      "Fully responsive, accessible focus states",
    ],
    tags: ["Next.js", "Tailwind CSS"],
    color: "var(--color-highlight)",
    liveHref: "#",
    codeHref: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen w-full font-sans"
      style={{
        background: "var(--color-background)",
        color: "var(--color-text)",
      }}
    >
      {/* ---------------- PAGE HEADER ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-14">
        <span
          className="font-mono inline-block rounded-full px-4 py-1.5 text-xs tracking-widest"
          style={{
            border: "1px solid var(--color-border)",
            color: "var(--color-muted)",
          }}
        >
          04 PROJECTS
        </span>
        <h1 className="font-display mt-6 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Things I&apos;ve{" "}
          <span
            className="text-glow-primary"
            style={{ color: "var(--color-primary)" }}
          >
            shipped
          </span>
          .
        </h1>
        <p
          className="mt-4 max-w-xl text-base leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          A mix of personal tools and full-stack builds — from data-heavy
          dashboards to storefronts to this site itself.
        </p>
      </section>

      {/* ---------------- PROJECT LIST ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-glow flex h-full flex-col rounded-2xl p-8"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                "--glow-color": `${project.color}44`,
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: project.color }}
                >
                  {project.index}
                </span>
                <div
                  className="h-1 w-10 rounded-full"
                  style={{ background: project.color }}
                />
              </div>

              <h2 className="font-display mt-5 text-xl font-semibold sm:text-2xl">
                {project.title}
              </h2>
              <p
                className="mt-1 text-sm font-medium"
                style={{ color: project.color }}
              >
                {project.tagline}
              </p>

              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ background: project.color }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono rounded-full px-2.5 py-1 text-[11px]"
                    style={{
                      border: "1px solid var(--color-border)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-6">
                <a
                  href={project.liveHref}
                  className="inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: project.color }}
                >
                  Live demo <span aria-hidden="true">→</span>
                </a>
                <a
                  href={project.codeHref}
                  className="inline-flex items-center gap-1 text-sm font-medium"
                  style={{ color: "var(--color-muted)" }}
                >
                  Source code
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs sm:flex-row"
        style={{ color: "var(--color-muted)" }}
      >
        <span>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </span>
        <div className="flex gap-5">
          <a href="#" style={{ color: "var(--color-muted)" }}>
            GitHub
          </a>
          <a href="#" style={{ color: "var(--color-muted)" }}>
            LinkedIn
          </a>
          <a href="#" style={{ color: "var(--color-muted)" }}>
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
}
