import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 w-24 justify-center",
  {
    variants: {
      variant: {
        todo: "bg-slate-600 border-transparent text-white shadow", // Do zrobienia
        inprogress: "bg-blue-500 border-transparent text-white shadow", // W trakcie
        done: "bg-green-600 text-white shadow", // Zrobione
      },
    },
    defaultVariants: {
      variant: "todo",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function StatusBadge({
  className,
  status,
  ...props
}: BadgeProps & { status: string }) {
  // Mapowanie status na odpowiedni variant
  const variant =
    status.toLowerCase() === "do zrobienia"
      ? "todo"
      : status.toLowerCase() === "w trakcie"
      ? "inprogress"
      : status.toLowerCase() === "zrobione"
      ? "done"
      : "todo";

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {status}
    </div>
  );
}

export { badgeVariants, StatusBadge };
