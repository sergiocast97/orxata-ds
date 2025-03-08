import clsx from "clsx";
import ButtonLinkList from "./ButtonLinkList";

export default function Heading({
  theme = "dark",
  centered = false,
  byline = "",
  headline,
  copy,
}: Heading) {
  return (
    <div
      className={clsx(
        "max-w-container-small mb-8 flex flex-col md:mb-12 lg:mb-16",
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

      <ButtonLinkList
        theme={theme}
        ctas={[
          { href: "#", children: "Learn more" },
          { href: "#", children: "Learn more" },
        ]}
      />
    </div>
  );
}
