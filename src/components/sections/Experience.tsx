"use client";

import { Briefcase, GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { track } from "@/lib/data";

const typeMeta = {
  work: {
    label: "Experiencia",
    icon: Briefcase,
    color: "text-[var(--color-accent)]",
    dot: "bg-[var(--color-accent)] shadow-[0_0_18px_var(--color-accent)]",
  },
  education: {
    label: "Educación",
    icon: GraduationCap,
    color: "text-[var(--color-accent-2)]",
    dot: "bg-[var(--color-accent-2)] shadow-[0_0_18px_var(--color-accent-2)]",
  },
  certification: {
    label: "Certificación",
    icon: Award,
    color: "text-[var(--color-accent-3)]",
    dot: "bg-[var(--color-accent-3)] shadow-[0_0_18px_var(--color-accent-3)]",
  },
} as const;

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Trayectoria"
          title="13+ años de calidad, ahora construyendo software."
          description="Una trayectoria que no reinicia: cada paso suma pensamiento analítico, atención al detalle y resolución estructurada de problemas."
        />

        <div className="mt-14 grid grid-cols-12 gap-x-8">
          <div className="relative col-span-1 hidden md:block">
            <div className="absolute left-1/2 top-2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
          </div>

          <ol className="col-span-12 flex flex-col gap-8 md:col-span-11">
            {track.map((item, i) => {
              const meta = typeMeta[item.type];
              const Icon = meta.icon;
              return (
                <Reveal key={item.role + i} delay={i * 0.06}>
                  <li className="relative">
                    <span
                      aria-hidden
                      className={`absolute -left-[2.05rem] top-7 hidden h-2.5 w-2.5 rounded-full md:block ${meta.dot}`}
                    />
                    <div className="glass rounded-3xl p-7 md:p-8">
                      <div className="flex items-center gap-2">
                        <Icon size={14} className={meta.color} />
                        <span
                          className={`font-mono text-[10px] uppercase tracking-[0.18em] ${meta.color}`}
                        >
                          {meta.label}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                          {item.role}
                        </h3>
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-white/60">
                        {item.company}
                        {item.location ? ` · ${item.location}` : ""}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {item.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-3 text-sm leading-relaxed text-white/75"
                          >
                            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-white/40" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
