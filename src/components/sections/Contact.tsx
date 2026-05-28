"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { personal } from "@/lib/data";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Mensaje desde portfolio — ${form.name || "Sin nombre"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Trabajemos juntos."
          description="Si tenés un proyecto, una oportunidad o simplemente querés saludar, estoy a un mensaje de distancia."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Channels */}
          <div className="md:col-span-2">
            <Reveal>
              <div className="flex flex-col gap-3">
                <Channel
                  icon={Mail}
                  label="Email"
                  value={personal.email}
                  href={`mailto:${personal.email}`}
                />
                <Channel
                  icon={LinkedinIcon}
                  label="LinkedIn"
                  value="lucasquevedo"
                  href={personal.socials.linkedin}
                />
                <Channel
                  icon={GithubIcon}
                  label="GitHub"
                  value="L-Quevedo"
                  href={personal.socials.github}
                />
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="glass rounded-3xl p-6 md:p-8"
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Field
                    label="Nombre"
                    name="name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                  />
                </div>
                <div className="mt-4">
                  <Field
                    label="Mensaje"
                    name="message"
                    textarea
                    value={form.message}
                    onChange={(v) => setForm({ ...form, message: v })}
                  />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs text-white/40">
                    Tu mensaje se abrirá en tu cliente de correo.
                  </p>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
                  >
                    {sent ? (
                      <>
                        <Check size={16} /> Enviado
                      </>
                    ) : (
                      <>
                        Enviar <Send size={14} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Channel({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/80 transition-colors group-hover:border-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)]">
          <Icon size={16} />
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            {label}
          </div>
          <div className="mt-1 text-sm text-white/90">{value}</div>
        </div>
      </div>
      <span className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white">
        →
      </span>
    </a>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  const baseCls =
    "peer w-full border-0 border-b border-white/10 bg-transparent px-0 py-3 text-sm text-white placeholder-transparent outline-none transition-colors focus:border-[var(--color-accent)]";
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseCls} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseCls}
        />
      )}
      <span className="pointer-events-none absolute left-0 top-3 text-sm text-white/40 transition-all peer-focus:-translate-y-5 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-[var(--color-accent)] peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.18em] peer-[:not(:placeholder-shown)]:text-white/50">
        {label}
      </span>
    </label>
  );
}
