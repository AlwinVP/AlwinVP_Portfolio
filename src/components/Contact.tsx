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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSent(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", profile.web3formsKey);

    // Reset the input fields immediately so the form clears in the moment
    form.reset();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setSent(true);
        setError(false);
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const details: Detail[] = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: FaLinkedin, label: "LinkedIn", value: profile.linkedin.replace("https://www.", "").replace("https://", ""), href: profile.linkedin },
    { icon: FaGithub, label: "GitHub", value: profile.github.replace("https://www.", "").replace("https://", ""), href: profile.github },
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
          <p className="mt-3 text-sm font-semibold opacity-90">
            Currently open to opportunities as:
          </p>
          <div className="mt-2.5 mb-4 flex flex-wrap gap-1.5">
            {[
              "Software Engineer",
              "Unity Developer",
              "Game Developer",
              "React Frontend Developer",
              "AR/VR Developer",
            ].map((role) => (
              <span
                key={role}
                className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-white/95"
              >
                {role}
              </span>
            ))}
          </div>
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
            whileHover={{ scale: isSubmitting ? 1.0 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1.0 : 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-shadow hover:shadow-xl hover:shadow-brand/40 sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : sent ? (
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
              Thanks! Your message has been sent successfully. I'll get back to you soon.
            </p>
          )}
          {error && !sent && (
            <p className="mt-3 text-sm font-medium text-destructive">
              Oops! Something went wrong. Please check if your Web3Forms access key is correct.
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