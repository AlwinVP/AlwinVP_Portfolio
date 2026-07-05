import { motion } from "framer-motion";
import { Section } from "./Section";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Designer who codes. Engineer who ships.">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
            {about.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {about.roles.map((r) => (
              <span
                key={r}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-secondary shadow-sm"
              >
                {r}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {about.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-3xl p-6 shadow-sm ${
                i % 3 === 1
                  ? "bg-secondary text-secondary-foreground"
                  : i % 3 === 2
                    ? "bg-brand text-brand-foreground"
                    : "border border-border bg-card"
              }`}
            >
              <p className="text-4xl font-black tracking-tight">{s.value}</p>
              <p
                className={`mt-1 text-sm font-medium ${
                  i % 3 === 0 ? "text-muted-foreground" : "opacity-80"
                }`}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
