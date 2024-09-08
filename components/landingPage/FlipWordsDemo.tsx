import useIsMobile from "@/hooks/useIsMobile.hook";
import { FlipWords } from "../ui/flip-words";

export default function FlipWordsDemo() {
  const isMobile = useIsMobile();
  const words = ["bezpiecznych", "łatwiejszych", "szybszych", "lepszych"];

  if (isMobile)
    return (
      <div className="pb-8 py-8 flex justify-center items-center px-4">
        <div className="text-5xl md:text-6xl md:mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Odkryj przyszłość{" "}
          <span className="text-black dark:text-white">bezpiecznych</span>
          <br />
          transakcji w świecie naszych technologii.
        </div>
      </div>
    );

  return (
    <div className="pb-8 py-8 flex justify-center items-center px-4">
      <div className="text-5xl md:text-6xl md:mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Odkryj przyszłość <FlipWords words={words} />
        <br />
        transakcji w świecie naszych technologii.
      </div>
    </div>
  );
}
