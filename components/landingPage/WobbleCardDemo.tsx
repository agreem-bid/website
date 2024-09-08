"use client";
import Image from "next/image";
import { WobbleCard } from "../ui/wobble-card";
import { EvervaultCardDemo } from "./EvervaultCardDemo";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-2 md:mx-auto md:w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Tablica Ofert Publicznych
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            W tej sekcji pojawi się tablica ogłoszeń umów publicznych, która
            umożliwi użytkownikom przeglądanie i dodawanie ofert związanych z
            wynajmem, pracą freelancerów, sprzedażą oraz innymi rodzajami umów.
            Dzięki tej funkcjonalności zyskasz dostęp do szerokiej gamy ofert i
            będziesz mógł łatwo zarządzać swoimi transakcjami na platformie.
          </p>
        </div>
        <Image
          src="/vercel.svg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Weryfikacja Niezmienności dokumentu
        </h2>
        <p className="mt-4 text-left text-base/6 text-neutral-200">
          W tej sekcji sprawdzisz czy hash dokumentów zgadza się z tym, który
          został zuploadowany do blockchainu.
        </p>
        <EvervaultCardDemo />
        {/* <FileUploadVerify /> */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Prześlij i Zarządzaj Swoimi Umowami w Jednym Miejscu
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            W tej sekcji znajdziesz intuicyjne narzędzie do przesyłania i
            zarządzania własnymi umowami, które pozwoli Ci na pełną kontrolę nad
            dokumentacją. Bez względu na to, czy jesteś freelancerem,
            właścicielem nieruchomości, czy przedsiębiorcą, możesz w łatwy
            sposób uploadować swoje kontrakty, organizować je i monitorować ich
            status w jednym miejscu. Automatyczne przypomnienia, integracje z
            blockchainem i przejrzysta historia edycji sprawią, że zarządzanie
            umowami stanie się szybkie, bezpieczne i wygodne jak nigdy dotąd.
            Zyskaj spokój ducha, wiedząc, że wszystkie Twoje umowy są
            bezpiecznie przechowywane i zawsze dostępne, kiedy ich potrzebujesz.
          </p>
        </div>
        <Image
          src="/vercel.svg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
