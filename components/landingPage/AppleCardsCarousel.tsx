"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const SmartContracts = dynamic(
  () => import("@/components/landingPage/cardCarouselContent/SmartContracts"),
  { ssr: false }
);

export default function AppleCardsCarousel() {
  // const router = useRouter();

  const data = [
    {
      category: "Smart Kontrakty",
      title: "Zautomatyzuj procesy umowne",
      src: "/landing-page/pexels-pixabay-261679.webp",
      content: (
        <Suspense fallback={<div>Loading Smart Contracts...</div>}>
          <SmartContracts />
        </Suspense>
      ),
    },
    {
      category: "Tokenomia",
      title: "Niezależne Głosowania przy sporach",
      src: "/landing-page/pexels-jibarofoto-2014775.webp",
      onClick: () => alert("Przekierowanie"),
    },
    {
      category: "Umowy Najmu",
      title: "Okryj moc Smart Kontraktów w najmie",
      src: "/landing-page/pexels-jessica-bryant-592135-1370704.webp",
    },

    {
      category: "Airdrop",
      title: "Tokeny Governance dla Pierwszych",
      src: "/landing-page/2148993002.webp",
      // onclick: () => router.push("#airdrop"),
      onClick: () => alert("Przekierowanie do #airdrop na dole"),
    },
    {
      category: "Zabezpieczenie",
      title: "Umowy Freelancerów i Kontraktorów",
      src: "/landing-page/pexels-tranmautritam-60740.webp",
    },
    {
      category: "Sprzedaż",
      title: "Zabezpieczenie Przesyłki przez Kaucję",
      src: "/landing-page/pexels-tima-miroshnichenko-6169029.webp",
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pb-2">
      <Carousel items={cards} />
    </div>
  );
}
