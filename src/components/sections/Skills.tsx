"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

const tagColor: Record<string, string> = {
  Data: "text-[var(--color-accent)]",
  Dev: "text-[var(--color-accent-2)]",
  QA: "text-[var(--color-accent-3)]",
  Tools: "text-white/70",
};

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Herramientas que uso a diario."
          description="Un stack pragmático para resolver problemas reales: datos, código y procesos de calidad."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
                >
                  {/* hover gradient */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(124,242,200,0.10), transparent 40%)",
                    }}
                  />
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 transition-colors group-hover:border-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)]">
                      <Icon size={18} />
                    </div>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.18em] ${tagColor[s.category]}`}
                    >
                      {s.category}
                    </span>
                  </div>

                  <div className="relative mt-6">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/55">{s.blurb}</p>
                  </div>

                  <div className="relative mt-6">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-white/40">
                      <span>nivel</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 1.1,
                          ease: [0.22, 1, 0.36, 1],
                          delay: 0.1,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-2)] to-[var(--color-accent-3)]"
                      />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
