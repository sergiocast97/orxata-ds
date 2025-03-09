export default function TextOneBlock({ theme = "dark" }: TextBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-large mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
            <div>
              <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg font-semibold">
                Lorem ipsum dolor sit amet
              </p>
              <h2 className="font-heading text-5xl font-bold">Text Block Title</h2>
            </div>
            <div>
              <p className="text-light-dark dark:text-dark-lightest max-w-[50ch] text-lg/relaxed md:mt-0 lg:text-xl">
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
