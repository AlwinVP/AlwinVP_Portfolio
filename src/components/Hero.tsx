import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "@/assets/profile.png";
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
          <h1 className="mt-0 text-5xl font-black leading-[1.05] tracking-tight text-secondary md:text-7xl">
            Hello
            <br />
            I'm <span className="text-brand">{profile.name}</span>
          </h1>

          {/* Mobile-only profile photo container */}
          <div className="block md:hidden relative mx-auto w-full max-w-[320px] sm:max-w-sm my-8">
            <div className="relative aspect-square w-full flex items-end justify-center select-none">
              {/* Ambient glow behind */}
              <div className="absolute inset-8 -z-20 rounded-full bg-brand/35 blur-2xl animate-pulse" />

              {/* Circular background frame */}
              <div className="absolute inset-12 -z-10 rounded-full border-8 border-card bg-gradient-to-tr from-brand/95 to-brand/35 shadow-2xl" />

              {/* Pop-out cutout image */}
              <img
                src={profilePic}
                alt={profile.name}
                width={768}
                height={768}
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_30px_oklch(0.68_0.2_40_/_0.3)]"
              />
            </div>

          </div>

          <div className="mt-6 text-2xl font-semibold text-secondary md:text-3xl flex flex-col gap-1">
            {profile.role.split("\n").map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
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
          className="hidden md:block relative mx-auto w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-[480px]"
        >
          <div className="relative aspect-square w-full flex items-end justify-center select-none">
            {/* Ambient glow behind */}
            <div className="absolute inset-8 -z-20 rounded-full bg-brand/35 blur-2xl animate-pulse" />

            {/* Circular background frame */}
            <div className="absolute inset-12 -z-10 rounded-full border-8 border-card bg-gradient-to-tr from-brand/95 to-brand/35 shadow-2xl" />

            {/* Pop-out cutout image */}
            <img
              src={profilePic}
              alt={profile.name}
              width={768}
              height={768}
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_15px_30px_oklch(0.68_0.2_40_/_0.3)] transition-transform duration-500 hover:scale-103"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-3 bottom-4 sm:-left-4 sm:bottom-8 z-20 scale-90 sm:scale-100 origin-bottom-left rounded-2xl border border-border bg-card px-4 py-3 shadow-lg"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Enthusiast
            </p>
            <p className="text-sm font-bold text-secondary">Immersive Tech Enthusiast</p>
            <p className="text-xs text-muted-foreground mt-0.5">Crafting interactive games & web apps</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-3 top-4 sm:-right-2 sm:top-10 z-20 scale-90 sm:scale-100 origin-top-right rounded-2xl border border-border bg-secondary px-4 py-3 text-secondary-foreground shadow-lg"
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