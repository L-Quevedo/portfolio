"use client";

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = Omit<HTMLMotionProps<"a">, "ref"> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
  strength?: number;
};

export function MagneticButton({
  children,
  variant = "primary",
  strength = 18,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 300, damping: 20, mass: 0.3 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90 shadow-[0_10px_40px_-12px_rgba(124,242,200,0.5)]"
      : "border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.07] hover:border-white/25";

  return (
    <motion.a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn(base, styles, className)}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
