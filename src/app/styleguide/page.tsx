//import Image from 'next/image';
import Typography from "./Typography";
import ColourPalette from "./ColourPalette";
import Iconography from "./Iconography";

import NavigationOneBlock from "../blocks/navigation/NavigationOne";
import NavigationTwoBlock from "../blocks/navigation/NavigationTwo";
import NavigationThreeBlock from "../blocks/navigation/NavigationThree";
import HeroOneBlock from "../blocks/hero/HeroOne";
import HeroTwoBlock from "../blocks/hero/HeroTwo";
import HeroThreeBlock from "../blocks/hero/HeroThree";
import TextOneBlock from "../blocks/text/TextOne";
import FeatureOneBlock from "../blocks/feature/FeatureOne";
import FeatureTwoBlock from "../blocks/feature/FeatureTwo";
import TextTwoBlock from "../blocks/text/TextTwo";
import CardOneBlock from "../blocks/card/CardOne";

export default function Home() {
  return (
    <>
      <section data-theme="dark">
        <div className="bg-light-white dark:bg-dark-darkest text-light-darkest dark:text-dark-white">
          <div className="container space-y-16 py-8 pb-24 lg:pt-12">
            <Typography />
            <ColourPalette />
            <Iconography />
          </div>
        </div>
      </section>
      <>
        <NavigationOneBlock theme="dark" />
        <NavigationTwoBlock theme="dark" />
        <NavigationThreeBlock theme="dark" />
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
        <HeroTwoBlock
          theme="dark"
          byline="Lorem ipsum dolor sit amet"
          headline="Impactful Headline about Product"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra eros bibendum sapien sagittis, ac efficitur felis accumsan. Vivamus ut efficitur risus."
          cta={{ children: "Learn more", href: "#" }}
          img={{
            width: 592,
            height: 437,
            url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
            alt: "Hero Image",
          }}
        />
        <HeroThreeBlock
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
        <TextTwoBlock theme="dark" byline="Lorem ipsum dolor sit amet" headline="Text Block Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus ligula, malesuada
          eget neque accio, condimentum pulvinar erat. Proin molestie varius urna non consectetur.
        </TextTwoBlock>
        3
        <FeatureOneBlock
          theme="dark"
          byline="Lorem ipsum dolor sit"
          headline="Feature Block Title"
          mediaDirection="left"
          cta={{ children: "Learn more", href: "#" }}
          img={{
            width: 488,
            height: 352,
            url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
            alt: "Feature Block Image",
          }}
        >
          Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec, dapibus ac arcu.
          Vivamus erat massa, posuere sit amet orci at, viverra hendrerit sem.
        </FeatureOneBlock>
        <FeatureTwoBlock
          byline="Lorem ipsum dolor sit"
          headline="Feature Block Title"
          mediaDirection="right"
          cta={{ children: "Learn more", href: "#" }}
          img={{
            width: 488,
            height: 352,
            url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
            alt: "Feature Block Image",
          }}
        >
          Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec, dapibus ac arcu.
          Vivamus erat massa, posuere sit amet orci at, viverra hendrerit sem.
        </FeatureTwoBlock>
        <CardOneBlock
          theme="dark"
          heading={{
            byline: "Lorem ipsum dolor sit",
            headline: "Card Block Title",
            copy: "Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec sem, dapibus ac arcu. Vivamus erat massa, posuere ame viverra.",
            ctas: [
              { href: "#", children: "Learn more" },
              { href: "#", children: "Learn more" },
            ],
          }}
          cards={[
            {
              img: {
                width: 488,
                height: 352,
                url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
                alt: "Feature Block Image",
              },
              byline: "Subtitle lorem ipsum",
              headline: "Lorem ipsum dolor sit amet",
              copy: "Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec sem, dapibus ac abc arcu vivamus erat.",
              cta: { href: "#", children: "Learn more" },
            },
            {
              img: {
                width: 488,
                height: 352,
                url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
                alt: "Feature Block Image",
              },
              byline: "Subtitle lorem ipsum",
              headline: "Lorem ipsum dolor sit amet",
              copy: "Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec sem, dapibus ac abc arcu vivamus erat.",
              cta: { href: "#", children: "Learn more" },
            },
            {
              img: {
                width: 488,
                height: 352,
                url: "https://hwhfyb8e9b.ufs.sh/f/E8jMENC68tjA4lvPTjxfshF9qjNVRickg0ZzuwdolY726EL5",
                alt: "Feature Block Image",
              },
              byline: "Subtitle lorem ipsum",
              headline: "Lorem ipsum dolor sit amet",
              copy: "Donec vel auctor augue. Nulla metus sem, pellentesque ut cursus nec sem, dapibus ac abc arcu vivamus erat.",
              cta: { href: "#", children: "Learn more" },
            },
          ]}
        />
      </>
    </>
  );
}
