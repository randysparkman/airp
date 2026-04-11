"use client";
interface PillOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function PillOption({ label, selected, onClick }: PillOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left py-3.5 px-5 mb-2.5 rounded-lg border-[1.5px] text-[0.95rem] leading-relaxed tracking-[0.01em] cursor-pointer transition-all duration-250 ease-out outline-none active:scale-[0.98] ${
        selected
          ? "bg-primary border-primary text-primary-foreground font-medium"
          : "bg-card border-border text-foreground font-normal hover:bg-card-hover hover:border-muted-foreground/40"
      }`}
    >
      {label}
    </button>
  );
}
