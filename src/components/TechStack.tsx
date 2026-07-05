import { motion } from "framer-motion";
import { Section } from "./Section";
import { techStack } from "@/data/portfolio";

export function TechStack() {
  return (
    <Section id="tech" eyebrow="Tech Stack" title="Tools I reach for every day.">
      <div className="space-y-10">
        {techStack.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {group.items.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    whileHover={{ y: -6 }}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-shadow hover:border-brand hover:shadow-md"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-muted text-secondary transition-all group-hover:scale-110 group-hover:bg-brand group-hover:text-brand-foreground">
                      <Icon size={20} />
                    </div>
                    <span className="min-w-0 truncate text-sm font-semibold text-secondary">
                      {t.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
