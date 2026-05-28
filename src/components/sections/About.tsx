"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="Sobre mí"
            title="13 años en calidad industrial, hoy construyendo con código."
          />
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-10">
              <p className="text-pretty text-lg leading-relaxed text-white/80">
                Soy <span className="text-white">Desarrollador Jr en formación</span>, con
                foco en <span className="text-white">Python</span> y aprendiendo{" "}
                <span className="text-white">Java</span> activamente. Estudio la{" "}
                <span className="text-white">Tecnicatura en Programación (UTN)</span> y
                construyo proyectos reales de punta a punta: backends con{" "}
                <span className="text-white">FastAPI</span>, ETL con{" "}
                <span className="text-white">pandas</span>, integración con{" "}
                <span className="text-white">MySQL</span> y desarrollo asistido por IA.
              </p>
              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <p className="text-pretty text-base leading-relaxed text-white/65">
                Complemento el perfil técnico con formación sólida en{" "}
                <span className="text-white">QA Testing</span> (STLC, casos de prueba,
                API Testing con Postman) y <span className="text-white">13+ años</span>{" "}
                de experiencia profesional en análisis de calidad industrial en{" "}
                <span className="text-white">Cartocor</span>. Esa base me da pensamiento
                analítico, atención al detalle y capacidad de resolver problemas de
                forma estructurada.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Pensamiento analítico y atención al detalle",
                  "Resolución estructurada de problemas",
                  "Comunicación efectiva y trabajo colaborativo",
                  "Aprendizaje continuo y adaptabilidad al cambio",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/75"
                  >
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
