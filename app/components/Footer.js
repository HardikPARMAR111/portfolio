import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/HardikPARMAR111", label: "GitHub", icon: Github },
  {
    href: "https://linkedin.com/in/hardik-parmar-747071353",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: "mailto:hello@yourname.dev", label: "Email", icon: Mail },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-sm sm:flex-row sm:justify-between">
        <p className="text-muted">
          © {new Date().getFullYear()}{" "}
          <span className="font-display text-foreground">Your Name</span>. All
          rights reserved.
        </p>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-3">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="hover-glow-primary flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
