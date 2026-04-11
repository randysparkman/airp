"use client";
import { FadeIn } from "./FadeIn";
import { IconCircle, CompletionIcon } from "./Icons";
import { NavButton } from "./NavButton";

interface AssessmentCompleteScreenProps {
  onViewProfile: () => void;
}

export function AssessmentCompleteScreen({ onViewProfile }: AssessmentCompleteScreenProps) {
  return (
    <div className="max-w-[560px] mx-auto text-center">
      <FadeIn delay={200}><IconCircle><CompletionIcon /></IconCircle></FadeIn>
      <FadeIn delay={400}>
        <h2 className="font-serif text-[1.6rem] font-semibold text-foreground tracking-[-0.01em] mb-4 leading-[1.3]">
          Assessment Complete
        </h2>
      </FadeIn>
      <FadeIn delay={600}>
        <p className="text-base text-muted-foreground leading-[1.65] max-w-[440px] mx-auto mb-4">
          Your readiness profile is ready.
        </p>
      </FadeIn>
      <FadeIn delay={800}>
        <p className="text-[0.92rem] text-muted-foreground leading-relaxed max-w-[420px] mx-auto mb-9">
          It describes where you are, what you're doing well, and where you can grow.
        </p>
      </FadeIn>
      <FadeIn delay={1000}>
        <NavButton label="View My Profile →" onClick={onViewProfile} primary />
      </FadeIn>
    </div>
  );
}
