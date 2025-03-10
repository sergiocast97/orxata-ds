import Link from "next/link";
import clsx from "clsx";

export default function CtaButton({
  children,
  href,
  newTab = false,
  type = "solid",
  theme = "light",
  className = "",
}: CtaButtonProps) {
  // Button's base styles
  const baseStyles =
    "inline-flex text-nowrap items-center gap-1 transition focus:outline-0 text-base md:text-lg font-semibold";

  // Styles specific to button types
  const buttonTypeStyles = {
    // Themed solid buttons
    solid: clsx(
      "px-4 py-2 rounded-medium bg-linear-to-b btn-shadow ",
      theme === "light"
        ? " from-neutral-900 to-neutral-600 text-neutral-000 active:to-neutral-500 " // Light
        : " from-neutral-300 to-neutral-000 text-neutral-900 active:to-neutral-400", // Dark
    ),
    // Themed outline buttons
    outline: clsx(
      "px-4 py-2 rounded-medium border-2 active:border-neutral-weak",
      theme === "light"
        ? " border-neutral-900 text-neutral-900 " // Light
        : " border-neutral-000 text-neutral-000 ", // Dark
    ),
    // Themed link buttobs
    link: clsx(
      "p-2 underline decoration-2 underline-offset-8",
      theme === "light"
        ? "text-light-darkest active:text-neutral-600 " // Light
        : "text-dark-white active:text-neutral-050 ", // Dark
    ),
  };

  return (
    <Link
      href={href}
      target={newTab ? "_blank" : ""}
      // Join base, type and custom classes
      className={clsx(baseStyles, buttonTypeStyles[type], className)}
    >
      {children}
    </Link>
  );
}
