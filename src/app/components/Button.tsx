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
  const baseStyles =
    "inline-flex items-center gap-1 transition focus:outline-0 text-lg font-semibold";
  const typeStyles = {
    solid: clsx(
      theme === "dark"
        ? "px-4 py-2 rounded-xl bg-linear-to-b from-theme-900 to-theme-600 text-theme-000 btn-shadow active:to-theme-strong" // Dark
        : "px-4 py-2 rounded-xl bg-linear-to-b from-theme-300 to-theme-000 text-theme-900 btn-shadow active:to-theme-strong" // Light
    ),
    outline: clsx(
      theme === "dark"
        ? "px-4 py-2 rounded-xl border-2 border-theme-900 text-theme-900 active:border-theme-weak " // Dark
        : "px-4 py-2 rounded-xl border-2 border-theme-000 text-theme-000 active:border-theme-weak " // Light
    ),
    link: clsx(
      theme === "dark"
        ? "text-theme-900 active:text-theme-600 underline decoration-2 underline-offset-8 " // Dark
        : "text-theme-000 active:text-theme-300 underline decoration-2 underline-offset-8 " // Light
    ),
  };

  return (
    <Link
      href={href}
      target={newTab ? "_blank" : ""}
      className={clsx(baseStyles, typeStyles[type], className)}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
