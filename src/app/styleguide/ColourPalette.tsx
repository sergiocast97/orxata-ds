export default function ColourPalette() {
  const content = [
    {
      title: "Light Theme",
      items: [
        { name: "Text Heading", class: "bg-light-darkest" },
        { name: "Text Copy", class: "bg-light-dark" },
        { name: "Stroke Strong", class: "bg-light-medium" },
        { name: "Stroke Weak", class: "bg-light-light" },
        { name: "Filling", class: "bg-light-lightest" },
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
        { name: "Filling", class: "bg-dark-dark" },
        { name: "Background", class: "bg-dark-darkest" },
      ],
    },
  ];
  return (
    <div>
      <h3 className="font-heading mb-8 text-5xl font-bold">Colour Palette</h3>
      <div className="space-y-8">
        {content.map((palette, index) => {
          return (
            <div key={index} className="">
              <h4 className="font-heading mb-6 text-4xl font-bold">
                {palette.title}
              </h4>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {palette.items.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={` ${item.class} size-32 rounded-xl border border-neutral-500/50`}
                      ></div>

                      <p className="body-md text-light-dark dark:text-dark-lightest mt-1 font-semibold">
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
