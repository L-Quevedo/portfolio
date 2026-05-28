"use client";

import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { personal } from "@/lib/data";

export function CV() {
  return (
    <section id="cv" className="relative py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 md:p-12">
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,242,200,0.4), transparent 60%)",
              }}
            />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  <FileText size={12} /> Curriculum Vitae
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gradient-soft md:text-4xl">
                  Llevate mi CV en un click.
                </h3>
                <p className="mt-4 text-white/60">
                  Un resumen claro y honesto de mi trayectoria, mis skills y los
                  proyectos que estoy construyendo. Actualizado periódicamente.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={personal.socials.cv}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
                  >
                    <Download size={16} />
                    Descargar PDF
                  </a>
                  <a
                    href={personal.socials.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white hover:bg-white/[0.07]"
                  >
                    Ver online
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* CV preview mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, y: -4 }}
                className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 bg-white/95 p-6 text-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-black/50">
                      CV · 2026
                    </div>
                    <div className="mt-1 font-display text-lg font-semibold">
                      {personal.name}
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)]" />
                </div>
                <div className="mt-6 space-y-3">
                  {[
                    { w: "85%", op: 0.85 },
                    { w: "70%", op: 0.6 },
                    { w: "92%", op: 0.55 },
                    { w: "60%", op: 0.5 },
                    { w: "80%", op: 0.55 },
                  ].map((l, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full bg-black"
                      style={{ width: l.w, opacity: l.op }}
                    />
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-12 rounded-md bg-gradient-to-br from-black/5 to-black/10"
                    />
                  ))}
                </div>
                <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-black/45">
                  <span>page · 01</span>
                  <span>lucasquevedo.dev</span>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
