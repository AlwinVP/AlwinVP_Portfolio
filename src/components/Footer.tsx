import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © 2026 {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with <span className="font-semibold text-secondary">React + Tailwind + Framer Motion</span>
        </p>
        <div className="flex items-center gap-2">
          {[
            { Icon: FaGithub, href: profile.github, label: "GitHub" },
            { Icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-secondary transition-colors hover:border-brand hover:text-brand"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}