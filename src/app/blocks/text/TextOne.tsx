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
      <div className="bg-theme-000 dark:bg-theme-900 text-theme-900 dark:text-theme-000">
        <div className="container py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl gap-4 lg:gap-6 xl:gap-8">
            <div>
              <p className="mb-1 font-semibold text-lg text-theme-600 dark:text-theme-300">
                {byline}
              </p>
              <h2 className="text-5xl font-bold font-heading">{headline}</h2>
            </div>
            <div>
              <p className="md:mt-0 text-lg/relaxed lg:text-xl text-theme-600 dark:text-theme-300 max-w-[50ch]">
                {children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
