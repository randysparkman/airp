"use client";
import { useEffect, useRef } from "react";

interface MethodologyModalProps {
  open: boolean;
  onClose: () => void;
}

const sections = [
  {
    label: "What you'll experience",
    body: "This assessment has three sections, each with five short scenarios. The first section presents everyday workplace situations involving AI tools — these are the same for everyone and help establish a baseline. The second section shifts to scenarios grounded in your specific role and organization, reflecting the tools, tasks, and situations you'd actually encounter. The third section is shaped by your earlier responses — it's designed to round out the picture by exploring areas where your thinking was most interesting or where we want to understand more.",
  },
  {
    label: "How the questions are designed",
    body: "Every scenario describes a realistic situation and asks what you would do. There are no trick questions and no right answers. We're not testing what you know about AI — we're observing how you think when AI tools are part of the picture. The first section is carefully authored by assessment designers. The second is built from materials provided by the organization sponsoring this assessment. The third adapts based on everything you've shared, focusing on the areas that matter most for a complete picture.",
  },
  {
    label: "What you'll receive",
    body: "Your responses are evaluated across three dimensions: whether you have a working mental model for AI tools, whether you can describe how you'd actually use them in practice, and whether you make sound decisions when the stakes are high or the situation is ambiguous. The result is a plain-language readiness profile — not a pass/fail score, not a grade, but a clear description of where you are, what you're doing well, and where you can grow.",
  },
];

export function MethodologyModal({ open, onClose }: MethodologyModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.35)", backdropFilter: "blur(2px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="bg-card rounded-[14px] w-full max-w-[560px] max-h-[80vh] overflow-y-auto relative"
        style={{ padding: "36px 32px" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer bg-transparent border-none"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className="font-serif text-[1.35rem] font-semibold text-foreground mb-6 leading-[1.3]">
          How This Assessment Works
        </h2>

        {sections.map((s, i) => (
          <div key={i} className={i < sections.length - 1 ? "mb-5" : ""}>
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-accent mb-2">
              {s.label}
            </p>
            <p className="text-[0.92rem] text-foreground leading-[1.7] m-0">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
