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
        ? "px-4 py-2 rounded-xl bg-linear-to-b from-theme-heading to-theme-copy text-theme-background btn-shadow active:to-theme-strong" // Dark
        : "px-4 py-2 rounded-xl bg-linear-to-b from-theme-heading to-theme-copy text-theme-background btn-shadow active:to-theme-strong" // Light
    ),
    outline: clsx(
      theme === "dark"
        ? "px-4 py-2 rounded-xl border-2 border-theme-heading text-theme-heading active:border-theme-weak " // Dark
        : "px-4 py-2 rounded-xl border-2 border-theme-heading text-theme-heading active:border-theme-weak " // Light
    ),
    link: clsx(
      theme === "dark"
        ? "text-theme-heading active:text-theme-weak underline decoration-2 underline-offset-4 " // Dark
        : "text-theme-heading active:text-theme-weak underline decoration-2 underline-offset-4 " // Light
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
