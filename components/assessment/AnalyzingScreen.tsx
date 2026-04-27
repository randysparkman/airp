"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface AnalyzingScreenProps {
  step: string;
  error?: string | null;
  onRetry?: () => void;
  resumeCode?: string | null;
}

const stepMessages: Record<string, string> = {
  scoring_t1: "Analyzing your baseline responses…",
  scoring_t2: "Analyzing your role-specific responses…",
  generating_t3: "Designing your adaptive questions…",
  scoring_t3: "Analyzing your final responses…",
  generating_profile: "Building your readiness profile…",
  done: "Almost there…",
  error: "Something went wrong",
};

const stepTimingMessages: Record<string, string> = {
  scoring_t1: "This takes about 20 seconds.",
  scoring_t2: "This takes about 1 to 1.5 minutes. We're scoring your responses and designing adaptive questions tailored to you.",
  generating_t3: "This takes about 1 to 1.5 minutes. We're scoring your responses and designing adaptive questions tailored to you.",
  scoring_t3: "This takes about 30 seconds. We're scoring your final responses.",
  generating_profile: "This takes about 1 minute. We're synthesizing your readiness profile — this is the deepest part of the analysis.",
  done: "Wrapping up…",
};

export function AnalyzingScreen({ step, error, onRetry, resumeCode }: AnalyzingScreenProps) {
  const message = stepMessages[step] || "Processing…";
  const [copied, setCopied] = useState(false);

  const copyResumeCode = async () => {
    if (!resumeCode) return;
    try {
      await navigator.clipboard.writeText(resumeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard permission denied or unavailable — fail quietly
    }
  };

  return (
    <div className="max-w-[480px] mx-auto text-center py-16">
      <FadeIn delay={100}>
        {step !== "error" ? (
          <div className="mb-8">
            <div className="w-10 h-10 mx-auto mb-6 border-[2.5px] border-accent border-t-transparent rounded-full animate-spin" />
            <h2 className="font-serif text-[1.4rem] font-semibold text-foreground tracking-[-0.01em] mb-3 leading-[1.3]">
              {message}
            </h2>
            <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
              {stepTimingMessages[step] || "We're analyzing your responses against our readiness framework."}
            </p>
          </div>
        ) : (
          <div className="mb-8">
            <div className="w-10 h-10 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
              <span className="text-destructive text-lg font-bold">!</span>
            </div>
            <h2 className="font-serif text-[1.4rem] font-semibold text-foreground tracking-[-0.01em] mb-3 leading-[1.3]">
              {stepMessages.error}
            </h2>
            <p className="text-[0.88rem] text-muted-foreground leading-relaxed mb-6">
              {error || "We couldn't generate your profile. Please try again."}
            </p>
            {onRetry && (
              <button
                onClick={onRetry}
                className="py-3 px-7 bg-primary text-primary-foreground rounded-lg font-sans text-[0.88rem] font-medium cursor-pointer tracking-[0.02em] transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              >
                Try again
              </button>
            )}
            {resumeCode && (
              <div className="mt-8 pt-6 border-t border-border max-w-[320px] mx-auto">
                <p className="text-[0.78rem] text-muted-foreground leading-[1.55] mb-3">
                  If this keeps failing, save this code. You can return from the
                  welcome screen and pick up where you left off.
                </p>
                <button
                  onClick={copyResumeCode}
                  className="w-full flex items-center justify-between gap-2 bg-[#F7F8FA] border border-border rounded px-3 py-2 hover:border-foreground/40 transition-colors"
                >
                  <span className="font-mono text-[1.05rem] tracking-[0.2em] text-foreground">
                    {resumeCode}
                  </span>
                  <span className="flex items-center gap-1 text-[0.72rem] text-muted-foreground">
                    {copied ? (
                      <><Check className="w-3.5 h-3.5" /> Copied</>
                    ) : (
                      <><Copy className="w-3.5 h-3.5" /> Copy</>
                    )}
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </FadeIn>
    </div>
  );
}
