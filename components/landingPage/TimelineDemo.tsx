import { Timeline } from "@/components/ui/timeline";
import { RocketIcon } from "@radix-ui/react-icons";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ArbitrageInfo } from "./ArbitrageInfo";
import { Changelog } from "./Changelog";
import { TokenInfo } from "./TokenInfo";
import { TokenomicsChart } from "./TokenomicsChat";

export default function TimelineDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const data = [
    {
      title: "2024",
      content: (
        <div ref={ref}>
          <TokenInfo />
          <div className="flex flex-col gap-4">
            {isInView && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <TokenomicsChart />
              </motion.div>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <ArbitrageInfo />
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src="/vercel.svg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/vercel.svg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/vercel.svg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/vercel.svg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <Changelog />
          <Alert className="mt-8">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle>Głowy do góry!</AlertTitle>
            <AlertDescription>
              Nieważne jak wolno idziesz, ważne że nie przestajesz.
            </AlertDescription>
          </Alert>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
