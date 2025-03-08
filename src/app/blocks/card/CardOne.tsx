import Heading from "@/app/patterns/Heading";
import CardOne from "@/app/patterns/CardOne";

export default function CardOneBlock({ theme = "dark", heading, cards }: CardBlock) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white overflow-hidden">
        <div className="container py-8 lg:py-12">
          <Heading
            theme={theme}
            centered={false}
            byline={heading.byline}
            headline={heading.headline}
            copy={heading.copy}
            ctas={heading.ctas}
          />
          <div className="-mx-8 overflow-x-auto px-8 pb-8 lg:mx-0 lg:overflow-hidden lg:px-0 lg:pb-0">
            <div className="flex items-stretch gap-8 lg:grid lg:grid-cols-3">
              {cards.map((card, index) => (
                <CardOne
                  img={card.img}
                  byline={card.byline}
                  headline={card.headline}
                  copy={card.copy}
                  key={index}
                  cta={card.cta}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
