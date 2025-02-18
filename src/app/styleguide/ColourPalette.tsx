export default function ColourPalette() {
  const content = [
    { name: 'Text Heading', class: 'bg-theme-heading' },
    { name: 'Text Copy', class: 'bg-theme-copy' },
    { name: 'Stroke Strong', class: 'bg-theme-strong' },
    { name: 'Stroke Weak', class: 'bg-theme-weak' },
    { name: 'Filling', class: 'bg-theme-filling' },
    { name: 'Background', class: 'bg-theme-background' },
  ];
  return (
    <>
      <div className="container">
        <h3 className="mb-8 head-h2 text-theme-heading">Colour Palette</h3>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {content.map((element, index) => {
            return (
              <div key={index}>
                <div
                  className={` ${element.class} border border-theme-weak/50 size-32 rounded-theme-md `}
                ></div>

                <p className="mt-1 font-semibold body-md text-theme-heading">
                  {element.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
