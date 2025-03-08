import NavigationOneBlock from "./blocks/navigation/NavigationOne";
import HeroOneBlock from "./blocks/hero/HeroOne";
import TextOneBlock from "./blocks/text/TextOne";

export default function Home() {
  return (
    <>
      <NavigationOneBlock theme="dark" />
      <HeroOneBlock
        theme="dark"
        byline="Lorem ipsum dolor sit amet"
        headline="Impactful Headline about Product"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra eros bibendum sapien sagittis, ac efficitur felis accumsan. Vivamus ut efficitur risus."
        cta={{ children: "Learn more", href: "#" }}
        img={{
          width: 1280,
          height: 360,
          url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
          alt: "Hero Image",
        }}
      />
      <TextOneBlock theme="dark" byline="Lorem ipsum dolor sit amet" headline="Text Block Title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus ligula, malesuada
        eget neque accio, condimentum pulvinar erat. Proin molestie varius urna non consectetur.
      </TextOneBlock>
    </>
  );
}
