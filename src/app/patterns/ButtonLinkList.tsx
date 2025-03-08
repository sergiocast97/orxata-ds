import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ButtonLink from "@/app/components/ButtonLink";

export default function ButtonLinkList({
  ctas,
  theme = "dark",
}: {
  ctas: ButtonLinkList;
  theme: Theme;
}) {
  return (
    <div className="mt-4 flex flex-wrap gap-4 md:mt-6 md:gap-y-6">
      {ctas?.map((cta, index) => (
        <ButtonLink
          href={cta.href}
          type={index == 0 ? "solid" : "outline"}
          theme={theme}
          key={index}
        >
          {cta.children}
          <ArrowRightIcon className="size-5" />
        </ButtonLink>
      ))}
    </div>
  );
}
