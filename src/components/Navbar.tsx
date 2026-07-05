import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "leadership", label: "Leadership" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("home")}
          className="text-2xl font-black tracking-tight text-secondary"
        >
          {profile.logo}
          <span className="text-brand">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => scrollTo(l.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === l.id
                  ? "text-brand"
                  : "text-muted-foreground hover:text-secondary"
                  }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          Let's Talk
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-secondary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollTo(l.id)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium ${active === l.id
                    ? "bg-accent text-brand"
                    : "text-muted-foreground hover:bg-muted"
                    }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}