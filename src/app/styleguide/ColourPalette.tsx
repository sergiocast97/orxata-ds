export default function ColourPalette() {
  const content = [
    {
      title: "Light Theme",
      items: [
        { name: "Text Heading", class: "bg-light-darkest" },
        { name: "Text Copy", class: "bg-light-dark" },
        { name: "Stroke Strong", class: "bg-light-medium" },
        { name: "Stroke Weak", class: "bg-light-light" },
        { name: "Foreground", class: "bg-light-lightest" },
        { name: "Background", class: "bg-light-white" },
      ],
    },
    {
      title: "Dark Theme",
      items: [
        { name: "Text Heading", class: "bg-light-white" },
        { name: "Text Copy", class: "bg-dark-lightest" },
        { name: "Stroke Strong", class: "bg-dark-light" },
        { name: "Stroke Weak", class: "bg-dark-medium" },
        { name: "Foreground", class: "bg-dark-dark" },
        { name: "Background", class: "bg-dark-darkest" },
      ],
    },
  ];
  return (
    <div>
      <h2 className="font-heading mb-4 text-3xl font-bold md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl">
        Colour Palette
      </h2>
      <div className="space-y-8">
        {content.map((palette, index) => {
          return (
            <div key={index} className="">
              <h3 className="font-heading mb-4 text-2xl font-bold md:text-3xl lg:mb-6 lg:text-4xl">
                {palette.title}
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {palette.items.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={` ${item.class} rounded-medium size-24 border border-neutral-500/50 md:size-32`}
                      ></div>

                      <p className="text-light-dark dark:text-dark-lightest mt-1 text-base font-semibold">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
