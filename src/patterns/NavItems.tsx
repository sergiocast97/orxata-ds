import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NavItems({ className = "" }: { className?: string }) {
  const items = [
    { name: "Services", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Contact", url: "#" },
    { name: "About", url: "#" },
  ];
  return (
    <nav className={cn("flex gap-6 lg:gap-8", className)}>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          className="text-light-darkest dark:text-dark-white text-lg font-semibold"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
