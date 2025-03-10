import CtaButtonList from "@/patterns/CtaButtonList";

export default function CtaTwoBlock({ theme = "dark" }: CtaBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-small lg:max-w-container-medium bg-dark-darkest dark:bg-dark-dark border-dark-medium rounded-large border-box mx-auto border">
            <div className="flex flex-col items-center px-4 py-6 text-center md:px-8 md:py-12">
              <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
                Call to Action Title
              </h2>
              <p className="text-dark-lightest mt-2 max-w-[44ch] text-base/relaxed md:text-lg/relaxed lg:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore.
              </p>
              <CtaButtonList
                className="items-center justify-center"
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
