"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden mt-8">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Potrzebuję pewności, że dostanę zapłatę za wykonane zlecenie bez ryzyka, że klient się wycofa. Szukam sposobu na zabezpieczenie mojej pracy.",
    name: "Anna Kowalska",
    title: "Freelancerzy i Kontraktorzy",
  },
  {
    quote:
      "Mam dość sporów związanych ze zwrotem kaucji i opóźnionych płatności za najem. Potrzebuję automatyzacji i lepszych zabezpieczeń finansowych.",
    name: "Tomasz Nowak",
    title: "Wynajmujący i Najemcy",
  },
  {
    quote:
      "Muszę mieć pewność, że dostawcy spełniają warunki umowy, a płatności są realizowane dopiero po dostarczeniu towaru zgodnego z zamówieniem.",
    name: "Marta Zielińska",
    title: "Menedżerowie Łańcucha Dostaw",
  },
  {
    quote:
      "Chcemy zautomatyzować proces zawierania umów i uniknąć kosztownych sporów. Szukamy bezpiecznego rozwiązania, które uprości nam zarządzanie kontraktami.",
    name: "Paweł Wiśniewski",
    title: "Małe i Średnie Firmy",
  },
  {
    quote:
      "Potrzebuję narzędzia, które zabezpieczy moje prawa autorskie i automatycznie wypłaci tantiemy za korzystanie z moich dzieł.",
    name: "Ewa Malinowska",
    title: "Twórcy Cyfrowi i Licencjobiorcy",
  },
  {
    quote:
      "Chciałbym uprościć proces sprzedaży nieruchomości i upewnić się, że wszystkie warunki są egzekwowane bez potrzeby korzystania z notariusza.",
    name: "Jan Wróbel",
    title: "Właściciele Nieruchomości",
  },
];
