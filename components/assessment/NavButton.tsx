"use client";
interface NavButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
}

export function NavButton({ label, onClick, disabled, primary }: NavButtonProps) {
  if (primary) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`py-3 px-8 rounded-lg text-[0.9rem] font-medium tracking-[0.02em] border-none transition-all duration-250 ease-out active:scale-[0.97] ${
          disabled
            ? "bg-border-light text-muted-foreground cursor-default"
            : "bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90"
        }`}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2.5 px-5 bg-transparent border-none text-[0.88rem] tracking-[0.01em] transition-colors duration-200 ease-out ${
        disabled
          ? "text-border-light cursor-default"
          : "text-muted-foreground cursor-pointer hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
