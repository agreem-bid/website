"use client";
import useIsMobile from "@/hooks/useIsMobile.hook";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const charsArray = wordsArray.flatMap((word, idx) =>
    idx < wordsArray.length - 1 ? [...word.split(""), " "] : [...word.split("")]
  );

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
        y: [-10, 0],
      },
      {
        duration: duration / charsArray.length + 0.5,
        delay: stagger(0.01),
        ease: [0.42, 0, 0.58, 1],
      }
    );
  }, [scope.current]);

  const renderChars = () => (
    <motion.div ref={scope}>
      {charsArray.map((char, idx) => (
        <motion.span
          key={char + idx}
          className="dark:text-white text-black opacity-0"
          style={{
            filter: filter ? "blur(5px)" : "none",
            display: char === " " ? "inline-block" : "inline", // Zachowanie spacji
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );

  if (isMobile) {
    return <div>{words}</div>;
  }

  return (
    <div className={cn("font-light", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderChars()}
        </div>
      </div>
    </div>
  );
};
