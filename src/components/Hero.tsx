import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "@/assets/profile.jpg";
import { profile } from "@/data/portfolio";

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-secondary md:text-7xl">
            Hello <span className="inline-block">👋</span>
            <br />
            I'm <span className="text-brand">{profile.name}</span>
          </h1>

          <p className="mt-6 text-2xl font-semibold text-secondary md:text-3xl">
            {profile.role}
          </p>
          <p className="mt-1 text-lg text-muted-foreground">{profile.subRole}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition-shadow hover:shadow-xl hover:shadow-brand/40"
            >
              <Download size={18} /> Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-secondary shadow-sm hover:border-secondary"
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: FaGithub, href: profile.github, label: "GitHub" },
              { icon: FaLinkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ y: -3 }}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-secondary transition-colors hover:border-brand hover:text-brand"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-full bg-brand" />
          <div className="relative overflow-hidden rounded-full border-8 border-card bg-card shadow-2xl">
            <img
              src={profilePic}
              alt={profile.name}
              width={768}
              height={768}
              className="aspect-square w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 bottom-8 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Currently
            </p>
            <p className="text-sm font-bold text-secondary">Shipping AR/VR ✨</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-2 top-10 rounded-2xl border border-border bg-secondary px-4 py-3 text-secondary-foreground shadow-lg"
          >
            <p className="text-xs font-medium uppercase tracking-wider opacity-60">
              Based in
            </p>
            <p className="text-sm font-bold">{profile.location}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}