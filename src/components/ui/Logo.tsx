import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "compact";
  className?: string;
};

export function Logo({ variant = "compact", className }: LogoProps) {
  if (variant === "full") {
    return (
      <svg
        viewBox="0 0 400 80"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Lucas Quevedo — Desarrollador, QA"
        className={cn("h-12 w-auto", className)}
      >
        <text
          x="158"
          y="48"
          textAnchor="end"
          fontFamily="var(--font-display), 'Space Grotesk', sans-serif"
          fontSize="34"
          fontWeight="500"
          fill="currentColor"
          letterSpacing="-1"
        >
          lucas
        </text>
        <circle
          cx="170"
          cy="40"
          r="4"
          fill="var(--color-accent, #7cf2c8)"
          style={{ filter: "drop-shadow(0 0 12px rgba(124, 242, 200, 0.55))" }}
        />
        <text
          x="182"
          y="48"
          textAnchor="start"
          fontFamily="var(--font-display), 'Space Grotesk', sans-serif"
          fontSize="34"
          fontWeight="700"
          fill="currentColor"
          letterSpacing="-1"
        >
          quevedo
        </text>
        <line
          x1="80"
          y1="62"
          x2="320"
          y2="62"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
        <text
          x="200"
          y="75"
          textAnchor="middle"
          fontFamily="var(--font-mono), 'JetBrains Mono', monospace"
          fontSize="9"
          letterSpacing="3"
          fill="currentColor"
          fillOpacity="0.5"
        >
          DESARROLLADOR, QA
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="60 8 270 36"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Lucas Quevedo"
      className={cn("h-6 w-auto", className)}
    >
      <text
        x="158"
        y="38"
        textAnchor="end"
        fontFamily="var(--font-display), 'Space Grotesk', sans-serif"
        fontSize="34"
        fontWeight="500"
        fill="currentColor"
        letterSpacing="-1"
      >
        lucas
      </text>
      <circle
        cx="170"
        cy="30"
        r="4"
        fill="var(--color-accent, #7cf2c8)"
        style={{ filter: "drop-shadow(0 0 10px rgba(124, 242, 200, 0.55))" }}
      />
      <text
        x="182"
        y="38"
        textAnchor="start"
        fontFamily="var(--font-display), 'Space Grotesk', sans-serif"
        fontSize="34"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-1"
      >
        quevedo
      </text>
    </svg>
  );
}
