"use client";
import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { ProgressBar } from "./ProgressBar";
import { NavButton } from "./NavButton";

interface NameInputScreenProps {
  userName: string;
  onNameChange: (name: string) => void;
  onContinue: () => void;
  onBack: () => void;
}

export function NameInputScreen({ userName, onNameChange, onContinue, onBack }: NameInputScreenProps) {
  return (
    <div className="max-w-[520px] mx-auto">
      <ProgressBar current={1} total={7} />
      <FadeIn delay={100}>
        <p className="text-[0.8rem] text-muted-foreground uppercase tracking-[0.08em] mb-2 font-medium">
          Before we start
        </p>
      </FadeIn>
      <FadeIn delay={200}>
        <h2 className="font-serif text-[1.45rem] font-semibold text-foreground tracking-[-0.01em] mb-2 leading-[1.35]">
          What name should we use on your assessment?
        </h2>
      </FadeIn>
      <FadeIn delay={300}>
        <p className="text-[0.88rem] text-muted-foreground/80 leading-[1.6] mb-7">
          This will appear on your readiness profile and downloadable report.
        </p>
      </FadeIn>
      <FadeIn delay={400}>
        <div>
          <input
            type="text"
            value={userName}
            onChange={(e) => onNameChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onContinue();
              }
            }}
            placeholder="Your first and last name"
            className="w-full py-3.5 px-5 border-[1.5px] border-border bg-white rounded-[10px] text-[0.95rem] text-foreground font-sans placeholder:text-muted-foreground/50 transition-colors duration-250 ease-out focus:outline-none focus:border-accent mb-2"
          />
          <p className="text-[0.75rem] text-muted-foreground/60 mb-6">
            Press enter to remain anonymous
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={500}>
        <div className="flex justify-between items-center">
          <NavButton label="← Back" onClick={onBack} />
          <NavButton label="Continue →" onClick={onContinue} primary />
        </div>
      </FadeIn>
    </div>
  );
}
