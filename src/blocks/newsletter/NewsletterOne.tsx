import NewsletterForm from "@/patterns/NewsletterForm";

interface NewsletterBlockProps {
  theme: ThemeType;
}

export default function NewsletterOneBlock({ theme = "dark" }: NewsletterBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-lightest dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-small lg:max-w-container-large mx-auto">
            <div className="flex flex-col items-start gap-x-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-heading text-2xl font-bold md:text-3xl lg:text-4xl">
                  Sign up to our Newsletter
                </h2>
                <p className="text-dark-lightest mt-2 max-w-[44ch] text-base/relaxed md:text-lg/relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </p>
              </div>
              <NewsletterForm className="lg:mt-0" theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
