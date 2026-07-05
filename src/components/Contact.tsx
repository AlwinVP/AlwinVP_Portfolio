import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { IconType } from "react-icons";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

type Detail = {
  icon: IconType | typeof Mail;
  label: string;
  value: string;
  href?: string;
};

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  const details: Detail[] = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/alwinvp", href: profile.linkedin },
    { icon: FaGithub, label: "GitHub", value: "github.com/alwinvp", href: profile.github },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together.">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-secondary p-8 text-secondary-foreground lg:col-span-2"
        >
          <h3 className="text-2xl font-bold">Get in touch</h3>
          <p className="mt-2 text-sm opacity-70">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <ul className="mt-8 space-y-4">
            {details.map((d) => {
              const Icon = d.icon as IconType;
              const body = (
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider opacity-60">
                      {d.label}
                    </p>
                    <p className="truncate text-sm font-semibold">{d.value}</p>
                  </div>
                </div>
              );
              return (
                <li key={d.label}>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="block rounded-2xl transition-colors hover:bg-white/5"
                    >
                      {body}
                    </a>
                  ) : (
                    body
                  )}
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-sm lg:col-span-3"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" placeholder="What's this about?" />
          </div>
          <div className="mt-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={6}
              placeholder="Tell me a bit more..."
              className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-secondary outline-none transition-colors focus:border-brand"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-shadow hover:shadow-xl hover:shadow-brand/40 sm:w-auto"
          >
            {sent ? (
              <>
                <Check size={18} /> Message sent
              </>
            ) : (
              <>
                <Send size={18} /> Send message
              </>
            )}
          </motion.button>
          {sent && (
            <p className="mt-3 text-sm font-medium text-brand">
              Thanks! I'll get back to you as soon as I can.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-secondary outline-none transition-colors focus:border-brand"
      />
    </div>
  );
}