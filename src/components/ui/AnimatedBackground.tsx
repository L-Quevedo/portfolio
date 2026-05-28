"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const SHOOTING_STARS = [
  { top: "8%", left: "10%", angle: 28, travelX: 900, travelY: 480, delay: 0, total: 18 },
  { top: "5%", left: "55%", angle: 35, travelX: 700, travelY: 500, delay: 4.5, total: 18 },
  { top: "30%", left: "78%", angle: 42, travelX: -800, travelY: 420, delay: 9, total: 18 },
  { top: "12%", left: "30%", angle: 32, travelX: 850, travelY: 560, delay: 13.5, total: 18 },
] as const;

export function AnimatedBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -220]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base color */}
      <div className="absolute inset-0 bg-[var(--color-bg)]" />

      {/* spotlight verde menta detrás del Hero — siempre visible */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[48rem] w-[70rem] rounded-full opacity-90 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(124,242,200,0.8), transparent 65%)",
        }}
      />

      {/* aurora blob — verde menta (esquina sup. izq.) */}
      <motion.div
        style={{ y: y1 }}
        className="aurora absolute -top-20 -left-20 h-[44rem] w-[44rem] rounded-full opacity-75 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(124,242,200,0.75), transparent 60%)",
          }}
        />
      </motion.div>

      {/* aurora blob — azul lavanda (derecha media) */}
      <motion.div
        style={{ y: y2 }}
        className="aurora absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(154,166,255,0.65), transparent 60%)",
          }}
        />
      </motion.div>

      {/* aurora blob — rosa (centro inferior) */}
      <motion.div
        style={{ y: y3 }}
        className="aurora absolute bottom-0 left-1/4 h-[34rem] w-[34rem] rounded-full opacity-40 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,154,224,0.5), transparent 60%)",
          }}
        />
      </motion.div>

      {/* aurora blob — verde menta secundario (centro-derecha alto) */}
      <motion.div
        style={{ y: y4 }}
        className="aurora absolute top-[5%] right-1/4 h-[28rem] w-[28rem] rounded-full opacity-45 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(124,242,200,0.55), transparent 65%)",
          }}
        />
      </motion.div>

      {/* aurora blob — verde menta inferior (refuerzo footer) */}
      <motion.div
        style={{ y: y5 }}
        className="aurora absolute -bottom-32 -right-32 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(124,242,200,0.6), transparent 60%)",
          }}
        />
      </motion.div>

      {/* línea horizontal sutil con accent — top */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,242,200,0.35) 50%, transparent 100%)",
        }}
      />

      {/* Estrellas fugaces — cruzan la pantalla cada ~6s */}
      <div className="absolute inset-0">
        {SHOOTING_STARS.map((s, i) => (
          <span
            key={i}
            className="shooting-star"
            style={
              {
                top: s.top,
                left: s.left,
                "--angle": `${s.angle}deg`,
                "--travel-x": `${s.travelX}px`,
                "--travel-y": `${s.travelY}px`,
                animationIterationCount: "infinite",
                animationDuration: `${s.total}s`,
                animationName: "shoot",
                animationTimingFunction: "ease-out",
                animationDelay: `${s.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* noise */}
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-60" />

      {/* vignette muy suave — solo oscurece los rincones extremos */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_70%,rgba(7,8,11,0.45)_100%)]" />
    </div>
  );
}
