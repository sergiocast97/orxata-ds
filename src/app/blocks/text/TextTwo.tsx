export default function TextTwoBlock({ theme = "dark" }: TextBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <div className="max-w-container-large mx-auto gap-6 xl:gap-8">
            <p className="text-light-dark dark:text-dark-lightest mb-1 text-lg font-semibold">
              Lorem ipsum dolor sit amet
            </p>
            <h2 className="font-heading text-5xl font-bold">Text Block Title</h2>
            <p className="text-light-dark dark:text-dark-lightest mt-4 max-w-[50ch] text-lg/relaxed lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus ligula,
              malesuada eget neque accio, condimentum pulvinar erat. Proin molestie varius urna non
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
