import React from "react";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="bg-background min-h-screen py-20 px-4 text-foreground"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* --- Intro Section --- */}
        <div className="text-center space-y-8">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary text-glow-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About Me
          </h2>

          <div className="bg-surface border border-border rounded-2xl p-8 md:p-10 text-lg leading-relaxed shadow-lg hover-glow-primary transition-all duration-500">
            <p className="text-muted">
              <span className="text-foreground font-semibold">
                I am a full-stack web developer
              </span>{" "}
              who loves turning ideas into real-world applications. I enjoy
              bringing concepts to life through code. Whether it is building a
              sleek portfolio, architecting a dynamic web app, or exploring a
              new technology—I am always up for a challenge.
            </p>
          </div>
        </div>

        {/* --- What I Do Section --- */}
        <div className="space-y-10">
          <h2
            className="text-4xl md:text-5xl font-bold text-center text-secondary text-glow-secondary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I Do
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend Card */}
            <div className="bg-surface border border-border p-8 rounded-2xl hover:bg-surface-hover hover-glow-primary transition-all duration-300 group">
              <h3
                className="text-2xl font-bold text-primary mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Frontend
              </h3>
              <p className="text-muted">
                I specialize in building modern, interactive UIs using{" "}
                <span className="text-foreground">React</span> and{" "}
                <span className="text-foreground">Tailwind CSS v4</span>. I
                focus on responsive design, smooth animations, and delivering
                excellent user experiences with a strong foundation in{" "}
                <span className="text-foreground">JavaScript</span>.
              </p>
            </div>

            {/* Backend Card */}
            <div className="bg-surface border border-border p-8 rounded-2xl hover:bg-surface-hover hover-glow-accent transition-all duration-300 group">
              <h3
                className="text-2xl font-bold text-accent mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Backend
              </h3>
              <p className="text-muted">
                I build robust APIs and server-side architecture using{" "}
                <span className="text-foreground">Node.js</span> and{" "}
                <span className="text-foreground">Express</span>. I also have
                experience working with{" "}
                <span className="text-foreground">Python</span> and{" "}
                <span className="text-foreground">Firebase</span> to handle
                complex data structures and secure backend logic.
              </p>
            </div>

            {/* Philosophy / Vibe Card */}
            <div className="bg-surface border border-border p-8 rounded-2xl hover:bg-surface-hover hover-glow-highlight transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <h3
                className="text-2xl font-bold text-highlight mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                My Vibe
              </h3>
              <p className="text-muted">
                Development is more than just writing code for me. I am highly
                motivated by{" "}
                <span className="text-foreground">clean code architecture</span>
                , beautiful <span className="text-foreground">dark themes</span>
                , and working in a focused,{" "}
                <span className="text-foreground">peaceful environment</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
