import Link from "next/link";

export default function FooterColumn({ title, items }: { title: string; items: Array<string> }) {
  return (
    <div className="text-dark-white space-y-2">
      <p className="font-heading text-lg font-bold">{title}</p>
      <div className="text-dark-lightest flex flex-col items-start gap-1">
        {items.map((item, index) => (
          <Link key={index} href="#" className="text-base lg:text-lg">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
