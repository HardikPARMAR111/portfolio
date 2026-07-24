import Link from "next/link";
import { colorMap } from "./components/colorMap";

const stack = [
  { letter: "M", name: "MongoDB", role: "Data layer", color: "accent" },
  { letter: "E", name: "Express", role: "API layer", color: "secondary" },
  { letter: "R", name: "React", role: "Interface layer", color: "primary" },
  { letter: "N", name: "Node.js", role: "Runtime layer", color: "highlight" },
];

const teaserProjects = [
  {
    title: "Budget Planner",
    description:
      "Personal finance dashboard with category breakdowns and spend trends.",
    tags: ["React", "Node", "MongoDB"],
    color: "primary",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Storefront and admin panel with cart, checkout, and order management.",
    tags: ["Next.js", "Express", "Stripe"],
    color: "secondary",
  },
  {
    title: "To-Do Web App",
    description: "Task manager with drag-and-drop ordering and cloud sync.",
    tags: ["React", "Node", "MongoDB"],
    color: "accent",
  },
];

function NavLink({ children, href }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface-hover hover:text-primary"
    >
      {children}
    </Link>
  );
}

function OrbitSignature() {
  const radius = 130;
  const positions = [
    { x: 0, y: -radius },
    { x: radius, y: 0 },
    { x: 0, y: radius },
    { x: -radius, y: 0 },
  ];

  return (
    <div className="relative mx-auto" style={{ width: 320, height: 320 }}>
      <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-3xl" />

      <div
        className="absolute rounded-full border border-border"
        style={{ inset: 30 }}
      />

      <div
        className="font-display absolute flex items-center justify-center rounded-full border border-border bg-surface text-xl font-bold text-primary glow-primary"
        style={{ inset: "35%" }}
      >
        {"{ }"}
      </div>

      <div className="absolute inset-0 animate-orbit">
        {positions.map((pos, i) => {
          const c = colorMap[stack[i].color];
          return (
            <div
              key={stack[i].letter}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${pos.x}px, ${pos.y}px)`,
              }}
            >
              <div
                className={`font-mono animate-counter-orbit flex items-center justify-center rounded-full border bg-surface font-medium ${c.text} ${c.border} ${c.glow}`}
                style={{
                  width: 52,
                  height: 52,
                  marginLeft: -26,
                  marginTop: -26,
                }}
              >
                {stack[i].letter}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-background font-sans text-foreground">
      {/* ---------------- HERO ---------------- */}
      <section
        id="top"
        className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center"
      >
        <span className="font-mono inline-block rounded-full border border-border px-4 py-1.5 text-xs tracking-widest text-muted">
          MERN STACK DEVELOPER
        </span>

        <h1 className="font-display mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Full-stack, from{" "}
          <span className="text-glow-secondary text-secondary">database</span>{" "}
          to <span className="text-glow-primary text-primary">DOM</span>.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I build fast, reliable web apps end to end — schema design, REST &amp;
          realtime APIs, and interfaces people actually enjoy using.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/projects"
            className="btn-glow hover-glow-primary rounded-full bg-primary px-7 py-3 text-sm font-semibold text-background transition-shadow"
          >
            View Projects
          </Link>
          <a
            href="#contact"
            className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-hover"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16">
          <OrbitSignature />
        </div>
      </section>

      {/* ---------------- STACK STRIP ---------------- */}
      <section id="stack" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stack.map((item) => {
            const c = colorMap[item.color];
            return (
              <div
                key={item.name}
                className={`card-glow ${c.hoverGlow} rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1`}
              >
                <div
                  className={`font-display flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${c.tint} ${c.text}`}
                >
                  {item.letter}
                </div>
                <p className="font-display mt-4 text-base font-semibold">
                  {item.name}
                </p>
                <p className="font-mono mt-1 text-xs text-muted">{item.role}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- PROJECTS TEASER ---------------- */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Featured work
          </h2>
          <Link
            href="/projects"
            className="font-mono text-xs text-primary transition-colors hover:text-secondary"
          >
            See all projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {teaserProjects.map((project) => {
            const c = colorMap[project.color];
            return (
              <div
                key={project.title}
                className={`card-glow ${c.hoverGlow} flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1`}
              >
                <div className={`mb-5 h-1 w-10 rounded-full ${c.bg}`} />
                <h3 className="font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- CTA / FOOTER ---------------- */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-border bg-surface px-8 py-14 text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Let's build something.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Open to freelance projects and full-time roles. Usually reply within
            a day.
          </p>
          <a
            href="mailto:hello@yourname.dev"
            className="btn-glow hover-glow-primary mt-7 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-background transition-shadow"
          >
            parmarhardik0192@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
