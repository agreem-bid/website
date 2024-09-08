// components/AnimatedTextBlock.tsx
"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

type AnimatedTextBlockProps = {
  words: string;
  className?: string;
  durationMultiplier?: number; // Opcjonalny mnożnik dla czasu trwania animacji
  delay?: number;
};

export const AnimatedTextBlock = ({
  words,
  className = "",
  durationMultiplier = 40, // Domyślny mnożnik dla czasu trwania animacji
  delay = 0.1,
}: AnimatedTextBlockProps) => {
  return (
    <motion.div
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: delay ?? 0.1,
        duration: 0.1 * durationMultiplier,
        ease: [0.25, 1, 0.4, 1],
      }}
      className={className}
    >
      <TextGenerateEffect words={words} />
    </motion.div>
  );
};

export default AnimatedTextBlock;
