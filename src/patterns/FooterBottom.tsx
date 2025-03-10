import { cn } from "@/lib/utils";

import SocialIconList from "@/patterns/SocialIconList";

export default function FooterBottom({ accent = false }: { accent?: boolean }) {
  return (
    <div className={cn(accent ? "bg-dark-dark" : "bg-dark-darkest", "text-dark-white")}>
      <div className="container flex flex-col items-center justify-between gap-6 py-12 md:flex-row md:gap-8">
        <p className="text-dark-lightest text-base font-semibold">
          © Copyright {new Date().getFullYear()} - Sergio Castillo
        </p>
        <SocialIconList />
      </div>
    </div>
  );
}
