import Heading from "@/app/patterns/Heading";
import CardTwo from "@/app/patterns/CardTwo";

export default function CardTwoBlock({ theme = "dark", heading, cards }: CardBlock) {
  return (
    <section data-theme={theme}>
      <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white overflow-hidden">
        <div className="container py-8 lg:py-12">
          <Heading
            centered={true}
            theme={theme}
            byline={heading.byline}
            headline={heading.headline}
            copy={heading.copy}
            ctas={heading.ctas}
          />
          <div className="mx-auto grid max-w-[1008px] gap-8 md:grid-cols-2">
            {cards.map((card, index) => (
              <CardTwo
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
    </section>
  );
}
