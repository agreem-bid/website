import FeatureBlock from "./FeatureBlock";

export default function SmartContracts() {
  return (
    <>
      <FeatureBlock
        title="Smart kontrakty to samowykonujące się programy,"
        description=" które automatycznie egzekwują warunki umowy po spełnieniu określonych kryteriów. Dzięki temu eliminuje się potrzebę ręcznej obsługi umów, co znacząco przyspiesza realizację zobowiązań i minimalizuje ryzyko błędów."
        imageSrc="/landing-page/DALL·E 2024-09-07 17.03.21 - Create an illustration representing the process of smart contracts as self-executing programs. Central element_ a smart contract icon (open document w.webp"
        imageAlt="Co to smart Kontrakty"
      />
      <FeatureBlock
        title="Redukcja Kosztów i Brak Pośredników:"
        description=" Tradycyjne umowy często wymagają udziału pośredników, takich jak prawnicy, notariusze czy instytucje finansowe, co generuje dodatkowe koszty. Smart kontrakty działają bez udziału stron trzecich, co pozwala na znaczną redukcję kosztów związanych z realizacją umowy."
        imageSrc="/landing-page/pexels-rdne-7563688.webp"
        imageAlt="Redukcja kosztów"
      />
      <FeatureBlock
        title="Smart kontrakty są zabezpieczone kryptograficznie i działają na zdecentralizowanej sieci blockchain,"
        description=" co znacząco zwiększa poziom bezpieczeństwa w porównaniu z tradycyjnymi umowami. Dodatkowo, dane w smart kontraktach są chronione przed nieuprawnionym dostępem i manipulacją."
      />
    </>
  );
}
