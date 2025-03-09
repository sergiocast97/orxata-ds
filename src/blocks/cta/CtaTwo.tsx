import CtaButtonList from "@/patterns/CtaButtonList";

export default function CtaTwoBlock({ theme = "dark" }: CtaBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-medium bg-dark-darkest dark:bg-dark-dark border-dark-medium rounded-large mx-auto border">
            <div className="flex flex-col items-center px-8 py-12 text-center">
              <h2 className="font-heading text-4xl font-bold md:text-5xl">Call to Action Title</h2>
              <p className="text-dark-lightest mt-4 max-w-[44ch] text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </p>
              <CtaButtonList
                theme="dark"
                ctas={[
                  { href: "#", children: "Learn more" },
                  { href: "#", children: "Learn more" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
