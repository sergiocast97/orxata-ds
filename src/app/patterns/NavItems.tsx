import Link from "next/link";

export default function NavItems() {
  const items = [
    { name: "Services", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Contact", url: "#" },
    { name: "About", url: "#" },
  ];
  return (
    <nav className="hidden md:flex gap-6 lg:gap-8">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          className="text-lg font-semibold text-theme-900 dark:text-theme-000"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
