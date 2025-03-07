import Link from "next/link";
import clsx from "clsx";

interface ButtonLinkProps {
  children: React.ReactNode; // Button Content
  href: string; // URL
  newTab?: boolean; // Opens in new tab?
  type?: "solid" | "outline" | "link"; // Button type
  theme?: "light" | "dark"; // Colour theme
  className?: string; // Optional classes
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  href,
  newTab = false,
  type = "solid",
  theme = "light",
  className = "",
}) => {
  // Button's base styles
  const baseStyles =
    "inline-flex items-center gap-1 transition focus:outline-0 text-lg font-semibold";

  // Styles specific to button types
  const typeStyles = {
    // Themed solid buttons
    solid: clsx(
      "px-4 py-2 rounded-xl bg-linear-to-b btn-shadow active:to-theme-strong",
      theme === "light"
        ? " from-theme-900 to-theme-600 text-theme-000 " // Light
        : " from-theme-300 to-theme-000 text-theme-900", // Dark
    ),
    // Themed outline buttons
    outline: clsx(
      "px-4 py-2 rounded-xl border-2 active:border-theme-weak",
      theme === "light"
        ? " border-theme-900 text-theme-900 " // Light
        : " border-theme-000 text-theme-000 ", // Dark
    ),
    // Themed link buttobs
    link: clsx(
      "underline decoration-2 underline-offset-8",
      theme === "light"
        ? "text-theme-900 active:text-theme-600 " // Light
        : "text-theme-000 active:text-theme-300 ", // Dark
    ),
  };

  return (
    <Link
      href={href}
      target={newTab ? "_blank" : ""}
      // Join base, type and custom classes
      className={clsx(baseStyles, typeStyles[type], className)}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
