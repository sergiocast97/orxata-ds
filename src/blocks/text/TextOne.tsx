export default function TextOneBlock({ theme = "dark" }: TextBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-small lg:max-w-container-large mx-auto grid gap-2 lg:grid-cols-2 lg:gap-8">
            <div>
              <p className="text-light-dark dark:text-dark-lightest mb-1 text-base font-semibold md:text-lg">
                Lorem ipsum dolor sit amet
              </p>
              <h2 className="font-heading text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
                Text Block Title
              </h2>
            </div>
            <div>
              <p className="text-light-dark dark:text-dark-lightest max-w-container-small text-base/relaxed md:text-lg/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus ligula,
                malesuada eget neque accio, condimentum pulvinar erat. Proin molestie varius urna
                non consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
