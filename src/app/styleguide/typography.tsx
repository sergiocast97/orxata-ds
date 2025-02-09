export default function Typography() {
  const content = [
    {
      name: 'Heading',
      fontName: 'Poppins',
      items: [
        { name: 'Heading 1', class: 'head-h1' },
        { name: 'Heading 2', class: 'head-h2' },
        { name: 'Heading 3', class: 'head-h3' },
        { name: 'Heading 4', class: 'head-h4' },
        { name: 'Heading 5', class: 'head-h5' },
      ],
    },
    {
      name: 'Body',
      fontName: 'Inter',
      items: [
        { name: 'Body 2xl', class: 'body-2xl' },
        { name: 'Body xl', class: 'body-xl' },
        { name: 'Body lg', class: 'body-lg' },
        { name: 'Body md', class: 'body-md' },
        { name: 'Body sm', class: 'body-sm' },
        { name: 'Body xs', class: 'body-xs' },
      ],
    },
  ];
  return (
    <>
      <div className="container">
        <div className="flex flex-wrap gap-4 md:gap-12">
          {content.map((element, index) => {
            return (
              <div key={index}>
                <h3 className="mb-6 head-h3">
                  {element.name}:
                  <span className="font-bold"> {element.fontName}</span>
                </h3>

                <div className="space-y-2">
                  {element.items?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className={item.class}
                      >
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
    </>
  );
}
