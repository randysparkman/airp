"use client";
import { FadeIn } from "./FadeIn";
import { ProgressBar } from "./ProgressBar";
import { PillOption } from "./PillOption";
import { NavButton } from "./NavButton";
import type { IntakeQuestion } from "@/data/intake-questions";

interface IntakeScreenProps {
  questions: IntakeQuestion[];
  questionIndex: number;
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function IntakeScreen({ questions, questionIndex, selectedValue, onSelect, onNext, onBack }: IntakeScreenProps) {
  const q = questions[questionIndex];

  return (
    <div className="max-w-[520px] mx-auto">
      <ProgressBar current={questionIndex + 2} total={7} />
      <FadeIn key={q.id} resetKey={q.id} delay={50}>
        <p className="text-[0.8rem] text-muted-foreground uppercase tracking-[0.08em] mb-2 font-medium">
          Question {questionIndex + 1} of {questions.length}
        </p>
        <h2 className="font-serif text-[1.45rem] font-semibold text-foreground tracking-[-0.01em] mb-7 leading-[1.35]">
          {q.question}
        </h2>
        <div className="mb-8">
          {q.options.map((opt) => (
            <PillOption
              key={opt.value}
              label={opt.label}
              selected={selectedValue === opt.value}
              onClick={() => onSelect(opt.value)}
            />
          ))}
        </div>
        <div className="flex justify-end items-center">
          <NavButton label="Continue →" onClick={onNext} disabled={!selectedValue} primary />
        </div>
      </FadeIn>
    </div>
  );
}
