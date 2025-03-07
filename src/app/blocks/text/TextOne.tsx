interface TextOneBlockProps {
  theme?: "light" | "dark";
  byline: string;
  headline: string;
  children: React.ReactNode;
}

export default function TextOneBlock({
  theme = "dark",
  byline = "",
  headline,
  children,
}: TextOneBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
            <div>
              <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg font-semibold">
                {byline}
              </p>
              <h2 className="font-heading text-5xl font-bold">{headline}</h2>
            </div>
            <div>
              <p className="text-light-dark dark:text-dark-lightest max-w-[50ch] text-lg/relaxed md:mt-0 lg:text-xl">
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
