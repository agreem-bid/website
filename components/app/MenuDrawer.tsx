import * as React from "react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { IconMenu2 } from "@tabler/icons-react";
import ThemeSwitch from "../landingPage/ThemeSwitch";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild className="block md:hidden lg:hidden">
        <IconMenu2 />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="opacity-75">Agreem Bid</DrawerTitle>
            <DrawerDescription>Menu</DrawerDescription>
          </DrawerHeader>

          <div className="items-center gap-4 flex flex-col my-8">
            <div className="text-base font-medium text-black dark:text-white cursor-pointer hover:opacity-80">
              Zweryfikuj
            </div>
            <div className="text-base font-medium text-black dark:text-white cursor-pointer hover:opacity-80">
              Oferty
            </div>
            <button className="border text-base font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-8 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mb-24">
              <span>Dodaj</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </button>
            <div className="opacity-60">Polski</div>
            <div className="absolute top-5 right-5">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
