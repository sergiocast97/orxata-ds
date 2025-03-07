interface TextTwoBlockProps {
  theme?: "light" | "dark";
  byline: string;
  headline: string;
  children: React.ReactNode;
}

export default function TextTwoBlock({
  theme = "dark",
  byline = "",
  headline,
  children,
}: TextTwoBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="mx-auto max-w-5xl gap-6 xl:gap-8">
            <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg font-semibold">
              {byline}
            </p>
            <h2 className="font-heading text-5xl font-bold">{headline}</h2>
            <p className="text-light-dark dark:text-dark-lightest mt-4 max-w-[50ch] text-lg/relaxed lg:text-xl">
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
