"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo seleccionado."
          description="Una mezcla de productos reales, ejercicios y proyectos personales que muestran cómo aplico calidad, datos y código."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20",
                  p.highlight && "md:col-span-2"
                )}
              >
                {/* preview frame */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${p.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  {p.highlight && (
                    <span className="absolute right-4 top-4 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      destacado
                    </span>
                  )}
                </div>

                <div className="relative mt-5 flex flex-col gap-4 px-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-2 opacity-60 transition-opacity group-hover:opacity-100">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Repositorio en GitHub"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                        >
                          <GithubIcon size={14} />
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Ver demo"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/30 hover:text-white"
                        >
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-white/60">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
