import clsx from "clsx";
import CtaButtonList from "@/patterns/CtaButtonList";

export default function Heading({
  theme = "dark",
  centered = false,
  byline = "",
  headline,
  copy,
}: HeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-container-small text-light-dark dark:text-dark-lightest mb-8 flex flex-col md:mb-12 lg:mb-16",
        centered && "md:mx-auto md:items-center md:text-center",
      )}
    >
      <p className="mb-1 text-base font-semibold md:text-lg">{byline}</p>
      <h2 className="font-heading text-light-darkest dark:text-dark-white text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
        {headline}
      </h2>
      <p className="mt-2 text-base/relaxed md:text-lg/relaxed lg:mt-4">{copy}</p>

      <CtaButtonList
        theme={theme}
        ctas={[
          { href: "#", children: "Learn more" },
          { href: "#", children: "Learn more" },
        ]}
      />
    </div>
  );
}
