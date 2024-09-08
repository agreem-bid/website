"use client";
import React, { useEffect, useRef } from "react";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import useIsMobile from "@/hooks/useIsMobile.hook";
import {
  IconContract,
  IconFingerprint,
  IconShieldLock,
} from "@tabler/icons-react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export function BlockChainNFTSmartcontractCards() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8 -translate-y-36">
        <Card
          title="BlockChain"
          icon={<IconShieldLock size={46} />}
          link={"https://www.oracle.com/pl/blockchain/what-is-blockchain/"}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[
              [34, 139, 34],
              [50, 205, 50],
            ]}
          />
        </Card>
        <Card
          title="NFT"
          icon={<IconFingerprint size={46} />}
          link={
            "https://www.forbes.com/advisor/investing/cryptocurrency/nft-non-fungible-token/"
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="dark:bg-black bg-violet-600"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
        </Card>
        <Card
          title="SmartContracts"
          icon={<IconContract size={46} />}
          link={
            "https://www.ibm.com/topics/smart-contracts#How+smart+contracts+work"
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  link,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  link: string;
  children?: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });
  const [hovered, setHovered] = React.useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isInView && isMobile) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [isMobile, isInView]);

  function handleClick(link: string) {
    window.open(link, "_blank");
  }

  return (
    <div
      ref={ref}
      onClick={() => handleClick(link)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile ? (
        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        </div>
      ) : (
        <h2 className="text-slate-100 text-xl relative z-10 mt-4  font-bold transition duration-200">
          {title}
        </h2>
      )}
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
