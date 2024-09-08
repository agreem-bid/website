"use client";
import useIsMobile from "@/hooks/useIsMobile.hook";
import { useTheme } from "next-themes";
import { SparklesCore } from "../ui/sparkles";

export function RoadMapHeading() {
  const { resolvedTheme } = useTheme();
  const isMobile = useIsMobile();
  return (
    <div className="h-auto w-full bg-transparent dark:bg-neutral-950flex flex-col items-center justify-center overflow-hidden rounded-md -translate-y-16 md:-translate-y-32 absolute">
      <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-black dark:text-white relative z-20">
        Roadmap
      </h1>
      {!isMobile && (
        <div className="w-100% h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor={resolvedTheme === "dark" ? "#FFFFFF" : "#000000"}
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-white dark:bg-neutral-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      )}
    </div>
  );
}
