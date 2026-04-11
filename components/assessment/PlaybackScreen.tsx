"use client";
import { FadeIn } from "./FadeIn";
import { ProgressBar } from "./ProgressBar";
import { NavButton } from "./NavButton";
import { buildPlayback, type IntakeAnswers } from "@/data/intake-questions";

interface PlaybackScreenProps {
  answers: IntakeAnswers;
  userName?: string;
  onConfirm: () => void;
  onAdjust: () => void;
}

export function PlaybackScreen({ answers, userName = "", onConfirm, onAdjust }: PlaybackScreenProps) {
  const rawPlayback = buildPlayback(answers);
  const firstName = userName.trim().split(/\s+/)[0];
  const playback = firstName
    ? `${firstName}, ${rawPlayback.charAt(0).toLowerCase()}${rawPlayback.slice(1)}`
    : rawPlayback;

  return (
    <div className="max-w-[560px] mx-auto">
      <ProgressBar current={7} total={7} />
      <FadeIn delay={100}>
        <p className="text-[0.8rem] text-muted-foreground uppercase tracking-[0.08em] mb-2 font-medium">
          Before we begin
        </p>
        <h2 className="font-serif text-[1.45rem] font-semibold text-foreground tracking-[-0.01em] mb-6 leading-[1.35]">
          Here's what we're hearing
        </h2>
      </FadeIn>
      <FadeIn delay={300}>
        <div className="bg-card border-[1.5px] border-border rounded-lg p-6 mb-7 border-l-[3px] border-l-accent">
          <p className="text-[1.02rem] text-foreground leading-[1.7] italic">
            "{playback}"
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={500}>
        <p className="text-[0.92rem] text-muted-foreground leading-relaxed mb-8">
          Does this sound right? If so, we'll move into the assessment. If something's off, you can go back and adjust.
        </p>
      </FadeIn>
      <FadeIn delay={650}>
        <div className="flex justify-between items-center">
          <NavButton label="← Review answers" onClick={onAdjust} />
          <NavButton label="That's right — begin assessment →" onClick={onConfirm} primary />
        </div>
      </FadeIn>
    </div>
  );
}
