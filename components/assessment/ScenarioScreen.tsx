"use client";
import { useState, useRef } from "react";
import { FadeIn } from "./FadeIn";
import { ProgressBar } from "./ProgressBar";
import { NavButton } from "./NavButton";
import type { ScenarioQuestion } from "@/data/assessment-types";

interface ScenarioScreenProps {
  question: ScenarioQuestion;
  questionIndex: number;
  totalQuestions: number;
  response: string;
  onResponseChange: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  tierLabel: string;
}

export function ScenarioScreen({
  question,
  questionIndex,
  totalQuestions,
  response,
  onResponseChange,
  onNext,
  onBack,
  tierLabel,
}: ScenarioScreenProps) {
  const charCount = response.length;
  const minChars = 40;
  const isReady = charCount >= minChars;
  const [focused, setFocused] = useState(false);
  const hintDismissed = useRef(false);

  // Progressive fill: 40 chars = 30%, 90 chars = 65%, 120+ chars = 100%
  const getButtonOpacity = () => {
    if (charCount < minChars) return 0; // disabled state handled by NavButton
    if (charCount >= 120) return 1;
    if (charCount >= 90) return 0.65 + ((charCount - 90) / 30) * 0.35;
    return 0.3 + ((charCount - 40) / 50) * 0.35;
  };

  // Hint shows at 40+, fades at 90, never reappears once faded
  if (charCount >= 90) hintDismissed.current = true;
  const showHint = isReady && !hintDismissed.current;

  const buttonOpacity = getButtonOpacity();

  return (
    <div className="max-w-[600px] mx-auto">
      <ProgressBar current={questionIndex + 1} total={totalQuestions} tierLabel={tierLabel} />
      <FadeIn key={question.id} resetKey={question.id} delay={50}>
        <p className="text-[0.8rem] text-muted-foreground uppercase tracking-[0.08em] mb-2 font-medium">
          {question.label}
        </p>

        <div className="bg-card border-[1.5px] border-border rounded-lg p-6 mb-6 border-l-[3px] border-l-navy">
          <p className="text-[0.98rem] text-foreground leading-[1.7]">
            {question.scenario}
          </p>
        </div>

        <h2 className="font-serif text-[1.3rem] font-semibold text-foreground tracking-[-0.01em] mb-5 leading-[1.35]">
          {question.prompt}
        </h2>

        <div className="relative mb-2">
          <textarea
            value={response}
            onChange={(e) => onResponseChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="2–4 sentences — just your honest take"
            rows={5}
            className={`w-full py-4 px-5 border-[1.5px] rounded-lg bg-card text-foreground font-sans text-[0.95rem] leading-[1.65] resize-y outline-none transition-colors duration-200 min-h-[120px] box-border ${
              focused ? "border-accent" : "border-border"
            }`}
          />
        </div>

        <div className="flex justify-between items-center mb-7">
          <span
            className={`text-[0.78rem] transition-opacity duration-500 ${
              showHint ? "text-muted-foreground opacity-100" : "opacity-0"
            }`}
          >
            {showHint ? "That works — a little more detail can help us understand your thinking better." : ""}
          </span>
          <span className="w-0 h-0" />
        </div>

        <div className="flex justify-end items-center">
          <div
            style={{
              opacity: isReady ? 1 : undefined,
              filter: isReady ? `saturate(${buttonOpacity})` : undefined,
              transition: "filter 0.3s ease",
            }}
          >
            <NavButton
              label={
                questionIndex === totalQuestions - 1
                  ? `Complete ${tierLabel?.split(" —")[0] || "Tier"} →`
                  : "Next scenario →"
              }
              onClick={onNext}
              disabled={!isReady}
              primary
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
