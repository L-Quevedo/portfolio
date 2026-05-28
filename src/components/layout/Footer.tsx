"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Logo } from "@/components/ui/Logo";
import { personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4 text-white">
          <Logo variant="full" className="h-14 w-auto" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            <Mail size={16} />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            <GithubIcon size={16} />
          </a>
        </div>

        <p className="text-xs text-white/40">
          Diseñado y construido por {personal.shortName}. Hecho con Next.js,
          Tailwind y Framer Motion.
        </p>
      </div>
    </footer>
  );
}
