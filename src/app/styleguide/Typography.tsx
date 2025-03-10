export default function Typography() {
  const content = [
    {
      name: "Heading",
      fontName: "Poppins",
      items: [
        { name: "Heading 1", class: "font-heading font-bold text-6xl" },
        { name: "Heading 2", class: "font-heading font-bold text-5xl" },
        { name: "Heading 3", class: "font-heading font-bold text-4xl" },
        { name: "Heading 4", class: "font-heading font-bold text-2xl" },
        { name: "Heading 5", class: "font-heading font-bold text-lg" },
      ],
    },
    {
      name: "Body",
      fontName: "Inter",
      items: [
        { name: "Body 2xl", class: "text-2xl/normal" },
        { name: "Body xl", class: "text-xl/normal" },
        { name: "Body lg", class: "text-lg/normal" },
        { name: "Body md", class: "text-md/normal" },
        { name: "Body sm", class: "text-sm/normal" },
        { name: "Body xs", class: "text-xs/normal" },
      ],
    },
  ];
  return (
    <div>
      <h2 className="font-heading mb-4 text-3xl font-bold md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl">
        Typography
      </h2>
      <div className="flex flex-wrap gap-8 md:gap-12">
        {content.map((element, index) => {
          return (
            <div key={index}>
              <h3 className="font-heading mb-2 text-2xl font-bold md:mb-4 md:text-3xl lg:mb-6 lg:text-4xl">
                {element.name}: {element.fontName}
              </h3>

              <div className="space-y-2">
                {element.items?.map((item, index) => {
                  return (
                    <p key={index} className={item.class}>
                      {item.name}
                    </p>
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
