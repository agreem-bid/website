"use client";
import { cn } from "@/lib/utils";
import SignupFormDemo from "../example/signup-form-demo";
import { Boxes } from "../ui/background-boxes";

export default function BackgroundBoxesDemo() {
  return (
    <div
      id="airdrop"
      className="h-96 relative w-auto overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg my-12 mx-2 md:mx-0"
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mt-8")}>
        Zapisz się na Airdrop
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Podaj email, eby zgarnąć tokeny Agreem Bid przy starcie
      </p>

      <SignupFormDemo />
    </div>
  );
}
