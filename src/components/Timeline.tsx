import { motion } from "framer-motion";

export type TimelineItem = {
  title: string;
  place: string;
  period: string;
  detail?: string;
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-8">
        {items.map((item, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={`${item.title}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
            >
              <span className="absolute left-2 top-6 h-4 w-4 rounded-full border-4 border-background bg-brand shadow md:left-1/2 md:-translate-x-1/2" />
              <div className={left ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-secondary">{item.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-muted-foreground">{item.place}</p>
                  {item.detail && (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
