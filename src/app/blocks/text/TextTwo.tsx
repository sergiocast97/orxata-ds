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
      <div className="bg-theme-000 dark:bg-theme-900 text-theme-900 dark:text-theme-000">
        <div className="container py-8 lg:py-12">
          <div className="mx-auto max-w-5xl gap-6 xl:gap-8">
            <p className="mb-1 font-semibold text-lg text-theme-600 dark:text-theme-300">
              {byline}
            </p>
            <h2 className="text-5xl font-bold font-heading">{headline}</h2>
            <p className="mt-4 text-lg/relaxed lg:text-xl text-theme-600 dark:text-theme-300 max-w-[50ch]">
              {children}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
