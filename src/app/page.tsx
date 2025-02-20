import NavigationOneBlock from "./blocks/navigation/NavigationOne";
import NavigationTwoBlock from "./blocks/navigation/NavigationTwo";
import NavigationThreeBlock from "./blocks/navigation/NavigationThree";
import HeroOneBlock from "./blocks/hero/HeroOne";
import HeroTwoBlock from "./blocks/hero/HeroTwo";
import HeroThreeBlock from "./blocks/hero/HeroThree";
import TextOneBlock from "./blocks/text/TextOne";
import FeatureOneBlock from "./blocks/feature/FeatureOne";
import FeatureTwoBlock from "./blocks/feature/FeatureTwo";
import TextTwoBlock from "./blocks/text/TextTwo";

export default function Home() {
  return (
    <>
      <NavigationOneBlock theme="dark" />
      <NavigationTwoBlock theme="dark" />
      <NavigationThreeBlock theme="dark" />

      <HeroOneBlock
        theme="dark"
        byline="Lorem ipsum dolor sit amet"
        headline="Impactful Headline about Product"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra eros bibendum sapien sagittis, ac efficitur felis accumsan. Vivamus ut efficitur risus."
        cta={{ text: "Learn more", url: "#" }}
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
        cta={{ text: "Learn more", url: "#" }}
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
        cta={{ text: "Learn more", url: "#" }}
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

      <FeatureOneBlock
        byline="Lorem ipsum dolor sit"
        headline="Feature Block Title"
        mediaDirection="left"
        cta={{ text: "Learn more", url: "#" }}
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
        cta={{ text: "Learn more", url: "#" }}
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
    </>
  );
}
