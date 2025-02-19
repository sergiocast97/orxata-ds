export default function ColourPalette() {
  const content = [
    {
      title: "Light Theme",
      items: [
        { name: "Text Heading", class: "bg-theme-900" },
        { name: "Text Copy", class: "bg-theme-600" },
        { name: "Stroke Strong", class: "bg-theme-500" },
        { name: "Stroke Weak", class: "bg-theme-200" },
        { name: "Filling", class: "bg-theme-050" },
        { name: "Background", class: "bg-theme-000" },
      ],
    },
    {
      title: "Dark Theme",
      items: [
        { name: "Text Heading", class: "bg-theme-000" },
        { name: "Text Copy", class: "bg-theme-300" },
        { name: "Stroke Strong", class: "bg-theme-400" },
        { name: "Stroke Weak", class: "bg-theme-600" },
        { name: "Filling", class: "bg-theme-800" },
        { name: "Background", class: "bg-theme-900" },
      ],
    },
  ];
  return (
    <div>
      <h3 className="mb-8 text-5xl font-bold font-heading">Colour Palette</h3>
      <div className="space-y-8">
        {content.map((palette, index) => {
          return (
            <div key={index} className="">
              <h4 className="mb-6 text-4xl font-bold font-heading">{palette.title}</h4>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {palette.items.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={` ${item.class} border border-theme-500/50 size-32 rounded-xl `}
                      ></div>

                      <p className="mt-1 font-semibold body-md text-theme-600 dark:text-theme-200">
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
