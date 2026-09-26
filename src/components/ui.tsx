import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="gold-line h-px w-8" />
      <span className="text-[11px] font-semibold tracking-[0.22em] text-gold-2 uppercase">
        {children}
      </span>
    </div>
  );
}

export function Logo({
  className,
  light = true,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <a
      href="#top"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="NOOR"
    >
      <span className="relative grid h-9 w-9 place-items-center">
        <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden>
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            stroke={light ? "#e4d2a0" : "#c4a35a"}
            strokeWidth="0.8"
            opacity="0.55"
          />
          <circle
            cx="18"
            cy="18"
            r="7"
            fill="none"
            stroke={light ? "#f3e6c4" : "#9d7c32"}
            strokeWidth="1.1"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="18"
              y1="4.5"
              x2="18"
              y2="9.5"
              stroke={light ? "#e4d2a0" : "#c4a35a"}
              strokeWidth="1.2"
              strokeLinecap="round"
              transform={`rotate(${deg} 18 18)`}
            />
          ))}
          <circle cx="18" cy="18" r="2.2" fill={light ? "#f3e6c4" : "#c4a35a"} />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-[1.35rem] leading-none tracking-[0.18em]",
          light ? "text-cream" : "text-navy",
        )}
      >
        NOOR
      </span>
    </a>
  );
}

type BtnProps = HTMLMotionProps<"button"> & {
  variant?: "gold" | "ghost" | "dark";
};

export function Button({
  children,
  className,
  variant = "gold",
  type = "button",
  ...rest
}: BtnProps) {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide disabled:pointer-events-none disabled:opacity-60",
        variant === "gold" && "btn-gold",
        variant === "ghost" && "btn-ghost",
        variant === "dark" &&
          "bg-navy text-cream shadow-lg shadow-navy/20 transition hover:-translate-y-0.5",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
