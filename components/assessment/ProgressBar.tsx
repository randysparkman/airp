"use client";
interface ProgressBarProps {
  current: number;
  total: number;
  tierLabel?: string;
}

export function ProgressBar({ current, total, tierLabel }: ProgressBarProps) {
  const pct = (current / total) * 100;

  return (
    <div className="max-w-[520px] mx-auto mb-9">
      {tierLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-[0.72rem] font-semibold text-accent uppercase tracking-[0.1em]">
            {tierLabel}
          </span>
          <span className="text-[0.72rem] text-muted-foreground">
            {Math.round(pct)}%
          </span>
        </div>
      )}
      <div className="w-full h-[3px] bg-border-light rounded-sm overflow-hidden">
        <div
          className="h-full bg-accent rounded-sm transition-[width] duration-600"
          style={{
            width: `${pct}%`,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </div>
  );
}
