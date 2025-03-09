import Heading from "@/patterns/Heading";
import CardOne from "@/patterns/CardOne";

export default function CardOneBlock({ theme = "dark" }: CardBlockProps) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white overflow-hidden">
        <div className="container py-8 lg:py-12">
          <Heading
            theme={theme}
            centered={false}
            byline="Lorem ipsum dolor sit"
            headline="Card Block Title"
            copy="Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec sem, dapibus ac arcu. Vivamus erat massa, posuere ame viverra."
          />
          <div className="-mx-8 overflow-x-auto px-8 pb-8 lg:mx-0 lg:overflow-hidden lg:px-0 lg:pb-0">
            <div className="flex items-stretch gap-8 lg:grid lg:grid-cols-3">
              {[{}, {}, {}].map((card, index) => (
                <CardOne
                  img={{
                    width: 488,
                    height: 352,
                    url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
                    alt: "Feature Block Image",
                  }}
                  byline="Subtitle lorem ipsum"
                  headline="Lorem ipsum dolor sit amet"
                  copy="Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec sem, dapibus ac abc arcu vivamus erat."
                  key={index}
                  cta={{ href: "#", children: "Learn more" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
