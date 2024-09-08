// components/AnimatedWrapper.tsx
"use client";
import { cn } from "@/lib/utils"; // Utility do łączenia klas CSS
import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedWrapperProps = {
  children: ReactNode;
  className?: string; // Klasy CSS dla zewnętrznego kontenera
  initialY?: number; // Początkowe przesunięcie na osi Y
  delay?: number; // Opóźnienie animacji
  durationMultiplier?: number; // Mnożnik dla czasu trwania animacji w zależności od długości zawartości
};

export const AnimatedWrapper = ({
  children,
  className = "",
  initialY = 10, // Domyślne początkowe przesunięcie na osi Y
  delay = 0.35, // Domyślne opóźnienie animacji
  durationMultiplier = 15, // Domyślny mnożnik dla czasu trwania animacji
}: AnimatedWrapperProps) => {
  // Obliczenie czasu trwania animacji na podstawie długości tekstu, jeśli `children` to tekst

  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: delay,
        duration: 0.1 * durationMultiplier,
        ease: [0.25, 1, 0.4, 1],
      }}
      viewport={{ once: true }}
      className={cn(className)} // Dodaje klasy przekazane przez propsy
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
