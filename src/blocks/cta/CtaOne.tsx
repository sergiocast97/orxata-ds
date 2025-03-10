import CtaButtonList from "@/patterns/CtaButtonList";

export default function CtaOneBlock({ theme = "dark" }: CtaBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-dark-darkest dark:bg-dark-dark text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-small lg:max-w-container-large mx-auto">
            <div className="lg:items-left flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
              <div className="">
                <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
                  Call to Action Title
                </h2>
                <p className="text-dark-lightest mt-2 max-w-[44ch] text-base/relaxed md:text-lg/relaxed lg:mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </p>
              </div>
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
