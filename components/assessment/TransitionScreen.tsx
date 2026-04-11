"use client";
import { FadeIn } from "./FadeIn";
import { IconCircle, CheckIcon } from "./Icons";
import { NavButton } from "./NavButton";

interface TransitionScreenProps {
  onBegin: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  tipText?: string;
}

export function TransitionScreen({
  onBegin,
  title = "You're all set",
  subtitle = "You'll see a series of short scenarios. For each one, tell us what you'd do and why — in a few sentences.",
  description = "There are no right answers and no trick questions. We're interested in your thinking, not your writing.",
  tipText = "2–4 sentences is plenty. Just your honest take.",
}: TransitionScreenProps) {
  return (
    <div className="max-w-[560px] mx-auto text-center">
      <FadeIn delay={200}><IconCircle><CheckIcon /></IconCircle></FadeIn>
      <FadeIn delay={400}>
        <h2 className="font-serif text-[1.6rem] font-semibold text-foreground tracking-[-0.01em] mb-4 leading-[1.3]">
          {title}
        </h2>
      </FadeIn>
      <FadeIn delay={600}>
        <p className="text-base text-muted-foreground leading-[1.65] max-w-[440px] mx-auto mb-3">
          {subtitle}
        </p>
      </FadeIn>
      <FadeIn delay={800}>
        <p className="text-[0.92rem] text-muted-foreground leading-relaxed max-w-[400px] mx-auto mb-9">
          {description}
        </p>
      </FadeIn>
      <FadeIn delay={1000}>
        <div className="inline-block py-4 px-6 bg-card border-[1.5px] border-border rounded-lg mb-9">
          <p className="text-[0.85rem] text-muted-foreground">
            <span className="text-accent font-semibold">Tip:</span> {tipText}
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={1200}>
        <div><NavButton label="Begin →" onClick={onBegin} primary /></div>
      </FadeIn>
    </div>
  );
}
