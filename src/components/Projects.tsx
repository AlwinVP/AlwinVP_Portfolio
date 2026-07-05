import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

const gradients = [
  "from-brand/80 to-brand",
  "from-secondary to-secondary/70",
  "from-brand/70 via-brand to-secondary",
  "from-secondary via-secondary/80 to-brand/60",
  "from-brand to-brand/50",
  "from-secondary/90 to-brand/70",
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected work I'm proud of.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -8 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
          >
            <div
              className={`relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]}`}
            >
              <div className="absolute inset-0 grid place-items-center">
                <span className="px-6 text-center text-3xl font-black tracking-tight text-white/95 md:text-4xl">
                  {p.title}
                </span>
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-secondary">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground transition-transform hover:scale-105"
                >
                  <FaGithub size={14} /> GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-secondary transition-colors hover:border-brand hover:text-brand"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
