"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personal } from "@/lib/data";

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((v) => (v + 1) % personal.rotatingRoles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          Disponible para nuevas oportunidades
        </motion.div>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 font-display text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
        >
          <span className="block text-gradient-soft">{personal.name.split(" ")[0]}</span>
          <span className="block text-gradient">{personal.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* rotating role */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-white/70 md:text-lg"
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles
              size={16}
              className="text-[var(--color-accent)]"
              aria-hidden
            />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
              actualmente
            </span>
          </span>
          <span className="relative inline-flex h-7 items-center overflow-hidden md:h-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block whitespace-nowrap text-white"
              >
                {personal.rotatingRoles[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-8 max-w-xl text-pretty text-base text-white/60 md:text-lg"
        >
          {personal.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="#projects" variant="primary">
            Ver proyectos
            <ArrowDownRight size={16} />
          </MagneticButton>
          <MagneticButton href={personal.socials.cv} variant="ghost">
            <Download size={16} />
            Descargar CV
          </MagneticButton>
        </motion.div>

        {/* meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-xs text-white/40 md:grid-cols-4 md:gap-10"
        >
          <Meta label="Ubicación" value={personal.location} />
          <Meta label="Foco" value="QA · Data · Dev" />
          <Meta label="Stack" value="Python · SQL · JS" />
          <Meta label="Estado" value="Aprendiendo siempre" />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="pointer-events-none absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-white/30 md:block"
      >
        <span className="block animate-pulse">scroll ↓</span>
      </motion.div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono uppercase tracking-[0.2em]">{label}</span>
      <span className="text-sm text-white/80">{value}</span>
    </div>
  );
}
