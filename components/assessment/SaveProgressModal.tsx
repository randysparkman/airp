"use client";
import { useEffect, useState } from "react";
import { X, Copy, Check } from "lucide-react";

interface SaveProgressModalProps {
  resumeCode: string;
  onClose: () => void;
}

export function SaveProgressModal({ resumeCode, onClose }: SaveProgressModalProps) {
  const [copied, setCopied] = useState<"code" | "url" | null>(null);

  const resumeUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}?resume=${resumeCode}`
      : "";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const copy = async (text: string, which: "code" | "url") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(which);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard permission denied or unavailable — fail quietly
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="font-serif text-[1.15rem] text-foreground mb-2">Save your progress</h3>
        <p className="text-[0.88rem] text-muted-foreground leading-[1.6] mb-4">
          Your progress is saved automatically. Keep this code to come back on another device
          or after closing the tab. Sessions expire after 7 days.
        </p>

        <div className="mb-4">
          <p className="text-[0.72rem] uppercase tracking-[0.08em] text-muted-foreground mb-1.5">
            Your resume code
          </p>
          <button
            onClick={() => copy(resumeCode, "code")}
            className="w-full flex items-center justify-between gap-2 bg-[#F7F8FA] border border-border rounded px-4 py-3 hover:border-foreground/40 transition-colors"
          >
            <span className="font-mono text-[1.3rem] tracking-[0.2em] text-foreground">
              {resumeCode}
            </span>
            <span className="flex items-center gap-1 text-[0.78rem] text-muted-foreground">
              {copied === "code" ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
            </span>
          </button>
        </div>

        <div className="mb-4">
          <p className="text-[0.72rem] uppercase tracking-[0.08em] text-muted-foreground mb-1.5">
            Or copy a resume link
          </p>
          <button
            onClick={() => copy(resumeUrl, "url")}
            className="w-full flex items-center justify-between gap-2 bg-[#F7F8FA] border border-border rounded px-3 py-2 hover:border-foreground/40 transition-colors text-left"
          >
            <span className="font-mono text-[0.78rem] text-foreground truncate">{resumeUrl}</span>
            <span className="flex items-center gap-1 text-[0.78rem] text-muted-foreground shrink-0">
              {copied === "url" ? <><Check className="w-3.5 h-3.5" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
            </span>
          </button>
        </div>

        <p className="text-[0.78rem] text-muted-foreground leading-[1.55]">
          When you&rsquo;re ready to come back, open the link or enter the code on the welcome
          screen.
        </p>
      </div>
    </div>
  );
}
