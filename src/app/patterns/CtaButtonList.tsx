import CtaButton from "@/app/components/CtaButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function CtaButtonList({
  ctas,
  theme = "dark",
}: {
  ctas: CtaButtonListProps;
  theme: ThemeType;
}) {
  return (
    <div className="mt-4 flex grow flex-wrap gap-4 md:mt-6 md:gap-y-6">
      {ctas?.map((cta, index) => (
        <CtaButton
          href={cta.href}
          type={index == 0 ? "solid" : "outline"}
          theme={theme}
          key={index}
        >
          {cta.children}
          <ArrowRightIcon className="size-5" />
        </CtaButton>
      ))}
    </div>
  );
}
