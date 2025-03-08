import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ButtonLink from "@/app/components/ButtonLink";
import clsx from "clsx";

export default function Heading({
  theme = "dark",
  centered = false,
  byline = "",
  headline,
  copy,
  ctas,
}: Heading) {
  return (
    <div
      className={clsx(
        "mb-8 flex max-w-[592px] flex-col md:mb-12 lg:mb-16",
        centered && "md:mx-auto md:items-center md:text-center",
      )}
    >
      <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg/relaxed font-semibold">
        {byline}
      </p>
      <h2 className="font-heading text-light-darkest dark:text-dark-white text-4xl font-bold text-balance md:text-5xl">
        {headline}
      </h2>
      <p className="text-light-dark dark:text-dark-lightest mt-4 text-base md:text-lg/relaxed">
        {copy}
      </p>
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
    </div>
  );
}
