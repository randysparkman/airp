"use client";
import { FadeIn } from "./FadeIn";

interface InvalidProfileScreenProps {
  slug: string;
}

export function InvalidProfileScreen({ slug }: InvalidProfileScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <FadeIn delay={100}>
        <div className="text-center max-w-[440px] mx-auto">
          <p className="text-[1.02rem] text-foreground leading-[1.65] mb-8">
            We didn't recognize that profile name. Check your link and try again, or proceed to the general site.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 rounded-lg text-[0.95rem] font-medium transition-colors"
            style={{
              backgroundColor: "hsl(var(--accent))",
              color: "hsl(var(--accent-foreground))",
            }}
          >
            Go to the general site
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
