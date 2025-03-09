import Link from "next/link";

export default function NavItems() {
  const items = [
    { name: "Services", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Contact", url: "#" },
    { name: "About", url: "#" },
  ];
  return (
    <nav className="hidden gap-6 md:flex lg:gap-8">
      {items.map((item) => (
        <Link key={item.name} href={item.url} className="text-light-darkest dark:text-dark-white text-lg font-semibold">
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
