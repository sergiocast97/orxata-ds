import BlockHeading from "@/app/patterns/BlockHeading";
import Card from "@/app/patterns/Card";

export default function CardOneBlock({
  theme = "dark",
  blockHeading,
  cards,
}: CardBlock) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
        <div className="container py-8 lg:py-12">
          <BlockHeading
            theme={theme}
            byline={blockHeading.byline}
            headline={blockHeading.headline}
            copy={blockHeading.copy}
            ctas={blockHeading.ctas}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {cards.map((card, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
