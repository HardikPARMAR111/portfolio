"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        background: "rgba(5, 6, 15, 0.85)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight transition-colors"
          style={{ color: "var(--color-text)" }}
        >
          <span style={{ color: "var(--color-primary)" }}>{"<"}</span>
          HARDIK PARMAR
          <span style={{ color: "var(--color-secondary)" }}>{"/>"}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link rounded-lg px-4 py-2 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={toggle}
          aria-label="Toggle menu"
          className="btn-glow rounded-lg p-1.5 md:hidden"
          style={{ color: "var(--color-text)" }}
        >
          {collapse ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {collapse && (
        <div
          className="flex flex-col gap-1 border-t px-4 py-4 md:hidden"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--color-surface)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setCollapse(false)}
              className="nav-link rounded-lg px-4 py-3 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
