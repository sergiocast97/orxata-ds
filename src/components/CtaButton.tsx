import Link from "next/link";

import { cn } from "@/lib/utils";

export default function CtaButton({
  children,
  href,
  newTab = false,
  type = "solid",
  theme = "light",
  className = "",
}: CtaButtonProps) {
  const buttonTypeStyles = {
    // Themed solid buttons
    solid: cn(
      "rounded-medium btn-shadow bg-linear-to-b px-4 py-2",
      theme === "light"
        ? "text-neutral-000 from-neutral-900 to-neutral-600 active:to-neutral-500" // Light
        : "to-neutral-000 from-neutral-300 text-neutral-900 active:to-neutral-400", // Dark
    ),
    // Themed outline buttons
    outline: cn(
      "rounded-medium active:border-neutral-weak border-box border-2 px-4 py-2",
      theme === "light"
        ? "border-neutral-900 text-neutral-900" // Light
        : "border-neutral-000 text-neutral-000", // Dark
    ),
    // Themed link buttobs
    link: cn(
      "p-2 underline decoration-2 underline-offset-8",
      theme === "light"
        ? "text-light-darkest active:text-neutral-600" // Light
        : "text-dark-white active:text-neutral-050", // Dark
    ),
  };

  return (
    <Link
      href={href}
      target={newTab ? "_blank" : ""}
      // Join base, type and custom classes
      className={cn(
        "inline-flex items-center gap-1 text-base font-semibold text-nowrap transition focus:outline-0 md:text-lg",
        buttonTypeStyles[type],
        className,
      )}
    >
      {children}
    </Link>
  );
}
