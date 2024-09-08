"use client";
import {
  IconCircleDashedCheck,
  IconHome,
  IconLanguage,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import { DrawerDemo } from "../app/MenuDrawer";
import { FloatingNav } from "../ui/floating-navbar";
import { PlaceholdersAndVanishInputDemo } from "./PlaceholdersAndVanishInputDemo";
import ThemeSwitch from "./ThemeSwitch";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Zweryfikuj",
      link: "/",
      icon: (
        <IconCircleDashedCheck className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Oferty",
      link: "/",
      icon: (
        <IconLayoutDashboard className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="flex w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md items-center p-2">
      {/* Logo po lewej stronie */}
      <div className="text-xl font-semibold text-black dark:text-white p-2 hover:opacity-80 w-1/2 md:w-auto">
        Agreem Bid
      </div>

      {/* Demo na środku z pozycjonowaniem absolutnym */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
        <PlaceholdersAndVanishInputDemo />
      </div>

      {/* Pozostałe elementy po prawej stronie */}
      <div className="items-center gap-4 ml-auto hidden md:flex">
        <div className="w-8 h-8 text-black dark:text-white cursor-pointer flex items-center align-middle justify-center rounded-xl hover:opacity-80">
          <IconLanguage stroke={1.5} />
        </div>

        <div className="w-8 h-8 cursor-pointer flex items-center align-middle justify-center rounded-xl hover:opacity-80">
          <ThemeSwitch />
        </div>

        <div className="text-sm font-medium text-black dark:text-white cursor-pointer hover:opacity-80">
          Zweryfikuj
        </div>
        <div className="text-sm font-medium text-black dark:text-white cursor-pointer hover:opacity-80">
          Oferty
        </div>
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <span>Dodaj</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </div>
      <div className="w-1/2 md:w-auto justify-end flex">
        <DrawerDemo />
      </div>
    </div>
  );
};
