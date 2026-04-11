"use client";
import { useState, useEffect, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  resetKey?: string | number;
}

export function FadeIn({ children, delay = 0, resetKey }: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay, resetKey]);

  return (
    <div
      className="transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        filter: visible ? "blur(0px)" : "blur(4px)",
      }}
    >
      {children}
    </div>
  );
}
