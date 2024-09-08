import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

function ImageWithWrapper({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex relative flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Image src={src} alt={alt} fill objectFit="cover" />
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <BentoGrid className="max-w-4xl mx-auto px-2 md:px-0">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Blockchain i Web 3.0",
    description:
      "Przełomowe zmiany w cyfrowym świecie kształtowane przez blockchain.",
    header: (
      <ImageWithWrapper
        src="/landing-page/blockchain-technology-background-gradient-blue.webp"
        alt="Blockchain ilustration"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "IPFS i Arweave",
    description:
      "Nowa era przechowywania danych z decentralizacją i pełnym bezpieczeństwem.",
    header: (
      <ImageWithWrapper
        src="/landing-page/3d-abstract-connections-background-networking-connecting-lines-dots.webp"
        alt="IPFS ilustration"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hashowanie Dokumentów i Weryfikacja Autentyczności",
    description:
      "Technologia haszowania jako gwarancja integralności dokumentów.",
    header: (
      <ImageWithWrapper
        src="/landing-page/blockchain-technology-background-gradient-blue (1).webp"
        alt="IPFS ilustration"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tablica ofert publicznych i Zbiórek",
    description:
      "Transparentne finansowanie i zarządzanie zbiórkami na blockchainie.",
    header: (
      <ImageWithWrapper
        src="/landing-page/165292.webp"
        alt="IPFS ilustration"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Arbitraż przy Sporach",
    description: "Sprawiedliwe rozwiązywanie konfliktów bez pośredników.",
    header: (
      <ImageWithWrapper
        src="/landing-page/129364.webp"
        alt="IPFS ilustration"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smartcontrakty dla Umów",
    description:
      "Automatyzacja i bezpieczeństwo umów dzięki inteligentnym kontraktom.",
    header: (
      <ImageWithWrapper
        src="/landing-page/DALL·E 2024-09-07 17.03.21 - Create an illustration representing the process of smart contracts as self-executing programs. Central element_ a smart contract icon (open document w.webp"
        alt="IPFS ilustration"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bezpieczeństwo przez Zamrożenie Środków",
    description: "Gwarancja ochrony finansów w każdej transakcji.",
    header: (
      <ImageWithWrapper
        src="/landing-page/DALL·E 2024-09-08 12.48.21 - An illustration depicting the concept of secure fund freezing in a financial or blockchain context. The image should show a digital vault or a safe wi.webp"
        alt="IPFS ilustration"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
