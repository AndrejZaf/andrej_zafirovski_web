// components/Typewriter.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

type Phase = "typing" | "pausing" | "deleting";

type TypewriterProps = {
  words: string[];
  typingMs?: number; // average ms per typed character
  deleteMs?: number; // average ms per deleted character
  pauseMs?: number; // pause after a full word
  loop?: boolean;
  className?: string;
  caretClassName?: string;
  ariaLabel?: string; // screen reader label; defaults to joined words
  jitter?: number; // 0..0.5 -> randomness around timing (e.g. 0.25 = ±25%)
};

export default function Typewriter({
  words,
  typingMs = 60,
  deleteMs = 40,
  pauseMs = 1200,
  loop = true,
  className = "font-normal",
  caretClassName = "inline-block w-[1ch] text-current",
  ariaLabel,
  jitter = 0.25,
}: TypewriterProps) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = React.useState<Phase>("typing");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0); // number of visible chars

  const currentWord = words[wordIndex] ?? "";

  // Helper to add a little randomness to the cadence
  const withJitter = React.useCallback(
    (base: number) => {
      if (reduce || jitter <= 0) return base;
      const delta = base * jitter;
      return Math.max(10, Math.round(base + (Math.random() * 2 - 1) * delta));
    },
    [reduce, jitter]
  );

  React.useEffect(() => {
    if (reduce) {
      // Respect reduced motion: just show the first word and bail
      return;
    }

    let timeout: number | undefined;

    switch (phase) {
      case "typing": {
        const done = subIndex >= currentWord.length;
        if (!done) {
          timeout = window.setTimeout(
            () => setSubIndex((i) => i + 1),
            withJitter(typingMs)
          );
        } else {
          timeout = window.setTimeout(() => setPhase("pausing"), pauseMs);
        }
        break;
      }
      case "pausing": {
        // After pause, start deleting
        timeout = window.setTimeout(
          () => setPhase("deleting"),
          withJitter(250)
        );
        break;
      }
      case "deleting": {
        if (subIndex > 0) {
          timeout = window.setTimeout(
            () => setSubIndex((i) => i - 1),
            withJitter(deleteMs)
          );
        } else {
          // Move to next word (or stop if not looping)
          const nextIdx = wordIndex + 1;
          if (nextIdx < words.length) {
            setWordIndex(nextIdx);
            setPhase("typing");
          } else if (loop) {
            setWordIndex(0);
            setPhase("typing");
          } else {
            setPhase("pausing"); // finished
          }
        }
        break;
      }
    }

    return () => clearTimeout(timeout);
  }, [
    phase,
    subIndex,
    currentWord.length,
    typingMs,
    deleteMs,
    pauseMs,
    withJitter,
    words.length,
    wordIndex,
    loop,
    reduce,
  ]);

  // If reduced motion, show first word without animation
  if (reduce) {
    return (
      <span className={className} aria-label={ariaLabel ?? words.join(", ")}>
        {words[0] ?? ""}
      </span>
    );
  }

  const visible = currentWord.slice(0, subIndex);

  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-live="polite"
      aria-label={ariaLabel ?? words.join(", ")}
    >
      <span>{visible}</span>
      {/* Blinking caret using Framer Motion */}
      <motion.span
        className={caretClassName}
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  );
}
