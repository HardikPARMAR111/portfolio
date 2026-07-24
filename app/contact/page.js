import React from "react";
import fs from "fs/promises";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const submitAction = async (e) => {
    "use server";
    let a = await fs.appendFile(
      "hardik.txt",
      `name is ${e.get("fnm")} and message is ${e.get("msg")}\n`
    );
    console.log(a);
  };

  return (
    <>
      {/* Changed to bg-background and text-foreground from your theme */}
      <section
        id="contact"
        className="bg-background py-20 px-4 text-foreground"
      >
        <div className="max-w-2xl mx-auto text-center">
          {/* Added font-display and your custom text-glow-primary class */}
          <h2
            className="text-4xl font-bold mb-10 text-primary text-glow-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Me
          </h2>

          <form action={submitAction} className="flex flex-col space-y-6">
            {/* Inputs updated to use surface colors, muted text for placeholders, and primary glow for focus */}
            <input
              type="text"
              name="fnm"
              placeholder="Enter Your Name"
              required
              className="px-4 py-3 bg-surface text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="px-4 py-3 bg-surface text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted"
            />
            <textarea
              name="msg"
              placeholder="Enter Your Message"
              rows={5}
              required
              className="px-4 py-3 bg-surface text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted resize-none"
            />

            {/* Button uses the primary brand color, your custom hover-glow-primary, and btn-glow class */}
            <button
              className="bg-primary text-background font-bold py-3 rounded-md transition-all duration-300 hover-glow-primary btn-glow"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 flex justify-center space-x-6">
            {/* GitHub: Uses the accent color (neon green) for hover states */}
            <div
              className="flex items-center justify-center bg-surface border border-border hover:bg-surface-hover hover:border-accent hover-glow-accent transition-all duration-300 rounded-full group"
              style={{
                width: "30%",
                minWidth: "140px",
                height: "80px",
                flex: "0 1 30%",
              }}
            >
              <Link
                href="https://github.com/HardikPARMAR111"
                target="_blank"
                className="text-muted group-hover:text-accent transition-colors"
              >
                <FaGithub size={32} />
              </Link>
            </div>

            {/* LinkedIn: Uses the secondary color (neon violet) for hover states */}
            <div
              className="flex items-center justify-center bg-surface border border-border hover:bg-surface-hover hover:border-secondary hover-glow-secondary transition-all duration-300 rounded-full group"
              style={{
                width: "30%",
                minWidth: "140px",
                height: "80px",
                flex: "0 1 30%",
              }}
            >
              <Link
                href="https://linkedin.com/in/hardik-parmar"
                target="_blank"
                className="text-muted group-hover:text-secondary transition-colors"
              >
                <FaLinkedin size={32} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
