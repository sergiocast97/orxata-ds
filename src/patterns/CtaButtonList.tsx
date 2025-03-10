import CtaButton from "@/components/CtaButton";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CtaButtonList({
  ctas,
  theme = "dark",
  className = "",
}: {
  ctas: CtaButtonListProps;
  theme: ThemeType;
  className?: string;
}) {
  return (
    <div
      className={`mt-4 flex flex-shrink-0 flex-wrap items-baseline gap-4 md:mt-6 md:gap-x-6 ${className}`}
    >
      {ctas?.map((cta, index) => (
        <CtaButton
          href={cta.href}
          type={cta.type ? cta.type : index === 0 ? "solid" : "outline"}
          theme={theme}
          key={index}
        >
          {cta.children}
          {index === 0 ? <ArrowRightIcon className="size-5" /> : ""}
        </CtaButton>
      ))}
    </div>
  );
}
