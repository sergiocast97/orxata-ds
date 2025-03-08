import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ButtonLink from "@/app/components/ButtonLink";

export default function Heading({ theme = "dark", byline = "", headline, copy, ctas }: Heading) {
  return (
    <div className="mb-8 md:mb-12 lg:mb-16">
      <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg/relaxed font-semibold">
        {byline}
      </p>
      <h2 className="font-heading text-light-darkest dark:text-dark-white text-4xl font-bold text-balance md:text-5xl lg:text-6xl">
        {headline}
      </h2>
      <p className="text-light-dark dark:text-dark-lightest mt-4 max-w-[48ch] text-base md:text-lg/relaxed">
        {copy}
      </p>
      <div className="flex=wrap mt-4 flex gap-4 md:mt-6 md:gap-y-6">
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
    </div>
  );
}
