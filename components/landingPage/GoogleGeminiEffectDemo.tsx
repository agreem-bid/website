"use client";
import useIsMobile from "@/hooks/useIsMobile.hook";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

export default function GoogleGeminiEffectDemo() {
  const isMobile = useIsMobile();
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Zawsze deklarujemy hooki
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  // Deklarujemy statyczne wartości dla mobilnych jako MotionValue
  const staticPathLength = useMotionValue(1.2);

  // Ustawiamy wartości hooków w zależności od urządzenia
  const pathLengths = isMobile
    ? [
        staticPathLength,
        staticPathLength,
        staticPathLength,
        staticPathLength,
        staticPathLength,
      ]
    : [
        pathLengthFirst,
        pathLengthSecond,
        pathLengthThird,
        pathLengthFourth,
        pathLengthFifth,
      ];

  return (
    <div
      className="h-[100vh] md:h-[400vh] bg-white dark:bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-12 md:pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        title="Zyskaj bezpieczeństwo umowy"
        description="Wykorzystaj smart kontrakty do automatyzacji umów i wyeliminuj potrzebę pośredników, zredukuj koszty i zwiększ zaufanie między stronami."
      />
    </div>
  );
}
