"use client";

import AnimatedWrapper from "@/components/animations/AnimatedWrapper";
import { Footer } from "@/components/app/Footer";
import useIsMobile from "@/hooks/useIsMobile.hook";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

// Dynamic loading komponentów z next/dynamic
const FloatingNavDemo = dynamic(
  () => import("@/components/landingPage/FloatingNavDemo"),
  { ssr: false }
);
const GoogleGeminiEffectDemo = dynamic(
  () => import("@/components/landingPage/GoogleGeminiEffectDemo"),
  { ssr: false }
);
const AppleCardsCarousel = dynamic(
  () => import("@/components/landingPage/AppleCardsCarousel"),
  { ssr: false }
);

const FlipWordsDemo = dynamic(
  () => import("@/components/landingPage/FlipWordsDemo"),
  { ssr: false }
);
const FeaturesGrid = dynamic(
  () => import("@/components/landingPage/FeaturesGrid"),
  { ssr: false }
);
const InfiniteMovingCardsDemo = dynamic(
  () => import("@/components/landingPage/InfiniteMovingCardsDemo"),
  { ssr: false }
);
const TimelineDemo = dynamic(
  () => import("@/components/landingPage/TimelineDemo"),
  { ssr: false }
);
const WobbleCardDemo = dynamic(
  () => import("@/components/landingPage/WobbleCardDemo"),
  { ssr: false }
);
const BackgroundBoxesDemo = dynamic(
  () => import("@/components/landingPage/BackgroundBoxesDemo"),
  { ssr: false }
);
const LampDemo = dynamic(() => import("@/components/ui/lamp"), { ssr: false });

export default function Home() {
  const isMobile = useIsMobile();
  const [isMounted, setIsMounted] = useState(false);

  // Ustawienie stanu `isMounted` po zamontowaniu komponentu
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="text-black dark:text-white">
            Loading navigation...
          </div>
        }
      >
        <FloatingNavDemo />
      </Suspense>

      <Suspense fallback={<div>Loading effects...</div>}>
        <GoogleGeminiEffectDemo />
      </Suspense>

      <Suspense fallback={<div>Loading carousel...</div>}>
        <AppleCardsCarousel />
      </Suspense>

      {/* Ładowanie kolejnych komponentów po zamontowaniu */}
      {isMounted && (
        <div className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
          <AnimatedWrapper>
            <Suspense fallback={<div>Loading flip words...</div>}>
              <FlipWordsDemo />
            </Suspense>
          </AnimatedWrapper>

          <AnimatedWrapper>
            <Suspense fallback={<div>Loading features grid...</div>}>
              <FeaturesGrid />
            </Suspense>
          </AnimatedWrapper>

          {!isMobile && (
            <AnimatedWrapper>
              <Suspense fallback={<div>Loading moving cards...</div>}>
                <InfiniteMovingCardsDemo />
              </Suspense>
            </AnimatedWrapper>
          )}

          <div className="mt-8">
            <Suspense fallback={<div>Loading lamp...</div>}>
              <LampDemo />
            </Suspense>
          </div>

          <Suspense fallback={<div>Loading timeline...</div>}>
            <TimelineDemo />
          </Suspense>
        </div>
      )}

      {isMounted && !isMobile && (
        <>
          <Suspense fallback={<div>Loading background boxes...</div>}>
            <BackgroundBoxesDemo />
          </Suspense>
          <AnimatedWrapper>
            <Suspense fallback={<div>Loading wobble card...</div>}>
              <WobbleCardDemo />
            </Suspense>
          </AnimatedWrapper>
        </>
      )}

      <Footer />
    </>
  );
}
