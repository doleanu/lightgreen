"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** entrance rotation, e.g. "-6deg" — plates arrive slightly askew */
  rot?: string;
  /** stagger delay, e.g. "0.15s" */
  delay?: string;
};

export default function Reveal({ children, className = "", rot, delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {};
  if (rot) (style as Record<string, string>)["--rot"] = rot;
  if (delay) (style as Record<string, string>)["--d"] = delay;

  return (
    <div ref={ref} style={style} className={`reveal ${inView ? "is-in" : ""} ${className}`}>
      {children}
    </div>
  );
}
