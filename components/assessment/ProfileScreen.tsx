"use client";
import { useState, useRef } from "react";
import { FadeIn } from "./FadeIn";
import { DownloadIcon } from "./Icons";
import type { ProfileData } from "@/data/mock-profile";
import { downloadProfilePdf, generateProfilePdfBlob, type AssessmentResponse } from "@/lib/generatePdf";

interface ProfileScreenProps {
  profile: ProfileData;
  onReset: () => void;
  userName?: string;
  orgName?: string;
  roleLabel?: string;
  sponsor?: string;
  roleDescription?: string;
  assessmentResponses?: AssessmentResponse[];
  completionId?: string | null;
}

const BAND_COLORS: Record<string, string> = {
  Emerging: "text-band-emerging",
  Developing: "text-accent",
  Demonstrating: "text-green",
};

const CONSTRUCT_ACCENT: Record<string, string> = {
  orientation: "bg-navy",
  integration: "bg-green",
  judgment: "bg-accent",
};

const CONSTRUCT_LABELS: Record<string, string> = {
  orientation: "ORIENTATION",
  integration: "INTEGRATION",
  judgment: "JUDGMENT",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const comma = result.indexOf(",");
      resolve(comma >= 0 ? result.slice(comma + 1) : result);
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

function PlacementScale({ band }: { band: string }) {
  const bands = ["Emerging", "Developing", "Demonstrating"] as const;
  return (
    <div className="flex items-center gap-2 text-[0.82rem]">
      {bands.map((b, i) => (
        <span key={b} className="flex items-center gap-2">
          {i > 0 && <span className="text-border">·</span>}
          <span
            className={
              b === band
                ? `font-semibold ${BAND_COLORS[b]}`
                : "text-border"
            }
          >
            {b}
          </span>
        </span>
      ))}
    </div>
  );
}

function ConstructCard({
  name,
  level,
  detail,
  delay,
}: {
  name: string;
  level: string;
  detail: string;
  delay: number;
}) {
  const key = name.toLowerCase() as keyof typeof CONSTRUCT_ACCENT;
  const accentClass = CONSTRUCT_ACCENT[key] || "bg-navy";
  const badgeColor = BAND_COLORS[level] || "text-muted-foreground";

  return (
    <FadeIn delay={delay}>
      <div className="bg-card border-[1.5px] border-border rounded-lg overflow-hidden mb-3">
        <div className="flex">
          <div className={`w-[5px] flex-shrink-0 ${accentClass}`} />
          <div className="p-5 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-serif text-[1rem] font-semibold text-foreground tracking-wide">
                {CONSTRUCT_LABELS[key] || name.toUpperCase()}
              </span>
              <span
                className={`text-[0.7rem] font-semibold px-2.5 py-0.5 rounded ${badgeColor} bg-current/10`}
                style={{
                  backgroundColor:
                    level === "Emerging"
                      ? "hsl(var(--band-emerging-muted))"
                      : level === "Developing"
                      ? "hsl(var(--band-developing-muted))"
                      : "hsl(var(--band-demonstrating-muted))",
                }}
              >
                <span className={badgeColor}>{level}</span>
              </span>
            </div>
            <p className="text-[0.88rem] text-foreground leading-[1.6] m-0">
              {detail}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function ListSection({
  title,
  items,
  dotColorClass,
  delay,
}: {
  title: string;
  items: string[];
  dotColorClass: string;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <h3 className="font-serif text-[1.15rem] font-semibold text-foreground mb-4 mt-8 tracking-[-0.01em]">
        {title}
      </h3>
      <div className="bg-card border-[1.5px] border-border rounded-lg p-5 mb-3.5">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex gap-3 items-start py-2 ${
              i < items.length - 1 ? "border-b border-border-light" : ""
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${dotColorClass} flex-shrink-0 mt-1.5`}
            />
            <p className="text-[0.9rem] text-foreground leading-[1.55] m-0">
              {item}
            </p>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

export function ProfileScreen({
  profile,
  onReset,
  userName = "",
  orgName = "",
  roleLabel = "",
  sponsor = "",
  roleDescription = "",
  assessmentResponses = [],
  completionId = null,
}: ProfileScreenProps) {
  const p = profile;
  const [audioState, setAudioState] = useState<"idle" | "loading" | "playing" | "done" | "error">("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioBlobUrlRef = useRef<string | null>(null);

  const [emailExpanded, setEmailExpanded] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "saved" | "error">("idle");
  const [emailErrorInline, setEmailErrorInline] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState<string | null>(null);

  async function submitEmail() {
    if (!completionId) return;
    const trimmed = emailValue.trim().toLowerCase();
    if (!EMAIL_REGEX.test(trimmed)) {
      setEmailErrorInline("That doesn't look like a valid email");
      return;
    }
    setEmailErrorInline(null);
    setEmailStatus("sending");
    try {
      const { blob, filename } = await generateProfilePdfBlob(
        p,
        userName,
        orgName,
        assessmentResponses,
        roleLabel,
        sponsor,
        roleDescription,
      );
      const pdfBase64 = await blobToBase64(blob);

      const res = await fetch("/api/email-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completionId,
          email: trimmed,
          pdfBase64,
          fileName: filename,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.saved) {
        setEmailStatus("error");
        setEmailErrorInline(
          data?.error === "invalid_email"
            ? "That doesn't look like a valid email"
            : "Couldn't save right now — try again"
        );
        return;
      }
      setSentTo(trimmed);
      setEmailStatus(data.sent ? "sent" : "saved");
      setEmailExpanded(false);
    } catch {
      setEmailStatus("error");
      setEmailErrorInline("Couldn't reach the server — try again");
    }
  }

  function cancelEmail() {
    setEmailExpanded(false);
    setEmailValue("");
    setEmailErrorInline(null);
    if (emailStatus === "error") setEmailStatus("idle");
  }

  async function handleAudioButton() {
    if (audioState === "playing") {
      audioRef.current?.pause();
      setAudioState("done");
      return;
    }
    if (audioState === "done" && audioBlobUrlRef.current) {
      // replay from cached blob
      const audio = new Audio(audioBlobUrlRef.current);
      audioRef.current = audio;
      audio.onended = () => setAudioState("done");
      audio.play();
      setAudioState("playing");
      return;
    }
    setAudioState("loading");
    try {
      const res = await fetch("/api/generate-audio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: p.summary }),
      });
      if (!res.ok) throw new Error("audio generation failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      audioBlobUrlRef.current = url;
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => setAudioState("done");
      audio.play();
      setAudioState("playing");
    } catch {
      setAudioState("error");
      setTimeout(() => setAudioState("idle"), 3000);
    }
  }

  function handleDownloadMp3() {
    if (!audioBlobUrlRef.current) return;
    const a = document.createElement("a");
    a.href = audioBlobUrlRef.current;
    a.download = "ai-readiness-summary.mp3";
    a.click();
  }

  const firstName = userName.trim().split(/\s+/)[0];
  const profileTitle = firstName
    ? `${firstName}'s WorkPath Profile`
    : "WorkPath Profile";
  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-[640px] mx-auto">
      {/* Title + Placement */}
      <FadeIn delay={100}>
        <p className="text-[0.72rem] text-accent uppercase tracking-[0.1em] font-semibold mb-1.5">
          Your Results
        </p>
        <h1 className="font-serif text-[1.8rem] font-bold text-foreground tracking-[-0.02em] mb-1.5 leading-[1.2]">
          {profileTitle}
        </h1>
        <p className="text-[0.85rem] text-muted-foreground mb-3">{dateStr}</p>
        <PlacementScale band={p.band} />
        <div className="mt-6 mb-8" />
      </FadeIn>

      {/* Summary */}
      <FadeIn delay={300}>
        <div className="bg-card border-[1.5px] border-border rounded-lg p-6 mb-8 border-l-[3px] border-l-accent">
          <p className="text-[0.98rem] text-foreground leading-[1.7] m-0">
            {p.summary}
          </p>
        </div>
      </FadeIn>

      {/* Readiness Dimensions */}
      {p.dimensions && (
        <>
          <FadeIn delay={400}>
            <h3 className="font-serif text-[1.15rem] font-semibold text-foreground mb-2 mt-8 tracking-[-0.01em]">
              Readiness Dimensions
            </h3>
            <p className="text-[0.75rem] leading-[1.5] mb-5" style={{ color: "#a8a4a0" }}>
              <span className="font-semibold">Orientation</span> — How well you
              understand AI &nbsp;·&nbsp;{" "}
              <span className="font-semibold">Integration</span> — How
              effectively you use AI &nbsp;·&nbsp;{" "}
              <span className="font-semibold">Judgment</span> — How well you
              reason under pressure
            </p>
          </FadeIn>

          <ConstructCard
            name="orientation"
            level={p.dimensions.orientation.level}
            detail={p.dimensions.orientation.detail}
            delay={450}
          />
          <ConstructCard
            name="integration"
            level={p.dimensions.integration.level}
            detail={p.dimensions.integration.detail}
            delay={500}
          />
          <ConstructCard
            name="judgment"
            level={p.dimensions.judgment.level}
            detail={p.dimensions.judgment.detail}
            delay={550}
          />
        </>
      )}

      {/* What You're Doing Well */}
      <ListSection
        title="What You're Doing Well"
        items={p.doing_well}
        dotColorClass="bg-green"
        delay={600}
      />

      {/* Next Capabilities to Build */}
      <ListSection
        title="Next Capabilities to Build"
        items={p.next_capabilities}
        dotColorClass="bg-accent"
        delay={700}
      />

      {/* Your Next Step */}
      <FadeIn delay={800}>
        <h3 className="font-serif text-[1.15rem] font-semibold text-foreground mb-4 mt-8 tracking-[-0.01em]">
          Your Next Step
        </h3>
        <div className="bg-background border-[1.5px] border-border rounded-lg p-6 mb-3.5 border-l-[4px] border-l-accent">
          <p className="text-[0.98rem] text-foreground leading-[1.7] m-0 font-medium">
            {p.primary_next_step}
          </p>
        </div>
      </FadeIn>

      {/* Organizational Opportunities */}
      {p.organizational_opportunities &&
        p.organizational_opportunities.length > 0 && (
          <FadeIn delay={900}>
            <h3 className="font-serif text-[1.15rem] font-semibold text-foreground mb-2 mt-8 tracking-[-0.01em]">
              Organizational Opportunities
            </h3>
            <p className="text-[0.78rem] text-muted-foreground italic mb-4">
              The following recommendations are addressed to the organization
              based on patterns observed in this assessment.
            </p>
            <div className="bg-card border-[1.5px] border-border rounded-lg p-5 mb-3.5">
              {p.organizational_opportunities.map((item, i) => (
                <div
                  key={i}
                  className={`flex gap-3 items-start py-2 ${
                    i < p.organizational_opportunities.length - 1
                      ? "border-b border-border-light"
                      : ""
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-muted-foreground flex-shrink-0 mt-1.5" />
                  <p className="text-[0.9rem] text-foreground leading-[1.55] m-0">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

      <FadeIn delay={1000}>
        <div className="text-center mt-10 mb-10">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() =>
                void downloadProfilePdf(p, userName, orgName, assessmentResponses, roleLabel, sponsor, roleDescription)
              }
              className="py-3 px-7 bg-transparent text-primary border-[1.5px] border-primary rounded-lg font-sans text-[0.88rem] font-medium cursor-pointer tracking-[0.02em] transition-all duration-250 ease-out inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground active:scale-[0.97]"
            >
              <DownloadIcon />
              Download PDF
            </button>
            <button
              onClick={handleAudioButton}
              disabled={audioState === "loading" || audioState === "error"}
              className="py-3 px-7 bg-transparent text-primary border-[1.5px] border-primary rounded-lg font-sans text-[0.88rem] font-medium cursor-pointer tracking-[0.02em] transition-all duration-250 ease-out inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {audioState === "done" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                  Play Again
                </>
              ) : audioState === "error" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Audio unavailable
                </>
              ) : audioState === "loading" ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Generating…
                </>
              ) : audioState === "playing" ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                  Stop
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                  Listen to Summary
                </>
              )}
            </button>
          </div>
          {(() => {
            const showEmailLink =
              !!completionId &&
              !emailExpanded &&
              emailStatus !== "sent" &&
              emailStatus !== "saved";
            const showSentMsg =
              !emailExpanded &&
              (emailStatus === "sent" || emailStatus === "saved");
            const showMp3 = !!audioBlobUrlRef.current;
            const showDot = (showEmailLink || showSentMsg) && showMp3;

            if (emailExpanded) {
              return (
                <div className="mt-2.5 max-w-md mx-auto text-left">
                  <p className="text-[0.78rem] text-muted-foreground mb-2 text-center">
                    We&apos;ll send a PDF copy to your inbox.
                  </p>
                  <div className="flex gap-2 items-start">
                    <input
                      type="email"
                      value={emailValue}
                      onChange={(e) => {
                        setEmailValue(e.target.value);
                        if (emailErrorInline) setEmailErrorInline(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          if (emailValue.trim().length > 0 && emailStatus !== "sending") {
                            void submitEmail();
                          }
                        }
                      }}
                      placeholder="you@example.com"
                      disabled={emailStatus === "sending"}
                      autoFocus
                      className="flex-1 px-3 py-2 text-[0.85rem] border border-border rounded-md bg-card focus:outline-none focus:border-primary disabled:opacity-50"
                    />
                    <button
                      onClick={() => void submitEmail()}
                      disabled={emailValue.trim().length === 0 || emailStatus === "sending"}
                      className="px-4 py-2 text-[0.85rem] bg-primary text-primary-foreground rounded-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-opacity"
                    >
                      {emailStatus === "sending" ? "Sending…" : "Send"}
                    </button>
                    <button
                      onClick={cancelEmail}
                      disabled={emailStatus === "sending"}
                      className="px-2 py-2 text-[0.85rem] text-muted-foreground bg-transparent border-none cursor-pointer disabled:opacity-50"
                    >
                      Cancel
                    </button>
                  </div>
                  {emailErrorInline && (
                    <p className="text-[0.75rem] text-band-emerging mt-1.5">
                      {emailErrorInline}
                    </p>
                  )}
                </div>
              );
            }

            if (!showEmailLink && !showSentMsg && !showMp3) return null;

            return (
              <div className="mt-2.5 flex items-center justify-center gap-3 text-[0.78rem]">
                {showEmailLink && (
                  <button
                    onClick={() => setEmailExpanded(true)}
                    className="text-primary underline underline-offset-2 cursor-pointer bg-transparent border-none p-0"
                  >
                    Email me a copy
                  </button>
                )}
                {showSentMsg && emailStatus === "sent" && sentTo && (
                  <span className="text-muted-foreground">
                    ✓ Sent to {sentTo}
                  </span>
                )}
                {showSentMsg && emailStatus === "saved" && (
                  <span className="text-muted-foreground">
                    ✓ Saved — we&apos;ll send your PDF shortly
                  </span>
                )}
                {showDot && <span className="text-border">·</span>}
                {showMp3 && (
                  <button
                    onClick={handleDownloadMp3}
                    className="text-primary underline underline-offset-2 cursor-pointer bg-transparent border-none p-0"
                  >
                    Download MP3
                  </button>
                )}
              </div>
            );
          })()}
          <button
            onClick={() => {
              if (window.confirm("Start a new assessment? Your current profile will close — download the PDF or MP3 first if you want to keep them.")) {
                onReset();
              }
            }}
            className="mt-6 ml-3 py-2.5 px-6 bg-transparent text-muted-foreground border border-border-light rounded-lg font-sans text-[0.82rem] cursor-pointer transition-colors duration-200 hover:text-green hover:border-green active:scale-[0.97]"
          >
            Start New Assessment
          </button>
        </div>
      </FadeIn>
    </div>
  );
}
